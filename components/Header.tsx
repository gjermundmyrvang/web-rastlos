import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"

export const Header = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="blue"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="orange"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="orange"/>
        </div>

        <div className="flex relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Den beste foreningen på IFI noensinne!
                </h1>
                <TextGenerateEffect 
                className="text-center text-w-[40px] md:text-5xl lg:text-6xl"
                words="IFI RASTLØS"
                duration={2}
                />
            </div>
        </div>
    </div>
  )
}
