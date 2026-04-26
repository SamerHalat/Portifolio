import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const detalhesDosProjetos = {
  "pi1-libras": {
    nome: "PI1 - Libras",
    descricao: "Aplicação interativa para ensino básico de Libras e acessibilidade.",
    tecnologias: "HTML, CSS e JavaScript.",
    linkCodigo: "https://github.com/SamerNassir/pi1-libras",
    participacao: "Desenvolvimento da interface e lógica de navegação.",
    tecnologiasPessoais: "HTML5, CSS3 e JS Vanilla.",
    fotos: [
      "/images/PI1/Pi1_home.png",
      "/images/PI1/Pi1_Cursos.png",
      "/images/PI1/Pi1_SobreNos.png"
    ]
  },
  "pi3-prateleira": {
    nome: "PI3 - Clube de Assinatura Literária",
    descricao: "Sistema de gestão de assinaturas de livros com brindes personalizados.",
    tecnologias: "Node.js, Express, Handlebars e MongoDB.",
    linkCodigo: "https://github.com/SamerNassir/pi_3semestre",
    participacao: "Modelagem do banco NoSQL e criação das rotas de admin e cliente.",
    tecnologiasPessoais: "Mongoose, Express e Handlebars.",
    videoUrl: "https://www.youtube.com/embed/S96dv5yPlOc?si=bkptMrtgX3UGsIWq",
    fotos: [
      "/images/PI3/Pi3_Home.jpeg",
      "/images/PI3/Pi3_Planos.jpeg",
      "/images/PI3/Pi3_Login.jpeg",
      "/images/PI3/Pi3_AreaCliente.png",
      "/images/PI3/Pi3_Relatorio.png"
    ]
  },
  "pi4-agroconecta-web": {
    nome: "PI4 - Agroconecta Web",
    descricao: "Plataforma web para conectar microagricultores e consumidores.",
    tecnologias: "React, Node.js e Firebase.",
    linkCodigo: "https://github.com/SamerNassir/agroconecta-web",
    participacao: "Integração com Google Maps API e criação do catálogo de produtos.",
    tecnologiasPessoais: "React Hooks, Axios e Firebase Admin.",
    fotos: [
      "/images/PI4/PI4_logo.jpeg",
      "/images/PI4/PI4_DashBoard.jpeg",
      "/images/PI4/PI4_mapa.jpeg",
      "/images/PI4/PI4_Produto.jpeg"
    ]
  },
  "pi5-agroconecta-mobile": {
    nome: "PI5 - AgroConecta App Mobile",
    descricao: "App mobile para comércio direto de alimentos frescos.",
    tecnologias: "React Native, Node.js e PostgreSQL.",
    linkCodigo: "https://github.com/SamerNassir/agroconecta",
    participacao: "Implementação da autenticação JWT e lógica de estoque inteligente.",
    tecnologiasPessoais: "React Native, Expo e Prisma ORM.",
    videoUrl: "https://www.youtube.com/embed/MAY8xmcSaKs?si=EhyKyyF4pDmwWBwf",
    fotos: [
      "/images/PI5/PI5_logo.jpeg",
      "/images/PI5/Pi5_HomeCliente.jpeg",
      "/images/PI5/Pi5_Mapa.jpeg",
      "/images/PI5/Pi5_Produtos.jpeg"
    ]
  },
  // Adicione PI2, PI6 e Mural de Estágio seguindo o mesmo padrão...
};

export default function ProjectDetail() {
  const { id } = useParams();
  const projeto = detalhesDosProjetos[id];
  const [imgIndex, setImgIndex] = useState(0);

  if (!projeto) {
    return (
      <div className="container">
        <h2>Projeto não encontrado!</h2>
        <Link to="/">Voltar para Home</Link>
      </div>
    );
  }

  const proximaImg = () => {
    setImgIndex((prev) => (prev + 1) % projeto.fotos.length);
  };

  const anteriorImg = () => {
    setImgIndex((prev) => (prev - 1 + projeto.fotos.length) % projeto.fotos.length);
  };

  return (
    <div className="container">
      <header className="section-card">
        <Link to="/" className="btn-link">&larr; Voltar</Link>
        <h1 style={{ marginTop: '15px' }}>{projeto.nome}</h1>
      </header>

      <main>
        {/* Vídeo (se houver) */}
        {projeto.videoUrl && (
          <section className="section-card">
            <h2>Demonstração em Vídeo</h2>
            <div className="video-container">
              <iframe 
                src={projeto.videoUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </section>
        )}

        {/* Carrossel de Imagens */}
        <section className="section-card">
          <h2>Galeria do Projeto</h2>
          <div className="carousel">
            <button onClick={anteriorImg} className="btn-carousel">❮</button>
            <div className="carousel-img-wrapper">
              <img src={projeto.fotos[imgIndex]} alt="Slide" />
              <p className="img-counter">{imgIndex + 1} / {projeto.fotos.length}</p>
            </div>
            <button onClick={proximaImg} className="btn-carousel">❯</button>
          </div>
        </section>

        <section className="section-card">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
          <p style={{ marginTop: '10px' }}><strong>Tecnologias:</strong> {projeto.tecnologias}</p>
        </section>

        <section className="section-card">
          <h2>Minha Participação</h2>
          <p>{projeto.participacao}</p>
          <p style={{ marginTop: '10px' }}><strong>Ferramentas que usei:</strong> {projeto.tecnologiasPessoais}</p>
        </section>

        <footer style={{ textAlign: 'center', padding: '20px' }}>
          <a href={projeto.linkCodigo} target="_blank" rel="noreferrer" className="btn-link">Ver Código no GitHub</a>
        </footer>
      </main>
    </div>
  );
}