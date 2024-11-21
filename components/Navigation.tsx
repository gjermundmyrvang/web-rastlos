import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandBlogger,
  IconBrandInstagram,
  IconCalendar,
  IconCalendarEvent,
  IconHome,
  IconMail,
  IconUser
} from "@tabler/icons-react";

export function TopNav() {
  const links = [
    {
      title: "Hjem",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#"
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/ifirastlos",
      newPage: true
    },
    {
      title: "Arrangementer",
      icon: (
          <IconCalendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#arrangements",
  },
    {
      title: "Styret",
      icon: (
          <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#members",
  },
  {
    title: "Semester",
    icon: (
        <IconCalendarEvent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#semester",
},
    {
        title: "Blog",
        icon: (
            <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#blog",
    },
    {
        title: "Kontakt",
        icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#contact",
    },
   
  ];
  return (
    <div className="flex items-center justify-center w-full my-10">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
