import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import * as THREE from 'three';
import anime from 'animejs';
import {motion} from 'framer-motion'
import axios from 'axios'; 
import * as cheerio from 'cheerio'; 
import fs from 'fs'
import git from './assets/github-mark.svg'
import copy from './assets/copy.svg'

function AddMain(){
  const [hint, sethint] = useState(false)
  const [copy1, setCopy] = useState("hello")

  const copied = () => {
    const timer = setTimeout(() => {
      document.getElementById("content").style.color = "white"
      clearTimeout(timer)
    }, 1000)
    document.getElementById("content").style.color = "green"
    navigator.clipboard.writeText(copy1)
  }

  const lists = (text) => {
    alert("wordlist copied, now use it in hashcat")
    navigator.clipboard.writeText(text)
  }

  useEffect(() => {
    const hash = document.getElementById("hash");
    hash.innerText = "" 
    const plain = document.getElementById("plain"); 
    const form = document.getElementById("form"); 

    const items = async () => {
      const webby = await axios.get("https://hashes-ilusunorua-uc.a.run.app")
      const data = webby["data"]

      setCopy(data["hashed"])

      document.getElementById("lists").addEventListener("click", () => {
        lists(data["wordlist"])
      })
      
      hash.innerText = data["hashed"]
      document.getElementById("hint").addEventListener("click", (e) => {
        alert(data["type"])
      })
  
      form.addEventListener("submit", async (e) => {
        e.preventDefault()
        if(plain.value == data["plaintext"]){
          plain.value = ""
          alert("success")
          items()
        }else if(plain.value != data["plaintext"]){
          plain.value = ""
          alert("wrong")
        }
      })
      return data["hashed"]
    }
    items()
  }, [])
  return(
    <div className="relative w-[fit-content] h-[90%] m-auto p-[0] flex flex-col align-middle justify-center text-center  ">
      <div className="flex flex-row align-middle justify-center text-center min-h-[10em] min-w-[100%] ">
        <div className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content] ">
          <h1 className="text-3xl text-gray-100 " >CryptQuiz - hash quiz, be patient</h1>
          <p className="text-xl mt-[2%] text-gray-300 ">Get the wordlist and use hashid and hashcat  </p>
          <p className="text-xl mt-[2%] text-gray-300">Or use tools like <a className="underline underline-offset-4 text-violet-300" href="https://10015.io/tools/md5-encrypt-decrypt">10015.io</a></p>
        </div>
      </div>
      <div className="flex flex-row align-middle justify-evenly text-center min-h-[5em] min-w-[100%] ">
        <div className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content] ">
          <h2 id="hash" className="text-2xl text-gray-300 " ></h2>
        </div>
        <div className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content]">
          <motion.span onClick={() => copied()} initial={{scale: 1}} whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} transition={{type: "spring", duration: 1}} id="content" className="material-symbols-outlined text-5xl cursor-pointer text-gray-300 z-[99] ">
              content_copy
          </motion.span>
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center text-center min-h-[15em] min-w-[100%] ">
        <form action="" method="get" id="form" className="flex flex-col align-middle justify-center text-center min-h-[100%] min-w-[fit-content] " >
          <input type="text" id="plain" required placeholder="enter the plain text value here " className="relative w-[20em] h-[3em] m-auto p-[0] text-2xl text-gray-300 text-center  " />
          <input type="submit" id="submit" value="Submit" className="relative w-[20em] cursor-pointer underline underline-offset-4 h-[3em] m-auto p-[0] text-2xl text-gray-300 text-center " />
        </form>
      </div>
      <div className="flex flex-col align-middle justify-center text-center min-h-[5em] min-w-[100%] ">
        <div className="flex flex-row align-middle justify-evenly text-center min-h-[fit-content] min-w-[100%]">
          <div className="flex flex-col align-middle justify-center text-center min-w-[fit-content] min-h-[fit-content] ">
            <motion.h1 id="hint" className="text-2xl text-gray-100 text-center underline underline-offset-4 cursor-pointer " >Hint 1</motion.h1>
          </div>
          <div className="flex flex-col align-middle justify-center text-center min-w-[fit-content] min-h-[fit-content] ">
            <p id="lists" className="text-2xl text-gray-100 text-center underline underline-offset-4 cursor-pointer " >Wordlist</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row align-middle justify-center text-center min-h-[fit-content] min-w-[100%] ">
        <a href="https://github.com/sponsors/Jamcha123?preview=true" className="text-xl mt-[5%] text-violet-500 underline-offset-4 underline ">
          Sponser me
        </a>
      </div>
    </div>
  )
}
export default function App(){
  return(
    <div className="fixed w-[100%] h-[100%] m-auto p-[0] flex flex-col align-middle justify-center ">
      <AddMain></AddMain>
    </div>
  )
}