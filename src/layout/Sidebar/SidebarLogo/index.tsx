import Image from "next/image";
import Link from "next/link";
import FeatherIconCom from "../../../../CommonElements/Icons/FeatherIconCom";
import layoutContext from "helper/Layout";
import { useContext } from "react";

const SidebarLogo = () => {
  const { setSideBarToggle, sideBarToggle } = useContext(layoutContext);
  return (
    <div className="logo-wrapper">
      <Link href={"/dashboard/default"}>
        <Image
          className="img-fluid for-light"
          src={"/assets/images/logo/sintesa_type_sapphire_blue.svg"}
          alt="icon"
          width={121}
          height={110}
        />
        <Image
          className="img-fluid for-dark"
          src={"/assets/images/logo/sintesa_type_white.svg"}
          alt="icon"
          width={121}
          height={110}
        />
      </Link>
      <div
        className="back-btn"
        onClick={() => setSideBarToggle(!sideBarToggle)}
      >
        <i className="fa fa-angle-left" />
      </div>
      <div
        className="toggle-sidebar"
        onClick={() => setSideBarToggle(!sideBarToggle)}
      >
        <FeatherIconCom
          iconName={"Grid"}
          className="status_toggle middle sidebar-toggle"
        />
      </div>
    </div>
  );
};

export default SidebarLogo;
