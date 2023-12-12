import Form from "./Form"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";


const Contactdetail = () => {
  return (
    <div className=" min-h-20 max-h-fit w-full lg:justify-around p-24 bg-slate-600 flex flex-col justify-center items-center gap-y-4 lg:flex-row lg:gap-x-4 lg:items-start">
      <div>
      <Form></Form>
      </div>

 <div className="lg:mt-12 mt-8">
      <div className="flex justify-center items-center w-full mb-8">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
          Want to get connected ?
        </h1>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 padding-3 mt-4 grid grid-cols-3 gap-3 mx-4">
        {/* WhatsApp */}
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            <FaWhatsapp className="text-orange-400 w-12 h-10 mx-3  hover:text-orange-500 cursor-pointer" />
            <span className="lg:inline hidden text-orange-400">0335-2079346</span>
          </div>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            <FaInstagram className="text-orange-400 w-12 h-10 mx-3  hover:text-orange-500 cursor-pointer" />
            <span className="lg:inline hidden text-orange-400">Instagram</span>
          </div>
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            <FaFacebookSquare className="text-orange-400 w-12 h-10 mx-3  hover:text-orange-500 cursor-pointer" />
            <span className="lg:inline hidden text-orange-400">Facebook</span>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            <FaGithub className="text-orange-400 w-12 h-10 mx-3  hover:text-orange-500 cursor-pointer" />
            <span className="lg:inline hidden text-orange-400">GitHub</span>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:ahmedsaham200@gmail.com">
          <div className="flex items-center">
            <MdOutlineEmail className="text-orange-400 w-12 h-10 mx-3  hover:text-orange-500 cursor-pointer" />
            <span className="lg:inline hidden text-orange-400">Email</span>
          </div>
        </a>

        {/* LinkedIn */}
        <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center">
            <AiOutlineLinkedin className="text-orange-400 w-12 h-10 mx-3  hover:text-orange-500 cursor-pointer" />
            <span className="lg:inline hidden text-orange-400">LinkedIn</span>
          </div>
        </a>
      </div>
    </div>

    </div>
  )
}
export default Contactdetail