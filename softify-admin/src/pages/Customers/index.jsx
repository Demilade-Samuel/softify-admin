import { Container, CustomersSection, Top, Left, Right, Loading, Error } from "./customers.styles";
import {CustomersTable, Pageheader} from "../../components";
import { Print } from "../../assets/svgs";
import {CustomButton, Search} from '../../ui';
import { useCustomers } from "../../hooks";
import {ImSpinner2} from 'react-icons/im'
import { useState } from "react";

const Customers = () => {
    const { isLoading, isError, isFetching, error, customersData} = useCustomers()
    const [customer, searchCustomer] = useState('')

    const changeDateFormat = (date) => {
        let year = date.slice(0,4)
        let month = date.slice(5,7)
        let day = date.slice(8,10)

        return `${day}/${month}/${year} `
    }

    let customers

    customers = 
    customersData?.data.map((customer, index) => ({
        key: (index + 1).toString(),
        id: (customer._id.slice(0, 8)).toString(),
        name: customer.firstName[0].toUpperCase() + customer.firstName.slice(1) + ' ' + customer.lastName[0].toUpperCase() + customer.lastName.slice(1),
        email: customer.email,
        phone: customer.phoneNumber ? customer.phoneNumber : '',
        joined: changeDateFormat(customer.dateJoined.slice(0, 10)),
        orderNo: customer._id.slice(0, 8),
        verified: customer.isMailVerified ? 'yes' : 'no'
    }))

    const searchCustomers = () => {
        let searchedVendors = []

        if(customers){
            searchedVendors = [...customers]
        }

        searchedVendors = searchedVendors?.filter(c => {
            return (c.name.toLowerCase().indexOf(customer.trim().toLowerCase()) !== -1) || (c.email.toLowerCase().indexOf(customer.trim().toLowerCase()) !== -1) || (c.phone.toLowerCase().indexOf(customer.trim().toLowerCase()) !== -1) || (c.joined.toLowerCase().indexOf(customer.trim().toLowerCase()) !== -1) 
        })

        return searchedVendors
    }

    return (  
        <CustomersSection>
            <Pageheader title='customers' />

            <Container>
                {
                    (!isLoading && !isError) || (!isFetching && !isError) ?
                    <>
                        <Top>
                            <Left>
                                <p>All Customers</p>
                            </Left>

                            <Right>
                                <Search placeholder='Search customers...' value={customer} setValue={searchCustomer} />
                                <CustomButton primary='true' left icon={<Print /> }><p>print</p></CustomButton>
                            </Right>
                        </Top>

                        <CustomersTable customers={searchCustomers()} />
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
        </CustomersSection>
    );
}
 
export default Customers;