const About = () => {
  return (
    <div className="my-[100px] py-6 md:py-10">
      <p className="text-4xl text-center  font-bold" data-aos="fade-up">
        About <span className="text-portfolio-mc">Me</span>
      </p>
      <div className="w-24 h-1 bg-portfolio-mc mx-auto mt-4"></div>
      <p
        className="mt-6 text-lg text-portfolio-muted max-w-5xl text-center my-5 mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        This section introduces me, my passion for web development, and my
        professional philosophy. It provides a narrative that goes beyond a list
        of skills, giving you insight into how I approach my work and what
        drives me to create exceptional digital experiences.
      </p>

      <section
        id="about"
        className="py-6  px-4 mx-auto flex justify-around items-center gap-8 md:flex-row flex-col"
      >
        <div className=" w-full md:w-1/2 h-[70%] " data-aos="fade-right">
          <img
            src="/abeeb3.png"
            alt="pics"
            className="w-full bg-amber-50  max-w-[400px] h-full max-h-[400px] mx-auto rounded-full shadow-xl shadow-portfolio-mc/20"
          />
        </div>
        <div className="basis-1/2" data-aos="fade-left">
          <p className="text-base  md:text-lg leading-relaxed my-6 ">
            Hello!, I am Abeeb, a passionate, and dedicated Software Developer
            with a passion for crafting intuitive and visually appealing user
            interfaces for both web applications and mobile devices. <br />
            My journey into software development started from a deep curiosity
            for how things work on the internet, which quickly grew into a
            career where I can blend my love for design with my passion for
            technology.
            <br /> <br /> I specialize in the modern JavaScript ecosystem, with
            a strong focus on React, TypeScript, and Next.js. I'm driven by the
            challenge of creating seamless user experiences and believe that a
            great UI is one that feels invisible to the user. My philosophy is
            to write clean, scalable, and maintainable code, adhering to the
            best practices in the industry. I specialize in building efficient
            web applications and mobile applications using React.js, React
            Native and Next.js. <br /> <br /> I have volunteered and
            collaborated with diverse institutions and developers. I enjoy
            taking on new challenges and collaborating with clients to bring
            ideas to life through high quality user interface and user
            experience.
          </p>
          <div className="my-3 flex items-center gap-4 p-4 pl-0 text-lg">
            <a
              href="https://github.com/abeeebdon"
              target="_blank"
              rel="noreferrer"
              className="font-bold bg-gradient-to-br from-portfolio-mc to-portfolio-mc-strong shadow-lg shadow-portfolio-mc/30 transition hover:brightness-110 text-portfolio-on-mc px-8 py-4 text-center rounded-2xl"
            >
              GITHUB
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/13JHMJn6lYmiokmuwLlU12pZQT1rPRrdtH9HT_n7w6c8/edit?usp=drivesdk"
              rel="noreferrer"
              className="font-bold bg-gradient-to-tr from-portfolio-mc to-portfolio-mc-strong shadow-lg shadow-portfolio-mc/30 transition hover:brightness-110 text-portfolio-on-mc px-8 py-4 text-center rounded-2xl"
            >
              MY CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default About
