import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideContainer, H3, ImgContainer1, BgSection, Block, ImgContainer2, ImgContainer3, H4, P, Button, DataContainer } from './SlideStyle';


const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <SlideContainer>
      <H3>Latest News</H3>
      <Slider {...settings}>
        <Block>
          <ImgContainer1>
            <BgSection>
              <DataContainer>21, June, 2019</DataContainer>
            </BgSection>
          </ImgContainer1>
          <H4>Nullam Ullamcorper Ornare Molestie</H4>
          <P>Suspendisse posuere, diam in bibendum lobortis,<br /> turpis ipsum aliquam risus, sit amet ...</P>
          <Button to='#'>Learn More</Button>
        </Block>
        <Block>
          <ImgContainer2>
            <BgSection>
              <DataContainer>21, June, 2019</DataContainer>
            </BgSection>
          </ImgContainer2>
          <H4>Nullam Ullamcorper Ornare Molestie</H4>
          <P>Suspendisse posuere, diam in bibendum lobortis,<br /> turpis ipsum aliquam risus, sit amet ...</P>
          <Button to='#'>Learn More</Button>
        </Block>

        <Block>
          <ImgContainer3>
            <BgSection>
              <DataContainer>21, June, 2019</DataContainer>
            </BgSection>
          </ImgContainer3>
          <H4>Nullam Ullamcorper Ornare Molestie</H4>
          <P>Suspendisse posuere, diam in bibendum lobortis,<br /> turpis ipsum aliquam risus, sit amet ...</P>
          <Button to='#'>Learn More</Button>
        </Block>

        <Block>
          <ImgContainer1>
            <BgSection>
              <DataContainer>21, June, 2019</DataContainer>
            </BgSection>
          </ImgContainer1>
          <H4>Nullam Ullamcorper Ornare Molestie</H4>
          <P>Suspendisse posuere, diam in bibendum lobortis,<br /> turpis ipsum aliquam risus, sit amet ...</P>
          <Button to='#'>Learn More</Button>
        </Block>

        <Block>
          <ImgContainer2>
            <BgSection>
              <DataContainer>21, June, 2019</DataContainer>
            </BgSection>
          </ImgContainer2>
          <H4>Nullam Ullamcorper Ornare Molestie</H4>
          <P>Suspendisse posuere, diam in bibendum lobortis,<br /> turpis ipsum aliquam risus, sit amet ...</P>
          <Button to='#'>Learn More</Button>
        </Block>

      </Slider>
    </SlideContainer>

  )
}

export default Slide