import React from "react";

// import InputForm from './testPages/InputForm'
// import Photos from "./testPages/Photos";
import Home from "./pages/Home";
import Layout from './layout/Layout'
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import Contact from './pages/Contact'

const App = () => {
  return (
    <div >
      <Layout>
<Routes>
  <Route path = "/" element = { <Home />}/>
  <Route path = "/shop" element = { <Shop />}/>
  <Route path = "/singleproduct" element = { <SingleProduct/>}/>
  <Route path = "/contact" element = { <Contact/>}/>
</Routes>
       
      </Layout>
    </div>
  );
};

export default App;
