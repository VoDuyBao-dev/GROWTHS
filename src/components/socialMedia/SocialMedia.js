import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {/* Video Hướng Dẫn - YouTube */}
      {socialMediaLinks.youtube && (
        <a
          href={socialMediaLinks.youtube}
          className="icon-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      )}

      {/* Facebook */}
      {socialMediaLinks.facebook && (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      )}

      {/* Instagram */}
      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      )}

      {/* Zalo - Dùng hình ảnh official để đẹp và đúng logo */}
      {socialMediaLinks.zalo && (
        <a
          href={socialMediaLinks.zalo}
          className="icon-button zalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/images/zalo-icon.png")}
            alt="Zalo"
            className="zalo-img"
          />
        </a>
      )}
      {/* Số điện thoại - Phone xanh lá */}
      {socialMediaLinks.phone && (
        <a href={socialMediaLinks.phone} className="icon-button phone">
          <i className="fas fa-phone"></i>
        </a>
      )}
    </div>
  );
}
