---
title: "Nix Daemon Privilege Escalation to Root via Symlink Following"
category: "known-vuln"
severity: "critical"
status: "open"
date: 2026-04-08
cve: "CVE-2026-39860"
source: "https://discourse.nixos.org/t/nix-security-advisory-privilege-escalation-via-symlink-following-during-fod-output-registration/76900"
affects: "Nix multi-user installations on Linux"
---

CVSS 9.0. Bug in the fix for CVE-2024-27297 allows symlink following during fixed-output derivation output registration. Any user allowed to submit builds (all users by default) can achieve arbitrary file writes as root and subsequent privilege escalation. Fix: Nix 2.34.5, 2.33.4, 2.32.7, 2.31.4, 2.30.4, 2.29.3, 2.28.6.
