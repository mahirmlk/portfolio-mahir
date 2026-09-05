# Traffic & Distribution Playbook — mahirmalik.in

Ready-to-use materials. Work through top to bottom.

---

## B3 — GitHub Profile README (ready to paste)

Create the repo `mahirmlk/mahirmlk` (must match your username), add `README.md`, paste below. Then pin `sellable` and `Confluence`, and update your profile bio + headshot to match.

```markdown
### Hi, I'm Mahir Malik — AI Engineer

I build intelligent systems that make it to production: LLM agents, RAG pipelines,
ML products, and the full-stack software around them. I work across the whole
pipeline — training to inference to the frontend people actually use.

- 🔭 Currently: building agentic commerce infrastructure ([Sellable](https://mahirmalik.in/work/sellable)) and interactive ML learning tools ([Confluence](https://mahirmalik.in/work/confluence))
- ✍️ Writing: [mahirmalik.in/blog](https://www.mahirmalik.in/blog) — long-form on LLM deployment, model efficiency, and AI systems engineering
- 📄 Full portfolio: [mahirmalik.in](https://www.mahirmalik.in)
- 📫 Reach me: [LinkedIn](https://www.linkedin.com/in/mahir-malik)

### Featured work

| Project | What it is |
|---|---|
| [Sellable](https://github.com/mahirmlk/sellable) → [case study](https://mahirmalik.in/work/sellable) | AI agents that buy things autonomously — machine-readable storefront, policy engine, Razorpay rails, XAI audit ledger |
| [Confluence](https://github.com/mahirmlk/Confluence) → [case study](https://mahirmalik.in/work/confluence) | Interactive ML playground: 38 scikit-learn algorithms, live decision boundaries, frame-by-frame training |
```

**Also do (10 min):** profile pic = same headshot as the site/LinkedIn; bio line = "AI Engineer — building LLM agents, RAG pipelines, and production ML systems | mahirmalik.in"; pin both repos.

---

## B4 — dev.to cross-post (do AFTER the post is indexed in Google)

1. Publish/update the post on mahirmalik.in first.
2. Wait until Search Console → URL Inspection shows "URL is on Google" for the post.
3. On dev.to: New Post → paste the full article → Settings → **Canonical URL = `https://www.mahirmalik.in/blog/efficiency-era-of-ai`** (clean URL, no UTM params — ever).
4. After publishing, view-source of the dev.to post and confirm `<link rel="canonical" href="https://www.mahirmalik.in/...">` is present.
5. Use dev.to liquid tags (`{% github mahirmlk/sellable %}`) to embed your repos — extra cross-linking.

Distribution links (social bios, LinkedIn posts) CAN use UTM tags:
`?utm_source=devto&utm_medium=social&utm_campaign=2026-09-efficiency-era` — lowercase, hyphens, never on canonical URLs, never on internal links.

---

## B5 — Per-post distribution checklist

For every new post:

- [ ] Publish on mahirmalik.in → URL Inspection → Request Indexing
- [ ] **Hacker News** — submit if it's a benchmark/comparison/post-mortem (title = the finding, not the marketing). Engage in comments for the first 2 hours
- [ ] **Reddit** — r/LocalLLaMA, r/MachineLearning (keep self-promo ≤ 1 in 9 contributions)
- [ ] **LinkedIn** — text post with 3 takeaways + link (personal posts outperform company pages)
- [ ] **daily.dev** — submit the RSS feed once: https://www.daily.dev → add blog `https://www.mahirmalik.in/feed.xml`
- [ ] **X** — thread or single tweet linking the post

Monthly rhythm (~45 min): check Vercel Analytics Top Referrers (look for `chatgpt.com`, `perplexity.ai`, `claude.ai`, `dev.to`), GSC queries/pages deltas, Speed Insights p75 trends, and run the AI-citation ledger below.

### AI-citation ledger (monthly, ~20 min)

Run these prompts in ChatGPT, Perplexity, Gemini, Claude; log cited/not + which URL:

1. "Who is Mahir Malik?"
2. "Mahir Malik AI engineer"
3. "Best personal blogs about LLM efficiency"
4. "Sellable agentic commerce project"
5. "LLM model routing vs fine-tuning"
6. Your 3 newest GSC non-branded queries

---

## B6 — Wikidata entry (draft)

Create at wikidata.org → "Create a new item" (Person). Fill:

| Property | Value |
|---|---|
| instance of (P31) | human (Q5) |
| occupation (P106) | machine learning researcher (Q29038286) and/or software engineer (Q212238) |
| official website (P856) | https://www.mahirmalik.in |
| GitHub username (P2037) | mahirmlk |
| LinkedIn URL | https://www.linkedin.com/in/mahir-malik |
| X username (P2002) | mahirmllk |
| described at URL | your About page |

Rules: **every claim needs a reference URL** (your own site counts for the website claim; use your GitHub profile page as reference for the GitHub claim). Only add claims that are verifiable — unreferenced statements get removed by bots. Once live, add the Wikidata URI to the `sameAs` array in `lib/site.ts`.

**After Wikidata goes live**, also update `lib/site.ts`:

```ts
export const personSameAs = [
  "https://github.com/mahirmlk",
  "https://www.linkedin.com/in/mahir-malik",
  "https://x.com/mahirmllk",
  "https://www.wikidata.org/wiki/Q<YOUR_QID>",
];
```

---

## Already shipped (code-side, this repo)

- ✅ Vercel Web Analytics + Speed Insights in `app/layout.tsx` (enable both in the Vercel dashboard → Analytics tab after deploying)
- ✅ RSS feed at `/feed.xml` + autodiscovery `<link>` in head
- ✅ llms.txt + `<link rel="llms">` in head
- ✅ Sitemap, permissive robots.txt (all AI crawlers allowed), JSON-LD graph, canonicals, OG/Twitter
