import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Send, Receive, Welcome, Footer} from "./components"; 

function App() {
  return (
 
<Router>
<Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/receive" element={<Receive />} /> 
        <Route path="/send" element={<Send />} />   
        <Route path='/swap' element={ <Swap />}/>
      </Routes>
      <Footer />
    </Router> 
);
  }
   
  function Swap() { 
    
    window.location.replace('https://cryptwayswap.netlify.app/');
  
    return null;
  }
   

export default App;

 