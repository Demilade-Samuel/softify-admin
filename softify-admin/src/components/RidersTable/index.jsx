import { Link } from "react-router-dom";
import { StyledTable, TableContainer } from "./riderstable.styles";
import { CustomButton } from "../../ui";
import { Approutes } from "../../constants";

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
    title: 'Orders',
    dataIndex: 'orders',
    key: 'orders'
  },
  {
    title: 'Verified',
    dataIndex: 'verified',
    key: 'verified',
    render: (text) => <div className={text === 'yes' ? 'status yes' : 'status no'}>{text}</div>
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <Link to={Approutes.riders.rider}>
        <CustomButton secondary='true'>View Rider</CustomButton>
    </Link>
  },
];


const RidersTable = ({riders}) => {

  return (
    <TableContainer>
      <StyledTable
        columns={columns}
        dataSource={riders}
        pagination={{
          pageSize: 5
        }}
      />
    </TableContainer>
  );
};
export default RidersTable;
