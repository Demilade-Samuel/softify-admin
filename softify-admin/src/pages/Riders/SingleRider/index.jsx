import { useState } from "react";
import { RiderAvatar } from "../../../assets/imgs";
import { Eye, File, Star, Trash } from "../../../assets/svgs";
import { Pageheader } from "../../../components";
import { SingleRiderSection, Container, Top, Name, Suspend, Profile, ProfileLeft, ProfileRight, ImageContainer, Rating, RiderName, RiderEmail, RiderCredentials, RiderLocation, RiderJoined, RiderSuccessfulOrders, RiderInfos, RiderInfo, RiderInfoDetails, RiderAddress, RiderState, RiderCity, RiderPostal, RiderPOA, RiderMobile, LicenseNumber, ExpiryDate, LicenseType, VehicleType, VehicleBrand, PlateNumber, Insurance, CarColour, VehicleImage, VehicleCredentials, AccountNumber, Bank, SortCode, NameOnAccount, NOKName, NOKPhone, RelationshipWithNOK, GuarantorName, GuarantorNumber, GuarantorHowLong, GuarantorPreviousWork, GuarantorPosition } from "./singlerider.styles";

const SingleRider = () => {
    const [info, setInfo] = useState('contact information')
    const [details] = useState(true)

    return (  
        <SingleRiderSection>
            <Pageheader title='Riders' />

            <Container>
                <Top>
                    <Name>Daniel Ekereme</Name>

                    <Suspend>
                        <Trash />
                        <span>Suspend</span>
                    </Suspend>
                </Top>

                <Profile>
                    <ProfileLeft>
                        <ImageContainer>
                            <img src={RiderAvatar} alt="avatar" />
                        </ImageContainer>

                        <Rating>
                            <Star />
                            <span>4.5</span>
                        </Rating>
                    </ProfileLeft>

                    <ProfileRight>
                        <RiderName>
                            <p>Rider Name</p>
                            <div>Daniel Ekereme</div>
                        </RiderName>

                        <RiderEmail>
                            <p>Email</p>
                            <div>trungkienspktnd@gamail.com</div>
                        </RiderEmail>

                        <RiderCredentials>
                            <p>Credentials</p>
                            <div>Verified</div>
                        </RiderCredentials>

                        <RiderLocation>
                            <p>Loaction</p>
                            <div>Lagos, Nigeria</div>
                        </RiderLocation>

                        <RiderJoined>
                            <p>Joined</p>
                            <div>June, 2022</div>
                        </RiderJoined>

                        <RiderSuccessfulOrders>
                            <p>Successful Orders</p>
                            <div>105</div>
                        </RiderSuccessfulOrders>
                    </ProfileRight>
                </Profile>

                <RiderInfos>
                    <RiderInfo className={`${info === 'contact information' ? 'active' : ''}`} onClick={() => setInfo('contact information')}>Contact Information</RiderInfo>
                    <RiderInfo className={`${info === 'license information' ? 'active' : ''}`} onClick={() => setInfo('license information')}>License Information</RiderInfo>
                    <RiderInfo className={`${info === 'vehicle information' ? 'active' : ''}`} onClick={() => setInfo('vehicle information')}>Vehicle Information</RiderInfo>
                    <RiderInfo className={`${info === 'bank information' ? 'active' : ''}`} onClick={() => setInfo('bank information')}>Bank Information</RiderInfo>
                    <RiderInfo className={`${info === 'guarantor details' ? 'active' : ''}`} onClick={() => setInfo('guarantor details')}>Guarantor Details</RiderInfo>
                    <RiderInfo className={`${info === 'emergency contacts' ? 'active' : ''}`} onClick={() => setInfo('emergency contacts')}>Emergency Contacts</RiderInfo>
                </RiderInfos>

                <RiderInfoDetails className={`${info === 'contact information' ? 'info-active' : ''}`}>
                    <RiderAddress>
                        <p>Address</p>
                        <div>Address: 1B Rumuola Road, Apartment 2C, Rumuokwuta, Ikeja, Lagos State</div>
                    </RiderAddress>

                    <RiderState>
                        <p>State</p>
                        <div>Lagos</div>
                    </RiderState>

                    <RiderCity>
                        <p>City</p>
                        <div>Ikeja</div>
                    </RiderCity>

                    <RiderPostal>
                        <p>Postal/zip code</p>
                        <div>32208</div>
                    </RiderPostal>

                    <RiderPOA>
                        <p>Proof of address</p>
                        <div><span>Utility_bill.Pdf</span> <File /></div>
                    </RiderPOA>

                    <RiderMobile>
                        <p>Main phone number 1</p>
                        <div>09015678902</div>
                    </RiderMobile>

                    <RiderMobile>
                        <p>Main phone number 2</p>
                        <div>08093327543</div>
                    </RiderMobile>
                </RiderInfoDetails>

                <RiderInfoDetails className={`${info === 'license information' ? 'info-active' : ''}`}>
                    <LicenseNumber>
                        <p>License number</p>
                        <div>KBH827837</div>
                    </LicenseNumber>

                    <ExpiryDate>
                        <p>Expiration date (DD|MM|YY)</p>
                        <div>12/04/2025</div>
                    </ExpiryDate>

                    <LicenseType>
                        <p>License type</p>
                        <div>Full Class</div>
                    </LicenseType>
                </RiderInfoDetails>

                <RiderInfoDetails className={`${info === 'vehicle information' ? 'info-active' : ''}`}>
                    <LicenseNumber>
                        <p>License number</p>
                        <div>KBH827837</div>
                    </LicenseNumber>

                    <ExpiryDate>
                        <p>Expiration date (DD|MM|YY)</p>
                        <div>12/04/2025</div>
                    </ExpiryDate>

                    <VehicleType>
                        <p>Vehicle type</p>
                        <div>Motorcycle</div>
                    </VehicleType>

                    <VehicleBrand>
                        <p>Vehicle brand</p>
                        <div>Toyota</div>
                    </VehicleBrand>

                    <PlateNumber>
                        <p>Plate number</p>
                        <div>KBH827837</div>
                    </PlateNumber>

                    <CarColour>
                        <p>Car colour</p>
                        <div>Black</div>

                    </CarColour>

                    <VehicleImage>
                        <p>Delivery vehicle image</p>
                        <div><span className="left">car.png</span> <span className="right"><p>2.0mb</p>  <Eye /></span></div>
                    </VehicleImage>

                    <Insurance>
                        <p>Insurance?</p>
                        <div>YES</div>
                    </Insurance>

                    <div className="full">
                        <VehicleCredentials>
                            <p>Credentials</p>
                            <div>Verified</div>
                        </VehicleCredentials>
                    </div>
                </RiderInfoDetails>

                <RiderInfoDetails className={`${info === 'bank information' ? 'info-active' : ''}`}>
                    {
                        details ?
                        <>
                            <div className="full">
                                <p className="account">Account 1</p>
                            </div>
                            <AccountNumber>
                                <p>Account number</p>
                                <div>1993774839</div>
                            </AccountNumber>

                            <Bank>
                                <p>Bank</p>
                                <div>Ecobank Nigeria</div>
                            </Bank>

                            <SortCode>
                                <p>Sort code</p>
                                <div>038843</div>
                            </SortCode>

                            <NameOnAccount>
                                <p>Name on account</p>
                                <div>Daniel Ekereme</div>
                            </NameOnAccount>

                            <div className="full">
                                <p className="account">Account 2</p>
                            </div>                 

                            <AccountNumber>
                                <p>Account number</p>
                                <div>0429838823</div>
                            </AccountNumber>

                            <Bank>
                                <p>Bank</p>
                                <div>GTBank</div>
                            </Bank>

                            <SortCode>
                                <p>Sort code</p>
                                <div>349929</div>
                            </SortCode>

                            <NameOnAccount>
                                <p>Name on account</p>
                                <div>Daniel Ekereme</div>
                            </NameOnAccount>       
                        </> :
                        <div className="no-saved-bank-details">
                            <h2>No saved bank information</h2>
                            <p>Saved bank information will show up here</p>
                        </div>
                    }
                </RiderInfoDetails>

                <RiderInfoDetails className={`${info === 'guarantor details' ? 'info-active' : ''}`}>
                    <div className="full">
                        <p className="guarantor">Guarantor 1</p>
                    </div>
                    <GuarantorName>
                        <p>Full name</p>
                        <div>Adebayo Salami</div>
                    </GuarantorName>

                    <GuarantorNumber>
                        <p>Phone number</p>
                        <div>09067813451</div>
                    </GuarantorNumber>

                    <GuarantorPreviousWork>
                        <p>Previous place of work</p>
                        <div>Oando technologies</div>
                    </GuarantorPreviousWork>

                    <GuarantorPosition>
                        <p>Position</p>
                        <div>Dispatch Rider</div>
                    </GuarantorPosition>

                    <GuarantorHowLong>
                        <p>How long rider worked there?</p>
                        <div>2 years</div>
                    </GuarantorHowLong>
                </RiderInfoDetails>

                <RiderInfoDetails className={`${info === 'emergency contacts' ? 'info-active' : ''}`}>
                    <NOKName>
                        <p>Next of Kin name</p>
                        <div>Adebayo Salami</div>
                    </NOKName>

                    <NOKPhone>
                        <p>Next of Kin phone number</p>
                        <div>09067813451</div>
                    </NOKPhone>

                    <RelationshipWithNOK>
                        <p>Relationship with Next of Kin</p>
                        <div>Father</div>
                    </RelationshipWithNOK>
                </RiderInfoDetails>
            </Container>
        </SingleRiderSection>
    );
}
 
export default SingleRider;