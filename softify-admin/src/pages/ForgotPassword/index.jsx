import { useState } from "react";
import { Logo, Tick } from "../../assets/svgs";
import { ForgetPasswordSection, LogoContainer, Container, ForgetPasswordContainer, ForgetPasswordForm, Email, OtpContainer, OtpForm, Otp, Sucessful } from "./forgotpassword.styles";
import {CustomButton} from '../../ui';
import {Link} from 'react-router-dom';
import {Approutes} from '../../constants'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [emailSent, updateEmailSent] = useState(false)
    const [otpSent, updateOtpSent] = useState(false)


    return (  
        <ForgetPasswordSection>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Container>
                {
                    !emailSent && !otpSent ?
                    <ForgetPasswordContainer>
                        <h2>Forgot Password</h2>
                        <ForgetPasswordForm action="#">
                            <Email htmlFor="email">
                                <span>Email</span>
                                <input type="email" name="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </Email>

                            <CustomButton primary='true' type='submit'>Send OTP</CustomButton>

                            <Link to={Approutes.login}>                      <p className="back">Remember your password? Back to login</p></Link>
                        </ForgetPasswordForm>
                    </ForgetPasswordContainer> :
                    emailSent && !otpSent ?
                    <OtpContainer>
                        <h2>We’ve sent an OTP</h2>
                        <p>We’ve sent an OTP  to your registered email. Please enter it below</p>
                        <OtpForm action="#">
                            <Otp htmlFor="otp">
                                <input type="text" name="otp" id="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                            </Otp>

                            <CustomButton primary='true' type='submit'>Reset Password</CustomButton>
                        </OtpForm>
                    </OtpContainer> :
                    emailSent && otpSent ?
                    <Sucessful>
                        <Tick />
                        <h2>Password reset sucessful</h2>
                        <p>Your password has been reset sucessfully</p>

                        <Link to={Approutes.login}>
                            <CustomButton primary='true'>Back to Login</CustomButton> 
                        </Link>
                    </Sucessful> : null
                }
            </Container>
        </ForgetPasswordSection>
    );
}
 
export default ForgotPassword;