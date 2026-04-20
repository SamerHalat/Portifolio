import { useParams, Link } from 'react-router-dom';

const detalhesDosProjetos = {
  "pi1-libras": {
    nome: "PI1 - Libras",
    descricao: "Projeto de introdução à acessibilidade. O objetivo foi criar uma aplicação web interativa que auxiliasse na comunicação básica utilizando a Língua Brasileira de Sinais (Libras).",
    tecnologias: "HTML, CSS e JavaScript.",
    linkCodigo: "https://github.com/SamerNassir/pi1-libras",
    participacao: "Participei ativamente de todo o ciclo de vida da aplicação. Fui responsável pela construção da estrutura da interface, garantindo uma navegação intuitiva, e pela implementação da lógica interativa do sistema.",
    tecnologiasPessoais: "HTML5, CSS3 puro e Vanilla JavaScript.",
    fotos: ["/prints/pi1.png"]
  },
  "pi2-estoque": {
    nome: "PI2 - Gerenciador de Estoque",
    descricao: "Sistema focado no gerenciamento e controle de inventários, permitindo o registro eficiente de entradas e saídas de produtos.",
    tecnologias: "Java e MySQL.",
    linkCodigo: "https://github.com/SamerNassir/pi2-estoque",
    participacao: "Atuei diretamente na arquitetura da solução. Minhas principais entregas envolveram a modelagem do banco de dados relacional e a codificação da lógica de negócios para o controle de estoque no backend.",
    tecnologiasPessoais: "Java (com uso de JDBC) e consultas SQL.",
    fotos: ["/prints/pi2.png"]
  },
  "pi3-prateleira": {
    nome: "PI3 - Clube de Assinatura Literária",
    descricao: "Plataforma web para um clube de assinatura de livros. O sistema permite que os clientes escolham planos (mensal, bimestral ou trimestral) e gêneros literários favoritos (ficção, romance, etc.). Além do livro, o sistema gerencia o envio de 'boxes' contendo brindes personalizados (marca-páginas, pôsteres, blocos de notas). O projeto conta com a Área do Cliente e um Painel Administrativo para controle de estoque e assinaturas.",
    tecnologias: "Node.js, Express.js, Handlebars, MongoDB (com Mongoose), HTML5 e CSS3.",
    linkCodigo: "https://github.com/SamerNassir/pi_3semestre", // Troque para o link correto do seu repositório se precisar
    participacao: "Atuei no desenvolvimento Full-Stack da aplicação. Fui responsável pela criação das rotas do servidor utilizando Express e pela modelagem orientada a documentos no MongoDB usando Mongoose (gerenciando coleções de Usuários, Produtos e Assinaturas). Também auxiliei na integração do backend com as interfaces visuais dinâmicas usando a engine de templates Handlebars.",
    tecnologiasPessoais: "Node.js, Express.js, Mongoose (NoSQL) e Handlebars.",
    fotos: [
      // Sugestões de prints que você pode tirar do projeto rodando:
      // "/prints/pi3-home.png", 
      // "/prints/pi3-painel-adm.png",
      // "/prints/pi3-planos.png"
      "/prints/pi3.png" 
    ]
  },
  "pi4-agroconecta-web": {
    nome: "PI4 - AgroConecta Web", // i) Nome do projeto
    descricao: "Aplicação web desenvolvida para conectar agricultores e clientes finais, facilitando a compra e venda de produtos agrícolas. A plataforma possui painéis separados para produtores e consumidores, integração de mapas para localização de fazendas e conta com o plugin VLibras para garantir acessibilidade.", // ii) Descrição
    tecnologias: "React (Vite), React Router, Node.js, Express e Firebase (Admin SDK).", // ii) Tecnologias
    linkCodigo: "https://github.com/SamerNassir/agroconecta", // iii) Link do código (ajuste se necessário)
    participacao: "Atuei no desenvolvimento Full-stack da plataforma. No frontend, auxiliei na criação das telas principais, implementação dos carrosséis de produtos (Slick/Owl Carousel), integração de mapas (Leaflet/Google Maps) e da ferramenta de acessibilidade VLibras. No backend, participei da estruturação da API REST utilizando Node.js, Express e a comunicação com o banco de dados do Firebase.", // v) Participação
    tecnologiasPessoais: "React, CSS3, Vite, Express.js e Firebase Admin.", // v) Tecnologias específicas
    fotos: [
      "/img/capa.png", 
      "/img/LogoClara.png",
      "/img/map.jpg"
    ] // iv) Screenshots (usando os nomes exatos encontrados nos seus arquivos do repositório)
  },
  "pi5-agroconecta-mobile": {
    nome: "PI5 - AgroConecta: Conexão Direta do Campo à Mesa", // i) Nome do projeto
    descricao: "O AgroConecta é uma plataforma digital desenvolvida para eliminar intermediários na cadeia de suprimentos de alimentos frescos. O sistema promove a conexão direta entre microagricultores e consumidores locais, garantindo preços mais justos para o produtor e alimentos mais frescos para o consumidor.", // ii) Descrição
    tecnologias: "React Native (Expo), Node.js (TypeScript), PostgreSQL com Prisma ORM, Firebase (Authentication) e Socket.io para comunicação em tempo real.", // ii) Tecnologias
    linkCodigo: "https://github.com/PI5-AgroConecta-Mobile", // iii) Link do código
    participacao: "Atuei como desenvolvedor Full-stack no ciclo de vida completo (MVP). Fui responsável pela implementação do sistema de autenticação segura utilizando Firebase e JWT, garantindo a conformidade com a LGPD. Além disso, desenvolvi a lógica de geolocalização para busca de produtores próximos e a funcionalidade inteligente de gestão de inventário, que evita duplicidade de produtos ao somar quantidades de colheitas idênticas.", // v) Participação
    tecnologiasPessoais: "React Native, Expo, Firebase Auth, Geolocation API e integração com Prisma ORM.", // v) Tecnologias específicas
    fotos: [
      "/assets/images/capa.png", 
      "/assets/images/LogoClara.png",
      "/assets/images/SimboloAgricultorEscura.png"
    ] // iv) Screenshots baseadas nos seus arquivos do repositório
  },
  "pi6-portaria": {
    nome: "PI6 - Portaria Eletrônica",
    descricao: "Sistema inteligente de controle de acesso para condomínios, focando em segurança e automação residencial e comercial.",
    tecnologias: "Python (Django) e Internet das Coisas (IoT).",
    linkCodigo: "https://github.com/SamerNassir/pi6-portaria",
    participacao: "Atuei no desenvolvimento do backend do sistema. Fui o responsável pela criação da API de controle de moradores e pelas regras de validação de acesso.",
    tecnologiasPessoais: "Python e Django REST Framework.",
    fotos: ["/prints/pi6.png"]
  },
  "mural-estagio": {
    nome: "Mural de Estágio FATEC",
    descricao: "Refatoração completa do portal de vagas e estágios utilizado pela comunidade acadêmica. O projeto modernizou a arquitetura legada para uma solução mais escalável.",
    tecnologias: "Java (Spring Boot), React e MongoDB.",
    linkCodigo: "https://github.com/SamerNassir/mural-vagas",
    participacao: "Atuei como desenvolvedor Full-Stack. Realizei a estruturação da nova API em Spring Boot, configurei a persistência de dados no MongoDB e integrei as rotas com o frontend em React.",
    tecnologiasPessoais: "Spring Boot, Spring Security, MongoDB, React e Node.js.",
    fotos: ["/prints/mural.png"]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const projeto = detalhesDosProjetos[id];

  if (!projeto) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Projeto não encontrado.</h2>
        <p>Verifique se a URL está correta ou se o projeto foi cadastrado.</p>
        <Link to="/" className="btn-link">&larr; Voltar para a página principal</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="section-card">
        <Link to="/" className="btn-link" style={{ display: 'inline-block', marginBottom: '16px' }}>
          &larr; Voltar para Home
        </Link>
        <h1>{projeto.nome}</h1>
      </header>

      <main>
        <section className="section-card">
          <h2>Descrição e Tecnologias</h2>
          <p>{projeto.descricao}</p>
          <p style={{ marginTop: '16px' }}><strong>Stack Geral:</strong> {projeto.tecnologias}</p>
        </section>

        <section className="section-card">
          <h2>Minha Participação</h2>
          <p>{projeto.participacao}</p>
          <p style={{ marginTop: '16px' }}><strong>Tecnologias que utilizei:</strong> {projeto.tecnologiasPessoais}</p>
        </section>

        <section className="section-card">
          <h2>Galeria de Screenshots</h2>
          {projeto.fotos && projeto.fotos.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {projeto.fotos.map((foto, index) => (
                <div key={index} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', backgroundColor: '#f8fafc' }}>
                  {/* Dica: Para ver imagens provisórias se você não tiver os prints ainda, 
                      troque a linha da tag <img> abaixo por: 
                      <img src={`https://via.placeholder.com/800x450?text=${projeto.nome}`} alt="Screenshot" style={{ width: '100%', borderRadius: '4px' }} /> 
                  */}
                  <img src={foto} alt={`Screenshot ${index + 1} - ${projeto.nome}`} style={{ width: '100%', borderRadius: '4px' }} />
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#64748b', fontStyle: 'italic' }}>Nenhuma imagem cadastrada para este projeto ainda.</p>
          )}
        </section>

        <section className="section-card">
          <h2>Código Fonte</h2>
          <p style={{ marginBottom: '16px' }}>Acesse o repositório completo para visualizar a estrutura do código e as implementações detalhadas.</p>
          <a href={projeto.linkCodigo} target="_blank" rel="noreferrer" className="btn-link" style={{ padding: '8px 16px', backgroundColor: '#eff6ff', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
            Abrir repositório no GitHub &rarr;
          </a>
        </section>
      </main>
    </div>
  );
}