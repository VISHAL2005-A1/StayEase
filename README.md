# 🏠 StayEasy – Secure Accommodation Booking Platform

A full-stack web application that allows users to list, browse, and book accommodations securely. Built with the MERN-adjacent stack using Node.js, Express.js, MongoDB, and Passport.js.

🔗 **Live Demo:** [https://major-project-2-glpj.onrender.com](https://major-project-2-glpj.onrender.com)

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Express.js, MVC Architecture
- **Database:** MongoDB
- **Authentication:** Passport.js
- **Deployment:** Render.com

---

## ✨ Features

Here's what you can do with StayEasy:

- **Browse Listings:** View all available accommodation listings on the platform.
- **Create a Listing:** Registered users can add new property listings with details and images.
- **Edit & Delete:** Users can update or remove their own listings at any time.
- **User Authentication:** Secure registration, login, and logout using Passport.js.
- **Session Management:** Persistent login sessions for a smooth user experience.
- **Access Control:** Users can only manage their own listings — not others'.

---

## ⌨️ How It Works

- **Register / Login:** Create an account or log in to access full features.
- **Add a Listing:** Fill in property details and submit to publish your listing.
- **Manage Listings:** Edit or delete your own listings from your profile.
- **Browse:** Anyone can browse listings without needing an account.

---

## ⚙️ The Process

I started by setting up the Express.js server and connecting it to MongoDB using Mongoose. Then I focused on building the MVC architecture to keep the code clean and organized.

Next, I implemented user authentication with Passport.js — handling registration, login, and session management so users stay logged in securely.

After authentication was solid, I built the full CRUD functionality for property listings. I made sure access control was enforced at the route level, so users can only edit or delete their own listings.

Finally, I deployed the application to Render.com and tested all features end-to-end to make sure everything worked smoothly in production.

---

## 📚 What I Learned

This project helped me grow as a full-stack developer and deepened my understanding of how real-world web apps are built.

### 🔐 Authentication & Sessions:
- **Passport.js:** Learned how to integrate local strategy authentication and manage secure user sessions with cookies.

### 🧱 MVC Architecture:
- **Code Organization:** Structuring the app into Models, Views, and Controllers made the codebase much cleaner and easier to maintain.

### 🔒 Access Control:
- **Authorization Logic:** Learned the difference between authentication (who you are) and authorization (what you can do), and how to enforce it at the middleware level.

### 🗄️ MongoDB & Mongoose:
- **Database Design:** Designed schemas for users and listings, and learned how to reference documents across collections.

### 🚀 Deployment:
- **Render.com:** Gained experience deploying a Node.js app to a cloud platform and managing environment variables securely.

### 📈 Overall Growth:
Each part of this project helped me understand how production-ready applications are structured. It was more than just building a booking site — it was about writing secure, maintainable code and thinking like a backend developer.

---

## 🔧 How Can It Be Improved?

- Add image upload functionality using Cloudinary or AWS S3.
- Implement a search and filter system for listings by location, price, and amenities.
- Add a map view using Mapbox or Google Maps API.
- Build a reviews and ratings system for each listing.
- Add email notifications for booking confirmations.
- Implement a booking/reservation system with date selection.
- Add pagination for listing results.
- Improve mobile responsiveness and UI design.

---

## 🚀 Running the Project

To run this project in your local environment, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/VISHAL2005-A1/StayEasy.git
   ```

2. Navigate into the project directory:
   ```bash
   cd StayEasy
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add:
   ```
   MONGO_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

5. Start the development server:
   ```bash
   node app.js
   ```

6. Open your browser and visit: [http://localhost:8080](http://localhost:8080)

---

## 👨‍💻 Author

**Vishal Gautam**
- 🔗 [LinkedIn](https://www.linkedin.com/in/vishal-gautam-a0574429a)
- 🐙 [GitHub](https://github.com/VISHAL2005-A1)
- 📧 vishalgautam1118465@gmail.com

---

⭐ If you found this project useful, please consider giving it a star!
