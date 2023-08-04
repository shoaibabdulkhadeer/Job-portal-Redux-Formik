import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Users from './components/Users';

function App() {

 const [data,setData] = useState([])

  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
         <Routes>
           <Route path="/" element={<Main data={data} setData={setData}/>}/>
          <Route path="/users" element={<Users />} />
         </Routes>
         <Footer />
       </BrowserRouter>
  
    </div>
  );
}

export default App;
