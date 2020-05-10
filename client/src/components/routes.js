import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined';

import Home from "./Home/Home";
import Welcome from "./Welcome/Welcome";
import PageNotFound from "./error/PageNotFound";
const pathIds = {
    home: "home",
    welcome: "welcome",
    error404: "error404"
};

const pathRouting = {
    home: "/",
    welcome: "/welcomeUser",
    error404:"/error/404"
};

const pageRoutes = {
    [pathIds.home]: {
        path: pathRouting.home,
        sidebarName: "Visualizer",
        icon: HomeOutlinedIcon,
        component: Home
    },
    [pathIds.welcome]: {
        path: pathRouting.welcome,
        sidebarName: "Welcome",
        icon: InfoOutlinedIcon,
        component: Welcome
    },
    [pathIds.error404]: {
        path: pathRouting.error404,
        sidebarName: "Page Not Found",
        icon: ErrorOutlinedIcon,
        noRender: true,
        component: PageNotFound
    }
};

export { pageRoutes, pathIds, pathRouting };
