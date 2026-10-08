import { project } from './Data'

const Projects = () => {
  return (
    <div>
      <section id="projects" className="max-w-7xl px-4 py-6 md:py-10 mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold">Featured Projects</h2>

          <div className="w-24 h-1 bg-portfolio-mc mx-auto mt-4"></div>

          <p className="mt-6 text-lg text-portfolio-muted max-w-3xl mx-auto">
            This is where I showcase my work. Each project is more than just
            code; it's a case study in problem-solving. Click on any project to
            see a detailed breakdown of its purpose, the development process,
            and the technologies used. This section provides tangible proof of
            my skills in action.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10  md:grid-cols-2 md:mt-8 md:pb-32 sm:grid-cols-2">
          {project.map(
            ({ name, image, tags, link, details, github }, index) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                  className="project-card rounded-lg overflow-hidden bg-portfolio-surface border border-portfolio-border shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:border-portfolio-mc/60 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-[200px] object-cover transition duration-500 ease-in-out group-hover:scale-110"
                  />

                  <div className="p-6 min-h-[180px]">
                    <h3 className="text-xl font-bold mb-2">{name}</h3>
                    <p className="text-portfolio-muted mb-4">{details}</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="tags bg-portfolio-mc/15 text-portfolio-mc text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4 mt-8">
                      <a
                        id="modal-live-link"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        className="bg-portfolio-mc text-portfolio-on-mc font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105"
                      >
                        Live Demo
                      </a>
                      <a
                        id="modal-repo-link"
                        href={github}
                        rel="noreferrer"
                        target="_blank"
                        className="bg-portfolio-surface border border-portfolio-border text-portfolio-text font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105 hover:border-portfolio-mc hover:text-portfolio-mc"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>
      </section>
    </div>
  )
}
export default Projects
