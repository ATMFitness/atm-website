# ATM Mobility & Therapy Website

Modern, professional website for ATM Mobility & Therapy featuring:
- Single-page scrolling design
- Mobile responsive
- Red/Silver/Black brand colors
- Service listings with pricing
- Package purchasing (Square integration ready)
- Team member profiles
- Integrated booking (Noterro)
- Google Maps location

## Files Included

- `index.html` - Main website file
- `style.css` - All styling
- `script.js` - Interactive features
- `logo.png` - ATM logo
- `README.md` - This file

## Deployment Instructions

### Option 1: GitHub Pages (Free, Recommended)

1. **Create GitHub Repository:**
   - Go to github.com
   - Click "New Repository"
   - Name it: `atm-website`
   - Make it Public
   - Click "Create Repository"

2. **Upload Files:**
   - Click "uploading an existing file"
   - Drag all files from this folder
   - Commit changes

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click Save
   - Wait 2-3 minutes

4. **Connect Custom Domain (atmmobility.com):**
   - In GitHub Pages settings, enter: `atmmobility.com`
   - Go to Cloudflare DNS settings
   - Add these records:
     ```
     Type: A
     Name: @
     Content: 185.199.108.153
     
     Type: A
     Name: @
     Content: 185.199.109.153
     
     Type: A
     Name: @
     Content: 185.199.110.153
     
     Type: A
     Name: @
     Content: 185.199.111.153
     
     Type: CNAME
     Name: www
     Content: YOUR-GITHUB-USERNAME.github.io
     ```
   - Wait 10-30 minutes for DNS propagation

### Option 2: Netlify (Alternative Free Option)

1. Go to netlify.com
2. Sign up/login
3. Drag the entire folder onto Netlify
4. Connect custom domain in settings

## Setting Up Square Payment Links

To enable package purchases:

1. **Create Square Products:**
   - Log into square.com
   - Go to Online → Checkout
   - Create new items:
     - 10-Session Training Pack - $750
     - 10-Session FST Pack - $1,000
     - 5-Session Massage Pack - $650
     - Complete Wellness Combo - $1,600

2. **Get Payment Links:**
   - For each product, click "Share"
   - Copy the checkout link
   - It looks like: `https://checkout.square.site/buy/XXXXX`

3. **Add to Website:**
   - Open `script.js`
   - Find the `packageLinks` object (line ~40)
   - Replace placeholder URLs with real Square links:
     ```javascript
     const packageLinks = {
         'training-10': 'https://checkout.square.site/buy/YOUR_ACTUAL_LINK_1',
         'fst-10': 'https://checkout.square.site/buy/YOUR_ACTUAL_LINK_2',
         'massage-5': 'https://checkout.square.site/buy/YOUR_ACTUAL_LINK_3',
         'combo': 'https://checkout.square.site/buy/YOUR_ACTUAL_LINK_4'
     };
     ```
   - Uncomment line 53: `// window.open(paymentLink, '_blank');`
   - Comment out or remove the alert on line 50
   - Save and re-upload to GitHub

## Updating Content

### To Change Prices:
Edit `index.html` - search for the service/package and update the price

### To Update Services:
Edit `index.html` - find the services-grid section and modify

### To Add Real Photos:
Replace the avatar initials with actual images:
1. Add photos to the folder (e.g., `anthony.jpg`)
2. In `index.html`, replace `<div class="member-avatar" data-initials="AM"></div>`
   with `<img src="anthony.jpg" class="member-avatar-img">`
3. Add this CSS to `style.css`:
   ```css
   .member-avatar-img {
       width: 120px;
       height: 120px;
       border-radius: 50%;
       object-fit: cover;
       border: 4px solid var(--silver);
   }
   ```

### To Update Contact Info:
Edit the contact section in `index.html`

## Maintenance

- Website is static (no database, no server costs)
- Hosting: FREE via GitHub Pages
- Updates: Just edit files and push to GitHub
- No ongoing costs except domain ($15/year)

## Support

For technical issues or updates, contact your developer.

Website built February 2026.
