import Container from "@/components/shared/container";
import Title from "@/components/ui/title";

import SectionList from "@/components/about/sections/section-list";
import SectionImages from "@/components/about/sections/section-images";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Why Join With" titlePrimary="Us?" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <SectionList />
          <SectionImages />
        </div>
      </Container>
    </section>
  );
};

export default About;
