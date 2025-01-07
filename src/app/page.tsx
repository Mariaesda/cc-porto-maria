import Image from "next/image";
import Navbar from "./personal-web/aboutme/page";
import Hero from "./personal-web/hero/page";
import Card from "./personal-web/section/page";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
