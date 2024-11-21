import Image from "next/image";

export const happeningItems = [
    {
        title: "Buldring", 
        date: "26.11.2024",
        time: "10:00",
        description: "Buldring i Oslo Klatrepark",
        link: "#", 
        id: 1,
    },
    {
        title: "Pepperkakehus", 
        date: "5.12.2024",
        time: "16:00",
        description: "Pepperkakebaking i kantinen på IFI!", 
        link: "#", 
        id: 2,
    },
  ]

  export const members = [
    {
      description: "Mina Williams",
      title: "Leder",
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
        description: "Ola Nordrum",
        title: "Nestleder",
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
        description: "Krisitine",
        title: "Arrengmentansvarlig",
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
        description: "",
        title: "Økonomiansvarlig",
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

  export const blogPosts = [
    {
      title: "Hyttetur",
      date: "20.10.2024",
      images: [
        {
          url: "/hyttetur/1.jpg",
          id: 1
        },
        {
          url: "/hyttetur/2.jpg",
          id: 2
        },
        {
          url: "/hyttetur/3.jpg",
          id: 3
        },
      ],
      content: "Bla bla bla",
      id: 1
    },
    {
      title: "Keramikk kurs",
      date: "12.11.2024",
      images: [
        {
          url: "/keramikk/1.jpg",
          id: 1
        },
      ],
      content: "Bla bla bla",
      id: 2
    },
  ]
  export const semesterPlan = [
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