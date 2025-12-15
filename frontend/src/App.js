import React from 'react'
import { useEffect ,  useState } from 'react'
import axios from 'axios'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import styled from 'styled-components'
import Footer from './Components/Footer.jsx'
import Skills from './Components/Skills.jsx'
import Aboutme from './Components/Aboutme.jsx'
import Experience from './Components/Experience.jsx'
import Project from './Components/Project.jsx'
import Contactme from './Components/Contactme.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'



  const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;`


  const MainWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ffffff;
  color: black;
  padding: 0 2% 0 2%;`

const App = () => {

  const [data , setData] = useState([]);

useEffect(() => {

  async function fetchData() {
    try {
      const res = await fetch("http://localhost:5000/api/get_all");
      const data = await res.json();
      
      // console.log(data);
      setData(data)
    
    } catch (error) {
      console.error("Fetch failed:", error); 
    }
  }
  
  fetchData();
},[]);

  return (
    
    <>
   <AppContainer>
    <Navbar />
    <MainWrapperContainer>
      <Home data = {data}/>
      <Aboutme data= {data}/>
      <Skills data = {data}/>
      <Experience data = {data}/>
      <Project data={data}/>
      <Contactme data={data}/>
    </MainWrapperContainer>
    <Footer />
    <ScrollToTop/>
   </AppContainer>
    </>
  )
}

export default App