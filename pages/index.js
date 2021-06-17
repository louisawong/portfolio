import Head from 'next/head'
import {useEffect, useState} from 'react'

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(()=>{
    descriptionAnimation();
    scroll();
  }
  ,[])


  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  function scroll () {
    let plantiful = document.getElementById("plantiful");
    let plantiful_mock = document.getElementById("plantiful_mock")
    let fitome = document.getElementById("fitome");
    const fitomeTop = getOffset(fitome).top;
    
    console.log("TOP: ", fitomeTop)
    
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      plantiful.style.right=value*0.25+'px';
      // plantiful_mock.style.bottom=value*0.25+'px';
       while (value > fitomeTop) {
         fitome.style.left = value*0.25+'px';
       }

    })
  }

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
    const main = document.getElementById("main")
    const menu = document.getElementById("hamburger_menu");
    const choices = document.getElementById("hamburger_choices");
    const social = document.getElementById("navigation_icons");
    if (!isMenuOpen) {
      main.classList.add("open")
      menu.classList.add("open");
      choices.classList.add("open");
      social.classList.add("open")
      setIsMenuOpen(!isMenuOpen);
    } else {
      main.classList.remove("open")
      menu.classList.remove("open");
      choices.classList.remove("open");
      social.classList.remove("open")
      setIsMenuOpen(!isMenuOpen)
    }
  }
  
  return (
    <div >
      <Head>
        <title>Louisa Wong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className="main">
          
          <div className="hero">
            <div className="navigation">
              <div id ="navigation_icons" className="navigation_icons">
                <a href="https://github.com/louisawong" target="_blank"><img className="nav_icon" src="./images/GitHub-Mark-Light-120px-plus.png"/></a>
                <a href="https://www.linkedin.com/in/louisa-wy-wong/" target="_blank"><img className="nav_icon" src="./images/LI-In-Bug.png"/></a>
                <a href = "mailto: louisa.wy.wong@gmail.com?subject=Let's%20Connect!"><img className="nav_icon" src="./images/mail_white_48dp.svg"/></a>
              </div>
              <div className="navigation_choice">
                <a href="./files/Louisa_Wong_Resume_June_2021.pdf" download><button type="button" className="resume button" >Resume</button></a>
                <div id="hamburger_menu" className="hamburger_menu" onClick={menuHandler}>
                  <div className="hamburger_menu_btn"></div>
                </div>
                <div id="hamburger_choices" className="hamburger_choices">
                  <a className="hamburger_choices_option" onClick={menuHandler} href="#projects">Projects</a>
                  <a className="hamburger_choices_option" onClick={menuHandler} href="#about">About Me</a>
                  <a className="hamburger_choices_option" onClick={menuHandler} href="#tech">Technologies</a>
                  <a className="hamburger_choices_option" onClick={menuHandler} href="#contact">Contact Me</a>
                  <div className="hamburger_choices_social">
                    <a href="https://github.com/louisawong" target="_blank"><img className="nav_icon" src="./images/GitHub-Mark-Light-120px-plus.png"/></a>
                    <a href="https://www.linkedin.com/in/louisa-wy-wong/" target="_blank"><img className="nav_icon" src="./images/LI-In-Bug.png"/></a>
                    <a href = "mailto: louisa.wy.wong@gmail.com?subject=Let's%20Connect!"><img className="nav_icon" src="./images/mail_white_48dp.svg"/></a>
                  </div>
                </div>

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
            
            <h1 className="section_title">SELECT PROJECTS</h1>
            <div id="projects" className="projects">
              <div className="mock1" id="plantiful">
                <div className="project_body_left"></div>
                <div className="project_left_content">
                  <h1 className="project_left_name">Plantiful - Web Application</h1>
                  <p className="project_left_description">An applicationhjcbcsjnsknjcnjkjnknjsnkkjn</p>
                  <button type="button" className="details button">More Details >></button>
                </div>
                <img className="mock_plantiful" id="plantiful_mock" src="./images/mock_plantiful.png" />
              </div>
              <div className="mock1" id="fitome">
                <div className="project_body_right"></div>
                <div className="project_right_content">
                  <h1 className="project_left_name">Fitome - Progressive Web Application</h1>
                  <p className="project_left_description">An applicationhjcbcsjnsknjcnjkjnknjsnkkjn</p>
                  <button type="button" className="details button">More Details >></button>
                </div>
                <img className="mock_fitome" src="./images/mock_mobile_fitome.png" />
              </div>
              
              <div className="mock1">
                <div className="project_body_left"></div>
                <div className="project_left_content">
                  <h1 className="project_left_name">CardShare- Web Application</h1>
                  <p className="project_left_description">An applicationhjcbcsjnsknjcnjkjnknjsnkkjn</p>
                  <button type="button" className="details button"> More Details >> </button>
                </div>
                <img className="mock_cardshare" src="./images/mock_cardshare.png" />
              </div>
            </div>
            
            <h1 className="section_title">ABOUT ME</h1>
            <div id="about" className="about">
              <div className="profile_wrapper"> 
                <div className="profile_decor"></div>
                <img className="profile" src="./images/headshot_bw.png"/>
              </div>
              <div className="about_body_right">
                  <p className="project_left_description">An applicationhjcbcsjnsknjcnjkjnknjsnkkjn</p>
              </div>
            </div>

            <div id="tech">
              <h1 className="section_title">TECHNOLOGIES</h1>
              <div className="project_body_left">
              </div>
            </div>

          </div>
      
      </main>
      
    </div>
  )
}
              <div className="logo">Logo</div>
