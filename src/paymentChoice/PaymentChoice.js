import React from "react";
import {Link} from 'react-router-dom';
import "./PaymentChoice.css";

export function PaymentChoice(){
    return (
        <div>
            <h2>결제 수단을 선택해주세요</h2>
            <div class="container">
                <Link to = "/" class="item">신용카드, 삼성페이</Link>
                <Link to = "/" class="item">모바일 교환권</Link>
                <Link to = "/" class="item">현금</Link>
                <Link to = "/" class="item">QR결제</Link>
            </div>
        </div>
    )
}
