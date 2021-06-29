import Head from 'next/head'
import {useEffect, useState} from 'react'

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDetailPlantifulOpen, setIsDetailPlantifulOpen] = useState(false);
  const [isDetailFitomeOpen, setIsDetailFitomeOpen] = useState(false);
  const [isDetailCardshareOpen, setIsDetailCardshareOpen] = useState(false);

  useEffect(()=>{
    descriptionAnimation();
    //scroll();
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
      fitome.style.left = value*0.25+'px';

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

  function detailHandler (ele) {
    const plantiful = document.getElementById("detail_plantiful")
    const fitome = document.getElementById("detail_fitome");
    const cardshare = document.getElementById("detail_cardshare");
    if(ele === "plantiful" && isDetailPlantifulOpen) {
      plantiful.classList.remove("detail_open");
      setIsDetailPlantifulOpen(!isDetailPlantifulOpen);
    }
    else if(ele === "plantiful" && !isDetailPlantifulOpen) {
      plantiful.classList.add("detail_open");
      setIsDetailPlantifulOpen(!isDetailPlantifulOpen);
    }
    else if (ele === "fitome" && isDetailFitomeOpen) {
      fitome.classList.remove("detail_open");
      setIsDetailFitomeOpen(!isDetailFitomeOpen);
    }
    else if(ele === "fitome" && !isDetailFitomeOpen) {
      fitome.classList.add("detail_open");
      setIsDetailFitomeOpen(!isDetailFitomeOpen);
    }
    else if (ele === "cardshare" && isDetailCardshareOpen) {
      cardshare.classList.remove("detail_open");
      setIsDetailCardshareOpen(!isDetailCardshareOpen);
    }
    else if(ele === "cardshare" && !isDetailCardshareOpen) {
      cardshare.classList.add("detail_open");
      setIsDetailCardshareOpen(!isDetailCardshareOpen);
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
            
            <h1 className="section_title" id="projects">SELECT PROJECTS</h1>
            <h3 className="section_subtitle yellow">Details on Github</h3>
            <div className="project_left_wrapper">
              <div className="project_left">
                <h1 className="project_left_title">Plantiful - Web Application</h1>
                <p className="project_left_info">A responsive web application designed for the plant-loving community. Users are able to connect with nearby users to sell or trade their plant collection or to share their plant inspirations globally.</p>
                <p className="project_left_tech"><span className="yellow">[</span>React, Next.JS, Next.JS API, Redux, SASS, MongoDB, Mongoose, Firebase<span className="yellow">]</span></p>
                <div className="project_left_arrow bounce" onClick={()=>detailHandler("plantiful")}>>></div>
              </div>
              <img className="project_left_mock" src="./images/mock_plantiful.png" />
            </div>
            <div className="project_left_detail" id="detail_plantiful">
            <div className="project_detail_exit" onClick={()=>detailHandler("plantiful")}>X</div>
              <h3 className="project_left_detail_title">User Stories:</h3>
              <ul className="project_detail_list">
                <li>Users are able to create their own portfolio with a location tag</li>
                <li>Users are able to discover inspiration posts from around the world based on most recent postings</li>
                <li>Users are able to discover trades around them based on their current location</li>
                <li>Users are able to contact other users via email for trades that interests them</li>
                <li>Users are able to post plants for sell or for trade with geospatial tag and offer details</li>
                <li>Users are able to post photos of plant inspiration with geospatial tag and description</li>
                <li>Users are able to search for plants through all posts</li>
                <li>Users are able to delete any posts they own</li>
                <li>Users are able to view other users’ profile with their posts separated by trade or inspiration</li>
              </ul>
              <h3 className="project_left_detail_title">Contributions:</h3>
              <p className="project_detail_subtitle">Built the app from ideation to deployment in less than a week.</p>
              <ul className="project_detail_list">
                <li>Mapped out data flow and wireframed the design and display information</li>
                <li>Built the API endpoints and database for user and posts information</li>
                <li>Used MongoDB and geospatial coordinates to filter posts for nearby trades</li>
                <li>Built react components to be reused throughout the whole website</li>
                <li>Built and tested input forms for error-handling and validation</li>
              </ul>
            </div>
            
             <div className="project_right_wrapper gap">
              <img className="project_left_mock" src="./images/mock_fitome.png" />
              <div className="project_right">
                <h1 className="project_left_title">Fitome – Progressive Web Application</h1>
                <p className="project_left_info">A  management tool for personal trainers to connect with their clients during the pandemic and even afterwards. A tool for personal trainers to assign workout regimens and to schedule video calls for workouts and checkups with their clients directly on the app. Clients are able to view workouts and join their scheduled video calls on the client-side application.</p>
                <p className="project_left_tech"><span className="yellow">[</span>Peer2Peer, Socket.io, Google WorkBox, Express, PostgreSQL, Sequelize, Redux, React, Next.JS, Firebase<span className="yellow">]</span></p>
                <div className="project_left_arrow bounce" onClick={()=>detailHandler("fitome")}>>></div>
              </div>
            </div>
            <div className="project_left_detail" id="detail_fitome">
            <div className="project_detail_exit" onClick={()=>detailHandler("fitome")}>X</div>
              <h3 className="project_left_detail_title">Trainer User Stories:</h3>
              <ul className="project_detail_list">
                <li>Users are able to sign up and login as a trainer</li>
                <li>Trainers are given a unique personal code for clients to connect with them</li>
                <li>Trainers are able to create their own exercises that are fully customizable with video option so clients can follow</li>
                <li>Trainers are able to create their own reusable workouts by selecting a couple exercises from their list.
                </li>
                <li>Trainers are able to personally assign the workouts to their individual clients with personalized amount of workouts and notes
                </li>
                <li>Trainers are able to schedule video calls with their clients for weekly workouts and checkups
                </li>
                <li>Trainers are able to use and edit the real-time stopwatch overlay during a video call
                </li>
              </ul>
              <h3 className="project_left_detail_title">Client User Stories:</h3>
              <ul className="project_detail_list">
                <li>Users are able to sign up and login as a client
                </li>
                <li>Clients must connect with their trainers via trainer’s personal code
                </li>
                <li>Clients are able to input and edit their personal info for their trainers to view (ie. Height, muscle measurements, etc)
                </li>
                <li>Clients are able to view their workouts and detailed exercises online and offline
                </li>
                <li>Clients are able to view their call schedules and join calls with their trainer
                </li>
                <li>Clients are able to use and edit the real-time stopwatch overlay during a video call
                </li>
              </ul>   
              <h3 className="project_left_detail_title">Contributions:</h3>
              <p className="project_detail_subtitle">Lead a fully remote team of 4 engineers as the Scrum Master from start to deployment.</p>
              <ul className="project_detail_list">
                <li>Built the main video chat feature using socket.io and Peer2Peer connection on both front and backend on Express</li>
                <li>Wire-framed and designed the style and data flow with a mobile-first approach to create a beautiful, responsive UI</li>
                <li>Built out the interactive forms for data inputs with validation</li>
              </ul>
            </div>

            <div className="project_left_wrapper gap">
              <div className="project_left">
                <h1 className="project_left_title">CardShare - Web Application</h1>
                <p className="project_left_info">A flashcard sharing site made for booklovers to retain and share knowledge.</p>
                <p className="project_left_tech"><span className="yellow">[</span>TypeScript, Jest, React Testing Library, SuperTest, React, Next.JS, Express, MongoDB, Mongoose, Firebase<span className="yellow">]</span></p>
                <div className="project_left_arrow bounce" onClick={()=>detailHandler("cardshare")}>>></div>
              </div>
              <img className="project_left_mock" src="./images/mock_cardshare.png"  />
            </div>
            <div className="project_left_detail" id="detail_cardshare">
            <div className="project_detail_exit" onClick={()=>detailHandler("cardshare")}>X</div>
              <h3 className="project_left_detail_title">User Stories:</h3>
              <ul className="project_detail_list">
                <li>Users are able to make their own accounts
                </li>
                <li>Users are able to search for literatures in the search bar (Google Books API)
                </li>
                <li>Users are able to save other users deck to their “Study” page
                </li>
                <li>Users are able to explore the most popular decks on the site
                </li>
                <li>Users are able to upvote or downvote other decks
                </li>
                <li>Users are able to discover other decks using the same literature
                </li>
                <li>Users are able create their own decks
                </li>
                <li>Users are able to study by going through flashcards, one by one.
                </li>

              </ul>
              <h3 className="project_left_detail_title">Contributions:</h3>
              <p className="project_detail_subtitle">Brought on with a small team of engineer to test and to refactor legacy codebase.</p>
              <ul className="project_detail_list">
                <li>Translated both frontend and backend code from Javascript to TypeScript
                </li>
                <li>Added integration automated tests to backend using SuperTest and Jest
                </li>
                <li>Added integration and unit automated tests to frontend with Jest and React Testing Library
                </li>
                <li>Divided existing pages into multiple pages and components to increase stability and reusability
                </li>
              </ul>
            </div>
            
            <h1 className="section_title">ABOUT ME</h1>

            <div className="about_wrapper" id="about"> 
              <div className="profile" >
                    <img className="profile_main" src="./images/portfolio_2.jpg"/>
                    <img className="profile_hover" src="./images/portfolio_1.jpg"/>
              </div>
              <div className="about_right">
                <h1 className="project_left_title">Hey, I'm Louisa</h1>
                <p className="project_left_info">My passion for programming started in 2012 when I first discovered Java to create a simple online self-driving robot that learns how to navigate and shoots on its own for a school competition. Now, I’m a full stack engineer that loves to turn ideas into  beautiful online spaces.</p>
                <p className="project_left_info">As I studied and worked in Marketing, it allows me to plan and develop with a user-driven mindset. I enjoy writing code that solves real-life problem by merging functionality and creativity together. I love a good challenge and to problem solve, it’s all about looking at it from different perspectives and breaking it down into bit-size pieces.</p>
                <p className="project_left_info">When I’m not coding, you can either find me in a coffee shop or in the craft room getting my hands on my next project. Let’s grab a coffee and discuss ideas!</p>
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
