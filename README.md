<div align="center">

# 🛍 AP-Shopper's

**A modern, fully-responsive e-commerce frontend**  
Built with Bootstrap 5 · Deployed on Vercel · Payments via Razorpay

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3?logo=bootstrap)](https://getbootstrap.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## ✨ Features

| Page | Highlights |
|------|-----------|
| **Home** | Hero carousel, product grid, category filters, sort, quick-view modal, search |
| **Cart** | Quantity controls, coupon codes, GST calculation, free-shipping progress bar, Razorpay checkout |
| **Product Details** | Image gallery, specs accordion, customer reviews, buy-now |
| **Contact** | Floating-label form, FAQ accordion, Formspree integration |
| **Login** | Split layout, password toggle, Bootstrap validation |
| **Register** | Password strength meter, confirm-match validation |

---

## 📁 Project Structure

```
AP-Shoppers/
├── index.html          # Home — product listing
├── Cart.html           # Shopping cart & checkout
├── Details.html        # Product detail page
├── Contact.html        # Contact form + FAQ
├── Login.html          # User login
├── Register.html       # User registration
├── css/
│   └── style.css       # Global custom styles
├── js/
│   └── auth.js         # Auth logic + toast utility
├── images/             # (optional) local images
├── vercel.json         # Vercel deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Deployment Guide

### Step 1 — Push to GitHub

```bash
# 1. Initialize git in your project folder
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "🚀 Initial commit — AP-Shopper's"

# 4. Create a repo on github.com, then add it as remote
git remote add origin https://github.com/YOUR_USERNAME/ap-shoppers.git

# 5. Push
git branch -M main
git push -u origin main
```

### Step 2 — Deploy to Vercel

**Option A — Vercel Dashboard (easiest)**

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `ap-shoppers` repository
4. Framework Preset → select **"Other"** (it's a static site, no build needed)
5. Leave Build Command and Output Directory **blank**
6. Click **"Deploy"** ✅

**Option B — Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy from inside your project folder
cd ap-shoppers
vercel

# Follow the prompts:
#   Set up and deploy? → Y
#   Which scope? → your account
#   Link to existing project? → N
#   Project name → ap-shoppers
#   Directory → ./
#   Override settings? → N
```

Your site will be live at `https://ap-shoppers.vercel.app` (or your custom name).

### Step 3 — Auto-Deploy on Every Push (CI/CD)

Once connected to Vercel, every `git push` to `main` **automatically redeploys** your site. No extra setup needed.

```bash
# Make changes, then:
git add .
git commit -m "✨ Update product cards"
git push
# Vercel detects the push → rebuilds → goes live in ~30 seconds
```

---

## ⚙️ Configuration

### Razorpay (Payments)
Replace the test key in `Cart.html` with your live key:
```js
// Cart.html — line ~150
key: "rzp_live_YOUR_LIVE_KEY_HERE",   // ← replace this
```
> ⚠️ Never commit live secret keys. Use environment variables for production backends.

### Formspree (Contact Form)
Replace the endpoint in `Contact.html`:
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

### Custom Domain on Vercel
1. Vercel Dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `ap-shoppers.com`)
3. Update DNS records at your registrar as instructed

---

## 🧪 Test Credentials

For auth, register any email/password — stored in `localStorage` (demo only).

---

## 📦 Tech Stack

- **HTML5 / CSS3 / Vanilla JS**
- **Bootstrap 5.3.3** — grid, components, utilities
- **Bootstrap Icons 1.11**
- **Google Fonts** — Dancing Script, Playfair Display, Lato
- **dummyjson.com** — product data API
- **Formspree** — contact form backend

---

## 👨‍💻 Developer

**Abhay Pandey** — Software Developer  
📞 +91 9519244202  
📧 abhaypandeyap32@gmail.com

---

<div align="center">
&copy; 2026 AP-Shopper's. All rights reserved.
</div>