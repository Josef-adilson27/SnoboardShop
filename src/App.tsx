import "./index.css";
import BaseContent from "./Basecomponents/BaseContent";
import { ContextProvider } from "./context/ContextProvider";
import React from "react";
import Header from "./Basecomponents/Header";
import Locations from "./Basecomponents/Locations";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./Basecomponents/cart/Cart";
const Lazyloading = React.lazy(()=>import("./Basecomponents/assortment/Assortment"))

//запусить сервер для получ. товаров: json-server --watch  data.json --port3031

const App = () => {
  return (
    <div className="App dark:bg-slate-900 w-full min-h-[100vh] bg-[rgb(251,_251,_251)];  ">
      <ContextProvider>
        <BrowserRouter>
          <Header/>       
          <Routes>
            {/* BaseContent-первонач. страница */}
            <Route path="/" element={<BaseContent />} />
            <Route path="location" element={<Locations />} />
             <Route path="assortment" 
              element={
              <React.Suspense fallback='loading'>
               <Lazyloading/>
              </React.Suspense>}/>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};
export default App;
