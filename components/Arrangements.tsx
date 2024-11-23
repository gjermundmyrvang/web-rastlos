import { happeningItems } from "@/data"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

const arrangements = happeningItems

export const Arrangements = () => {
  return (
    <div className="w-full grid grid-cols-1
     lg:grid-cols-3 gap-5">
        {arrangements.map((arr) => (
            <Link href={arr.link} key={arr.id} target="_blank" rel="noopener noreferrer">
                <Arrangement arr={arr}  />
            </Link>
        ))}
    </div>
  )
}

type ArrangementType = {
    title: string;
    date: string;
    time: string; 
    description: string; 
    id: number;
}

const Arrangement = ({arr}:{arr: ArrangementType}) => {
    return (
        <BackgroundGradient className="hover:cursor-pointer">
            <div className="flex flex-col flex-wrap p-5 min-h-[20vh] bg-black-100 rounded-3xl" id="arrangements">
                <h1 className="font-bold text-lg lg:text-3xl">{arr.title}</h1>
                <span className="flex space-x-2 mt-2">
                <p className="font-bold text-lg lg:text-xl">Dato:</p>
                <span className="text-lg lg:text-xl">{arr.date}</span>
                </span>
                <span className="flex space-x-2 mt-2">
                <p className="font-bold text-lg lg:text-xl">Tidspunkt:</p>
                <span className="text-lg lg:text-xl">{arr.time}</span>
                </span>
                <span className="flex space-x-2 mt-2">
                <p className="font-bold text-lg lg:text-xl">Beskrivelse:</p>
                <span className="text-lg lg:text-xl">{arr.description}</span>
                </span>
            </div>
        </BackgroundGradient>
    )
}
