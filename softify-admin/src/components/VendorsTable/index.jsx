import { StyledTable, TableContainer } from "./vendorstable.styles";
import { Edit, Trash } from "../../assets/svgs";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <div className="name">{text}</div>,
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: 'Primary Contact',
    dataIndex: 'primaryContact',
    key: 'primaryContact',
    sorter: (a, b) => a.primaryContact.localeCompare(b.primaryContact)
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Work Phone',
    dataIndex: 'workPhone',
    key: 'workPhone'
  },
  {
    title: 'Payables',
    dataIndex: 'payables',
    key: 'payables',
    render: (text) => <div className="payables">{text}</div>,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: () => <div className="icons">
        <Edit  />
        <Trash />
      </div>
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const VendorsTable = ({vendors}) => {

  return (
    <TableContainer>
      <StyledTable
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={vendors}
        pagination={{
          pageSize: 8
        }}
      />
    </TableContainer>
  );
};
export default VendorsTable;
