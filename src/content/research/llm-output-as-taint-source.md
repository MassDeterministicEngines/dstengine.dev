---
title: "LLM Output as a Taint Source for Deterministic Security Testing"
date: 2026-04-08
abstract: "LLM output is strictly more dangerous than HTTP input due to trust laundering, structural sophistication, transitive taint, and nondeterminism. We propose a mapper-level phoneme extension for DST that classifies 50+ LLM SDK API response patterns as tainted INGRESS, enabling detection of the full OWASP LLM05 category with zero changes to existing CWE verifiers."
tags: ["llm-security", "taint-analysis", "owasp"]
status: draft
---

## The Question

Is `completion.choices[0].message.content` (OpenAI) equivalent to `req.body` (Express.js) from a static analysis taint perspective?

## The Answer

**Yes, but it's worse.** LLM output carries four properties HTTP input does not:

### Trust Laundering
LLM output appears to originate within the application's trust boundary. Developers who would never concatenate `req.body` into SQL will concatenate `aiResponse` because it comes from "their AI." This cognitive vulnerability has been documented in CVE-2024-8309 (LangChain GraphCypher).

### Structural Sophistication
HTTP input is typically raw strings. LLM output is syntactically valid code, complete SQL queries, properly structured JSON. A model asked to generate SQL will produce valid SQL — including valid SQL injection payloads.

### Transitive Taint
HTTP `req.body` has one source: the remote client. LLM output is influenced by: the user prompt, retrieved documents (RAG), training data, tool outputs, conversation history, and stochastic behavior. The taint source is diffuse and untraceable.

### Nondeterminism
The same prompt can produce different outputs. An attacker can retry until the model produces a successful injection payload.

## Evidence

- **CVE-2023-29374**: LangChain LLMMathChain → exec() → RCE (CVSS 9.8)
- **CVE-2024-8309**: LangChain GraphCypher → Cypher injection → DB compromise
- **CVE-2025-68664**: LangChain serialization injection via response metadata (CVSS 9.3)
- **CVE-2025-32711**: EchoLeak → zero-click M365 Copilot data exfiltration (CVSS 9.3)
- **TaintP2X (ICSE 2026)**: 101 taint paths in 75 repos, 77.1% recall
- **RLHF bypass**: Safety training undone by 10-100 fine-tuning examples

## Implementation in DST

**Cardinal rule: Smart mapper, dumb verifier.**

Add ~200 lines of phoneme mappings per language for LLM SDK response patterns. Classify all LLM SDK response content accessors as INGRESS with subtype `llm_response`. The verifiers need ZERO changes — they already know `cursor.execute(tainted)` = CWE-89.

## The Key Insight

**LLM API calls are taint TRANSFORMERS, not taint boundaries.** User input goes in, and a string derived from that input comes out. DST's existing taint flow analysis handles this naturally once the mapper classifies LLM calls correctly.
