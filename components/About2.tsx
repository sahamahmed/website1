import Image from "next/image";
import pic from  "../public/assets/tech.jpg";

const para1 = `Welcome to Servio, where innovation meets excellence in software solutions. Established in 1997, Servio is a dynamic and forward-thinking software company dedicated to crafting cutting-edge solutions that empower businesses to thrive in the digital age`
const para2 = `Our team of passionate experts combines technical prowess with creative flair to deliver tailor-made software that transforms ideas into reality.`
const para3 = `At Servio, we believe in the power of collaboration. Our client-centric approach ensures that we not only meet but exceed the expectations of our valued partners.`
const para4 = `With a commitment to quality, transparency, and timely delivery, Servio stands as a reliable partner in your journey towards digital success.`

const Slider = () => {
    return (
      <div className="w-full bg-slate-600 md:h-fit h-max p-4 text-center border-b-2 border-b-gray-300 flex flex-col gap-y-3 md:flex-row gap-x-4 ">
        <div className="md:w-[65%] h-[65%] ">
        <div className="md:col-span-7 flex justify-items-start flex-col sm:row-span-4">
         <h1 className="font-extrabold text-2xl lg:text-3xl  flex justify-start mb-3 drop-shadow-xl">
             <span className="border-b-orange-600 border-b-2 text-white z-0 ">ABOUT ME</span> </h1>
             <div className="text-justify mt-8 text-gray-300 text-lg font-semibold">
             <p className="pb-2">{para1}</p>
             <p className="pb-2">{para2}</p>
             <p className="pb-2">{para3}</p>
             <p>{para4}</p>
             </div>
      </div>


        </div>

      <div className="md:w-[35%] flex justify-center items-center md:mt-20 h-[35%]" >        
        <Image src={pic} alt="pic" className=" mt-3 rounded-md md:rounded-lg w-80 h-80 object-cover shadow-lg shadow-black mb-5"></Image>
      </div>
      
  </div>
    )
  }
  export default Slider