import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandBlogger,
  IconBrandInstagram,
  IconHome,
  IconMail
} from "@tabler/icons-react";

export function TopNav() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/ifirastlos",
    },
    {
        title: "Blog",
        icon: (
            <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Kontakt",
        icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
   
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}

export function BottomNav() {
  const links = [
    {
      title: "Top",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/ifirastlos",
    },
    {
        title: "Blog",
        icon: (
            <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Kontakt",
        icon: (
            <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
   
  ];
  return (
    <div className="flex items-center justify-center w-full mb-20">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
