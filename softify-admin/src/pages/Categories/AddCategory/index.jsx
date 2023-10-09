import { AddCategorySection, Container } from "./addcategory.styles";
import {Pageheader} from '../../../components';


const AddCategory = () => {
    return (  
        <AddCategorySection>
            <Pageheader title='add new category' />


            <Container>
                Add Category
            </Container>
        </AddCategorySection>
    );
}
 
export default AddCategory;