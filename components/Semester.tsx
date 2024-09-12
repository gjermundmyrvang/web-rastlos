import { semesterPlan } from "@/data"
import { Timeline } from "./ui/timeline"

export const Semester = () => {
  return (
    <Timeline data={semesterPlan} />
  )
}
