# Zerodha Clone: Technical Interview Preparation Guide

This document provides a comprehensive overview of the project's architecture, workflow, and key technical concepts to help you explain the project confidently during an interview.

---

## 🏗️ 1. Project Architecture (Three-Tier System)

The project follows a **Modified MERN Stack** architecture, organized as a monorepo with three distinct modules:

### A. Frontend (Landing Pages)
- **Role**: Marketing and informational site.
- **Tech**: React.js, Vanilla CSS.
- **Key Files**: 
  - `src/landing_page/home/Hero.js`: Main entry visual.
  - `src/landing_page/signup/Signup.js`: Integrated user registration flow.

### B. Backend (API Hub)
- **Role**: Authentication, data validation, and database management.
- **Tech**: Node.js, Express.js, MongoDB Atlas.
- **Key Modules**:
  - `models/UserModel.js`: User data schema.
  - `index.js`: Main server with RESTful endpoints (`/signup`, `/newOrder`, `/allOrders`).

### C. Dashboard (Trading Interface)
- **Role**: Core application functionality (Portfolio management, Watchlist, Orders).
- **Tech**: React.js, Bootstrap 5, Font Awesome 4, Chart.js.
- **Communication**: Uses **Axios** to communicate with the Backend API and **Context API** to share state between dashboard components (like Buy/Sell windows).

---

## 📁 2. File Organization Structure

```text
/
├── backend/                # Node.js Server
│   ├── model/              # Mongoose Models
│   ├── schemas/            # Database Schemas
│   ├── index.js            # Entry point & API Routes
│   └── .env                # Server configuration
├── dashboard/              # Trading Application (React)
│   ├── src/
│   │   ├── components/     # Portfolio, Watchlist, Orders, Funds, Apps
│   │   ├── data/           # Mock stock data
│   │   └── index.css       # Premium UI styles & Bootstrap overrides
│   └── public/index.html   # Bootstrapped with CDN links
└── frontend/               # Marketing Landing Page (React)
    ├── src/
    │   ├── landing_page/   # Component folders (Support, Pricing, etc.)
    │   └── Signup/         # Registration module
```

---

## 🔄 3. Complete Project Workflow

1.  **Discovery**: User arrives at the **Frontend** landing page.
2.  **Registration**: User navigates to the **Signup** page and enters details. 
    - The Frontend sends a `POST` request to `backend/signup`.
    - Backend uses `passport-local-mongoose` to hash the password and save the user to **MongoDB Atlas**.
3.  **Dashboard Entry**: Once authorized, the user is redirected (or clicks a button) to the **Dashboard** (`localhost:3001`).
4.  **Watchlist Interaction**: User hovers over stocks in the `WatchList.js`.
    - Clicking **BUY** or **SELL** triggers `GeneralContext.js` to open a modal.
5.  **Order Execution**: 
    - Submitting an order sends a `POST` request to `backend/newOrder`.
6.  **Real-time Monitoring**: The **Orders** section fetches live data using `GET /allOrders`, displaying the trade history updated on the fly.

---

## 🧠 4. Important Concepts & Interview "Golden Nuggets"

### 1. Authentication & Security
- **Concept**: Used **Passport.js** with `passport-local-mongoose`.
- **Reasoning**: This automatically handles salting and hashing passwords. *Never store passwords in plain text!*

### 2. State Management (Context API)
- **Concept**: Used React **Context API** in the Dashboard.
- **Reasoning**: To avoid "prop drilling." The Watchlist (deeply nested) needs to trigger the Buy Window (top-level). Context allows global state management without a complex library like Redux for this scope.

### 3. Responsive UI (Bootstrap 5 Integration)
- **Concept**: Standardized the dashboard using **Bootstrap 5 utility classes**.
- **Reasoning**: Instead of writing 100s of lines of manual Media Queries, Bootstrap's grid system (`row`, `col`) ensures the site works seamlessly from 4K monitors to iPhones.

### 4. Database Persistence (MongoDB Atlas)
- **Concept**: Cloud-hosted NoSQL database.
- **Reasoning**: Provides high availability and scalability. Used **Mongoose** for object modeling to ensure data consistency.

### 5. Performance Optimization
- **Concept**: Image lazy loading, minimized CSS, and modular React components.
- **Reasoning**: High-frequency trading apps require low latency and fast rendering.

## 🛠️ 5. External APIs & Services

| Service | Website | Role in Project | Location |
|---------|---------|-----------------|----------|
| **MongoDB Atlas** | [mongodb.com](https://www.mongodb.com/cloud/atlas) | Cloud-based NoSQL database for persistence. | `backend/.env` |
| **Bootstrap 5** | [getbootstrap.com](https://getbootstrap.com/) | UI framework for layout and responsiveness. | `public/index.html` (CDN) |
| **Font Awesome 4** | [fontawesome.com](https://fontawesome.com/) | Unified professional iconography. | `public/index.html` (CDN) |
| **Chart.js** | [chartjs.org](https://www.chartjs.org/) | Data visualization for portfolio metrics. | `Summary.js`, `Graph.js` |
| **Passport.js** | [passportjs.org](https://www.passportjs.org/) | Security library for salted/hashed auth. | `backend/index.js` |
| **Axios** | [axios-http.com](https://axios-http.com/) | HTTP client for frontend-backend sync. | Throughout Frontend/Dashboard |

---

## ❓ 6. Potential Interview Questions

**Q: Why choose React for the dashboard?**
*A: The dashboard requires frequent UI updates (stock prices, modals). React’s Virtual DOM allows it to update only the changed elements, ensuring the interface remains snappy.*

**Q: How did you handle the integration between the three different folders?**
*A: I treated it as a microservices-lite architecture. The frontend and dashboard act as distinct clients, while the backend acts as a shared resource. They communicate over standard HTTP calls using Axios.*

**Q: What was the biggest technical challenge?**
*A: Implementing universal responsiveness across the entire suit. I solved this by modularizing CSS and eventually integrating Bootstrap units to standardize the layout across devices.*

---
*Generated for Suhas Bhat's Project Portfolio*
