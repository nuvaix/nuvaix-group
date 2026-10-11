import type { NextConfig } from "next";

// Milestone 19: the narrowest Content-Security-Policy that actually
// matches this application's real, inspected output (see the
// Milestone 19 report for the exact evidence). Next.js's own React
// Server Components streaming payload requires inline <script> tags
// with no external src (self.__next_f.push(...), used for hydration),
// and next/image renders an inline style="color:transparent" attribute
// on every <img> it outputs. Both are core, unmodifiable framework
// behavior, not something this application's own code introduces, so
// script-src and style-src both need 'unsafe-inline' unless a
// nonce-based CSP is added via middleware, deliberately not introduced
// this milestone (a genuinely new architectural piece, not a "safely
// implementable without knowing the host" change, per the Milestone 19
// instructions). The application has zero external requests (confirmed
// by direct source search across app/, components/, data/, lib/), so
// every other directive stays at 'self' with no external allowance.
// HSTS is intentionally not set here: it depends on HTTPS termination,
// which depends on the eventual hosting provider (documented as a
// deployment-level requirement in the Milestone 19 report).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self'",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Next.js 16's dev server otherwise appends an AI-agent note to
  // CLAUDE.md/AGENTS.md on every `next dev` run. CLAUDE.md is this
  // project's governing document, not a file tooling should mutate.
  agentRules: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
