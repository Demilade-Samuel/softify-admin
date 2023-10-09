import styled from "styled-components";
import { Table } from "antd";

export const TableContainer = styled.div`
    margin-top: 2rem;
`
export const StyledTable = styled((props) => <Table {...props} />)`
    background: ${({theme}) => theme.colors.bg.gray1};


	.ant-table-thead > tr > th {
		color: ${({theme}) => theme.colors.neutral.black2};
		font-weight: 500;
		background: ${({theme}) => theme.colors.bg.gray1} !important;
        font-size: 1.8rem;
        font-weight: 500;

	}
	.ant-table-tbody > tr > td {
		max-width: 300px;
		font-weight: 500;
        background: transparent;
		font-size: 1.6rem;
		background: ${({theme}) => theme.colors.bg.gray1};
		border-bottom-color: #EBEBEB !important;

		.payables {
			color: ${({theme}) => theme.colors.light.brown} !important;
		}

		.name {
			font-weight: 400;
		}

		.icons {
			display: flex;
			align-items: center;
			gap: 2rem;
		}
	}

	.ant-table-cell > th {

		&::before {
			background: #EBEBEB !important;
		}
	}

	.ant-pagination .ant-pagination-item-active {
		border: 1px solid ${({theme}) => theme.colors.neutral.purple} !important;
		background: rgba(0,0,0,0.06) !important;
		
		a {
			color: black !important; 
		}
	}
`;