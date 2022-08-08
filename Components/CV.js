import { motion, useScroll } from "framer-motion"

const CV = () => {
  return <div className='page-section'>
     <h2>
          Información personal:
     </h2>
     <section className='grid'>
          <motion.article
            initial={{ opacity: 0, right: "100px" }}
            whileInView={{ opacity: 1, right: "0px" }} key={idx}
          >
                    <h5 className='colored-text'>Curriculum vitae</h5>
                         <a href={data.link} target="_blank" rel="noreferrer">
                              <button className='button color'>
                                   Descargar CV
                              </button>
                         </a>
          </motion.article>
     </section>
  </div>
}

export default CV
