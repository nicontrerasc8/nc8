import { faBowlFood, faCalculator, faCross, faFish, faFootball, faFootballBall, faHelmetSafety, faHelmetUn, faHouse, faImage, faMeteor, faRocket, faTrowelBricks, faUmbrellaBeach, faUsersViewfinder, faUtensils, faVolleyballBall, faWarehouse, faWineGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { motion, useScroll } from "framer-motion"
import React from 'react'

const Data = [
     {
          name: "Matio",
          description: "Plataforma online para el aprendizaje de matemáticas en niños y jóvenes.",
          link: "https://matio.vercel.app/",
          icon: faRocket
     },
     {
          name: "Bungalows Perú",
          description: "Sitio web para encontrar hospedaje en distintos lugares del Perú.",
          link: "https://bungalows-pe.vercel.app/",
          icon: faHouse
     },
     {
          name: "Un ratito con Dios",
          description: "Página web dedicada a la evangelización digital.",
          link: "https://unratitocondios.vercel.app/",
          icon: faCross
     },
     {
          name: "El pez nuestro de cada día",
          description: "Página web hecha para un restaurante",
          link: "https://elpeznuestrodecadadia.vercel.app/",
          icon: faFish
     },
     {
          name: "Histogramic",
          description: "Single-page app (SPA) que transforma el contraste de imagenes.",
          link: "https://histogramas.vercel.app/",
          icon: faImage
     },
     {
          name: "Chambeando Perú",
          description: "Sitio web para encontrar trabajadores en Lima.",
          link: "https://chambeando.pe/",
          icon: faUsersViewfinder
     },
     {
          name: "Bino-poiss",
          description: "Calculadora digital para la probabilidad discreta.",
          link: "https://bino-poiss.vercel.app/",
          icon: faCalculator
     },
     {
          name: "Bungalows PH",
          description: "Sitio web para encontrar hospedaje en Playa Blanca, Punta Hermosa.",
          link: "https://bungalows-ph.netlify.app/",
          icon: faUmbrellaBeach
     },
     {
          name: "Team WP",
          description: "Sitio oficial del equipo de waterpolo del Club Regatas Lima.",
          link: "https://team-waterpolo.netlify.app/",
          icon: faVolleyballBall
     },
]

const Projects = () => {
  return <>
  <div className="custom-shape-divider-top-1659718043">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
     <div className='page-section'>
     <h2>
          Mis proyectos:
     </h2>
     <section className='grid'>
          {
               Data.length && Data.map((data, idx) => {
                    return <motion.article 
                         initial={{ opacity: 0, right: "100px" }}
                         whileInView={{ opacity: 1, right: "0px" }} key={idx}
                         className={idx % 3 === 0 ? "yellow" :
                         (idx-1) % 3 === 0 ? "light-blue" :
                         "pink"      
                    }
                         >
                         <FontAwesomeIcon icon={data.icon}/>
                         <h5 className='colored-text'>{data.name}</h5>
                         <p>{data.description}</p>
                         <a href={data.link} target="_blank" rel="noreferrer">
                              <button className='button color'>
                                   Visitar
                              </button>
                         </a>
                    </motion.article>
               })
          }
     </section>
  </div>
  </>
}

export default Projects