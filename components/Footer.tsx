import SocialLink from "./Socials"

const Footer = () => {
  return (
    <div className="bg-gray-700 h-fit text-slate-200 w-full text-xl font-bold p-3 flex flex-col gap-3">
      <div className="flex flex-row md:gap-6 gap-4 justify-center mb-2">
      <SocialLink title="Github" link="https://github.com/sahamahmed" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/saham-ahmed-5a5b0428b/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com"
        />
      </div>


      <h1 className="text-center text-sm sm:text-md text-teal-500 sm:text-white mb-2">© 2023 
      <a href="https://portfolio-sahamahmeds-projects.vercel.app/" target="_blank" className="text-orange-700 lg:text-2xl text-sm sm:text-lg">  Saham </a>
       & 
       <a href="https://portfolio-s1fi-git-main-mians-projects-644ee690.vercel.app/" target="_blank" className="text-orange-700 lg:text-2xl text-sm sm:text-lg">  Mubashir  </a> 
       All rights reserved.</h1>
    </div>
  )
}
export default Footer