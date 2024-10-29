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
const contacts = [
    {
      id: 1,
      name: "Harry Fettel",
      messages: [
        { id: 1, sender: "Harry Fettel", content: "Hey, can we talk?", time: "9:30 am" },
        { id: 2, sender: "You", content: "Sure, what's up?", time: "9:32 am" },
        { id: 3, sender: "Harry Fettel", content: "I’ve been thinking a lot about us lately… I don’t know if I’m overthinking it, or if you feel it too.", time: "9:34 am" },
        { id: 4, sender: "You", content: "What exactly have you been thinking about?", time: "9:35 am" },
        { id: 5, sender: "Harry Fettel", content: "Just... like, where we’re headed. Are we on the same page?", time: "9:37 am" },
        { id: 6, sender: "You", content: "Honestly, I feel the same sometimes. What are you feeling?", time: "9:39 am" },
        { id: 7, sender: "Harry Fettel", content: "I really care about you, and I don’t want to mess this up. I just worry sometimes that maybe we’re drifting?", time: "9:41 am" },
        { id: 8, sender: "You", content: "Drifting? How do you mean?", time: "9:42 am" },
        { id: 9, sender: "Harry Fettel", content: "I don’t know... like, we’ve been so busy with work and everything. I miss us.", time: "9:44 am" },
        { id: 10, sender: "You", content: "I know what you mean. Life’s been pulling us in all directions.", time: "9:45 am" },
        { id: 11, sender: "Harry Fettel", content: "Exactly. But I don’t want it to feel like we're losing touch, you know?", time: "9:47 am" },
        { id: 12, sender: "You", content: "I don’t want that either. So, what can we do to fix it?", time: "9:48 am" },
        { id: 13, sender: "Harry Fettel", content: "Maybe we could set aside time for just us each week? Like, a non-negotiable date night?", time: "9:50 am" },
        { id: 14, sender: "You", content: "I’d love that. We’ve been missing that lately.", time: "9:51 am" },
        { id: 15, sender: "Harry Fettel", content: "So, what do you think? Maybe Thursdays?", time: "9:52 am" },
        { id: 16, sender: "You", content: "Thursdays work! I’ll make sure to keep it clear. It’s a date then.", time: "9:54 am" },
        { id: 17, sender: "Harry Fettel", content: "Great! I already feel better talking this out with you.", time: "9:55 am" },
        { id: 18, sender: "You", content: "Same here. Communication is everything.", time: "9:56 am" },
        { id: 19, sender: "Harry Fettel", content: "Hey, while we’re on the subject, I also wanted to bring up something else.", time: "9:58 am" },
        { id: 20, sender: "You", content: "Go ahead, what’s on your mind?", time: "9:59 am" },
        { id: 21, sender: "Harry Fettel", content: "I've been thinking about our future… like, long-term. Have you thought about it?", time: "10:01 am" },
        { id: 22, sender: "You", content: "Honestly, yes. I have. I think about it a lot, actually.", time: "10:03 am" },
        { id: 23, sender: "Harry Fettel", content: "Yeah? Do you see us moving in together at some point?", time: "10:05 am" },
        { id: 24, sender: "You", content: "I could definitely see that. I think it would be amazing.", time: "10:07 am" },
        { id: 25, sender: "Harry Fettel", content: "Me too. It's something I've been wanting for a while.", time: "10:08 am" },
        { id: 26, sender: "You", content: "Let’s keep talking about it then. I’d love to start planning together.", time: "10:09 am" },
        { id: 27, sender: "Harry Fettel", content: "Thanks for being open about all this. It means a lot.", time: "10:11 am" },
        { id: 28, sender: "You", content: "Of course, we’re a team.", time: "10:12 am" },
        { id: 29, sender: "Harry Fettel", content: "I love hearing you say that.", time: "10:13 am" },
        { id: 30, sender: "You", content: "Because it’s true! We’re in this together.", time: "10:15 am" },
        { id: 31, sender: "Harry Fettel", content: "I feel so lucky to have you. I just wanted you to know that.", time: "10:17 am" },
        { id: 32, sender: "You", content: "I feel the same way. Every day with you is a gift.", time: "10:18 am" },
        { id: 33, sender: "Harry Fettel", content: "Thank you for always being here, for being you.", time: "10:19 am" },
        { id: 34, sender: "You", content: "You mean the world to me, Harry.", time: "10:20 am" },
        { id: 35, sender: "Harry Fettel", content: "How about we take a walk this evening? Just us, no distractions.", time: "10:21 am" },
        { id: 36, sender: "You", content: "That sounds perfect. Can’t wait.", time: "10:23 am" },
        { id: 37, sender: "Harry Fettel", content: "Looking forward to it too.", time: "10:24 am" },
        { id: 38, sender: "You", content: "Until then, remember I’m here, always.", time: "10:26 am" },
        { id: 39, sender: "Harry Fettel", content: "I know. And that makes all the difference.", time: "10:27 am" },
        { id: 40, sender: "You", content: "Love you, Harry.", time: "10:28 am" }
    ]
    
    },
    {
      id: 2, 
      name: "Frank Garcia", 
      messages: [
        { id: 1, sender: "Frank Garcia", content: "Hello! How are you?", time: "8:30 am" },
        { id: 2, sender: "You", content: "Doing well, thanks!", time: "8:35 am" },
      ],
    },
    {
      id: 3,
      name: "Maria Jeremy",
      messages: [
        { id: 1, sender: "Maria Jeremy", content: "Can you send the report?", time: "7:45 am" },
        { id: 2, sender: "You", content: "Sure, give me a moment.", time: "7:50 am" },
      ],
    },
  ];
export {dashBoardLinks ,dashBoardEssentialLinks,days,months,contacts}