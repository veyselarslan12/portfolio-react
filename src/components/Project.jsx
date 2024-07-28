import projects from '../assets/projects.json'


function Projects() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {projects.map((project, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={project.imageSrc}
              alt={project.projectName}
              className="rounded-xl "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{project.projectName}</h2>
            <div className="card-actions">
              <a href={project.githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              {project.depUrl && (
                <a href={project.depUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Application Page
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
