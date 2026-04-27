import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const detalhesDosProjetos = {
  "pi1-libras": {
    nome: "PI1 - Libras: Acessibilidade Digital",
    descricao: "Projeto focado na introdução ao desenvolvimento web, com ênfase na estruturação de interfaces limpas e acessíveis para o ensino básico de Libras.",
    tecnologias: "HTML5, CSS3 e JavaScript.",
    linkCodigo: "https://github.com/Kendi9866/PROJETO_PI",
    participacao: "Desenvolvi a interface responsiva e a arquitetura de navegação do portal.",
    tecnologiasPessoais: "CSS Flexbox, Manipulação de DOM e HTML Semântico.",
    fotos: [
      { url: "/images/PI1/Pi1_home.png", desc: "Página inicial do portal de Libras" },
      { url: "/images/PI1/Pi1_Cursos.png", desc: "Seção de cursos e níveis de aprendizado" },
      { url: "/images/PI1/Pi1_SobreNos.png", desc: "Informações sobre os objetivos do projeto" }
    ]
  },
  "pi2-estoque": {
    nome: "PI2 - Gerenciador de Estoque",
    descricao: "Sistema focado no gerenciamento e controle de inventários, permitindo o registro eficiente de entradas e saídas de produtos.",
    tecnologias: "Java e MySQL.",
    linkCodigo: "https://github.com/SamerHalat/pi2-estoque",
    participacao: "Atuei diretamente na arquitetura da solução, modelagem do banco de dados relacional e codificação da lógica de negócios.",
    tecnologiasPessoais: "Java (com uso de JDBC) e consultas SQL.",
    fotos: []
  },
  "pi3-prateleira": {
    nome: "PI3 - Clube de Assinatura Literária",
    descricao: "Plataforma completa de e-commerce para assinaturas de livros com brindes exclusivos. O destaque é o Painel Administrativo para gestão de planos e estoque.",
    tecnologias: "Node.js, Express, Handlebars e MongoDB.",
    linkCodigo: "https://github.com/SamerHalat/pi_3semestre",
    participacao: "Responsável pelo Backend e modelagem NoSQL. Implementei o sistema de planos e foquei na acessibilidade web (UX).",
    tecnologiasPessoais: "Mongoose ORM, Express.js e Autenticação.",
    videoUrl: "https://www.youtube.com/embed/S96dv5yPlOc?si=awqBqT8QqsSt12r-\"", // Troque o ID do vídeo aqui
    fotos: [
      { url: "/images/PI3/Pi3_Home.jpeg", desc: "Vitrine principal de livros e novidades" },
      { url: "/images/PI3/Pi3_Login.jpeg", desc: "Interface de autenticação de usuários" },
      { url: "/images/PI3/Pi3_CadastroProdutos.png", desc: "Interface administrativa para cadastro de títulos" },
      { url: "/images/PI3/Pi3_Relatorio.png", desc: "Gráficos e relatórios de vendas e estoque" },
      { url: "/images/PI3/Pi3_Acessibilidade.png", desc: "Recursos de acessibilidade implementados na plataforma" }
    ]
  },
  "pi4-agroconecta-web": {
    nome: "PI4 - AgroConecta Web",
    descricao: "Estudo de caso focado na otimização da cadeia de suprimentos agrícola, conectando microagricultores diretamente ao consumidor final (D2C).",
    tecnologias: "React (Vite), Node.js e Firebase.",
    linkCodigo: "https://github.com/SamerHalat/agroconecta-web",
    participacao: "Atuei no Front-end com React, desenvolvendo fluxos de agendamento e a integração visual com mapas.",
    tecnologiasPessoais: "React Hooks, Google Maps API e Firebase.",
    fotos: [
      { url: "/images/PI4/PI4_Agendamento.jpeg", desc: "Sistema de agendamento de retiradas e entregas" },
      { url: "/images/PI4/PI4_AnunciarProduto.jpeg", desc: "Formulário para o agricultor postar novos produtos" },
      { url: "/images/PI4/PI4_mapa.jpeg", desc: "Integração com mapas para localizar fazendas próximas" }
    ]
  },
  "pi5-agroconecta-mobile": {
    nome: "PI5 - AgroConecta Mobile",
    descricao: "Solução mobile avançada focada na mobilidade do produtor, apresentando perfis altamente distintos para Clientes e Agricultores.",
    tecnologias: "React Native (Expo), Node.js, PostgreSQL e Prisma.",
    linkCodigo: "https://github.com/SamerHalat/agroconecta",
    participacao: "Desenvolvedor Full-stack. Criei o sistema de estoque inteligente e a autenticação segura via JWT.",
    tecnologiasPessoais: "React Native, Prisma ORM e TypeScript.",
    videoUrl: "https://www.youtube.com/embed/MAY8xmcSaKs?si=IAxqtlSRALMBeu7p" ,
    fotos: [
      { url: "/images/PI5/Pi5_HomeCliente.jpeg", desc: "Feed de produtos frescos para o consumidor" },
      { url: "/images/PI5/Pi5_GerenciarProdutos.jpeg", desc: "Interface de controle de estoque e colheitas" },
      { url: "/images/PI5/Pi5_PerfiAgricultor.jpeg", desc: "Perfil público e reputação do produtor" }
    ]
  },
  "pi6-portaria": {
    nome: "PI6 - Portaria Eletrônica",
    descricao: "Sistema inteligente de controle de acesso para condomínios, focando em segurança e automação residencial (IoT).",
    tecnologias: "Python (Django) e Internet das Coisas (IoT).",
    linkCodigo: "https://github.com/SamerHalat/pi6-portaria",
    participacao: "Fui responsável pela criação da API de controle de moradores e pelas regras de validação de acesso no backend.",
    tecnologiasPessoais: "Python e Django REST Framework.",
    fotos: []
  },
  "mural-estagio": {
    nome: "Mural de Estágio FATEC",
    descricao: "Refatoração completa do portal de vagas utilizado pela comunidade acadêmica para uma solução mais escalável.",
    tecnologias: "Java (Spring Boot), React e MongoDB.",
    linkCodigo: "https://github.com/SamerHalat/mural-vagas",
    participacao: "Realizei a estruturação da nova API em Spring Boot e integrei as rotas com o frontend em React.",
    tecnologiasPessoais: "Spring Boot, MongoDB e React.",
    fotos: []
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const projeto = detalhesDosProjetos[id];
  const [imgIndex, setImgIndex] = useState(0);

  // Faz a página carregar sempre no topo
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!projeto) {
    return (
      <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Projeto não encontrado.</h2>
        <Link to="/" className="btn-link">&larr; Voltar para a Home</Link>
      </div>
    );
  }

  const nextImg = () => setImgIndex((prev) => (prev + 1) % projeto.fotos.length);
  const prevImg = () => setImgIndex((prev) => (prev - 1 + projeto.fotos.length) % projeto.fotos.length);

  return (
    <div className="container">
      <header className="section-card">
        <Link to="/" className="btn-link" style={{ display: 'inline-block', marginBottom: '16px' }}>
          &larr; Voltar para Home
        </Link>
        <h1>{projeto.nome}</h1>
      </header>

      <main>
        {/* VÍDEO (Exibido apenas se o projeto tiver a propriedade videoUrl) */}
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

        {/* CARROSSEL DE FOTOS */}
        {projeto.fotos && projeto.fotos.length > 0 && (
          <section className="section-card">
            <h2>Galeria de Telas</h2>
            <div className="carousel">
              <button onClick={prevImg} className="btn-carousel">❮</button>
              <div className="carousel-img-wrapper">
                <img src={projeto.fotos[imgIndex].url} alt="Screenshot do projeto" />
                <div className="img-caption">
                  <p><strong>{imgIndex + 1} / {projeto.fotos.length}</strong> - {projeto.fotos[imgIndex].desc}</p>
                </div>
              </div>
              <button onClick={nextImg} className="btn-carousel">❯</button>
            </div>
          </section>
        )}

        {/* DESCRIÇÕES GERAIS */}
        <section className="section-card">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
          <p style={{ marginTop: '16px' }}><strong>Stack Geral:</strong> {projeto.tecnologias}</p>
        </section>

        <section className="section-card">
          <h2>Minha Participação</h2>
          <p>{projeto.participacao}</p>
          <p style={{ marginTop: '16px' }}><strong>Tecnologias que EU utilizei:</strong> {projeto.tecnologiasPessoais}</p>
        </section>

        <section className="section-card" style={{textAlign: 'center'}}>
          <a href={projeto.linkCodigo} target="_blank" rel="noreferrer" className="btn-repo">
            Ver Código no GitHub
          </a>
        </section>
      </main>
    </div>
  );
}