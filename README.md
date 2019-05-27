This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run the project

Install packages

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project notes

1. The product list is rendered in the home page
2. There are two routes: `/` and `/product/:id`. Logo in the header is clickable, so you can open the previous page (product list) by clicking it.
3. Sidebar and top menus are designed as static components.
4. Content part of the product list page has responsible layout. The number of products per one line is dynamic. Also the sidebar for small screens is hidden and can be reached by clicking the `Filters` button.Try to change the window width to see the result
5. Populated fields in the product details page: `price`, `sale_price`, `discount`, `discount_val`, `rating`, `reviews`, `images`, `post_title`
