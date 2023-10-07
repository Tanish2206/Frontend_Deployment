import { Box } from "@chakra-ui/react";
import Carousel from "./Corousel";
import FeatureDesignCarousel from "./FreatureDesignCorousel";
import WhyUs from "./WhyUs";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";
import Staticstics from "./Statistics";
import CallToActionWithIllustration from "./CallToActionEnquiry";
import Footer from "./Footer";
import { cards } from "../../utils/ConstantFields";
import WhatsAppButton from "./whatsAppButton";

export default function Home() {
  return (
    <Box
      overflowX="auto"
      overflowY="scroll"
      height="91vh"
      marginTop={1}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#827B7A",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#A0AEC0",
        },
        paddingX: "10px",
        "@media screen and (max-width: 768px)": {
          overflowY: "unset",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Carousel cart={cards} />
      <FeatureDesignCarousel />
      <WhyUs />
      <CallToActionWithIllustration />
      <OurServices />
      <Testimonials />
      <Staticstics />
      <Footer />
      <WhatsAppButton />
    </Box>
  );
}
