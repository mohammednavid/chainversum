import "./assets/styles/App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import banner from "./assets/images/banner.svg";
import banner1 from "./assets/images/banner1.png";
import banner2 from "./assets/images/banner2.png";
import banner3 from "./assets/images/banner3.png";
import banner4 from "./assets/images/banner4.png";
import banner5 from "./assets/images/banner5.png";
import Background from "./components/Background";
import Particles from "./components/Particles";

function App() {
  return (
    <>
      {/* <Background /> */}
      <Particles/>
      <main className="home">
        <Navbar />
        <section className="home_container">
          <div className="banner">
            <div className="banner_container">
              <div className="banner_left">
                <span>Chainversum</span>
                <h1 className="banner_title">
                  We Develope Blockchain Decentralized Apps
                </h1>
                <span>for your success</span>
                <div className="banner_line"></div>
              </div>
              <div className="banner_right">
                <img src={banner} alt="" className="banner_image" />
              </div>
            </div>
            <div className="banner_bottom">
              <img src={banner1} alt="" />
              <img src={banner2} alt="" />
              <img src={banner3} alt="" />
              <img src={banner4} alt="" />
              <img src={banner5} alt="" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
