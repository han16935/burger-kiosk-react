import React from 'react';
import { useNavigate } from 'react-router-dom';


function ShoppingBag({ items, onCountChange, totalPrice }) {
    const navigate = useNavigate();
    const movePage = () => {
        navigate('/PaymentChoice');
    }
    return (
        <div className="shoppingBag">
            <h2>장바구니</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <div>{item.name}</div>
                        <div>가격: {item.price}원</div>
                        <div>수량: {item.count}</div>
                        <button onClick={() => onCountChange(item.id, 1)}>+</button>
                        <button onClick={() => onCountChange(item.id, -1)}>-</button>
                    </li>
                ))}
            </ul>
            <div>총합: {totalPrice}원</div>
            <div>
                <button onClick={movePage}>결제하기</button>
            </div>
        </div>
    );
}

export default ShoppingBag;