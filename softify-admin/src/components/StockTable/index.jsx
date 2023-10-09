import { StyledTable, TableContainer } from "./stocktable.styles";
import {Link} from 'react-router-dom';

const columns = [
  {
    title: '',
    dataIndex: 'image',
    key: 'image',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}><div className="image-container">
    <img src={text} alt="product" />
    </div></Link>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}>
      <div>{text}</div>
    </Link>,
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}>
    <div>{text}</div>
    </Link>
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}>
    <div>{text}</div>
    </Link>
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}>
    <div>{text}</div>
    </Link>,
    sorter: (a, b) => a.category.localeCompare(b.category)
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}>
    <div>{text}</div>
    </Link>
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
    key: 'qty',
    render: (text, record) => <Link to={`/inventory/stock/product/${record.key}`}>
    <div className="table-link">{text}</div>
    </Link>,
    sorter: (a, b) => a.qty - b.qty,
  }
];


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const StockTable = ({products}) => {

  return (
    <TableContainer>
      <StyledTable
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={products}
        pagination={{
          pageSize: 4
        }}
      />
    </TableContainer>
  );
};
export default StockTable;
