
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Home.css"

import slide1 from "../assets/plants.jpeg";
import slide2 from "../assets/plant.jpeg";
import slide3 from "../assets/planting.jpeg";

function Home() {
  const themeColor = "rgb(22, 58, 24)";
  const navigate = useNavigate();
  const features = [
    { name: "10,000+", para: "Trees Planted" },
    { name: "500+", para: "Active Volunteers" },
    { name: "50+", para: "Plantation Drives" },
    { name: "25+", para: "Villages Covered" },
  ];

  return (
    <div className="min-vh-100 pt-5 mt-5">

      {/* Hero Section */}
        <div className="container mt-4">

  <div className="hero-slider">

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
    >

      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slide3} alt="" />
      </SwiperSlide>

    </Swiper>

    <div className="hero-overlay">

      <h1>
        Plant Trees,
        <br />
        Protect Our Future
      </h1>

      <p>
        Join our mission to create a greener and healthier planet.
        Together, we can plant trees, restore ecosystems, and inspire
        communities to take action for the environment.
      </p>

      <div className="hero-buttons">

        <button
          className="text-white login-btn"
          onClick={() => navigate("/login")}
        >
          Join as Volunteer
        </button>

        <button
          className="btn"
          style={{
            borderColor: "#fff",
            color: "#fff",
          }}
        >
          Donate Now
        </button>

      </div>

    </div>

  </div>

</div>

     
      <div className="container mt-4">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div
                className="card h-100 event-card"
              >
                <div className="card-body text-center">
                  <h3 style={{ color: themeColor }}>
                    {feature.name}
                  </h3>
                  <p>{feature.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="container mt-2 mb-4">
        <div className="card shadow">
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>
              <h3 style={{ color: themeColor }}>
                Become a Green Hero Today
              </h3>

              <p>
                Every tree planted brings us one step closer to a sustainable
                future. Join our volunteer network and make a real impact.
              </p>
            </div>

            <button
             className="login-btn text-decoration-none "
             
             onClick={() => navigate("/login")}
            >
                Register now
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;