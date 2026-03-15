import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    try {
      await axios.post("http://localhost:3002/signup", formData);
      setSuccess(true);
    } catch (err) {
      const msg =
        err.response?.data?.message || "Something went wrong. Please try again.";
      setStatus({ type: "danger", message: msg });
    } finally {
      setLoading(false);
    }
  };

  /* ── Success state ─────────────────────────────── */
  if (success) {
    return (
      <div className="signup-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 signup-success">
              <div className="check-circle">✓</div>
              <h2>You're all set!</h2>
              <p>
                Your account has been created successfully. You can now log in
                to your Zerodha dashboard and start investing.
              </p>
              <a
                href="http://localhost:3001"
                className="signup-btn"
                style={{ display: "inline-block", width: "auto", padding: "12px 36px", marginTop: "20px", textDecoration: "none" }}
              >
                Open Dashboard →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Form state ────────────────────────────────── */
  return (
    <div className="signup-wrapper">
      <div className="container">
        <div className="row">
          {/* Left — Form */}
          <div className="col-md-6 signup-form-section">
            <h1>Create your account</h1>
            <p className="subtitle">
              Join 1.5+ crore investors &amp; traders on India's largest
              investment platform.
            </p>

            {status.message && (
              <div
                className={`alert alert-${status.type} signup-alert`}
                role="alert"
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="e.g. Suhas B"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Min. 6 characters"
                  minLength={6}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="signup-btn"
                disabled={loading}
              >
                {loading ? "Creating account…" : "Sign Up"}
              </button>
            </form>

            <p className="login-link">
              Already have an account?{" "}
              <a
                href="https://kite.zerodha.com/"
                target="_blank"
                rel="noreferrer"
              >
                Log in
              </a>
            </p>
          </div>

          {/* Right — Info panel */}
          <div className="col-md-6 signup-info-section">
            <img
              src="media/images/signup.png"
              alt="Signup illustration"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <ul className="info-features">
              <li>
                <span className="feature-icon">₹</span>
                <span className="feature-text">
                  <strong>Zero charges</strong>
                  Free equity delivery and direct mutual funds.
                </span>
              </li>
              <li>
                <span className="feature-icon">⚡</span>
                <span className="feature-text">
                  <strong>Lightning fast</strong>
                  Built on cutting-edge technology, Kite processes over 15
                  million orders a day.
                </span>
              </li>
              <li>
                <span className="feature-icon">🔒</span>
                <span className="feature-text">
                  <strong>Secure &amp; trusted</strong>
                  Your data is protected with bank-grade security. SEBI
                  registered stock broker.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;