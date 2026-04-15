

# Add "Real Smile Transformations" Case Studies Section

## What We're Building
A premium "Case Studies" section on the landing page with before/after comparison cards and a detailed modal popup — matching the design from your screenshots.

## Section Design

### Landing Page Cards (3 cards in a row)
- **Header**: "CASE STUDIES" label, bold "Real Smile Transformations" heading, subtitle, and trust badges (Dr. Kamil Shahnawaz MDS, 1000+ Treatments, tagline)
- **Each card**: Split before/after image comparison with a swap icon in the center, labeled overlays ("Infected & Painful" / "Pain-Free & Saved"), treatment tags (Root Canal, Single Sitting, etc.), title, and teal subtitle
- **Hover effect**: "View Case Study" button appears over the card on hover
- **Footer**: "Drag the slider" hint text + "View All Smile Transformations" CTA button

### Case Study Modal (opens on card click)
- Large before/after image comparison at top
- Treatment badge + title + subtitle
- Detail tags (Single Sitting, Complex Case, 34 years Male)
- Numbered steps: (1) Patient Problem, (2) Diagnosis, (3) Treatment Plan (with checkmark list), (4) Final Result (highlighted in light teal)
- Patient testimonial quote block
- Doctor attribution footer with "Book Your Transformation" CTA

## Technical Plan

1. **Create `src/components/home/CaseStudies.tsx`**
   - Self-contained component with 3 hardcoded case studies (Root Canal, Dental Implant, Braces & Aligners)
   - Uses existing clinic images as before/after placeholders
   - Before/after slider using CSS clip-path or positioned divs with a draggable divider
   - Hover overlay with "View Case Study" glassmorphic button
   - Modal using shadcn Dialog component with full case details (problem, diagnosis, treatment plan, result, testimonial)

2. **Update `src/pages/Index.tsx`**
   - Import and add `<CaseStudies />` between Testimonials and Gallery sections

## Data Structure (hardcoded in component)
- 3 cases: Root Canal, Dental Implant, Braces & Aligners
- Each with: before/after images, labels, tags, title, subtitle, detailed steps, patient quote

