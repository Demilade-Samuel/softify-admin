import { AddNewProductSection, Container, Left, Type, Product, Service, AddNewProductForm, Inputs, Attributes, GridTwo, Vendor, Add, Buttons, Generate, Right, Images, ImageOne, ImageTwo, ImageThree, ImageFour } from "./addnewproduct.styles";
import {Pageheader} from '../../../components'
import { useState } from "react";
import { QuestionMark, DragAndDrop, Info, Edit } from "../../../assets/svgs";
import { SearchAndSelectDropdown, FormInput, FormTextarea, CustomButton } from "../../../ui";

const AddNewProduct = () => {
    const [type, setType] = useState('product')
    const [name, setName] = useState('')
    const [productDesc, setProductDesc] = useState('')
    const [category, setCategory] = useState('')
    const [brandName, setBrandName] = useState('')
    const [attribute, setAttribute] = useState('')
    const [vendor, setVendor] = useState('')
    const [costPrice, setCostPrice] = useState('')
    const [sellingPrice, setSellingPrice] = useState('')
    const [imageOne, setImageOne] = useState('')
    const [imageTwo, setImageTwo] = useState('')
    const [imageThree, setImageThree] = useState('')
    const [imageFour, setImageFour] = useState('')
    const [dragActiveOne, setDragActiveOne] = useState('false')
    const [dragActiveTwo, setDragActiveTwo] = useState('false')
    const [dragActiveThree, setDragActiveThree] = useState('false')
    const [dragActiveFour, setDragActiveFour] = useState('false')

    const handleImageOne = (e) => {
        if(e.target.files && e.target.files[0]){
            const newImage = e.target.files[0]

            if(newImage.size > 2000000){
                alert('Image size exceeds 2mb')
                setImageOne('')
            }else {
                setImageOne(URL.createObjectURL(newImage))
            }
        }
    } 

    const handleImageTwo = (e) => {
        if(e.target.files && e.target.files[0]){
            const newImage = e.target.files[0]

            if(newImage.size > 2000000){
                alert('Image size exceeds 2mb')
                setImageTwo('')
            }else {
                setImageTwo(URL.createObjectURL(newImage))
            }
        }
    } 
    const handleImageThree = (e) => {
        if(e.target.files && e.target.files[0]){
            const newImage = e.target.files[0]

            if(newImage.size > 2000000){
                alert('Image size exceeds 2mb')
                setImageThree('')
            }else {
                setImageThree(URL.createObjectURL(newImage))
            }
        }
    } 
    const handleImageFour = (e) => {
        if(e.target.files && e.target.files[0]){
            const newImage = e.target.files[0]

            if(newImage.size > 2000000){
                alert('Image size exceeds 2mb')
                setImageFour('')
            }else {
                setImageFour(URL.createObjectURL(newImage))
            }
        }
    } 

    const handleDragOne = (e) => {
        e.preventDefault();

        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActiveOne('true')
        }else if (e.type === 'dragleave'){
            setDragActiveOne('false')
        }
    }
    const handleDragTwo = (e) => {
        e.preventDefault();

        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActiveTwo('true')
        }else if (e.type === 'dragleave'){
            setDragActiveTwo('false')
        }
    }
    const handleDragThree = (e) => {
        e.preventDefault();

        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActiveThree('true')
        }else if (e.type === 'dragleave'){
            setDragActiveThree('false')
        }
    }
    const handleDragFour = (e) => {
        e.preventDefault();

        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActiveFour('true')
        }else if (e.type === 'dragleave'){
            setDragActiveFour('false')
        }
    }

    const handleDropOne = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActiveOne('false')

        if(e.dataTransfer.files[0].size > 2000000){
            alert('Image size exceeds 2mb')
            setImageOne('')
        }else {
            if(e.dataTransfer.files && e.dataTransfer.files[0]){
                setImageOne(URL.createObjectURL(e.dataTransfer.files[0]));
                URL.revokeObjectURL(imageOne)
            }
        }
    }

    const handleDropTwo = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActiveTwo('false')

        if(e.dataTransfer.files[0].size > 2000000){
            alert('Image size exceeds 2mb')
            setImageTwo('')
        }else {
            if(e.dataTransfer.files && e.dataTransfer.files[0]){
                setImageTwo(URL.createObjectURL(e.dataTransfer.files[0]))
                URL.revokeObjectURL(imageTwo)
            }
        }
    }
    const handleDropThree = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setDragActiveThree('false')

        if(e.dataTransfer.files[0].size > 2000000){
            alert('Image size exceeds 2mb')
            imageThree('')
        }else {
            if(e.dataTransfer.files && e.dataTransfer.files[0]){
                setImageThree(URL.createObjectURL(e.dataTransfer.files[0]))
                URL.revokeObjectURL(imageThree)
            }
        }
    }
    const handleDropFour = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setDragActiveFour('false')

        if(e.dataTransfer.files[0].size > 2000000){
            alert('Image size exceeds 2mb')
            setImageFour('')
        }else {
            if(e.dataTransfer.files && e.dataTransfer.files[0]){
                setImageFour(URL.createObjectURL(e.dataTransfer.files[0]))
                URL.revokeObjectURL(imageFour)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    

    return (  
        <AddNewProductSection>
            <Pageheader title='add new product' />
            

            <Container>
                <AddNewProductForm action="#" onSubmit={handleSubmit}>
                    <Left>
                        <Type>
                            <Product><div className={`${type === 'product' ? 'type-active' : ''}`} onClick={() => setType('product')}></div> <span>Product</span></Product>
                            <Service><div className={`${type === 'service' ? 'type-active' : ''}`} onClick={() => setType('service')}></div> <span>Service</span></Service>
                        </Type>

                        <Inputs>
                            <h2>Product Details</h2>

                            <FormInput labelName='Name*' name='name' id='name' htmlFor='po-date' type='text' required autoComplete='off' value={name} setValue={setName} />

                            <FormTextarea labelName='Product Description*' htmlFor='product-desc' name='product-desc' id='product-desc' autoComplete='off' required value={productDesc} setValue={setProductDesc} questionMark  />

                            <SearchAndSelectDropdown formTitle='Category*' selectPlaceholder='Select or add a category' labelFor='category' inputId='category' showQuestionMark='false' setState={setCategory} state={category} options={[
                                {
                                    code: 1,
                                    name: 'Frozen foods'
                                },
                                {
                                    code: 2,
                                    name: 'Beverages'
                                },
                                {
                                    code: 3,
                                    name: 'Fresh farm diary'
                                }
                            ]} />

                            <FormInput labelName='Brand Name/Manufacturer*' name='brand-name' id='brand-name' htmlFor='brand-name' type='text' required autoComplete='off' value={brandName} setValue={setBrandName} placeholder='Add a brand name' QuestionMark />

                            <Attributes>
                                <h2>Physical Description (Attributes)</h2>

                                <GridTwo>
                                    <SearchAndSelectDropdown selectPlaceholder='Colors, Units, etc' labelFor='attribute' inputId='attribute' showQuestionMark='false' setState={setAttribute} state={attribute} options={[
                                        {
                                            code: 1,
                                            name: 'Color'
                                        },
                                        {
                                            code: 2,
                                            name: 'Units'
                                        }
                                    ]} />

                                    <FormInput name={attribute} id={attribute} htmlFor={attribute} type='text' required autoComplete='off'/>
                                </GridTwo>

                                <Add>+ Add a new attribute</Add>
                            </Attributes>

                            <Vendor>
                                <h2>Vendor</h2>

                                <SearchAndSelectDropdown selectPlaceholder='Select or search for a new vendor' labelFor='vendor' inputId='vendor' showQuestionMark='false' setState={setVendor} state={vendor} options={[
                                    {
                                        code: 1,
                                        name: 'Kunle',
                                    },
                                    {
                                        code: 2,
                                        name: 'Uchenna'
                                    },
                                    {
                                        code: 3,
                                        name: 'Godwill'
                                    }
                                ]}  />

                                <Add>+ Add a new vendor</Add>
                            </Vendor>



                            <h2>Price Information <QuestionMark /></h2>

                            <FormInput labelName='Cost Price*' name='cost-price' id='cost-price' htmlFor='cost-price' type='text' required autoComplete='off' value={costPrice} setValue={setCostPrice} questionMark />

                            <FormInput labelName='Selling Price*' name='selling-price' id='selling-price' htmlFor='selling-price' type='text' required autoComplete='off' value={sellingPrice} setValue={setSellingPrice} questionMark />
                        </Inputs>

                        <Buttons>
                            <Generate>Generate SKU</Generate>
                            <CustomButton type='submit' primary='true' disabled>Save</CustomButton>
                        </Buttons>
                    </Left>

                    <Right>
                        <Images>
                            <ImageOne  onDragEnter={handleDragOne} onDragLeave={handleDragOne} dragactive={dragActiveOne} onDrop={handleDropOne} imageone={imageOne}>
                                {imageOne ? 
                                <>
                                    <img src={imageOne} alt="imageOne" />
                                    <div className="edit-button"><Edit onClick={() => setImageOne('')} /></div>
                                </> : 
                                <>
                                    <DragAndDrop />

                                    <div>Drag and drop or 
                                        <label htmlFor="image-one"><span>click to upload</span>

                                        <input type="file" name="image-one" id="image-one" accept="image/png, image/jpg, image/jpeg" onChange={(e) => handleImageOne(e)}  />
                                        </label>
                                    </div>

                                    <div><Info /> <span>Max 4 images. 2mb each</span></div>
                                     
                                    { dragActiveOne === 'true' && <div className="drag-file-element" onDragEnter={handleDragOne} onDragLeave={handleDragOne} onDragOver={handleDragOne} onDrop={handleDropOne}></div>}
                                </>}
                            </ImageOne>

                            <ImageTwo onDragEnter={handleDragTwo} onDragLeave={handleDragTwo} dragactive={dragActiveTwo} onDrop={(e) => handleDropTwo(e)} imagetwo={imageTwo} >
                                {
                                    imageTwo ? 
                                    <>
                                        <img src={imageTwo} alt="imageTwo"  />
                                        <div className="edit-button"><Edit onClick={() => setImageTwo('')} /></div>
                                    </> : 
                                    <>
                                    <label htmlFor="image-two">
                                        <span>+</span>
                                        <input type="file" name="image-two" id="image-two" accept="image/png, image/jpg, image/jpeg" onChange={(e) => handleImageTwo(e)} />
                                    </label>

                                    { dragActiveTwo === 'true' && <div className="drag-file-element" onDragEnter={handleDragTwo} onDragLeave={handleDragTwo} onDragOver={handleDragTwo} onDrop={handleDropTwo}></div>}
                                    </>
                                }

                            </ImageTwo>

                            <ImageThree onDragEnter={handleDragThree} onDragLeave={handleDragThree} onDrop={handleDropThree} dragactive={dragActiveThree} imagethree={imageThree}>
                                {
                                    imageThree ?
                                    <>
                                        <img src={imageThree} alt="imageThree" />
                                        <div className="edit-button"><Edit onClick={() => setImageThree('')} /></div>
                                    </> :
                                    <>
                                        <label htmlFor="image-three">
                                        <span>+</span>
                                        <input type="file" name="image-three" id="image-three" accept="image/png, image/jpg, image/jpeg" onChange={(e) => handleImageThree(e)} />
                                        </label>
                                        { dragActiveThree === 'true' && <div className="drag-file-element" onDragEnter={handleDragThree} onDragLeave={handleDragThree} onDragOver={handleDragThree} onDrop={handleDropThree}></div>}
                                    </>
                                }
                            </ImageThree>

                            <ImageFour onDragEnter={handleDragFour} onDragLeave={handleDragFour} onDrop={handleDropFour} dragactive={dragActiveFour} imagefour={imageFour}>
                                {
                                    imageFour ?
                                    <>
                                        <img src={imageFour} alt="imageFour" />
                                        <div className="edit-button"><Edit onClick={() => setImageFour('')} /></div>
                                    </> : 
                                    <>
                                        <label htmlFor="image-four">
                                            <span>+</span>
                                            <input type="file" name="image-four" id="image-four" accept="image/png, image/jpg, image/jpeg" onChange={(e) => handleImageFour(e)} />
                                        </label>
                                        { dragActiveFour === 'true' && <div className="drag-file-element" onDragEnter={handleDragFour} onDragLeave={handleDragFour} onDragOver={handleDragFour} onDrop={handleDropFour}></div>}
                                    </>
                                }
                            </ImageFour>
                        </Images>
                    </Right>
                </AddNewProductForm>
            </Container>
        </AddNewProductSection>
    );
}
 
export default AddNewProduct;