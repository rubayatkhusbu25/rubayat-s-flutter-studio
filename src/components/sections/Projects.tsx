import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Covid-19 Tracker App",
    description: "Real-time coronavirus tracking app with global and country-wise statistics, charts, and prevention tips using REST APIs.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=400&fit=crop",
    tags: ["Flutter", "REST API", "Charts", "GetX"],
    githubUrl: "https://github.com/rubayatkhusbu25",
  },
  {
    title: "News App",
    description: "Feature-rich news application with category-wise news, search functionality, bookmarks, and offline reading capabilities.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    tags: ["Flutter", "News API", "SQLite", "Provider"],
    githubUrl: "https://github.com/rubayatkhusbu25",
  },
  {
    title: "Hadith App with Admin Panel",
    description: "Islamic app featuring Hadith collections with categorization, search, favorites, and a comprehensive admin panel for content management.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&h=400&fit=crop",
    tags: ["Flutter", "Firebase", "Admin Panel", "GetX"],
    githubUrl: "https://github.com/rubayatkhusbu25",
  },
  {
    title: "WhatsApp Clone",
    description: "Full-featured messaging app clone with real-time chat, status updates, voice messages, and group conversations.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    tags: ["Flutter", "Firebase", "Real-time", "GetX"],
    githubUrl: "https://github.com/rubayatkhusbu25",
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            className={`animate-slide-up stagger-${(index % 4) + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
