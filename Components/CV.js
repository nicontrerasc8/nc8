import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useScroll } from "framer-motion"

const CV = () => {
  return <div className='page-section'>
     <h2>
          Información personal:
     </h2>
     <section className='grid'>
          <motion.article
            initial={{ opacity: 0, right: "100px" }}
            whileInView={{ opacity: 1, right: "0px" }}
          >
               <FontAwesomeIcon icon={faIdCard}/>
                    <h5 className='colored-text'>Curriculum vitae</h5>
                         <a href={"https://firebasestorage.googleapis.com/v0/b/prochristo-b4aea.appspot.com/o/CV.pdf?alt=media&token=9143eb0a-79a1-4110-b3a7-75e79cbacaf7"} target="_blank" rel="noreferrer">
                              <button className='button color'>
                                   Descargar CV
                              </button>
                         </a>
          </motion.article>
     </section>
  </div>
}

export default CV
