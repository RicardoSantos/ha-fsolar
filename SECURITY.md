# Security Policy

## Supported versions

Only the latest release receives security fixes. Please update before reporting.

| Version | Supported |
|---------|-----------|
| Latest  | ✅        |
| Older   | ❌        |

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Email **su.balsas.santos@gmail.com** with:

- A description of the vulnerability
- Steps to reproduce
- Potential impact

**Response times:**

- Acknowledgement: within 48 hours
- Fix for critical issues: within 14 days
- Fix for non-critical issues: next release cycle

You will be credited in the release notes unless you prefer to remain anonymous.

## Scope

**In scope:**

- XSS vulnerabilities in card rendering (injected content from API responses rendered as HTML)
- Credential exposure in the card config editor (e.g. `api_key` visible in plaintext)
- SSRF or open-redirect via the `url` configuration field

**Out of scope:**

- Vulnerabilities in [mcp-fsolar](https://github.com/RicardoSantos/mcp-fsolar) — report those to that repository
- Home Assistant core vulnerabilities — report those to the [HA security team](https://www.home-assistant.io/security/)
- Issues requiring physical access to the HA host
- Social engineering attacks

## Notes

This is a frontend-only Lovelace plugin. It runs entirely in the browser and has no server-side component. The attack surface is limited to card rendering, config editor inputs, and network requests made to the configured `url`.
