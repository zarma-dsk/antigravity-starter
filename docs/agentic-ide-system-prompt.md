# agentic-ide-system-prompt.md
(Artifact: 517)

**Type:** IDE Configuration & Security Rules
**Length:** 200+ lines | 15 pages
**Time to Read:** 5 minutes
**Purpose:** System prompt for Cursor, V0, Windsurf, Google Antigravity

## Summary
Complete system prompt for AI-assisted secure code generation. 9 critical security rules that your IDE will enforce automatically.

## Key Sections
*   9 Critical Rules (non-negotiable)
*   Example Code Patterns
*   Pre-Deployment Verification Checklist
*   How to Paste into IDE (Cursor/V0/Windsurf)

## The 9 Rules
1.  **Never Hallucinate** (real packages only)
2.  **Always Validate Input** (Zod schemas)
3.  **React2Shell Defense** (CVE-2025-55182)
4.  **Supply Chain Patch** (latest versions)
5.  **Authorization on Every Call**
6.  **Rate Limiting** (DoS prevention)
7.  **Output Sanitization** (info leak prevention)
8.  **File Organization** (app/ lib/ tests/)
9.  **'use server' vs 'use client' separation**

**Who Should Read:** Developers using Cursor/V0/Windsurf
**Next File:** quickstart-cli-deployment-guide.md