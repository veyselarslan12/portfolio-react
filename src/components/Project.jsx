import projects from '../assets/projects.json'


function Projects() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {projects.map((project, index) => (
        <div key={index} className="card bg-[#698474] w-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src={project.imageSrc}
              alt={project.projectName}
              className="rounded-xl "
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{project.projectName}</h2>
            <p>{project.description}</p>
            <div className="card-actions">
              <a href={project.githubUrl} className="btn btn-error btn-outline transition-transform transform hover:scale-105 hover:shadow-2xl" target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
              {project.depUrl && (
                <a href={project.depUrl} className="btn btn-warning btn-outline transition-transform transform hover:scale-105 hover:shadow-2xl" target="_blank" rel="noopener noreferrer">
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
