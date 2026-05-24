---
name: Veloxis Global Design System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  slate-50: '#F8FAFC'
  slate-900: '#0F172A'
  royal-blue: '#2563EB'
  indigo-accent: '#4F46E5'
  teal-accent: '#0D9488'
  sunset-orange: '#F59E0B'
  glass-stroke: rgba(255, 255, 255, 0.4)
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built for a high-end AI automation and lead generation agency, prioritizing a sense of global scale, technical precision, and corporate sophistication. The aesthetic is "Agency-grade"—meaning it balances the sterile efficiency of AI with the vibrant, high-fidelity polish of a premium consulting firm.

The design style is a hybrid of **Modern Corporate** and **Soft Glassmorphism**. It utilizes expansive white space (Slate-50), precise typography, and high-quality imagery. Subtle translucent layers and backdrop blurs are used to represent the "transparency" and "fluidity" of AI integration, while heavy, authoritative type ensures the brand feels grounded and reliable.

## Colors

This design system utilizes a "Sophisticated Tech" palette. The foundation is built on **Slate-50** and **White** to ensure a clean, breathable canvas.

*   **Primary (Navy/Slate-900):** Used for headlines and core brand elements to convey authority.
*   **Secondary (Royal Blue):** Used for primary actions and highlights, representing "The Engine" of the agency.
*   **Accents (Teal, Indigo, Sunset Orange):** Reserved strictly for data visualizations, iconography, and decorative "pills" to provide a colorful, high-energy contrast against the professional blue/white base.

## Typography

**Plus Jakarta Sans** is the sole typeface for the design system. Its geometric yet friendly curves strike the perfect balance between "High-Tech" and "High-Touch."

- **Hierarchy:** Use `display-lg` for hero sections to make a bold impact. 
- **Character:** Headlines use tight letter-spacing (-0.01em to -0.02em) to appear more "designed" and editorial.
- **Utility:** Use `label-caps` for small descriptors above headlines or inside status badges to maintain an organized, systematic feel.

## Layout & Spacing

The design system employs a **12-column fixed-width grid** for desktop, centered within the viewport. To maintain a "Sophisticated" feel, we use aggressive vertical spacing (`section-gap`) to allow content to breathe.

- **Mobile:** Transition to a 4-column grid with 16px margins.
- **Rhythm:** All spacing follows an 8px scale. Component internal padding should be generous (typically 24px or 32px for cards) to prevent the UI from feeling "cramped" or "budget."
- **Imagery:** Large, edge-to-edge imagery or wide-span components should be used to break the grid occasionally for a more dynamic editorial feel.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Subtle Glassmorphism** rather than heavy shadows.

- **Surface 0:** Slate-50 background.
- **Surface 1:** Pure White cards with a very soft, large-radius shadow (10% opacity) or a 1px border in Slate-200.
- **Glass Overlay:** For navigation bars or floating action panels, use a semi-transparent white background (60-80% opacity) with a `blur(20px)` backdrop filter and a thin `glass-stroke` (White, 40% opacity) to define the edge.
- **Depth of Field:** High-quality photography should use shallow depth-of-field to naturally draw focus to foreground UI elements.

## Shapes

The shape language is "Soft-Modern." We avoid sharp corners to keep the brand approachable, but avoid "pill-shaped" everything to keep it professional.

- **Buttons & Inputs:** Use `rounded-md` (0.5rem).
- **Cards & Large Containers:** Use `rounded-xl` (1.5rem) to create a distinct frame for high-quality imagery.
- **Data Visualization:** Use slightly rounded caps on bar charts and soft edges on icon backgrounds to maintain consistency.

## Components

### Buttons
- **Primary:** Royal Blue background, White text. Large padding (16px 32px), bold weight. 
- **Secondary:** Transparent background, Royal Blue border (1.5px), Royal Blue text.
- **Hover States:** Smooth 300ms transitions. Primary buttons should shift slightly darker or gain a subtle outer glow on hover.

### Cards
- Pure White background, `rounded-xl` corners.
- Use a 1px Slate-100 border instead of a shadow for a "flatter," cleaner look.
- Feature large imagery at the top with no padding, bleed-to-edge.

### Input Fields
- Slate-50 background with a 1px Slate-200 border. 
- On focus: Border changes to Royal Blue, and a subtle blue outer glow (4px) appears.

### Chips & Badges
- Use the vibrant accent colors (Teal, Indigo, Orange) with 10% opacity backgrounds and 100% opacity text for the label. This provides the "colorful images" vibe without overwhelming the professional navy base.

### Navigation
- A "Floating Glass" header. Pure white at 70% opacity with backdrop-blur. 
- Links in Slate-900, shifting to Royal Blue on hover.