import { BiLineChart,BiFolder,BiHome ,BiCalendar, BiNotification } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
const dashBoardLinks = [{ name: "Dashboard", icon: <BiHome/>},{
    name:"Schedule",
    icon:<BiCalendar/>
},
{name:"progress",icon:<BiLineChart/>},{name:"projects",icon:<BiFolder/>},{name:"chats",icon:<BsChat/>}];
const dashBoardEssentialLinks = [
    {name:"notification" ,
        icon:<BiNotification/>
    },
    {name:"settings",
        icon:<FcSettings/>
    }
]
const days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
const months = ["Jan","Feb" ,"Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
export {dashBoardLinks ,dashBoardEssentialLinks,days,months}