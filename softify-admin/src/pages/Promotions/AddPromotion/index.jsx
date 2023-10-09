import { AddPromotionSection, Container, Type, All, New, AddPromotionForm, Inputs, PromoCodeName, PromoCodeDesc, GridThree, PromoDiscountCode, PromoDiscountCodeTop, MinimumBasketValue, MaximumDiscount, GridTwo, TotalVouchers, RedeemsAllowed, ValidTill, Buttons, Save, Cancel } from "./addnewpromotion.styles";
import {Pageheader} from '../../../components';
import { useState } from "react";
import { QuestionMark } from "../../../assets/svgs";
import { useNavigate } from "react-router-dom";
import { Approutes } from "../../../constants";
import { FormInput } from "../../../ui";

const AddPromotion = () => {
    const [type, setType] = useState('all users')
    const [promoCodeName, setPromoCodeName] = useState('')
    const [promoCodeDesc, setPromoCodeDesc] = useState('')
    const [promoCodeDiscount, setPromoCodeDiscount] = useState('')
    const [discountType, setDiscountType] = useState('%')
    const [minimumBasketValue, setMinimumBasketValue] = useState('')
    const [maximumDiscount, setMaximumDiscount] = useState('')
    const [totalNumberOfVouchers, setTotalNumberOfVouchers] = useState('')
    const [redeemsAllowed, setRedeemsAllowed] = useState('')
    const [validTill, setValidTill] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPromotion = {
            type,
            promoCodeName,
            promoCodeDesc,
            promoCodeDiscount : discountType === '%' ? promoCodeDiscount + discountType : discountType + promoCodeDiscount,
            minimumBasketValue,
            totalNumberOfVouchers,
            redeemsAllowed,
            validTill
        }

        console.log(newPromotion)

        setType('all users')
        setPromoCodeName('')
        setPromoCodeDesc('')
        setPromoCodeDiscount('')
        setDiscountType('%')
        setMinimumBasketValue('')
        setMaximumDiscount('')
        setTotalNumberOfVouchers('')
        setRedeemsAllowed('')
        setValidTill('')

        if(newPromotion){
            navigate(Approutes.superadmin.promotions.mgmt)
        }
    }

    const handleCancel = () => {
        setType('all users')
        setPromoCodeName('')
        setPromoCodeDesc('')
        setPromoCodeDiscount('')
        setDiscountType('%')
        setMinimumBasketValue('')
        setMaximumDiscount('')
        setTotalNumberOfVouchers('')
        setRedeemsAllowed('')
        setValidTill('')

        navigate(-1)
    }


    return (  
        <AddPromotionSection>
            <Pageheader title='promotions management' />

            <Container>
                <AddPromotionForm action="#" onSubmit={(e) => handleSubmit(e)}>
                    <Inputs>
                        <h2>Add A Promotion</h2>
                        
                        <Type>
                            <All><div className={`${type === 'all users' ? 'type-active' : ''}`} onClick={() => setType('all users')}></div> <span>For all users</span></All>
                            <New><div className={`${type === 'new users only' ? 'type-active' : ''}`} onClick={() => setType('new users only')}></div> <span>For new users only</span></New>
                        </Type>

                        <PromoCodeName>
                            <FormInput labelName='Promo code name*' name='promo-code-name' id='promo-code-name' htmlFor='promo-code-name' type='text' required autoComplete='off' value={promoCodeName} setValue={setPromoCodeName} questionMark /> 
                        </PromoCodeName>    

                        <PromoCodeDesc>
                            <FormInput labelName='Promo code description*' name='promo-code-desc' id='promo-code-desc' htmlFor='promo-code-desc' type='text' required autoComplete='off' value={promoCodeDesc} setValue={setPromoCodeDesc} questionMark /> 
                        </PromoCodeDesc>

                        <GridThree>
                            <PromoDiscountCode>
                                <PromoDiscountCodeTop>
                                    <p>Promo code discount*</p>   
                                    <div className="promo-type">
                                        <div className="percent">
                                            <div className={`${discountType === '%' ? 'type-active' : ''}`} onClick={() => setDiscountType('%')}></div>
                                            <span>%</span>
                                        </div>

                                        <div className="value">
                                            <div className={`${discountType === '₦' ? 'type-active' : ''}`} onClick={() => setDiscountType('₦')}></div> 
                                            <span>Value</span></div>
                                    </div>
                                </PromoDiscountCodeTop>

                                <FormInput name='promo-code-discount' id='promo-code-discount' htmlFor='promo-code-discount' type='text' required autoComplete='off' value={promoCodeDiscount} setValue={setPromoCodeDiscount} /> 
                            </PromoDiscountCode>

                            <FormInput labelName='Minimum basket value*' name='minimum-basket-value' id='minimum-basket-value' htmlFor='minimum-basket-value' type='text' required autoComplete='off' value={minimumBasketValue} setValue={setMinimumBasketValue} /> 

                            <FormInput labelName='Maximum discount*' name='maximum-discount' id='maximum-discount' htmlFor='maximum-discount' type='text' required autoComplete='off' value={maximumDiscount} setValue={setMaximumDiscount} /> 
                        </GridThree>


                        <GridTwo>
                            <FormInput labelName='Total number of vouchers*' name='total-vouchers' id='total-vouchers' htmlFor='total-vouchers' type='text' required autoComplete='off' value={totalNumberOfVouchers} setValue={setTotalNumberOfVouchers} /> 

                            <FormInput labelName='No of redeems allowed*' name='redeems-allowed' id='redeems-allowed' htmlFor='redeems-allowed' type='text' required autoComplete='off' value={redeemsAllowed} setValue={setRedeemsAllowed} /> 
                        </GridTwo>

                        <ValidTill>
                            <label htmlFor="valid-till">
                            <p>Valid till*</p>
                            <input type="date" name="valid-till" id="valid-till" value={validTill} onChange={(e) => setValidTill(e.target.value)} required />
                            </label>
                        </ValidTill>
                    </Inputs>

                    <Buttons>
                        <Save type='submit'>Save</Save>



                        <Cancel onClick={() => handleCancel()}>Cancel</Cancel>
                    </Buttons>
                </AddPromotionForm>
            </Container>
        </AddPromotionSection>
    );
}
 
export default AddPromotion;