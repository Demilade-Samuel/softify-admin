import {Outlet} from 'react-router-dom';
import { Container, Main } from './applylayout.styles';
import {Navbar} from '../../components';

const ApplyLayout = () => {
    return ( 
        <Container>
            <Navbar />

            <Main>
                <Outlet />
            </Main>
        </Container>
    );
}
 
export default ApplyLayout;