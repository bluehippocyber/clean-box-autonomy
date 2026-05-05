## Clean Box Enterprise — Official Brand Portal

A clean, trustworthy, healthcare-grade landing page rebuilt around your real brand identity (red logo accent, "Dignity through Autonomy"), with the actual Clean Box Tsunami prototype as the hero visual. All previous Cyber/Blue Hippo styling will be removed.

### Design system

- **Palette**: Medical white background, soft grey borders/surfaces, vibrant brand red (`hsl(354 78% 52%)`) for CTAs and accents, deep tan as a quiet secondary nod to the logo.
- **Typography**: Inter throughout (highly legible for older demographics), bold tight-tracked headings, generous body line-height.
- **Surfaces**: Subtle dot-grid + blueprint-grid backgrounds in select sections for an "engineering schematic" feel without noise.
- **Components**: New button variants — `cta` (red gradient + soft red shadow), `outlineRed`, `soft`. App-like rounded-2xl cards, soft elevated shadows.

### Sections (top to bottom)

1. **Navbar** — Sticky, transparent → white-on-scroll. Links: Home, Our Technology, Safety Specs, Facility ROI, Contact. Red "Get a Quote" CTA.
2. **Hero** — Headline "Dignity through Autonomy." with red emphasis, sub "The world's first fully autonomous human bathing system." Real prototype photo on the right with floating "Model: CB Tsunami v1" and red "Live Prototype" badges. Primary CTA: "Get a Commercial Quote." Trust strip with three guarantees.
3. **The Engineering of Care** — 4 feature cards on a faint blueprint grid: Anodized Aluminum Frame, Soft-Bristle Exfoliating Brushes, Dual-Tank Water System, Adaptive Care Controller. Each card has icon, copy, and a small monospace spec line (e.g. "6061-T6 ALLOY").
4. **Safety & Privacy First** — Sticky left intro + 2×2 card grid covering Smart Person-Detection, Multiple Emergency Stops, No-Lock Door System, Local Data Processing. Includes a "100% On-Device Privacy" trust badge.
5. **Healthcare Facility Solutions (ROI)** — Interactive Labor Savings Calculator. Three sliders (residents, baths/week, caregiver hourly cost). Live red results card showing care hours saved/week, full-time staff freed, and annual labor savings.
6. **Direct Contact Portal** — Multi-step lead-gen form (Facility → Needs → Contact) with progress stepper, radio-card selectors, validation, and a friendly toast on submit referencing Terrance King personally.
7. **Floating Consultation CTA** — Appears after scrolling 600px; pill button "Book a Consultation" routing to #contact.
8. **Footer** — Minimalist dark footer: logo, two link columns (Company / Legal), and "Clean Box Enterprise Inc. © 2026" with patent-pending note.

### Brand assets

- Use uploaded `cleanbox-logo.png` in the navbar and footer (footer uses inverted variant).
- Use the uploaded **Clean Box Tsunami prototype photo** as the hero product image (already copied to `src/assets/cleanbox-prototype.png`).
- Discard the previously generated dark/cyber hero image.

### Technical changes

- Rewrite `src/index.css` with the new clinical palette, Inter-only typography, dot-grid/blueprint-grid utilities, soft shadows, and `fade-up` / `float` animations.
- Update `tailwind.config.ts` to expose `primary.soft` and `primary.deep` color tokens.
- Replace button variants in `src/components/ui/button.tsx`: `cta`, `outlineRed`, `soft`, plus `lg`/`xl` sizes.
- New components: `Navbar`, `Hero`, `Engineering`, `Safety`, `ROI`, `Contact`, `Footer`, `FloatingCTA`.
- `src/pages/Index.tsx` composes all sections.
- Mobile-first responsive layout; sticky elements degrade gracefully on small screens.

No backend or data persistence is required for this version — the contact form shows a success toast. We can wire it up to Lovable Cloud later if you want real lead capture and email notifications.
