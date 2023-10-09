import { ButtonContainer } from "./button.styles";

const CustomButton = ({children, primary, secondary, disabled, left, right, icon}) => {
    return (  
        <ButtonContainer primary={primary} secondary={secondary} disabled={disabled}>{left ? icon  : '' } <span>{children}</span> {right ? icon : ''}</ButtonContainer>
    );
}
 
export default CustomButton;