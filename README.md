# 🚗 DriveEase – On-Demand Driver Booking Platform

A modern, professional web application built with React.js + Tailwind CSS for booking professional drivers for your personal car.

---

## 📁 Project Structure

```
driver-booking/
├── public/
│   └── index.html              # HTML entry point (loads Google Fonts)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky top navigation bar
│   │   ├── HeroSection.jsx      # Landing hero with stats & how-it-works
│   │   ├── FilterBar.jsx        # Experience / rating / availability filters
│   │   ├── DriverCard.jsx       # Individual driver profile card
│   │   ├── LoadingSpinner.jsx   # Skeleton loader + spinner
│   │   ├── EmptyState.jsx       # "No drivers found" UI
│   │   ├── BookingModal.jsx     # 2-step booking flow modal
│   │   ├── ConfirmationScreen.jsx  # Post-booking confirmation
│   │   └── Footer.jsx           # Site footer
│   ├── data/
│   │   └── drivers.js           # Mock driver data (8 drivers) + booking types
│   ├── hooks/
│   │   └── useDrivers.js        # Custom hook: loading, filtering, state
│   ├── pages/
│   │   └── HomePage.jsx         # Main page layout
│   ├── utils/
│   │   └── helpers.js           # Utility: stars, badge styles, trip formatting
│   ├── App.js                   # Root component: modal state management
│   ├── index.js                 # React DOM entry
│   └── index.css                # Tailwind imports + global styles
├── tailwind.config.js           # Tailwind theme (fonts, colors, animations)
├── postcss.config.js            # PostCSS for Tailwind
└── package.json                 # Dependencies
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 16+ installed → https://nodejs.org
- npm (comes with Node.js)

### Steps

```bash
# 1. Navigate into the project folder
cd driver-booking

# 2. Install all dependencies
npm install

# 3. Start the development server
npm start
```

Your app will open at **http://localhost:3000** 🎉

---

## 🌐 Deploy to Vercel (Free)

### Option A: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# From inside the project folder
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: driver-booking
# - Directory: ./  (press Enter)
# - Build command: npm run build
# - Output directory: build
```

### Option B: Via GitHub (Recommended)
1. Push the project to a GitHub repo
2. Go to https://vercel.com → Sign up/Login
3. Click **"Add New Project"**
4. Import your GitHub repo
5. Vercel auto-detects React → click **Deploy**
6. Your app is live at `https://your-project.vercel.app` ✅

---

## ✨ Features Implemented

| Feature | Status |
|---|---|
| Driver listing with 8 mock drivers | ✅ |
| Detailed profile cards | ✅ |
| Filter by experience (range slider) | ✅ |
| Filter by rating (quick buttons) | ✅ |
| Filter by availability (day buttons) | ✅ |
| Filter by specialization | ✅ |
| Search by name/specialization | ✅ |
| Full Day / Long Distance / Emergency booking | ✅ |
| 2-step booking modal | ✅ |
| Booking confirmation with ID | ✅ |
| Loading skeleton + spinner | ✅ |
| Empty state UI | ✅ |
| Top Rated driver highlight | ✅ |
| Reviews preview on cards | ✅ |
| Fully responsive (mobile + desktop) | ✅ |
| Dark theme with glassmorphism | ✅ |
| Smooth animations & hover effects | ✅ |

---

## 🛠 Tech Stack

- **React 18** – Functional components + Hooks
- **Tailwind CSS 3** – Utility-first styling
- **useState / useEffect / useMemo** – State management
- **Custom Hook (useDrivers)** – Clean filter logic
- **Google Fonts** – Playfair Display + DM Sans + DM Mono

---

## 📦 Adding a Backend Later

To connect a real backend:
1. Replace `src/data/drivers.js` mock data with API calls
2. In `useDrivers.js`, replace the `setTimeout` with a `fetch()` or `axios.get()`
3. Add authentication (e.g., Firebase Auth or JWT)
4. Store bookings in a database (Firebase / Supabase / MongoDB)

---

Built with ❤️ using React.js + Tailwind CSS
