import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PaymentChoice.css";
import CompletePay from "../CompletePay";

export function PaymentChoice() {
  return (
    <div>
      <h2>결제 수단을 선택해주세요</h2>
      <Routes class="container">
        <Route to="/CompletePay" element={CompletePay} class="item">
          신용카드, 삼성페이
        </Route>
        <Route to="/CompletePay" element={CompletePay} class="item">
          모바일 교환권
        </Route>
        <Route to="/CompletePay" element={CompletePay} class="item">
          현금
        </Route>
        <Route to="/CompletePay" element={CompletePay} class="item">
          QR결제
        </Route>
      </Routes>
    </div>
  );
}
