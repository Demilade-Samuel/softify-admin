import { NavbarSection, Container, NavLinks, Link } from "./navbar.styles";
import { Logo, Signal, Motorcycle, User, Store, Signout  } from '../../assets/svgs';
import {Approutes} from '../../constants';
import {Dropdown} from '../';
import { useLogout } from "../../hooks";
import {ImSpinner2} from 'react-icons/im'

const InventoryDd = {
    title: 'inventory',
    links: [ { 
        name: 'categories',
        link: Approutes.inventory.categories.home
    },
    { 
        name: 'vendors',
        link: Approutes.inventory.vendors.home
    }, 
    { 
        name: 'purchase orders',
        link: Approutes.inventory.purchaseorders.home
    },
    {
        name: 'products',
        link: Approutes.inventory.products.home
    }, 
    {
        name: 'stock',
        link: Approutes.inventory.stock
    } ]
}
const OrdersDd = {
    title: 'orders',
    links: [ { 
        name: 'manage orders',
        link: Approutes.orders.mgmt
    },
    { 
        name: 'packages',
        link: Approutes.orders.packages
    } ]
}
const SuperAdminDd = {
    title: 'super admin',
    links: [ { 
        name: 'team',
        link: Approutes.superadmin.team.home
    },
    { 
        name: 'reports',
        link: Approutes.superadmin.reports
    }, 
    { 
        name: 'accounts',
        link: Approutes.superadmin.accounts
    },
    {
        name: 'promotions',
        link: Approutes.superadmin.promotions.mgmt
    } ]
}


const Navbar = () => {
    const {mutate, isLoading} = useLogout()

    return (  
        <NavbarSection>
            <Container>
                <Logo />

                <NavLinks>
                    <Link to={Approutes.dashboard}> <Signal /> <span>Dashboard</span></Link>
                    <Dropdown data={InventoryDd} />
                    <Dropdown data={OrdersDd} />
                    <Link to={Approutes.riders.home}> <Motorcycle /> <span>Riders</span></Link>
                    <Link to={Approutes.customers}> <User /> <span>Customers</span></Link>
                    <Link to={Approutes.stores}> <Store /> <span>Stores</span></Link>
                    <Dropdown data={SuperAdminDd} />
                    <button onClick={() => mutate()} disabled={isLoading}>{isLoading ? <ImSpinner2 /> : <><Signout />Logout</>}</button>
                </NavLinks>
                
            </Container>
        </NavbarSection>
    );
}
 
export default Navbar;