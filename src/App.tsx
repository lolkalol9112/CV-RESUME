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
        <h1 className="inter-bold">Добро пожаловать на мой лендинг</h1>
      </header>
      
      <main className="main">
        <section className="hero">
          <h2 className="inter-semibold">Профессиональное резюме</h2>
          <p className="inter-regular">
            Это современный лендинг, созданный на React с использованием Vite и шрифта Inter. 
            Здесь представлена информация о профессиональных навыках и опыте разработчика.
          </p>
        </section>
        
        <section className="content">
          <h3 className="inter-semibold">О проекте</h3>
          <p className="inter-regular">
            Данный лендинг создан с минималистичным дизайном - черный фон и белый текст 
            для максимальной читаемости и современного внешнего вида. Используется 
            профессиональный шрифт Inter с различными весами.
          </p>
          
          <h3 className="inter-semibold">Технологии</h3>
          <ul>
            <li className="inter-regular">React 19</li>
            <li className="inter-regular">TypeScript</li>
            <li className="inter-regular">Vite</li>
            <li className="inter-regular">CSS3</li>
            <li className="inter-regular">Inter Font</li>
          </ul>
        </section>

        <section className="skills-section">
          <h3 className="inter-semibold">Навыки и технологии</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4 className="inter-medium">Frontend</h4>
              <p className="inter-regular">
                React, TypeScript, JavaScript, HTML5, CSS3, Sass, Tailwind CSS
              </p>
            </div>
            <div className="skill-card">
              <h4 className="inter-medium">Backend</h4>
              <p className="inter-regular">
                Node.js, Express, Python, Django, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="skill-card">
              <h4 className="inter-medium">Инструменты</h4>
              <p className="inter-regular">
                Git, Docker, Webpack, Vite, Jest, ESLint, Prettier
              </p>
            </div>
            <div className="skill-card">
              <h4 className="inter-medium">Design</h4>
              <p className="inter-regular">
                Figma, Adobe XD, Sketch, Responsive Design, UI/UX принципы
              </p>
            </div>
          </div>
        </section>

        <section className="magic-bento-section">
          <h3 className="inter-semibold">Интерактивные возможности</h3>
          <p className="inter-regular">
            Наведите курсор на карточки ниже, чтобы увидеть магические эффекты и анимации
          </p>
          <MagicBento 
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
          />
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
      
      <footer className="footer">
        <p className="inter-regular">&copy; 2024 CV Resume Landing. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App