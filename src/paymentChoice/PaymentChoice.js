import React from "react";
import "./PaymentChoice.css";
import {fetchSalesData} from "../SalesStatistics";
import { useNavigate, useLocation } from 'react-router-dom';

export function PaymentChoice() {
  const items = useLocation().state;
  const navigate = useNavigate();

  const movePage = () => {
    navigate('/CompletePay', { state: items });
    fetchSalesData(items);
  };

  return (
      <div>
        <h2>Please select a payment method</h2>
        <div className="container">
          <button onClick={movePage} className="item">
            Credit Card, Samsung Pay
          </button>
          <button onClick={movePage} className="item">
            Mobile Voucher
          </button>
          <button onClick={movePage} className="item">
            Cash
          </button>
          <button onClick={movePage} className="item">
            QR Payment
          </button>
        </div>
      </div>
  );
}

export default PaymentChoice;
