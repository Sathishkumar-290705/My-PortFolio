import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Contactme from "./Components/Contactme";
import Footer from "./Components/Footer";
import Skeleton from './Components/skeleton/Skeleton';

import { useEffect, useState } from "react";
import axios from "axios";

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

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="bg-black text-[#EAEAEA] min-h-screen flex">
      <Navbar data={data} />

      <main className="flex-1 ml-[280px] max-lg:ml-0">
        {loading ? (
          <>
          <Skeleton/>
          </>
        ):(
          <>
          <Home data={data} />
        <Aboutme data={data} />
        <Skills data={data} />
        <Project data={data} />
        <Experience data={data} />
        <Contactme data={data} />
        <Footer data={data} /></>
        )}
      </main>
    </div>
  );
};

export default App;
