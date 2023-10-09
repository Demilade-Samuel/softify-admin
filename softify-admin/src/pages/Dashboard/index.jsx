import {Pageheader} from "../../components";
import { DashboardSection, Container, First, Loading, EmptyOrders, Error, Cards, Card, Top, Third, Statuses, Status, Orders, Order, OrderTop, OrderBottom, OrderStatus, Line, Left, Right } from "./dashboard.styles";
import { Filter, Pending, Vehicle, TimedParcel, ShopStore } from "../../assets/svgs";
import { useState } from "react";
import {useDashboard} from '../../hooks'
import {ImSpinner2} from 'react-icons/im'

const Dashboard = () => {
    const {isLoading, error, dashboardData, isError, isFetching } = useDashboard()
    const [tabIndex, setTabIndex] = useState('pending');

    const changeDateFormat = (date) => {
        let year = date.slice(0,4)
        let month = date.slice(5,7)
        let day = date.slice(8,10)

        return `${day}/${month}/${year} `
    }

    const convertTo12hrsFormat = (time) => {
        const [hours, minutes] = time.split(':')

        const parsedHours = parseInt(hours)

        const peroid = parsedHours === 24 ? 'AM' : parsedHours >= 12 ? 'PM' : 'AM'

        let twelveHour =  parsedHours % 12
        
        twelveHour = twelveHour === 0 ? 12 : twelveHour 

        const newTime = `${twelveHour}:${minutes} ${peroid}`

        return newTime
    }

    const filterOrders = () => {
        let orders = []
        if(dashboardData){
            orders = [...dashboardData?.data.order]
        }
        orders = orders.filter(order => {
            return order.orderStatus.toLowerCase().indexOf(tabIndex.toLowerCase()) !== -1
        })

        return orders
    }

    return (  
        <DashboardSection>
            <Pageheader title='dashboard' />

            <Container>
                {
                    (!isLoading && !isError) || (!isFetching && !isError) ?
                    <>
                        <First>
                            <span>today</span>
                            <Filter />
                        </First>
                        <Cards>
                            <Card color='#FFD700'>
                                <Top>
                                    <p>total orders</p>

                                    <Pending />
                                </Top>

                                <h1>{dashboardData?.data.totalOrder}</h1>
                            </Card>
                            <Card color='#CC5500'>
                                <Top>
                                    <p>pending orders</p>

                                    <Vehicle />
                                </Top>

                                <h1>{dashboardData?.data.pendingOrders}</h1>
                            </Card>
                            <Card color='#3E5F31'>
                                <Top>
                                    <p>active orders</p>

                                    <TimedParcel />
                                </Top>

                                <h1>{dashboardData?.data.activeOrders.length}</h1>
                            </Card>
                            <Card color='#BABABA'>
                                <Top>
                                    <p>total customers</p>

                                    <ShopStore />
                                </Top>

                                <h1>{dashboardData?.data.totalCustomers}</h1>
                            </Card>
                        </Cards>

                        <Third>
                            <h3>orders</h3>

                            <Statuses>
                                <Status className={`${tabIndex === 'pending' ? 'tab-active' : ''}`} onClick={() => setTabIndex('pending')}>pending</Status>
                                <Status className={`${tabIndex === 'accepted' ? 'tab-active' : ''}`} onClick={() => setTabIndex('accepted')}>accepted</Status>
                                <Status className={`${tabIndex === 'delivered' ? 'tab-active' : ''}`} onClick={() => setTabIndex('delivered')}>delivered</Status>
                                <Status className={`${tabIndex === 'rejected' ? 'tab-active' : ''}`} onClick={() => setTabIndex('rejected')}>rejected</Status>
                            </Statuses>

                            <Orders>
                                {!filterOrders().length ? 
                                <EmptyOrders>No orders here yet</EmptyOrders> :
                                
                                filterOrders()?.map(order => {
                                    return (
                                    <Order key={order._id}>
                                        <OrderTop>
                                            <div>
                                                <p>Order ID</p>
                                                <span>{order.orderId}</span>
                                            </div>
                                            <div>
                                                <p>Date</p>
                                                <span>{changeDateFormat(order.dateCreated.slice(0, 10))}</span>
                                            </div>
                                            <div>
                                                <p>Customer</p>
                                                <span>{order.customer.firstName + " " + order.customer.lastName}</span>
                                            </div>
                                            <div>
                                                <p>Amount</p>
                                                <span>₦{order.total}</span>
                                            </div>
                                            <OrderStatus orderstatus={order.orderStatus}>
                                                <p>Order Status</p>
                                                <span>{order.orderStatus}</span>
                                            </OrderStatus>
            
                                        </OrderTop>
                
                                        <Line></Line>
                
                                        <OrderBottom>
                                            <Left><p>Placed: {convertTo12hrsFormat(order.dateCreated.slice(11, 16))}</p></Left>
            
                                            <Right>
                                                <button>cancel order</button>
                                            </Right>
                                        </OrderBottom>
                                    </Order>
                                    )
                                })}
                            </Orders>
                        </Third>  
                    </> : 
                    (isLoading && !isError) || (isFetching && !isError) ? 
                    <Loading>
                        <p>Please wait...</p>
                        <ImSpinner2  size={30}/>
                    </Loading> :
                    (!isLoading && isError) || (!isFetching && isError) ? 
                    <Error>
                        <p>{error.response.data.message}</p>
                    </Error> : null
                }
            </Container>
        </DashboardSection>
    );
}
 
export default Dashboard;