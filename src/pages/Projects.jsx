import React, { useState } from 'react';

/**
 * Projects Page Component
 * Renders student portfolio projects with reactive category filtering.
 */
function Projects() {
  const [filter, setFilter] = useState('All');

  const projectData = [
    {
      id: 1,
      title: 'Task Manager REST API',
      category: 'Backend',
      description: 'A modular Express.js backend API featuring request logging, global error handling middleware, and in-memory CRUD operations.',
      techStack: ['Node.js', 'Express.js', 'REST API', 'JavaScript'],
      githubUrl: 'https://github.com/24CS012Deep/Prc4_AWDF'
    },
    {
      id: 2,
      title: 'MongoDB Task Persistence Engine',
      category: 'Backend',
      description: 'Mongoose ODM integration with strict schema validation, default timestamps, and MongoDB Atlas database connection.',
      techStack: ['MongoDB', 'Mongoose', 'Express.js', 'Node.js'],
      githubUrl: 'https://github.com/24CS012Deep/Prc5_AWDF'
    },
    {
      id: 3,
      title: 'Full Stack Task Dashboard',
      category: 'Fullstack',
      description: 'End-to-end web application with React frontend and Express/MongoDB backend featuring Optimistic UI and toast notifications.',
      techStack: ['React', 'Express', 'MongoDB', 'Vite'],
      githubUrl: 'https://github.com/24CS012Deep/Prc6_AWDF'
    },
    {
      id: 4,
      title: 'React Student Portfolio Platform',
      category: 'Frontend',
      description: 'A modular Vite-powered React single page application with reusable functional components and custom props data flow.',
      techStack: ['React', 'Vite', 'React Router', 'CSS3'],
      githubUrl: 'https://github.com/24CS012Deep/Prc1_AWDF'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <div className="page-header-wrap">
        <h1 className="page-title">Portfolio Projects</h1>
        <p className="page-desc">
          Showcase of full-stack, backend REST, and React frontend projects.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
        {['All', 'Backend', 'Fullstack', 'Frontend'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border-color)',
              background: filter === cat ? 'linear-gradient(135deg, #3b82f6, #6366f1)' : 'var(--bg-card)',
              color: filter === cat ? '#fff' : 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="p2-projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p2-project-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{project.title}</h3>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(59, 130, 246, 0.3)'
                }}>
                  {project.category}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '5px',
                      background: 'rgba(125, 125, 125, 0.1)',
                      color: 'var(--text-main)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent-blue)',
                fontWeight: 600,
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
