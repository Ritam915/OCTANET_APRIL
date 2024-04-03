import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center ">
            <h3 className="text-white">MERN Stack Developer</h3>
            <div className="h-50">
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
              <lottie-player
                src="https://lottie.host/e1aa1058-855b-4327-a7ea-3b419b220ee2/0rshikCjIi.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center ">
            <div className="h-50">
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
              <lottie-player
                src="https://lottie.host/a432eb8f-9fed-469d-bd1e-b15182d33fd7/URVeEKv5kj.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
            </div>
            <h1 className="text-white"> WEB Developer</h1>
          </div>
        </div>
        <div className="seprator">
          <span>LANDING PAGE</span>
        </div>
      </div>
    </>
  );
};

export default Home;
