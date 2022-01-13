import "./assets/styles/App.scss";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import banner from "./assets/images/banner.svg";
import processEllipse2 from "./assets/images/processEllipse2.svg";
import about from "./assets/images/about.svg";
import economy from "./assets/images/economy.svg";
import playIcon from "./assets/images/icons/playIcon.svg";
import about_divider from "./assets/images/about_divider.svg";
import banner1 from "./assets/images/banner1.png";
import banner2 from "./assets/images/banner2.png";
import banner3 from "./assets/images/banner3.png";
import banner4 from "./assets/images/banner4.png";
import banner5 from "./assets/images/banner5.png";

import Background from "./components/Background";
import Particles from "./components/Particles";
import Services from "./components/Services";
import FeedbackSlider from "./components/FeedbackSlider";
import Platforms from "./components/Platforms";
import Roadmap from "./components/Roadmap";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      {/* <Background /> */}
      <Particles />
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
                <a href="#about_title">
                  <div className="banner_circle"></div>
                </a>
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
          <div className="about">
            <h1 className="primary_title" id="about_title">
              About
            </h1>
            <div className="about_container">
              <h1 className="secondary_title mobile_title">
                Chainversum{" "}
                <span>
                  develops
                  <br /> Blockchain decentralized
                  <br /> Apps for your success
                </span>
              </h1>
              <div className="about_left">
                <img src={about} alt="" className="about_image" />
              </div>
              <div className="about_center">
                <img src={about_divider} alt="" className="about_divider" />
                <img src={playIcon} alt="" className="about_icon" />
              </div>
              <div className="about_right">
                <h1 className="secondary_title">
                  Chainversum{" "}
                  <span>
                    develops
                    <br /> Blockchain decentralized
                    <br /> Apps for your success
                  </span>
                </h1>
                <p className="descp">
                  We love Blockchain and Crypto. We are a tribe of engineers and
                  software developers building blockchain solutions for crypto
                  startups, enterprises, and also governments across the globe.
                  Our software Tech company is based in Switzerland. If you are
                  passionate about the potential of Blockchain Technology and
                  Crypto world and want to be part of the next web generation,
                  we’d love to hear from you!
                </p>
              </div>
            </div>
          </div>

          <div className="about">
            <h1 className="primary_title" id="about_title">
              DECENTRALISED ECONOMY
            </h1>
            <div className="about_container about_container2">
              <div className="about_right">
                <h1 className="secondary_title">
                  Blockchain
                  <span>
                    {" "}
                    will reshape
                    <br /> Your industry. Be
                    <br /> prepared. With us
                  </span>
                </h1>
                <p className="descp">
                  Blockchain is changing Finance, helping Artists profit more
                  from their creative Works and Global supply chains are about
                  to get better thanks to it.
                </p>
                <br />
                <ul>
                  <li className="descp">
                    <div className="radio">
                      <span></span>
                    </div>
                    <span>
                      <strong>DEFI </strong>We develope Decentralized Exchanges,
                      Stake and Yield Farming Apps and more...
                    </span>
                  </li>
                  <li className="descp">
                    <div className="radio">
                      <span></span>
                    </div>
                    <span>
                      <strong>DEFI </strong> We develope Decentralized
                      Exchanges, Stake and Yield Farming Apps and more...{" "}
                    </span>
                  </li>
                  <li className="descp">
                    <div className="radio">
                      <span></span>
                    </div>
                    <span>
                      <strong>DAPPS </strong> Our team passion is to develope
                      all sorts of decentralized Apps on the Blockchain (Dapps){" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="about_left">
                <img src={economy} alt="" className="about_image2" />
              </div>
              <h1 className="secondary_title mobile_title">
                Blockchain
                <span>
                  {" "}
                  will reshape
                  <br /> Your industry. Be
                  <br /> prepared. With us
                </span>
              </h1>
            </div>
          </div>
          <div className="services_bg">
            <div className="services">
              <h1 className="primary_title">
                <span className="descp">WHAT WE OFFER</span>
                <br />
                Awesome services
              </h1>
              <Services />
            </div>

            <div className="services feedback">
              <h1 className="primary_title">
                <span className="descp">Client Feedback</span>
                <br />
                What do people say about us?
              </h1>
            </div>
            <FeedbackSlider />

            <div className="services ">
              <h1 className="primary_title">
                Blockchain Development Platforms we work on
              </h1>
              <Platforms />
            </div>

            <div className="services ">
              <h1 className="primary_title">
                <span className="descp">ROADMAP</span>
                <br />
                The timeline of our business
              </h1>
              <Roadmap />
            </div>

            <div className="services">
              <div className="process_title"></div>
              <img src={processEllipse2} alt="" className="process_title2"/>
              <h1 className="primary_title">
                <span className="descp">Process</span>
                <br />
                how we work
              </h1>
              <br />
              <br />
              <Process />
            </div>

            <div className="services">
              <h1 className="primary_title">
                <span className="descp">OUR DATA</span>
                <br />
                Statistic Information
              </h1>
              <br />
              <br />
              <Statistics />
            </div>

            <div className="services">
              <h1 className="primary_title">
                <span className="descp">OUR ACHIEVEMENTS SO FAR</span>
                <br />
                Projects
              </h1>
              <br />
              <br />
              <div className="projects_container">
                <div className="banner_bottom projects">
                  <img src={banner1} alt="" />
                  <img src={banner2} alt="" />
                  <img src={banner3} alt="" />
                  <img src={banner4} alt="" />
                  <img src={banner5} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="team_bgContainer">
            <div className="team_bg"></div>
            <div className="services">
              <h1 className="primary_title">
                <span className="descp">OUR BRAIN</span>
                <br />
                AWESOME TEAM
              </h1>
              <br />
              <br />
              <Teams />
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;
