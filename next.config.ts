import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16's dev server otherwise appends an AI-agent note to
  // CLAUDE.md/AGENTS.md on every `next dev` run. CLAUDE.md is this
  // project's governing document, not a file tooling should mutate.
  agentRules: false,
};

export default nextConfig;
