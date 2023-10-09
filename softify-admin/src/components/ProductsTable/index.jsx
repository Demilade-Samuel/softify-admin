import { TableContainer, StyledTable } from "./productstable.styles";
import { Edit, Trash } from "../../assets/svgs";
import {Link} from 'react-router-dom';

const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text, record) => <Link to={`/inventory/products/product/${record.key}`}><div className="image-container">
      <img src={text} alt="product" />
      </div></Link>
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
      render: (text, record) => <Link to={`/inventory/products/product/${record.key}`}>
      <div>{text}</div>
      </Link>,
      sorter: (a, b) => a.productName.localeCompare(b.productName)
    },
    {
        title: 'Brand Name',
        dataIndex: 'brandName',
        key: 'brandName',
        render: (text, record) => <Link to={`/inventory/products/product/${record.key}`}>
        <div>{text}</div>
        </Link>,
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        render: (text, record) => <Link to={`/inventory/products/product/${record.key}`}>
        <div>{text}</div>
        </Link>,
        sorter: (a, b) => a.category.localeCompare(b.category)
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
      render: (text, record) => <Link to={`/inventory/products/product/${record.key}`}>
      <div>{text}</div>
      </Link>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => <Link to={`/inventory/products/product/${record.key}`}>
      <div>{text}</div>
      </Link>,
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: () => <div className="icons">
            <Edit  />
            <Trash />
        </div>
    }
  ];
  

  // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };
  

const ProductsTable = ({products}) => {
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
          pageSize: 6
        }} 
        />
        </TableContainer>
    );
}
 
export default ProductsTable;