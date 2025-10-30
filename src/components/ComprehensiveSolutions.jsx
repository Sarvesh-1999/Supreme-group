import "swiper/css";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Pause, Play } from "lucide-react";

// === VIDEO IMPORTS ===
import passengerAlpha from "../assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4";
import commercialAlpha from "../assets/Commercial Alpha.92c92d40f9116c837d1d.mp4";
import commercialCabin from "../assets/Commercial-Cabin.69adf15a8021267cbe8c.mp4";
import commercialEngine from "../assets/Commercial-Engine.d8957f7c027ca396858e.mp4";

import front from "../assets/Front.8f5fda304d3095ab6b02.mp4";
import cabin from "../assets/Cabin.3260d3e4f52b3804dae5.mp4";
import trunk from "../assets/Trunk.54bfaa734c0395172c08.mp4";
import exterior from "../assets/Exterior.a127ebb308e655c7e32c.mp4";

// === IMAGE IMPORTS ===
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
      description: "Revving up innovation from interior to exterior.",
      mainVideo: passengerAlpha,
    },
    {
      id: "commercial",
      title: "Commercial vehicles",
      description: "Advancing engineering for heavy-duty vehicles.",
      mainVideo: commercialAlpha,
    },
  ];

  const features = {
    passenger: [
      { id: "body", label: "Complete body", img: completeBodyImg, video: passengerAlpha },
      { id: "front", label: "Front", img: frontImg, video: front },
      { id: "cabin", label: "Cabin", img: cabinImg, video: cabin },
      { id: "trunk", label: "Trunk", img: trunkImg, video: trunk },
      { id: "exterior", label: "Exterior", img: exteriorImg, video: exterior },
    ],
    commercial: [
      { id: "body", label: "Complete body", img: commercialBodyImg, video: commercialAlpha },
      { id: "engine", label: "Engine", img: commercialEngineImg, video: commercialEngine },
      { id: "cabin", label: "Cabin", img: commercialCabinImg, video: commercialCabin },
    ],
  };

  const [currentVideo, setCurrentVideo] = useState(passengerAlpha);
  const [activeTab, setActiveTab] = useState("passenger");
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Auto switch between Passenger & Commercial on scroll
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.5) {
        setActiveTab("commercial");
        setCurrentVideo(commercialAlpha);
      } else {
        setActiveTab("passenger");
        setCurrentVideo(passengerAlpha);
      }
    });
  }, [scrollYProgress]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const activeVehicle = vehicleOptions.find((v) => v.id === activeTab);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden py-20 min-h-screen"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span> <br />
          comprehensive solutions
        </h2>
      </div>

      {/* Vehicle Section */}
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Left - Vehicle Tabs */}
        <nav
          aria-label="Vehicle categories"
          role="tablist"
          className="space-y-10 border-l border-white/30 pl-6 md:w-1/3"
        >
          {vehicleOptions.map((vehicle) => (
            <button
              key={vehicle.id}
              id={`tab-${vehicle.id}`}
              role="tab"
              aria-selected={activeTab === vehicle.id}
              aria-controls={`panel-${vehicle.id}`}
              tabIndex={activeTab === vehicle.id ? 0 : -1}
              onClick={() => {
                setActiveTab(vehicle.id);
                setCurrentVideo(vehicle.mainVideo);
              }}
              className={`block text-left transition-all duration-500 relative ${
                activeTab === vehicle.id
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              {activeTab === vehicle.id && (
                <span className="absolute -left-[1.5rem] top-1/2 -translate-y-1/2 w-[2px] h-10 bg-white" />
              )}
              <h3 className="text-2xl font-bold mb-2">{vehicle.title}</h3>
              <p className="text-sm text-gray-300">{vehicle.description}</p>
            </button>
          ))}
        </nav>

        {/* Right - Video + Features */}
        <article
          id={`panel-${activeVehicle.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeVehicle.id}`}
          className="flex flex-col items-center md:w-2/3"
        >
          {/* Vehicle Video */}
          <div className="max-w-[1063.73px] aspect-[1063.73/540.25] w-full relative">
            <AnimatePresence mode="wait">
              <motion.video
                key={currentVideo}
                ref={videoRef}
                src={currentVideo}
                autoPlay
                muted
                loop
                playsInline
                className="object-contain w-full h-full rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Play / Pause button */}
            <button
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-6 right-6 p-3 rounded-full bg-black/50 border border-white/40 hover:bg-black/70 transition"
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
            </button>
          </div>

          {/* Features Icons */}
          <motion.ul
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {(activeTab === "passenger"
              ? features.passenger
              : features.commercial
            ).map((feature, index) => (
              <li
                key={feature.id}
                className={`flex flex-col items-center transition-all duration-300 cursor-pointer ${
                  index === currentFeatureIndex ? "opacity-100 scale-110" : "opacity-50"
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentFeatureIndex(index);
                    setCurrentVideo(feature.video);
                  }}
                  className="focus:outline-none rounded-lg"
                >
                  <img
                    src={feature.img}
                    alt={feature.label}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                </button>
                <span className="text-xs md:text-sm text-gray-400 mt-2">
                  {feature.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </article>
      </div>
    </section>
  );
}
