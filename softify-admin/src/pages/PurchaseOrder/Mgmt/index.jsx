import { Container, MgmtSection, Top, Left, Right, EmptyState } from "./mgmt.styles";
import {Pageheader, PurchaseOrderTable } from "../../../components";
import {CustomButton} from '../../../ui';
import {Link} from 'react-router-dom';
import { Approutes } from "../../../constants";
import { useState } from "react";


const Mgmt = () => {
    const [data] = useState(true)
    const [tabIndex, setTabIndex] = useState('all')

    return (  
        <MgmtSection>
            <Pageheader title='purchase order management' />

            <Container>
                {data ? 
                <>
                    <Top>
                        <Left>
                            <p className={`${tabIndex === 'all' ? 'tab-active' : ''}`} onClick={() => setTabIndex('all')}>all</p>
                            <p className={`${tabIndex === 'pending' ? 'tab-active' : ''}`} onClick={() => setTabIndex('pending')}>pending</p>
                            <p className={`${tabIndex === 'received' ? 'tab-active' : ''}`} onClick={() => setTabIndex('received')}>received</p>
                        </Left>

                        <Right>
                            <Link to={Approutes.inventory.purchaseorders.addpurchaseorder}><CustomButton primary='true' left icon='+'>add purchase order</CustomButton></Link>
                        </Right>
                        </Top>

                    <PurchaseOrderTable tabindex={tabIndex}/>
                </> :
                <>
                    <EmptyState>
                        <h2>There are no purchase histories</h2>
                        <p>You can add and manage your purchase orders here</p>
                        <Link to={Approutes.inventory.purchaseorders.addpurchaseorder}><CustomButton>Add a new Purchase order</CustomButton></Link>
                    </EmptyState>
                </>}

                
            </Container>
        </MgmtSection>
    );
}
 
export default Mgmt;