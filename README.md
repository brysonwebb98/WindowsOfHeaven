# Windows of Heaven Storefront

## Overview
Windows of Heaven is an storefront website built for the web frontend course. The website allows users to browse stained glass products, view product details, add products to a shopping cart, and complete the checkout process.

The project focuses on creating a dynamic shopping experience using JavaScript, modular code, local storage, and responsive design.

## Features

- Browse a list of available stained glass products
- View individual product detail pages
- Add products to the cart
- Remove products from the cart
- View cart totals and checkout pricing
- Responsive layout for desktop and mobile devices
- Dynamic header and footer loaded across all pages

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON
- Vite

## JavaScript Concepts Used

- localStorage to save cart items between page refreshes
- Query parameters to load the correct product details
- DOM manipulation to dynamically display products and cart items
- Event listeners for buttons, forms, and user interactions
- Fetch API to retrieve product information from JSON files
- JavaScript modules with import and export
- Array methods such as map, filter, and reduce
- Template literals to generate HTML dynamically

## Example Query Parameter

```md
productDetail.html?product=14
```

In this example:

- `product` is the key
- `14` is the value

The product ID is pulled from the URL so the correct product information can be displayed.

## Running the Project

To run the project locally:

```bash
npm install
npm run dev
```

After running the development server, open the local URL provided in the terminal.

## Purpose

The goal of this project was to demonstrate an understanding of modern frontend web development concepts while creating a functional online storefront experience.

