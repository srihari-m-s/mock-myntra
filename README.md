# Mock Myntra
A mock eCommerce website built for the Frontend Developer Role/Internship at Go Comet.

# Overview
1. Create a Shirts Page that resembles [Myntra](https://www.myntra.com/shirts) shirts page.
    - Add Filter functinality.
    - Add Sorting Functionality.
    - Add Wishlist functionality.
    - Full-text Search on Products.
    - Product card resembles myntra design.
2. Create Individual Products Page that resembles [Myntra](https://www.myntra.com/shirts/highlander/highlander-men-white-slim-fit-casual-shirt/2050688/buy) product page.
    - Add Select Size functionality.
    - Image on click should show a full size version.
    - Add to Bag and Wishlist functionality.
    - Bag should persist during the whole session.
    - Multiple products can be added or removed from the bag.


## Implementation

### 1. Technology Used

- Vite (To setup minimal React project Template)
- React 
- Vanilla CSS
- React Router latest 
- JS libraries
-- match-sorter (used in filtering implementation)
-- react-icons
-- react-medium-image-zoom (used to implement "show full size image on click" function)

### 2. Shirts Page
Main page of the assignment. Product filters, Sort Selection. The data fetching is handled using

#### 2.1 Sidebar Component
Sidebar contains the implemented filtering functionality.
Filters implemented - 
- Men, Women, Girls, Boys Filter
- Clothing Brands Filter
- Price Range Filter
- Filter by Discount

#### 2.2 Product Grid

Displays products in a responsive grid. Products and their details are shown as a "card". 
When no filters are selected, shows the full list of products. When a filter is active, shows  the 
filtered list of products.

- Each product Card has the "Add to Wishlist  functionality".
- On product click, redirects user to individual product page.

### 3. Product Page

Individual product page, that roughly resembles myntra design. Divided into left and right section.
Left section is another image grid that holds different images of the product. Right section displays
product info. Lets user select size for the product and after that lets the user  add the product either to wishlist or to bag/cart.

- Size is a required for "Add to Bag functionality"
-  On  image click, a full size version of the image is shown to the user.

### 4. Bag

Can be accessed by clicking the "Bag" icon in Navigation. On click, it opens a modal that displays Items in wish list and items in bag. Multiple Items can be added to to Wishlist and Bag. Current implementation only allows users to remove items from bag. More number of same items cannot be manipulated from the bag modal.

##  Deployment and Running project Locally

### 1. Run Locally

- Download the mock-myntra.zip folder from [Google Drive](https://drive.google.com/file/d/1c6hNI8LBgXTWU3drrFvag3NewI7ef7yN/view?usp=sharing).
- Unzip and cd to mock-myntra folder.
- Run ``npm install `` to install all dependencies.
- Run ``npm run dev`` to start local development server.
-  Visit localhost in browser to view the application.

### 2. Deployed Live Link.

- The website is deployed on netlify. This is the [live link](https://mock-myntra.netlify.app/) to the website.