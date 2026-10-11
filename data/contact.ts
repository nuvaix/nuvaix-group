export type EnquiryType =
  | "general"
  | "business-partnership"
  | "technology"
  | "paint"
  | "training"
  | "investment"
  | "supplier-vendor"
  | "careers"
  | "project";

export interface EnquiryTypeOption {
  value: EnquiryType;
  label: string;
}

/**
 * The verified enquiry-type taxonomy (docs/03-page-specifications.md:
 * "General, Business Partnership, Technology, Paint, Training,
 * Investment, Supplier/Vendor, Careers, Project"). The single source of
 * truth for the Contact form's Enquiry Type field and for the
 * `?type=` query parameter other pages may link with; do not hardcode
 * this list elsewhere. The "Paint" label is rendered as "NUVAIX Paint"
 * for brand consistency with the rest of the site (a presentation
 * choice, the underlying verified category is unchanged).
 */
export const enquiryTypes: EnquiryTypeOption[] = [
  { value: "general", label: "General" },
  { value: "business-partnership", label: "Business Partnership" },
  { value: "technology", label: "Technology" },
  { value: "paint", label: "NUVAIX Paint" },
  { value: "training", label: "Training" },
  { value: "investment", label: "Investment" },
  { value: "supplier-vendor", label: "Supplier/Vendor" },
  { value: "careers", label: "Careers" },
  { value: "project", label: "Project" },
];

export const enquiryTypeValues: EnquiryType[] = enquiryTypes.map((type) => type.value);

/** Shared type guard so the server validator and the client form's
 * `?type=` prefill agree on exactly one definition of "a real enquiry
 * type value" instead of duplicating the check. */
export function isEnquiryType(value: string | null | undefined): value is EnquiryType {
  return typeof value === "string" && (enquiryTypeValues as string[]).includes(value);
}
