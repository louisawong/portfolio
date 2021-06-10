import Head from 'next/head'
import {useEffect, useState} from 'react'

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=>{
    descriptionAnimation();
  }
  ,[])

  function descriptionAnimation () {
    const contentList = [
      "A Full Stack Engineer.",
      "Coffee Lover ☕️.",
      "Welcome to my space!"
    ];

    //type one text until text is finished
    let text = document.getElementById("textAnimation")
    let cursor = document.getElementById("cursor");
    let sentenceIndex = 0;

    function typing (sentence) {
      if (sentence.length==1) {
        let letter = sentence[0];
        text.innerHTML+=(letter);
        cursor.classList.add("cursorActive")
        setTimeout(()=>deleteLetter(text.innerHTML),2000)
        return;
      }
      cursor.classList.remove("cursorActive")
      let letter = sentence[0];
      text.innerHTML+=letter;
      
      setTimeout(()=>typing(sentence.slice(1)), 100);
    }

    function deleteLetter (sentence){
      if (sentence.length==1) {
        text.innerHTML= "";
        cursor.classList.add("cursorActive")
        if (sentenceIndex===contentList.length-1) {
          sentenceIndex=0;
        }
        else {sentenceIndex++;}
        setTimeout(()=>typing(contentList[sentenceIndex]), 2000);
        return;
      }
      cursor.classList.remove("cursorActive")
      let newSentence = text.innerHTML.substring(0,text.innerHTML.length-1)
      text.innerText=newSentence;
      setTimeout(()=>deleteLetter(newSentence), 100);
    }

    typing(contentList[0])

  }

  function menuHandler () {
    const menu = document.getElementById("hamburger_menu");
    if (!isMenuOpen) {
      menu.classList.add("open");
      setIsMenuOpen(!isMenuOpen)
    } else {
      menu.classList.remove("open")
      setIsMenuOpen(!isMenuOpen)
    }
  }
  
  return (
    <div >
      <Head>
        <title>Louisa Wong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
          
          <div className="hero">
            <div className="navigation">
              <div className="navigation_icons">
                <img className="nav_icon" src="./images/GitHub-Mark-Light-120px-plus.png"/>
                <img className="nav_icon" src="./images/LI-In-Bug.png"/>
                <a href = "mailto: louisa.wy.wong@gmail.com?subject=Let's%20Connect!"><img className="nav_icon" src="./images/mail_white_48dp.svg"/></a>
              </div>
              <div className="navigation_choice">
                <div className="resume">Resume</div>
                <div id="hamburger_menu" className="hamburger_menu" onClick={menuHandler}>
                  <div className="hamburger_menu_btn"></div>
                </div>

                {/* <li>Projects</li>
                <li>About Me</li>
                <li>Technologies</li>
                <li>Contact Me</li> */}
              </div>
            </div>
            <div className="hero_text">
              <div className="hero_text_name">
                <img src="/images/leftArrow.svg" className="arrow"/>
                <h1 className="fullname"> LOUISA WONG</h1>
                <img src="/images/rightArrow.svg" className="arrow" />
              </div>
              <div className="hero_text_description">
                <h1 id="textAnimation"></h1>
                <div id="cursor" className="cursor cursorActive">|</div>
              </div>
            </div>
            
            <div className="project_body_left">
            </div>
            
            <div className="project_body_right">
            </div>
            
            <div className="project_body_left">
            </div>
            
          </div>
      
      </main>
      
    </div>
  )
}
              <div className="logo">Logo</div>
