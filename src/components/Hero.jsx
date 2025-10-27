import vid1 from "../assets/automotive.224e7418884105595114.mp4";

const Hero = () => {
  return (
    <div className="w-full min-h-[450px]  relative top-10 left-0">
      <div className="absolute inset-0 bg-black/60"></div>
      <video
        src={vid1}
        className=" w-full object-cover min-h-[450px]"
        muted
        autoPlay
        loop
      ></video>

      <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
        <span className="font-light pt-2 pb-3 text-lg lg:text-xl font-manrope text-white block leading-snug">
          Driven by performance
        </span>

        <h2 className="text-white text-[28px] md:text-4xl font-light leading-tight pb-2">
          <span className="font-semibold">
            Soft trims and{" "}
            <span className="text-[#00BFFF]">NVH solutions</span>
          </span>
          <br className="hidden md:block" /> for seamless rides
        </h2>
      </div>
    </div>
  );
};

export default Hero;
