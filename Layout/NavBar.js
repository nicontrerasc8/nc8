import {motion} from "framer-motion"
import Link from 'next/link'
import React, { useState } from 'react'
import BackDrop from "../Components/BackDrop"

const NavBar = () => {

     const [OpenNav, setOpenNav] = useState(false)
     const ChangeNavigationValue = () => setOpenNav(!OpenNav)

  return <>
     <nav>
     <Link href={"/"}>
     <h2>NC</h2>
     </Link>
          <div className="nav-btns">
               <Link href={"/proyectos"}>
                    <button className='button nav-button yellow'>
                         Proyectos
                    </button>
               </Link>
               <Link href={"/estudios"}>
                    <button className='button nav-button light-blue'>
                         Estudios
                    </button>
               </Link>
               <Link href={"/curriculum"}>
                    <button className='button nav-button pink'>
                         Curriculum
                    </button>
               </Link>
          </div>
          <div onClick={ChangeNavigationValue} className={OpenNav ? 'hamburger open-nav' : 'hamburger'}>
          <span className='hamburger-1'/>
          <span className='hamburger-2'/>
          <span className='hamburger-3'/>
     </div>
     </nav>
     <BackDrop onClick={ChangeNavigationValue} isOn={OpenNav}>
          <motion.aside className="btn-toggle-nav">
               <Link href={"/proyectos"}>
                    <button className='button nav-button yellow'>
                         Proyectos
                    </button>
               </Link>
               <Link href={"/estudios"}>
                    <button className='button nav-button light-blue'>
                         Estudios
                    </button>
               </Link>
               <Link href={"/curriculum"}>
                    <button className='button nav-button pink'>
                         Curriculum
                    </button>
               </Link>
          </motion.aside>
     </BackDrop>
  </>
}

export default NavBar
