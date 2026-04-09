---
domain: "code"
title: "Adobe Reader Zero-Day — Active Exploitation, No Patch"
category: "patch-needed"
severity: "critical"
status: "open"
zeroDay: true
dstActionable: false
date: 2026-03-26
source: "https://cyberpress.org/sophisticated-zero-day-exploit/"
affects: "Adobe Reader (all current versions)"
---

Unpatched zero-day actively exploited in the wild. Crafted PDF abuses unpatched logic flaw in Adobe Reader's JavaScript engine to invoke privileged Acrobat APIs. Opening the PDF triggers RCE with no further interaction. Very low VirusTotal detection. Multiple obfuscation layers defeat static and behavioral detection. No CVE assigned yet. No patch available.
