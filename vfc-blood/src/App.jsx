import React, { Suspense } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  const Home =React.lazy(()=>import("./Pages/Home/Home"))
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading .....</p>}>
        <Routes>
          <Route path="" exact element={<Home/>}/>
        </Routes>

      </Suspense>
    </div>
  );
}

export default App;
