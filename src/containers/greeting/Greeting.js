import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import {Fade} from "react-reveal";
// import SproutIcon from "../../components/icons/SproutIcon";


export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <Button text="Xem Sản Phẩm" href="#contact" />
                )}

                
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* Thêm ảnh thiệp giấy */}
            <img
              alt="Growths Seed Paper"
              src={require("../../assets/images/cover-image.png")}
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
