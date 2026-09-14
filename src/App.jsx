import React, { useState, useEffect } from "react";
import {
  Menu, X, Github, Linkedin, Mail, Download, ExternalLink,
  Code2, Server, Database, GitBranch, ArrowUpRight, Send,
  GraduationCap, Terminal, Layers, CheckCircle2, MapPin
} from "lucide-react";
import "./App.css";

const NAV = [
  { id: "home", label: "Home" }, { id: "about", label: "About" },
  { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" },
  { id: "education", label: "Education" }, { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const SKILL_GROUPS = [
  { title:"Languages", icon:Terminal, items:[["C",3],["C++",3],["Java",2],["Python",3]] },
  { title:"Frontend", icon:Code2, items:[["HTML5",3],["CSS3",3],["JavaScript",3],["React.js",3],["Tailwind CSS",2]] },
  { title:"Backend", icon:Server, items:[["Node.js",2],["Express.js",2],["REST APIs",2]] },
  { title:"Databases", icon:Database, items:[["MongoDB",2],["MySQL",2],["PostgreSQL",1]] },
  { title:"Tools", icon:GitBranch, items:[["Git",3],["GitHub",3],["VS Code",3]] },
];

const PROJECTS = [
  {
    name:"Banking Management System",
    description:"A banking application built in C++ using OOP concepts to manage customer accounts, deposits, withdrawals and transaction handling, with support for Current and Savings account types.",
    tech:["C++","OOP","File Handling"],
    features:["Current Account and Savings Account support","Account creation with balance management","Deposit, withdrawal and transaction handling"],
    github:"https://github.com/Sanwar2024", demo:"#"
  },
  {
    name:"Multi-Tenant Property Management System",
    description:"A full-stack MERN application to manage properties, tenants and rental information, with secure tenant-based authentication and REST APIs.",
    tech:["HTML5","CSS3","JavaScript","Node.js","Express.js","MongoDB"],
    features:["Tenant-based authentication and authorization","REST APIs for properties, rent and maintenance requests","MongoDB for property, tenant and transaction data"],
    github:"https://github.com/Sanwar2024", demo:"#"
  },
  {
    name:"AI Loan Bot",
    description:"An interactive chatbot that assists users with loan-related queries, eligibility guidance and basic loan information through intelligent conversation.",
    tech:["HTML5","CSS3","JavaScript"],
    features:["Conversational interface for loan queries","Loan eligibility guidance","Basic loan information assistant"],
    github:"https://github.com/Sanwar2024", demo:"#"
  },
];

function SectionHeading({index,title,kicker}) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><h2>{title}</h2>{kicker && <p className="section-kicker">{kicker}</p>}</div></div>;
}
function Dots({level}) {
  return <div className="dots">{[1,2,3].map(d=><span key={d} className={d<=level?"dot on":"dot"}/>)}</div>;
}

export default function Portfolio() {
  const [navOpen,setNavOpen]=useState(false);
  const [active,setActive]=useState("home");
  const [typed,setTyped]=useState("");
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [sent,setSent]=useState(false);
  const fullText="Full Stack Web Developer";

  useEffect(()=>{
    let i=0;
    const t=setInterval(()=>{i++;setTyped(fullText.slice(0,i));if(i>=fullText.length)clearInterval(t)},45);
    return ()=>clearInterval(t);
  },[]);

  useEffect(()=>{
    const sections=NAV.map(n=>document.getElementById(n.id)).filter(Boolean);
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id)}),{rootMargin:"-40% 0px -50% 0px"});
    sections.forEach(s=>obs.observe(s));
    return ()=>obs.disconnect();
  },[]);

  const goTo=id=>{setNavOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})};
  const handleSubmit=e=>{e.preventDefault();if(!form.name||!form.email||!form.message)return;setSent(true);setForm({name:"",email:"",message:""});setTimeout(()=>setSent(false),4000)};

  return <div className="pf-root">
    <div className="shell">
      <nav className="rail">
        <div><div className="rail-brand">SR<span>.</span>Chouhan</div>
          <div className="rail-nav">{NAV.map((n,i)=><button key={n.id} className={active===n.id?"active":""} onClick={()=>goTo(n.id)}><span className="num">{String(i).padStart(2,"0")}</span>{n.label}</button>)}</div>
        </div>
        <div className="rail-social">
          <a href="https://github.com/Sanwar2024" target="_blank" rel="noreferrer"><Github size={18}/></a>
          <a href="https://www.linkedin.com/in/sanwar-saini" target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
          <a href="mailto:sanwarsainimali@gmail.com"><Mail size={18}/></a>
        </div>
      </nav>

      <div>
        <div className="topbar"><div className="rail-brand">SR<span>.</span>Chouhan</div><button onClick={()=>setNavOpen(o=>!o)}>{navOpen?<X size={22}/>:<Menu size={22}/>}</button></div>
        <div className={"mobile-menu "+(navOpen?"open":"")}>{NAV.map(n=><button key={n.id} className={active===n.id?"active":""} onClick={()=>goTo(n.id)}>{n.label}</button>)}</div>

        <section id="home" className="hero">
          <div className="hero-eyebrow">whoami <span className="cursor"/></div>
          <h1>Sanwar Ram Chouhan</h1><div className="role">{typed}</div>
          <p className="intro">3rd-year B.Tech CSE student at Lovely Professional University, building full-stack web applications end to end — from database schema to interface. I enjoy solving problems with clean code and picking up new technologies along the way.</p>
          <div className="hero-actions"><button className="btn btn-primary" onClick={()=>goTo("projects")}>View My Projects <ArrowUpRight size={16}/></button><a className="btn btn-ghost" href="/resume.pdf" download>Download Resume <Download size={16}/></a><button className="btn btn-ghost" onClick={()=>goTo("contact")}>Contact Me</button></div>
        </section>

        <section id="about"><SectionHeading index="01" title="About Me"/><div className="about-grid"><div><p>I'm Sanwar, a Computer Science and Engineering student currently in my 3rd year at Lovely Professional University. I work across the full stack — comfortable building interfaces in React as well as designing the APIs and databases that power them.</p><p>I'm drawn to problem solving, whether that's a data structures question or figuring out how to structure a growing codebase. Outside of coursework, I spend my time building small full-stack projects to learn tools I haven't used yet, and I'm always looking for internship opportunities where I can contribute and keep growing as a developer.</p></div><div className="about-facts"><div className="fact"><div className="fact-label">EDUCATION</div><div className="fact-value">B.Tech CSE, LPU — 3rd Year</div></div><div className="fact"><div className="fact-label">FOCUS</div><div className="fact-value">Full Stack Web Development</div></div><div className="fact"><div className="fact-label">BASED IN</div><div className="fact-value">Rajasthan, India</div></div></div></div></section>

        <section id="skills"><SectionHeading index="02" title="Technical Skills" kicker="Languages, frameworks and tools I use to build full-stack applications."/><div className="skills-grid">{SKILL_GROUPS.map(g=><div className="skill-card" key={g.title}><div className="skill-card-head"><g.icon size={18}/><h3>{g.title}</h3></div>{g.items.map(([name,level])=><div className="skill-row" key={name}><span>{name}</span><Dots level={level}/></div>)}</div>)}</div></section>

        <section id="projects"><SectionHeading index="03" title="Projects" kicker="A selection of full-stack and systems projects."/><div className="project-grid">{PROJECTS.map(p=><div className="project-card" key={p.name}><div><h3>{p.name}</h3><p className="project-desc">{p.description}</p></div><div className="tech-tags">{p.tech.map(t=><span className="tech-tag" key={t}>{t}</span>)}</div><ul className="feature-list">{p.features.map(f=><li key={f}><CheckCircle2 size={14}/>{f}</li>)}</ul><div className="project-actions"><a className="link-btn" href={p.github} target="_blank" rel="noreferrer"><Github size={15}/> Code</a><a className="link-btn" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Live Demo</a></div></div>)}</div></section>

        <section id="education"><SectionHeading index="04" title="Education"/><div className="timeline">
          <div className="timeline-item"><div className="timeline-marker"><div className="timeline-dot"/><div className="timeline-line"/></div><div><h3>B.Tech in Computer Science & Engineering</h3><div className="timeline-meta"><span><GraduationCap size={14}/> Lovely Professional University, Phagwara</span><span><MapPin size={14}/> Punjab, India</span></div><div className="timeline-meta"><span>2024 – 2028</span><span>CGPA: 7.35</span></div><div className="timeline-badge">3rd Year / 5th Semester</div></div></div>
          <div className="timeline-item"><div className="timeline-marker"><div className="timeline-dot muted"/><div className="timeline-line"/></div><div><h3 className="muted-text">Class 12 — Senior Secondary</h3><div className="timeline-meta"><span><MapPin size={14}/> Jai Rana School, Jasnagar, Rajasthan</span></div><div className="timeline-meta"><span>2022 – 2023</span></div><div className="timeline-badge muted-text">Percentage: 80%</div></div></div>
          <div className="timeline-item"><div className="timeline-marker"><div className="timeline-dot muted"/></div><div><h3 className="muted-text">Class 10 — Secondary</h3><div className="timeline-meta"><span><MapPin size={14}/> Jai Rana School, Jasnagar, Rajasthan</span></div><div className="timeline-meta"><span>2020 – 2021</span></div><div className="timeline-badge muted-text">Percentage: 94.83%</div></div></div>
        </div><div className="training"><h3>Training & Certifications</h3><div className="skills-grid three"><div className="skill-card"><div className="skill-card-head"><GraduationCap size={18}/><h3>Summer Internship</h3></div><p>50-day training at LPU — C++ with OOP, building a Banking Management System.</p></div><div className="skill-card"><div className="skill-card-head"><CheckCircle2 size={18}/><h3>DBMS — Oracle</h3></div><p>Certification in Database Management Systems.</p></div><div className="skill-card"><div className="skill-card-head"><CheckCircle2 size={18}/><h3>AI Essentials — Oracle</h3></div><p>Certification covering foundational AI concepts.</p></div></div></div></section>

        <section id="resume"><SectionHeading index="05" title="Resume" kicker="A quick summary of my background."/><div className="resume-panel"><div className="resume-col"><h3>EDUCATION</h3><ul><li>B.Tech CSE — LPU, Phagwara (3rd Year, CGPA 7.35)</li><li>Class 12 — 80% · Class 10 — 94.83%</li></ul><h3 className="resume-sub">CERTIFICATIONS</h3><ul><li>DBMS — Oracle</li><li>AI Essentials — Oracle</li><li>50-Day Summer Internship (C++ & OOP) — LPU</li></ul></div><div className="resume-col"><h3>SKILLS</h3><ul><li>C, C++, Java, Python</li><li>React.js, Node.js, Express.js, Tailwind CSS</li><li>MongoDB, MySQL, PostgreSQL, Git & GitHub</li></ul><h3 className="resume-sub">PROJECTS</h3><ul><li>Banking Management System (C++)</li><li>Multi-Tenant Property Management System</li><li>AI Loan Bot</li></ul></div></div><div className="resume-cta"><a className="btn btn-primary" href="/resume.pdf" download>Download Resume <Download size={16}/></a></div></section>

        <section id="contact"><SectionHeading index="06" title="Contact Me" kicker="Have an opportunity or a question? I'd love to hear from you."/><div className="contact-grid"><form onSubmit={handleSubmit}><div className="field"><label>Name</label><input type="text" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div><div className="field"><label>Email</label><input type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div><div className="field"><label>Message</label><textarea placeholder="Tell me about the opportunity..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></div><button className="btn btn-primary" type="submit">Send Message <Send size={16}/></button>{sent&&<p className="sent-note">Message ready — connect this form to Formspree or EmailJS to deliver it.</p>}</form><div className="contact-info"><div className="contact-info-row"><div className="icon-wrap"><Mail size={17}/></div><a href="mailto:sanwarsainimali@gmail.com">sanwarsainimali@gmail.com</a></div><div className="contact-info-row"><div className="icon-wrap"><Github size={17}/></div><a href="https://github.com/Sanwar2024" target="_blank" rel="noreferrer">github.com/Sanwar2024</a></div><div className="contact-info-row"><div className="icon-wrap"><Linkedin size={17}/></div><a href="https://www.linkedin.com/in/sanwar-saini" target="_blank" rel="noreferrer">linkedin.com/in/sanwar-saini</a></div><div className="contact-info-row"><div className="icon-wrap"><Layers size={17}/></div><span>Open to internships & full-stack roles</span></div></div></div></section>
        <footer><p>© 2026 Sanwar Ram Chouhan. All Rights Reserved.</p></footer>
      </div>
    </div>
  </div>;
}
