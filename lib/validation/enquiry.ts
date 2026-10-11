import { isEnquiryType, type EnquiryType } from "@/data/contact";

/**
 * No schema validation library is installed (see lib/actions/enquiry.ts
 * for why: this project's actual dependency history across every prior
 * milestone has consistently avoided adding zod/react-hook-form, and
 * Milestone 14 explicitly directs determining whether native FormData
 * validation is sufficient before installing anything). A single
 * contact form with nine plain fields does not justify a schema
 * library; this hand-written validator is the entire authoritative
 * server-side check.
 */

export interface EnquiryFieldErrors {
  name?: string;
  email?: string;
  organization?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
  consent?: string;
}

export interface NormalizedEnquiry {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  enquiryType: EnquiryType;
  message: string;
}

export type EnquiryResultStatus =
  | "success"
  | "validation_error"
  | "configuration_error"
  | "delivery_error"
  | "unknown_error";

export interface EnquiryResult {
  status: EnquiryResultStatus;
  message: string;
  fieldErrors?: EnquiryFieldErrors;
}

interface ValidationSuccess {
  ok: true;
  data: NormalizedEnquiry;
}

interface ValidationFailure {
  ok: false;
  fieldErrors: EnquiryFieldErrors;
}

// Reasonable server-side length limits (Milestone 14, Request Size): long
// enough for any legitimate enquiry, short enough to reject obviously
// malformed or abusive payloads.
const LIMITS = {
  name: 100,
  email: 254,
  organization: 150,
  phone: 30,
  message: 4000,
} as const;

const MIN_MESSAGE_LENGTH = 10;

// A deliberately simple, permissive email shape check. Full RFC 5322
// validation is not the goal here: the email address is only ever used
// as a reply-to value passed through the provider's own API field
// (never concatenated into a raw header, see lib/email/index.ts), so
// this only needs to catch obviously malformed input.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: FormDataEntryValue | null, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

/**
 * The single authoritative validator for the enquiry form. Never trusts
 * the browser: re-checks every field regardless of what client-side
 * `required`/`type="email"` attributes already caught, since those are
 * a UX convenience only (Milestone 14, Validation Experience).
 */
export function validateEnquiry(formData: FormData): ValidationSuccess | ValidationFailure {
  const fieldErrors: EnquiryFieldErrors = {};

  const name = normalizeText(formData.get("name"), LIMITS.name);
  if (!name) {
    fieldErrors.name = "Enter your name.";
  }

  const email = normalizeText(formData.get("email"), LIMITS.email).toLowerCase();
  if (!email) {
    fieldErrors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  const organization = normalizeText(formData.get("organization"), LIMITS.organization) || undefined;
  const phone = normalizeText(formData.get("phone"), LIMITS.phone) || undefined;

  const enquiryTypeRaw = normalizeText(formData.get("enquiryType"), 40);
  if (!enquiryTypeRaw || !isEnquiryType(enquiryTypeRaw)) {
    fieldErrors.enquiryType = "Choose an enquiry type.";
  }

  const message = normalizeText(formData.get("message"), LIMITS.message);
  if (!message) {
    fieldErrors.message = "Enter a message.";
  } else if (message.length < MIN_MESSAGE_LENGTH) {
    fieldErrors.message = "Enter a few more details so NUVAIX GROUP can help.";
  }

  const consent = formData.get("consent");
  if (consent !== "on") {
    fieldErrors.consent = "Confirm you agree to be contacted about this enquiry.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      organization,
      phone,
      enquiryType: enquiryTypeRaw as EnquiryType,
      message,
    },
  };
}
