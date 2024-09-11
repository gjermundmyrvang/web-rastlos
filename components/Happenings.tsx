import { happeningItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export const Happenings = () => {
  return (
    <section id="happenings">
      <BentoGrid>
        {happeningItems.map((item) => (
          <BentoGridItem 
          id={item.id}
          key={item.id}
          title={item.title}
          header={item.header}
          description={item.description}
          className={item.className}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
