const Hero = () => {
  return (
    <div className=" bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
      <div className="mx-24 flex flex-wrap">
        <div className="w-full px-4 lg:w-6/12">
          <div className="hero-content">
            <h1 className="mb-10 text-4xl font-bold">
              آیا میدانید:شما با خرید از فروشگاه سایت به ما کمک می ‌کنید
            </h1>
            <p className="mb-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
        <div className="px-4 lg:w-6/12">
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
