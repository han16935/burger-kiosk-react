// App.js
// discord practice
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentChoice from "./paymentChoice/PaymentChoice";
import FirstPage from "./FirstPage";
import SalesStatistics from "./SalesStatistics";
import SecondPage from "./SecondPage";
import ShoppingBag from "./ShoppingBag";
import CompletePay from "./CompletePay";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/salesStatistics" element={<SalesStatistics/>}/>
          <Route path="/SecondPage" element={<SecondPage/>}>
            <Route path="ShoppingBag" element={<ShoppingBag/>}/>
          </Route>
          <Route path="/PaymentChoice" element={<PaymentChoice/>}/>
          <Route path="/CompletePay" element={<CompletePay />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
