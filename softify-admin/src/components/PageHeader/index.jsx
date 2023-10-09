import { Header, Container, Left, Right, User, Details } from "./pageheader.styles";
import { Dummy } from '../../assets/imgs';
import {ChevronDown} from '../../assets/svgs';
import { CustomButton} from '../../ui';
import { useAuthContext } from "../../hooks";

const Pageheader = ({title, buttonText}) => {
    const {user} = useAuthContext()

    return (  
        <Header>
            <Container>
                <Left>{title}</Left>




                <Right>
                    {buttonText ? <CustomButton secondary='true'>{buttonText}</CustomButton> :  '' }

                    <User>
                        <Details>
                        <img src={Dummy} alt="user" />

                        <div>
                            <p>{user.username}</p>
                            <span>{user.role}</span>
                        </div>
                        </Details>

                        <ChevronDown />
                    </User> 
                </Right>
            </Container>
        </Header>
    );
}
 
export default Pageheader;