import { Container, StoreSection, Statuses, Status, Top, Left, Right } from "./stores.styles";
import {Pageheader, StoresTable} from "../../components";
import { Print } from "../../assets/svgs";
import {CustomButton, Search} from '../../ui';
import { useState } from "react";

const Stores = () => {
    const [customer, searchCustomer] = useState('')

    return (  
        <StoreSection>
            <Pageheader title='store management' />

            <Container>
                <Statuses>
                    <Status active='true'>Active</Status>
                    <Status>Pending</Status>
                    <Status>Delivered</Status>
                    <Status>Cancelled</Status>
                    <Status>All Orders</Status>
                </Statuses>

                <Top>
                    <Left>
                        <p>All Customers</p>
                    </Left>

                    <Right>
                        <Search placeholder='Search customers...' value={customer} setValue={searchCustomer} />

                        <CustomButton primary='true' left icon={<Print />}><p>print</p></CustomButton>
                    </Right>
                </Top>

                <StoresTable />
            </Container>
        </StoreSection>
    );
}
 
export default Stores;