# 🚀 Complete Deployment Guide: Going Live on Your Personal Domain & Hosting

Your portfolio website is now fully configured and exported as a high-performance production build.
A complete, pre-bundled archive is ready right now in your project folder:
👉 **[`website-deploy.zip`](./website-deploy.zip)** (Contains all HTML, CSS, JavaScript, Case Studies, Images, and `.htaccess`)

---

## Option 1: cPanel / Shared Hosting (Hostinger, Namecheap, Bluehost, GoDaddy, etc.)
*This is the most common hosting method. It takes less than 2 minutes.*

### Step 1: Log in to cPanel
1. Log in to your hosting provider's cPanel or control panel.
2. Under the **Files** section, click on **File Manager**.

### Step 2: Go to Your Domain Folder
- If this is your **primary domain** (e.g., `shakiristiak.com`), open the `public_html` directory.
- If this is an **add-on domain** or subdomain, open the directory designated for that domain (e.g., `public_html/portfolio` or `shakiristiak.com`).
- *(Optional: If there is an old placeholder `index.html` or `default.php`, delete or back it up).*

### Step 3: Upload the ZIP File
1. In the top toolbar, click the **Upload** button.
2. Select or drag-and-drop the **`website-deploy.zip`** file located in:
   ```
   D:\Shakir Istiak p\website-deploy.zip
   ```
3. Wait for the upload bar to turn green (100%).

### Step 4: Extract the Files
1. Go back to File Manager and click **Reload**.
2. Right-click on **`website-deploy.zip`** and select **Extract**.
3. Choose the extraction path (it should extract right inside `public_html`).
4. Once extraction finishes, delete the `website-deploy.zip` file to keep your storage tidy.

### Step 5: Verify Hidden Files (`.htaccess`)
1. In File Manager, click **Settings** (top right corner) and check **"Show Hidden Files (dotfiles)"** -> Click **Save**.
2. Ensure `.htaccess` is present. It already includes:
   - Automatic HTTP to HTTPS 301 redirection (Forces SSL)
   - Clean URLs (removes ugly `.html` extensions)
   - Gzip compression for fast loading
   - 1-Year browser caching headers for images, CSS, and JS
   - Custom 404 error handling

🎉 **Done!** Visit your domain (`https://yourdomain.com`) in your browser.

---

## Option 2: Vercel (100% Free, Global Edge CDN, Zero Maintenance)
*If you want automatic deployments whenever you update your code.*

1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy production website"
   git push origin main
   ```
2. Go to **[https://vercel.com](https://vercel.com)** and sign in with GitHub.
3. Click **"Add New Project"** and import `ShakirIstiakk/portfolio-website`.
4. Leave all settings at default and click **Deploy**.
5. Once deployed, go to **Settings > Domains** and enter your personal domain (e.g. `shakiristiak.com`).
6. Point your domain DNS records (A record `@` to `76.76.21.21` and CNAME `www` to `cname.vercel-dns.com`) at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).

---

## Option 3: Netlify or Cloudflare Pages (Drag-and-Drop)

1. Go to **[Netlify Drop](https://app.netlify.com/drop)** or **Cloudflare Pages**.
2. Drag and drop the **`out`** folder (`D:\Shakir Istiak p\out`) into the browser window.
3. Netlify will deploy it in seconds and let you bind your custom domain with free automatic SSL.

---

## How to Re-export Anytime You Make Changes
Whenever you update code or photos in the future, simply run:
```powershell
pnpm run export-zip
```
This single command will:
1. Compile the optimized static pages into `out/`
2. Copy the `.htaccess` configuration
3. Generate an updated `website-deploy.zip` ready to upload.
