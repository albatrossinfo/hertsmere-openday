# Deployment Guide

This guide covers multiple deployment options for your landing page.

## Option 1: Netlify (Recommended - Easiest)

### Method A: Netlify Drop

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `index.html` file
3. Done! Netlify will give you a URL instantly
4. Optional: Click "Site settings" → "Change site name" to customize your URL

### Method B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# From your project directory
netlify login
netlify deploy --prod
```

### Method C: Connect to Git

1. Push your code to GitHub (see below)
2. Go to [https://app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.`
6. Click "Deploy"

**Auto-deployments**: Every push to main will automatically deploy!

## Option 2: Vercel

### Method A: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# From your project directory
vercel login
vercel --prod
```

### Method B: Connect to Git

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Framework Preset: Other
6. Click "Deploy"

**Auto-deployments**: Every push to main will automatically deploy!

## Option 3: GitHub Pages

```bash
# Create GitHub repository first
git remote add origin https://github.com/YOUR_USERNAME/hertsmere-landing.git
git push -u origin main

# Enable GitHub Pages
# Go to repository Settings → Pages
# Source: Deploy from branch
# Branch: main / (root)
# Save
```

Your site will be live at: `https://YOUR_USERNAME.github.io/hertsmere-landing/`

## Option 4: AWS S3 + CloudFront (Advanced)

### Setup

```bash
# Install AWS CLI
brew install awscli  # macOS
# OR
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

# Configure AWS
aws configure

# Create S3 bucket
aws s3 mb s3://hertsmere-landing --region us-east-1

# Enable static website hosting
aws s3 website s3://hertsmere-landing --index-document index.html

# Upload files
aws s3 sync . s3://hertsmere-landing --exclude ".git/*"

# Make bucket public (create bucket-policy.json first)
aws s3api put-bucket-policy --bucket hertsmere-landing --policy file://bucket-policy.json
```

**bucket-policy.json**:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::hertsmere-landing/*"
  }]
}
```

## Push to GitHub

If you haven't already:

```bash
# Create a new repository on GitHub.com
# Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Custom Domain

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions

### Vercel
1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS records as shown

### GitHub Pages
1. Settings → Pages → Custom domain
2. Add your domain
3. Configure DNS:
   - Type: A Record
   - Host: @
   - Value: (GitHub Pages IPs - shown in settings)

## Updating the Site

After making changes to `index.html`:

```bash
# Save your changes
git add index.html

# Commit
git commit -m "Update: describe your changes"

# Push (triggers auto-deploy on Netlify/Vercel/GitHub Pages)
git push
```

**For manual deployments (Netlify Drop/Vercel CLI)**:
- Netlify Drop: Just drag and drop the updated file again
- Netlify CLI: `netlify deploy --prod`
- Vercel CLI: `vercel --prod`

## Environment-Specific Configuration

If you need different settings for staging vs production:

### Netlify
Create `netlify.toml` branches:
```toml
[context.production]
  [context.production.environment]
    API_URL = "https://api.production.com"

[context.deploy-preview]
  [context.deploy-preview.environment]
    API_URL = "https://api.staging.com"
```

## Troubleshooting

**Issue**: Site not updating after push
- **Solution**: Check build logs in your hosting dashboard
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

**Issue**: Images not loading
- **Solution**: Ensure image URLs are absolute paths or properly referenced
- Check browser console for errors

**Issue**: Form not submitting
- **Solution**: Verify GoHighLevel calendar embed URL is correct
- Check for JavaScript errors in console

## Performance Tips

1. **Image Optimization**: Consider using WebP format for images
2. **CDN**: Netlify and Vercel provide CDN automatically
3. **Caching**: Headers configured in `netlify.toml`
4. **Monitoring**: Add Google Analytics or similar

## Security

All hosting options provide:
- ✅ Free HTTPS/SSL certificates
- ✅ DDoS protection
- ✅ Global CDN
- ✅ Automatic security updates

## Cost

- **Netlify**: Free for 100GB bandwidth/month
- **Vercel**: Free for hobby projects
- **GitHub Pages**: Free
- **AWS S3**: ~$0.50/month for small sites

## Support

- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- GitHub Pages Docs: https://docs.github.com/pages
