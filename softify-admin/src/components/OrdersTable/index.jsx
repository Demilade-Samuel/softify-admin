import { StyledTable, TableContainer } from "./orderstable.styles";
import {Link} from 'react-router-dom'
import {Approutes} from '../../constants'

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
    key: 'orderId',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className="table-link">{text}</div>
  </Link>
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    key: 'customer',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className={text === 'paid' ? 'payment paid' : text === 'not paid' ? 'payment not-paid' : 'payment'}>{text}</div>
   </Link>
  },
  {
    title: 'Assigned',
    dataIndex: 'assigned',
    key: 'assigned',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Order Status',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: (text) => <Link to={Approutes.orders.details}>
    <div className={text === 'received' ? 'status received' : text === 'pending' ? 'status pending' : text === 'active' ? 'status received' : text === 'cancelled' ? 'status pending' : text === 'delivered' ? 'status received' : ''}>{text}</div>
    </Link>
  }
];

const OrdersTable = ({tabindex, orders}) => {

  return (
    <TableContainer>
      <StyledTable
        columns={columns}
        dataSource={orders}
        pagination={{
          pageSize: 7
        }}
      />
    </TableContainer>
  );
};
export default OrdersTable;
