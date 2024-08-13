import Image from "next/image";
import Container from "./shared/container";
import ButtonPrimary from "./ui/button-primary";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero-page.webp"
          alt="Hero"
          fill
          className="object-cover"
        />
        <Container>
          <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 lg:left-40 lg:translate-x-0 -translate-y-1/2 space-y-10">
              <h1 className="text-white text-6xl 2xl:text-8xl font-semibold text-center lg:text-left">
                Your body <br /> Will transform
              </h1>
              <p className="text-gray-500">
                We are commited to helping you trnasform your life <br />
                as part of our commitment to you.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <ButtonPrimary
                  type="button"
                  text="Get Started"
                  className="w-full"
                />
                <ButtonPrimary
                  type="button"
                  text="Watch reviews"
                  className="border-2 border-primary bg-transparent hover:bg-transparent w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
