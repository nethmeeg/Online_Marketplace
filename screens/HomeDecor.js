import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Pagination, PaginationItem, PaginationLink,
        Card, CardTitle, CardText,ListGroup, ListGroupItem,Input,Label,
        InputGroup,InputGroupAddon,Button,CardImg, CardDeck,
         CardBody,Row,Col,CardSubtitle,CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
import ornaments from './images/ornaments.jpg';
import candles from './images/candles.jpg';
import cusion from './images/cusion.jpg';
import garden from './images/garden.jpg';
import lampshade from './images/lampshade.jpg';
import {MdArrowForward} from 'react-icons/md';
import {FaAngleRight,FaTag,FaStar} from 'react-icons/fa';



 class HomeDecor extends Component {
    render() {
        return (
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/homeDecor">Home Decor & Garden</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="category-banner">
                    <h2>Home Decor and Garden</h2>
                    <h6>Wall Decor, candles and ornaments to make your home unique.</h6>
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
                                    <Input type="radio" name="Ceramic" />{' '} Ceramic <br/>
                                    <Input type="radio" name="Leather" />{' '} Leather <br/>
                                    <Input type="radio" name="Glass" />{' '} Glass <br/>
                                    <Input type="radio" name="Paper and Paper pulp" />{' '} Paper and Paper pulp <br/>
                                    <Input type="radio" name="Handloom" />{' '} Handloom <br/>
                                    <Input type="radio" name="Wooden" />{' '} Wooden<br/>
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
                            <CardImg top width="100%"  src={ornaments} alt="ornaments" />
                            <CardBody>
                            <CardTitle><b>Ornaments & Decorative Wall art</b></CardTitle>
                            <Button outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%" src={candles} alt="candle holder" />
                            <CardBody>
                            <CardTitle><b>Candles & Candle Holders </b></CardTitle>
                            <Button  outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%" src={cusion} alt="cusion covers" />
                            <CardBody>
                            <CardTitle><b>Bedding,Cusion covers & Rugs</b></CardTitle>
                            <Button  outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%"  src={lampshade} alt="lampshade" />
                            <CardBody>
                            <CardTitle><b>Macrame Chandeliers,Lampshades & Lighting</b></CardTitle>
                            <Button outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top  width="100%"  src={garden} alt="garden decor" />
                            <CardBody>
                            <CardTitle><b>Garden Decor</b></CardTitle>
                            <Button outline color="success" size="sm">Shop now <FaAngleRight/></Button>
                            </CardBody>
                        </Card>
                </CardDeck>
                </div>
                    
                  <hr color=' #678d4c'/> 
                  <div>
                      <CardDeck>
                          <Card> 
                            <Link><CardImg top width="100%" src={cusion} alt="product1"/></Link>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle color=" #99a2a8">@RuaxBrothers</CardSubtitle>
                                <CardText><FaStar color="#678d4c"/><FaStar color="#678d4c"/><FaStar color="#678d4c"/>(105)</CardText>
                                <CardFooter><FaTag color="#678d4c"/><b>Rs.1000/=</b></CardFooter>
                                <Button outline color="success" size="sm">Order now</Button>
                            </CardBody>
                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle color=" #99a2a8">@RuaxBrothers</CardSubtitle>
                                <CardText><FaStar color="#678d4c"/><FaStar color="#678d4c"/><FaStar color="#678d4c"/>(105)</CardText>
                                <CardFooter><FaTag color="#678d4c"/>Rs.1000/=</CardFooter>
                                <Button outline color="success" size="sm">Order now</Button>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                      </CardDeck>
                      <CardDeck>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>
                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                          <Card>
                              <CardImg top width="100%" src={cusion} alt="product1"/>
                            <CardBody>
                                <CardTitle><b>Multicoloured Cusion covers</b></CardTitle>
                                <CardSubtitle>@RuaxBrothers</CardSubtitle>
                                <CardText></CardText>
                                <CardFooter></CardFooter>
                            </CardBody>

                          </Card>
                      </CardDeck>
                      
                      
                      
                      
                      
                </div> 
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
export default HomeDecor;
