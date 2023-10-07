import Projects from "@/components/Projects/Projects";
import NavBar from "@/components/Home/NavBar";
import Footer from "@/components/Home/Footer";
import { useRouter } from "next/router";
export default function projects() {
  const router=useRouter();
      const result= router.query.name;
  return (
    <>
     {/* <NavBar/>  */}
    <Projects/>
    <Footer/>
    </>
  )
}