import Title from "@/components/ui/title";
import Container from "./shared/container";
import Service from "@/components/ui/service";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center mb-10 lg:mb-0"
    >
      <Container>
        <Title title="Fitness Plans &" titlePrimary="Nutritions" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          <Service
            image="/icons/icon-1.png"
            title="Weight Loss"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo"
          />
          <Service
            image="/icons/meditacion.png"
            title="Classic Yoga"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo"
          />
          <Service
            image="/icons/cycling.png"
            title="Cycling"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo"
          />
          <Service
            image="/icons/brazo.png"
            title="Body Building"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo"
          />
          <Service
            image="/icons/gimnasio.png"
            title="Musculation"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo"
          />
          <Service
            image="/icons/correr.png"
            title="Fitness Running"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo"
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
