import React, { useState } from "react";
import styles from "./SecondPage.css"; // CSS 스타일을 적용하기 위해 임포트합니다.
import {useNavigate} from "react-router-dom"//뒤로가기 기능 구현용
import ShoppingBag from "./ShoppingBag"; // ShoppingBag 컴포넌트를 임포트합니다.
import whopper from './img/guinness_whopper.jpg';
import BLT from './img/chickenkingBLT.jpg';
import cola from './img/cocacola.jpg';
import fanta from './img/fanta.jpg';
import frenchfries from './img/frenchfries.jpg';
import cheesestick from './img/cheesestick.jpg';
import back from './img/back.png';

const menu = [
    { id: 1, name: 'Guinness Whopper', price: '5000', image: whopper },
    { id: 2, name: 'ChickenKing BLT', price: '4500', image: BLT },
    { id: 3, name: 'Cocacola', price: '2000', image: cola },
    { id: 4, name: 'Fanta', price: '2000', image: fanta },
    { id: 5, name: 'French Fries', price: '1500', image: frenchfries },
    { id: 6, name: 'Cheese Stick', price: '2000', image: cheesestick }
];

export function SecondPage() {

    const navigate = useNavigate();

    const [menuCounts, setMenuCounts] = useState(menu.map(menuItem => ({ ...menuItem, count: 0 })));

    const handleMenuClick = (id) => {
        setMenuCounts(prevCounts => prevCounts.map(menuItem => {
            if (menuItem.id === id) {
                return { ...menuItem, count: menuItem.count + 1 };
            }
            return menuItem;
        }));
    };

    const handleCountChange = (id, delta) => {
        setMenuCounts(prevCounts => prevCounts.map(menuItem => {
            if (menuItem.id === id) {
                const newCount = menuItem.count + delta;
                return { ...menuItem, count: Math.max(newCount, 0) }; // 음수가 되지 않도록 합니다.
            }
            return menuItem;
        }));
    };

    const totalPrice = menuCounts.reduce((acc, menuItem) => {
        const menuInfo = menu.find(item => item.id === menuItem.id);
        return acc + (parseInt(menuInfo.price) * menuItem.count); // 가격을 숫자로 변환합니다.
    }, 0);

    const menuItems = menu.map((item) => (
        <li key={item.id} onClick={() => handleMenuClick(item.id)}>
            <img src={item.image} alt={item.name} style={{width: '150px', height: '150px'}} /> {/* 이미지 표시 */}
            <div>{item.name}</div>
            <div>Price: {item.price}</div>
        </li>
    ));

    return (
        <div>
            <header>
                <button onClick={()=> navigate(-1)} style={{width:'100px', height:'100px'}}><img src= {back} style={{width:'60px', height:'60px'}}></img></button> {/* 이 버튼이 실제로 동작하도록 하려면 추가적인 로직이 필요합니다. */}
            </header>
            <ul>{menuItems}</ul>
            <ShoppingBag items={menuCounts.filter(menuItem => menuItem.count > 0)} onCountChange={handleCountChange} totalPrice={totalPrice} />
        </div>
    );
}

export default SecondPage;