# Planning Guide

Marisma is a showcase website for a seafood restaurant in Yopal, Casanare, Colombia, that brings the coastal culinary experience inland and invites customers to explore the menu, learn about the restaurant, make reservations, and get in touch.

**Experience Qualities**: 
1. **Inviting** - The site should feel warm and welcoming like walking into a family-owned coastal restaurant, with rich ocean colors and approachable design that makes visitors immediately comfortable.
2. **Appetizing** - Visual presentation should evoke the freshness and quality of coastal seafood through vibrant imagery, elegant typography, and a color palette that suggests ocean freshness and culinary excellence.
3. **Effortless** - Navigation should be intuitive and fluid, allowing visitors to quickly find what they need whether browsing the menu, making a reservation, or finding contact information.

**Complexity Level**: Content Showcase (information-focused) - This is primarily a marketing and informational website for a restaurant, featuring multiple pages of content including menus, gallery, contact information, and a reservation form, but without complex state management or e-commerce functionality.

## Essential Features

### Multi-page Navigation
- **Functionality**: Navigation bar with links to Home, Menu, About Us, Reservations, Gallery, and Contact pages
- **Purpose**: Allows visitors to explore different aspects of the restaurant and find information quickly
- **Trigger**: Clicking navigation links in the header
- **Progression**: User clicks navigation item → smooth transition to selected page → page content loads with appropriate layout
- **Success criteria**: All pages are accessible, navigation is visible on all pages, active page is clearly indicated

### Home Page Hero Section
- **Functionality**: Large hero section displaying restaurant name "Marisma", tagline "Disfruta el sabor costeño en Yopal Casanare", and visual branding
- **Purpose**: Creates strong first impression and communicates restaurant's identity and value proposition
- **Trigger**: Landing on the website
- **Progression**: Page loads → hero section animates in → displays branding with ocean-inspired background
- **Success criteria**: Restaurant name and tagline are immediately visible, design conveys coastal atmosphere

### Menu Display
- **Functionality**: Organized menu showing seafood dishes with names, descriptions, and prices
- **Purpose**: Allows potential customers to explore food offerings before visiting
- **Trigger**: Navigating to Menu page
- **Progression**: User clicks Menu → menu page loads → categories display (appetizers, main courses, drinks) → user browses items
- **Success criteria**: Menu is readable, well-organized by category, and visually appealing with pricing clearly displayed

### Reservation Form
- **Functionality**: Contact form for making restaurant reservations with fields for name, date, time, party size, phone, and special requests
- **Purpose**: Enables customers to request reservations directly through the website
- **Trigger**: Navigating to Reservations page and filling out form
- **Progression**: User clicks Reservations → form displays → user fills in details → submits → confirmation message appears
- **Success criteria**: Form validates required fields, provides clear feedback on submission, stores reservation data

### Gallery
- **Functionality**: Visual showcase of restaurant ambiance, dishes, and atmosphere
- **Purpose**: Provides visual proof of quality and ambiance to entice visitors
- **Trigger**: Navigating to Gallery page
- **Progression**: User clicks Gallery → grid of images loads → user can view restaurant photos
- **Success criteria**: Images load properly, layout is attractive and responsive

### Contact Information
- **Functionality**: Display of restaurant location, hours, phone number, and contact details
- **Purpose**: Allows customers to find and reach the restaurant
- **Trigger**: Navigating to Contact page
- **Progression**: User clicks Contact → page displays with address, hours, phone, social media links
- **Success criteria**: All contact information is clearly visible and formatted properly

## Edge Case Handling

- **Empty Form Submission**: Validate all required reservation form fields and display helpful error messages in Spanish
- **Mobile Navigation**: Collapse navigation into hamburger menu on mobile devices for clean mobile experience
- **Missing Gallery Images**: Display placeholder ocean-themed graphics if images aren't loaded
- **Long Menu Items**: Ensure menu descriptions wrap properly and don't break layout on smaller screens
- **Reservation Date Validation**: Prevent users from selecting past dates for reservations

## Design Direction

The design should evoke the feeling of a breezy coastal restaurant - fresh, elegant, and welcoming. Think ocean blues that transition from deep navy to bright turquoise, with crisp white spaces and sophisticated gold accents that suggest quality without pretension. The atmosphere should feel like you're dining by the Colombian coast even though you're in Yopal. Wave patterns and subtle nautical elements should appear throughout without being cartoonish - elegant and refined, celebrating the ocean's beauty and the restaurant's family-friendly warmth.

## Color Selection

The color scheme is drawn directly from the Marisma logo, which features a majestic tree with roots in water, symbolizing the connection between land and sea. The palette includes deep teals representing the ocean depths, lighter teals for water and sky, and warm golden tones from the sunset - creating a harmonious blend of natural coastal elements.

