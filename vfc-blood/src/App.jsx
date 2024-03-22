import React, { Suspense } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  const Home =React.lazy(()=>import("./Pages/Home/Home"))
  const BloodList=React.lazy(()=>import('./Pages/BloodListPage/BloodListPage'))
  const AddNew=React.lazy(()=>import('./Pages/Add/Add'))
  const AdminHome=React.lazy(()=>import('./Pages/Admin/AdminHome/AdminHome'))
  const Login=React.lazy(()=>import('./Pages/Login/Login'))

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading .....</p>}>
        <Routes>
          <Route path="" exact element={<Home/>}/>
          <Route path="/blood-list/:groupName" element={<BloodList/>}/>
          <Route path="/add-new" element={<AddNew/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<AdminHome/>}/>
        </Routes>

      </Suspense>
      
    </div>
  );
}

export default App;
