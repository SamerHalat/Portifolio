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
              Possuo experiência em refatoração e desenvolvimento de soluções críticas, com foco na criação de APIs RESTful escaláveis, seguras (JWT/Bcryptjs) e interfaces web/mobile modernas, aplicando metodologias ágeis e princípios sólidos de engenharia de software.
            </p>
          </section>

          <section className="section-card">
            <h2>Formação e Idiomas</h2>
            <p><strong>Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
            <p><strong>Instituição:</strong> FATEC Zona Leste (Previsão: 2026)</p>
            <p style={{ marginTop: '10px' }}><strong>Idiomas:</strong> Português (Nativo) e Inglês (Intermediário)</p>
            <p style={{ marginTop: '10px' }}><strong>Certificações:</strong> Google Cloud Computing Foundations, Design Patterns Básico</p>
          </section>
        </div>

        {/* 3. EXPERIÊNCIA PROFISSIONAL (Card Grande) */}
        <section className="section-card experience-card">
          <h2>Experiência Profissional</h2>
          <div className="exp-header">
            <h3>Desenvolvedor Full-Stack / Estagiário</h3>
            <span className="badge">08/2025 - 12/2025</span>
          </div>
          <p className="company">Fatec Zona Leste</p>
          <ul className="exp-details">
            <li>Atuei como Desenvolvedor Full-Stack no projeto interno <strong>Mural de Estágios</strong>, substituindo o sistema legado baseado em Blogger.</li>
            <li><strong>Arquitetura Backend:</strong> Desenvolvi a API RESTful utilizando Java com Spring Boot, implementando persistência de dados no MongoDB e garantindo a segurança das rotas com JWT e Bcryptjs.</li>
            <li><strong>Front-End:</strong> Criei uma interface moderna, rápida e responsiva utilizando React.js e Vite, construindo toda a lógica complexa de filtragem de vagas.</li>
            <li><strong>Resultado:</strong> Profissionalização da divulgação de vagas da instituição através de uma aplicação robusta, elevando a experiência do usuário e otimizando a gestão administrativa.</li>
          </ul>
        </section>

        {/* 4. PROJETOS INTEGRADORES COM LOGOS */}
        <section className="section-card">
          <h2>Projetos Integradores (PI)</h2>
          <div className="projects-grid">
            
            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI1/LogoPI1.svg" alt="Logo PI1" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI1: Libras</h3>
                <p>Projeto focado em acessibilidade e tradução básica de Libras.</p>
                <Link to="/projeto/pi1-libras" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <div className="logo-placeholder">PI2</div>
              </div>
              <div className="card-content">
                <h3>PI2: Gerenciador de Estoque</h3>
                <p>Sistema para controle e gestão de inventários.</p>
                <Link to="/projeto/pi2-estoque" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI3/Pi3_Logo.png" alt="Logo PI3" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI3: Clube Literário</h3>
                <p>Plataforma para assinaturas de livros com painel administrativo.</p>
                <Link to="/projeto/pi3-prateleira" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI5/PI5_logo.png" alt="Logo PI4" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI4: Agroconecta Web</h3>
                <p>Plataforma Web D2C para conexão no setor agrícola.</p>
                <Link to="/projeto/pi4-agroconecta-web" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <img src="/images/PI5/PI5_logo.png" alt="Logo PI5" className="card-logo" />
              </div>
              <div className="card-content">
                <h3>PI5: AgroConecta Mobile</h3>
                <p>Versão Mobile do sistema de conexão agrícola.</p>
                <Link to="/projeto/pi5-agroconecta-mobile" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

            <div className="project-card">
              <div className="card-logo-container">
                <div className="logo-placeholder">PI6</div>
              </div>
              <div className="card-content">
                <h3>PI6: Portaria Eletrônica</h3>
                <p>Sistema inteligente de segurança e controle de acesso (IoT).</p>
                <Link to="/projeto/pi6-portaria" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>

          </div>
        </section>

        {/* 5. OUTROS PROJETOS */}
        <section className="section-card">
          <h2>Outros Projetos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="card-logo-container">
                <div className="logo-placeholder" style={{color: '#2563eb'}}>FATEC</div>
              </div>
              <div className="card-content">
                <h3>Mural de Estágio</h3>
                <p>Refatoração do portal de vagas e estágios da FATEC Zona Leste.</p>
                <Link to="/projeto/mural-estagio" className="btn-link">Ver detalhes &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}