import React from "react";

const Apps = () => {
  const apps = [
    {
      name: "Kite",
      description: "Our flagship trading platform with streaming market data, advanced charts, and an elegant UI.",
      icon: "⚡"
    },
    {
      name: "Console",
      description: "The back-office platform for your investments, dividends, and tradebook.",
      icon: "📊"
    },
    {
      name: "Coin",
      description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account.",
      icon: "🪙"
    },
    {
      name: "Kite Connect",
      description: "Build your own trading platform using our HTTP/JSON APIs.",
      icon: "🔌"
    },
    {
      name: "Varsity",
      description: "A free and open stock market and financial education platform.",
      icon: "🎓"
    },
    {
      name: "Tijori",
      description: "Fundamental analysis and stock research platform.",
      icon: "📐"
    }
  ];

  return (
    <div className="apps-container">
      <h1 className="title">Apps</h1>
      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon">{app.icon}</div>
            <div className="app-info">
              <h3>{app.name}</h3>
              <p>{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;