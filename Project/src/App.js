// // App.js
// import React from 'react';
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//  //import Navbar from './components/Navbar';
//  //import Login from './components/Login';
//  import Hero from './components/Hero';
//  import Login from './components/Login';
//  import Header from './components/Header';
//  import Footer from './components/Footer';
 
 
//   import Register from './components/Register';
// function App() {
//   return (
//     <Router>
//       <div className="App">

//         <Header/> 
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Register" element={<Register />} /> 
          
//         </Routes> 
//       <Footer/>
      
//       </div>
//       </Router>
    
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Login from './components/Login';
// import Header from './components/Header';
 import Footer from './components/Footer';
import Register from './components/Register';
 import Contact from './components/Contact'; // Import the Contact component
 import Enterprise from './components/Enterprise';
 import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import Getstarted from './components/Getstarted';
import Projectmanagement from './components/Projectmanagement';
import Book from './components/Book';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
           <Route path="/contact" element={<Contact />} /> 
           <Route path="/enterprise" element={<Enterprise />} /> 
          <Route path="/pricing" element={<Pricing/>} />  
          <Route path="/getstarted" element={<Getstarted/>} />  
          <Route path="/feature/project-management" element={<Projectmanagement/>} />  
          <Route path="/book" element={<Book/>} />  
        </Routes>
        <Footer />
      </div>
     

      
    </Router>
  );
}

export default App;
