import { ThemeProvider } from 'styled-components';
import { Globals, theme } from './base';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Accounts, AddNewProduct, AddPromotion, AddPO, AddVendor, Categories, Customers, Dashboard, OrderDetails, OrderMgmt, Packages, POMgmt, Products, PromotionsMgmt, Reports, Riders, SingleProduct, Stock, Stores, Team, Vendors, SingleRider, Login, ForgotPassword, PODetails, AddTeamMember, ActivateAccount, AddCatgory } from './pages';
import { ApplyLayout } from './layout';
import { Approutes } from './constants';
import { useAuthContext } from './hooks';
 
const App = () => {
  const {user, authenticated} = useAuthContext()

  return ( 
    <ThemeProvider theme={theme} >
      <Globals />

      <Router>
        <Routes>
          <Route path={Approutes.home} element={user && authenticated ? <Dashboard />  : <Navigate to={Approutes.login} />} /> 
          <Route element={<ApplyLayout />} >
            <Route path={Approutes.dashboard} element={<Dashboard />} />
            <Route path={Approutes.inventory.categories.home} element={<Categories />} />
            <Route path={Approutes.inventory.categories.addcategory} element={<AddCatgory />} />
            <Route path={Approutes.inventory.vendors.home} element={<Vendors />} />
            <Route path={Approutes.inventory.vendors.addvendor} element={<AddVendor />} />
            <Route path={Approutes.inventory.purchaseorders.home} element={<POMgmt />} />
            <Route path={Approutes.inventory.purchaseorders.addpurchaseorder} element={<AddPO />} />
            <Route path={Approutes.inventory.purchaseorders.details} element={<PODetails />} />
            <Route path={Approutes.inventory.products.home} element={<Products />} />
            <Route path='/inventory/products/product/:productId' element={<SingleProduct />} />
            <Route path={Approutes.inventory.products.addnewproduct} element={<AddNewProduct />} />
            <Route path={Approutes.inventory.stock} element={<Stock />} />
            <Route path='/inventory/stock/product/:productId' element={<SingleProduct />} />
            <Route path={Approutes.orders.mgmt} element={<OrderMgmt />} />
            <Route path={Approutes.orders.details} element={<OrderDetails />} />
            <Route path={Approutes.orders.packages} element={<Packages />} />
            <Route path={Approutes.riders.home} element={<Riders />} />
            <Route path={Approutes.riders.rider} element={<SingleRider />} />
            <Route path={Approutes.customers} element={<Customers />} />
            <Route path={Approutes.stores} element={<Stores />} />
            <Route path={Approutes.superadmin.team.home} element={<Team />} />
            {/* <Route path={Approutes.superadmin.team.addteammember} element={<AddTeamMember />} /> */}
            <Route path={Approutes.superadmin.reports} element={<Reports />} />
            <Route path={Approutes.superadmin.accounts} element={<Accounts />} />
            <Route path={Approutes.superadmin.promotions.mgmt} element={<PromotionsMgmt />} />
            <Route path={Approutes.superadmin.promotions.addpromotion} element={<AddPromotion />} />
        </Route>
        <Route path={Approutes.login} element={user && authenticated ? <Navigate to={Approutes.dashboard} /> : <Login />} />
        {/* <Route path={Approutes.forgotpassword} element={<ForgotPassword />} />
        <Route path={Approutes.activateaccount} element={<ActivateAccount />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
