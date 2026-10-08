import { skills } from './Data'

const Skills = () => {
  return (
    <div className="">
      <section id="skills" className=" mx-auto md:h-screen p-4 pt-8  pb-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold">My Tech Stack</h2>
          <div className="w-24 h-1 bg-portfolio-mc mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-portfolio-muted max-w-3xl mx-auto">
            Here is a collection of the key technologies and tools I work with.
            This isn't just a list; it represents the toolkit I use to build
            robust, scalable, and visually appealing applications. By hovering
            over each skill, you can get a feel for the technologies I am most
            proficient in.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center max-[450px]:grid max-[450px]:grid-cols-2">
          {skills.map(({ name, image }, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={(index % 4) * 100}
                className="skill-card flex flex-col items-center p-6 rounded-lg bg-portfolio-surface border border-portfolio-border shadow-md transition-transform hover:-translate-y-2 hover:border-portfolio-mc/60"
              >
                <img
                  src={image}
                  alt={name}
                  className="block w-[80px] h-[80px] rounded-full mx-auto mb-2"
                />
                <h3 className="font-semibold text-portfolio-text">{name}</h3>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
export default Skills
