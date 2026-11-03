# Verification

Completed November 2, 2026.

- Production build: strict TypeScript compilation and Vite production bundling passed.
- Dependency installation: npm reported zero known vulnerabilities.
- Local server: homepage returned HTTP 200.
- Browser: inspected desktop homepage, lower sections, services, firm, and contact layouts. Inspected mobile homepage and firm page at 390 × 844.
- Responsive: all seven pages have one primary heading and no horizontal overflow at 320 × 740. Original desktop viewport also had no horizontal overflow.
- Mobile navigation: opens, navigates to services, closes on route change, and exposes the expected expanded/collapsed state.
- Services: investigation filter returns two services; federal filter returns one. Unmatched search shows a zero-result state; reset restores all services. Details expand/collapse and deep links reveal their requested category.
- Service inquiry links: federal service correctly preselects the federal consulting option on the contact page.
- Contact: empty required fields block review. A filled preview inquiry renders the review screen. The email draft contains the correct recipient, subject, service, name, reply email, and message. Edit preserves entered values and restores focus to the name field. No message was sent during QA.
- Accessibility: route changes focus the main region; contact review focuses its summary; edit restores input focus. Buttons expose accordion and menu state. Keyboard focus styles and a skip link are included. Reduced-motion preferences are respected.
- Images: all published image requests succeeded, including below-the-fold lazy-loaded photography. WebP derivatives and local fonts are used.
- Built-site smoke test: Vite's production preview returned HTTP 200 for the page and photography. FAQ expansion/collapse, the homepage service accordion, and navigation to an expanded service passed on the production bundle. Browser console log inspection returned no entries.
- Source review: no Vercel deployment blockers found; SPA rewrites and assets were checked. Production hosting has not been deployed or tested against Vercel.

Local screenshots are kept in ignored `.qa/`. Full-page captures can require scrolling first to trigger lazy image loading.

Typography revision: restored the client's original headline, Space Grotesk headings, and Raleway body font. Removed split-color/italic heading fragments and decorative numbering. The production build passed again. All seven pages were checked at 320px: no horizontal overflow remains after adjusting the contact phone size. Browser inspection confirms every heading uses Space Grotesk, with no mixed heading markup or decorative index elements. Updated desktop and mobile hero screenshots are saved as `.qa/revised-headline-desktop.jpg` and `.qa/revised-headline-mobile.jpg`.

Muted palette, imagery, links, and motion revision:

- Replaced brass with muted sage and adjusted backgrounds to stone/soft charcoal.
- Removed the consultation stock image from both pages and published assets. The home page now uses John's genuine portrait; the attorney page uses both investigators' portraits.
- Added the four client-supplied social profile/review URLs and local logo assets, plus FALI and INTELLENET emblems. The social strip is present on all seven pages. No numeric rating or review count is asserted.
- Added 240ms route slide/fade transitions, filter motion, and restrained disclosure, hero, navigation, and logo effects. Reduced-motion preferences disable the motion.
- Browser-tested desktop and mobile navigation, service deep links after animated entry, expanded service scrolling/focus, filter changes, and service-to-contact preselection.
- Checked all seven pages at 320px against `documentElement.clientWidth`, and the attorney layout at 768px: content width equals viewport content width, without horizontal scrolling. Adjusted footer phone sizing for narrow widths.
- Social hrefs were checked against the current client site's source. Source verification and image derivations are in `SOCIAL-SOURCES.md`.
