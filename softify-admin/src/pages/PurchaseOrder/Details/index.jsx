import { DetailsSection, Container, Left, Right, Steps, Step, LocationSelect, Select, Option, ItemsList, Head, List, Item, ButtonOptions, Approve, Cancel, RightTop, RightBottom } from "./details.styles";
import {Pageheader } from "../../../components";
import { CustomButton } from "../../../ui";
import { Checklist } from "../../../assets/svgs";
import { Oreos } from "../../../assets/imgs";

const Details = () => {
    return (  
        <DetailsSection>
            <Pageheader title='purchase order' buttonText='print' />

            <Container>
                <Left>
                    <Steps>
                        <Step>
                            <h3>Step 1 - Inbound PO</h3>

                            <div>
                                <p>Task</p>

                                <CustomButton primary>verify product</CustomButton>
                            </div>
                        </Step>
                        <Step>
                            <h3>Step 2</h3>

                            <div>
                                <p>Task</p>

                                <CustomButton disabled>verify quantity</CustomButton>
                            </div>
                        </Step>
                        <Step>
                            <h3>Step 3</h3>

                            <div>
                                <p>Task</p>

                                <LocationSelect>
                                    <Select disabled>
                                        <Option>Select Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                        <Option>Location</Option>
                                    </Select>
                                </LocationSelect>
                            </div>
                        </Step>
                    </Steps>

                    <ItemsList>
                        <Head>Product list</Head>

                        <List>
                            <Item>
                                <img src={Oreos} alt="oreos" />

                                <div>
                                    <p>Oreos Milk Cookies</p>
                                    <span>200 g</span>
                                    <span>Product No: 09838</span>
                                </div>

                                <span className="qty">X 200</span>
                            </Item>

                            <Checklist />
                        </List>
                    </ItemsList>

                    <ButtonOptions>
                        <Approve>approve</Approve>
                        <Cancel>cancel</Cancel>
                    </ButtonOptions>
                </Left>

                <Right>
                    <RightTop>
                        <p>PO details</p>

                        <div>
                            <span>status</span>
                            <p className="inbound">inbound</p>
                        </div>
                    </RightTop>


                    <RightBottom>
                        <div>
                            <p>Purchase ID</p>
                            <span>#S23-00001</span>
                        </div>
                        <div>
                            <p>Vendor</p>
                            <span>Ikenne Chuku Limited</span>
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
                    </RightBottom>
                </Right>
            </Container>
        </DetailsSection>
    );
}
 
export default Details;