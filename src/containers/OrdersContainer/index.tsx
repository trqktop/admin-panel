import { useState } from 'react'

const OrdersContainer = () => {
  const [state, setState] = useState(0)

  return <div className="orders">
    <div>Заказы</div>
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '40px', border: '1px green solid' }}>
      <ul style={{ display: 'flex', gap: '30px' }}>
        <li>дата</li>
        <li>покупатель</li>
        <li>телефон</li>
        <li>адресс</li>
        <li>сумма</li>
      </ul>
      <ul style={{ display: 'flex', gap: '30px' }} onClick={() => setState((p) => p === 1 ? 0 : 1)}>
        <li>12.12.1232</li>
        <li>САША</li>
        <li>929ы3889288</li>
        <li>ул.пуыпкина</li>
        <li>1000</li>
      </ul>
      {state === 1 && <div><div style={{ display: 'flex', gap: '30px' }}>
        <div>Состав заказа</div>
        <span>№</span>
        <span>название</span>
        <span>кол-во</span>
        <span>цена</span>
        <span>итого</span>
      </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <span>1</span>
          <span>Футболка</span>
          <span>1</span>
          <span>1111</span>
          <span>1111</span>
          <span>1111</span>
          <span>1111</span>
        </div>
      </div>}
      <ul style={{ display: 'flex', gap: '30px' }} onClick={() => setState((p) => p === 2 ? 0 : 2)}>
        <li>12.12.1232</li>
        <li>Паша</li>
        <li>9293889288</li>
        <li>ул.пупкина</li>
        <li>12000</li>
      </ul>
      {state === 2 && <div><div style={{ display: 'flex', gap: '30px' }}>
        <div>Состав заказа</div>
        <span>№</span>
        <span>название</span>
        <span>кол-во</span>
        <span>цена</span>
        <span>итого</span>
      </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <span>1</span>
          <span>Футболка</span>
          <span>1</span>
          <span>1111</span>
          <span>1111</span>
        </div>
      </div>}
    </div>
  </div>;
};
export default OrdersContainer;
