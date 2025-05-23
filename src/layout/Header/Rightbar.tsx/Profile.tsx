"use client";
import Image from "next/image";
import Link from "next/link";
import FeatherIconCom from "CommonElements/Icons/FeatherIconCom";
import React from "react";
import { Admin, EmayWalter, Href, Logout } from "utils/Constant";
import { profileListData } from "Data/HeaderData";
// import { Logout } from "../../../../utils/Constant/index";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useContext } from "react";
import MyContext from "@/auth/Contex";

const Profile = () => {
  const router = useRouter();
  const {
    name,
    role,
    url,
    nmrole,
    logout,
    totNotif,
    setNamelogin,
    username,
    visibilityStatuses,
    setVisibilityStatuses,
    tampilAI,
  } = useContext(MyContext);

  const handleLogout = async () => {
    Cookies.remove("token");
    await logout();
    localStorage.removeItem("status");
    router.push("/authentication/login");
  };
  return (
    <li className="profile-nav onhover-dropdown pe-0 py-0">
      <div className="media profile-media">
        <Image
          className="b-r-10"
          src="/assets/images/dashboard/profile.png"
          alt=""
          width={35}
          height={35}
        />
        <div className="media-body">
          <span>{name}</span>
          <p className="mb-0 font-roboto">
            {Admin} <i className="middle fa fa-angle-down" />
          </p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {profileListData &&
          profileListData.map((item, index) => (
            <li key={index}>
              <Link href={Href}>
                <FeatherIconCom iconName={item.icon} />
                <span>{item.text} </span>
              </Link>
            </li>
          ))}
        <li onClick={handleLogout}>
          <a href="#123">
            <FeatherIconCom iconName={"LogIn"} />
            <span>{Logout}</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Profile;
