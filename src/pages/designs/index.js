import DesignList from "../../components/FreeDesigns/DesignList";
import Head from 'next/head';
import { useRouter } from "next/router";
const YourPage = () => {
const router=useRouter();
  return (
    <div>
       <Head>
        <title>House Designs Collection | Daji.co.in</title>
      </Head>
      <DesignList
       label={router.query.name}
       title={router.query.data}
       authId={router?.query?.id}
       />
    </div>
  );
};

export default YourPage;
