# Kray Blueprint Architecture

This document defines how this repository should evolve as the reusable blueprint for multiple client storefronts.

Any AI agent or developer working in this repo should follow these rules unless the project owner explicitly changes them.

## Purpose

This project is the master blueprint for future client e-commerce builds.

The working model is:

- keep this repository as the reusable base
- create a new branch for each client project
- keep each client's credentials, database, and deployment config separate
- share architecture patterns, code structure, and feature approach across all client branches

## Core Principles

1. Loose coupling first.
   Every major layer should be replaceable with minimal change to the rest of the app.

2. Supabase is only a PostgreSQL host.
   Do not build the app around Supabase-specific auth, storage, realtime, or frontend SDK patterns unless explicitly approved later.

3. Prisma is the schema and data-access foundation.
   The database should be treated as standard PostgreSQL so it can move away from Supabase later if needed.

4. The app owns its business logic.
   React components should not directly own core business rules or database queries.

5. Client branches are isolated.
   Every client branch should have separate environment variables, database instances, seed data, branding, and deployment config.

6. The blueprint must stay generic.
   Avoid hardcoding client-specific assumptions into shared architecture, folder structure, or domain logic.

## Infrastructure Decision

For the initial setup:

- database host: Supabase Postgres
- ORM: Prisma
- app backend: Next.js route handlers and server-side service/repository layer
- auth: custom or future decision, not Supabase Auth for now
- storage: not coupled yet
- realtime: not coupled yet

This means Supabase is used as managed Postgres infrastructure only.

## What Must Stay Vendor-Neutral

The following must remain portable:

- Prisma schema
- migrations
- repository interfaces
- service/use-case layer
- route handler contracts
- frontend data consumption pattern
- environment variable naming strategy where possible
- client configuration approach

## What To Avoid

Do not do the following unless explicitly approved:

- direct Supabase queries inside React components
- frontend business logic coupled to Supabase SDK
- Supabase Auth as a default project dependency
- Row Level Security as the primary application authorization model
- app logic that depends on Supabase-only SQL policies
- storage URLs or bucket assumptions spread across UI code
- branch-specific hacks merged back into the blueprint

## Branching Model

This repository is the source blueprint.

For each client:

1. create a new branch from the blueprint
2. assign a separate Supabase project or separate Postgres database
3. add client-specific environment variables
4. apply branding, catalog, and business-rule customization in that client branch
5. keep generic improvements eligible to merge back into the blueprint

Rules:

- credentials must never be shared across clients
- migrations should be versioned cleanly
- reusable architectural improvements should come back to the blueprint when safe
- client-only business logic should stay in the client branch

## Target Architecture

The system should evolve into the following layered structure:

1. UI Layer
   React components, app routes, presentation logic, form state, local interaction state

2. Feature or Use-Case Layer
   Business workflows such as add to cart, checkout preparation, order creation, catalog filtering, store settings resolution

3. Repository Layer
   Interfaces and implementations for products, categories, carts, orders, users, addresses, settings

4. Persistence Layer
   Prisma client and PostgreSQL

The direction is:

- UI calls app-owned APIs or server actions
- APIs call services/use-cases
- services call repositories
- repositories use Prisma

Practical rule for this blueprint:

- Next.js server-rendered web pages may call services directly on the server
- mobile apps, admin panels, and external consumers should use API routes
- API routes must reuse the same service/repository layer rather than duplicating business logic
- the database schema is never the public contract; services and APIs are

This means the current preferred flow is:

- web server component -> service -> repository -> Prisma

And the future extensible flow is:

- API consumer -> route handler -> service -> repository -> Prisma

## Recommended Folder Direction

The repo does not need a massive refactor immediately, but it should gradually move toward this structure:

```text
src/
  app/
    api/
  components/
  features/
    cart/
      services/
      types/
      utils/
    catalog/
      services/
      types/
    checkout/
      services/
      types/
  repositories/
    cart/
    category/
    order/
    product/
    settings/
  lib/
    prisma.ts
    env.ts
  config/
```

Notes:

- `features/` contains business workflows
- `repositories/` contains data access boundaries
- `components/` should stay mostly presentational
- route handlers should be thin
- do not force internal web requests to your own API when a server component can call the service layer directly
- add API routes when there is a real external consumer or a strong contract need

Current direction already adopted in this repo:

- cart state lives under `src/features/cart/...`
- toast or notification logic lives under `src/features/notifications/...`
- catalog-specific helpers should live under `src/features/catalog/...`
- auth domain logic should live under `src/features/auth/...`
- older paths may temporarily exist as compatibility re-exports during refactors, but new code should prefer `src/features/...`

## Multi-Client Configuration Strategy

The blueprint should support per-client customization without restructuring the codebase each time.

Use these sources of customization:

1. environment variables
   For secrets, hostnames, API keys, deploy config

