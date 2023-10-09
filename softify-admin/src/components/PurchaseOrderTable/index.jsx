import { useState } from "react";
import { StyledTable, TableContainer } from "./purchaseordertable.style";
import {Link} from 'react-router-dom';
import {Approutes} from '../../constants';

const columns = [
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    key: 'vendor',
    render: (text) => <Link to={Approutes.inventory.purchaseorders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Purchase ID',
    dataIndex: 'purchaseID',
    key: 'purchaseId',
    render: (text) => <Link to={Approutes.inventory.purchaseorders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <Link to={Approutes.inventory.purchaseorders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    render: (text) => <Link to={Approutes.inventory.purchaseorders.details}>
    <div className={text === 'paid' ? 'payment paid' : text === 'not paid' ? 'payment not-paid' : 'payment'}>{text}</div>
    </Link>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <Link to={Approutes.inventory.purchaseorders.details}>
    <div className="table-link">{text}</div>
    </Link>
  },
  {
    title: 'PO Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <Link to={Approutes.inventory.purchaseorders.details}>
    <div className={text === 'received' ? 'status received' : 'status pending'}>{text}</div>
    </Link>
  },
];

const data = [
  {
    key: '1',
    vendor: 'Nestle',
    purchaseID: '09HF38DJ',
    amount: '₦39,000',
    payment: 'paid',
    date: '15/05/2023',
    status: 'received'
  },
  {
    key: '2',
    vendor: 'Coca cola',
    purchaseID: '09HF38DJ',
    amount: '₦39,000',
    payment: 'not paid',
    date: '15/05/2023',
    status: 'pending'
  },
  {
    key: '3',
    vendor: 'ABC plastics',
    purchaseID: '09HF38DJ',
    amount: '₦39,000',
    payment: 'paid',
    date: '15/05/2023',
    status: 'received'
  },
  {
    key: '4',
    vendor: 'Nestle',
    purchaseID: '09HF38DJ',
    amount: '₦39,000',
    payment: 'not paid',
    date: '15/05/2023',
    status: 'pending'
  },
  {
    key: '5',
    vendor: 'Nestle',
    purchaseID: '09HF38DJ',
    amount: '₦39,000',
    payment: 'paid',
    date: '15/05/2023',
    status: 'received'
  },
];

const PurchaseOrderTable = ({tabindex}) => {
  const [purchaseOrders] = useState(data);

  const filterPurchaseOrders = () => {
    let newPurchaseOrders = [...purchaseOrders]

    if(tabindex !== 'all'){
      newPurchaseOrders = newPurchaseOrders.filter(po => {
        return po.status.toLowerCase().indexOf(tabindex.toLowerCase()) !== -1
      })
  
    } 

    return newPurchaseOrders
  }

  return (
    <TableContainer>
      <StyledTable
        columns={columns}
        dataSource={filterPurchaseOrders()}
        pagination={{
          pageSize: 8
        }}
      />
    </TableContainer>
  );
};
export default PurchaseOrderTable;
