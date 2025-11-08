# 🌐 EZ Works Frontend Intern Assignment

### 👨‍💻 Candidate Details
**Name:** Krishna Agarwal  
**Role Applied:** Frontend Intern  
**College:** Anand Engineering College (Sharda University)  
**GitHub:** [krishnaagarwal12345](https://github.com/krishnaagarwal12345)  
**Email:** krishnaa1420037@gmail.com  

---

## 🧭 Objective

This project is built as part of the **EZ Works Frontend Intern assessment**.  
The goal was to **recreate the Home Page** (based on the given Figma design) and implement a **responsive contact form** integrated with the provided backend API endpoint.

---

## 🖥️ Project Overview

A **single-page responsive React web application** built using **Vite** and **CSS**, implementing a clean and modern design inspired by the provided Figma link.

### ✨ Features
- Responsive layout for mobile, tablet, and desktop.  
- Contact form with live validation for:
  - Required fields  
  - Valid email format  
- API integration using `fetch()` for sending form data.  
- Success and error message handling on submission.  
- Simple, modern blue-themed UI for a professional landing-page look.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | **React.js (Vite)** |
| Styling | **CSS** |
| Deployment | **GitHub Pages** |
| Version Control | **Git & GitHub** |

---

## ⚙️ Installation and Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/krishnaagarwal12345/ez-frontend.git
cd ez-frontend

### 2️⃣ Install dependencies
npm install

### 3️⃣ Run development server
npm run dev

### 4️⃣ Build for production
npm run build

### 5️⃣ Deploy to GitHub Pages
npm run deploy

## 📩 API Integration

#### Endpoint:

https://vernanbackend.ezlab.in/api/contact-us/


#### Method:
POST

####Sample Request Body:

{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}


#### Expected Success Response (200):

{
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "testuser@gmail.com",
  "id": 49,
  "message": "This is a message",
  "name": "Test User",
  "phone": "908765498",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}

## 🧠 Validation Use Cases
Validation	Description
Empty fields	Not allowed
Email validation	Regex used to verify email structure
API response	“✅ Form Submitted Successfully” on success
API failure	Displays appropriate error message

## ⚠️ Note for Evaluators

The contact form and API integration are implemented exactly as per instructions.
However, the given backend API currently returns an HTTP 404 Not Found error.
For testing, a mock API (https://reqres.in/api/users
) was used to verify the POST logic locally.

All validation, submission, and status handling are working perfectly on the frontend.

## 🌐 Live Project Link

## 👉 View Live Demo on GitHub Pages

## 🧩 Folder Structure
ez-frontend/
│
├── src/
│   ├── components/
│   │   └── ContactForm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│
├── package.json
├── vite.config.js
└── README.md

## 🚀 Approach & Learnings

Learned how React components interact and manage state using hooks like useState.

Understood the form validation workflow and API integration using fetch().

Explored responsive web design techniques using pure CSS.

Deployed a production-ready React app using GitHub Pages.

Gained confidence in building front-end applications from scratch.

### 💬 Contact

### 📧 krishnaa1420037@gmail.com

### 🔗 GitHub Profile
