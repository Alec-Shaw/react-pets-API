import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import { useState } from "react";


const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
    <div> 
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details theme={theme}/>}/>
          <Route path="/" element={<SearchParams  />}/>    
        </Routes> 
      </Router>
    </div>
    </ThemeContext.Provider>
  );
};

export default App;
