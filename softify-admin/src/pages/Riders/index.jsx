import {RidersSection, Container, Statuses, Status, Top, Left, Right, EmptyState, Error, Loading} from './riders.styles';
import {Pageheader, RidersTable} from '../../components';
import { useState } from 'react';
import { Search, CustomButton } from '../../ui';
import { Print } from '../../assets/svgs';
import { useRiders } from '../../hooks';
import {ImSpinner2} from 'react-icons/im'

const Riders = () => {
    const [status, setStatus] = useState('active')
    const [rider, searchRider] = useState('')
    const {ridersData, isLoading, isError, isFetching, error} = useRiders()

    const changeDateFormat = (date) => {
        let year = date.slice(0,4)
        let month = date.slice(5,7)
        let day = date.slice(8,10)

        return `${day}/${month}/${year} `
    }

    let riders = []

    riders = ridersData?.data.map((rider, index) => {
        return {
            key: rider._id,
            id: (index + 1),
            name: rider.firstName[0].toUpperCase() + rider.firstName.slice(1) + ' ' + rider.lastName[0].toUpperCase() + rider.lastName.slice(1),
            email: rider.email,
            phone: rider.addressInformation ? rider.addressInformation.mainPhoneNumber : 'No saved number',
            joined: changeDateFormat(rider.dateJoined.slice(0,10)),
            orders: `${rider.noOfDelivery}`,
            verified: rider.isAllVerified ? 'yes' : 'no' ,
            actions: '',
            status: rider.status
        }
    })

    const filterRiders = () => {
        let filteredRiders = []

        if(riders){
            filteredRiders = [...riders]
        }

        filteredRiders = filteredRiders?.filter(r => {
            return r.status.toLowerCase().indexOf(status.trim().toLowerCase()) !== -1
        })

        return filteredRiders
    }

    const searchRiders = () => {
        let searchedRiders = []

        if(filterRiders()){
            searchedRiders = [...filterRiders()]
        }

        searchedRiders = searchedRiders?.filter(r => {
            return (r.name.toLowerCase().indexOf(rider.trim().toLowerCase()) !== -1) || (r.email.toLowerCase().indexOf(rider.trim().toLowerCase()) !== -1) ||
            (r.phone.toLowerCase().indexOf(rider.trim().toLowerCase()) !== -1) || (r.orders.toLowerCase().indexOf(rider.trim().toLowerCase()) !== -1) || (r.joined.toLowerCase().indexOf(rider.trim().toLowerCase()) !== -1)
        })


        return searchedRiders
    }

    return (  
        <RidersSection>
            <Pageheader title='riders' />

            <Container>
                Riders
                {/* {
                    (!isLoading && !isError && riders) || (!isFetching && !isError && riders) ?
                        <>
                            <Statuses>
                                <Status className={`${status === 'active' ? 'active' : ''}`} onClick={() => setStatus('active')}>Active</Status>
                                <Status className={`${status === 'inactive' ? 'active' : ''}`} onClick={() => setStatus('inactive')}>Inactive</Status>
                                <Status className={`${status === 'suspended' ? 'active' : ''}`} onClick={() => setStatus('suspended')}>Suspended</Status>
                            </Statuses>
        
                            <Top>
                                <Left>
                                    <p>All Riders</p>
                                </Left>

                                <Right>
                                    <Search placeholder='Search riders...' value={rider} setValue={searchRider} />

                                    <CustomButton primary='true' left icon={<Print /> }><p>print</p></CustomButton>
                                </Right>
                            </Top>

                            <RidersTable riders={searchRiders()} />
                        </> : 
                    (!isLoading && !isError && !riders) || (!isFetching && !isError && !riders) ?
                        <EmptyState>
                            <h2>There are currently no registered riders</h2>
                            <p>Newly registered riders will show up here</p>
                        </EmptyState> :
                    (isLoading && !isError) || (isFetching && !isError) ?
                    <Loading>
                        <p>Please wait ...</p>
                        <ImSpinner2 size={30} />
                    </Loading>:
                    (!isLoading && isError && riders) || (!isFetching && isError) ?
                    <Error>
                        <p>{error.response.data.message}</p>
                    </Error> : null
                } */}
            </Container>
        </RidersSection>
    );
}
 
export default Riders;