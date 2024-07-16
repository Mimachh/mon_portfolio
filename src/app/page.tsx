import Navbar from "@/components/global/nav/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 lg:px-0 max-w-7xl mx-auto grid grid-cols-12 md:mt-8 mt-24  item-start md:items-center justify-between min-h-[calc(100vh-20px)]">
      <div className="col-span-12 md:col-span-8 lg:col-span-6 col-start-1 lg:col-start-2 w-full">
        <p className="font-normal tracking-tight text-[18px] text-primary mb-2">
          Born as a human, trained as a machine.
        </p>
        <h1 className="mb-16 md:leading-[5.5rem] font-anton text-foreground font-medium text-[75px]">
          Mimach, Full Stack Developer
        </h1>

        <div className="md:max-w-lg flex items-center gap-5">
          <Button
            variant={"outline"}
            className="shadow font-normal w-full h-[55px] rounded-3xl md:text-[18px]"
          >
            Click
          </Button>
          <Button
            variant={"primaryVariant"}
            className="shadow font-normal w-full h-[55px] rounded-3xl md:text-[18px]"
          >
            Click
          </Button>
        </div>
      </div>

      <div className="hidden md:block col-span-12 md:col-span-4 lg:col-span-5 mx-auto">
        <Image src={"/mimach.svg"} width={"409"} height={"654"} alt="Mimach" />
      </div>
    </div>
  );
}
