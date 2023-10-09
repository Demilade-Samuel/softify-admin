import { AccountsSection, Container } from "./accounts.styles";
import {Pageheader} from "../../components";

const Accounts = () => {
    return (  
        <AccountsSection>
            <Pageheader title='accounts' />


            <Container>
                accounts
            </Container>
        </AccountsSection>
    );
}
 
export default Accounts;