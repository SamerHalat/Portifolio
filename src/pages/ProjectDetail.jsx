import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const detalhesDosProjetos = {
  "pi1-libras": {
    nome: "PI1 - Libras: Acessibilidade Digital",
    tecnologias: "HTML5, CSS3, JavaScript",
    linkCodigo: "https://github.com/SamerHalat/pi1-libras",
    descricao: "Portal interativo focado no ensino básico de Libras e disseminação da cultura surda.",
    participacao: "Desenvolvi a interface responsiva e a arquitetura de navegação do portal.",
    tecnologiasPessoais: "CSS Flexbox, Manipulação de DOM e HTML Semântico.",
    fotos: [
      { url: "/images/PI1/Pi1_home.png", desc: "Interface principal da Landing Page" },
      { url: "/images/PI1/Pi1_Cursos.png", desc: "Catálogo de módulos de aprendizagem" },
      { url: "/images/PI1/Pi1_SobreNos.png", desc: "Seção institucional e objetivos do projeto" },
      { url: "/images/PI1/LogoPI1.svg", desc: "Identidade visual oficial do projeto" }
    ]
  },
  "pi2-estoque": {
    nome: "PI2 - Gerenciador de Estoque",
    tecnologias: "Java, MySQL",
    linkCodigo: "https://github.com/SamerHalat/pi2-estoque",
    descricao: "Sistema de gerenciamento para controle de inventário empresarial.",
    participacao: "Atuei na modelagem do banco de dados e lógica de backend.",
    tecnologiasPessoais: "Java JDBC e SQL.",
    fotos: []
  },
  "pi3-prateleira": {
    nome: "PI3 - Clube de Assinatura Literária",
    tecnologias: "Node.js, Express, Handlebars, MongoDB",
    linkCodigo: "https://github.com/SamerHalat/pi_3semestre",
    descricao: "Plataforma completa de e-commerce para assinaturas de livros com brindes exclusivos.",
    participacao: "Responsável pelo Backend e modelagem NoSQL. Implementei o sistema de planos e a área administrativa.",
    tecnologiasPessoais: "Mongoose ORM, Express.js e Autenticação.",
    videoUrl: "https://www.youtube.com/embed/SUBSTITUA_PELO_ID_AQUI", 
    fotos: [
      { url: "/images/PI3/Pi3_Home.jpeg", desc: "Vitrine principal do clube de assinatura" },
      { url: "/images/PI3/Pi3_Home2.png", desc: "Segunda variante da interface principal" },
      { url: "/images/PI3/Pi3_HomeMobile.jpeg", desc: "Visualização da interface em dispositivos móveis" },
      { url: "/images/PI3/Pi3_Planos.jpeg", desc: "Seleção de planos de assinatura (Mensal/Bimestral)" },
      { url: "/images/PI3/Pi3_Login.jpeg", desc: "Tela de autenticação de utilizadores" },
      { url: "/images/PI3/Pi3_AreaCliente.png", desc: "Dashboard do assinante para gestão de conta" },
      { url: "/images/PI3/Pi3_CadastroProdutos.png", desc: "Interface administrativa para gestão de estoque" },
      { url: "/images/PI3/Pi3_Relatorio.png", desc: "Painel de métricas e performance de vendas" },
      { url: "/images/PI3/Pi3_LoginAdm.png", desc: "Portal de acesso restrito para administradores" },
      { url: "/images/PI3/Pi3_Acessibilidade.png", desc: "Recursos de inclusão e acessibilidade implementados" },
      { url: "/images/PI3/Pi3_Logo.png", desc: "Logotipo oficial da plataforma" }
    ]
  },
  "pi4-agroconecta-web": {
    nome: "PI4 - AgroConecta Web",
    tecnologias: "React (Vite), Node.js, Firebase",
    linkCodigo: "https://github.com/SamerHalat/agroconecta-web",
    descricao: "Marketplace para aproximar pequenos produtores agrícolas do consumidor final (D2C).",
    participacao: "Desenvolvi os fluxos de agendamento e a integração com mapas.",
    tecnologiasPessoais: "React Hooks, Google Maps API e Firebase.",
    fotos: [
      { url: "/images/PI4/PI4_mapa.jpeg", desc: "Mapa interativo para geolocalização de produtores" },
      { url: "/images/PI4/PI4_DashBoard.jpeg", desc: "Painel de controlo com indicadores de vendas" },
      { url: "/images/PI4/PI4_Agendamento.jpeg", desc: "Sistema de reserva de horários para recolha" },
      { url: "/images/PI4/PI4_AnunciarProduto.jpeg", desc: "Formulário de listagem de novos produtos agrícolas" },
      { url: "/images/PI4/PI4_Produto.jpeg", desc: "Visualização de produto no catálogo" },
      { url: "/images/PI4/PI4_ProdutoDetalhe.jpeg", desc: "Ficha detalhada com origem e certificações" },
      { url: "/images/PI4/PI4_Perfil.jpeg", desc: "Gestão de perfil do utilizador" },
      { url: "/images/PI4/PI4_PerfilCliente.jpeg", desc: "Histórico e preferências do consumidor" },
      { url: "/images/PI4/PI4_LoginCliente.jpeg", desc: "Fluxo de login para compradores" },
      { url: "/images/PI4/PI4_LoginAgricultor.jpeg", desc: "Acesso exclusivo para o produtor rural" },
      { url: "/images/PI4/PI4_loginEscolha.jpeg", desc: "Triagem inicial de tipo de utilizador" },
      { url: "/images/PI4/PI4_logo.jpeg", desc: "Branding AgroConecta Web" }
    ]
  },
  "pi5-agroconecta-mobile": {
    nome: "PI5 - AgroConecta Mobile",
    tecnologias: "React Native, Expo, Node.js, Prisma, PostgreSQL",
    linkCodigo: "https://github.com/SamerHalat/agroconecta",
    descricao: "Solução avançada mobile com perfis distintos para clientes e agricultores.",
    participacao: "Implementei a lógica de sincronização de estoque e autenticação JWT.",
    tecnologiasPessoais: "React Native, Prisma ORM e TypeScript.",
    videoUrl: "https://www.youtube.com/embed/SUBSTITUA_PELO_ID_AQUI",
    fotos: [
      { url: "/images/PI5/Pi5_HomeCliente.jpeg", desc: "Feed principal de produtos frescos no telemóvel" },
      { url: "/images/PI5/Pi5_Mapa.jpeg", desc: "Navegação por mapa para encontrar fazendas próximas" },
      { url: "/images/PI5/Pi5_GerenciarProdutos.jpeg", desc: "Gestão de colheita e estoque via mobile" },
      { url: "/images/PI5/Pi5_HomeAgricultor.jpeg", desc: "Painel do produtor: vendas e agendamentos" },
      { url: "/images/PI5/Pi5_HomeAgricultor1.jpeg", desc: "Visão secundária do dashboard de produção" },
      { url: "/images/PI5/Pi5_HomeAgricultor2.jpeg", desc: "Gestão de encomendas recebidas" },
      { url: "/images/PI5/Pi5_Produtos.jpeg", desc: "Catálogo mobile de hortifrúti" },
      { url: "/images/PI5/Pi5_DetalheProduto.jpeg", desc: "Informações sobre colheita e produtor" },
      { url: "/images/PI5/Pi5_AgendamentoCliente.jpeg", desc: "Confirmação de levantamento de pedido" },
      { url: "/images/PI5/Pi5_Agendamentos.jpeg", desc: "Listagem geral de reservas" },
      { url: "/images/PI5/Pi5_CadastrarProdutos.jpeg", desc: "Fluxo de inclusão de nova oferta" },
      { url: "/images/PI5/Pi5_PerfiAgricultor.jpeg", desc: "Perfil público do agricultor com avaliações" },
      { url: "/images/PI5/Pi5_PerfilCliente.jpeg", desc: "Configurações de conta do cliente" },
      { url: "/images/PI5/PI5_logo.jpeg", desc: "Logo da aplicação em formato retangular" },
      { url: "/images/PI5/PI5_logo.png", desc: "Logo oficial AgroConecta Mobile" }
    ]
  },
  "pi6-portaria": {
    nome: "PI6 - Portaria Eletrônica",
    tecnologias: "Python, Django, IoT",
    linkCodigo: "https://github.com/SamerHalat/pi6-portaria",
    descricao: "Sistema inteligente de segurança e controle de acesso com IoT.",
    participacao: "Criação da API de controle de moradores e logs de acesso.",
    tecnologiasPessoais: "Django REST Framework.",
    fotos: []
  },
  "mural-estagio": {
    nome: "Mural de Estágio FATEC",
    tecnologias: "Java Spring Boot, React, MongoDB",
    linkCodigo: "https://github.com/SamerHalat/mural-vagas",
    descricao: "Plataforma profissional para substituição do sistema legado de vagas da Fatec ZL.",
    participacao: "Refatoração total do backend e criação da interface em React.",
    tecnologiasPessoais: "Spring Boot, MongoDB e JWT.",
    fotos: []
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const projeto = detalhesDosProjetos[id];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!projeto) return (
    <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>
      <h2>Projeto não encontrado.</h2>
      <Link to="/" className="btn-link">Voltar para Home</Link>
    </div>
  );

  const next = () => setImgIndex((prev) => (prev + 1) % projeto.fotos.length);
  const prev = () => setImgIndex((prev) => (prev - 1 + projeto.fotos.length) % projeto.fotos.length);

  return (
    <div className="container">
      <header className="section-card">
        <Link to="/" className="btn-link">← Voltar para Home</Link>
        <h1 style={{marginTop: '20px'}}>{projeto.nome}</h1>
      </header>

      <main>
        {projeto.videoUrl && (
          <section className="section-card">
            <h2>Demonstração em Vídeo</h2>
            <div className="video-container">
              <iframe src={projeto.videoUrl} title="Video" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>
        )}

        {projeto.fotos.length > 0 && (
          <section className="section-card">
            <h2>Galeria Completa</h2>
            <div className="carousel">
              <button onClick={prev} className="btn-carousel">❮</button>
              <div className="carousel-img-wrapper">
                <img src={projeto.fotos[imgIndex].url} alt="Screenshot" />
                <div className="img-caption">
                  <p><strong>{imgIndex + 1} / {projeto.fotos.length}</strong> - {projeto.fotos[imgIndex].desc}</p>
                </div>
              </div>
              <button onClick={next} className="btn-carousel">❯</button>
            </div>
          </section>
        )}

        <section className="section-card">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
          <p style={{marginTop: '15px'}}><strong>Tecnologias:</strong> {projeto.tecnologias}</p>
        </section>

        <section className="section-card">
          <h2>Minha Participação</h2>
          <p>{projeto.participacao}</p>
          <p style={{marginTop: '15px'}}><strong>O que EU utilizei:</strong> {projeto.tecnologiasPessoais}</p>
        </section>

        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <a href={projeto.linkCodigo} target="_blank" rel="noreferrer" className="btn-repo">Ver no GitHub</a>
        </div>
      </main>
    </div>
  );
}