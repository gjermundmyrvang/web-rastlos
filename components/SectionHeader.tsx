
export const SectionHeader = ({title} : {title: string}) => {
  return (
    <div className="relative flex justify-start my-20">
        <h2 className="text-3xl font-bold tracking-tight text-white-100 sm:text-4xl">{title}:</h2>
    </div>
  )
}
