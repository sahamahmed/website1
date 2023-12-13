'use client'
import {useTypewriter , Cursor} from "react-simple-typewriter"
const Banner = () => {
    const[text] = useTypewriter({
        words:[
        "Think.",
        'Build.',
        'Deploy.',
      "Turning imaginations into reality."],
        loop:true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 1800

    })
  return (
    <div className="w-full bg-slate-600 h-76 p-4 text-center 
    ">
        <h1 className="md:text-5xl text-3xl m-4 font-extrabold">SERVIO TECHNOLOGIES</h1>
        <p className="text-xl md:text-2xl text-pink-100">{text}
        <Cursor cursorBlinking cursorStyle= "|" cursorColor="#ffffff"></Cursor>
        </p>
    </div>
  )
}
export default Banner
