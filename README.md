# The Hertsmere - Membership Open Day Landing Page

A modern, responsive landing page for The Hertsmere Golf Club's Membership Open Day event.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Tailwind CSS**: Utility-first styling with custom animations
- **Interactive Elements**: Modals, carousels, and scroll reveals
- **Embedded Booking**: GoHighLevel calendar integration
- **SEO Optimized**: Semantic HTML and proper meta tags

## Structure

- `index.html` - Main landing page (single-file application)

## Deployment

This site is configured for easy deployment to:
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Quick Deploy to Netlify

1. Connect this repository to Netlify
2. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
3. Deploy!

### Manual Deployment

Simply upload `index.html` to any static hosting service.

## Local Development

No build process required! Simply open `index.html` in your browser:

```bash
open index.html
```

Or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000`

## Making Updates

1. Edit `index.html` with your changes
2. Test locally by opening in browser
3. Commit and push:
```bash
git add .
git commit -m "Your update description"
git push
```

4. Your hosting service will automatically redeploy

## Key Sections

1. **Hero** - Full-screen header with event details
2. **Value Proposition** - Why join The Hertsmere
3. **Video Tour** - Embedded promotional video
4. **How It Works** - Membership explanation
5. **Carousel** - Full-width image showcase
6. **Dual Audience** - Targeting serious and casual golfers
7. **Pricing** - Membership tiers
8. **Open Day Activities** - What to expect at the event
9. **Booking Form** - GHL calendar embed
10. **Testimonials** - Member reviews
11. **Gallery** - Scrolling marquee of images

## Customization

### Update Event Date
Search for "Sun 8th Feb" and update to your event date.

### Update Booking Calendar
Replace the iframe src in the "Book Your Free Place" section (line ~XX):
```html
<iframe src="YOUR_GHL_CALENDAR_URL" ...></iframe>
```

### Update Images
Replace image URLs in the `src` attributes throughout the HTML.

### Color Scheme
Main colors are defined in CSS:
- Gold: `#d6b796`
- Teal: `#00a1a2`
- Dark: `#2d3d4d`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 The Hertsmere. All rights reserved.
