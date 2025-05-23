import React, { useContext } from "react";
import dynamic from "next/dynamic";
import MyContext from "@/auth/Contex";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NotificationSlider = () => {
  const { name, role, url, nmrole, username } = useContext(MyContext);

  const items = [
    { label: "Nama ", value: name },
    { label: "Role ", value: role },
    { label: "URL ", value: url },
    { label: "Nama Role ", value: nmrole },
    { label: "Username ", value: username },
  ];

  const notificationSliderOption = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    vertical: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <Slider
      className="notification-slider overflow-hidden m-0"
      {...notificationSliderOption}
    >
      {items.map((item, idx) => (
        <div key={idx}>
          <span>
            <strong>{item.label}:</strong> {item.value}
          </span>
        </div>
      ))}
    </Slider>
  );
};

export default NotificationSlider;
