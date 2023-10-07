
import Footer from "@/components/Home/Footer"
import { useRouter } from "next/router";
import DesignerProject from "../../components/Designer/DesignerProject";
export default function projects() {
  const router=useRouter();
      const result= router.query.name;
  return (
    <>
     
     <DesignerProject/>
    <Footer/>
    </>
  )
}