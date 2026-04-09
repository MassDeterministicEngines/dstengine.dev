---
domain: "code"
title: "Docker Engine AuthZ Bypass — AI Agent Sandbox Escape Demonstrated"
category: "known-vuln"
severity: "high"
status: "open"
zeroDay: false
dstActionable: false
date: 2026-04-08
cve: "CVE-2026-34040"
source: "https://thehackernews.com/2026/04/docker-cve-2026-34040-lets-attackers.html"
affects: "Docker Engine before 29.3.1"
---

Incomplete fix for CVE-2024-41110. When API request body exceeds 1MB, Docker middleware silently drops it before AuthZ plugin inspection, causing automatic approval. Attackers create privileged containers with host filesystem access. An AI coding agent (OpenClaw) was demonstrated being tricked via prompt injection to exploit this flaw. Fix: Docker Engine 29.3.1.
