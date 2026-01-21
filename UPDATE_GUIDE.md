# Quick Update Guide

This guide shows you how to make common updates to your landing page.

## Making Changes

### 1. Update Event Date

**Find and replace:**
- Search for: `Sun 8th Feb`
- Replace with: Your new date

**Locations:**
- Hero section (line ~95)
- Booking section (line ~XXX)

### 2. Update Event Time

**Find and replace:**
- Search for: `10am - 2pm`
- Replace with: Your new time

### 3. Update Booking Calendar

Find this code in the "Book Your Free Place" section:

```html
<iframe src="https://api.leadconnectorhq.com/widget/booking/FzuYNVjzuEtlEhbBS5s2"
        style="width: 100%; border:none; overflow: hidden; height: 600px; border-radius: 12px;"
        scrolling="no"
        id="FzuYNVjzuEtlEhbBS5s2_1769003864160">
</iframe>
```

Replace the `src` URL with your GoHighLevel calendar URL.

### 4. Update Images

**Main hero image:**
```html
<img src="YOUR_IMAGE_URL" alt="The Hertsmere Aerial Fairway" ...>
```

**Other images:**
- Search for `supabase.co/storage` to find all image URLs
- Replace with your own image hosting URLs

**Image recommendations:**
- Hero: 1600x900px minimum
- Cards: 800x600px
- Carousel: 2300x1300px

### 5. Update Text Content

Simply find the section you want to edit and change the text:

```html
<h1>Your perfect Saturday starts here.</h1>
<!-- Change to: -->
<h1>Your new heading here.</h1>
```

### 6. Update Colors

**Main colors are defined in the `<style>` section:**

```css
/* Find these and update: */
.text-gold { color: #d6b796; }  /* Gold accent */
.bg-gold { background-color: #d6b796; }
.border-gold { border-color: #d6b796; }

/* Teal: #00a1a2 */
/* Dark blue: #2d3d4d */
```

### 7. Update Contact Information

**Footer section** - find and update:
```html
<p class="text-gray-400 text-sm leading-relaxed mb-6 font-light font-work">
    The Hertsmere,<br>
    Watling Street,<br>
    Elstree, Borehamwood,<br>
    WD6 3AA
</p>
```

### 8. Update Social Media Links

**Footer section** - find and replace the `#` with your URLs:
```html
<a href="https://instagram.com/YOUR_HANDLE" ...>Instagram</a>
<a href="https://twitter.com/YOUR_HANDLE" ...>Twitter</a>
<a href="https://facebook.com/YOUR_PAGE" ...>Facebook</a>
```

### 9. Update Pricing

Find the pricing section and update:

```html
<span class="font-serif font-bold text-[#2d3d4d] text-[3rem]">£250</span>
<p class="font-work font-medium text-[#00a1a2] text-base mb-4">100 points</p>
```

### 10. Update Video

Find the video modal section:

```javascript
function openVideoModal() {
    iframe.src = "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=0";
    openModal('video-modal');
}
```

Replace `YOUR_VIDEO_ID` with your YouTube video ID.

## Testing Changes Locally

### Option 1: Open in Browser
```bash
cd /Users/james/hertsmere-landing-page
open index.html
```

### Option 2: Local Server
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Publishing Changes

### Step 1: Save Your Changes
Make your edits to `index.html` and save the file.

### Step 2: Test Locally
Open the file in your browser and test everything works.

### Step 3: Commit to Git
```bash
git add index.html
git commit -m "Update: describe what you changed"
```

### Step 4: Push to Deploy
```bash
git push
```

If connected to Netlify/Vercel/GitHub Pages, your site will automatically update in 30-60 seconds!

## Quick Fixes

### Image Not Loading
- ✅ Check the URL is correct
- ✅ Make sure it's an absolute URL (starts with https://)
- ✅ Test the image URL in a new browser tab

### Layout Broken
- ✅ Check you didn't accidentally delete a closing tag (`</div>`)
- ✅ Use your code editor's bracket matching feature
- ✅ Revert to last working version: `git checkout index.html`

### JavaScript Not Working
- ✅ Open browser console (F12) and check for errors
- ✅ Make sure you didn't edit the `<script>` section
- ✅ Check for missing semicolons or quotes

## Common Edits Checklist

Before going live with changes:

- [ ] Test on desktop browser
- [ ] Test on mobile (use browser dev tools)
- [ ] Check all links work
- [ ] Verify booking calendar loads
- [ ] Test form submission
- [ ] Check all images load
- [ ] Verify video plays
- [ ] Check all buttons work
- [ ] Test navigation/scrolling
- [ ] Verify responsive design

## Getting Help

**Backup before major changes:**
```bash
cp index.html index.backup.html
```

**Revert to previous version:**
```bash
git log  # Find the commit you want
git checkout COMMIT_HASH index.html
```

**See what changed:**
```bash
git diff index.html
```

## Best Practices

1. **Make small changes**: Test one thing at a time
2. **Commit often**: Easier to revert if something breaks
3. **Use descriptive commit messages**: "Update pricing" not "changes"
4. **Test before pushing**: Saves you from broken deployments
5. **Keep a backup**: Copy of working version before major edits

## Need More Help?

- Check browser console for errors (F12 key)
- Search for the error message on Google
- Revert to last working commit
- Review the original HTML structure

## Advanced: Adding New Sections

To add a new section, copy an existing section structure:

```html
<section class="bg-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
        <h2 class="font-serif text-3xl text-center mb-8">New Section Title</h2>
        <p class="text-gray-600 text-center">Your content here</p>
    </div>
</section>
```

Paste it between existing sections and customize the content.
