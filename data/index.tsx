const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nam vero ullam recusandae illum delectus voluptatum consectetur ratione architecto amet.</p>
    </div>
  );

export const happeningItems = [
    {
        title: "Tur til Gaustadtoppen", 
        header: <Skeleton />,
        description: "blabla", 
        id: 1,
        className: "md:col-span-2",
    },
    {
        title: "Tur til Gaustadtoppen", 
        header: <Skeleton />,
        description: "blabla", 
        id: 2,
        className: "md:col-span-1",
    },
    {
        title: "Tur til Gaustadtoppen",
        header: <Skeleton />, 
        description: "blabla", 
        id: 3,
        className: "md:col-span-1",
    },
    {
        title: "Tur til Gaustadtoppen", 
        header: <Skeleton />,
        description: "blabla", 
        id: 4,
        className: "md:col-span-2",
    }, 
  ]

