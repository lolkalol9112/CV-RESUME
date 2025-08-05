import React from 'react'
import MagicBento from './components/MagicBento'
import FlowingMenu from './components/FlowingMenu'
import TelegramMiniApp from './pages/TelegramMiniApp';
import CRMPlatform from './pages/CRMPlatform';
import MobileApp from './pages/MobileApp';
import CryptoExchange from './pages/CryptoExchange';

function App() {
  const path = window.location.pathname.toLowerCase();
  if (path === '/telegram-mini-app') return <TelegramMiniApp />;
  if (path === '/crm-platform') return <CRMPlatform />;
  if (path === '/mobile-app') return <MobileApp />;
  if (path === '/crypto-exchange') return <CryptoExchange />;

  const menuItems = [
    {
      link: "/telegram-mini-app",
      text: "Telegram Mini-App",
      image: "./images/about.svg"
    },
    {
      link: "/crm-platform",
      text: "CRM Platform",
      image: "./images/skills.svg"
    },
    {
      link: "/mobile-app",
      text: "Mobile App",
      image: "./images/projects.svg"
    },
    {
      link: "/crypto-exchange",
      text: "Crypto Exchange",
      image: "./images/contact.svg"
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1 className="inter-bold">Portfolio</h1>
      </header>
      
      <main className="main">
        <section className="hero">
          <h2 className="inter-semibold">NDA Notice</h2>
          <p className="inter-regular">
          Unfortunately, all of my recent projects are under NDA, so I am not permitted to share code samples.
However, I am happy to discuss my experience, technical approaches, and problem-solving strategies in detail during an interview.<br></br><br></br>
Thank you for your understanding.
          </p>
        </section>
        
        <section className="flowing-menu-section">
          <h2 className="inter-bold">Project Examples</h2>
          <p className="inter-regular">
            Explore some of my featured projects below
          </p>
          <div className="flowing-menu-container">
            <FlowingMenu items={menuItems} />
          </div>
        </section>




        <section className="skills-section">
          <h2 className="inter-bold">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h4 className="inter-medium">Frontend</h4>
              <p className="inter-regular">Next.js, React.js, Angular, Vue.js, UI/UX Design Awareness</p>
            </div>
            <div className="skill-card">
              <h4 className="inter-medium">Backend</h4>
              <p className="inter-regular">Node.js, FastAPI, Flask</p>
            </div>
            <div className="skill-card">
              <h4 className="inter-medium">Languages</h4>
              <p className="inter-regular">JavaScript, Python, Swift, SQL (PostgreSQL, SQLite, Redis)</p>
            </div>
            <div className="skill-card">
              <h4 className="inter-medium">Developer Tools</h4>
              <p className="inter-regular">Git, Docker, VS Code, Xcode, Slack</p>
            </div>
            
          </div>
        </section>

        
        <section className="experience-section">
          <h2 className="inter-semibold">Experience</h2>
          <br />

          <div className="experience-item">
            <h4 className="inter-medium">Team Lead</h4>
            <p className="company inter-regular">OrbosAI, Moscow • Dec 2024 - Aug 2025</p>
            <ul className="inter-regular">
              <li>Introduced AI-driven workflows to the team, resulting in a 440% increase in productivity.</li>
              <li>Integrated over 20 external API services, expanding the app’s capabilities and user base.</li>
              <li>Pioneered the first video editor within Telegram, enabling seamless multimedia content creation for users.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h4 className="inter-medium">Full-Stack Developer</h4>
            <p className="company inter-regular">Hunt.ME, Remote • Nov 2023 - Dec 2024</p>
            <ul className="inter-regular">
              <li>Automated key HR workflows, reducing manual effort and improving placement speed by 30%.</li>
              <li>Revamped the company’s CRM platform, transforming it from an underutilized tool into an essential part of daily operations by focusing on usability and modern design.</li>
              <li>Provided training and support for the new CRM, ensuring a smooth transition and rapid adoption across the company.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h4 className="inter-medium">Full-Stack Developer</h4>
            <p className="company inter-regular">Freelance, Remote • 2020 - 2023</p>
            <ul className="inter-regular">
              <li>Completed 30+ small- to medium-sized projects on Fiverr and Upwork.</li>
            </ul>
          </div>
        </section>

        <section className="contact-section">
          <h2 className="inter-semibold">Contacts</h2>
          <br></br>
          <div className="contact-info">  
               
            <p className="inter-regular">
              Email: <a href="mailto:ea@verkhozin.ru" className="inter-medium">ea@verkhozin.ru</a>
            </p>
            <p className="inter-regular">
              <p className="inter-regular">Phone: +7 (914) 000-9112</p>
            </p>
            <p className="inter-regular">
              GitHub: <a href="https://github.com/lolkalol9112" className="inter-medium">github.com/lolkalol9112</a>
            </p>
           
            <br></br>
            <p className="inter-regular">
              <p className="inter-regular">Egor Verkhozin • Saint-Petersburg, Russia</p>
            </p>     
            
          </div>
        </section>
      </main>

    </div>
  )
}

export default App