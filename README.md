# ![Myntra Logo](https://github.com/srihari-m-s/mock-myntra/blob/master/src/assets/Myntra-icon-logo.svg?raw=true) Mock Myntra
A mock eCommerce website that is inspired by [Myntra](https://www.myntra.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/058c9541-bcbc-4efe-bcfa-31444d4a7707/deploy-status)](https://app.netlify.com/sites/mock-myntra/deploys)

# Project Objectives
1. Create a Shirts Page that resembles [Myntra](https://www.myntra.com/shirts) shirts page.
    - Add Filter functinality.
    - Add Sorting Functionality.
    - Add Wishlist functionality.
    - Product card resembles myntra design.
2. Create Individual Products Page that resembles [Myntra](https://www.myntra.com/shirts/highlander/highlander-men-white-slim-fit-casual-shirt/2050688/buy) product page.
    - Add Select Size functionality.
    - Image on click should show a full size version.
    - Add to Bag and Wishlist functionality.
    - Bag should persist during the whole session.
    - Multiple products can be added or removed from the bag.


## Overview

### 1. Technology Used

- Vite (To setup minimal React project Template)
- React 
- Vanilla CSS
- React Router v6 
- JS libraries
    - match-sorter (used in filtering implementation)
    - react-icons
    - react-medium-image-zoom (used to implement "show full size image on click" function)

### 2. Shirts Page
Main page of the project. It is a typical eCommerce products page with filters and sorting functionality.
Products can be searched by name on this page.

#### 2.1 Sidebar Component
Sidebar contains the implemented filtering functionality.
Filters implemented - 
- Men, Women, Girls, Boys Filter
- Clothing Brands Filter
- Price Range Filter
- Filter by Discount

#### 2.2 Product Grid

Displays products in a responsive grid. Products and their details are shown as a "card". 
When no filters are selected, shows the full list of products. When a filter is active, shows the 
filtered list of products.

- Each product Card has the "Add to Wishlist  functionality".
- On product click, redirects user to individual product page.

### 3. Product Page

Individual product page, that roughly resembles myntra design. Divided into left and right section.
Left section is another image grid that holds different images of the product. Right section displays
product info. Lets user select size for the product and after that lets the user  add the product either to wishlist or to bag/cart.

- Size is a required for "Add to Bag functionality"
-  On  image click, a full size version of the image is shown to the user.

### 4. Bag Page

Bag/Cart page can be accessed by clicking the "Bag" icon in Navigation. Displays Items in wish list and items in bag. Multiple Items can be added to to Wishlist and Bag.

##  Deployment and Running project Locally

### 1. Run Locally

- Clone the repository with git or download the files from GitHub.
    - ``git clone https://github.com/srihari-m-s/mock-myntra.git``
- Unzip and cd to mock-myntra folder.
- Run ``npm install `` to install all dependencies.
- Run ``npm run dev`` to start local development server.
-  Visit localhost in browser to view the application.

### 2. Deployed Live Link.

- The website is deployed on netlify. This is the [live link](https://mock-myntra.netlify.app/) to the website.