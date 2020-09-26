import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Pagination, PaginationItem, PaginationLink,
    Card, CardTitle, CardText,ListGroup, ListGroupItem,Input,Label,
    InputGroup,InputGroupAddon,Button,CardImg, CardDeck,
     CardBody,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import bags from './images/bags.jpg';
import earrings from './images/earrings.jpg';
import necklace from './images/necklace.jpg';
import hair from './images/hair.jpg';
import tags from './images/tags.jpg';
import {MdArrowForward} from 'react-icons/md';
import {FaAngleRight} from 'react-icons/fa';


 class Jewellery extends Component {
    render() {
        return (
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/jewellery">Jewellery & Accessories</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="category-banner">
                    <h2>Jewellery and Accessories</h2>
                    <h6>Necklaces, Earrings and other Accessories to make you look unique.</h6>
                </div>
                <div>
                    <Row>
                        <Col sm="2">
                            <Card body className="item-selection-card">
                            <ListGroup>
                                <ListGroupItem color="success">Special Offers<br/>
                                    <Label check>
                                    <Input type="checkbox" name="sale" />{' '}
                                            On Sale
                                    </Label>                 
                                </ListGroupItem>
                            </ListGroup>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card body className="item-selection-card">
                                    <CardTitle>Shop location</CardTitle>
                                    <CardText>
                                    <Input type="radio" name="anywhere" />{' '} Anywhere <br/>
                                    <Input type="radio" name="colombo" />{' '} Colombo <br/>
                                    <Input type="radio" name="custom" />{' '} Custom <br/>
                                    <InputGroup size="sm">
                                    <Input  type="text" placeholder="Enter location"/> {' '}
                                    <InputGroupAddon addonType="append" ><Button><MdArrowForward/></Button></InputGroupAddon>
                                    </InputGroup>
                                    </CardText>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card body className="item-selection-card">
                                    <CardTitle>Price(Rs.)</CardTitle>
                                    <CardText>
                                    <Input type="radio" name="anyprice" />{' '} Any Price <br/>
                                    <Input type="radio" name="cheap" />{' '} Rs.100/= to Rs.500/= <br/>
                                    <Input type="radio" name="moderate" />{' '} Rs.500/= to Rs.2000/= <br/>
                                    <Input type="radio" name="expensive" />{' '} Above Rs.2000/= <br/>
                                    <Input type="radio" name="custom" />{' '} Custom <br/>
                                    <InputGroup size="sm">
                                    <Input  type="text" placeholder="Low"/> {' '} to {' '}
                                    <Input  type="text" placeholder="High"/> {' '}
                                    <InputGroupAddon addonType="append" ><Button><MdArrowForward/></Button></InputGroupAddon>
                                    </InputGroup>
                                    </CardText>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card body className="item-selection-card">
                                    <CardTitle>Item Type</CardTitle>
                                    <CardText>
                                    <Input type="radio" name="any type" />{' '} Any Type <br/>
                                    <Input type="radio" name="Paper" />{' '} Paper <br/>
                                    <Input type="radio" name="Thread" />{' '} Thread <br/>
                                    <Input type="radio" name="Beads" />{' '} Beads <br/>
                                    <Input type="radio" name="Cloth" />{' '} Cloth <br/>
                                    <Input type="radio" name="Stone" />{' '} Stone <br/>
                                    <Input type="radio" name="custom" />{' '} Custom <br/>
                                    <InputGroup size="sm">
                                    <Input  type="text" placeholder="Enter Item Type"/> {' '}
                                    <InputGroupAddon addonType="append" ><Button><MdArrowForward/></Button></InputGroupAddon>
                                    </InputGroup>
                                    </CardText>
                            </Card>
                        </Col>
                    </Row>
                    <CardDeck style={{paddingTop:'5%', paddingBottom:'5%', height:'50%'}}>
                            <Card height="50%">
                            <CardImg top width="100%"  src={necklace} alt="ornaments" />
                            <CardBody>
                            <CardTitle><b>Necklaces,Bracelets & Anklets</b></CardTitle>
                            <Button outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%" src={earrings} alt="candle holder" />
                            <CardBody>
                            <CardTitle><b>Earrings & Rings </b></CardTitle>
                            <Button  outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%" src={bags} alt="cusion covers" />
                            <CardBody>
                            <CardTitle><b>Bags & Purses</b></CardTitle>
                            <Button  outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%"  src={hair} alt="lampshade" />
                            <CardBody>
                            <CardTitle><b>Hair Accessories</b></CardTitle>
                            <Button outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%"  src={tags} alt="garden decor" />
                            <CardBody>
                            <CardTitle><b>Key tags & Charms</b></CardTitle>
                            <Button outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                </CardDeck>
                </div>
                    <hr color=' #678d4c'/>  
                    <div>
                    <Pagination aria-label="catalog navigation example" style ={{paddingRight:'50%', paddingLeft:'50%'}}>
                                <PaginationItem>
                                <PaginationLink first href="#" />
                                </PaginationItem>
                                <PaginationItem >
                                <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">
                                    1
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">
                                    2
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">
                                    3
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">
                                    4
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink href="#">
                                    5
                                </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink next href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                <PaginationLink last href="#" />
                                </PaginationItem>
                            </Pagination>
                            </div>
                </div>
                
        )
    }
}
export default Jewellery;
