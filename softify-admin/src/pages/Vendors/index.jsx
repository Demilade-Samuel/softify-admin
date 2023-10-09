import { VendorsSection, Container, Top, Left, Right, EmptyState, Loading, Error } from "./vendors.styles";
import {Pageheader, VendorsTable} from "../../components";
import { ChevronDown, Sort } from "../../assets/svgs";
import {CustomButton, Search } from '../../ui';
import { Link } from "react-router-dom";
import { Approutes } from "../../constants";
import { useVendors } from "../../hooks";
import {ImSpinner2} from 'react-icons/im'
import { useState } from "react";

const Vendors = () => {
    const { vendorsData, isLoading, isError, isFetching, error} = useVendors()
    const [vendor, searchVendor] = useState('')

    let vendors
    
    vendors = vendorsData?.data.map((vendor, index) => {
        return {
            key: (index + 1).toString(),
            name: vendor.businessName ? vendor.businessName : '',
            primaryContact: vendor.businessRepresentative ? vendor.businessRepresentative.firstName[0].toUpperCase() + vendor.businessRepresentative.firstName.slice(1) + ' ' + vendor.businessRepresentative.lastName[0].toUpperCase() + vendor.businessRepresentative.lastName.slice(1) : '',
            email: vendor.email,
            workPhone: vendor.phoneNumber,
            payables: '',
            action: ''
        }
    })

    const searchVendors = () => {
        let searchedVendors = []

        if(vendors){
            searchedVendors = [...vendors]
        }

        searchedVendors = searchedVendors?.filter(v => {
            return (v.name.toLowerCase().indexOf(vendor.trim().toLowerCase()) !== -1) || (v.primaryContact.toLowerCase().indexOf(vendor.trim().toLowerCase()) !== -1) || (v.email.toLowerCase().indexOf(vendor.trim().toLowerCase()) !== -1) || (v.workPhone.toLowerCase().indexOf(vendor.trim().toLowerCase()) !== -1)
        })

        return searchedVendors
    }

    return (  
        <VendorsSection>
            <Pageheader title='vendors' />

            <Container>
                {
                    (!isLoading && !isError) || (!isFetching && !isError) ?
                    (vendorsData && vendorsData?.data.length !== 0) ? 
                        <>
                            <Top>
                                <Left>
                                    <p>All Vendors</p>
    
                                    <ChevronDown />
                                </Left>
    
                                <Right>
                                    <Search value={vendor} setValue={searchVendor} placeholder='Search...' />
    
                                    <Link to={Approutes.inventory.vendors.addvendor}><CustomButton primary='true' left icon='+'>Add New Vendor</CustomButton></Link>
                                    
                                    <Sort />
                                </Right>
                            </Top>
    
                            <VendorsTable vendors={searchVendors()} />
                        </>
                        : 
                        <>
                            <EmptyState>
                                <h2>There are currently no vendors saved</h2>
                                <p>You can add and manage vendors here.</p>
                                <Link to={Approutes.inventory.vendors.addvendor}><CustomButton primary='true'>Add A New Vendor</CustomButton></Link>
                                <div>+ Import Vendor List</div>
                            </EmptyState>
                        </> : (isLoading && !isError) || (isFetching && !isError) ?
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
        </VendorsSection>
    );
}
 
export default Vendors;