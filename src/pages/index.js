import Home from "../components/Home/Home";
import Head from "next/head";
export default function Index() {
  return (
    <>
      <Head>
        <title>
          Ready-made House Designs, Architecture, and Interior Services |
          Daji.co.in
        </title>
        <meta
          name="description"
          content="Welcome to Daji.co.in! Discover a wide array of services, including free and paid ready-made house designs, customized architecture, MEP, interior, Vastu consultancy, landscaping, and immersive walk-through experiences. Explore our expert services and turn your dreams into reality. Contact us today!"
        />
        <meta name="google-site-verification" content="FfRkn7xhvTo1dDl9ksSEG-1_zJGFkcmooWfEw7DyMpw" />
        <title>Daji</title>
        <link rel="icon" href="/logo.png" />
        <link rel="canonical" href="https://www.daji.co.in" />
      </Head>
      <Home></Home>
    </>
  );
}
