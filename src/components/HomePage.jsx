import React, { useEffect, useState } from "react";
import "../styles/Homepage.css";

function SkillBar({ name, percent }) {
  const [width, setWidth] = useState("0%");
  useEffect(() => {
    const t = setTimeout(() => setWidth(`${percent}%`), 200);
    return () => clearTimeout(t);
  }, [percent]);

  return (
    <div className="skillbar">
      <div className="skillbar-header">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="skillbar-bg">
        <div className="skillbar-fill" style={{ width }}></div>
      </div>
    </div>
  );
}

function Stat({ num, label }) {
  return (
    <div className="stat">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Homepage() {
  const tools = ["VS Code", "Git", "GitHub", "Figma"];
  const skills = [
    { name: "HTML5", pct: 95 },
    { name: "React", pct: 90 },
    { name: "CSS", pct: 95 },
    { name: "JavaScript", pct: 85 },
  ];

  return (
    <div className="homepage">
      {/* HEADER */}
      <header className="header">
        <div className="logo">Ronnie</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hey, I am Web Dev</h1>
          <p>
            Building your dream <span>in visual tech!</span>
          </p>
          <div className="hero-buttons">
            <button>Read More</button>
            <button>Let's connect</button>
          </div>
        </div>
        <div className="hero-card">
          <img
            src="#"
            alt="avatar"
          />
          <div className="hero-card-text">
            <h3>Why hire me?</h3>
            <p>
              I’m a professional developer with a Computer Science degree and
              2+ years of experience building modern web apps.
            </p>
            <div className="hero-card-buttons">
              <button>Portfolio</button>
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS AND SKILLS */}
      <section className="skills">
        <div className="skills-tools">
          <h4>Tools</h4>
          <ul>
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="skills-bars">
          <h4>Top Skills</h4>
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} percent={s.pct} />
          ))}
        </div>
        <div className="skills-stats">
          <Stat num={3} label="Years Experience" />
          <Stat num={50} label="Projects" />
          <Stat num={12} label="Clients" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Interested in working together?</p>
        <a href="mailto:you@example.com">Get in touch</a>
      </footer>
    </div>
  );
}