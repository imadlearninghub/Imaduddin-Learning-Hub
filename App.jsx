import React from "react";

export default function App() {
  const cardStyle = {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#334155)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Imaduddin Learning Hub
        </h1>
        <p style={{ fontSize: "18px", color: "#cbd5e1" }}>
          Grow your English Grammar & Speaking skills with professional learning.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px",
            marginTop: "35px"
          }}
        >
          <div style={cardStyle}>
            <h2>📘 Basic English</h2>
            <p>Alphabet, grammar, daily use sentences and speaking.</p>
          </div>

          <div style={cardStyle}>
            <h2>📗 Intermediate</h2>
            <p>Tenses, paragraph writing and conversation skills.</p>
          </div>

          <div style={cardStyle}>
            <h2>📙 Advanced</h2>
            <p>Professional speaking, vocabulary and fluency.</p>
          </div>

          <div style={cardStyle}>
            <h2>🎯 IELTS Zone</h2>
            <p>Reading, Writing, Listening and Speaking practice.</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
            marginTop: "35px"
          }}
        >
          <div style={cardStyle}>
            <h2>🔐 Premium Student Portal</h2>
            <input
              placeholder="Email Address"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "10px",
                borderRadius: "10px",
                border: "none"
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "10px",
                borderRadius: "10px",
                border: "none"
              }}
            />
            <button
              style={{
                marginTop: "12px",
                padding: "12px",
                width: "100%",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold"
              }}
            >
              Login
            </button>
          </div>

          <div style={cardStyle}>
            <h2>📜 Certificates</h2>
            <p>Complete courses and earn certificates.</p>

            <h2 style={{ marginTop: "20px" }}>🤖 AI Speaking Checker</h2>
            <p>Practice speaking and improve fluency daily.</p>

            <h2 style={{ marginTop: "20px" }}>🔥 Today's Topic</h2>
            <p>Talk about your future goals for 2 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
