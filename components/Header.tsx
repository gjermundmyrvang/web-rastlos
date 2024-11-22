import Image from "next/image"
import { Spotlight } from "./ui/Spotlight"

export const Header = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10" fill="blue"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] z-10" fill="orange"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="orange"/>
        </div>

        <div className="flex relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest text-xs sm:text-lg md:text-xl text-center text-blue-100 max-w-80">
                    Den beste foreningen på IFI noensinne!
                </h1>
                <Image src={"/assets/mainlogoW.png"} width={500} height={500} layout="responsive" alt="logo av ifirastløs" className="z-0"/>
            </div>
        </div>
    </div>
  )
}
