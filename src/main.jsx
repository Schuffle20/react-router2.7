// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import Router from './routes/router';

// For calling the Routes directly

// import App from './App.jsx'
// import { BrowserRouter, Route, Routes } from 'react-router'
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  
  // Calling the routes directly

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route index element={<Home />} />  {/* Default child route for "/" */}
  //       <Route path="/about" element={<About />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>


  // calling the routes via separate route.js file
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  // </StrictMode>,
);
