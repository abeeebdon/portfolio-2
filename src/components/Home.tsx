const Home = () => {
  return (
    <section
      id="home"
      className=" relative z-10 md:h-screen mx-auto flex flex-col md:flex-row justify-between items-center gap-10  "
    >
      <div className="basis-1/2 text-xl  space-y-4" data-aos="fade-right">
        <p className="">Hi 👋</p>
        <p className="">
          My name is{' '}
          <span className="text-portfolio-mc text-2xl font-bold">
            Abeeb Maroof
          </span>
        </p>
        <p className="text-portfolio-mc font-medium">
          A Front-End Focused Full-Stack Engineer
        </p>
        <p>
          Are you looking for a developer who can transform your vision into
          reality? I specialize in creating stunning, dynamic and highly
          responsive websites that not only look beautiful but also drive
          results.
        </p>
        <p>
          With expertise in modern web technologies, I create fast-loading,
          SEO-optimized sites that provide exceptional user experiences. From
          pixel-perfect designs to smooth interactions, I'll help take your
          online presence to the next level. Let's work together to build a
          website that converts visitors into customers and sets your business
          apart.
        </p>
        <p>
          If you need a perfect hand on your software solutions, Kindly contact
          me by clicking the button below.
        </p>
        <div className="sm:flex-row pt-10  flex flex-col gap-6 justify-center md:justify-start items-center sm:space-x-4">
          <a
            href="#projects"
            className="bg-portfolio-mc text-portfolio-on-mc text-center w-full max-w-[280px] font-bold py-3 h-fit px-6 rounded-lg transition-transform hover:scale-105"
          >
            View My Work
          </a>

          <button
            onClick={() => (window.location.href = 'mailto:abeebdon@gmail.com')}
            className="md:text-xl bg-linear-to-br text-center w-full max-w-[280px] block from-portfolio-mc to-portfolio-mc-strong font-bold shadow-lg shadow-portfolio-mc/30 hover:brightness-110 hover:shadow-xl transition-all duration-300 text-portfolio-on-mc px-10 py-3 rounded-lg"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div
        className="h-[70%]  max-[760px]:hidden basis-1/2 flex justify-center"
        data-aos="fade-left"
      >
        <img src="./favicon.ico" alt="my_pics" className="h-full" />
      </div>
    </section>
  )
}
export default Home
