import { faAtom, faCertificate, faCode, faComputer, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from "framer-motion"
import React from 'react'

const Data = [
     {
          img: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/html-5.png?alt=media&token=82544b50-5903-43c8-a445-15c200c8c361",
          text: "HTML 5"
     },
     {
          img: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/css-3%20(1).png?alt=media&token=9c21714d-cf35-4dc8-a693-9ac5c0a0410b",
          text: "CSS 3"
     },
     {
          img: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/archivo-js.png?alt=media&token=df1a465a-b912-453b-b33c-b069101ca2951",
          text: "JavaScript"
     },
     {
          img: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/physics.png?alt=media&token=73064ae3-5764-4a37-b220-5801c263d2ae",
          text: "ReactJS"
     },
     {
          img: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/database-storage.png?alt=media&token=fcbc3edf-72b1-4619-b741-02d1a8bfe692",
          text: "Firebase"
     },
     {
          img: "https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/lenguaje-de-programacion-C.png?alt=media&token=e14779c4-7770-4ec5-94e4-6821b3118dd6",
          text: "C++"
     }
]

const Studies = () => {
  return <div className='page-section black-bg'>
     <h2>Certificaciones:</h2>
     <section className='grid'>
          <motion.article
               initial={{ opacity: 0, transform: "rotate(180deg)" }}
               whileInView={{ opacity: 1, transform: "rotate(0)" }}
               exit={{ opacity: 1, transform: "rotate(0)" }}
          >
               <FontAwesomeIcon icon={faComputer}/>
               <h5 className='colored-text'>ReactJS</h5>
               <p>Curso de 8 semanas en la academia on-line Coderhouse sobre ReactJS, la principal librería de JavaScript a nivel mundial.</p>
               <a href="https://www.coderhouse.com.pe/certificados/5ffeff17ba60b70090a07fd0" target="_blank" rel="noreferrer">
                              <button className='button color'>
                                   Ver certificado
                              </button>
                         </a>
          </motion.article>
     </section>
     <h2 style={{marginTop: "3rem"}}>Habilidades:</h2>
     <section className='grid'>
          {
               Data.length && Data.map((data,idx) => {
                    return <motion.article 
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}

                         key={idx}>
                         <img src={data.img}/>
                         <h5 className='colored-text'>{data.text}</h5>
                    </motion.article>
               })
          }
     </section>
  </div>
}

export default Studies