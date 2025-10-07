import React, { useEffect, useState, useMemo } from "react";
import profileImg from "../assets/profile.jpg";
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

  const professionalSkills = useMemo(() => [
    "Full-Stack Developer",
    "Software Engineer",
    "UI/UX Enthusiast",
    "Project Manager",
    "Team Player",
    "Problem Solver"
  ], []);

  const [displayedSkill, setDisplayedSkill] = useState(professionalSkills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedSkill(prev => {
        const currentIndex = professionalSkills.indexOf(prev);
        const nextIndex = (currentIndex + 1) % professionalSkills.length;
        return professionalSkills[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [professionalSkills]);

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">CloudRonn</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1 className="main-heading">Hello, I'm Ronny Mutuma</h1>
          <h2 className="sub-heading">{displayedSkill}</h2>
          <p>Building your dream <span>in visual tech!</span></p>
          <div className="hero-buttons">
            <button>Let's connect</button>
          </div>
        </div>
        <div className="hero-card">
          <img src={profileImg} alt="Profile" />
          <div className="hero-card-text">
            <p>I’m a professional developer majoring in Computer Science and 2+ years of experience building softwares and modern web apps. I am enthusiastic about the tech world with an aim of making an impact by creating modern solutions for the modern world.</p>
            <div className="hero-card-buttons">
              <button>View CV</button>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="skills-tools">
          <h4>Tools</h4>
          <ul>
            {tools.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <div className="skills-bars">
          <h4>Top Skills</h4>
          {skills.map(s => <SkillBar key={s.name} name={s.name} percent={s.pct} />)}
        </div>
        <div className="skills-stats">
          <Stat num={2} label="Years Experience" />
          <Stat num={4} label="Projects" />
          <Stat num={3} label="Clients" />
        </div>
      </section>

      <footer className="footer">
        <p>Interested in working together?</p>
        <a href="ronnindustries1@gmail.com">Get in touch</a>
      </footer>
    </div>
  );
}
