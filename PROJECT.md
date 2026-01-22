# Hertsmere Open Day Landing Page

## Project Overview
Landing page for The Hertsmere Golf Club open day event, showcasing facilities and encouraging visitor registrations.

## Live URLs
- **Production**: https://hertsmere.openday.golf/
- **GitHub**: https://github.com/albatrossinfo/hertsmere-openday.git
- **Vercel Dashboard**: https://vercel.com/dashboard

## Domain Strategy
- Main domain: `openday.golf`
- Client-specific subdomain: `hertsmere.openday.golf`
- Future clients can have their own subdomains

## Tech Stack
- **Frontend**: HTML, Tailwind CSS, Vanilla JavaScript
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Version Control**: GitHub
- **Assets**: Supabase Storage + The Hertsmere website

## Key Features
- Immersive hero carousel with Ken Burns effect
- Responsive design (mobile-first)
- Modern interactions (ripple effects, smooth scroll progress)
- FAQ section with accordion
- Integrated booking CTAs
- Logo integration (header, footer)

## Project Structure
```
/hertsmere-landing-page/
├── index.html              # Main landing page
├── assets/                 # Images and static files
│   └── hertsmere-logo-kingfisher.png
├── README.md              # General information
├── SETUP.md               # Setup instructions
├── DEPLOYMENT.md          # Deployment guide
├── UPDATE_GUIDE.md        # How to update content
└── PROJECT.md             # This file
```

## Recent Updates (Jan 22, 2026)
- ✅ Added The Hertsmere logo to header and footer
- ✅ Replaced gallery marquee with immersive 5-slide carousel
- ✅ Implemented Ken Burns zoom effect on carousel
- ✅ Added auto-advance with progress bar
- ✅ Fixed duplicate carousel conflict
- ✅ Added ripple effects on buttons
- ✅ Added scroll progress indicator

## Quick Commands
```bash
# Navigate to project
cd /Users/james/Documents/Claude/hertsmere-landing-page

# View changes
git status

# Deploy changes
git add .
git commit -m "Your message"
git push

# View live site
open https://hertsmere.openday.golf/
```

## Contact
- Client: The Hertsmere Golf Club
- Developer: James (Albatross Info)

## Notes
- Vercel auto-deploys on every git push
- DNS hosted at openday.golf registrar
- Custom subdomain setup via CNAME record
