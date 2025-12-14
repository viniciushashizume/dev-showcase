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
    title: "E-Commerce Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Dashboard completo para gerenciamento de vendas com gráficos interativos e relatórios em tempo real.",
    techs: ["React", "TypeScript", "Tailwind", "Chart.js"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Manager API",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT e documentação Swagger.",
    techs: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    description: "Assistente virtual inteligente com processamento de linguagem natural e integração com APIs.",
    techs: ["Python", "FastAPI", "OpenAI", "React"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    description: "Aplicativo mobile para acompanhamento de treinos e metas fitness com sincronização em nuvem.",
    techs: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    description: "Painel meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
    techs: ["Vue.js", "Vuex", "OpenWeather API"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Blockchain Wallet",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    description: "Carteira digital descentralizada com suporte multi-chain e interface intuitiva.",
    techs: ["Solidity", "Web3.js", "Next.js", "Ethers"],
    link: "#",
    github: "#"
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
  { name: "Python", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "AWS", category: "Cloud" },
];
