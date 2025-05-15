 # 🩺 MediTracker – Medication & Health Tracking App

*MediTracker* is a full-stack health management application built using the *MERN stack* (MongoDB, Express.js, React, Node.js). It empowers users to monitor their daily medications, appointments, vital health stats, and medical documents in one unified platform.

---

## 🚀 Features

- 🏠 *Interactive Dashboard* – Get a quick summary of your health stats
- ⏰ *Daily Medication Reminders* – Stay on track with timely alerts
- 📦 *Medicine Inventory Management* – Know when to restock your meds
- 🗂️ *Store Prescriptions & Medical Reports* – Safely upload and view files
- 📍 *Find Nearby Doctors* – Integrated with browser's geolocation API
- 📅 *Calendar Appointment System* – Add and view doctor visits easily
- 📊 *Visual Vitals Tracker* – Line/Bar charts powered by *Chart.js*
- 💡 *Smart Health Insights* – Derived from your historical data
- 📬 *Email Notifications* – Appointment or reminder emails via *EmailJS*
- 🗄 *MongoDB Atlas* – Cloud-based, secure NoSQL data storage

---

## 🛠️ Tech Stack

| Layer        | Technology                      |
|--------------|----------------------------------|
| Frontend     | React, Bootstrap, Chart.js       |
| Backend      | Node.js, Express.js              |
| Database     | MongoDB Atlas                    |
| Email Service| EmailJS                          |
| Charts       | Chart.js                         |
| Location     | Browser Geolocation API          |
| Hosting      | Netlify (Frontend), Vercel (API) |

---

## 📁 Project Structure

text
MediTracker/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Page-level views like Home, Dashboard
│       ├── utils/           # API calls and helpers
│       └── App.js           # Main routing logic
├── server/                  # Node.js backend
│   ├── controllers/         # Core business logic (CRUD operations)
│   ├── models/              # Mongoose schemas for MongoDB
│   ├── routes/              # Express routes for REST APIs
│   ├── utils/               # Helper utilities (e.g. email, reminders)
│   └── server.js            # Entry point for backend server
├── .env                     # Environment variables
├── README.md                # Project documentation
└── package.json             # Metadata and dependencies


---

## 🔧 Installation & Usage

### Prerequisites

- Node.js & npm
- MongoDB Atlas account
- EmailJS account (for email service)
- Netlify/Vercel (for deployment)

### Clone the Repository

bash
git clone https://github.com/sumankrishna2113/MediTracker.git
cd MediTracker


### Setup Server

bash
cd server
npm install
# Add your MongoDB URI and other config in .env
node server.js


### Setup Client

bash
cd client
npm install
npm start


App will be available at: http://localhost:3000

---

## 🧪 Sample Environment Variables (.env)

env
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_USER_ID=your_emailjs_user_id


---

## 📷 Screenshots

> (Add screenshots here showing Dashboard, Inventory, Vitals Chart, Reminder Form, etc.)

---

## 🔐 Security & Best Practices

- 🔒 Passwords and sensitive tokens are never stored in frontend
- ☁️ Uses *MongoDB Atlas* for encrypted cloud data
- 🔐 EmailJS is configured to send secure transactional emails

---

## 📢 Contributions

Feel free to fork and contribute via pull requests. Suggestions and improvements are always welcome!

---

## 📄 License

MIT License © 2025 [Suman Krishna](https://github.com/sumankrishna2113)

---

## 🙌 Acknowledgements

- [EmailJS](https://www.emailjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [React Bootstrap](https://react-bootstrap.github.io/)
