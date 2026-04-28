import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      
      {/* 1. CABEÇALHO (Hero Section) */}
      <header className="header-card profile-header">
        <div className="foto-perfil">
          <img src="/Foto-Perfil.jpg" alt="Samer Nassir Halat" />
        </div>
        <div className="header-info">
          <h1>Samer Nassir Halat</h1>
          <h2 className="subtitle">Desenvolvedor Full-Stack (MERN/PERN)</h2>
          
          <div className="contact-info">
            <p>📧 samerhalat123@outlook.com</p>
            <p>📱 (11) 96706-2742</p>
          </div>

          <div className="social-buttons">
            <a href="https://github.com/SamerHalat" target="_blank" rel="noreferrer" className="btn-social github">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samerhalat" target="_blank" rel="noreferrer" className="btn-social linkedin">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* 2. SOBRE MIM & FORMAÇÃO */}
        <div className="grid-2">
          <section className="section-card">
            <h2>Sobre Mim</h2>
            <p>
              Desenvolvedor Full-Stack Júnior em formação, especializado em arquitetura MERN/PERN (Node.js, Express, React, TypeScript). 
              Possuo experiência em refatoração e desenvolvimento de soluções críticas, com foco na criação de APIs RESTful escaláveis, seguras e interfaces web/mobile modernas, aplicando metodologias ágeis e princípios sólidos de engenharia de software.
            </p>
          </section>

          <section className="section-card">
            <h2>Formação Acadêmica</h2>
            <p><strong>Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
            <p><strong>Instituição:</strong> FATEC Zona Leste</p>
            <p><strong>Período:</strong> Início em 2023/2 — Previsão em 2026/2</p>
            <p style={{ marginTop: '10px' }}><strong>Idiomas:</strong> Português (Nativo) e Inglês (Intermediário)</p>
          </section>
        </div>

        {/* 3. EXPERIÊNCIA PROFISSIONAL */}
        <section className="section-card experience-card">
          <h2>Experiência Profissional</h2>
          <div className="exp-header">
            <h3>Desenvolvedor Full-Stack / Estagiário</h3>
            <span className="badge">08/2025 - 12/2025</span>
          </div>
          <p className="company">Fatec Zona Leste</p>
          <ul className="exp-details">
            <li>Liderei a refatoração da plataforma <strong>Mural de Estágios</strong>, migrando um sistema legado para uma aplicação moderna.</li>
            <li>Desenvolvi a API RESTful com <strong>Java Spring Boot</strong>, <strong>MongoDB</strong> e autenticação segura (JWT/Bcryptjs).</li>
            <li>Construí o Front-end com <strong>React.js</strong> e <strong>Vite</strong>, implementando filtros avançados de busca.</li>
          </ul>
        </section>

        {/* 4. CERTIFICAÇÕES E CURSOS */}
        <section className="section-card">
          <h2>Certificações e Extensão</h2>
          <div className="cert-list">
            <div className="cert-item">
              <strong>Google Cloud Computing Foundations</strong>
              <span>Google • Emitida em nov de 2025</span>
            </div>
            <div className="cert-item">
              <strong>UX Básico</strong>
              <span>Centro Paula Souza • Emitida em nov de 2025</span>
              <span>ID: a682c1f6-bdd5-44a0-86a9-8b6792aa7e83</span>
            </div>
            <div className="cert-item">
              <strong>Design Patterns Básico</strong>
              <span>Centro Paula Souza • Emitida em mai de 2025</span>
              <span>ID: a2d4c7e2-a319-4afd-9589-a9d2d93b4444</span>
            </div>
            <div className="cert-item">
              <strong>Desenvolvedor Front-End</strong>
              <span>Centro Paula Souza • Emitida em abr de 2025</span>
              <span>ID: 4bce6d01-5220-4111-b4bb-6067c3297933</span>
            </div>
            <div className="cert-item">
              <strong>Front-End Básico</strong>
              <span>Centro Paula Souza • Emitida em fev de 2025</span>
              <span>ID: 843f992d-f93a-4ad7-bd89-17ae700bb524</span>
            </div>
          </div>
        </section>

        {/* 5. PROJETOS INTEGRADORES */}
        <section className="section-card">
          <h2>Projetos Integradores (PI)</h2>
          <div className="projects-grid">
            
            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI1/LogoPI1.svg" alt="Logo PI1" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI1: Libras Acessível</h3>
                <p>Plataforma web interativa para ensino e recomendação de cursos de Libras, com foco em inclusão e acessibilidade.</p>
                <Link to="/projeto/pi1-libras" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <div className="logo-placeholder">PI2</div>
              </div>
              <div className="card-content">
                <h3>PI2: Gestão de Inventário</h3>
                <p>Sistema web para controle de estoque e gestão de inventários, estruturado com Node.js, HTML e CSS.</p>
                <Link to="/projeto/pi2-estoque" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI3/Pi3_Logo.png" alt="Logo PI3" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI3: Clube Literário</h3>
                <p>E-commerce completo para clube de assinatura de livros com painel administrativo (Node.js, Handlebars e MongoDB).</p>
                <Link to="/projeto/pi3-prateleira" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI4/PI4_logo.jpeg" alt="Logo PI4" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI4: AgroConecta Web</h3>
                <p>Marketplace Web D2C para conectar microagricultores, com mapas interativos, plugin VLibras e React+Vite.</p>
                <Link to="/projeto/pi4-agroconecta-web" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI5/PI5_logo.jpeg" alt="Logo PI5" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI5: AgroConecta Mobile</h3>
                <p>Aplicação Mobile D2C com gestão inteligente de colheitas, autenticação JWT, PostgreSQL/Prisma e React Native.</p>
                <Link to="/projeto/pi5-agroconecta-mobile" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <div className="logo-placeholder">PI6</div>
              </div>
              <div className="card-content">
                <h3>PI6: Portaria Eletrônica</h3>
                <p>Solução IoT para controle de acesso condominial seguro, utilizando validação em tempo real com API em Django.</p>
                <Link to="/projeto/pi6-portaria" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

          </div>
        </section>

        {/* 6. OUTROS PROJETOS */}
        <section className="section-card">
          <h2>Outros Projetos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-logo-container">
                <div className="logo-placeholder" style={{color: '#2563eb'}}>FATEC</div>
              </div>
              <div className="card-content">
                <h3>Mural de Estágio</h3>
                <p>Refatoração corporativa da API e Frontend do portal de vagas e estágios da FATEC Zona Leste.</p>
                <Link to="/projeto/mural-estagio" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}