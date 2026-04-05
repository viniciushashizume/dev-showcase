import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.projects": { pt: "Projetos", en: "Projects" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  // Hero
  "hero.greeting": { pt: "👋 Olá, seja bem-vindo!", en: "👋 Hello, welcome!" },
  "hero.iam": { pt: "Eu sou", en: "I am" },
  "hero.bio": {
    pt: "Estudante de <cs>Ciência da Computação</cs>, apaixonado por desenvolvimento de software e criação de experiências digitais inovadoras. Transformo ideias em código limpo e soluções elegantes.",
    en: "A <cs>Computer Science</cs> student, passionate about software development and creating innovative digital experiences. I turn ideas into clean code and elegant solutions.",
  },
  "hero.degree": { pt: "Ciência da Computação", en: "Computer Science" },
  "hero.university": { pt: "Universidade Tecnológica Federal do Paraná", en: "Federal University of Technology – Paraná" },
  "hero.techTitle": { pt: "Tecnologias que domino", en: "Technologies I work with" },
  "hero.scrollCta": { pt: "Ver projetos", en: "View projects" },

  // Projects
  "projects.badge": { pt: "Portfólio", en: "Portfolio" },
  "projects.title": { pt: "Projetos em Destaque", en: "Featured Projects" },
  "projects.subtitle": {
    pt: "Uma seleção dos meus trabalhos mais recentes. Cada projeto representa um desafio único e uma oportunidade de aprendizado.",
    en: "A selection of my most recent work. Each project represents a unique challenge and a learning opportunity.",
  },
  "projects.software": { pt: "Software", en: "Software" },
  "projects.gamedev": { pt: "Game Development", en: "Game Development" },

  // Contact
  "contact.badge": { pt: "Contato", en: "Contact" },
  "contact.title": { pt: "Vamos Conversar?", en: "Let's Talk?" },
  "contact.subtitle": {
    pt: "Estou sempre aberto a novas oportunidades, colaborações interessantes ou apenas um bate-papo sobre tecnologia. Não hesite em entrar em contato!",
    en: "I'm always open to new opportunities, interesting collaborations, or just a chat about technology. Don't hesitate to reach out!",
  },
};

