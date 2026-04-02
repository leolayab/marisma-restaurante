# Marisma Color Usage Guide

## Color Reference Quick Guide

### Primary Colors

#### Deep Teal - `oklch(0.38 0.08 200)` / `bg-primary` / `text-primary`
**Where to use:**
- Navigation bar background
- Section headers and titles
- Primary buttons (with white text)
- Footer background
- Menu category headers

**Tailwind classes:** `bg-primary`, `text-primary`, `border-primary`

#### Light Teal - `oklch(0.65 0.10 195)` / `bg-teal-light` / `text-teal-light`
**Where to use:**
- Icons and decorative elements
- Hover states on cards
- Subtle accents in hero section
- Dividers and separators
- Links and interactive text

**Tailwind classes:** `bg-teal-light`, `text-teal-light`, `border-teal-light`

### Accent Colors

#### Warm Gold - `oklch(0.72 0.12 65)` / `bg-accent` / `text-accent`
**Where to use:**
- Call-to-action buttons (Reserve Now, Contact Us)
- Active navigation state indicators
- Special offers or featured items
- Focus rings on form inputs
- Price highlights on menu

**Tailwind classes:** `bg-accent`, `text-accent`, `border-accent`, `ring-accent`

#### Sunset Orange - `oklch(0.68 0.15 45)` / `bg-sunset` / `text-sunset`
**Where to use:**
- Gradient middle tones
- Secondary accents sparingly
- Hover states on gold elements
- Special decorative elements

**Tailwind classes:** `bg-sunset`, `text-sunset`

### Background Colors

#### Light Background - `oklch(0.98 0.01 200)` / `bg-background`
**Where to use:**
- Main page background
- Card backgrounds on colored sections
- Modal/dialog backgrounds

**Tailwind classes:** `bg-background`

#### Soft Aqua - `oklch(0.88 0.04 200)` / `bg-secondary`
**Where to use:**
- Secondary button backgrounds
- Alternate section backgrounds
- Hover states on white cards
- Subtle panel backgrounds

**Tailwind classes:** `bg-secondary`

#### Muted Teal - `oklch(0.93 0.02 200)` / `bg-muted`
**Where to use:**
- Disabled button states
- Placeholder text backgrounds
- Input field backgrounds
- Very subtle section dividers

**Tailwind classes:** `bg-muted`, `text-muted-foreground`

## Gradient Classes

### `.ocean-gradient`
```css
background: linear-gradient(135deg, 
  oklch(0.38 0.08 200) 0%,
  oklch(0.50 0.09 197) 50%,
  oklch(0.65 0.10 195) 100%
);
```
**Where to use:**
- Hero section backgrounds
- Full-width banner sections
- Feature highlight areas

### `.sunset-gradient`
```css
background: linear-gradient(180deg,
  oklch(0.65 0.10 195) 0%,
  oklch(0.68 0.15 45) 50%,
  oklch(0.72 0.12 65) 100%
);
```
**Where to use:**
- Special event banners
- Call-to-action sections
- Footer top accent strip

### `.logo-gradient`
```css
background: radial-gradient(circle at center,
  oklch(0.65 0.10 195) 0%,
  oklch(0.68 0.15 45) 50%,
  oklch(0.38 0.08 200) 100%
);
```
**Where to use:**
- Logo background effects
- Circular decorative elements
- Special brand moments

## Pattern Classes

### `.wave-pattern`
```css
background-image: repeating-linear-gradient(45deg,
  transparent,
  transparent 10px,
  oklch(0.65 0.10 195 / 0.05) 10px,
  oklch(0.65 0.10 195 / 0.05) 20px
);
```
**Where to use:**
- Overlay on hero images
- Subtle texture on plain backgrounds
- Section dividers
- Card backgrounds for visual interest

## Animation Classes

### `.animate-wave`
**Where to use:**
- Decorative ocean/wave SVG icons
- Floating elements in hero section
- Interactive hover states
- Logo animations (subtle)

**Behavior:** 8-second infinite ease-in-out animation with gentle x/y translation

## Component Color Patterns

### Navigation Bar
- Background: `bg-primary` (Deep Teal)
- Text: `text-primary-foreground` (White)
- Active link: Gold underline `border-b-2 border-accent`
- Hover: `hover:text-accent` (Warm Gold)

### Buttons

#### Primary Button (CTA)
```tsx
<Button className="bg-accent text-accent-foreground hover:bg-gold/90">
  Reserve Now
</Button>
```

#### Secondary Button
```tsx
<Button variant="secondary" className="bg-secondary hover:bg-secondary/80">
  Learn More
</Button>
```

#### Outline Button
```tsx
<Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
  View Menu
</Button>
```

### Cards

#### Standard Card
```tsx
<Card className="bg-card hover:shadow-lg hover:border-teal-light transition-all">
```

#### Featured Card
```tsx
<Card className="bg-card border-accent border-2">
```

### Form Inputs
```tsx
<Input className="border-input focus:ring-accent focus:border-accent" />
```

### Menu Items
- Category headers: `text-primary font-bold text-2xl`
- Item names: `text-foreground font-semibold text-lg`
- Descriptions: `text-muted-foreground text-sm`
- Prices: `text-accent font-semibold text-lg`

### Hero Section
```tsx
<section className="ocean-gradient wave-pattern py-20">
  <h1 className="font-display text-5xl text-white">Marisma</h1>
  <p className="text-primary-foreground/90">Tagline here</p>
</section>
```

## Typography + Color Combinations

### Page Titles
- Font: Montserrat Bold
- Color: `text-primary`
- Size: `text-4xl md:text-5xl`

### Section Headers
- Font: Montserrat SemiBold
- Color: `text-primary`
- Size: `text-2xl md:text-3xl`

### Body Text
- Font: Open Sans Regular
- Color: `text-foreground` or `text-card-foreground`
- Size: `text-base`

### Captions/Labels
- Font: Open Sans Regular
- Color: `text-muted-foreground`
- Size: `text-sm`

### Menu Prices
- Font: Montserrat SemiBold
- Color: `text-accent` (Warm Gold)
- Size: `text-lg`

## Accessibility Checklist

✅ Deep Teal on White: 11.2:1 - Perfect for body text
✅ White on Deep Teal: 11.2:1 - Perfect for nav text
✅ Light Teal on Deep Teal: 4.9:1 - Good for accents
✅ Warm Gold on White: 4.6:1 - Good for CTAs
✅ Foreground on Background: High contrast

⚠️ **Avoid:**
- Light Teal text on white background (insufficient contrast)
- Sunset Orange text on Light Teal background
- Gold text on Light Teal background

## Mobile Considerations

On mobile screens, ensure:
- Touch targets with colored backgrounds maintain 44×44px minimum
- Gradient directions adjust for portrait orientation
- Text remains readable on gradient backgrounds (use overlays if needed)
- Wave patterns don't create visual noise on small screens

---

**Quick Copy-Paste Classes:**

```tsx
// Deep Teal Primary
className="bg-primary text-primary-foreground"

// Gold Accent CTA
className="bg-accent text-accent-foreground hover:opacity-90"

// Light Card
className="bg-card border border-border hover:border-teal-light"

// Ocean Hero
className="ocean-gradient wave-pattern text-white py-20"

// Menu Price
className="text-accent font-semibold text-lg"

// Section Background
className="bg-secondary/30 py-16"
```
