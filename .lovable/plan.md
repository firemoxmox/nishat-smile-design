

# Fix Build Errors Plan

## Problems Identified

1. **Missing `framer-motion` package** — used in 7+ files but not in `package.json`
2. **Missing `@/api/base44Client` module** — imported in `BookAppointment.tsx`, `PageNotFound.jsx`, `ServiceDetail.jsx` but no `src/api/` directory exists
3. **Missing `@/lib/AuthContext` module** — imported in `App.tsx` but doesn't exist
4. **Missing `@/lib/query-client` module** — imported in `App.tsx` but doesn't exist
5. **`allowFullScreen=""` in Contact.tsx** — string `""` not assignable to boolean prop
6. **`HeroSection` and `AboutDoctor` require props** (`heroImage`, `doctorImage`) but `Index.tsx` passes none
7. **Two competing Home pages** — `Home.jsx` (used by App.tsx via MainLayout) and `Index.tsx` (unused). App.tsx routes use `Home.jsx` which imports old JSX components (TrustStats, ServicesSection, etc.) while `Index.tsx` imports the new TSX components

## Fix Strategy

### 1. Install `framer-motion`
Add `"framer-motion": "^11.15.0"` to `package.json` dependencies.

### 2. Simplify `App.tsx` — remove auth/base44 dependencies
The site is a static dental clinic website with no backend. Remove `AuthProvider`, `useAuth`, `queryClientInstance` imports and the auth-gating logic. Use a simple Router with direct routes. Keep `QueryClientProvider` with an inline `new QueryClient()`.

### 3. Remove `base44` usage from files
- **`BookAppointment.tsx`**: Remove `base44` import; change `handleSubmit` to just set `submitted = true` (no API call).
- **`ServiceDetail.jsx`**: Remove `base44` image generation; use a static placeholder or the service data instead.
- **`PageNotFound.jsx`**: Remove `base44` auth check; simplify to a basic 404 page.

### 4. Fix `Index.tsx` to match `Home.jsx` pattern
Since `App.tsx` routes to `Home.jsx` (which passes props to components), and `Index.tsx` is unused, delete `Index.tsx` or keep it as-is since it's not routed. The `.tsx` components (`HeroSection`, `AboutDoctor`) need props — `Home.jsx` already passes them correctly.

### 5. Fix `Contact.tsx`
Change `allowFullScreen=""` to `allowFullScreen={true}` (or just `allowFullScreen`).

### 6. Ensure all JSX component imports resolve
Verify that the JSX components imported by `Home.jsx` (`TrustStats`, `ServicesSection`, `SmileTransformation`, `GallerySection`, `CTASection`, `ContactPreview`) all exist. These are the old components — they should work since `Home.jsx` is what's actually routed.

## Files to Change
- `package.json` — add `framer-motion`
- `src/App.tsx` — rewrite to remove auth/base44, simple router
- `src/pages/BookAppointment.tsx` — remove base44 import, mock submit
- `src/pages/ServiceDetail.jsx` — remove base44 image generation
- `src/lib/PageNotFound.jsx` — simplify, remove base44
- `src/pages/Contact.tsx` — fix `allowFullScreen`
- `src/pages/Index.tsx` — remove or pass required props

