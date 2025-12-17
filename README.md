# Unified Recursive Antigravity Protocol

Antigravity Starter Kit — a research-driven, production-oriented security protocol and starter scaffold for Next.js applications (Antigravity 5.1.1). This repository packages the core defensive primitives, checks, and guidance used to harden AI-assisted codebases against hallucinations, supply-chain risks, and other AI-specific vulnerabilities.

## Quick overview
- Purpose: Provide an opinionated, layered security scaffold for building web applications with AI-assisted development while minimizing synthetic/hallucination risks.
- Audience: app authors, security engineers, reviewers, and maintainers who need a concise, research-backed checklist and implementation guidance.
- Key in-repo references:
  - docs/unified-recursive-antigravity-protocol-v511-quick-reference.md
  - docs/unified-recursive-antigravity-protocol-v511-research-defense-matrix.md
  - docs/unified-recursive-antigravity-protocol-v511-research-hardened.md
  - docs/unified-recursive-antigravity-protocol-v500-implementation.md
  - docs/unified-recursive-antigravity-protocol-v511-implementation-companion.md
  - docs/unified-recursive-antigravity-protocol-v500-recursive.md
  - docs/unified-recursive-antigravity-protocol-v500-visual-reference.md
  - docs/unified-recursive-antigravity-protocol-v511-ecosystem-summary.md
  - docs/unified-recursive-antigravity-protocol-v511-synthetic-elimination-guide.md
  - docs/unified-recursive-antigravity-protocol-v500-attack-defense-mapping.md
  - docs/citations-and-references.md
  - docs/unified-recursive-antigravity-protocol-v511-citations-and-references.md

## Key features
- 7-layer security architecture (defense-in-depth tailored to AI-assisted code).
- 5 independent defensive logics and an 8-gate fortress for CI/process enforcement.
- safe-action pattern with Zod for strict input validation.
- Structured logging, token-bucket rate limiting, HTML sanitization primitives.
- Multi-scanner vetting (ESLint + semgrep/CodeQL + npm audit + custom scanners).
- Validation and vetting scripts integrated into the developer workflow.
- Research → defense mapping and quick-reference checklists included in docs/.

## Quickstart
1. Install
   ```bash
   pnpm install
   # or
   npm install
   ```
2. Run the security validation suite
   ```bash
   npm run validate:security
   ```
3. Local development
   - Add new actions using the safeAction pattern in src/app/actions/.
   - Keep domain logic in src/domain/ and repositories in src/data/.
   - Run lint, typecheck, and tests before PRs:
     - npm run lint
     - npm run typecheck
     - npm run test

See docs/unified-recursive-antigravity-protocol-v511-implementation-companion.md for implementation guidance and examples.

## Directory (high level)
.
├── .github/workflows/   # CI / validation pipeline
├── docs/                # Protocol docs, matrices, and research references
├── scripts/             # Security & validation automation
├── src/                 # Implementation (actions, libs, domain, data)
├── package.json         # Scripts & dependency manifest
└── vitest.config.ts     # Test configuration

## Included scripts (examples)
- npm run format — Prettier
- npm run lint — ESLint (security-focused rules)
- npm run typecheck — TypeScript strict checks
- npm run test — Vitest
- npm run vet:dependency — Dependency vetting / supply-chain checks
- npm run validate:security — End-to-end validation (lint + typecheck + vet + tests)

(See package.json for exact script commands and flags.)

## Security summary — at a glance
This protocol enforces multiple independent layers to reduce AI-specific and traditional risks.

5 Defense Layers:
1. Compilation — TypeScript strict + unresolved import detection + build gate + lint rules (catches mapping/naming hallucinations).
2. Execution — Adversarial tests (SQLi, XSS, auth bypass) + semantic tests (CodeHalu-style) + integration tests.
3. Analytical — ESLint security rules + semgrep/CodeQL + npm audit + custom scanners (multi-scanner consensus).
4. Process — Iteration caps, threat modeling per iteration, human code review, dependency vetting, provenance tagging.
5. Architectural — Boundary enforcement, scope limits (<100 LOC/commit), ORM-only patterns (no raw SQL), avoidance of fingerprintable patterns.

Protocol primitives highlighted in the repo:
- src/lib/logger.ts — structured, auditable logging
- src/lib/rate-limit.ts — token-bucket rate limiting
- src/lib/sanitize.ts — HTML/content sanitization

For detailed mapping of vulnerabilities → defenses, see:
- docs/unified-recursive-antigravity-protocol-v511-research-defense-matrix.md

## Quick vulnerability checklist (for reviewers)
Before approving AI-assisted code, verify:
- Adversarial tests (SQLi, XSS, auth-bypass) pass.
- Semantic correctness validated (not only functional tests).
- All functions/APIs/packages grounded in docs or code.
- No unresolved imports or naming/mapping hallucinations.
- Iteration count within allowed cap; threat model updated.
- New dependencies vetted (npm view, typo-squatting checks, npm audit clean).
- Change size small and within architectural boundaries.
- Multi-scanner consensus achieved (typecheck, lint, semgrep/CodeQL, dynamic tests).

A ready-to-use checklist is available in docs/unified-recursive-antigravity-protocol-v511-quick-reference.md.

## Research & references
This protocol synthesizes findings from 8+ academic and industry sources (Radware, CSET, IEEE, CodeHalu, ISSTA, industry reports, etc.). Full citations and the bibliography live in:
- docs/citations-and-references.md
- docs/unified-recursive-antigravity-protocol-v511-citations-and-references.md

## Contributing
- Run validations locally (lint, typecheck, tests, vet:dependency) before opening PRs.
- Add/modify tests for any behavior change; document security rationale in PR description.
- If adding dependencies, include the vetting evidence and rationale.
- Keep diffs small: prefer targeted, reviewable commits (<100 LOC).
- Follow the protocol’s iteration and threat-modeling rules (see docs/).

Look for an existing CONTRIBUTING.md in the repo; follow any repository-specific process it prescribes.

## Security reporting
Report vulnerabilities following the guidance in SECURITY.md. Use the disclosure/contact details provided there.

## Roadmap & known limitations
- The docs include implementation and research gaps, plus open tasks: see docs/unified-recursive-antigravity-protocol-v511-ecosystem-summary.md and docs/unified-recursive-antigravity-protocol-v500-implementation.md for roadmap items and known limitations.
- The protocol assumes residual risk remains and recommends continuous monitoring and adaptive defenses.

## License
See LICENSE in the repository for licensing terms.

## Maintainers / Contact
Repository owner: zarma-dsk
(Replace with team contact details or maintainer list as appropriate.)
