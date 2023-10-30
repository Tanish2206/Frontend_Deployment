import React, { useEffect, useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// Settings for the slider
import FeaturedDesignCard from "./FeaturedDesignCard";
import AuthService from "../../utils/AuthService";

const designs = [
  {
    image:
      "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/Bedroom+01.jpg",
    title: "Bedroom",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/Living+Area.jpg",
    title: "Living Area",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/populerDesignExterior.jpg",
    title: "Exterior"
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/populerDesignWareHouse.jpg",
    title: "Warehouse",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/populerDesign+Conference+Room.jpg",
    title: "Conference Hall",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/Toilet.jpg",
    title: "Washroom",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/School+02.jpg",
    title: "School",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/populerDesignKidsRoom.jpg",
    title: "Kids Room",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/bedroom.jpg",
    title: "Hotel Room",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/Tealogy.jpg",
    title: "Interior",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/populerDesign360+view+02.jpg",
    title: "3D Floor Plan",
  },
  {
    image:
    "https://daji-prod-2-s3-bucket.s3.ap-south-1.amazonaws.com/PopularDesigns/populerDesignHotel.jpg",
    title: "Hotel Interior",
  },
];
export default function BrandsCarouselElement() {
  const [slider, setSlider] = React.useState();
  const leftMargin = useBreakpointValue({ base: "0", md: "0" });
  const rightMargin = useBreakpointValue({ base: "0", md: "0" });
  const [designsData, setDesignsData] = useState([]);

  const top = "50%";

  const settings = {
    dots: false,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // medium screens
        settings: {
          slidesToShow: 3,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200, // large screens
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchPopularDesigns() {
      try {
         await AuthService?.getPopularDesigns()?.then((Response)=>{
          if(Response?.status===200){

           setDesignsData(Response?.data?.response_data)
          }
         }).catch((error)=>{

         })
  
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    }

    //fetchPopularDesigns();
    setDesignsData(designs);
  }, []);

  return (
    <Box
      height={"235px"}
      paddingLeft="20px"
      paddingRight="20px"
      // padding="10px"
      width={"full"}
      overflow={"hidden"}
      borderRadius="2"
      zIndex="0"
      position="relative"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <Box
        position="absolute"
        left={leftMargin}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        borderRadius="full"
        bg="orange.300"
      >
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          _hover={{ backgroundColor: "orange.400" }}
          onClick={() => slider?.slickPrev()}
          rounded="full"
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
      </Box>
      {/* Right Icon */}
      <Box
        position="absolute"
        right={rightMargin}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        borderRadius="full"
        bg="orange.300"
      >
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          _hover={{ backgroundColor: "orange.400" }}
          rounded="full"
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
      </Box>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {designsData?.map((elem, index) => (
          <FeaturedDesignCard key={elem?.id} elem={elem} />
        ))}
      </Slider>
    </Box>
  );
}