2. database-driven settings
   For store name, logo URL, theme values, currency, contact info, policy text, homepage blocks, feature flags

3. branch-level overrides
   For client-specific flows, integrations, or UI differences that should not affect other clients

Recommended split:

- secrets and infrastructure in env
- store content and business settings in DB
- exceptional features in the client branch

## Data Model Direction

The current schema is only the starting point.

The blueprint should move toward these entities:

- User
- Address
- Category
- Product
- ProductImage
- Cart
- CartItem
- Order
- OrderItem
- Coupon or Promotion
- StoreSettings
- Optional CMS-style homepage sections later if needed

Important modeling rules:

- orders should not rely on a direct many-to-many with products only
- use `OrderItem` so price and quantity are captured historically
- carts should have `Cart` and `CartItem`
- store branding and operational settings should live outside code when possible

## Phased Path To Follow

### Phase 1: Stabilize Foundations

Goal:
Replace mock data patterns with clean app-owned data boundaries.

Tasks:

- create this architecture document
- finalize naming and structure rules
- expand Prisma schema to proper commerce entities
- add seed strategy for local and client setup
- document required environment variables

### Phase 2: Product and Category Data Layer

Goal:
Replace hardcoded product arrays across the app.

Tasks:

- create product repository
- create category repository
- create catalog services
- create API routes or server-side fetch entry points
- move homepage, search, category pages, and product detail to shared data access

Definition of done:

- no storefront page depends on hardcoded product arrays
- one product source feeds all UI surfaces

### Phase 3: Cart Persistence

Goal:
Move from client-only cart state toward durable cart behavior.

Tasks:

- keep current client-side cart provider as the UI interaction layer
- introduce cart repository and cart service
- decide guest-cart strategy
- sync cart state between UI and database-friendly structure
- support cart hydration from API

Definition of done:

- cart logic is reusable and not trapped inside components
- persistent cart path exists for real usage

### Phase 4: Checkout and Orders

Goal:
Convert checkout from demo flow into real order creation.

Tasks:

- add order and order item models
- create checkout service
- validate totals on the server
- create order placement route
- persist shipping and pricing snapshot data

Definition of done:

- checkout submits a real order
- totals are validated server-side
- order history can be shown from DB

### Phase 5: Store Settings and Client Customization

Goal:
Make the blueprint easy to adapt per client.

Tasks:

- create `StoreSettings` model
- centralize currency, branding, contact data, and optional theme values
- load store settings in app shell and relevant pages
- move obvious hardcoded business settings out of code

Definition of done:

- basic client rebranding no longer requires code edits in many files

### Phase 6: Optional Integrations

Goal:
Add integrations only behind clean boundaries.

Possible examples:

- payment gateways
- shipping providers
- analytics
- media storage adapters

Rule:

- every integration must be isolated behind a service boundary so it can vary per client branch

## Immediate Next Implementation Order

The next coding steps should happen in this order:

1. redesign Prisma schema for real commerce entities
2. create seed data approach
3. implement product and category repositories
4. expose catalog data through app-owned server endpoints or server loaders
5. replace hardcoded product/category arrays in UI
6. design persistent cart schema and service
7. implement order pipeline
8. add store settings model and loader

## Environment Strategy

Use environment variables with portability in mind.

Expected examples:

```env
DATABASE_URL=
JWT_SECRET=
NEXT_PUBLIC_APP_URL=
```

Client branches may also add:

```env
STORE_CODE=
STORE_NAME=
```

Rules:

- keep secrets out of source control
- each client branch must have its own env values
- environment names should not be vendor-locked unless necessary

## Migration and Exit Strategy From Supabase

Because Supabase is only being used as Postgres hosting, migration away should remain straightforward.

If a client wants to move away from Supabase later:

1. export the PostgreSQL database
2. provision a new PostgreSQL host
3. point `DATABASE_URL` to the new host
4. run Prisma migrations or validation checks
5. verify app behavior

This stays practical only if the codebase remains vendor-neutral.

## Working Rules For Future AI Agents

If you are an AI agent working on this repo:

1. preserve loose coupling
2. prefer app-owned logic over vendor SDK logic
3. do not introduce Supabase-specific patterns without approval
4. keep architectural improvements generic unless the task is explicitly client-specific
5. when adding data models, think in terms of blueprint reuse, not a single store
6. when changing structure, favor scalable boundaries over quick inline logic
7. document important architectural changes in this file or linked docs

## Current Status

At the time of writing:

- storefront UI exists
- cart UI state exists
- reusable toast system exists
- authentication endpoints exist but are not the focus of this architecture path
- product/category/cart/order data layers are not fully implemented yet
- storefront still contains hardcoded product data in multiple places

## Source Of Truth

When architectural decisions conflict:

1. project owner instruction wins
2. this blueprint file is the repo-level architectural guide
3. implementation details should follow the loose-coupling principle
