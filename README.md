# Siyi Summer 2026 Agenda

Public share version of the summer agenda.

California accommodation note: Siyi plans to stay at the original Anaheim Hills hotel arranged by the team from June 24 to July 1.

## Page Map

- `index.html`: summer agenda and travel logistics.
- `id-camp-strategy.html`: ID camp recruiting strategy and coach-outreach workflow.
- `ea-ed-dashboard.html`: interactive EA/ED fact explorer.
- School profile pages:
  - `williams.html`
  - `amherst.html`
  - `tufts.html`
  - `trinity.html`
  - `uchicago.html`
  - `washu.html`
  - `emory.html`
  - `nyu.html`
  - `mit.html`
  - `babson.html`
  - `swarthmore.html`
  - `claremont-mckenna.html`

## Recommended Use

1. Start with `index.html` to understand the summer timeline.
2. Use `id-camp-strategy.html` before and after each ID camp to track whether the camp produced coach signals.
3. Use `ea-ed-dashboard.html` to compare schools by facts, not labels:
   - filter by conference, environment, early plan, or merit aid;
   - adjust the soccer, academic, ROI, and aid weights;
   - compare any three schools side by side;
   - open individual school pages from the cards or table.
4. Use each school profile page to review the school's attributes and compare it with similar schools.

## Data Notes

- `ea-ed-data.js` is the shared source for the EA/ED dashboard and all school profile pages.
- `school-detail.js` renders individual school pages from the shared data.
- `school-page.css` controls the shared school profile layout.
- The EA/ED dashboard is intended to present facts from the preference sheet. It avoids final labels such as "core" or "risk" so the family can decide based on the visible factors.

## Maintenance

When adding or changing a school:

1. Update the school record in `ea-ed-data.js`.
2. Add a matching `<slug>.html` page if the school needs its own profile.
3. Add the page to this README.
4. Check `ea-ed-dashboard.html` and one school page in a browser before publishing.
