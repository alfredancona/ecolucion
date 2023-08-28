
import WhatsAppButton from "./components/WhatsAppButton/index.jsx";
import { Header } from "./components/Header";
import "./App.css";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() { 
  return ( 

   <div className='parent'>
     <>
    <Header />
    <Layout  />
    <Footer/>
    <WhatsAppButton/>
    </>
   </div>
    
  );
}

export default App;
