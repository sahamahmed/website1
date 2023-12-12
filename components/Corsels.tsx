import logo1 from "../public/assets/c1.png";
import logo2 from "../public/assets/c2.png";
import logo3 from "../public/assets/c3light.jpg";
import logo4 from "../public/assets/c4light.jpg";

import Image from "next/image";
const cards = [
  {title: `Master the art of coding with Servio's Beginner-Friendly Programming course.
  Unlock the secrets of efficient software development with Servio's Advanced Coding Bootcamp.`
  ,
  picture:logo1,
  },

  {title: `Our team of experts at Servio is dedicated to turning your ideas into reality with cutting-edge software development solutions`
  ,
  picture:logo2,
  }, 

  {title: `At Servio, client satisfaction is our priority. Join us on a journey of collaboration, transparency, and digital success`
  ,
  picture:logo3,
  },
  {title: `Shape your future in tech management with Servio's Project Management for Software Teams.
Discover the power of automation with Servio's RPA Workshop.`
  ,
  picture:logo4,
  },
]

const Corsels = () => {
    return (
      <div className="flex justify-center h-fit   bg-slate-600 border-b-gray-300">
      <div className="w-full h-fit  border-b-2   grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-y-10 lg:gap-x-12 md:gap-x-9 place-items-center mt-5">  
       
       {cards.map((item , idx )=>{return(
    <div key={idx} className="rounded-lg shadow-md shadow-slate-200 my-5 w-56 h-fit bg-white border-b-6 md:w-[260]">
    <Image src={item.picture} alt="image" className="w-32 flex justify-center items-center mx-auto"/>
    <p className="text-gray-800 bg-orange-500 mt-3 mx-0 h-60 w-fit object-cover border-2 border-orange-700 py-3 px-5 rounded-lg text-justify font-bold ">{item.title}</p>
  </div>
)})}
  </div>
      </div>
      
    )
  }
  export default Corsels




