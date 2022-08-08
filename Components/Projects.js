import { faCalculator, faCross, faFootball, faFootballBall, faHouse, faImage, faMeteor, faRocket, faUmbrellaBeach, faUtensils, faVolleyballBall, faWarehouse, faWineGlass } from '@fortawesome/free-solid-svg-icons'
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
          name: "Histogramic",
          description: "Single-page app (SPA) que transforma el contraste de imagenes.",
          link: "https://histogramas.vercel.app/",
          icon: faImage
     },
     {
          name: "La Eskina del Yuka",
          description: "Web ecommerce para una distribuidora de alimentos local.",
          link: "https://k-talogo.vercel.app/catalogo/laeskinadelyuka",
          icon: faUtensils
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
     {
          name: "Licorería Caná",
          description: "Web ecommerce para un negocio de venta de licores.",
          link: "https://k-talogo.vercel.app/catalogo/licoreriacana",
          icon: faWineGlass
     },
]

const Projects = () => {
  return <div className='page-section'>
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
}

export default Projects