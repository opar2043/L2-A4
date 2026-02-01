import ChooseUs from "@/components/Layouts/ChooseUs";
import { Hero1 } from "@/components/Layouts/Hero";
import OurProcess from "@/components/Layouts/OurProcess";
import OurStory from "@/components/Layouts/OurStory";
import RestaurantServices from "@/components/Layouts/RestaurentService";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto max-w-7xl">
       <Hero1></Hero1>
       <OurProcess></OurProcess>
       <RestaurantServices></RestaurantServices>
       <OurStory></OurStory>
       <ChooseUs></ChooseUs>
    </div>
  );
}
