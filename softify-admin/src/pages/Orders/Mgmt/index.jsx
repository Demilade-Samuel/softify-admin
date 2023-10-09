import { Container, MgmtSection, Statuses, Status, Loading, ErrorMessage } from "./mgmt.styles";
import {OrdersTable, Pageheader} from "../../../components";
import { useState } from "react";
import { useOrders } from "../../../hooks";
import {ImSpinner2} from 'react-icons/im'

const Mgmt = () => {
    const [tabIndex, setTabIndex] = useState('all orders')
    const {isAllOrdersLoading, allOrdersData , allOrdersError, isAllOrdersError, isAllOrdersFetching, isPendingOrdersLoading, pendingOrdersData, isPendingOrdersError, pendingOrdersError, isCancelledOrdersLoading, cancelledOrdersData, isCancelledOrdersError, cancelledOrdersError, isActiveOrdersLoading, isActiveOrdersError, activeOrdersData, activeOrdersError, isDeliveredOrdersLoading, deliveredOrdersData, deliveredOrdersError, isDeliveredOrdersError} = useOrders()

    const changeDateFormat = (date) => {
        let year = date.slice(0,4)
        let month = date.slice(5,7)
        let day = date.slice(8,10)

        return `${day}/${month}/${year} `
    }


    let allOrders 
    let activeOrders
    let cancelledOrders
    let deliveredOrders
    let pendingOrders

    allOrders = allOrdersData?.data.map((order, index) => {
        return {
            key: (index + 1).toString(),
            orderID: order.orderId.slice(0,11),
            customer: order.customer ? order.customer.firstName[0].toUpperCase() + order.customer.firstName.slice(1) + ' ' + order.customer.lastName[0].toUpperCase() + order.customer.lastName.slice(1) : '',
            amount: '₦' + order.total,
            payment: order.paymentStatus === 'pending' ? 'not paid' : order.paymentStatus === 'successful' ? 'paid' : '',
            assigned: order.riderAssigned ?  order.riderAssigned.firstName[0].toUpperCase() + order.riderAssigned.firstName.slice(1) + ' ' + order.riderAssigned.lastName[0].toUpperCase() + order.riderAssigned.lastName.slice(1) : 'No rider',
            date: changeDateFormat(order.dateCreated.slice(0,10)),
            orderStatus: order.orderStatus === 'accepted' ? 'active' : order.orderStatus === 'rejected' ? 'cancelled' : order.orderStatus === 'pending' ? order.orderStatus : ''

        }
    })

    cancelledOrders = cancelledOrdersData?.data.map((order, index) => {
        return {
            key: (index + 1).toString(),
            orderID: order.orderId.slice(0,11),
            customer: order.customer ? order.customer.firstName[0].toUpperCase() + order.customer.firstName.slice(1) + ' ' + order.customer.lastName[0].toUpperCase() + order.customer.lastName.slice(1) : '',
            amount: '₦' + order.total,
            payment: order.paymentStatus === 'pending' ? 'not paid' : order.paymentStatus === 'successful' ? 'paid' : '',
            assigned: order.riderAssigned ?  order.riderAssigned.firstName[0].toUpperCase() + order.riderAssigned.firstName.slice(1) + ' ' + order.riderAssigned.lastName[0].toUpperCase() + order.riderAssigned.lastName.slice(1) : 'No rider',
            date: changeDateFormat(order.dateCreated.slice(0,10)),
            orderStatus: order.orderStatus === 'rejected' ? 'cancelled' : ''            
        }
    })

    activeOrders = activeOrdersData?.data.map((order, index) => {
        return {
            key: (index + 1).toString(),
            orderID: order.orderId.slice(0,11),
            customer: order.customer ? order.customer.firstName[0].toUpperCase() + order.customer.firstName.slice(1) + ' ' + order.customer.lastName[0].toUpperCase() + order.customer.lastName.slice(1) : '',
            amount: '₦' + order.total,
            payment: order.paymentStatus === 'pending' ? 'not paid' : order.paymentStatus === 'successful' ? 'paid' : '',
            assigned:  order.riderAssigned ?  order.riderAssigned.firstName[0].toUpperCase() + order.riderAssigned.firstName.slice(1) + ' ' + order.riderAssigned.lastName[0].toUpperCase() + order.riderAssigned.lastName.slice(1) : 'No rider',
            date: changeDateFormat(order.dateCreated.slice(0,10)),
            orderStatus: order.orderStatus === 'accepted' ? 'active' : ''            
        }
    })

    deliveredOrders = deliveredOrdersData?.data.map((order, index) => {
        return {
            key: (index + 1).toString(),
            orderID: order.orderId.slice(0,11),
            customer: order.customer ? order.customer.firstName[0].toUpperCase() + order.customer.firstName.slice(1) + ' ' + order.customer.lastName[0].toUpperCase() + order.customer.lastName.slice(1) : '',
            amount: '₦' + order.total,
            payment: order.paymentStatus === 'pending' ? 'not paid' : order.paymentStatus === 'successful' ? 'paid' : '',
            assigned: order.riderAssigned ?  order.riderAssigned.firstName[0].toUpperCase() + order.riderAssigned.firstName.slice(1) + ' ' + order.riderAssigned.lastName[0].toUpperCase() + order.riderAssigned.lastName.slice(1) : 'No rider',
            date: changeDateFormat(order.dateCreated.slice(0,10)),
            orderStatus: order.orderStatus   
        }
    })

    pendingOrders = pendingOrdersData?.data.map((order, index) => {
        return {
            key: (index + 1).toString(),
            orderID: order.orderId.slice(0,11),
            customer: order.customer ? order.customer.firstName[0].toUpperCase() + order.customer.firstName.slice(1) + ' ' + order.customer.lastName[0].toUpperCase() + order.customer.lastName.slice(1) : '',
            amount: '₦' + order.total,
            payment: order.paymentStatus === 'pending' ? 'not paid' : order.paymentStatus === 'successful' ? 'paid' : '',
            assigned: order.riderAssigned ?  order.riderAssigned.firstName[0].toUpperCase() + order.riderAssigned.firstName.slice(1) + ' ' + order.riderAssigned.lastName[0].toUpperCase() + order.riderAssigned.lastName.slice(1) : 'No rider',
            date: changeDateFormat(order.dateCreated.slice(0,10)),
            orderStatus: order.orderStatus    
        }
    })

    return (  
        <MgmtSection>
            <Pageheader title='order management' buttonText='export'/>

            <Container>
                {
                    (!isAllOrdersLoading && !isAllOrdersError) || (!isAllOrdersFetching && !isAllOrdersError) ?
                    <>
                        <Statuses>
                            <Status className={`${tabIndex === 'pending' ? 'tab-active' : ''}`}  onClick={() => setTabIndex('pending')}>Pending</Status>
                            <Status className={`${tabIndex === 'active' ? 'tab-active' : ''}`} onClick={() => setTabIndex('active')}>Active</Status>
                            <Status className={`${tabIndex === 'delivered' ? 'tab-active' : ''}`} onClick={() => setTabIndex('delivered')}>Delivered</Status>
                            <Status className={`${tabIndex === 'cancelled' ? 'tab-active' : ''}`} onClick={() => setTabIndex('cancelled')}>Cancelled</Status>
                            <Status className={`${tabIndex === 'all orders' ? 'tab-active' : ''}`} onClick={() => setTabIndex('all orders')}>All Orders</Status>
                        </Statuses>

                        {  tabIndex === 'all orders' ?
                                <OrdersTable tabindex={tabIndex} orders={allOrders} /> :
                            (tabIndex === 'pending' && !isPendingOrdersLoading && !isPendingOrdersError) ? 
                                <OrdersTable tabindex={tabIndex} orders={pendingOrders} /> :
                            (tabIndex === 'pending' && isPendingOrdersLoading && !isPendingOrdersError) ?
                                <Loading>
                                    <p>Please wait...</p>
                                    <ImSpinner2  size={30}/>
                                </Loading> :
                            (tabIndex === 'pending' && !isPendingOrdersLoading && isPendingOrdersError) ?
                                <ErrorMessage>
                                    <p>{pendingOrdersError.response.data.message}</p>
                                </ErrorMessage> :                            
                            (tabIndex === 'active' && !isActiveOrdersLoading && !isActiveOrdersError ) ?
                                <OrdersTable tabindex={tabIndex} orders={activeOrders} /> :
                            (tabIndex === 'active' && isActiveOrdersLoading && !isActiveOrdersError ) ?
                                <Loading>
                                    <p>Please wait...</p>
                                    <ImSpinner2  size={30}/>
                                </Loading> : 
                            (tabIndex === 'active' && !isActiveOrdersLoading && isActiveOrdersError ) ?
                                <ErrorMessage>
                                    <p>{activeOrdersError.response.data.message}</p>
                                </ErrorMessage> :                      
                            (tabIndex === 'delivered' && !isDeliveredOrdersLoading && !isDeliveredOrdersError ) ? 
                                <OrdersTable tabindex={tabIndex} orders={deliveredOrders} /> :
                            (tabIndex === 'delivered' && isDeliveredOrdersLoading && !isDeliveredOrdersError ) ?
                                <Loading>
                                    <p>Please wait...</p>
                                    <ImSpinner2  size={30}/>
                                </Loading> :  
                            (tabIndex === 'delivered' && !isDeliveredOrdersLoading && isDeliveredOrdersError ) ?
                                <ErrorMessage>
                                    <p>{deliveredOrdersError.response.data.message}</p>
                                </ErrorMessage> :
                            (tabIndex === 'cancelled' && !isCancelledOrdersLoading && !isCancelledOrdersError)  ?
                                <OrdersTable tabindex={tabIndex} orders={cancelledOrders} /> :
                            (tabIndex === 'cancelled' && isCancelledOrdersLoading && !isCancelledOrdersError) ?
                                <Loading>
                                    <p>Please wait...</p>
                                    <ImSpinner2  size={30}/>
                                </Loading> :
                            (tabIndex === 'cancelled' && !isCancelledOrdersLoading && isCancelledOrdersError) ?
                                <ErrorMessage>
                                    <p>{cancelledOrdersError.response.data.message}</p>
                                </ErrorMessage> :
                            null
                        }
                    </> :
                    (isAllOrdersLoading && !isAllOrdersError) || (isAllOrdersFetching && !isAllOrdersError) ?
                        <Loading>
                            <p>Please wait...</p>
                            <ImSpinner2  size={30}/>
                        </Loading> :
                    (!isAllOrdersLoading && isAllOrdersError) || (isAllOrdersFetching && !isAllOrdersError) ?
                        <ErrorMessage>
                            <p>{allOrdersError.response.data.message}</p>
                        </ErrorMessage> : 
                    null
                }
            </Container>
        </MgmtSection>
    )
}
 
export default Mgmt;