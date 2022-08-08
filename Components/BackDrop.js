import { AnimatePresence, motion } from 'framer-motion'

const BackDrop = ({ children, onClick, isOn }) => {
    return <AnimatePresence 
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
            >
        {
            isOn && <motion.section 
            className='backdrop' 
            onClick={onClick}
            >

            {children}
            
          </motion.section>
        }
    </AnimatePresence>
}

export default BackDrop