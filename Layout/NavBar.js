import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return <>
     <nav>
     <Link href={"/"}>
     <h2>NC</h2>
     </Link>
          <div>
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
               <Link href={"/"}>
                    <button className='button nav-button pink'>
                         Curriculum
                    </button>
               </Link>
          </div>
     </nav>
  </>
}

export default NavBar