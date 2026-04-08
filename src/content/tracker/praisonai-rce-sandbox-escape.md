---
title: "PraisonAI Critical RCE + Sandbox Escape (Two CVEs)"
category: "framework-advisory"
severity: "critical"
status: "open"
date: 2026-04-08
cve: "CVE-2026-39890"
source: "https://www.thehackerwire.com/vulnerability/CVE-2026-39890/"
affects: "PraisonAI multi-agent AI framework"
---

Two critical vulns disclosed April 8. CVE-2026-39890 (CVSS 9.8): YAML RCE via js-yaml dangerous tags (!js/function) in agent definition files. CVE-2026-39888 (CVSS 9.9): Sandbox escape via incomplete AST blocklist — missing __traceback__, tb_frame, f_back, f_builtins allows frame-traversal chain exposing real Python builtins. Fix: PraisonAI 4.5.115 / 1.5.115.
