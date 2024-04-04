import React from 'react';
import "./FirstPage.css";
import icon from "./img/logo.png";

function FirstPage() {
    return (
        <div className="first_page_container">
            <img className = "Icon" alt = "icon" src={icon}></img>
            <h1 className="gachon_burger">버거킹 가천대점</h1>
            <div className="button_container">
                <button className="order_button">매장 주문</button>
                <button className="order_button_takeout">포장 주문</button>
            </div>
        </div>
    );
}

export default FirstPage;