import React from 'react'
import MagicBento from './components/MagicBento'
import FlowingMenu from './components/FlowingMenu'

function App() {
  const menuItems = [
    {
      link: "#about",
      text: "About",
      image: "./images/about.svg"
    },
    {
      link: "#skills",
      text: "Skills",
      image: "./images/skills.svg"
    },
    {
      link: "#projects",
      text: "Projects",
      image: "./images/projects.svg"
    },
    {
      link: "#contact",
      text: "Contact",
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
        
        <section className="skills-section">
          <h3 className="inter-semibold">Навыки и технологии</h3>
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
            <div className="skill-card">
              <h4 className="inter-medium">Soft Skills</h4>
              <p className="inter-regular">Leadership, Strong Work Ethic, Communication</p>
            </div>
          </div>
        </section>

        
        <section className="experience-section">
          <h3 className="inter-semibold">Опыт работы</h3>
          
          <div className="experience-item">
            <h4 className="inter-medium">Senior Frontend Developer</h4>
            <p className="company inter-regular">Tech Company Inc. • 2022 - настоящее время</p>
            <p className="inter-regular">
              Разработка и поддержка крупных веб-приложений на React и TypeScript. 
              Оптимизация производительности, внедрение новых технологий, 
              менторство младших разработчиков.
            </p>
          </div>

          <div className="experience-item">
            <h4 className="inter-medium">Frontend Developer</h4>
            <p className="company inter-regular">Digital Agency • 2020 - 2022</p>
            <p className="inter-regular">
              Создание адаптивных веб-сайтов и приложений для различных клиентов. 
              Работа с дизайн-системами, интеграция с API, оптимизация под SEO.
            </p>
          </div>

          <div className="experience-item">
            <h4 className="inter-medium">Junior Developer</h4>
            <p className="company inter-regular">StartUp Lab • 2019 - 2020</p>
            <p className="inter-regular">
              Начало карьеры в веб-разработке. Изучение современных технологий, 
              участие в создании MVP продуктов, работа в agile команде.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <h3 className="inter-semibold">Контакты</h3>
          <div className="contact-info">
            <p className="inter-regular">
              Готов к новым вызовам и интересным проектам!
            </p>
            <p className="inter-regular">
              Email: <a href="mailto:developer@example.com" className="inter-medium">developer@example.com</a>
            </p>
            <p className="inter-regular">
              LinkedIn: <a href="#" className="inter-medium">linkedin.com/in/developer</a>
            </p>
            <p className="inter-regular">
              GitHub: <a href="#" className="inter-medium">github.com/developer</a>
            </p>
          </div>
        </section>
      </main>

      <section className="flowing-menu-section">
        <h3 className="inter-semibold">Навигационное меню</h3>
        <p className="inter-regular">
          Интерактивное меню с плавными анимациями
        </p>
        <div className="flowing-menu-container">
          <FlowingMenu items={menuItems} />
        </div>
      </section>
    </div>
  )
}

export default App