- **Primary Color**: Deep Teal (oklch(0.38 0.08 200)) - Rich, sophisticated ocean color used for navigation, headers, and primary brand elements. This darker teal communicates depth, trust, and the restaurant's connection to coastal culinary traditions.
- **Secondary Colors**: 
  - Light Teal (oklch(0.65 0.10 195)) - Brighter water color for accents, icons, and highlights, suggesting freshness and coastal vibrancy
  - Soft Aqua (oklch(0.88 0.04 200)) - Very light teal for subtle backgrounds and hover states, providing airiness
- **Accent Color**: Warm Gold (oklch(0.72 0.12 65)) - Rich golden tone inspired by sunset reflections in the logo, used for call-to-action buttons, active states, and special highlights. This warm accent creates visual interest and suggests premium quality.
- **Supporting Accent**: Sunset Orange (oklch(0.68 0.15 45)) - Secondary warm tone from the logo's sunset, used sparingly for gradients and visual depth
- **Foreground/Background Pairings**: 
  - Deep Teal (oklch(0.38 0.08 200)): White text (oklch(0.98 0 0)) - Ratio 11.2:1 ✓
  - Light Teal (oklch(0.65 0.10 195)): Deep Teal text (oklch(0.38 0.08 200)) - Ratio 4.9:1 ✓
  - Warm Gold (oklch(0.72 0.12 65)): White text (oklch(0.98 0 0)) - Ratio 4.6:1 ✓
  - White Background (oklch(0.98 0 0)): Deep Teal text (oklch(0.38 0.08 200)) - Ratio 11.2:1 ✓

## Font Selection

Typography should feel modern and approachable while maintaining the sophistication expected of a quality restaurant. The fonts should be highly readable for menu items and content while having enough personality to reinforce the coastal, contemporary brand.

- **Typographic Hierarchy**: 
  - H1 (Restaurant Name/Hero): Playfair Display Bold/48px/tight letter spacing - Elegant serif for the restaurant name, suggesting refined dining
  - H2 (Page Titles): Montserrat Bold/36px/normal spacing - Clean, modern sans-serif for section headers
  - H3 (Section Headers): Montserrat SemiBold/24px/normal spacing
  - Body (Menu descriptions, content): Open Sans Regular/16px/relaxed line-height (1.6) - Highly readable for longer content
  - Navigation: Montserrat Medium/14px/wide letter spacing (0.05em) - Clean and scannable
  - Prices: Montserrat SemiBold/18px - Stands out clearly on menu

## Animations

Animations should feel like gentle ocean waves - smooth, natural, and calming. Use subtle fade-ins on page load to make content feel like it's emerging from water, and smooth transitions between pages that flow like tides. Navigation hover states should have gentle color transitions. The hero section could feature a subtle wave animation in the background. Avoid jarring or fast animations - everything should feel fluid and organic, enhancing the peaceful coastal atmosphere without distracting from content.

## Component Selection

- **Components**: 
  - Navigation: Custom navbar component with shadcn Button for nav items, transforms into Sheet/Drawer for mobile hamburger menu
  - Hero Section: Custom component with large typography, background with wave pattern overlay
  - Menu: Card components for menu categories and items, organized in responsive grid
  - Reservation Form: shadcn Form with Input, Label, Textarea, Select (for time/party size), Calendar for date picking, Button for submission
  - Gallery: Custom grid layout with responsive image cards using aspect-ratio utility
  - Contact: Card component containing contact details, custom layout for information display
  - Toast: Sonner for reservation confirmation feedback
  
- **Customizations**: 
  - Wave pattern background using CSS gradients or SVG for ocean feel
  - Custom navigation with gold underline animation on hover
  - Menu cards with subtle shadow and hover lift effect
  - Reservation form with ocean-blue focus states
  
- **States**: 
  - Buttons: Default ocean blue, hover lifts with gold border glow, active slightly darker, disabled muted opacity
  - Inputs: Default with soft border, focus shows gold ring and slight lift, error state shows red border
  - Navigation: Active page shows gold underline, hover shows subtle gold highlight
  
- **Icon Selection**: 
  - Navigation: Fish, ForkKnife, Users, CalendarBlank, Images, Phone from Phosphor Icons
  - Social Media: InstagramLogo, FacebookLogo, WhatsappLogo for contact page
  - Form: User, Calendar, Clock, Phone icons for reservation form fields
  
- **Spacing**: 
  - Consistent use of Tailwind spacing: sections use py-16 or py-20, cards use p-6, form fields use gap-4, navigation items use gap-6
  - Container max-width of 1200px (max-w-6xl) for main content
  
- **Mobile**: 
  - Navigation collapses to hamburger menu using Sheet component at < 768px
  - Hero text scales down from 48px to 32px on mobile
  - Menu grid changes from 2-3 columns to single column
  - Gallery grid adapts from 3 columns to 2 to 1 based on screen size
  - Form maintains single column but adjusts padding
  - All interactive elements maintain 44x44px minimum touch targets
