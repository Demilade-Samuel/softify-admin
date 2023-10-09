import { Container, PackagesSection, AllPackages, Packed, Shipped, Delivered, Title, Cards, Card, Left, Right, Name, Id, Rider, Date } from "./packages.styles";
import {Pageheader} from "../../components";
import { Hamburger } from "../../assets/svgs";
import { useState } from "react";

const Packages = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (  
        <PackagesSection>
            <Pageheader title='packages' />

            <Container>
                <h1>All Packages</h1>

                <AllPackages>
                    <Packed>
                        <Title color='#DAF3F8'><p>Packed, Not Shipped</p> <Hamburger /></Title>

                        <Cards>
                            <Card>
                                <Left>
                                    <input type="checkbox" onChange={(e) => setIsChecked(e.target.checked)} value={isChecked} />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>001</p>
                                </Right>
                            </Card>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>002</p>
                                </Right>
                            </Card>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>003</p>
                                </Right>
                            </Card>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>004</p>
                                </Right>
                            </Card>

                        </Cards>

                    </Packed>

                    <Shipped>
                        <Title color='#FBF8CB'><p>Shipped Packages</p> <Hamburger /></Title>

                        <Cards>
                            <Card>

                                No Result Found
  
                             </Card>
                        </Cards>


                    </Shipped>

                    <Delivered>
                        <Title color='#D5F1B4'><p>Delivered Packages</p> <Hamburger /></Title>

                        <Cards>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>001</p>
                                </Right>
                            </Card>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>002</p>
                                </Right>
                            </Card>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>003</p>
                                </Right>
                            </Card>
                            <Card>
                                <Left>
                                    <input type="checkbox" />

                                    <div>
                                        <Name>Sodiq Anike</Name>
                                        <Id><p>8334532</p>  <span></span> <p>#S23-00001</p></Id>
                                        <Rider><span>Rider:</span> Ayomide Bankole</Rider>
                                        <Date>03, March, 2023</Date>
                                    </div>
                                </Left>

                                <Right>
                                    <p>004</p>
                                </Right>
                            </Card>

                        </Cards>

                    </Delivered>
                </AllPackages>
            </Container>
        </PackagesSection>
    );
}
 
export default Packages;