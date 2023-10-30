import React, { useEffect, useState, useRef } from "react";
import { Box, IconButton, Stack, Heading, Container } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AuthService from "../../utils/AuthService";

const banners = [
  {
    image:
      "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/Banners/banner_1.jpg",
    title: "",
  },
  {
    image:
      "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/Banners/banner2min.jpg",
    title: "",
  },
  {
    image:
      "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/Banners/banner3min.jpg",
    title: "",
  },
  {
    image:
      "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/Banners/banner4.jpg",
    title: "",
  },
  {
    image:
      "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/Banners/banner5.jpg,",
    title: "",
  },
];

export default function Carousel() {
  const sliderRef = useRef(null);
  const [carouselData, setCarouselData] = useState([]);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const response = await AuthService.getBanners();
        if (response?.status === 200) {
          setCarouselData(response?.data?.response_data);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    }

    // fetchBanners();
    setCarouselData(banners);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  return (
    <Box position="relative" height="60vh" width="100%">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={goToPrevSlide}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={goToNextSlide}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="autoplay-toggle"
        variant="ghost"
        position="absolute"
        bottom={4}
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
        onClick={toggleAutoplay}
      >
        {/* {autoplay ? "Stop Autoplay" : "Start Autoplay"} */}
      </IconButton>
      <Slider ref={sliderRef} {...settings}>
        {carouselData.map((card) => (
          <Box
            key={card?.id}
            height="60vh"
            // backgroundImage={`url(${card?.siteImagesUrls[0]})`}
            backgroundImage={`url(${card?.image})`}
            backgroundPosition="center"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
          >
            <Container
              maxW="container.lg"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              px={4}
            >
              <Stack spacing={6} textAlign="center" color="white">
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  px={{ base: 0, md: 4 }}
                >
                  {card?.title}
                </Heading>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
