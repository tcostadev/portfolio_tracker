import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import React from 'react';
import routes from "./routes.js";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login"
import Dashboard from "./pages/Dashboard";

function App() {
  // useEffect(()=>{ doSomething }, [])
  // empty array trigger use effect at the first render; 
  // empty trigger use effect every time. 
  // if pass props or state, will trigger every time this items changes 

  const { user } = useSelector((state) => state.auth)
  
  if(!user){
    return(
      <Login></Login>
    );
  }
  
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          element={prop.component}
          key={key}
        />
      );
    });
  };

  let mainClassName = 'wrapper';
  if (!user){
    mainClassName += ' background-full';
  }

  return (
    <>
      <Router>
        <div className={mainClassName}>
          <Sidebar color={'black'} image={""}  routes={routes}/>
          <main className='main-panel'>
            <AdminNavbar/>
            <Routes>
              {getRoutes(routes)} 
            </Routes>
          </main>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
