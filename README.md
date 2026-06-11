# Siyi Summer 2026 Agenda

Public share version of the summer agenda.

California accommodation note: Siyi plans to stay at the original Anaheim Hills hotel arranged by the team from June 24 to July 1.

## Page Map

- `index.html`: summer agenda and travel logistics.
- `id-camp-strategy.html`: ID camp recruiting strategy and coach-outreach workflow.
- `ea-ed-dashboard.html`: interactive school-program comparison dashboard.
- School profile pages:
  - `claremont-mckenna.html`
  - `wellesley.html`
  - `amherst.html`
  - `tufts.html`
  - `babson.html`
  - `trinity.html`
  - `williams.html`
  - `uchicago.html`
  - `colby.html`
  - `middlebury.html`
  - `bowdoin.html`
  - `mit.html`

## Recommended Use

1. Start with `index.html` to understand the summer timeline.
2. Use `id-camp-strategy.html` before and after each ID camp to track whether the camp produced coach signals.
3. Use `ea-ed-dashboard.html` to compare schools by facts, not labels:
   - filter by conference, environment, early plan, or merit aid;
   - adjust the soccer, academic, business, and bio/maker weights;
   - compare any three schools side by side;
   - review the PDF-derived program fields for economics/finance/entrepreneurship, applied biology, maker-biology, D3 soccer, and updated read for Apple;
   - open individual school pages from the cards or table.
4. Use each school profile page to review the school's attributes and compare it with similar schools.

## Data Notes

- `ea-ed-data.js` is the shared source for the dashboard and all active school profile pages.
- `school-detail.js` renders individual school pages from the shared data.
- `school-page.css` controls the shared school profile layout.
- The dashboard is intended to present facts from the latest school-program comparison PDF. It avoids final labels such as "core" or "risk" so the family can decide based on the visible factors.

## Maintenance

When adding or changing a school:

1. Update the school record in `ea-ed-data.js`.
2. Add a matching `<slug>.html` page if the school needs its own profile.
3. Add the page to this README.
4. Check `ea-ed-dashboard.html` and one school page in a browser before publishing.
