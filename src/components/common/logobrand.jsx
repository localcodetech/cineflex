


import { appName } from "@/constants/appContants";
import { appNameStyle} from "@/constants/appvalues";
import { NavLink } from "react-router";

const AppNameBrand = () =>{

    return (
        <NavLink to={"/home"}  className={appNameStyle}>
            {appName}
        </NavLink>
    )
};

export default AppNameBrand;