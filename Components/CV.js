import { faIdCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useScroll } from "framer-motion"

const CV = () => {
  return <>
   <div className="custom-shape-divider-top-1659718043">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
     <div className='page-section'>
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
  </>
}

export default CV
