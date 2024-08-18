
Food Ordering Website

This project is a full-fledged food ordering platform developed as part of my internship at Vilearnx Advanced Technologies. The website allows users to browse and order food from a dynamic menu, featuring user authentication, an intuitive shopping cart, and robust admin functionalities. The entire project was built using the MERN stack (MongoDB, Express.js, React.js, Node.js), leveraging its powerful features to create a seamless and efficient user experience.

Features
1. User Authentication
Signup/Login: Users can securely register and log in to the website using JWT (JSON Web Tokens) for authentication. Passwords are hashed using bcrypt to ensure security.
Session Management: Persistent login sessions are managed, ensuring that users stay logged in even after refreshing the page.
2. Menu Display and Filtering
Dynamic Menu: The menu items are fetched from the backend and displayed dynamically on the frontend.
Category-Based Filtering: Users can filter the menu items based on categories such as Appetizers, Main Course, Desserts, etc., providing a personalized browsing experience.
3. Add to Cart Functionality
Seamless Shopping Experience: Users can add items to their cart, adjust quantities, and proceed to checkout with ease.
Cart Persistence: The cart's state is maintained across sessions, so users can pick up where they left off.
4. Admin and User Pages
Admin Dashboard: The admin has access to a dedicated dashboard to manage menu items, view orders, and handle user queries.
User Page: Users have access to a personalized dashboard where they can view their order history and manage their account details.
Technologies Used
1. Frontend
React.js: Used for building the user interface with reusable components and managing state using React hooks.
CSS/SCSS: Styled-components and custom CSS for responsive design and consistent UI/UX across devices.
2. Backend
Node.js & Express.js: Used for building the RESTful API, handling requests, and managing routes.
MongoDB: A NoSQL database used for storing user data, menu items, and order details.
JWT (JSON Web Tokens): Implemented for secure user authentication and authorization.
3. Tools & Libraries
Axios: For making HTTP requests from the frontend to the backend.
Mongoose: For data modeling and working with MongoDB in an object-oriented way.
bcrypt: For hashing passwords and ensuring secure authentication.
