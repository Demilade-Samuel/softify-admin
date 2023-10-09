import { useState } from "react";
import { Logo, PasswordEye } from "../../assets/svgs";
import { ActivateAccountSection, LogoContainer, Container, ActivateAccountContainer, Top, ActivateAccountForm, Email, Password, ResetContainer, ResetForm, NewPassword, RetypePassword } from "./activateaccount.styles";
import {CustomButton} from '../../ui';
import {Link} from 'react-router-dom'
import {Approutes} from '../../constants';
import {ImSpinner2} from 'react-icons/im'

const ActivateAccount = () => {
    const [email, setEmail] = useState('')
    const [temporaryPassword, setTemporaryPassword] = useState('')
    const [passwordType, updatePasswordType] = useState('password')
    const [newPasswordType, updateNewPasswordType] = useState('password')
    const [retypePasswordType, updateRetypePasswordType] = useState('password')
    const [newPassword, setNewPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [activate, setActivate] = useState(false)
    const [reset, setReset] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (  
        <ActivateAccountSection>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Container>
                {/* {
                    !activate && !reset ?

                    <ActivateAccountContainer>
                    <Top>
                        <h2>Activate your account</h2>
                        <p>Please enter your email and temporary password to continue</p>
                    </Top>

                    <ActivateAccountForm action="#" onSubmit={handleSubmit}>

                        <Email htmlFor="email">
                            <span>Email</span>
                            <input className={error ? 'error' : ''} type="text" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                        </Email>

                        <Password htmlFor="temporary-password" >
                            <span>Temporary password</span>
                            <input type={passwordType} className={error ? 'error' : ''} name="temporary-password" id="temporary-password" placeholder="Enter password" value={temporaryPassword} onChange={(e) => {setTemporaryPassword(e.target.value)}} />
                            <PasswordEye onClick={() => updatePasswordType(passwordType === 'password' ? 'text' : 'password' )} />
                        </Password>

                        <CustomButton type='submit' primary='true'>
                            Activate
                        </CustomButton>
                    </ActivateAccountForm>
                    </ActivateAccountContainer> :
                
                    activate && !reset ?
                
                    <ResetContainer>
                        <Top>
                            <h2>Create a new password</h2>
                            <p>Create a new password</p>
                        </Top>

                        <ResetForm action="#" onSubmit={handleSubmit}>
                            <NewPassword htmlFor="new-password">
                                <span>New password</span>
                                <input className={error ? 'error' : ''} type={newPasswordType} name="new-password" id="new-password" placeholder="Enter Password" value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} required />

                                <PasswordEye onClick={() => updateNewPasswordType(newPasswordType === 'password' ? 'text' : 'password' )} />
                            </NewPassword>

                            <RetypePassword htmlFor="retype-password" >
                                <span>Retype password</span>
                                <input type={retypePasswordType} className={error ? 'error' : ''} name="retype-password" id="retype-password" placeholder="Enter password" value={retypePassword} onChange={(e) => {setRetypePassword(e.target.value)}} />

                                <PasswordEye onClick={() => updateRetypePasswordType(retypePasswordType === 'password' ? 'text' : 'password' )} />
                            </RetypePassword>

                            <CustomButton type='submit' primary='true'>
                                Reset Password
                            </CustomButton>
                        </ResetForm>
                    </ResetContainer> : null        
                } */}
            </Container>
        </ActivateAccountSection>
    );
}
 
export default ActivateAccount;