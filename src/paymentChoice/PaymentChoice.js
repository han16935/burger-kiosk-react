import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PaymentChoice.css";
import CompletePay from "../CompletePay";
import { useNavigate } from 'react-router-dom';

export function PaymentChoice() {
  const navigate = useNavigate();
  const movePage = () => {
    navigate('/CompletePay');
  }
  return (
    <div>
      <h2>결제 수단을 선택해주세요</h2>
      <div class="container">
        <button path="/CompletePay" onClick={movePage} class="item">
          신용카드, 삼성페이
        </button>
        <button path="/CompletePay" onClick={movePage} class="item">
          모바일 교환권
        </button>
        <button path="/CompletePay" onClick={movePage} class="item">
          현금
        </button>
        <button path="/CompletePay" onClick={movePage} class="item">
          QR결제
        </button>
      </div>
    </div>
  );
}

export default PaymentChoice;