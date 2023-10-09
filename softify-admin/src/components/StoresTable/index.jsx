import { StyledTable, TableContainer } from "./storestable.styles";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone No',
    dataIndex: 'phone',
  },
  {
    title: 'Joined',
    dataIndex: 'joined',
  },
  {
    title: 'Order No',
    dataIndex: 'orderNo',
  },
  {
    title: 'Verified',
    dataIndex: 'verified',
    render: (text) => <div className={text === 'yes' ? 'status yes' : 'status no'}>{text}</div>
  },
];

const data = [
  {
    key: '1',
    id: '34543',
    name: 'Darrell Steward',
    email: 'Binnas@gmail.com',
    phone: '09043234892',
    joined: '15/05/2023',
    orderNo: '20',
    verified: 'yes',
  },
  {
    key: '2',
    id: '34543',
    name: 'Tunde Idiagbon',
    email: 'binhan628@gmail.com',
    phone: '08127435021',
    joined: '15/05/2023',
    orderNo: '20',
    verified: 'yes',
  },
  {
    key: '3',
    id: '34543',
    name: 'Ibrahim Badamosi Babangida',
    email: 'ckctm12@gmail.com',
    phone: '08090234567',
    joined: '15/05/2023',
    orderNo: '20',
    verified: 'yes',
  },
  {
    key: '4',
    id: '34543',
    name: 'Jaja Wachuku',
    email: 'trungkienspktnd@gamail.com',
    phone: '08093327543',
    joined: '15/05/2023',
    orderNo: '20',
    verified: 'yes',
  },
];

const StoresTable = () => {

  return (
    <TableContainer>
      <StyledTable
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 8
        }}
      />
    </TableContainer>
  );
};
export default StoresTable;
