import DesignList from "../../components/FreeDesigns/DesignList";
import Head from 'next/head';
import { useRouter } from "next/router";
import { useEffect } from "react";
const YourPage = () => {
const router=useRouter();

// console.log("id",router?.query?.id);
// useEffect(()=>{
// console.log("UserEffect of design")
// },[router?.query?.id])
  return (
    <div>
       <Head>
        <title>House Designs Collection | Daji.co.in</title>
      </Head>
      {/* <DesignCategory
      label={router.query.name}
      title={router.query.data}
      /> */}
      <DesignList
       label={router.query.name}
       title={router.query.data}
       authId={router?.query?.id}
       />
    </div>
  );
};

export default YourPage;
