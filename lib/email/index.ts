import type { NormalizedEnquiry } from "@/lib/validation/enquiry";

export interface EmailSendResult {
  ok: boolean;
  /** Distinguishes "no provider configured" from "the provider itself
   * failed", without exposing either detail to the browser (Milestone
   * 14, Recipient Architecture / Error Handling). */
  reason?: "not_configured" | "provider_error";
  /** Internal detail for server-side logs only. Never sent to the
   * client. */
  detail?: string;
}

/**
 * The single seam between the enquiry Server Action and a real email
 * provider.
 *
 * No email provider has been approved yet (see .env.example:
 * EMAIL_PROVIDER_API_KEY and CONTACT_RECIPIENT_EMAIL are both
 * documented, unset placeholders; docs/17-architecture-plan.md
 * explicitly deferred this choice to this milestone, and no provider
 * decision has since been recorded anywhere in the repository or in
 * this milestone's own instructions). Per this milestone's explicit
 * instruction, no provider is invented or installed here.
 *
 * This function fails safely and reports `reason: "not_configured"`
 * until a provider is chosen and the two environment variables above
 * are set. Wiring a real provider later means editing only this one
 * function; lib/actions/enquiry.ts and the UI do not change.
 *
 * This module is only ever imported from lib/actions/enquiry.ts (a
 * "use server" module). No `server-only` package guard is installed
 * for this (Milestone 14, prefer zero new dependencies): correct
 * import discipline is enough here, and even an accidental client
 * import could not leak the actual secret value, since Next.js strips
 * non-`NEXT_PUBLIC_` environment variables from the client bundle.
 *
 * The recipient address is read from an environment variable, never
 * hardcoded in source (Milestone 14, Recipient Architecture): no
 * enquiry is ever sent to a developer's personal address.
 */
export async function sendEnquiryEmail(payload: NormalizedEnquiry): Promise<EmailSendResult> {
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !recipient) {
    return { ok: false, reason: "not_configured", detail: "Email provider is not configured." };
  }

  // No provider is approved yet, so there is no call to make. Once one
  // is chosen, its request goes here, passing `payload` through the
  // provider's own typed API fields (subject/body/reply-to) rather
  // than concatenating any value into a raw email header, per
  // Milestone 14's email injection guidance. `recipient` and `apiKey`
  // above are already validated as present at this point.
  void payload;
  return { ok: false, reason: "not_configured", detail: "Email provider is not implemented yet." };
}
