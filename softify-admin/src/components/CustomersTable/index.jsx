import { StyledTable, TableContainer } from "./customerstable.styles";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
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
    key: 'email'
  },
  {
    title: 'Phone No',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Joined',
    dataIndex: 'joined',
    key: 'joined'
  },
  {
    title: 'Order No',
    dataIndex: 'orderNo',
    key: 'orderNo'
  },
  {
    title: 'Verified',
    dataIndex: 'verified',
    key: 'verified',
    render: (text) => <div className={text === 'yes' ? 'status yes' : 'status no'}>{text}</div>
  },
];

const CustomersTable = ({customers}) => {

  return (
    <TableContainer>
      <StyledTable
        columns={columns}
        dataSource={customers}
        pagination={{
          pageSize: 8
        }}
      />
    </TableContainer>
  );
};
export default CustomersTable;
