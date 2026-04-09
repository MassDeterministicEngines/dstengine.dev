---
title: "Qilin + Warlock Ransomware — BYOVD Killing 300+ EDR Products"
category: "novel-attack"
severity: "critical"
status: "open"
date: 2026-04-06
source: "https://thehackernews.com/2026/04/qilin-and-warlock-ransomware-use.html"
affects: "Nearly every EDR vendor — 300+ products targeted"
---

Qilin deploys malicious msimg32.dll that terminates 300+ EDR drivers from nearly every security vendor. Warlock uses legitimate NSecKrnl.sys driver for kernel-level EDR killing, plus TightVNC, VS Code tunneling, and Cloudflare tunnels for C2. Reported by Cisco Talos and Trend Micro.
