"use client";

import { useActionState } from "react";
import { submitEnquiry } from "@/lib/actions/enquiry";
import type { EnquiryResult } from "@/lib/validation/enquiry";
import { enquiryTypes, isEnquiryType, type EnquiryType } from "@/data/contact";
import { Field, Input, Textarea, Select, Checkbox, Label } from "@/components/ui/form";
import { Button } from "@/components/ui/Button";

const initialState: EnquiryResult | null = null;

export interface EnquiryFormProps {
  /** Pre-selects the Enquiry Type field. Read server-side from the
   * page's own `searchParams` (see app/contact/page.tsx) rather than
   * via useSearchParams() here, so /contact stays a plain Server
   * Component render with the correct value already in the markup,
   * with no client-side fixup or Suspense fallback flash needed. */
  defaultType?: EnquiryType;
}

/**
 * The one Client Component boundary on /contact (Milestone 14, Client
 * Component Boundary): the page itself stays a Server Component; only
 * this interactive form shell needs client state (useActionState).
 *
 * Wired directly to the submitEnquiry Server Action; no fetch, no
 * /api route. Field values are left as native uncontrolled inputs, so
 * a validation round-trip naturally preserves whatever the visitor
 * typed (the DOM nodes are not remounted) without extra state.
 */
export function EnquiryForm({ defaultType }: EnquiryFormProps) {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);
  const prefilledType = isEnquiryType(defaultType) ? defaultType : "";

  if (state?.status === "success") {
    return (
      <div role="status" className="border-border rounded-xl border p-8 text-center sm:p-12">
        <h3 className="heading-h3">Enquiry received.</h3>
        <p className="copy-body text-muted-foreground mx-auto mt-3 max-w-md">{state.message}</p>
      </div>
    );
  }

  const fieldErrors = state?.status === "validation_error" ? state.fieldErrors : undefined;
  const topLevelMessage =
    state && state.status !== "validation_error" ? state.message : undefined;

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot: invisible and unreachable by sighted users, keyboard
          users and assistive technology alike. A 1x1 clipped box avoids
          any layout/scroll side effects (unlike far off-screen
          absolute positioning). */}
      <div className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="hp-website">Leave this field blank</label>
        <input type="text" id="hp-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {topLevelMessage ? (
        <p role="alert" className="copy-body-sm text-error border-error rounded-md border p-4">
          {topLevelMessage}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={fieldErrors?.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            aria-describedby={fieldErrors?.name ? "name-error" : undefined}
            state={fieldErrors?.name ? "invalid" : "default"}
          />
        </Field>
        <Field label="Email" htmlFor="email" required error={fieldErrors?.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            aria-describedby={fieldErrors?.email ? "email-error" : undefined}
            state={fieldErrors?.email ? "invalid" : "default"}
          />
        </Field>
        <Field label="Organization" htmlFor="organization" description="Optional">
          <Input
            id="organization"
            name="organization"
            autoComplete="organization"
            maxLength={150}
            aria-describedby="organization-description"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" description="Optional">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            aria-describedby="phone-description"
          />
        </Field>
      </div>

      <Field
        label="Enquiry type"
        htmlFor="enquiryType"
        required
        error={fieldErrors?.enquiryType}
      >
        <Select
          id="enquiryType"
          name="enquiryType"
          required
          defaultValue={prefilledType}
          aria-describedby={fieldErrors?.enquiryType ? "enquiryType-error" : undefined}
          state={fieldErrors?.enquiryType ? "invalid" : "default"}
        >
          <option value="" disabled>
            Choose an enquiry type
          </option>
          {enquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor="message" required error={fieldErrors?.message}>
        <Textarea
          id="message"
          name="message"
          required
          maxLength={4000}
          aria-describedby={fieldErrors?.message ? "message-error" : undefined}
          state={fieldErrors?.message ? "invalid" : "default"}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            name="consent"
            required
            aria-describedby={fieldErrors?.consent ? "consent-error" : undefined}
            state={fieldErrors?.consent ? "invalid" : "default"}
          />
          <Label htmlFor="consent">
            I agree that NUVAIX GROUP may contact me about this enquiry.
          </Label>
        </div>
        {fieldErrors?.consent ? (
          <p id="consent-error" role="alert" className="copy-body-sm text-error mt-2">
            {fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <p className="copy-body-sm text-muted-foreground">
        This form does not store your information in a database. If email delivery is configured,
        your enquiry is sent by email only, to respond to what you have asked. See the{" "}
        <a href="/privacy" className="text-champagne-gold hover:text-champagne-gold/80">
          Privacy Policy
        </a>{" "}
        for more.
      </p>

      <Button type="submit" variant="gold" loading={isPending}>
        {isPending ? "Sending" : "Send Enquiry"}
      </Button>
    </form>
  );
}
