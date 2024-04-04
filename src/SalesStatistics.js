import React from "react";

export class SalesStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salesData: [], // sales data array
      totalSales: 0
    };
  }

  componentDidMount() {
    // 매출 data를 가져오는 비동기 함수 호출
    this.fetchSalesData();
  }

  fetchSalesData = async () => {
    // 여기에 매출 데이터를 가져오는 API 호출 등의 로직을 구현함
    // 예시로 임의의 데이터를 설정함.
    const salesData = [
      { productName: '버거1', price: 9000, quantity: 43 },
      { productName: '버거2', price: 11000, quantity: 25 },
      { productName: '버거3', price: 8000, quantity: 52 },
      { productName: '버거4', price: 10000, quantity: 31 }
    ];

    // 총 매출 계산
    const totalSales = salesData.reduce((total, item) => total + item.price * item.quantity, 0);

    // 상태 update
    this.setState({ salesData, totalSales });
  };

  render() {
    return (
      <div>
        <h2>관리자 모드: 매출 통계</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ minWidth: '600px', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr>
                <th style={{ borderRight: '1px solid black' }}>상품명</th>
                <th style={{ borderRight: '1px solid black' }}>상품 가격</th>
                <th style={{ borderRight: '1px solid black' }}>수량</th>
                <th>총 결제 금액</th>
              </tr>
            </thead>
            <tbody>
              {this.state.salesData.map((item, index) => (
                <tr key={index}>
                  <td style={{ borderRight: '1px solid black' }}>{item.productName}</td>
                  <td style={{ borderRight: '1px solid black' }}>{item.price}</td>
                  <td style={{ borderRight: '1px solid black' }}>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p>총 매출 금액: {this.state.totalSales}</p>
        </div>
      </div>
    );
  }
}

export default SalesStatistics;