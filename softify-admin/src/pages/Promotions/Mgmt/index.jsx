import { Container, MgmtSection, Top, Left, Right, Second, Statuses, Status, Cards, Card, CardTop, Percent, Buttons, EditButton, DeleteButton, List, Expires, User, Date, Loading, ErrorMessage } from "./mgmt.styles";
import {Pageheader} from "../../../components";
import { CustomButton, Search } from "../../../ui";
import {Grid, ChevronDown, ShoppingStoreDiscountPercent, BookmarkTag, Edit, Trash, Calendar} from '../../../assets/svgs';
import { Link } from "react-router-dom";
import { Approutes } from "../../../constants";
import { useState } from "react";
import { useRewards } from "../../../hooks";
import {ImSpinner2} from 'react-icons/im'

const Mgmt = () => {
    const [promotion, searchPromotion] = useState('')
    const [status, setStatus] = useState('active')
    const { rewardsData, isLoading, isFetching, isError, error} = useRewards()

    return (  
        <MgmtSection>
            <Pageheader title='promotions' />
            
            <Container>
                {
                    (!isLoading && !isError) || (!isFetching && !isError) ?
                        <>
                            <Top>
                                <Left>
                                    <p>all promotions </p>
                                    <ChevronDown />
                                </Left>

                                <Right>
                                    <User htmlFor="usertype">
                                        <Calendar />
                                        <span>User Type</span>
                                        <select name="usertype" id="usertype">
                                            <option value="all" defaultValue>All</option>
                                            <option value="all" >All</option>
                                            <option value="all" >All</option>
                                            <option value="all" >All</option>
                                        </select>
                                    </User>

                                    <Date htmlFor="date">
                                        <span>Date</span>
                                        <input type="date" name="date" id="date" />
                                    </Date>
                                </Right>
                            </Top>

                            <Second>
                                <Left>
                                    <Search placeholder='Search promotions...' value={promotion}
                                    setValue={searchPromotion} />
                                </Left>

                                <Right>
                                    <Link to={Approutes.superadmin.promotions.addpromotion}><CustomButton primary='true' left icon='+'>Add Promotion</CustomButton></Link>
                
                                    <Grid />
                                </Right>
                            </Second>

                            <Statuses>
                                <Status className={`${status === 'active' ? 'active' : ''}`} onClick={() => setStatus('active')}>Active</Status>
                                <Status className={`${status === 'pending' ? 'active' : ''}`} onClick={() => setStatus('pending')}>Pending</Status>
                                <Status className={`${status === 'delivered' ? 'active' : ''}`} onClick={() => setStatus('delivered')}>Delivered</Status>
                                <Status className={`${status === 'cancelled' ? 'active' : ''}`} onClick={() => setStatus('cancelled')}>Cancelled</Status>
                                <Status className={`${status === 'all orders' ? 'active' : ''}`} onClick={() => setStatus('all orders')}>All Orders</Status>
                            </Statuses>

                            <Cards>
                                <Card>
                                    <CardTop>
                                        <ShoppingStoreDiscountPercent />
                                        <p>coupon</p>
                                    </CardTop>

                                    <Percent>20% Off</Percent>

                                    <Expires>Expires: March 24th, 2023</Expires>

                                    <Buttons>
                                        <EditButton><Edit /> <span>Edit</span></EditButton>
                                        <DeleteButton><Trash /> <span>Delete</span></DeleteButton>
                                    </Buttons>

                                    <List>
                                        <li>Valid For All Users</li>
                                        <li>Minimum Purchase Amount is ₦10,000</li>
                                        <li>Promo Quantity is 100</li>
                                    </List>   
                                </Card>

                                {
                                    rewardsData?.data.map(reward => {
                                        return (
                                            <Card key={reward._id}>
                                                <CardTop>
                                                    {reward.type === 'discount' ? <ShoppingStoreDiscountPercent /> : <BookmarkTag />}
                                                    <p>{reward.name}</p>
                                                </CardTop>
                        
                                                <Percent>{reward.type === 'discount' ? '₦' + reward.discount + ' Off': ''}</Percent>
                        
                                                <Expires>Expires: {reward.endDate.slice(0,10)}</Expires>
                        
                                                <Buttons>
                                                    <EditButton><Edit /> <span>Edit</span></EditButton>
                                                    <DeleteButton><Trash /> <span>Delete</span></DeleteButton>
                                                </Buttons>
                        
                                                <List>
                                                    <li>{reward.isAllUser ? 'Valid For All Users' : ''}</li>
                                                </List>
                                            </Card>
                                        )
                                    })
                                }
                            </Cards>                        
                        </> :
                    (isLoading && !isError) || (!isFetching && !isError) ?
                    <Loading>
                        <p>Please wait...</p>
                        <ImSpinner2  size={30}/>                        
                    </Loading> :
                    (!isLoading && isError) || (!isFetching && isError) ?
                    <ErrorMessage>
                        <p>{error.response.data.message}</p>
                    </ErrorMessage> : null
                }
            </Container>
        </MgmtSection>
    );
}
 
export default Mgmt;