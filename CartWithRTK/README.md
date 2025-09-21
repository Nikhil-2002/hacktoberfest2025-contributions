# 🛒 Product Grid & Cart App

A simple React + Redux Toolkit application to display products in a responsive grid and manage a cart. Products are fetched from [DummyJSON API](https://dummyjson.com/products). Users can add, remove, and clear items in the cart.

---

## 📦 Features

- Fetches product data from an API.
- Displays products in a responsive **CSS grid**.
- Add, remove, and clear items in the cart using **Redux Toolkit**.
- Fully responsive design.
- Simple and clean UI for product cards.

---

## ⚡ Technologies Used

- React
- Redux Toolkit
- JavaScript (ES6+)
- CSS Grid & Flexbox
- HTML5

---

## 🖥️ Project Structure

src/
├─ Redux/
│ ├─ Slice.js # Cart slice
│ ├─ productSlice.js # Product slice
├─ Components/
│ ├─ Product.jsx # Product grid & buttons
├─ App.jsx
├─ index.js

yaml
Copy code

---

## 🚀 How to Run

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <project-folder>
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
📌 Suggested Upgrades & New Features
Contributors can improve and extend this project by adding:

Cart functionality enhancements:

Show cart count in the header.

Display cart items in a dropdown/modal.

Persist cart data in localStorage.

UI Improvements:

Show product details on hover.

Add product ratings and descriptions.

Add loading skeletons while fetching products.

Filtering & Sorting:

Filter by category, price, or availability.

Sort products by price, popularity, or rating.

Search functionality:

Live search for products by name.

Responsive & Accessibility enhancements:

Improve mobile view and accessibility features.

Add ARIA labels for better screen reader support.

Testing:

Add unit and integration tests using Jest and React Testing Library.

🤝 Contribution Guidelines
Fork the repository.

```
