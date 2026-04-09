---
domain: "ai"
title: "vLLM Critical RCE via Video URL Processing"
category: "framework-advisory"
severity: "critical"
status: "open"
zeroDay: false
dstActionable: false
date: 2026-03-15
cve: "CVE-2026-22778"
source: "https://www.ox.security/blog/cve-2026-22778-vllm-rce-vulnerability/"
affects: "vLLM inference servers with multimodal video support"
---

CVSS 9.8. Two-stage exploit: heap address leak via PIL error messages, then JPEG2000 decoder flaw allows arbitrary code execution. Millions of AI inference servers potentially at risk. Patched in vLLM 0.14.1.
