import SingleImage from "./SingleImage";

const Hero = () => {
  return (
    <div className=" bg-black pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
      <div className="mx-24 flex flex-wrap">
        <div className="w-full px-4 lg:w-6/12">
          <div className="hero-content">
            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Kickstart Startup Website with TailGrids
            </h1>
            <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
              With TailGrids, business and students thrive together. Business
              can perfectly match their staffing to changing demand throughout
              the dayed.
            </p>
            <ul className="flex flex-wrap items-center">
              <li>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                >
                  Download App
                </a>
              </li>
            </ul>
            <div className="clients pt-16">
              <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                Some Of Our Clients
                <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
              </h6>

              <div className="flex items-center space-x-4">
                <SingleImage
                  href="#"
                  imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                />

                <SingleImage
                  href="#"
                  imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                />

                <SingleImage
                  href="#"
                  imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-6/12">
          <div className="lg:ml-auto lg:text-right">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                alt="hero"
                className="max-w-full lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
