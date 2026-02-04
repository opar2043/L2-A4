import ChooseUs from "@/components/Layouts/ChooseUs";
import { Hero1 } from "@/components/Layouts/Hero";
import Menus from "@/components/Layouts/Menus";
import OurProcess from "@/components/Layouts/OurProcess";
import OurStory from "@/components/Layouts/OurStory";
import RestaurantServices from "@/components/Layouts/RestaurentService";


export default function Home() {
  return (
    <div className="w-11/12 mx-auto max-w-7xl">
       <Hero1></Hero1>
       <Menus></Menus>
       <OurProcess></OurProcess>
       <RestaurantServices></RestaurantServices>
       <OurStory></OurStory>
       <ChooseUs></ChooseUs>
    </div>
  );
}
