import { Pageheader } from "../../../components";
import { CustomButton } from "../../../ui";
import { DetailsSection, Container, Left, Right, Top, Steps, Step, ItemsList, Head, List, Item, Dispatch, DispatchTop, DispatchBottom, Status, RightTop, RightBottom, Task } from "./details.styles";
import { Checklist } from "../../../assets/svgs";
import { Oreos, Nasco } from "../../../assets/imgs";

const Details = () => {
    return (  
        <DetailsSection>
            <Pageheader title='Order #S23-00001 Buchi Ikenna' buttonText='print' />
               
            <Container>
                <Left>
                    <Top>Assigned to: Vivian Okoche <span>Change</span></Top>

                    <Steps>
                        <Step>
                            <h3>Step 1 - Fulfil the order</h3>

                            <div>
                                <Task>Task</Task>

                                <CustomButton primary >Process</CustomButton>
                            </div>
                        </Step>
                        <Step>
                            <h3>Step 2</h3>

                            <div>
                                <Task>Task</Task>

                                <CustomButton disabled >Review</CustomButton>
                            </div>
                        </Step>
                        <Step>
                            <h3>Step 3</h3>

                            <div>
                                <Task>Task</Task>

                                <CustomButton disabled >Drop off</CustomButton>
                            </div>
                        </Step>
                    </Steps>

                    <ItemsList>
                        <Head>item list</Head>

                        <List>
                            <Item>
                                <img src={Oreos} alt="oreos" />

                                <div>
                                    <p>Oreos Milk Cookies</p>
                                    <span>Product No: 09838</span>
                                </div>

                                <span className="qty">X 2</span>
                            </Item>

                            <Checklist />
                        </List>
                        <List>
                            <Item>
                                <img src={Nasco} alt="oreos" />

                                <div>
                                    <p>Nasco Cookies</p>
                                    <span>Product No: 09838</span>
                                </div>

                                <span className="qty">X 2</span>
                            </Item>

                            <Checklist />
                        </List>
                        <List>
                            <Item>
                                <img src={Oreos} alt="oreos" />

                                <div>
                                    <p>Oreos Milk Cookies</p>
                                    <span>Product No: 09838</span>
                                </div>

                                <span className="qty">X 2</span>
                            </Item>

                            <Checklist />
                        </List>
                    </ItemsList>

                    <Dispatch>
                        <DispatchTop>
                            <p>Dispatch Details</p> 
                            <Status><span>Status</span> <p>pending</p></Status>
                        </DispatchTop>

                        <DispatchBottom>
                            <p>Tracking No - 8334532</p>
                            <p>32 Awolowo Road, Ikeja, Lagos</p> 
                            <p>Assigned To: Ayomide Bankole <span>Change</span></p> 
                        </DispatchBottom>
                    </Dispatch>
                </Left>

                <Right>
                    <RightTop>
                        <p>order details</p>

                        <div>
                            <span>status</span>
                            <p>pending</p>
                        </div>
                    </RightTop>


                    <RightBottom>
                        <div>
                            <p>Order ID</p>
                            <span>#S23-00001</span>
                        </div>
                        <div>
                            <p>Customer</p>
                            <span>Buchi Ikenna</span>
                        </div>
                        <div>
                            <p>Amount</p>
                            <span>₦39,000 </span>
                            <span className="paid">paid</span>
                        </div>
                        <div>
                            <p>Date</p>
                            <span>15/05/2023</span>
                            <span>4:50 PM</span>
                        </div>

                        <button>Cancel Order</button>
                    </RightBottom>
                </Right>
            </Container>
        </DetailsSection>
    );
}
 
export default Details;