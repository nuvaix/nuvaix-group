"use server";

import { validateEnquiry, type EnquiryResult } from "@/lib/validation/enquiry";
import { sendEnquiryEmail } from "@/lib/email";

// A field real visitors never see or fill (kept out of the accessible
// tree and tab order in components/contact/EnquiryForm.tsx). Any
// non-empty value here means an automated submission. Milestone 14,
// Spam Protection: this is the project's one spam-protection mechanism
// beyond server-side validation itself; no external CAPTCHA service or
// rate-limiting dependency is installed (see the final report for why).
const HONEYPOT_FIELD = "website";

const SUCCESS_MESSAGE =
  "Your enquiry has been received. NUVAIX GROUP will review it and respond as appropriate.";
const FAILURE_MESSAGE = "We could not send your enquiry right now. Please try again.";

/**
 * The sole submission mechanism for the Contact form (Milestone 14:
 * Server Actions only, no /api/enquiry route, no route handler). Bound
 * to the form via React 19's useActionState in
 * components/contact/EnquiryForm.tsx.
 *
 * Never returns a raw exception, provider detail, environment variable
 * name, or filesystem path to the browser: every branch returns one of
 * a small set of serializable, safe EnquiryResult shapes.
 */
export async function submitEnquiry(
  _previousState: EnquiryResult | null,
  formData: FormData,
): Promise<EnquiryResult> {
  const validation = validateEnquiry(formData);

  if (!validation.ok) {
    return {
      status: "validation_error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: validation.fieldErrors,
    };
  }

  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    // Respond exactly like a genuine successful submission, without
    // sending anything, so the response itself teaches an automated
    // submitter nothing about having been caught.
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  try {
    const result = await sendEnquiryEmail(validation.data);

    if (!result.ok) {
      // Detail stays server-side only; the browser only ever sees
      // FAILURE_MESSAGE regardless of the underlying reason.
      console.error("[enquiry] delivery failed:", result.reason, result.detail);
      return {
        status: result.reason === "not_configured" ? "configuration_error" : "delivery_error",
        message: FAILURE_MESSAGE,
      };
    }

    return { status: "success", message: SUCCESS_MESSAGE };
  } catch (error) {
    console.error("[enquiry] unexpected error:", error);
    return { status: "unknown_error", message: FAILURE_MESSAGE };
  }
}
