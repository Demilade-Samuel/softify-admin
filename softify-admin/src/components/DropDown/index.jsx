import { Container, Title, Links, Link } from "./dropdown.styles";
import { ChevronDown, ChevronRight, Inventory, Order, ReportData} from '../../assets/svgs'
import { useState } from "react";
import useListenForOutsideClicks from "../../hooks/useListenForOutsideClicks";

const Dropdown = ({data, disabled}) => {
    const [isOpen, setIsOpen ] = useState('false')
    const {elementRef} = useListenForOutsideClicks(() => {
        setIsOpen('false')
    })

    const toggleDropdown = () => {
        if(!disabled){
            if(isOpen === 'false'){
                setIsOpen('true')
            }else {
                setIsOpen('false')
            }
        }

    }
    return (  
        <Container>
            <Title onFocus={() => toggleDropdown()} isopen={isOpen} tabIndex={0} ref={elementRef} className={`${disabled ? 'disabled' : ''}`}> 
            <span>{data.title === 'inventory' ? <Inventory /> : 
            data.title === 'orders' ? <Order /> : data.title === 'super admin' ? <ReportData /> : ''} <p>{data.title}</p></span> {isOpen  === 'true' ? <ChevronDown onClick={() => toggleDropdown()} /> : <ChevronRight onClick={() => toggleDropdown()} />}
            </Title>

            <Links isopen={isOpen} className={`${disabled ? 'disabled' : ''}`}>
                {data.links.map(l => {
                    return <Link to={l.link} key={l.name} onClick={() => setIsOpen('false')}>{l.name}</Link>
                })}
            </Links>
        </Container>
    );
}
 
export default Dropdown;