# Technical Architecture

## Frontend

Next.js App Router
TypeScript
Tailwind CSS
Motion

## Rendering

Prefer Server Components.
Use Client Components only for:

- menus
- sliders
- filters
- animated interactive UI
- forms requiring client interaction

## Data

V1: typed local content/data modules.
V2: CMS/database when operational staff need content editing.

## Forms

Browser validation + server validation.
Zod schemas shared where appropriate.
Rate limiting/spam protection.
Transactional email.
Optional database persistence later.

## Assets

public/
images/
hero/
businesses/
technology/
paint/
leadership/
projects/
insights/
logos/
icons/
fonts/

Use modern image formats and Next Image.

## Environment

.env.local for secrets.
.env.example must document required variables without secret values.

## Future integrations

- CMS
- CRM
- analytics
- payment provider for paint/training commerce
- order tracking
- customer accounts
