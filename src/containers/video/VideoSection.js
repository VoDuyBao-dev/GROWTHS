import React, { useContext, useState } from "react";
import "./VideoSection.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function VideoSection() {
  const { isDark } = useContext(StyleContext);
  const [open, setOpen] = useState(false);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="video-section" id="video">
        <h1 className="video-title">
          Câu Chuyện Của Growths 🌱
        </h1>
        <p className="video-subtitle">
          Xem cách chúng tôi biến lời chúc thành mầm xanh yêu thương
        </p>

        {/* Thumbnail */}
        <div
          className={`video-thumbnail ${isDark ? "dark" : ""}`}
          onClick={() => setOpen(true)}
        >
          <img
            src="https://img.youtube.com/vi/Vn3WFc1TV-Q/maxresdefault.jpg"
            alt="Growths Video"
          />
          <div className="play-button">
  <div className="play-triangle"></div>
</div>
        </div>

        {/* Modal */}
        {open && (
          <div className="video-modal" onClick={() => setOpen(false)}>
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/Vn3WFc1TV-Q?autoplay=1"
                title="Growths Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
