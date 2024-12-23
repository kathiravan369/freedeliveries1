//import Image from "next/image";
import NavbarSection from "../Container/Navbar/navbar"
import HomePageSection from "../Container/HomePage/homePage"
import FooterSection from "@/Container/FooterPage/footerPage";
export default function Home() {
  return (
    <div>
     <NavbarSection/>
     <HomePageSection/>
     <FooterSection/>
    </div>
  );
}
