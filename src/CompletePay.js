import React from "react";

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



const items = [
    {
      id: '1',
      name: 'Chicken burger',
      price: '3500'
    },
    {
        id: '2',
        name: 'French fries',
        price: '1500'
    },
    {
        id: '3',
        name: 'Cola',
        price: '1000'
    }
];


function ItemTable({ headers, items }) {
    return (
      <table>
        <thead>
          <tr>
          {headers.map(headers => (
            <th key={headers.value}>{headers.text}</th>
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
    return (
    <div className = "Paydiv">
        
        <h1>결제가 완료되었습니다!</h1>
            <hr></hr>

            <h2>주문내역</h2>
            
            
            {
            <ItemTable className = "ItemTable"
            headers = {headers}
            items = {items}>
            </ItemTable>
            }
            
        
            <br/>
            <br/>
            <br/>

            <h2>주문번호 : 23번</h2>

            <br/>
            <br/>
            <br/>

            <button>온라인영수증 발급</button>
            <button>처음으로 돌아가기</button>
           
    </div>
    );
};

export default CompletePay;