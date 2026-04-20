import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      {/* Cabeçalho com Identidade Visual [cite: 10, 11, 12] */}
      <header className="header-card">
        <div className="foto-perfil">
          <img src="/Foto-Perfil.jpg" alt="Samer Nassir Halat" style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
        </div>
        <div className="header-info">
          <h1>Samer Nassir Halat</h1>
          <a href="https://github.com/SamerHalat" target="_blank" rel="noreferrer">
            github.com/SamerNassir
          </a>
        </div>
      </header>

      <main>
        {/* Dados Acadêmicos [cite: 14] */}
        <section className="section-card">
          <h2>Formação Acadêmica</h2>
          <div className="grid-2">
            <p><strong>Faculdade:</strong> FATEC Zona Leste</p>
            <p><strong>Curso:</strong> Desenvolvimento de Software Multiplataforma</p>
            <p><strong>Início:</strong> 2023</p>
            <p><strong>Previsão de Conclusão:</strong> 2026</p>
          </div>
        </section>

        {/* Seção 1: Projetos Integradores (PI) [cite: 6, 22] */}
        <section className="section-card">
          <h2>Projetos Integradores (PI)</h2>
          <div className="grid-2">
            <div className="project-card">
              <h3>PI1: Libras</h3>
              <p>Projeto focado em acessibilidade e tradução básica de Libras.</p>
              <Link to="/projeto/pi1-libras" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
            <div className="project-card">
              <h3>PI2: Gerenciador de Estoque</h3>
              <p>Sistema para controle e gestão de inventários.</p>
              <Link to="/projeto/pi2-estoque" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
            <div className="project-card">
              <h3>PI3: Prateleira</h3>
              <p>Organização e visualização de itens em sistemas de prateleiras.</p>
              <Link to="/projeto/pi3-prateleira" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
            <div className="project-card">
              <h3>PI4: Agroconecta Web</h3>
              <p>Plataforma Web para conexão no setor agrícola.</p>
              <Link to="/projeto/pi4-agroconecta-web" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
            <div className="project-card">
              <h3>PI5: AgroConecta Mobile</h3>
              <p>Versão Mobile do sistema de conexão agrícola.</p>
              <Link to="/projeto/pi5-agroconecta-mobile" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
            <div className="project-card">
              <h3>PI6: Portaria Eletrônica</h3>
              <p>Sistema de segurança e controle de acesso eletrônico.</p>
              <Link to="/projeto/pi6-portaria" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Seção 2: Outros Projetos */}
        <section className="section-card">
          <h2>Outros Projetos</h2>
          <div className="grid-2">
            <div className="project-card">
              <h3>Mural de Estágio</h3>
              <p>Refatoração do portal de vagas e estágios da FATEC Zona Leste.</p>
              <Link to="/projeto/mural-estagio" className="btn-link">Ver detalhes &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}