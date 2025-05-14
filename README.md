# 🩺 MediTracker – Medication & Health Tracking App

**MediTracker** is a full-stack health management application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It is designed to help users keep track of their daily medications, appointments, health vitals, and medical documents — all in one place.

---

## 🚀 Features

- 🏠 **Dashboard** to get a quick overview of your health
- ⏰ **Daily Medication Reminders** so you never miss a dose
- 📦 **Medicine Inventory** to monitor your available medications
- 🗂️ **Store Prescriptions & Medical Reports** digitally
- 📍 **Find Nearby Doctors** using browser geolocation
- 📅 **Add Appointments to Calendar**
- 📊 **Visualize Lab Vitals** using charts powered by **Chart.js**
- 💡 **Health Insights** generated from stored vitals
- 🗄 **MongoDB Atlas** for secure and scalable data storage

---

## 🛠️ Tech Stack

| Layer        | Technology                |
|--------------|----------------------------|
| Frontend     | React, Bootstrap, Chart.js |
| Backend      | Node.js, Express.js        |
| Database     | MongoDB Atlas              |
| Email Service| EmailJs               |
| Charts       | Chart.js                   |
| Geolocation  | Browser Geolocation API    |

---

## 📁 Project Structure

MediTracker/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components (Home, Dashboard, etc.)
│ ├── utils/ # Utility functions, API calls
│ └── App.js # Main frontend logic
├── server/ # Node.js backend
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── utils/ # Helper functions (email, reminders)
│ └── server.js # Entry point for backend
├── .env # Environment variables
├── README.md # Project documentation
└── package.json # Project metadata
