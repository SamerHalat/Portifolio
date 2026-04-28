import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const detalhesDosProjetos = {
  "pi1-libras": {
    nome: "PI1 - Libras: Acessibilidade Digital",
    tecnologias: "Flexbox, Grid, DOM",
    linguagens: "HTML5, CSS3, JavaScript Vanilla",
    linkCodigo: "https://github.com/SamerHalat/pi1-libras",
    descricao: "Plataforma web de recomendação e ensino desenvolvida para democratizar o aprendizado básico de Libras. O projeto foi construído com foco estrito em acessibilidade, garantindo que o conteúdo possuísse alta clareza visual e estruturação semântica para leitores de tela.",
    participacao: "Atuei na idealização da interface e no desenvolvimento frontend responsivo, assegurando a adaptação perfeita para navegação via desktop e dispositivos móveis.",
    tecnologiasPessoais: "HTML Semântico, CSS (Flexbox/Grid) e Manipulação de DOM via JS.",
    fotos: [
      { url: "/images/PI1/Pi1_home.png", desc: "Landing Page com foco em usabilidade e inclusão" },
      { url: "/images/PI1/Pi1_Cursos.png", desc: "Catálogo de módulos e recomendações de cursos" },
      { url: "/images/PI1/Pi1_SobreNos.png", desc: "Seção institucional detalhando os objetivos do projeto" },
      { url: "/images/PI1/LogoPI1.svg", desc: "Identidade visual do projeto" }
    ]
  },
  "pi2-estoque": {
    nome: "PI2 - Gestão de Inventário",
    tecnologias: "Node.js, Express, MySQL",
    linguagens: "HTML5, CSS3, JavaScript",
    linkCodigo: "https://github.com/SamerHalat/pi2-estoque",
    descricao: "Sistema de gerenciamento web focado no controle dinâmico de entrada e saída de produtos. A aplicação garante a visualização do inventário em tempo real, automatizando as métricas de produtos em estoque.",
    participacao: "Atuei no desenvolvimento estrutural da aplicação, interligando a visualização frontend com as lógicas de negócio e rotas configuradas no servidor Node.js.",
    tecnologiasPessoais: "Node.js, lógica de rotas, SQL básico e desenvolvimento Web (HTML/CSS).",
    fotos: []
  },
  "pi3-prateleira": {
    nome: "PI3 - Clube Literário (Assinaturas)",
    tecnologias: "Node.js, Express, Handlebars, MongoDB (Mongoose)",
    linguagens: "JavaScript, HTML, CSS",
    linkCodigo: "https://github.com/SamerHalat/pi_3semestre",
    descricao: "E-commerce robusto desenvolvido para um clube de assinatura de livros. O sistema gerencia diferentes níveis de planos (mensais a trimestrais) e conta com um Painel Administrativo completo para controle de estoque, assinantes e emissão de relatórios de métricas.",
    participacao: "Responsável pelo Front-end e desenvolvimento das rotas da API em Node.js e pela modelagem do banco de dados NoSQL pelo MongoDB. Implementei o sistema de autenticação, integração das views com Handlebars e os relatórios analíticos.",
    tecnologiasPessoais: "Mongoose (NoSQL), Express.js, Express-Session e Handlebars.",
    videoUrl: "https://www.youtube.com/embed/S96dv5yPlOc?si=Azq-4dfmERxwvosP", 
    fotos: [
      { url: "/images/PI3/Pi3_Home.jpeg", desc: "Vitrine principal do clube de assinatura" },
      { url: "/images/PI3/Pi3_Home2.png", desc: "Variação de interface de navegação" },
      { url: "/images/PI3/Pi3_HomeMobile.jpeg", desc: "Responsividade da interface em smartphones" },
      { url: "/images/PI3/Pi3_Planos.jpeg", desc: "Seleção dinâmica de planos recorrentes" },
      { url: "/images/PI3/Pi3_Login.jpeg", desc: "Tela segura de autenticação" },
      { url: "/images/PI3/Pi3_AreaCliente.png", desc: "Dashboard exclusivo do assinante" },
      { url: "/images/PI3/Pi3_CadastroProdutos.png", desc: "Gestão de inventário no painel do administrador" },
      { url: "/images/PI3/Pi3_Relatorio.png", desc: "Painel de métricas e performance de assinaturas" },
      { url: "/images/PI3/Pi3_LoginAdm.png", desc: "Acesso restrito para administradores" },
      { url: "/images/PI3/Pi3_Acessibilidade.png", desc: "Componentes nativos de acessibilidade" },
      { url: "/images/PI3/Pi3_Logo.png", desc: "Logotipo oficial da plataforma" }
    ]
  },
  "pi4-agroconecta-web": {
    nome: "PI4 - AgroConecta Web (Marketplace D2C)",
    tecnologias: "React (Vite), Node.js, Firebase Admin, Leaflet Maps, VLibras",
    linguagens: "JavaScript, HTML5, CSS3",
    linkCodigo: "https://github.com/SamerHalat/agroconecta-web",
    descricao: "Plataforma Web modelo Direct-to-Consumer (D2C) para conectar microagricultores diretamente a compradores locais. O sistema oferece geolocalização por mapas para exibição de fazendas e integra a ferramenta VLibras para total acessibilidade.",
    participacao: "Desenvolvedor Front-end responsável pela integração da API de mapas e pela construção da interface interativa em React, facilitando a navegação por catálogos e o agendamento de retiradas.",
    tecnologiasPessoais: "React Hooks, Axios, integração de Mapas e plugin VLibras.",
    fotos: [
      { url: "/images/PI4/PI4_mapa.jpeg", desc: "Geolocalização interativa de fazendas" },
      { url: "/images/PI4/PI4_DashBoard.jpeg", desc: "Painel de controle com indicadores de anúncios" },
      { url: "/images/PI4/PI4_Agendamento.jpeg", desc: "Sistema de reservas e horários para retirada" },
      { url: "/images/PI4/PI4_AnunciarProduto.jpeg", desc: "Formulário de listagem rápida para produtores" },
      { url: "/images/PI4/PI4_Produto.jpeg", desc: "Vitrine de produtos recém-colhidos" },
      { url: "/images/PI4/PI4_ProdutoDetalhe.jpeg", desc: "Ficha detalhada com origem e produtor responsável" },
      { url: "/images/PI4/PI4_Perfil.jpeg", desc: "Gestão de perfil da conta" },
      { url: "/images/PI4/PI4_PerfilCliente.jpeg", desc: "Preferências de conta do cliente final" },
      { url: "/images/PI4/PI4_LoginCliente.jpeg", desc: "Fluxo de login de consumidores" },
      { url: "/images/PI4/PI4_LoginAgricultor.jpeg", desc: "Acesso exclusivo para agricultores parceiros" },
      { url: "/images/PI4/PI4_loginEscolha.jpeg", desc: "Página de triagem de perfis" },
      { url: "/images/PI4/PI4_logo.jpeg", desc: "Logotipo AgroConecta Web" }
    ]
  },
  "pi5-agroconecta-mobile": {
    nome: "PI5 - AgroConecta Mobile",
    tecnologias: "React Native (Expo), Prisma ORM, PostgreSQL, Socket.io, JWT (Bcryptjs)",
    linguagens: "TypeScript, JavaScript, SQL",
    linkCodigo: "https://github.com/SamerHalat/agroconecta",
    descricao: "Evolução multiplataforma do ecossistema AgroConecta. A aplicação Mobile introduziu uma arquitetura avançada de dados. O destaque é a gestão inteligente de estoque: algoritmos evitam duplicidade somando automaticamente as quantidades de colheitas cadastradas que possuem o mesmo padrão e dono.",
    participacao: "Atuei como Desenvolvedor Full-Stack. No Front-End, utilizei bibliotecas do React Native como Maps, notificações push e bibliotecas gráficas, estruturando as telas principais (Home, Dashboard e CRUDs). No Back-End, implementei o Prisma ORM, gerenciamento do PostgreSQL e a segurança com JWT.",
    tecnologiasPessoais: "React Native, TypeScript, Prisma ORM, JWT e PostgreSQL.",
    videoUrl: "https://www.youtube.com/embed/MAY8xmcSaKs?si=8y9Nvg-GPfwKpUnA" ,
    fotos: [
      { url: "/images/PI5/Pi5_HomeCliente.jpeg", desc: "Feed de alimentos frescos adaptado ao formato Mobile" },
      { url: "/images/PI5/Pi5_Mapa.jpeg", desc: "Integração nativa de mapas para busca local" },
      { url: "/images/PI5/Pi5_GerenciarProdutos.jpeg", desc: "Painel mobile de controle inteligente de colheitas" },
      { url: "/images/PI5/Pi5_HomeAgricultor.jpeg", desc: "Visão geral do negócio para o agricultor" },
      { url: "/images/PI5/Pi5_HomeAgricultor1.jpeg", desc: "Métricas secundárias de acompanhamento" },
      { url: "/images/PI5/Pi5_HomeAgricultor2.jpeg", desc: "Acompanhamento de encomendas em tempo real" },
      { url: "/images/PI5/Pi5_Produtos.jpeg", desc: "Catálogo de hortifrúti" },
      { url: "/images/PI5/Pi5_DetalheProduto.jpeg", desc: "Informações sobre certificações e produtor" },
      { url: "/images/PI5/Pi5_AgendamentoCliente.jpeg", desc: "Fluxo simplificado de reserva e retirada" },
      { url: "/images/PI5/Pi5_Agendamentos.jpeg", desc: "Histórico geral de reservas" },
      { url: "/images/PI5/Pi5_CadastrarProdutos.jpeg", desc: "Cadastro rápido de safras pela câmera do dispositivo" },
      { url: "/images/PI5/Pi5_PerfiAgricultor.jpeg", desc: "Perfil público com avaliações do produtor" },
      { url: "/images/PI5/Pi5_PerfilCliente.jpeg", desc: "Área de configurações do cliente" },
      { url: "/images/PI5/PI5_logo.jpeg", desc: "Logo adaptado para resoluções mobile" },
      { url: "/images/PI5/PI5_logo.png", desc: "Marca oficial AgroConecta Mobile" }
    ]
  },
  "pi6-portaria": {
    nome: "PI6 - Portaria Inteligente IoT",
    tecnologias: "Django, Django REST Framework, IoT",
    linguagens: "Python, SQL",
    linkCodigo: "https://github.com/SamerHalat/pi6-portaria",
    descricao: "Sistema de Portaria Eletrônica com IoT. A aplicação integra validação de hardware e software em tempo real para permitir o controle de acessos de moradores e visitantes em condomínios residenciais ou comerciais.",
    participacao: "Em desenvolvimento ativo. Foco na estruturação inicial e arquitetura do servidor.",
    tecnologiasPessoais: "Python e Django (Em andamento).",
    fotos: []
  },
  "mural-estagio": {
    nome: "Mural de Estágio FATEC",
    tecnologias: "Spring Boot, React.js, Vite, MongoDB, Autenticação JWT",
    linguagens: "Java, JavaScript, HTML5, CSS3",
    linkCodigo: "https://github.com/SamerHalat/mural-vagas",
    descricao: "Projeto institucional focado na modernização do portal de estágios da Fatec ZL. A solução substituiu o sistema legado, implementando lógicas profundas de filtragem (por cursos, turnos e habilidades) e segurança avançada para o painel de anunciantes.",
    participacao: "Liderei o ciclo de refatoração do sistema. No Backend, estruturei a API RESTful com Spring Boot e MongoDB. No Frontend, concebi a interface escalável usando React + Vite.",
    tecnologiasPessoais: "Spring Boot (Java), MongoDB (NoSQL), React.js e Autenticação JWT.",
    fotos: [
      { url: "/images/Mural-Estagio/ME_Home.jpeg", desc: "Página inicial do portal de vagas" },
      { url: "/images/Mural-Estagio/ME_vagas.jpeg", desc: "Lista de vagas disponíveis para os alunos" },
      { url: "/images/Mural-Estagio/ME_DetalheVagas.jpeg", desc: "Visualização detalhada das informações da vaga" },
      { url: "/images/Mural-Estagio/ME_VagasFiltroFooter.jpeg", desc: "Sistema avançado de filtragem de vagas" },
      { url: "/images/Mural-Estagio/ME_ADMPainelDeControle.jpeg", desc: "Dashboard administrativo e métricas" },
      { url: "/images/Mural-Estagio/ME_ADMGerenciaVaga.jpeg", desc: "Interface para gerenciamento e moderação de vagas" },
      { url: "/images/Mural-Estagio/ME_ADMCadastrarVagas.jpeg", desc: "Formulário de cadastro para novas oportunidades de estágio" },
      { url: "/images/Mural-Estagio/ME_ADMGerenciarCursos.jpeg", desc: "Painel de controle para os cursos oferecidos" },
      { url: "/images/Mural-Estagio/ME_ADMGerenciarFiltroHabilidade.jpeg", desc: "Gerenciamento das tags de habilidades para as vagas" },
      { url: "/images/Mural-Estagio/ME_ADMCadastrarUsuario.jpeg", desc: "Interface de cadastro de novos usuários e empresas" }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const projeto = detalhesDosProjetos[id];
  const [imgIndex, setImgIndex] = useState(0);

  // Faz o scroll voltar para o topo sempre que entra na página
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!projeto) {
    return (
      <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Projeto não encontrado.</h2>
        <Link to="/" className="btn-link">Voltar para Home</Link>
      </div>
    );
  }

  // Funções para navegar no carrossel
  const next = () => setImgIndex((prev) => (prev + 1) % projeto.fotos.length);
  const prev = () => setImgIndex((prev) => (prev - 1 + projeto.fotos.length) % projeto.fotos.length);

  return (
    <div className="container">
      <header className="section-card">
        <Link to="/" className="btn-link">← Voltar para Home</Link>
        <h1 style={{marginTop: '20px'}}>{projeto.nome}</h1>
      </header>

      <main>
        {/* Renderiza o vídeo se houver link */}
        {projeto.videoUrl && (
          <section className="section-card">
            <h2>Demonstração em Vídeo</h2>
            <div className="video-container">
              <iframe src={projeto.videoUrl} title="Video" frameBorder="0" allowFullScreen></iframe>
            </div>
          </section>
        )}

        {/* Renderiza o carrossel se houver fotos */}
        {projeto.fotos && projeto.fotos.length > 0 && (
          <section className="section-card">
            <h2>Galeria de Telas</h2>
            <div className="carousel">
              <button onClick={prev} className="btn-carousel">❮</button>
              <div className="carousel-img-wrapper">
                <img src={projeto.fotos[imgIndex].url} alt={`Screenshot ${imgIndex + 1}`} />
                <div className="img-caption">
                  <p><strong>{imgIndex + 1} / {projeto.fotos.length}</strong> - {projeto.fotos[imgIndex].desc}</p>
                </div>
              </div>
              <button onClick={next} className="btn-carousel">❯</button>
            </div>
          </section>
        )}

        {/* Textos Detalhados */}
        <section className="section-card">
          <h2>Sobre o Projeto</h2>
          <p>{projeto.descricao}</p>
          
          <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
            <div>
              <p><strong>Stack Geral:</strong><br/>{projeto.tecnologias}</p>
            </div>
            <div>
              <p><strong>Linguagens:</strong><br/>{projeto.linguagens}</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h2>Minha Participação</h2>
          <p>{projeto.participacao}</p>
          <p style={{marginTop: '15px'}}><strong>Ferramentas e Lógicas que apliquei:</strong> {projeto.tecnologiasPessoais}</p>
        </section>

        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <a href={projeto.linkCodigo} target="_blank" rel="noreferrer" className="btn-repo">Acessar Repositório no GitHub</a>
        </div>
      </main>
    </div>
  );
}