import Head from 'next/head'
import {useEffect} from 'react'

export default function Home() {

  useEffect(()=>{
    console.log(window.innerWidth)
  }
  ,[])

  return (
    <div >
      <Head>
        <title>Louisa Wong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
          
          <div className="hero">
            <img src="/images/left_arrow.svg" className="leftarrow"/>
            <div className="nameTitle">
              <h1 className="fullname"> LOUISA WONG</h1>
            </div>
            <img src="/images/right_arrow.svg" className="rightarrow" />
          </div>
            <h3 className="title" >Full Stack Developer</h3>
        
        <div className="projects">
          Projects
        </div>
      </main>
      
    </div>
  )
}
