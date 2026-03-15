# Zerodha Clone 🚀

A full-stack Zerodha clone featuring a modern landing page, user authentication (Signup/Login), and a powerful responsive trading dashboard.

## 🏗️ Project Structure

The project is divided into three main components:

- **`frontend/`**: The main landing page of Zerodha, built with React and styled with custom CSS. It includes pages like Home, Signup, About, Pricing, and Support.
- **`backend/`**: The Node.js/Express server that handles user authentication and data persistence using MongoDB Atlas.
- **`dashboard/`**: The core trading interface where users can view their portfolio, watchlist, and place orders.

## ✨ Key Features

- **Responsive Landing Page**: A pixel-perfect clone of the Zerodha homepage.
- **User Authentication**: Secure signup and login flow integrated with MongoDB.
- **Trading Dashboard**:
  - **Live Watchlist**: Real-time stock prices (simulated) with Buy/Sell triggers.
  - **Order Book**: Track your order history with live status updates.
  - **Premium UI**: Integrated **Bootstrap 5** for standardized responsiveness and **Font Awesome 4** for professional iconography.
  - **Portfolio Metrics**: Visualized data using Chart.js (Doughnut and Bar charts).
- **Navigation**: Seamless transition between the main website and the trading dashboard.

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Material UI, Bootstrap 5, Font Awesome 4.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas.
- **Charts**: Chart.js, React-Chartjs-2.
- **Styling**: Vanilla CSS, Bootstrap Utilities.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- A MongoDB Atlas account and connection string.

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "ZERODHA clone can make changes"
   ```

2. **Backend Setup**:
   - Go to the `backend/` directory.
   - Create a `.env` file and add your `MONGO_URL` and `PORT`.
   - Install dependencies and start:
     ```bash
     npm install
     npm start
     ```

3. **Frontend Setup**:
   - Go to the `frontend/` directory.
   - Install dependencies and start:
     ```bash
     npm install
     npm start
     ```

4. **Dashboard Setup**:
   - Go to the `dashboard/` directory.
   - Install dependencies and start:
     ```bash
     npm install
     npm start
     ```

## 📱 Mobile Responsiveness

The project is fully responsive and optimized for:
- Desktop (1440px+)
- Tablets (768px+)
- Mobile (375px)

## 🎨 Design Philosophy

Inspired by Zerodha's clean and minimalist design, the project focuses on:
- High performance and fast loading times.
- Clear and intuitive user flows.
- Consistent iconography and typography.

---

*Made with ❤️ by Suhas Bhat*