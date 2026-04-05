// =========================================
// EDITE SEUS PROJETOS AQUI
// =========================================

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  techs: string[];
  link?: string;
  github?: string;
  category: "software" | "gamedev";
}

export const projectsData: Project[] = [
  // ====== SOFTWARE ======
  {
    id: 1,
    title: "Dasboard Desafio Unimed",
    image: "/dev-showcase/images/dashboardunimed.png",
    description: "Dashboard de inteligência de estoque hospitalar para a UNIMED. Utiliza algoritmos de Machine Learning para encontrar grupos de itens classificados por similiridade, detectar itens críticos.",
    techs: ["React", "FastAPI", "Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/viniciushashizume/stock-insight-hub",
    category: "software"
  },
  {
    id: 2,
    title: "Agente LABRIOT",
    image: "/dev-showcase/images/agentelab.png",
    description: "Chatbot educacional utilizando RAG (Retrieval-Augmented Generation) com Google Gemini. Indexa documentos PDF para responder dúvidas de programação e gerar desafios.",
    techs: ["LangChain", "Gemini API", "FastAPI", "React", "RAG"],
    github: "https://github.com/viniciushashizume/agente-labriot",
    category: "software"
  },
  {
    id: 5,
    title: "Restaurant Analytics",
    image: "/dev-showcase/images/RestaurantAnalytics.png",
    description: "Dashboard full-stack containerizado para redes de restaurantes. Processa dados de vendas e operações com visualizações em tempo real.",
    techs: ["Docker", "PostgreSQL", "Node.js", "React", "Nginx"],
    github: "https://github.com/viniciushashizume/desafio-god-level-coder-challenge",
    category: "software"
  },
  {
    id: 4,
    title: "Monitoramento de Ração IoT",
    image: "/dev-showcase/images/dashboard.png",
    description: "Sistema IoT completo para monitoramento de ração. Inclui hardware ESP8266, comunicação MQTT, servidor Flask e análise preditiva de padrões de alimentação com PyTorch.",
    techs: ["IoT/ESP8266", "Python Flask", "React", "PyTorch", "MQTT"],
    github: "https://github.com/viniciushashizume/projeto-alimentador-labriot-2",
    category: "software"
  },
  {
    id: 9,
    title: "Site LABRIOT",
    image: "/dev-showcase/images/labriotsite.png",
    description: "Site institucional do Laboratório de Robótica e IoT da Universidade Tecnológica Federal do Paraná. Uma aplicação FullStack, com sistema de login com autenticação JWT.",
    techs: ["TypeScript", "React", "CSS", "JWT", "PostgreSQL"],
    link: "https://labriot-website.vercel.app/",
    category: "software"
  },
  {
    id: 6,
    title: "VoteFlix",
    image: "/dev-showcase/images/voteflix.png",
    description: "Sistema distribuído de avaliação de filmes. Implementa arquitetura cliente-servidor robusta com comunicação via Sockets, Threads e persistência em MySQL.",
    techs: ["Java", "Sockets", "MySQL", "Multithreading", "Maven"],
    github: "https://github.com/viniciushashizume/projeto-sistemas-distribuids",
    category: "software"
  },
  {
    id: 8,
    title: "Dashboard Saúde Mental",
    image: "/dev-showcase/images/MentalHealth.png",
    description: "Protótipo inicial criado para um projeto de iniciação científica da UTFPR, para visualização de dados de saúde mental, focada em análise de sintomas e identificação de arquétipos comportamentais.",
    techs: ["React", "Vite", "shadcn/ui", "Data Viz", "Python"],
    github: "https://github.com/viniciushashizume/mindscape-insights",
    category: "software"
  },

  // ====== GAMEDEV ======
  {
    id: 7,
    title: "Ninja Adventure",
    image: "/dev-showcase/images/NinjaAdventure.png",
    description: "Jogo com elementos de Action RPG feito sob perspectiva top-down. Estudo prático para o desenvolvimento de um sistema e combate em tempo real, integração de atributos de jogador e a implementação de IA para os inimigos utilizando uma Máquina de Estados Finitos (FSM)",
    techs: ["Unity", "C#", "FSM"],
    link: "https://hashass.itch.io/ninja-adventure",
    github: "https://github.com/viniciushashizume/Ninja-Adventure",
    category: "gamedev"
  },
  {
    id: 80,
    title: "Resident Evil Camera",
    image: "/dev-showcase/images/ResidentEvilCamera.png",
    description: "As mecânicas implementadas envolvem um sistema de movimentação em controles 'tanque', manipulação de animações e um sistema clássico de troca de câmeras por ângulos e gatilhos na área de jogo.",
    techs: ["Godot", "GDScript", "Blender", "Mixamo"],
    link: "https://hashass.itch.io/resident-evil-camera",
    github: "https://github.com/viniciushashizume/Resident-Evil-Camera",
    category: "gamedev"
  },
  {
    id: 90,
    title: "RPG Turn Based",
    image: "/dev-showcase/images/RPGTurnBased.png",
    description: "Este estudo tem como foco explorar conceitos de game design e programação voltados para recriar a atmosfera clássica de jogos de survival horror. As mecânicas implementadas envolvem um sistema de movimentação em controles 'tanque', manipulação de animações e um sistema clássico de troca de câmeras por ângulos e gatilhos na área de jogo.",
    techs: ["Game Maker Studio", "GML"],
    link: "https://hashass.itch.io/rpg-turn-based",
    github: "https://github.com/viniciushashizume/RPG",
    category: "gamedev"
  },
  {
    id: 10,
    title: "Khodzu Game",
    image: "/dev-showcase/images/KhodzuGame.png",
    description: "Desenvolvido na Unity, este projeto é um jogo de Action Platformer inspirado na clássica franquia Mega Man. Criado como um estudo prático de game design e programação, o jogo explora mecânicas de física e movimentação — (como pulos e dashes), além de inteligência artificial básica.",
    techs: ["Unity", "C#"],
    link: "https://hashass.itch.io/khodzu-game",
    github: "https://github.com/viniciushashizume/Khodzu-Game",
    category: "gamedev"
  },
  {
    id: 11,
    title: "Pac-Man AI",
    image: "/dev-showcase/images/pacman.png",
    description: "Implementação de Inteligência Artificial no clássico Pac-Man, com o tema de cidades inteligentes. Os inimigos utilizam algoritmos de busca A* e Gulosa para perseguir o jogador em labirintos dinâmicos.",
    techs: ["GameMaker", "GML", "AI Algorithms", "A* Search"],
    link: "https://hashass.itch.io/smart-cities-pacman",
    github: "https://github.com/viniciushashizume/cidades-inteligentes---pacman",
    category: "gamedev"
  },
];

// =========================================
// TECH STACK
// =========================================

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Docker", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tools" },
];
