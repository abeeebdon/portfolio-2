import { experience } from './Data'

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold">Career Journey</h2>
        <div className="w-24 h-1 bg-portfolio-mc mx-auto mt-4"></div>
        <p className="mt-6 text-lg max-w-3xl mx-auto text-portfolio-muted">
          This timeline highlights my professional growth and the key roles I've
          held. It illustrates my journey through different companies and
          projects, showing the evolution of my skills and responsibilities over
          time. This section provides context for my experience and the
          environments in which I've thrived.
        </p>
      </div>
      <article className="flex flex-col  max-w-2xl mx-auto gap-5">
        {experience.map((job, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              className="timeline-item relative mb-12 pl-8"
            >
              <h3 className="text-xl font-bold">{job.role}</h3>
              <p className="font-semibold text-portfolio-mc mb-1">
                {job.heading} | {job.date}
              </p>
              <p className="">{job.info}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Experience
