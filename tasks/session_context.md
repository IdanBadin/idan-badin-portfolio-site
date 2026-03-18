# Session Context — 2026-03-18

## Project State
פורטפוליו אישי של עידן בדין — בנוי על בסיס MoncyDev/Portfolio-Website (React + Vite + GSAP + Three.js), עם תוכן מותאם אישית מהCV. האתר חי ועובד בפרודקשן.

## What Was Done This Session

**Session 1 (הסשן הקודם):**
- הקמת הפרויקט מ-MoncyDev/Portfolio-Website
- החלפת כל התוכן בתוכן של עידן (Landing, Navbar, About, WhatIDo, Career, Work, Contact)
- יצירת 6 תמונות placeholder (webp, dark gradient) לפרויקטים
- בנייה נקייה — TypeScript zero errors
- יצירת GitHub repo + push
- פרסום ראשוני ב-Netlify

**Session 2 (הסשן הנוכחי):**
- תיקון MIME type error — הוספת netlify.toml עם `publish = "dist"`
- תיקון "GSAP Trial" error — שדרוג gsap מ-3.12.7 → 3.14.2, הסרת gsap-trial
- עדכון imports: `gsap-trial/ScrollSmoother` → `gsap/ScrollSmoother`, `gsap-trial/SplitText` → `gsap/SplitText`
- בנייה מחדש ופרסום מחדש — אומת עם Playwright screenshot
- Push לגיטהאב (main)

## Exact Stopping Point
הכל שמור ומדויק. האתר חי ועובד. הסשן הסתיים בשמירה מסודרת.

## What To Do Next (in order)
1. **תמונות פרויקטים** — להחליף 6 תמונות placeholder ב-screenshots/mockups אמיתיים
2. **קישורי פרויקטים** — להוסיף URL לכל WorkImage card (כרגע אין קישורים)
3. **Favicon** — להוסיף favicon (index.html כבר מכיל placeholder מוכן)
4. **SPA Routing** — להוסיף `public/_redirects` עם `/* /index.html 200` למניעת 404 בניווט ישיר
5. **Custom Domain** — אופציונלי

## Active Files
- `src/components/Work.tsx` — פרויקטים (להוסיף URLs)
- `public/images/` — תמונות placeholder (להחליף)
- `index.html` — favicon מוכמן
- `public/_redirects` — צריך ליצור

## Environment
- Dev: `./node_modules/.bin/vite --host`
- Build: `./node_modules/.bin/vite build`
- Deploy: Netlify MCP → deploy-site עם deployDirectory = `/Users/idanbadin/Desktop/Idan Badin Portfolio/dist`

## Warnings / Gotchas
- PATH לא כולל node_modules/.bin — תמיד להשתמש בנתיב מלא
- gsap-trial הוסר לחלוטין — לא להוסיף חזרה
- TechStack משתמש בתמונות texture על כדורי 3D physics (לא text labels)
- GitHub repo: https://github.com/IdanBadin/idan-badin-portfolio-site
- Netlify siteId: 15782831-7017-43a8-b30a-e17627ec86ca
- Live URL: https://idanbadin-portfolio.netlify.app
