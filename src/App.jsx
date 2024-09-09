import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Feature from "./components/Feature.jsx";
import * as Sentry from "@sentry/react";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Feature />
      <HowItWorks />
      <Footer/>
    </main>
  );
};

export default Sentry.withProfiler(App);
