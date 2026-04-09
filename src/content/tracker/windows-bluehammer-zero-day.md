---
domain: "code"
title: "Windows 'BlueHammer' Zero-Day LPE — Exploit Code Public, No Patch"
category: "patch-needed"
severity: "high"
status: "open"
zeroDay: true
dstActionable: false
date: 2026-04-03
source: "https://www.bleepingcomputer.com/news/security/disgruntled-researcher-leaks-bluehammer-windows-zero-day-exploit/"
affects: "Windows (multiple versions, unpatched)"
---

Researcher released fully functional LPE exploit after dispute with MSRC. Combines TOCTOU race condition with path confusion to access the Security Account Manager (SAM) database containing password hashes, enabling escalation to SYSTEM. Not 100% reliable but works well enough to be a credible threat. No CVE assigned. No official patch exists.
