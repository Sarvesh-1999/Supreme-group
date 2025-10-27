import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Pause, Play } from "lucide-react";

import passengerAlpha from "../assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4";
import commercialAlpha from "../assets/Commercial Alpha.92c92d40f9116c837d1d.mp4";
import commercialCabin from "../assets/Commercial-Cabin.69adf15a8021267cbe8c.mp4";
import commercialEngine from "../assets/Commercial-Engine.d8957f7c027ca396858e.mp4";

import front from "../assets/Front.8f5fda304d3095ab6b02.mp4";
import cabin from "../assets/Cabin.3260d3e4f52b3804dae5.mp4";
import trunk from "../assets/Trunk.54bfaa734c0395172c08.mp4";
import exterior from "../assets/Exterior.a127ebb308e655c7e32c.mp4";

import completeBodyImg from "../assets/completebody.png";
import frontImg from "../assets/front.png";
import trunkImg from "../assets/trunk.png";
import exteriorImg from "../assets/exterior.png";
import cabinImg from "../assets/Cabin.png";
import commercialCabinImg from "../assets/commercial-cabin.svg";
import commercialBodyImg from "../assets/commercial-body.svg";
import commercialEngineImg from "../assets/commercial-engine.==.svg";

export default function ComprehensiveSolutions() {
  const vehicleOptions = [
    {
      id: "passenger",
      title: "Passenger vehicles",
      description: "Revving up innovation from interior to exterior",
      mainVideo: passengerAlpha,
    },
    {
      id: "commercial",
      title: "Commercial vehicles",
      description: "Advancing engineering for heavy-duty vehicles",
      mainVideo: commercialAlpha,
    },
  ];

  const features = {
    passenger: [
      {
        id: "body",
        label: "Complete body",
        img: completeBodyImg,
        video: passengerAlpha,
      },
      { id: "front", label: "Front", img: frontImg, video: front },
      { id: "cabin", label: "Cabin", img: cabinImg, video: cabin },
      { id: "trunk", label: "Trunk", img: trunkImg, video: trunk },
      { id: "exterior", label: "Exterior", img: exteriorImg, video: exterior },
    ],
    commercial: [
      {
        id: "body",
        label: "Complete body",
        img: commercialBodyImg,
        video: commercialAlpha,
      },
      {
        id: "engine",
        label: "Engine",
        img: commercialEngineImg,
        video: commercialEngine,
      },
      {
        id: "cabin",
        label: "Cabin",
        img: commercialCabinImg,
        video: commercialCabin,
      },
    ],
  };

  const [currentVideo, setCurrentVideo] = useState(passengerAlpha);
  const [activeTab, setActiveTab] = useState("passenger");
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6], [100, 0, -100]);
  const activeVehicle = vehicleOptions.find((v) => v.id === activeTab);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Sticky heading */}
      <div className="relative h-[120vh] flex items-center justify-center">
        <motion.h2
          style={{ opacity, y }}
          className="text-center text-xl md:text-3xl lg:text-5xl font-light leading-tight"
        >
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span>
          <br />
          nonwoven solutions
        </motion.h2>
      </div>

      {/* Desktop layout (unchanged) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="min-h-screen py-24 px-4 md:px-8 lg:px-16 hidden md:block"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left - Tabs */}
          <div className="space-y-8">
            {vehicleOptions.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => {
                  setActiveTab(vehicle.id);
                  setCurrentVideo(vehicle.mainVideo);
                }}
                className={`block text-left transition-all duration-300 pl-5 py-5 border-l-2 ${
                  activeTab === vehicle.id
                    ? "border-white opacity-100"
                    : "border-transparent opacity-50 hover:opacity-75"
                }`}
              >
                <h3 className="md:text-2xl lg:text-[28px] font-bold mb-2">
                  {vehicle.title}
                </h3>
                <p className="text-sm md:text-[16px] font-normal">
                  {vehicle.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right - Video + Features */}
          <div className="relative flex flex-col items-center gap-10 justify-center h-full">
            {activeVehicle && (
              <div className="w-[500px] p-6 h-full max-w-md relative group">
                <video
                  ref={videoRef}
                  key={activeVehicle.id}
                  src={currentVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-contain rounded-lg"
                />
                {/* Hide play/pause on mobile */}
                <button
                  onClick={togglePlayPause}
                  className="hidden md:block absolute bottom-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 border border-white/30 hover:border-white transition-all"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {(activeTab === "passenger"
                ? features.passenger
                : features.commercial
              ).map((feature, index) => (
                <div
                  key={feature.id}
                  className={`flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer ${
                    index === currentFeatureIndex
                      ? "opacity-100 scale-110"
                      : "opacity-50"
                  }`}
                  onClick={() => {
                    setCurrentFeatureIndex(index);
                    setCurrentVideo(feature.video);
                  }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-gray-900 border border-gray-700">
                    <img
                      src={feature.img}
                      alt={feature.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 text-center whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ✅ Mobile layout */}
<div className="md:hidden space-y-12 px-4 pb-20">
  {vehicleOptions.map((vehicle) => (
    <div key={vehicle.id} className="text-center">
      <h3 className="text-lg font-semibold mb-1 text-sky-400">{vehicle.title}</h3>
      <p className="text-sm text-gray-300 mb-4">{vehicle.description}</p>

      {/* Swiper for features */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: `.pagination-${vehicle.id}`,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="pb-10"
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          const video = features[vehicle.id][index].video;
          const videoEl = document.getElementById(`${vehicle.id}-video`);
          if (videoEl) {
            videoEl.src = video;
            videoEl.play();
          }
        }}
      >
        {features[vehicle.id].map((feature) => (
          <SwiperSlide key={feature.id}>
            <div className="flex flex-col items-center mb-6">
              <video
                id={`${vehicle.id}-video`}
                src={feature.video}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg w-full max-w-xs object-contain mb-3"
              />
              <span className="text-sm text-gray-300">{feature.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}
      <div
        className={`pagination-${vehicle.id} mt-2  flex justify-center gap-2`}
      ></div>
    </div>
  ))}
</div>

    </section>
  );
}
