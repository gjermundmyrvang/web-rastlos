import { TextGenerateEffect } from "./ui/text-generate-effect"

export const SectionHeader = ({title} : {title: string}) => {
  return (
    <TextGenerateEffect 
      className="text-w-[40px] my-10 md:text-5xl lg:text-6xl"
      words={title}
      duration={2}
    />
  )
}
