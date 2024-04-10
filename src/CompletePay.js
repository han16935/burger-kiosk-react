import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const headers = [
    {
        text: '번호',
        value: 'id'
    },
    {
        text: '품목',
        value: 'name'
    },
    {
        text: '가격',
        value: 'price'
    }
];

function ItemTable({ headers, items }) {

    return (
        <table>
            <thead>
            <tr>
                {headers.map(header => (
                    <th key={header.value}>{header.text}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {items.map(({ id, name, price }) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

const CompletePay = () => {
    const items = useLocation().state;
    const navigate = useNavigate();
    const [orderNum, setOrderNum] = useState(1); // Initialize orderNum state with 1

    useEffect(() => {
        // Increase orderNum by 1 each time the component is rendered
        setOrderNum(prevOrderNum => prevOrderNum + 1);
    }, []);

    const moveToFirst = () => {
        navigate('../');
    };

    return (
        <div className="Paydiv">
            <h1>결제가 완료되었습니다!</h1>
            <hr />
            <h2>주문내역</h2>
            <ItemTable className="ItemTable" headers={headers} items={items} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button>온라인영수증 발급</button>
            <button onClick={moveToFirst}>처음으로 돌아가기</button>
        </div>
    );
};

export default CompletePay;
