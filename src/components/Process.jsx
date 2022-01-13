import step1 from "../assets/images/step1.svg";
import step2 from "../assets/images/step2.svg";
import step3 from "../assets/images/step3.svg";
import step4 from "../assets/images/step4.svg";
import step5 from "../assets/images/step5.svg";
import step6 from "../assets/images/step6.svg";
import radio from "../assets/images/radio2.svg";
import "../assets/styles/Process.scss";

const Process = () => {
  return (
    <div className="process container">
      <div className="process_container">
        <aside className="step_side">
          <div className="step_number">
            <img src={step1} alt="" />
            <p className="descp">Step 1</p>
            <p className="step_title">Requirements</p>
          </div>
          <p className="descp">
            Dignissim pretium sit cursus magna ullamcorper amet. Eros commodo
            massa interdum blandit et orci. In maecenas turpis facilisi morbi
            risus vestibulum rutrum. Rhoncus lorem nulla in ut. Viverra purus
            nisi blandit faucibus risus mollis dui. Id sed a viverra sed
            porttitor senectus viverra non. Aliquam eleifend tellus egestas eu
            cursus.
          </p>
        </aside>
        <aside className="indicator">
          <img src={radio} alt="" />
        </aside>
      </div>

      <div className="process_container">
        <aside className="step_indicator">
          <img src={radio} alt="" />
        </aside>
        <aside className="step_side">
          <div className="step_number">
            <img src={step1} alt="" />
            <p className="descp">Step 1</p>
            <p className="step_title">Requirements</p>
          </div>
          <p className="descp">
            Dignissim pretium sit cursus magna ullamcorper amet. Eros commodo
            massa interdum blandit et orci. In maecenas turpis facilisi morbi
            risus vestibulum rutrum. Rhoncus lorem nulla in ut. Viverra purus
            nisi blandit faucibus risus mollis dui. Id sed a viverra sed
            porttitor senectus viverra non. Aliquam eleifend tellus egestas eu
            cursus.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Process;
