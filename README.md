# Devanshu Bhatti — Portfolio (React + Vite + TypeScript + Tailwind + Framer Motion)

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
```

## Replace these
- `src/data/content.ts`: name, email, GitHub, LinkedIn, experience, projects, AI tools (all content lives here).
- Empty project links (`url: ""`) hide their buttons. Add your GitHub/demo URLs there.
- Project screenshots: put images in `public/projects/` and set `image: "/projects/name.png"`.
- `public/resume.pdf`: replace with your latest resume.
- Contact form: copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL). Without it, the form says it isn't connected and does not claim to send.
- `index.html`: update the title/description if needed; add your deployed URL as `og:url`.

## Deploy
- **Vercel:** import the repo, framework "Vite", build `npm run build`, output `dist`. Add `VITE_FORM_ENDPOINT` under Environment Variables.
- **Netlify:** build `npm run build`, publish `dist`. Add the same env var.
