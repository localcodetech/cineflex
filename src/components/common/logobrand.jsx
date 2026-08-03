


import { appName } from "@/constants/appContants";
import { navLinkStyle } from "@/constants/appvalues";
import { NavLink } from "react-router";

const AppNameBrand = () =>{

    return (
        <NavLink to={"/home"}  className={navLinkStyle}>
            {appName}
        </NavLink>
    )
};

export default AppNameBrand;