import { Pageheader } from "../../../components";
import { AddVendorSection, Container, Left, VendorForm, Inputs, PrimaryContactLabel, GridThree, ContactContainer, GridTwo, AddressContainer, Right, Buttons, Cancel } from "./addvendor.styles";
import { QuestionMark } from "../../../assets/svgs";
import { useState } from "react";
import {SearchAndSelectDropdown, FormInput, FormTextarea, FormSelect, CustomButton} from '../../../ui';
import { useNavigate } from "react-router-dom";
import { Approutes } from "../../../constants";
import { useNewVendor } from "../../../hooks";
import { ImSpinner2 } from "react-icons/im";

const Countires = [ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"}, 
    {"name": "American Samoa", "code": "AS"}, 
    {"name": "Andorra", "code": "AD"}, 
    {"name": "Angola", "code": "AO"}, 
    {"name": "Anguilla", "code": "AI"}, 
    {"name": "Antarctica", "code": "AQ"}, 
    {"name": "Antigua and Barbuda", "code": "AG"}, 
    {"name": "Argentina", "code": "AR"}, 
    {"name": "Armenia", "code": "AM"}, 
    {"name": "Aruba", "code": "AW"}, 
    {"name": "Australia", "code": "AU"}, 
    {"name": "Austria", "code": "AT"}, 
    {"name": "Azerbaijan", "code": "AZ"}, 
    {"name": "Bahamas", "code": "BS"}, 
    {"name": "Bahrain", "code": "BH"}, 
    {"name": "Bangladesh", "code": "BD"}, 
    {"name": "Barbados", "code": "BB"}, 
    {"name": "Belarus", "code": "BY"}, 
    {"name": "Belgium", "code": "BE"}, 
    {"name": "Belize", "code": "BZ"}, 
    {"name": "Benin", "code": "BJ"}, 
    {"name": "Bermuda", "code": "BM"}, 
    {"name": "Bhutan", "code": "BT"}, 
    {"name": "Bolivia", "code": "BO"}, 
    {"name": "Bosnia and Herzegovina", "code": "BA"}, 
    {"name": "Botswana", "code": "BW"}, 
    {"name": "Bouvet Island", "code": "BV"}, 
    {"name": "Brazil", "code": "BR"}, 
    {"name": "British Indian Ocean Territory", "code": "IO"}, 
    {"name": "Brunei Darussalam", "code": "BN"}, 
    {"name": "Bulgaria", "code": "BG"}, 
    {"name": "Burkina Faso", "code": "BF"}, 
    {"name": "Burundi", "code": "BI"}, 
    {"name": "Cambodia", "code": "KH"}, 
    {"name": "Cameroon", "code": "CM"}, 
    {"name": "Canada", "code": "CA"}, 
    {"name": "Cape Verde", "code": "CV"}, 
    {"name": "Cayman Islands", "code": "KY"}, 
    {"name": "Central African Republic", "code": "CF"}, 
    {"name": "Chad", "code": "TD"}, 
    {"name": "Chile", "code": "CL"}, 
    {"name": "China", "code": "CN"}, 
    {"name": "Christmas Island", "code": "CX"}, 
    {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
    {"name": "Colombia", "code": "CO"}, 
    {"name": "Comoros", "code": "KM"}, 
    {"name": "Congo", "code": "CG"}, 
    {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
    {"name": "Cook Islands", "code": "CK"}, 
    {"name": "Costa Rica", "code": "CR"}, 
    {"name": "Cote D'Ivoire", "code": "CI"}, 
    {"name": "Croatia", "code": "HR"}, 
    {"name": "Cuba", "code": "CU"}, 
    {"name": "Cyprus", "code": "CY"}, 
    {"name": "Czech Republic", "code": "CZ"}, 
    {"name": "Denmark", "code": "DK"}, 
    {"name": "Djibouti", "code": "DJ"}, 
    {"name": "Dominica", "code": "DM"}, 
    {"name": "Dominican Republic", "code": "DO"}, 
    {"name": "Ecuador", "code": "EC"}, 
    {"name": "Egypt", "code": "EG"}, 
    {"name": "El Salvador", "code": "SV"}, 
    {"name": "Equatorial Guinea", "code": "GQ"}, 
    {"name": "Eritrea", "code": "ER"}, 
    {"name": "Estonia", "code": "EE"}, 
    {"name": "Ethiopia", "code": "ET"}, 
    {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
    {"name": "Faroe Islands", "code": "FO"}, 
    {"name": "Fiji", "code": "FJ"}, 
    {"name": "Finland", "code": "FI"}, 
    {"name": "France", "code": "FR"}, 
    {"name": "French Guiana", "code": "GF"}, 
    {"name": "French Polynesia", "code": "PF"}, 
    {"name": "French Southern Territories", "code": "TF"}, 
    {"name": "Gabon", "code": "GA"}, 
    {"name": "Gambia", "code": "GM"}, 
    {"name": "Georgia", "code": "GE"}, 
    {"name": "Germany", "code": "DE"}, 
    {"name": "Ghana", "code": "GH"}, 
    {"name": "Gibraltar", "code": "GI"}, 
    {"name": "Greece", "code": "GR"}, 
    {"name": "Greenland", "code": "GL"}, 
    {"name": "Grenada", "code": "GD"}, 
    {"name": "Guadeloupe", "code": "GP"}, 
    {"name": "Guam", "code": "GU"}, 
    {"name": "Guatemala", "code": "GT"}, 
    {"name": "Guernsey", "code": "GG"}, 
    {"name": "Guinea", "code": "GN"}, 
    {"name": "Guinea-Bissau", "code": "GW"}, 
    {"name": "Guyana", "code": "GY"}, 
    {"name": "Haiti", "code": "HT"}, 
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
    {"name": "Holy See (Vatican City State)", "code": "VA"}, 
    {"name": "Honduras", "code": "HN"}, 
    {"name": "Hong Kong", "code": "HK"}, 
    {"name": "Hungary", "code": "HU"}, 
    {"name": "Iceland", "code": "IS"}, 
    {"name": "India", "code": "IN"}, 
    {"name": "Indonesia", "code": "ID"}, 
    {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
    {"name": "Iraq", "code": "IQ"}, 
    {"name": "Ireland", "code": "IE"}, 
    {"name": "Isle of Man", "code": "IM"}, 
    {"name": "Israel", "code": "IL"}, 
    {"name": "Italy", "code": "IT"}, 
    {"name": "Jamaica", "code": "JM"}, 
    {"name": "Japan", "code": "JP"}, 
    {"name": "Jersey", "code": "JE"}, 
    {"name": "Jordan", "code": "JO"}, 
    {"name": "Kazakhstan", "code": "KZ"}, 
    {"name": "Kenya", "code": "KE"}, 
    {"name": "Kiribati", "code": "KI"}, 
    {"name": "Korea, Democratic People'S Republic of", "code": "KP"}, 
    {"name": "Korea, Republic of", "code": "KR"}, 
    {"name": "Kuwait", "code": "KW"}, 
    {"name": "Kyrgyzstan", "code": "KG"}, 
    {"name": "Lao People'S Democratic Republic", "code": "LA"}, 
    {"name": "Latvia", "code": "LV"}, 
    {"name": "Lebanon", "code": "LB"}, 
    {"name": "Lesotho", "code": "LS"}, 
    {"name": "Liberia", "code": "LR"}, 
    {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
    {"name": "Liechtenstein", "code": "LI"}, 
    {"name": "Lithuania", "code": "LT"}, 
    {"name": "Luxembourg", "code": "LU"}, 
    {"name": "Macao", "code": "MO"}, 
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
    {"name": "Madagascar", "code": "MG"}, 
    {"name": "Malawi", "code": "MW"}, 
    {"name": "Malaysia", "code": "MY"}, 
    {"name": "Maldives", "code": "MV"}, 
    {"name": "Mali", "code": "ML"}, 
    {"name": "Malta", "code": "MT"}, 
    {"name": "Marshall Islands", "code": "MH"}, 
    {"name": "Martinique", "code": "MQ"}, 
    {"name": "Mauritania", "code": "MR"}, 
    {"name": "Mauritius", "code": "MU"}, 
    {"name": "Mayotte", "code": "YT"}, 
    {"name": "Mexico", "code": "MX"}, 
    {"name": "Micronesia, Federated States of", "code": "FM"}, 
    {"name": "Moldova, Republic of", "code": "MD"}, 
    {"name": "Monaco", "code": "MC"}, 
    {"name": "Mongolia", "code": "MN"}, 
    {"name": "Montenegro", "code": "ME"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"}, 
    {"name": "Mozambique", "code": "MZ"}, 
    {"name": "Myanmar", "code": "MM"}, 
    {"name": "Namibia", "code": "NA"}, 
    {"name": "Nauru", "code": "NR"}, 
    {"name": "Nepal", "code": "NP"}, 
    {"name": "Netherlands", "code": "NL"}, 
    {"name": "Netherlands Antilles", "code": "AN"}, 
    {"name": "New Caledonia", "code": "NC"}, 
    {"name": "New Zealand", "code": "NZ"}, 
    {"name": "Nicaragua", "code": "NI"}, 
    {"name": "Niger", "code": "NE"}, 
    {"name": "Nigeria", "code": "NG"}, 
    {"name": "Niue", "code": "NU"}, 
    {"name": "Norfolk Island", "code": "NF"}, 
    {"name": "Northern Mariana Islands", "code": "MP"}, 
    {"name": "Norway", "code": "NO"}, 
    {"name": "Oman", "code": "OM"}, 
    {"name": "Pakistan", "code": "PK"}, 
    {"name": "Palau", "code": "PW"}, 
    {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
    {"name": "Panama", "code": "PA"}, 
    {"name": "Papua New Guinea", "code": "PG"}, 
    {"name": "Paraguay", "code": "PY"}, 
    {"name": "Peru", "code": "PE"}, 
    {"name": "Philippines", "code": "PH"}, 
    {"name": "Pitcairn", "code": "PN"}, 
    {"name": "Poland", "code": "PL"}, 
    {"name": "Portugal", "code": "PT"}, 
    {"name": "Puerto Rico", "code": "PR"}, 
    {"name": "Qatar", "code": "QA"}, 
    {"name": "Reunion", "code": "RE"}, 
    {"name": "Romania", "code": "RO"}, 
    {"name": "Russian Federation", "code": "RU"}, 
    {"name": "RWANDA", "code": "RW"}, 
    {"name": "Saint Helena", "code": "SH"}, 
    {"name": "Saint Kitts and Nevis", "code": "KN"}, 
    {"name": "Saint Lucia", "code": "LC"}, 
    {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
    {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
    {"name": "Samoa", "code": "WS"}, 
    {"name": "San Marino", "code": "SM"}, 
    {"name": "Sao Tome and Principe", "code": "ST"}, 
    {"name": "Saudi Arabia", "code": "SA"}, 
    {"name": "Senegal", "code": "SN"}, 
    {"name": "Serbia", "code": "RS"}, 
    {"name": "Seychelles", "code": "SC"}, 
    {"name": "Sierra Leone", "code": "SL"}, 
    {"name": "Singapore", "code": "SG"}, 
    {"name": "Slovakia", "code": "SK"}, 
    {"name": "Slovenia", "code": "SI"}, 
    {"name": "Solomon Islands", "code": "SB"}, 
    {"name": "Somalia", "code": "SO"}, 
    {"name": "South Africa", "code": "ZA"}, 
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
    {"name": "Spain", "code": "ES"}, 
    {"name": "Sri Lanka", "code": "LK"}, 
    {"name": "Sudan", "code": "SD"}, 
    {"name": "Suriname", "code": "SR"}, 
    {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
    {"name": "Swaziland", "code": "SZ"}, 
    {"name": "Sweden", "code": "SE"}, 
    {"name": "Switzerland", "code": "CH"}, 
    {"name": "Syrian Arab Republic", "code": "SY"}, 
    {"name": "Taiwan, Province of China", "code": "TW"}, 
    {"name": "Tajikistan", "code": "TJ"}, 
    {"name": "Tanzania, United Republic of", "code": "TZ"}, 
    {"name": "Thailand", "code": "TH"}, 
    {"name": "Timor-Leste", "code": "TL"}, 
    {"name": "Togo", "code": "TG"}, 
    {"name": "Tokelau", "code": "TK"}, 
    {"name": "Tonga", "code": "TO"}, 
    {"name": "Trinidad and Tobago", "code": "TT"}, 
    {"name": "Tunisia", "code": "TN"}, 
    {"name": "Turkey", "code": "TR"}, 
    {"name": "Turkmenistan", "code": "TM"}, 
    {"name": "Turks and Caicos Islands", "code": "TC"}, 
    {"name": "Tuvalu", "code": "TV"}, 
    {"name": "Uganda", "code": "UG"}, 
    {"name": "Ukraine", "code": "UA"}, 
    {"name": "United Arab Emirates", "code": "AE"}, 
    {"name": "United Kingdom", "code": "GB"}, 
    {"name": "United States", "code": "US"}, 
    {"name": "United States Minor Outlying Islands", "code": "UM"}, 
    {"name": "Uruguay", "code": "UY"}, 
    {"name": "Uzbekistan", "code": "UZ"}, 
    {"name": "Vanuatu", "code": "VU"}, 
    {"name": "Venezuela", "code": "VE"}, 
    {"name": "Viet Nam", "code": "VN"}, 
    {"name": "Virgin Islands, British", "code": "VG"}, 
    {"name": "Virgin Islands, U.S.", "code": "VI"}, 
    {"name": "Wallis and Futuna", "code": "WF"}, 
    {"name": "Western Sahara", "code": "EH"}, 
    {"name": "Yemen", "code": "YE"}, 
    {"name": "Zambia", "code": "ZM"}, 
    {"name": "Zimbabwe", "code": "ZW"} 
    ]

const AddVendor = () => {
    const [title, setTitle] = useState('')
    const [companyName, setCompanyName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vendorEmail, setVendorEmail] = useState('');
    const [companyPhone, setCompanyPhone] = useState('');
    const [personNumber, setPersonNumber] = useState('');
    const [website, setWebsite] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('')
    const [countries] = useState(Countires);
    const {mutate: addNewVendor, isLoading, error} = useNewVendor()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const vendor = {
            email: vendorEmail,
            password: 'Prayer1020',
            firstName,
            lastName,
            phoneNumber: phone,
            businessName: companyName,
            webAddress: website,
            address: addressOne,
            city,
            state
        }

        addNewVendor(vendor, {
            onSuccess: () => {
                navigate(Approutes.inventory.vendors.home)

                setTitle('')
                setCompanyName('')
                setFirstName('')
                setLastName('')
                setVendorEmail('')
                setCompanyPhone('')
                setPersonNumber('')
                setWebsite('')
                setAddressOne('')
                setAddressTwo('')
                setCity('')
                setState('')
                setPhone('')
                setZipCode('')
                setCountry('') 
            }
        })
    }

    const handleCancel = () => {
        setTitle('')
        setCompanyName('')
        setFirstName('')
        setLastName('')
        setVendorEmail('')
        setCompanyPhone('')
        setPersonNumber('')
        setWebsite('')
        setAddressOne('')
        setAddressTwo('')
        setCity('')
        setState('')
        setPhone('')
        setZipCode('')
        setCountry('') 

        navigate(-1)
    }

    return (  
        <AddVendorSection>
            <Pageheader title='add new vendor' />

            <Container>
                <Left>
                    <VendorForm action="#" onSubmit={handleSubmit}>
                        <Inputs>
                            <FormInput labelName='Compnany name*' name='company-name' id='company-name' htmlFor='company-name' type='text' questionMark required autoComplete='off' value={companyName} setValue={setCompanyName} />

                            <PrimaryContactLabel htmlFor="primary-contact">
                                <div><span>Primary contact*</span></div>

                                <GridThree>
                                    <FormSelect value={title} setValue={setTitle} placeholder='Mr' options={[
                                        {
                                            id: 1,
                                            option: 'Mr'
                                        },
                                        {
                                            id: 2,
                                            option: 'Mrs'
                                        },
                                        {
                                            id: 3,
                                            option: 'Miss'
                                        },
                                    ]} />

                                    <FormInput name='fname' id='fname' htmlFor='fname' type='text' required autoComplete='off' value={firstName} setValue={setFirstName} placeholder='First Name' />

                                    <FormInput name='lname' id='lname' htmlFor='lname' type='text' required autoComplete='off' value={lastName} setValue={setLastName} placeholder='Last Name' />
                                </GridThree>
                            </PrimaryContactLabel>

                            <FormInput labelName='Vendor email*' name='vendor-email' id='vendor-email' htmlFor='vendor-email' type='email' required questionMark autoComplete='off' value={vendorEmail} setValue={setVendorEmail} />

                            <ContactContainer>
                                <div><span>Vendor phone number*</span></div>

                                <GridTwo>
                                    <FormInput name='company-phone-number' id='company-phone-number' htmlFor='company-phone-number' type='tel' autoComplete='off' value={companyPhone} setValue={setCompanyPhone} placeholder='Company Phone' />

                                    <FormInput name='personal-number' id='personal-number' htmlFor='personal-number' type='tel' autoComplete='off' value={personNumber} setValue={setPersonNumber} placeholder='Contact Person Number' />
                                </GridTwo>
                                <p>Add more details</p>
                            </ContactContainer>

                            <FormInput labelName='Website*' name='website' id='website' htmlFor='website' type='text' required autoComplete='off' value={website} setValue={setWebsite} placeholder='Website' questionMark />


                            <h2>Address Details</h2>

                            <SearchAndSelectDropdown formTitle='Country/Region*' selectPlaceholder='Select or type to add' labelFor='country' inputId='country' inputName='country' showQuestionMark='true' options={countries} setState={setCountry} state={country} />

                            <AddressContainer>
                                <div><span>Address</span> <QuestionMark /></div>

                                <FormTextarea name='streetone' htmlFor='streetone' placeholder='Street 1' id='streetone' required autoComplete='off' value={addressOne} setValue={setAddressOne}  />

                                <FormTextarea name='streettwo' htmlFor='streettwo' placeholder='Street 2' id='streettwo' autoComplete='off' value={addressTwo} setValue={setAddressTwo}  />
                            </AddressContainer>

                            <GridTwo>
                                <FormInput labelName='City' name='city' id='city' htmlFor='city' type='text' required autoComplete='off' value={city} setValue={setCity} />

                                <FormInput labelName='State' name='state' id='state' htmlFor='state' type='text' required autoComplete='off' value={state} setValue={setState} />
                            </GridTwo>

                            <GridTwo>
                                <FormInput labelName='Zip code' name='zipcode' id='zipcode' htmlFor='zipcode' type='text' autoComplete='off' value={zipCode} setValue={setZipCode} />


                                <FormInput labelName='Phone' name='phone' id='phone' htmlFor='phone' type='text' autoComplete='off' required value={phone} setValue={setPhone} />
                            </GridTwo>
                        </Inputs>

                        <Buttons>
                            <CustomButton disabled={isLoading} type='submit' primary='true'>{isLoading ? <ImSpinner2 /> : 'Save'}</CustomButton>

                            <Cancel onClick={() => handleCancel()}>Cancel</Cancel>
                        </Buttons>
                    </VendorForm>
                </Left>

                <Right>

                </Right>
                
            </Container>
        </AddVendorSection>
    );
}
 
export default AddVendor;