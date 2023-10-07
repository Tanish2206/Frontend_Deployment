import React, { memo, useState } from 'react';
import { Image, Box, IconButton, Tooltip, Flex, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const ImageCarousel = ({ images }) => {
 
  const [scrollIndex, setScrollIndex] = useState(0);
  const showImages = 3; // Number of images to show at a time

  const imageData = images?.siteImagesUrls ? images?.siteImagesUrls : images?.designImagesUrls;

  const totalImages = images && imageData?.length + images?.videosUrls?.length;
  const maxScrollIndex = totalImages;

  const scrollImages = (direction) => {
    if (direction === "left") {
      setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxScrollIndex - 1));
    }
  };

  return (
    <VStack spacing={4} align="center">
      <Box
        position="relative"
        w={['100%', '408px']}
        h={['300px', '408px']}
        borderRadius="lg"
        overflow="hidden"
      >
        {images?.videosUrls?.length > 0 && scrollIndex >= imageData?.length && images?.amount &&  (
          <video
            src={
              images?.isFree
                ? images?.videosUrls[scrollIndex - imageData?.length]
                : 'paidimage.png'
            }
            width="100%"
            height="100%"
            controls
            style={{ maxWidth: "100%", height: "auto" }}
          >
            Your browser does not support the video tag.
          </video>
        )}
        {images?.videosUrls?.length > 0 && scrollIndex >= imageData?.length  &&  (
          <video
            src={images?.videosUrls[scrollIndex - imageData?.length]}
            width="100%"
            height="100%"
            controls
            style={{ maxWidth: "100%", height: "auto" }}
          >
            Your browser does not support the video tag.
          </video>
        )}
        {imageData?.length > 0 && scrollIndex < imageData?.length && images?.amount && (
          <Image
            src={images?.isFree ? imageData[scrollIndex] : 'paidimage.png'}
            boxSize="100%"
            objectFit="cover"
            alt={`Image ${scrollIndex}`}
          />
        )}
        {imageData?.length > 0 && scrollIndex < imageData?.length && (
          <Image
            src={imageData[scrollIndex]}
            boxSize="100%"
            objectFit="cover"
            alt={`Image ${scrollIndex}`}
          />
        )}
      
      </Box>

      <Flex mt={2} justify="center" align="center" w="100%" overflowX="auto">
        <IconButton
          aria-label="Scroll Left"
          icon={<ChevronLeftIcon />}
          variant="ghost"
          onClick={() => scrollImages("left")}
          isDisabled={scrollIndex === 0}
        />

        {imageData?.concat(images?.videosUrls).slice(scrollIndex, scrollIndex + showImages)?.map((url, index) => (
          <Tooltip key={index} label={`Item ${index}`}>
            <Box
              w={['60px', '75px']}
              h={['60px', '75px']}
              overflow="hidden"
              borderRadius="lg"
              cursor="pointer"
              onClick={() => setScrollIndex(index)}
              opacity={index >= scrollIndex && index < scrollIndex + showImages ? 1 : 0.5}
              transition="opacity 0.3s ease-in-out"
            >
              {index < imageData?.length && images?.amount ? (
                <Image
                  src={images?.isFree ? url : 'paidimage.png'}
                  boxSize="100%"
                  objectFit="cover"
                  alt={`Image ${index}`}
                />
              ) : (
                images?.amount?
                <video width="100%" height="100%" style={{ maxWidth: '100%', height: 'auto' }}>
                  <source src={images?.isFree ? url : 'paidimage.png'} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>:""
              )}
              {index < imageData?.length  ? (
                <Image
                  src={url}
                  boxSize="100%"
                  objectFit="cover"
                  alt={`Image ${index}`}
                />
              ) : (
                <video width="100%" height="100%" style={{ maxWidth: '100%', height: 'auto' }}>
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
          </Tooltip>
        ))}

        <IconButton
          aria-label="Scroll Right"
          icon={<ChevronRightIcon />}
          variant="ghost"
          onClick={() => scrollImages("right")}
          isDisabled={scrollIndex >= maxScrollIndex - 1}
        />
      </Flex>
    </VStack>
  );
};

export default memo(ImageCarousel);
