import { Fade } from "react-reveal";
import chart from "../assets/images/chart.svg";
import "../assets/styles/Statistics.scss";

const Statistics = () => {
  return (
    <div className="container stats">
      <div className="stats_container">
        <div className="stats_left">
          <img src={chart} alt="" />
          <div className="stats_names">
            <p className="nfts">NFTs</p>
            <p className="defi">Defi</p>
            <p className="dapps">dapps</p>
            <p className="supply_chain">Supply Chain</p>
          </div>
        </div>
        <div className="stats_right">
          <Fade delay={200}>
            <p className="descp">
              We combine tech expertise, business intelligence, the best
              technologies on the market, and a skilled expert team to deliver
              high-value results in the following Areas:
            </p>
          </Fade>
          <br />
          <br />
          <Fade delay={400}>
            <ul>
              <li className="descp">
                <div className="radio">
                  <span></span>
                </div>
                NFTs (Blockchains: Ethereum, polygon and Solana)
              </li>
              <br />
              <li className="descp">
                <div className="radio">
                  <span></span>
                </div>
                Defi and Yield Farming (Ethereum, polygon)
              </li>
              <br />
              <li className="descp">
                <div className="radio">
                  <span></span>
                </div>
                Decentralized Exchanges (Ethereum, polygon)
              </li>
              <br />
              <li className="descp">
                <div className="radio">
                  <span></span>
                </div>
                Supply chain (Ethereum, polygon)
              </li>
            </ul>
          </Fade>
        </div>
      </div>
      <Fade delay={200}>
        <div className="stats_bottom">
          <div className="stats_bottomContainer">
            <h1 className="stats_number">67</h1>
            <p className="stats_name">Blockchain Projects</p>
          </div>
          <div className="stats_bottomContainer">
            <h1 className="stats_number">12</h1>
            <p className="stats_name">NFT Projects</p>
          </div>
          <div className="stats_bottomContainer">
            <h1 className="stats_number">147</h1>
            <p className="stats_name">Smart Contracts Deployed</p>
          </div>
          <div className="stats_bottomContainer">
            <h1 className="stats_number">10</h1>
            <p className="stats_name">Fullstack Developer</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Statistics;
