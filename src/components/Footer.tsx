import { socials } from './Data'

const Footer = () => {
  const time = new Date()
  const year = time.getFullYear()
  return (
    <footer
      id="footer"
      className="w-full py-4 bg-slate-900 text-slate-100 dark:bg-black border-t border-portfolio-border"
    >
      <div className="  mx-auto flex md:flex-row flex-col gap-4 flex-wrap justify-between md:items-center px-4 lg:px-[3%] ">
        <p className="text-xl md:text-left">
          Copyright &copy; {year} by{' '}
          <span className="text-portfolio-mc"> Abeebdon</span>
        </p>
        <div className="h-fit flex flex-wrap gap-6 ">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center size-10 p-2 bg-transparent border-2 border-portfolio-mc rounded-full text-3xl text-portfolio-mc transition duration-300 ease-in-out hover:bg-portfolio-mc hover:text-portfolio-on-mc hover:shadow-lg hover:shadow-portfolio-mc/40 max-[450px]:w-8 max-[450px]:h-8"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
