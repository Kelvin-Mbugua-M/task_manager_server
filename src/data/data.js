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
        { id: 3, sender: "Harry Fettel", content: "I’ve been thinking a lot about us lately…", time: "9:34 am" },
        { id: 4, sender: "Harry Fettel", content: "I don’t know if I’m overthinking it, or if you feel it too.", time: "9:35 am" },
        { id: 5, sender: "You", content: "What exactly have you been thinking about?", time: "9:36 am" },
        { id: 6, sender: "Harry Fettel", content: "Like, do you think we’re on the same page?", time: "9:37 am" },
        { id: 7, sender: "You", content: "Honestly, I feel the same sometimes.", time: "9:39 am" },
        { id: 8, sender: "You", content: "What are you feeling about us?", time: "9:40 am" },
        { id: 9, sender: "Harry Fettel", content: "I really care about you. I worry we might be drifting apart.", time: "9:41 am" },
        { id: 10, sender: "You", content: "Drifting? How do you mean?", time: "9:42 am" },
        { id: 11, sender: "Harry Fettel", content: "I don’t know... it feels like we’ve been busy with work.", time: "9:44 am" },
        { id: 12, sender: "Harry Fettel", content: "I miss the time we used to spend together.", time: "9:45 am" },
        { id: 13, sender: "You", content: "I know what you mean. Life has been pulling us in different directions.", time: "9:46 am" },
        { id: 14, sender: "You", content: "I don’t want us to lose touch.", time: "9:47 am" },
        { id: 15, sender: "Harry Fettel", content: "Maybe we could set aside time for just us each week?", time: "9:48 am" },
        { id: 16, sender: "Harry Fettel", content: "Like, a non-negotiable date night?", time: "9:49 am" },
        { id: 17, sender: "You", content: "I’d love that. We’ve been missing that lately.", time: "9:51 am" },
        { id: 18, sender: "You", content: "How about Thursdays?", time: "9:52 am" },
        { id: 19, sender: "Harry Fettel", content: "Thursdays work! I’ll keep it clear. It’s a date then.", time: "9:54 am" },
        { id: 20, sender: "Harry Fettel", content: "Great! Talking this out makes me feel so much better.", time: "9:55 am" },
        { id: 21, sender: "You", content: "Same here. Communication is everything.", time: "9:56 am" },
        { id: 22, sender: "Harry Fettel", content: "By the way, I wanted to bring up something else.", time: "9:58 am" },
        { id: 23, sender: "Harry Fettel", content: "I've been thinking about our future…", time: "9:59 am" },
        { id: 24, sender: "Harry Fettel", content: "Have you thought about it?", time: "10:00 am" },
        { id: 25, sender: "You", content: "Honestly, yes. I think about it a lot.", time: "10:01 am" },
        { id: 26, sender: "You", content: "I can see us together long-term.", time: "10:02 am" },
        { id: 27, sender: "Harry Fettel", content: "Do you see us moving in together at some point?", time: "10:03 am" },
        { id: 28, sender: "You", content: "I could definitely see that. It would be amazing.", time: "10:04 am" },
        { id: 29, sender: "Harry Fettel", content: "Me too. It's something I've wanted for a while.", time: "10:05 am" },
        { id: 30, sender: "You", content: "Let’s keep talking about it then. I’d love to plan together.", time: "10:06 am" },
        { id: 31, sender: "Harry Fettel", content: "Thanks for being open about this. It means a lot.", time: "10:07 am" },
        { id: 32, sender: "You", content: "Of course, we’re a team.", time: "10:08 am" },
        { id: 33, sender: "Harry Fettel", content: "I love hearing you say that.", time: "10:09 am" },
        { id: 34, sender: "You", content: "Because it’s true! We’re in this together.", time: "10:10 am" },
        { id: 35, sender: "Harry Fettel", content: "I feel so lucky to have you. Just wanted you to know that.", time: "10:11 am" },
        { id: 36, sender: "You", content: "I feel the same way. Every day with you is a gift.", time: "10:12 am" },
        { id: 37, sender: "Harry Fettel", content: "Thank you for always being here, for being you.", time: "10:13 am" },
        { id: 38, sender: "You", content: "You mean the world to me, Harry.", time: "10:14 am" },
        { id: 39, sender: "Harry Fettel", content: "How about we take a walk this evening? Just us, no distractions.", time: "10:15 am" },
        { id: 40, sender: "Harry Fettel", content: "I think it would really help us reconnect.", time: "10:16 am" },
        { id: 41, sender: "You", content: "That sounds perfect. Can’t wait.", time: "10:17 am" },
        { id: 42, sender: "You", content: "Looking forward to it too.", time: "10:18 am" },
        { id: 43, sender: "Harry Fettel", content: "Until then, remember I’m here, always.", time: "10:19 am" },
        { id: 44, sender: "You", content: "I know. That makes all the difference.", time: "10:20 am" },
        { id: 45, sender: "Harry Fettel", content: "Love you, Harry.", time: "10:21 am" },
        { id: 46, sender: "You", content: "Love you too!", time: "10:22 am" }
    ]
    
    
    },
    {
      id: 2, 
      name: "Frank Garcia", 
      messages: [
    { id: 1, sender: "Frank Garcia", content: "Hey, how's your week going?", time: "June 1, 9:00 am" },
    { id: 2, sender: "You", content: "Not too bad! Just busy with work. How about you?", time: "June 1, 9:02 am" },
    { id: 3, sender: "Frank Garcia", content: "Same here. I have a project deadline coming up.", time: "June 1, 9:03 am" },
    { id: 4, sender: "Frank Garcia", content: "Trying to stay on top of everything, you know?", time: "June 1, 9:04 am" },
    { id: 5, sender: "You", content: "I totally get it. Let’s make sure to take breaks too!", time: "June 1, 9:06 am" },
    { id: 6, sender: "Frank Garcia", content: "Definitely! Maybe we can plan something fun this weekend?", time: "June 1, 9:08 am" },
    { id: 7, sender: "You", content: "That sounds great! Any ideas in mind?", time: "June 1, 9:10 am" },
    { id: 8, sender: "Frank Garcia", content: "How about a hike? I heard there's a nice trail nearby.", time: "June 1, 9:11 am" },
    { id: 9, sender: "You", content: "I love that idea! Let's do it.", time: "June 1, 9:12 am" },
    { id: 10, sender: "Frank Garcia", content: "Perfect! I’ll bring some snacks.", time: "June 1, 9:13 am" },
    { id: 11, sender: "You", content: "Awesome! I’ll bring the water.", time: "June 1, 9:14 am" },
    { id: 12, sender: "Frank Garcia", content: "Looking forward to it!", time: "June 1, 9:15 am" },
    { id: 13, sender: "You", content: "Me too! See you Saturday.", time: "June 1, 9:16 am" },
    { id: 14, sender: "Frank Garcia", content: "See you!", time: "June 1, 9:17 am" },
    
    { id: 15, sender: "Frank Garcia", content: "How was the hike?", time: "June 3, 5:00 pm" },
    { id: 16, sender: "You", content: "It was amazing! The view was worth it.", time: "June 3, 5:01 pm" },
    { id: 17, sender: "Frank Garcia", content: "Glad to hear that! I had a blast.", time: "June 3, 5:02 pm" },
    { id: 18, sender: "You", content: "We should definitely do it again soon.", time: "June 3, 5:03 pm" },
    { id: 19, sender: "Frank Garcia", content: "Agreed! Maybe we can explore a different trail next time.", time: "June 3, 5:04 pm" },
    
    { id: 20, sender: "You", content: "What do you think of a beach day next weekend?", time: "June 10, 10:00 am" },
    { id: 21, sender: "Frank Garcia", content: "That sounds perfect! I love the beach.", time: "June 10, 10:01 am" },
    { id: 22, sender: "You", content: "I’ll pack a picnic!", time: "June 10, 10:02 am" },
    { id: 23, sender: "Frank Garcia", content: "Great! I'll bring the frisbee.", time: "June 10, 10:03 am" },
    { id: 24, sender: "You", content: "Can't wait! It’s going to be so much fun.", time: "June 10, 10:04 am" },

    { id: 25, sender: "Frank Garcia", content: "Did you catch that new movie that just came out?", time: "June 15, 7:00 pm" },
    { id: 26, sender: "You", content: "Not yet! Is it good?", time: "June 15, 7:01 pm" },
    { id: 27, sender: "Frank Garcia", content: "I really liked it. We should go see it together.", time: "June 15, 7:02 pm" },
    { id: 28, sender: "You", content: "Let’s do it! How about this weekend?", time: "June 15, 7:03 pm" },
    { id: 29, sender: "Frank Garcia", content: "Sounds like a plan! What time works for you?", time: "June 15, 7:04 pm" },
    
    { id: 30, sender: "You", content: "How about Saturday evening?", time: "June 16, 10:00 am" },
    { id: 31, sender: "Frank Garcia", content: "Perfect! I’ll grab the tickets.", time: "June 16, 10:01 am" },
    { id: 32, sender: "You", content: "Awesome! I’m excited!", time: "June 16, 10:02 am" },
    
    { id: 33, sender: "Frank Garcia", content: "Hey, did you hear about that art exhibit opening next month?", time: "July 5, 1:00 pm" },
    { id: 34, sender: "You", content: "No, I haven’t! What’s it about?", time: "July 5, 1:01 pm" },
    { id: 35, sender: "Frank Garcia", content: "It's focused on local artists. I thought it might be fun to check it out together.", time: "July 5, 1:02 pm" },
    { id: 36, sender: "You", content: "That sounds amazing! Let’s definitely go.", time: "July 5, 1:03 pm" },
    
    { id: 37, sender: "Frank Garcia", content: "How about next Friday?", time: "July 10, 10:00 am" },
    { id: 38, sender: "You", content: "Friday works for me! What time?", time: "July 10, 10:01 am" },
    { id: 39, sender: "Frank Garcia", content: "Maybe around 6?", time: "July 10, 10:02 am" },
    { id: 40, sender: "You", content: "Sounds good! I’ll see you then.", time: "July 10, 10:03 am" },
    
    { id: 41, sender: "Frank Garcia", content: "Looking forward to it!", time: "July 10, 10:04 am" },
    { id: 42, sender: "You", content: "Me too! It’ll be fun.", time: "July 10, 10:05 am" },

    { id: 43, sender: "Frank Garcia", content: "I was thinking, we should plan a weekend getaway soon.", time: "July 20, 3:00 pm" },
    { id: 44, sender: "You", content: "That sounds like a great idea! Where do you want to go?", time: "July 20, 3:01 pm" },
    { id: 45, sender: "Frank Garcia", content: "How about the mountains? We could go hiking and relax.", time: "July 20, 3:02 pm" },
    { id: 46, sender: "You", content: "I’m in! I love the mountains.", time: "July 20, 3:03 pm" },
    
    { id: 47, sender: "Frank Garcia", content: "Let’s pick a weekend in August.", time: "July 20, 3:04 pm" },
    { id: 48, sender: "You", content: "Sounds good! I’ll look at some places.", time: "July 20, 3:05 pm" },
    { id: 49, sender: "Frank Garcia", content: "Awesome! Can’t wait!", time: "July 20, 3:06 pm" },
    
    { id: 50, sender: "You", content: "By the way, how's your project going?", time: "July 30, 11:00 am" },
    { id: 51, sender: "Frank Garcia", content: "It's almost done! Just a few final touches.", time: "July 30, 11:01 am" },
    { id: 52, sender: "You", content: "That's great! You’ve been working hard.", time: "July 30, 11:02 am" },
    { id: 53, sender: "Frank Garcia", content: "Thanks! I appreciate the support.", time: "July 30, 11:03 am" },
    { id: 54, sender: "You", content: "Always here for you! Let’s celebrate once it’s done.", time: "July 30, 11:04 am" },
    
    { id: 55, sender: "Frank Garcia", content: "For sure! How about dinner out?", time: "July 30, 11:05 am" },
    { id: 56, sender: "You", content: "Perfect! I’ll make a reservation.", time: "July 30, 11:06 am" },
    { id: 57, sender: "Frank Garcia", content: "Can’t wait to celebrate!", time: "July 30, 11:07 am" },
    
    { id: 58, sender: "You", content: "Hey! Are we still on for the mountains this weekend?", time: "August 5, 10:00 am" },
    { id: 59, sender: "Frank Garcia", content: "Absolutely! I’m all packed.", time: "August 5, 10:01 am" },
    { id: 60, sender: "You", content: "Awesome! I’ll be ready by noon.", time: "August 5, 10:02 am" },
    { id: 61, sender: "Frank Garcia", content: "Great! Let’s have an amazing time.", time: "August 5, 10:03 am" },
    
    { id: 62, sender: "You", content: "I had a wonderful time this weekend!", time: "August 8, 5:00 pm" },
    { id: 63, sender: "Frank Garcia", content: "Me too! The hike was incredible.", time: "August 8, 5:01 pm" },
    { id: 64, sender: "You", content: "We should make it a regular thing.", time: "August 8, 5:02 pm" },
    { id: 65, sender: "Frank Garcia", content: "Definitely! I loved every moment.", time: "August 8, 5:03 pm" }
]
,
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