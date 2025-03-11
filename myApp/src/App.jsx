import { useState, useEffect, useRef } from 'react'
import './App.css'
import * as THREE from 'three';
import anime from 'animejs';
import {motion} from 'framer-motion'


export default function App(){
  const [hint, sethint] = useState(false)
  useEffect(() => {
    const hash = document.getElementById("hash"); 
    const plain = document.getElementById("plain"); 
    const form = document.getElementById("form"); 
    const type = document.getElementById("type"); 

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if(plain.value != ""){
        
      }
    })
  })
  return(
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40em] h-[40em] m-auto p-[0] flex flex-col align-middle justify-center text-center  ">
      <div className="flex flex-row align-middle justify-center text-center min-h-[10em] min-w-[100%] ">
        <div className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content] ">
          <h1 className="text-3xl text-gray-100 " >CryptQuiz - hash cracker quiz</h1>
          <p className="text-xl mt-[2%] text-gray-300 ">Download the wordlist and use hashcat  </p>
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center text-center min-h-[5em] min-w-[100%] ">
        <div className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content] ">
          <h1 id="hash" className="text-2xl text-gray-300 " ></h1>
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center text-center min-h-[15em] min-w-[100%] ">
        <form action="" method="get" id="form" className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content] " >
          <input type="text" id="plain" placeholder="enter the plain text value here " className="relative w-[20em] h-[3em] m-auto p-[0] text-2xl text-gray-300 text-center  " />
          <input type="submit" id="submit" value="Submit" className="relative w-[20em] cursor-pointer underline underline-offset-4 h-[3em] m-auto p-[0] text-2xl text-gray-300 text-center " />
        </form>
      </div>
      <div className="flex flex-col align-middle justify-center text-center min-h-[5em] min-w-[100%] ">
        <div className="flex flex-row align-middle justify-evenly text-center min-h-[fit-content] min-w-[100%]">
          <div className="flex flex-col align-middle justify-center text-center min-w-[fit-content] min-h-[fit-content] ">
            <h1 onClick={hint? () => sethint(false) : () => sethint(true)} className="text-2xl text-gray-100 text-center underline underline-offset-4 cursor-pointer " >Hint 1</h1>
            <motion.ul initial={{scaleY: 0, opacity: 0}} animate={{scaleY: hint? 1 : 0, opacity: hint? 1 : 0 }} transition={{type: "spring", duration: 1}} className="flex flex-col align-middle justify-center text-center min-w-[fit-content] min-h-[5em]  ">
              <p className="text-2xl text-gray-100 " id="type"></p>
            </motion.ul>
          </div>
          <div className="flex flex-col align-middle justify-center text-center min-w-[fit-content] min-h-[fit-content] ">
            <a href="" download className="text-2xl text-gray-100 text-center underline underline-offset-4 cursor-pointer " >Wordlist</a>
            <motion.ul initial={{scaleY: 0, opacity: 0}} animate={{scaleY: hint? 0 : 0, opacity: hint? 0 : 0 }} transition={{type: "spring", duration: 1}} className="flex flex-col align-middle justify-center text-center min-w-[fit-content] min-h-[5em]  ">
              <p className="text-2xl text-gray-100 ">Hello</p>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  )
}