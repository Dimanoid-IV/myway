# MyWayTo.Space - Alien Spaceship Tickets Landing Page

A modern, beautiful landing page for selling alien spaceship tickets with Stripe payment integration.

## Features

- 🚀 Modern React + Vite setup
- 🎨 Tailwind CSS styling with glassmorphism effects
- ⭐ Animated star background with twinkling effect
- 🌌 Interactive spiral galaxy with scroll-based expansion
- 💳 Stripe payment integration
- 📱 Mobile-responsive with horizontal scroll snap
- 🖼️ Lightbox gallery for prophecy images
- 📜 Comprehensive Terms & Conditions section

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dimanoid-IV/myway.git
cd myway
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Configure your Stripe settings in `.env`:

### Stripe Setup

To enable payment processing, you need to set up Stripe Payment Links:

#### Step 1: Get Your Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers → API keys**
3. Copy your **Publishable key** (starts with `pk_test_` for test mode)
4. Add it to your `.env` file:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
   ```

#### Step 2: Create Payment Links

1. Go to [Stripe Payment Links](https://dashboard.stripe.com/test/payment-links)
2. Click **+ New** to create a payment link
3. Create 4 payment links for each ticket tier:

   **Economy Orbit - $10**
   - Product name: Economy Orbit Ticket
   - Price: $10 USD
   - Description: Low-Earth Orbit, Standard Bio-Pod, Shared Oxygen Supply

   **Business Galaxy - $15**
   - Product name: Business Galaxy Ticket
   - Price: $15 USD
   - Description: Lunar Fly-by, Private Sleeping Pod, Synthetic Meals Included

   **Alien VIP - $25**
   - Product name: Alien VIP Ticket
   - Price: $25 USD
   - Description: Interstellar Gateway, Alien Interaction Lounge, Zero-G Spa

   **One-Way Ticket - $30**
   - Product name: One-Way Ticket
   - Price: $30 USD
   - Description: To the Unknown, Deep Sleep Chamber, Legacy Archive

4. After creating each payment link, copy the URL and add to `.env`:
   ```
   VITE_STRIPE_LINK_ECONOMY=https://buy.stripe.com/test/YOUR_LINK_1
   VITE_STRIPE_LINK_BUSINESS=https://buy.stripe.com/test/YOUR_LINK_2
   VITE_STRIPE_LINK_VIP=https://buy.stripe.com/test/YOUR_LINK_3
   VITE_STRIPE_LINK_ONEWAY=https://buy.stripe.com/test/YOUR_LINK_4
   ```

### Running the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production files will be in the `dist` directory.

## SEO Blog (50 Articles)

The project includes **50 long-form SEO articles** on U.S. UAP/UFO declassification (PURSUE, war.gov/UFO, AARO, KONA BLUE, Grusch, Apollo files) and space-ticket commerce.

- **Blog index:** `/blog/`
- **Articles:** `/blog/posts/{slug}.html`
- **Sitemap:** `/sitemap.xml`
- **RSS:** `/rss.xml`

Regenerate after editing `scripts/seo-articles.mjs`:

```bash
npm run generate:blog
```

## Project Structure

```
myway/
├── public/blog/          # Generated SEO articles (50 posts)
├── scripts/              # Blog generator
├── src/
│   ├── App.jsx           # Main application component
│   ├── stripe.js         # Stripe integration logic
│   ├── index.css         # Global styles and animations
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Stripe** - Payment processing
- **Lucide React** - Icons
- **ImgBB** - Image hosting

## Payment Flow

1. User clicks "Book This Voyage" button on any ticket card
2. `handleBooking()` function is called with ticket type and price
3. `createCheckoutSession()` from `stripe.js` is invoked
4. Payment link opens in a new tab
5. User completes payment on Stripe's secure checkout page
6. Stripe sends confirmation email with ticket PDF

## Security Notes

- Never commit your `.env` file to git
- Use test mode keys during development
- Switch to live mode keys only in production
- Payment Links are hosted by Stripe (PCI compliant)

## Deployment

### Deploying to GitHub Pages

1. Update `vite.config.js` with your base path
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

### Deploying to Vercel/Netlify

1. Connect your GitHub repository
2. Add environment variables in the dashboard
3. Deploy automatically on push

## Support

For issues or questions, please open an issue on GitHub.

## License

© 2026 Interstellar Travel Agency. All rights reserved.
