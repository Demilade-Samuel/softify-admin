import { useState } from "react";
import { Hazard, Logo, PasswordEye } from "../../assets/svgs";
import { LoginSection, LogoContainer, Container, LoginContainer, Top, LoginForm, Username, Password, ErrorMessage } from "./login.styles";
import {CustomButton} from '../../ui';
import {Link} from 'react-router-dom'
import {Approutes} from '../../constants';
import { useLogin } from "../../hooks";
import {ImSpinner2} from 'react-icons/im'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, updatePasswordType] = useState('password')
    const {mutate, isLoading, error, status} = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault();

        const userDetails = {
            email: username,
            password
        }

        mutate(userDetails)
        if(status === 'success' && !error){
            setUsername('')
            setPassword('')
        }
    }

    return (  
        <LoginSection>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <Container>
                <LoginContainer>
                    <Top>
                        <h2>Welcome back!</h2>
                        <p>Sign in to continue to Softify</p>
                    </Top>

                    <LoginForm action="#" onSubmit={handleSubmit}>
                        {
                            error  ?
                                <ErrorMessage>
                                    <Hazard />
                                    <span>{error.response.data.message}</span>
                                </ErrorMessage> : null
                        }

                        <Username htmlFor="username">
                            <span>Username</span>
                            <input className={error ? 'error' : ''} type="text" name="username" id="username" placeholder="Enter Email" value={username} onChange={(e) => {setUsername(e.target.value)}} required />
                        </Username>

                        <Password htmlFor="password" >
                            <span>Password</span>
                            <input type={passwordType} className={error ? 'error' : ''} name="password" id="password" placeholder="Enter password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                            <PasswordEye onClick={() => updatePasswordType(passwordType === 'password' ? 'text' : 'password' )} />
                            <Link to={isLoading ? '' : Approutes.forgotpassword}><p>Forgot Password?</p></Link>
                        </Password>

                        <CustomButton type='submit' primary='true' disabled={status === 'loading'}>
                            {isLoading ? <ImSpinner2/> : "Login"}
                        </CustomButton>

                        <Link to={ isLoading ? '' : Approutes.activateaccount}><p className="activate">Activate your account</p></Link>
                    </LoginForm>
                </LoginContainer>
            </Container>
        </LoginSection>
    );
}
 
export default Login;