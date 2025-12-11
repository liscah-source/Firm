# Squarespace Legal Packages - Complete HTML/CSS/JS Package

This folder contains standalone HTML files ready to be used in Squarespace Code Blocks.

## Files Included

### 1. `packages-landing-squarespace.html`
**Main packages landing page** - Shows all 4 package categories with cards and links

**Features:**
- Responsive 2-column grid (1 column on mobile)
- "Most Popular" badge on Strategic Brand package
- Compare button linking to comparison tool
- All CSS embedded (no external dependencies)

**How to Use:**
- Copy the entire file content
- In Squarespace, add a **Code Block**
- Paste the HTML
- Update the href links to point to your actual Squarespace pages

### 2. `squarespace-comparison-tool.html`
**Interactive comparison tool** - Compare up to 3 packages side-by-side

**Features:**
- Select from all 12 package tiers (4 categories × 3 tiers each)
- Real-time interactive selection (click to add/remove packages)
- Dynamic comparison table with checkmarks/X marks
- Fully responsive with horizontal scrolling on mobile
- All JavaScript included for full interactivity

**How to Use:**
- Copy the entire file content
- In Squarespace, create a new page called "Compare Packages"
- Add a **Code Block**
- Paste the HTML
- The JavaScript handles all interactivity automatically

## Customization Guide

### Update Links

In `packages-landing-squarespace.html`, update these href values:
```html
href="#start-up"    → href="/your-startup-page-url"
href="#brand"       → href="/your-brand-page-url"
href="#contract"    → href="/your-contract-page-url"
href="#scale"       → href="/your-scale-page-url"
href="#compare"     → href="/compare-packages"  (your comparison page URL)
```

In `squarespace-comparison-tool.html`, update:
```html
href="#packages"    → href="/packages"  (your main packages page URL)
```

### Update Button Actions

**Consultation Buttons:**
Find this code in both files:
```html
<button>Schedule a Consultation</button>
```

Replace with:
```html
<button onclick="window.location.href='/book-consultation'">Schedule a Consultation</button>
```

**"Get Package" Buttons in Comparison Tool:**
The JavaScript generates these dynamically. To add links, modify the JavaScript:

Find this section (around line 550):
```javascript
html += `
    <td>
        <button class="select-btn">Get ${pkg.tierName}</button>
    </td>
`;
```

Replace with:
```javascript
html += `
    <td>
        <button class="select-btn" onclick="window.location.href='/contact?package=${encodeURIComponent(pkg.tierName)}'">Get ${pkg.tierName}</button>
    </td>
`;
```

### Color Customization

**Primary Blue Color (#4BA5C8)** - Search and replace with your brand color:
- Main buttons
- Package cards (Strategic Brand™)
- Compare button border
- Selected state highlights

**Red CTA Buttons (#C83E3E)** - Update for your preferred CTA color

**Find and Replace:**
1. `#4BA5C8` → Your primary color
2. `#C83E3E` → Your CTA button color
3. `#0B5B7F` → Your dark blue/heading color

### Font Customization

Current font stack:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
```

To use your Squarespace fonts, replace with:
```css
font-family: inherit;
```

This will inherit the fonts from your Squarespace theme.

## Technical Notes

- **No External Dependencies:** All CSS and JavaScript are embedded in the HTML files
- **Fully Responsive:** Works on mobile, tablet, and desktop
- **Browser Compatible:** Works in all modern browsers
- **Accessible:** Uses semantic HTML and proper ARIA attributes

## Package Data

The comparison tool contains all 12 package tiers with complete feature lists:

**Start-Up:**
- Foundation ($1,297)
- Growth ($3,447)
- Scale ($8,497)

**Brand:**
- Brand Shield ($2,497)
- Brand Fortress ($3,997)
- Brand Empire ($7,997)

**Contract:**
- Contract Review Essentials ($1,250)
- Contract Draft & Protect ($2,750)
- Contract Advice & Negotiation ($4,950)

**Scale (Fractional GC):**
- Strategic Advisor ($2,500/mo)
- Strategic Partner ($5,000/mo)
- Strategic Counsel ($10,000/mo)

## Support

If you need to modify the package data in the comparison tool:

1. Find the `allTiers` array in the JavaScript section (starts around line 270)
2. Update the features, prices, or add new packages
3. The comparison table will automatically update

## Testing

Before going live:
1. Test on mobile, tablet, and desktop
2. Click through all package selection options in comparison tool
3. Verify all links point to correct URLs
4. Test consultation buttons

## Questions?

All files are self-contained and ready to use. Simply copy, paste, and customize the links!
