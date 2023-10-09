import { AddPurchaseSection, Container, Left, Right, PurchaseOrderForm, Inputs, PurchaseIdField, PIDTop, PIDBottom, GridThree, PSDropdownContainer, TableContainer, Table, SubTotalContainer, SubTotal, SubTotalGrid, NewLine, TotalContainer, TotalTop, ShowTotal, Buttons, Cancel } from "./addpurchaseorder.styles";
import {Pageheader } from "../../../components";
import { useState } from "react";
import { QuestionMark, ChevronDown2 } from "../../../assets/svgs";
import {SearchAndSelectDropdown, FormInput, FormDropdown, CustomButton} from '../../../ui'


const AddPurchase = () => {
    const [purchaseID, setPurchaseID] = useState('');
    const [generated] = useState('false')
    const [vendor, setVendor] = useState('');
    const [poDate, setPoDate] = useState('');
    const [terms, setTerms] = useState('Due on receipt');
    const [dueDate, setDueDate] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('not paid');
    const [discount, setDiscount] = useState('0.00');
    const [shippingCost, setShippingCost] = useState('0.00');
    const [total] = useState('₦0.00');

    return (  
        <AddPurchaseSection>
            <Pageheader title='create purchase Order' />

            <Container>
                <Left>
                    <PurchaseOrderForm action='#'>
                        <Inputs>
                            <PurchaseIdField>
                                <PIDTop>
                                    <span>Purchase ID*</span>
                                    <QuestionMark />
                                </PIDTop>
                                <PIDBottom>
                                    <FormInput name='purchase-id' id='purchase-id' htmlFor='purchase-id' type='text' required autoComplete='off' value={purchaseID} setValue={setPurchaseID} />

                                    <button className={`${generated === 'false' ? '' : 'generated'}`}>Generate Purchase ID</button>
                                </PIDBottom>
                            </PurchaseIdField>

                            <SearchAndSelectDropdown formTitle='vendor' selectPlaceholder='Search or select a vendor' labelFor='vendor' inputId='vendor' inputName='vendor' showQuestionMark='true' options={[
                            {
                                code: 1,
                                name: 'Michael'
                            },
                            {
                                code: 2,
                                name: 'Juwon'
                            },
                            {
                                code: 3,
                                name: 'Frank'
                            },
                            {
                                code: 4,
                                name: 'James'
                            },
                            ]} 
                            setState={setVendor}
                            state={vendor}
                            />

                            <GridThree>
                                <FormInput labelName='PO date*' name='po-date' id='po-date' htmlFor='po-date' type='text' required autoComplete='off' value={poDate} setValue={setPoDate} placeholder='15/5/2023' QuestionMark />

                                <FormDropdown labelName='Terms' value={terms} setValue={setTerms} options={[
                                    {
                                        id: 1,
                                        option: 'Due on receipt'
                                    },
                                    {
                                        id: 2, 
                                        option: 'Due...'
                                    }
                                ]} />

                                <FormInput labelName='Due date' name='due-date' id='due-date' htmlFor='due-date' type='text' required autoComplete='off' value={dueDate} setValue={setDueDate} placeholder='21/5/2023' />
                            </GridThree>

                            <PSDropdownContainer>
                                    <FormDropdown labelName='Payment status*' value={paymentStatus} setValue={setPaymentStatus} questionMark options={[
                                        {
                                            id: 1,
                                            option: 'not paid'
                                        },
                                        {
                                            id: 2,
                                            option: 'paid'
                                        },
                                    ]} />
                            </PSDropdownContainer>
                        </Inputs>

                        <TableContainer>
                            <Table>
                                <tr>
                                    <th className="product-head">Product</th>
                                    <th className="quantity">Quantity</th>
                                    <th className="unit-price">Unit Price</th>
                                    <th className="tax">Tax</th>
                                    <th className="subtotal">Sub Total</th>
                                </tr>

                                <tr>
                                    <td className="product-data"><span>Select Product</span> <ChevronDown2 /></td>
                                    <td className="quantity-data">0</td>
                                    <td className="unitprice-data">₦0.00</td>
                                    <td className="tax-data"><span>Select Tax</span> <ChevronDown2 /></td>
                                    <td className="subtotal-data">₦0.00</td>
                                </tr>

                            </Table>

                            <NewLine>+ Add Another Line</NewLine>
                        </TableContainer>

                        <SubTotalContainer>
                            <SubTotal>
                                <h2>Sub Total</h2>

                                <SubTotalGrid>
                                    <FormDropdown labelName='Discount' value={discount} setValue={setDiscount} questionMark options={[
                                        {
                                            id: 1,
                                            option: '00.00'
                                        },
                                        {
                                            id: 2,
                                            option: '10.00'
                                        },
                                        {
                                            id: 3,
                                            option: '20.00'
                                        }
                                    ]} />

                                    <FormDropdown labelName='Shipping cost' value={shippingCost} setValue={setShippingCost} options={[
                                        {
                                            id: 1,
                                            option: '00.00'
                                        },
                                        {
                                            id: 2,
                                            option: '10.00'
                                        },
                                        {
                                            id: 3,
                                            option: '20.00'
                                        }
                                    ]} />

                                    <TotalContainer>
                                        <TotalTop><span>TOTAL</span> <QuestionMark /></TotalTop>

                                        <ShowTotal>
                                            {total}
                                        </ShowTotal>
                                    </TotalContainer>
                                </SubTotalGrid>
                            </SubTotal>

                            <NewLine>+ Add Another Line</NewLine>
                        </SubTotalContainer>

                        <Buttons>
                            <CustomButton type='submit' primary='true'>Save</CustomButton>
                            <CustomButton secondary='true'>Save &amp; Add Another</CustomButton>
                            <Cancel>Cancel</Cancel>
                        </Buttons>
                    </PurchaseOrderForm>
                </Left>

                <Right>

                </Right>
            </Container>
        </AddPurchaseSection>
    );
}
 
export default AddPurchase;