// Project descriptions translations
export const projectTranslations: Record<number, Record<Language, { title: string; description: string }>> = {
  1: {
    pt: { title: "Dasboard Desafio Unimed", description: "Dashboard de inteligência de estoque hospitalar para a UNIMED. Utiliza algoritmos de Machine Learning para encontrar grupos de itens classificados por similiridade, detectar itens críticos." },
    en: { title: "Unimed Challenge Dashboard", description: "Hospital stock intelligence dashboard for UNIMED. Uses Machine Learning algorithms to find item groups classified by similarity and detect critical items." },
  },
  2: {
    pt: { title: "Agente LABRIOT", description: "Chatbot educacional utilizando RAG (Retrieval-Augmented Generation) com Google Gemini. Indexa documentos PDF para responder dúvidas de programação e gerar desafios." },
    en: { title: "LABRIOT Agent", description: "Educational chatbot using RAG (Retrieval-Augmented Generation) with Google Gemini. Indexes PDF documents to answer programming questions and generate challenges." },
  },
  5: {
    pt: { title: "Restaurant Analytics", description: "Dashboard full-stack containerizado para redes de restaurantes. Processa dados de vendas e operações com visualizações em tempo real." },
    en: { title: "Restaurant Analytics", description: "Containerized full-stack dashboard for restaurant chains. Processes sales and operations data with real-time visualizations." },
  },
  4: {
    pt: { title: "Monitoramento de Ração IoT", description: "Sistema IoT completo para monitoramento de ração. Inclui hardware ESP8266, comunicação MQTT, servidor Flask e análise preditiva de padrões de alimentação com PyTorch." },
    en: { title: "IoT Pet Food Monitoring", description: "Complete IoT system for pet food monitoring. Includes ESP8266 hardware, MQTT communication, Flask server, and predictive feeding pattern analysis with PyTorch." },
  },
  9: {
    pt: { title: "Site LABRIOT", description: "Site institucional do Laboratório de Robótica e IoT da Universidade Tecnológica Federal do Paraná. Uma aplicação FullStack, com sistema de login com autenticação JWT." },
    en: { title: "LABRIOT Website", description: "Institutional website for the Robotics and IoT Laboratory at the Federal University of Technology – Paraná. A FullStack application with JWT authentication login system." },
  },
  6: {
    pt: { title: "VoteFlix", description: "Sistema distribuído de avaliação de filmes. Implementa arquitetura cliente-servidor robusta com comunicação via Sockets, Threads e persistência em MySQL." },
    en: { title: "VoteFlix", description: "Distributed movie rating system. Implements robust client-server architecture with Socket communication, Threads, and MySQL persistence." },
  },
  8: {
    pt: { title: "Dashboard Saúde Mental", description: "Protótipo inicial criado para um projeto de iniciação científica da UTFPR, para visualização de dados de saúde mental, focada em análise de sintomas e identificação de arquétipos comportamentais." },
    en: { title: "Mental Health Dashboard", description: "Initial prototype created for a scientific research project at UTFPR, for mental health data visualization, focused on symptom analysis and behavioral archetype identification." },
  },
  7: {
    pt: { title: "Ninja Adventure", description: "Jogo com elementos de Action RPG feito sob perspectiva top-down. Estudo prático para o desenvolvimento de um sistema e combate em tempo real, integração de atributos de jogador e a implementação de IA para os inimigos utilizando uma Máquina de Estados Finitos (FSM)" },
    en: { title: "Ninja Adventure", description: "Action RPG game made from a top-down perspective. Practical study for developing a real-time combat system, player attribute integration, and enemy AI implementation using a Finite State Machine (FSM)." },
  },
  80: {
    pt: { title: "Resident Evil Camera", description: "As mecânicas implementadas envolvem um sistema de movimentação em controles 'tanque', manipulação de animações e um sistema clássico de troca de câmeras por ângulos e gatilhos na área de jogo." },
    en: { title: "Resident Evil Camera", description: "The implemented mechanics involve a 'tank' control movement system, animation handling, and a classic camera switching system based on angles and triggers in the game area." },
  },
  90: {
    pt: { title: "RPG Turn Based", description: "Este estudo tem como foco explorar conceitos de game design e programação voltados para recriar a atmosfera clássica de jogos de survival horror. As mecânicas implementadas envolvem um sistema de movimentação em controles 'tanque', manipulação de animações e um sistema clássico de troca de câmeras por ângulos e gatilhos na área de jogo." },
    en: { title: "RPG Turn Based", description: "This study focuses on exploring game design and programming concepts aimed at recreating the classic survival horror atmosphere. The implemented mechanics involve a 'tank' control movement system, animation handling, and a classic camera switching system." },
  },
  10: {
    pt: { title: "Khodzu Game", description: "Desenvolvido na Unity, este projeto é um jogo de Action Platformer inspirado na clássica franquia Mega Man. Criado como um estudo prático de game design e programação, o jogo explora mecânicas de física e movimentação — (como pulos e dashes), além de inteligência artificial básica." },
    en: { title: "Khodzu Game", description: "Developed in Unity, this project is an Action Platformer game inspired by the classic Mega Man franchise. Created as a practical study of game design and programming, the game explores physics and movement mechanics (such as jumps and dashes), as well as basic artificial intelligence." },
  },
  11: {
    pt: { title: "Pac-Man AI", description: "Implementação de Inteligência Artificial no clássico Pac-Man, com o tema de cidades inteligentes. Os inimigos utilizam algoritmos de busca A* e Gulosa para perseguir o jogador em labirintos dinâmicos." },
    en: { title: "Pac-Man AI", description: "Artificial Intelligence implementation in the classic Pac-Man, with a smart cities theme. Enemies use A* and Greedy search algorithms to chase the player in dynamic mazes." },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
