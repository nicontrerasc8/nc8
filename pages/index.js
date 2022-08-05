import Image from "next/image"
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter"
import MetaTags from "../Components/MetaTags"
import Projects from "../Components/Projects"
import Studies from "../Components/Studies"

const Home = () => {

  const {text} = useTypewriter({
    words: [' hago páginas web chéveres.', ' soy programador frontend.', ' estudio ingeniería de sistemas.', ' me gusta la informática.'],
    loop: Infinity,
    delaySpeed: 3000
  })

  return <>
    <div className="home">
      <section>
        <h2>
          ¡Hola! Soy Nicolás Contreras <br/> 
          y <span className="colored-text">{text}</span>
      <Cursor />
        </h2>
      </section>
      <img className="main-img" src={"https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(9).png?alt=media&token=d71d1009-3019-46f2-8038-3093853fe802"}/>
    </div>
    <div className="custom-shape-divider-top-1659718043">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    <Projects/>
    <div className="custom-shape-divider-top-1659718043 up">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
<Studies/>
  </>
}

export default Home
