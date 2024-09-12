import Image from "next/image";
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

  export const members = [
    {
      description: "Gjerry The Tenth",
      title: "CTO",
      src: "/members/gjerry.JPG",
      ctaText: "Visit",
      ctaLink: "#",
      content: () => {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus excepturi facere autem. Assumenda, accusamus! Voluptates, quod tempore? Harum reiciendis alias dolorem aut, quae a esse aperiam ad, ullam similique ducimus possimus sed omnis quam sunt error. Voluptate quia, impedit sit assumenda sunt mollitia et recusandae facilis iusto blanditiis vero!
          </p>
        );
      },
    },
    {
        description: "Ola The Dread",
        title: "Nestkommanderende",
        src: "/members/gjerry.JPG",
        ctaText: "Visit",
        ctaLink: "#",
        content: () => {
          return (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus excepturi facere autem. Assumenda, accusamus! Voluptates, quod tempore? Harum reiciendis alias dolorem aut, quae a esse aperiam ad, ullam similique ducimus possimus sed omnis quam sunt error. Voluptate quia, impedit sit assumenda sunt mollitia et recusandae facilis iusto blanditiis vero!
            </p>
          );
        },
      },
      {
        description: "Mina The Beast",
        title: "BOSS",
        src: "/members/gjerry.JPG",
        ctaText: "Visit",
        ctaLink: "#",
        content: () => {
          return (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus excepturi facere autem. Assumenda, accusamus! Voluptates, quod tempore? Harum reiciendis alias dolorem aut, quae a esse aperiam ad, ullam similique ducimus possimus sed omnis quam sunt error. Voluptate quia, impedit sit assumenda sunt mollitia et recusandae facilis iusto blanditiis vero!
            </p>
          );
        },
      },
      {
        description: "Herman The G",
        title: "Arrangementkoordinator",
        src: "/members/gjerry.JPG",
        ctaText: "Visit",
        ctaLink: "#",
        content: () => {
          return (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus excepturi facere autem. Assumenda, accusamus! Voluptates, quod tempore? Harum reiciendis alias dolorem aut, quae a esse aperiam ad, ullam similique ducimus possimus sed omnis quam sunt error. Voluptate quia, impedit sit assumenda sunt mollitia et recusandae facilis iusto blanditiis vero!
            </p>
          );
        },
      },
  ];

  export const semesterPlan = [
    {
      title: "Oktober 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white-100 text-xs md:text-lg font-normal mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat quasi doloremque id modi sed autem labore amet rerum eos!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white-100 text-xs md:text-lg font-normal mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi laboriosam ab reprehenderit expedita dolorem nostrum cupiditate nihil. Nihil, harum eos?
          </p>
          <p className="text-neutral-800 dark:text-white-100 text-xs md:text-lg font-normal mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, tempore ea? Fugiat porro voluptatibus suscipit cupiditate ipsa? Eum, ducimus a.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Desember 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white-100 text-xs md:text-lg font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam qui autem molestias, fuga repudiandae saepe recusandae rerum repellendus corporis. Odio suscipit consequuntur aut magnam ullam, sit rerum cumque quis!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/dummyPictures/dummy-image-square.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];