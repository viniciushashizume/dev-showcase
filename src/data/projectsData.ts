// =========================================
// EDITE SEUS PROJETOS AQUI
// Adicione, remova ou modifique os projetos conforme necessário
// =========================================

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  techs: string[];
  link: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Stock Insight Hub",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Dashboard de inteligência de estoque hospitalar premiado (Desafio Unimed). Utiliza Machine Learning (K-Means) para otimizar compras, detectar itens críticos e prevenir rupturas.",
    techs: ["React", "FastAPI", "Python", "Scikit-learn", "Pandas"],
    link: "#",
    github: "https://github.com/viniciushashizume/stock-insight-hub"
  },
  {
    id: 2,
    title: "Agente LABRIOT (RAG)",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    description: "Chatbot educacional utilizando RAG (Retrieval-Augmented Generation) com Google Gemini. Indexa documentos PDF para responder dúvidas de programação e gerar desafios.",
    techs: ["LangChain", "Gemini API", "FastAPI", "React", "FAISS"],
    link: "#",
    github: "https://github.com/viniciushashizume/agente-labriot"
  },
  {
    id: 3,
    title: "Restaurant Analytics",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&h=400&fit=crop",
    description: "Dashboard full-stack containerizado para redes de restaurantes. Processa dados massivos de vendas e operações com visualizações em tempo real.",
    techs: ["Docker", "PostgreSQL", "Node.js", "React", "Nginx"],
    link: "#",
    github: "https://github.com/viniciushashizume/desafio-god-level-coder-challenge"
  },
  {
    id: 4,
    title: "IoT Smart Pet Feeder",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=600&h=400&fit=crop",
    description: "Sistema IoT completo para monitoramento de ração. Inclui hardware ESP8266, comunicação MQTT, servidor Flask e análise preditiva de padrões de alimentação com PyTorch.",
    techs: ["IoT/ESP8266", "Python Flask", "React", "PyTorch", "MQTT"],
    link: "#",
    github: "https://github.com/viniciushashizume/projeto-alimentador-labriot-2"
  },
  {
    id: 5,
    title: "Steam Dashboard",
    image: "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?w=600&h=400&fit=crop",
    description: "Aplicação web que consome a API da Steam para exibir perfis de jogadores, estatísticas detalhadas e gráficos de jogos mais jogados.",
    techs: ["MERN Stack", "TypeScript", "Tailwind", "Steam API"],
    link: "#",
    github: "https://github.com/viniciushashizume/steamdashboard"
  },
  {
    id: 6,
    title: "VoteFlix",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
    description: "Sistema distribuído de avaliação de filmes. Implementa arquitetura cliente-servidor robusta com comunicação via Sockets, Threads e persistência em MySQL.",
    techs: ["Java", "Sockets", "MySQL", "Multithreading", "Maven"],
    link: "#",
    github: "https://github.com/viniciushashizume/projeto-sistemas-distribuids"
  },
  {
    id: 7,
    title: "Pac-Man AI",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    description: "Implementação de Inteligência Artificial no clássico Pac-Man. Fantasmas utilizam algoritmos de busca A* e Gulosa para perseguir o jogador em labirintos dinâmicos.",
    techs: ["GameMaker", "GML", "AI Algorithms", "A* Search"],
    link: "#",
    github: "https://github.com/viniciushashizume/cidades-inteligentes---pacman"
  },
  {
    id: 8,
    title: "Mindscape Insights",
    image: "https://images.unsplash.com/photo-1505542435372-995ad76c6694?w=600&h=400&fit=crop",
    description: "Plataforma moderna para visualização de dados de saúde mental, focada em análise de sintomas e identificação de arquétipos comportamentais.",
    techs: ["React", "Vite", "shadcn/ui", "Data Viz"],
    link: "#",
    github: "https://github.com/viniciushashizume/mindscape-insights"
  }
];

// =========================================
// DADOS DA TIMELINE / JORNADA
// =========================================

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2022",
    title: "Início da Graduação",
    description: "Comecei o curso de Ciência da Computação na universidade, dando o primeiro passo na minha jornada tech.",
    type: "education"
  },
  {
    id: 2,
    year: "2023",
    title: "Primeiro Projeto Open Source",
    description: "Contribuí para meu primeiro projeto open source no GitHub, aprendendo sobre colaboração e código limpo.",
    type: "project"
  },
  {
    id: 3,
    year: "2023",
    title: "Estágio em Desenvolvimento",
    description: "Iniciei meu primeiro estágio como desenvolvedor, trabalhando com React e Node.js em projetos reais.",
    type: "work"
  },
  {
    id: 4,
    year: "2024",
    title: "Hackathon Universitário",
    description: "Venci o hackathon da universidade com um projeto de impacto social usando IA.",
    type: "achievement"
  },
  {
    id: 5,
    year: "2024",
    title: "Liderança de Projeto",
    description: "Assumi a liderança técnica de um projeto interno, mentorando outros desenvolvedores juniores.",
    type: "work"
  }
];

// =========================================
// TECH STACK
// =========================================

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
];
