---
domain: "ai"
title: "LangChain Core Path Traversal in Prompt Loading"
category: "framework-advisory"
severity: "high"
status: "open"
zeroDay: false
dstActionable: false
date: 2026-03-20
cve: "CVE-2026-34070"
source: "https://advisories.gitlab.com/pkg/pypi/langchain-core/CVE-2026-34070/"
affects: "LangChain Core (Python) — all versions before 1.2.22"
---

Path traversal in legacy load_prompt functions allows access to arbitrary files on the server. Attackers can read sensitive configuration files, secrets, and credentials through crafted prompt templates. Fix: upgrade to 1.2.22+.
