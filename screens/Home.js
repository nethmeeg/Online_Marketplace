import React, { Component } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card, CardImg, CardTitle, CardText, CardDeck,
     CardBody, Media 
  } from 'reactstrap';
import decorSlide from './images/slide_decor.png';
import jewellarySlide from './images/slide_jewellary.png';
import cardSlide from './images/slide_card.png';
import foodSlide from './images/slide_food.png';
import toySlide from './images/slide_toys.png';
import logo from './images/logo.png';
import unique_item from './images/unique_item.jpg';
import interact from './images/interact.jpg';
import seller from './images/seller.jpg';
import './Styles.css';

  const items = [
    {
      src: decorSlide,
      altText: 'Handmade Home decor',
      caption: 'Unique Items to Decorate your Home'
    },
    {
      src: jewellarySlide,
      altText: 'Handmade Jewellery',
      caption: 'Look Glamourous in these handmade Jewellery'
    },
    {
      src: cardSlide,
      altText: 'Handmade Greeting cards',
      caption: 'Greet your loved ones with these handmade cards'
    },
    {
      src: foodSlide,
      altText: 'Homemade sweets and jam',
      caption: 'Treat your taste-buds with these yummy Homemade treats'
    },  
    {
      src: toySlide,
      altText: 'Handmade Toys and party decor',
      caption: 'Unique Gifts and party items'
    }    
  ];

 class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

    render() {
      const { activeIndex } = this.state;

      const slides = items.map((item) => {
        return (
            <CarouselItem 
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} className = "my-slides"/>
            <CarouselCaption  captionHeader={item.caption} />
          </CarouselItem>
          
          );
       });
         return (
           <div>
             <div className = "banner">
               <h2><i>If it is Handmade,Homemade,Unique or Custom.It's on Crafted</i></h2>
             </div>
             <div className = "slideshow-container">
              <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
            <div style ={{paddingTop:'5%', paddingBottom:'10%'}}>
            <div className = "container" >
    
                  <Media style = {{alignContent:"left"}}>
                      <Media left href="#">
                          <Media object src= {logo} alt="Logo" style = {{padding:"40px"}}/>
                      </Media>
                      <Media body>
                          <Media heading>
                              <h2 style={{color:'#678d4c', padding:'20px'}}>What is Crafted?</h2>
                          </Media>
                          We provide a meaningful space for self-employed Sri Lankan sellers to turn their creative passions into opportunity. 
                          We enable buyers to discover unique and customized items made with care. Crafted empowers artists, designers and 
                          craftholics to start and grow businesses in their own terms. It is an ecosystem that connects buyers looking for
                          handcrafted, custom or unique items with those who craft them for living or as a passion. 
                      </Media>
                  </Media>  

                  <CardDeck style={{padding:'100px'}}>
                  <Card>
                      <CardImg top width="100%" src= {unique_item} alt="Colourful bangles"  />
                      <CardBody>
                      <CardTitle>
                          <h4 style={{textAlign:'center', textDecoration:'bold'}}>Unique and Customized Items</h4>
                      </CardTitle>
                      <CardText>You can buy items that are unique and custom made.</CardText>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardImg top width="100%" src={seller} alt="Woman sewing" />
                      <CardBody>
                      <CardTitle>
                          <h4 style={{textAlign:'center', textDecoration:'bold'}}>Independant Sellers</h4>
                      </CardTitle>
                      <CardText>The sellers showcase and sell items independantly on their own shopfronts.</CardText>
                      </CardBody>
                  </Card>
                  <Card>
                      <CardImg top width="100%" src={interact} alt="Handcraft Sale"  />
                      <CardBody>
                      <CardTitle>
                      <h4 style={{textAlign:'center', textDecoration:'bold'}}>Interactive</h4>
                      </CardTitle>
                      <CardText>The buyers and sellers can interact when ordering items.They can also post notices on related exhibitions, sales and charity event.</CardText>
                      </CardBody>
                  </Card>
              </CardDeck> 
              </div>

            </div>
           </div>
           
        )

    }
}
export default Home;

