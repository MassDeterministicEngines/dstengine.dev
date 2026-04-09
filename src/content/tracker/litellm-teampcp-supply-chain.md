---
domain: "ai"
title: "LiteLLM/Trivy/KICS Supply Chain Compromise (TeamPCP)"
category: "supply-chain"
severity: "critical"
status: "open"
zeroDay: false
dstActionable: false
date: 2026-03-24
source: "https://semgrep.dev/blog/2026/the-teampcp-credential-infostealer-chain-attack-reaches-pythons-litellm/"
affects: "LiteLLM (3.4M daily downloads), Trivy, KICS, Telnyx"
---

TeamPCP compromised four major open-source projects in rapid succession (March 19-27). Malicious versions harvest AWS/GCP/Azure tokens, SSH keys, and Kubernetes credentials. Three-stage payload with persistent backdoor.
