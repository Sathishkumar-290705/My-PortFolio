import Home from "./Components/Home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Project";
import EmailContact from "./Components/Contact/EmailContact";
import ContactMe from "./Components/Contact/Contactme";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [data, setData] = useState(null); // store backend data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/get_all"
        );

        setData(response.data); // ✅ axios data
        setLoading(false);
      } catch (error) {
        console.error("fetch failed error", error);
      
      }
    };

    fetchData(); // ✅ IMPORTANT
  }, []); // ✅ run once
  console.log(data);
  
  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col  bg-ivo ">
       <Navbar/>
      <main className="flex-1  ">
          <Home  />
          <About/>
          <Services/>
          <Experience/>
          <Skills data={data}/>
          <Projects data={data}/>
          <EmailContact/>
          <ContactMe data={data}/>
          <ScrollToTop/>
      </main>
          <Footer/>
  
    </div>
  );
};

export default App;
