import Image from "next/image";

const SectionImages = () => {
    return ( <section className="flex-1 relative">
        <div className="lg:absolute lg:left-2 -top-40 2xl:left-8">
          <div className="relative w-[80vw] mb-5 lg:w-40  2xl:w-48 h-64">
            <Image
              src="/images/gym-1.webp"
              alt="gym"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:absolute lg:right-10 -top-8 xl:right-48 2xl:right-40">
          {" "}
          {/* top-0 */}
          <div className="relative w-[80vw] mb-5 lg:w-40 2xl:w-48 h-64">
            <Image
              src="/images/gym-2.webp"
              alt="gym"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:absolute lg:left-10 lg:top-28 2xl:top-40 2xl:left-20">
          <div className="relative w-[80vw] mb-5 lg:w-52  2xl:w-64 h-48">
            <Image
              src="/images/gym-3.webp"
              alt="gym"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="lg:absolute lg:right-20 -top-64 xl:right-56 2xl:right-52">
          <div className="relative w-[80vw] mb-5 lg:w-52  2xl:w-64 h-48">
            <Image
              src="/images/gym-4.webp"
              alt="gym"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section> );
}
 
export default SectionImages;