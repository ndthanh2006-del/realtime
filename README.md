# Paradise Nursery

A React shopping cart application for an online houseplant shop. Built with React, React Router, Redux Toolkit, and CSS.

## Features
- Landing page with a Get Started button
- About Us page
- 18 houseplants across three categories
- Add-to-cart buttons that disable after adding
- Shared navigation with a live cart item count
- Cart quantity controls, item removal, and calculated totals
- Checkout placeholder and Continue Shopping link

## Run locally
1. Install [Node.js](https://nodejs.org/).
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed in the terminal.

## Project structure
- `src/App.jsx` — application routes and landing page
- `src/App.css` — application styling and landing-page background
- `src/components/AboutUs.jsx` — company information
- `src/components/Navbar.jsx` — shared navigation
- `src/components/ProductList.jsx` — plant catalog
- `src/components/CartItem.jsx` — shopping cart page
- `src/redux/CartSlice.jsx` — Redux cart state and actions
- `src/redux/store.js` — Redux store
