# ONYEKA Hair & Beauty Salon — React website

A professional seven-page React website for ONYEKA, now open in Croydon. The visual direction combines warm ivory, black, antique gold and soft pink with an ONYEKA monogram, editorial imagery and clear customer actions.

## Run locally

Requires Node.js 22.12 or later and pnpm. Use `corepack enable` if pnpm is not installed.

```sh
pnpm install
pnpm dev
```

Build and check the site:

```sh
pnpm build
pnpm check
pnpm preview
```

`dist/` is the deployment output. It contains seven fully rendered HTML pages enhanced by React. Pages work at a domain root or a GitHub project subdirectory because their links and assets are relative. There is no routing fallback requirement for the seven `.html` page URLs.

The build also produces `offline-preview/`. Open its `index.html` directly in a browser to use a self-contained React preview without a server. This folder is for review; deploy `dist/` when publication is approved.

## Pages and features

- Home, About, Hair Services, Beauty & Nails, Barbering, Wigs & Products, Contact.
- Searchable service finder with category filters and links to individual services.
- Helpful prompts for service enquiries and frequently asked questions.
- Click-to-call, WhatsApp, email and Google Maps directions.
- Hairdresser chair rental enquiry section.
- Mobile navigation with Escape to close, persistent mobile contact actions, native accessible FAQ disclosures, labelled form fields, skip link, keyboard focus, reduced motion and responsive layouts.
- Enquiry form prepares an email or WhatsApp message; the visitor reviews and sends it in the selected app. It does not submit to a server, save visitor data or claim delivery.
- Locally served fonts and image assets. No analytics, cookies, external embeds or external font requests have been added.
- Per-page titles, descriptions and structured data. Public release includes canonical URLs, a sitemap and enabled indexing.

## Content and assets

`src/data.js` is the central place for contact details, services, FAQs and publication configuration. `src/components.jsx` holds shared navigation, contact actions, gallery, FAQs and footer. `src/pages/` contains the page views. `src/styles.css` defines the theme and responsive layout.

The address is preserved as supplied by the owner: **59B Lower Adiscombe Road, Croydon, CR0 6PQ**. This address was confirmed by the owner. Phone/WhatsApp: **07956627542**. Email: **realhairdress84@icloud.com**.

The active website logo is the established Golden Queen Profile Emblem supplied by the owner, already used on posters and the salon signboard. The active transparent edition is in public/assets/onyeka-golden-queen-transparent.png; the original supplied PNG is retained separately. Background removal and edge refinement were made with the built-in image generation tool. The earlier proposed SVG assets remain unused.

The decorative portrait is AI-generated editorial concept imagery, visibly labelled on the homepage. It is not an actual ONYEKA client, stylist or salon photograph. Real salon images remain clearly labelled placeholders. Replace them with approved photos and accurate alternative text when available.

The DM Sans and Manrope fonts are bundled locally under the SIL Open Font License. Their licence files are in `public/assets/licenses/`.

## GitHub handoff

Source repository: https://github.com/dotbydot46/ONYEKA-Hair-Beaty

Clone the repository and run the local setup above. The repository includes `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `vite.config.js`, `index.html`, `src/`, `public/`, `scripts/`, `.gitignore` and documentation. `node_modules/`, `.ssr/`, `dist/` and `offline-preview/` are generated locally and excluded from source control.

Alternatively, from this project folder:

```sh
git init
git add .
git commit -m "Build ONYEKA React website"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_REPOSITORY_URL` with the actual repository URL. This uploads source only; it does not publish the website. No automatic deployment workflow has been added.

## Future booking

Online appointment booking is intentionally absent. `salon.booking` reserves the configuration for a later provider. When upgrading, add a separate booking page or component and enable its link only after the provider and salon availability are configured. Keep appointment creation separate from this enquiry form.

## Before publication

Publication and public access were approved by the owner. Live URL: https://onyeka-hair-beauty.zaryabrawa.chatgpt.site . No domain purchase has been made or authorised.

1. Approve the design, logo and exact postal address.
2. Add real salon photos and verified opening hours if desired. No hours, prices, testimonials, qualifications or service outcome claims have been invented.
3. Set `salon.origin` to the approved full site URL, including a GitHub subdirectory if applicable.
4. Set `salon.approvedForPublication` to true only after approval. The build then adds canonical URLs and a sitemap, and enables indexing.
5. Build again and deploy `dist/` to the selected host. Do not purchase a domain or enable GitHub Pages without approval.
6. If adding a server-delivered form later, configure delivery and appropriate privacy information before collecting submissions.

## Design references

Reviewed for customer journeys, service categories, editorial presentation and clear contact/location access; no copy, photographs, prices or claims were taken from these businesses:

- https://www.charlottemensah.com/
- https://www.afrotherapysalon.com/
- https://www.hershesons.com/

See `DESIGN-NOTES.md` for the design rationale and asset brief.

The homepage service cards use four AI-generated editorial inspiration images with visible labels, bundled locally as compressed WebP files. They do not represent actual ONYEKA salon work or available product stock.


## GitHub Pages deployment
GitHub Pages uses the Publish ONYEKA to GitHub Pages workflow. Set repository Settings → Pages → Source to GitHub Actions. Each push to main builds the React site, prerenders all seven pages, checks the output and deploys dist. The public Pages URL is https://dotbydot46.github.io/ONYEKA-Hair-Beaty/ . The workflow uses SITE_URL and SITE_PATH_STYLE=html to generate correct canonical URLs and a sitemap for this host. Local and Sites builds keep their existing defaults.
