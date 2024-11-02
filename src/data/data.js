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
  const schedularBoard = [
    {
      "projectName": "Website Redesign",
      "projectDescription": "Complete overhaul of the company website for improved UX.",
      "dueDate": "2024-12-15",
      "progress": "75%",
      "assignedIndividuals": ["Alice", "Bob", "Charlie"],
      "creationDate": "2024-10-01",
      "priority": "High"
    },
    {
      "projectName": "Mobile App Development",
      "projectDescription": "Develop a cross-platform app for iOS and Android.",
      "dueDate": "2025-01-30",
      "progress": "40%",
      "assignedIndividuals": ["Diana", "Evan"],
      "creationDate": "2024-11-10",
      "priority": "Medium"
    },
    {
      "projectName": "Data Migration",
      "projectDescription": "Migrate all data to the new cloud platform.",
      "dueDate": "2024-11-20",
      "progress": "60%",
      "assignedIndividuals": ["Frank", "Grace"],
      "creationDate": "2024-09-15",
      "priority": "Urgent"
    },
    {
      "projectName": "Marketing Strategy Q1",
      "projectDescription": "Plan and execute marketing strategies for the first quarter.",
      "dueDate": "2024-12-30",
      "progress": "25%",
      "assignedIndividuals": ["Hannah", "Ian"],
      "creationDate": "2024-10-05",
      "priority": "Low"
    },
    {
      "projectName": "Security Audit",
      "projectDescription": "Perform a full security audit of the company systems.",
      "dueDate": "2024-11-30",
      "progress": "85%",
      "assignedIndividuals": ["James", "Karen"],
      "creationDate": "2024-10-20",
      "priority": "Immediate"
    },
    {
      "projectName": "Employee Training Program",
      "projectDescription": "Develop a training program for new employees.",
      "dueDate": "2024-12-05",
      "progress": "50%",
      "assignedIndividuals": ["Laura", "Michael"],
      "creationDate": "2024-10-15",
      "priority": "Medium"
    },
    {
      "projectName": "Product Launch",
      "projectDescription": "Coordinate and execute the launch of the new product line.",
      "dueDate": "2024-12-01",
      "progress": "90%",
      "assignedIndividuals": ["Nina", "Oscar", "Paul"],
      "creationDate": "2024-09-20",
      "priority": "Urgent"
    },
    {
      "projectName": "Financial Review",
      "projectDescription": "Conduct a comprehensive financial review of Q4 2023.",
      "dueDate": "2024-12-31",
      "progress": "30%",
      "assignedIndividuals": ["Quincy", "Rachel"],
      "creationDate": "2024-10-25",
      "priority": "High"
    },
    {
      "projectName": "System Upgrade",
      "projectDescription": "Upgrade to the latest operating system version.",
      "dueDate": "2024-11-10",
      "progress": "20%",
      "assignedIndividuals": ["Steve", "Tina"],
      "creationDate": "2024-10-18",
      "priority": "Immediate"
    },
    {
      "projectName": "Customer Feedback Analysis",
      "projectDescription": "Analyze recent customer feedback to improve services.",
      "dueDate": "2024-12-20",
      "progress": "55%",
      "assignedIndividuals": ["Uma", "Victor"],
      "creationDate": "2024-10-12",
      "priority": "Medium"
    },
    {
      "projectName": "Server Maintenance",
      "projectDescription": "Routine maintenance for all company servers.",
      "dueDate": "2024-11-25",
      "progress": "90%",
      "assignedIndividuals": ["Will", "Xander"],
      "creationDate": "2024-10-03",
      "priority": "High"
    },
    {
      "projectName": "Quarterly Report",
      "projectDescription": "Compile and analyze Q3 financial and performance reports.",
      "dueDate": "2024-12-15",
      "progress": "70%",
      "assignedIndividuals": ["Yara", "Zane"],
      "creationDate": "2024-09-30",
      "priority": "Urgent"
    },
    {
      "projectName": "New Hire Onboarding",
      "projectDescription": "Set up systems and training for new employees.",
      "dueDate": "2024-11-22",
      "progress": "45%",
      "assignedIndividuals": ["Alice", "Brian"],
      "creationDate": "2024-10-09",
      "priority": "Medium"
    },
    {
      "projectName": "Customer Survey",
      "projectDescription": "Conduct a survey to gather customer satisfaction data.",
      "dueDate": "2024-11-17",
      "progress": "35%",
      "assignedIndividuals": ["Chris", "Dana"],
      "creationDate": "2024-10-10",
      "priority": "Low"
    },
    {
      "projectName": "Inventory Check",
      "projectDescription": "Complete inventory audit for Q4.",
      "dueDate": "2024-12-02",
      "progress": "50%",
      "assignedIndividuals": ["Elena", "Fred"],
      "creationDate": "2024-10-12",
      "priority": "High"
    },
    {
      "projectName": "SEO Optimization",
      "projectDescription": "Improve website SEO for better search engine ranking.",
      "dueDate": "2024-12-08",
      "progress": "60%",
      "assignedIndividuals": ["Gary", "Helen"],
      "creationDate": "2024-10-02",
      "priority": "Urgent"
    },
    {
      "projectName": "Social Media Campaign",
      "projectDescription": "Develop a social media campaign for the holiday season.",
      "dueDate": "2024-12-18",
      "progress": "30%",
      "assignedIndividuals": ["Ivy", "Jake"],
      "creationDate": "2024-10-15",
      "priority": "Low"
    },
    {
      "projectName": "R&D Initiative",
      "projectDescription": "Research new product ideas for 2025.",
      "dueDate": "2024-12-31",
      "progress": "25%",
      "assignedIndividuals": ["Kim", "Leo"],
      "creationDate": "2024-09-18",
      "priority": "Medium"
    },
    {
      "projectName": "CRM Upgrade",
      "projectDescription": "Upgrade CRM system to new version.",
      "dueDate": "2024-11-29",
      "progress": "70%",
      "assignedIndividuals": ["Mona", "Nate"],
      "creationDate": "2024-10-20",
      "priority": "Immediate"
    },
    {
      "projectName": "Office Renovation",
      "projectDescription": "Renovate office spaces to improve workflow.",
      "dueDate": "2024-12-24",
      "progress": "10%",
      "assignedIndividuals": ["Oliver", "Penny"],
      "creationDate": "2024-09-10",
      "priority": "Low"
    },
      {
        "projectName": "Employee Handbook Update",
        "projectDescription": "Revise the employee handbook to reflect policy changes.",
        "dueDate": "2024-12-05",
        "progress": "65%",
        "assignedIndividuals": ["Alice", "Monica"],
        "creationDate": "2024-09-12",
        "priority": "High"
      },
      {
        "projectName": "Customer Loyalty Program",
        "projectDescription": "Develop a program to improve customer loyalty and retention.",
        "dueDate": "2025-01-10",
        "progress": "40%",
        "assignedIndividuals": ["Ben", "Lara"],
        "creationDate": "2024-11-01",
        "priority": "Urgent"
      },
      {
        "projectName": "Sales Training Workshop",
        "projectDescription": "Conduct a workshop to train sales teams on new techniques.",
        "dueDate": "2025-01-15",
        "progress": "50%",
        "assignedIndividuals": ["Fred", "Oscar"],
        "creationDate": "2024-10-18",
        "priority": "Medium"
      },
      {
        "projectName": "Employee Engagement Survey",
        "projectDescription": "Run a survey to assess employee engagement levels.",
        "dueDate": "2025-01-05",
        "progress": "25%",
        "assignedIndividuals": ["Rachel", "Victor"],
        "creationDate": "2024-10-20",
        "priority": "Low"
      },
      {
        "projectName": "Product Documentation Update",
        "projectDescription": "Update product documentation for the new release.",
        "dueDate": "2024-11-15",
        "progress": "80%",
        "assignedIndividuals": ["Ian", "Penny"],
        "creationDate": "2024-10-10",
        "priority": "Immediate"
      },
      {
        "projectName": "Data Migration to Cloud",
        "projectDescription": "Migrate legacy systems to the cloud environment.",
        "dueDate": "2025-02-20",
        "progress": "30%",
        "assignedIndividuals": ["Oscar", "Xander"],
        "creationDate": "2024-11-04",
        "priority": "High"
      },
      {
        "projectName": "Risk Assessment",
        "projectDescription": "Conduct risk assessment for 2025 projects.",
        "dueDate": "2024-12-08",
        "progress": "55%",
        "assignedIndividuals": ["Gary", "Chris"],
        "creationDate": "2024-10-06",
        "priority": "Urgent"
      },
      {
        "projectName": "SEO Audit",
        "projectDescription": "Audit SEO practices to identify improvement areas.",
        "dueDate": "2025-01-12",
        "progress": "35%",
        "assignedIndividuals": ["James", "Monica"],
        "creationDate": "2024-10-29",
        "priority": "Medium"
      },
      {
        "projectName": "Year-End Tax Preparation",
        "projectDescription": "Prepare tax documents for the fiscal year-end.",
        "dueDate": "2024-12-22",
        "progress": "60%",
        "assignedIndividuals": ["Ben", "Laura"],
        "creationDate": "2024-09-30",
        "priority": "Immediate"
      },
      {
        "projectName": "Diversity and Inclusion Training",
        "projectDescription": "Provide training on diversity and inclusion best practices.",
        "dueDate": "2025-02-05",
        "progress": "40%",
        "assignedIndividuals": ["Sophie", "Victor"],
        "creationDate": "2024-11-03",
        "priority": "Low"
      },
      {
        "projectName": "Legal Compliance Review",
        "projectDescription": "Ensure all departments meet legal compliance standards.",
        "dueDate": "2024-12-28",
        "progress": "70%",
        "assignedIndividuals": ["Frank", "Rachel"],
        "creationDate": "2024-09-18",
        "priority": "High"
      },
      {
        "projectName": "Social Media Strategy",
        "projectDescription": "Develop a strategy to increase social media reach.",
        "dueDate": "2025-01-15",
        "progress": "45%",
        "assignedIndividuals": ["Nina", "Gary"],
        "creationDate": "2024-11-08",
        "priority": "Medium"
      },
      {
        "projectName": "Customer Onboarding Process",
        "projectDescription": "Streamline the customer onboarding experience.",
        "dueDate": "2024-12-02",
        "progress": "85%",
        "assignedIndividuals": ["Karen", "Leo"],
        "creationDate": "2024-09-23",
        "priority": "Immediate"
      },
      {
        "projectName": "Software Security Patch",
        "projectDescription": "Apply security patches to all software systems.",
        "dueDate": "2024-11-20",
        "progress": "95%",
        "assignedIndividuals": ["Alex", "Chris"],
        "creationDate": "2024-10-07",
        "priority": "Urgent"
      },
      {
        "projectName": "Annual Report Preparation",
        "projectDescription": "Prepare the annual report for stakeholders.",
        "dueDate": "2024-12-10",
        "progress": "75%",
        "assignedIndividuals": ["Dana", "Oscar"],
        "creationDate": "2024-09-27",
        "priority": "High"
      },
      {
        "projectName": "Supply Chain Optimization",
        "projectDescription": "Optimize supply chain logistics for cost savings.",
        "dueDate": "2025-01-25",
        "progress": "20%",
        "assignedIndividuals": ["Liam", "Jill"],
        "creationDate": "2024-10-14",
        "priority": "Medium"
      },
      {
        "projectName": "Website Redesign",
        "projectDescription": "Redesign website to improve user experience.",
        "dueDate": "2025-01-20",
        "progress": "50%",
        "assignedIndividuals": ["Evan", "Penny"],
        "creationDate": "2024-11-09",
        "priority": "High"
      },
      {
        "projectName": "Internal IT Audit",
        "projectDescription": "Complete an audit of internal IT systems and processes.",
        "dueDate": "2024-12-12",
        "progress": "65%",
        "assignedIndividuals": ["Hannah", "Quincy"],
        "creationDate": "2024-10-26",
        "priority": "Medium"
      },
      {
        "projectName": "Customer Retention Analysis",
        "projectDescription": "Analyze customer retention metrics for improvement.",
        "dueDate": "2025-01-18",
        "progress": "55%",
        "assignedIndividuals": ["Ian", "Laura"],
        "creationDate": "2024-10-09",
        "priority": "Low"
      },
      {
        "projectName": "Corporate Branding Refresh",
        "projectDescription": "Refresh the corporate branding for 2025.",
        "dueDate": "2025-02-01",
        "progress": "30%",
        "assignedIndividuals": ["Monica", "Victor"],
        "creationDate": "2024-11-10",
        "priority": "High"
      },
        {
          "projectName": "Mobile App Redesign",
          "projectDescription": "Redesign UI/UX of the mobile app for better usability.",
          "dueDate": "2025-01-15",
          "progress": "30%",
          "assignedIndividuals": ["Alice", "Bob"],
          "creationDate": "2024-10-12",
          "priority": "High"
        },
        {
          "projectName": "Q1 Financial Planning",
          "projectDescription": "Develop the financial plan for the first quarter of 2025.",
          "dueDate": "2024-12-20",
          "progress": "45%",
          "assignedIndividuals": ["Evan", "Dana"],
          "creationDate": "2024-09-30",
          "priority": "Medium"
        },
        {
          "projectName": "Employee Wellness Program",
          "projectDescription": "Implement a wellness program for employee health and productivity.",
          "dueDate": "2025-02-10",
          "progress": "20%",
          "assignedIndividuals": ["Oscar", "Frank"],
          "creationDate": "2024-11-01",
          "priority": "Low"
        },
        {
          "projectName": "Data Privacy Compliance",
          "projectDescription": "Ensure all systems are compliant with data privacy regulations.",
          "dueDate": "2024-12-01",
          "progress": "75%",
          "assignedIndividuals": ["Gary", "Hannah"],
          "creationDate": "2024-09-18",
          "priority": "Urgent"
        },
        {
          "projectName": "Marketing Analytics Dashboard",
          "projectDescription": "Develop a dashboard for marketing analytics and insights.",
          "dueDate": "2025-01-05",
          "progress": "50%",
          "assignedIndividuals": ["Rachel", "Victor"],
          "creationDate": "2024-10-20",
          "priority": "Medium"
        },
        {
          "projectName": "Server Migration",
          "projectDescription": "Migrate servers to the new data center.",
          "dueDate": "2024-11-30",
          "progress": "60%",
          "assignedIndividuals": ["Ian", "Xander"],
          "creationDate": "2024-10-15",
          "priority": "Immediate"
        },
        {
          "projectName": "Holiday Campaign",
          "projectDescription": "Launch the holiday season marketing campaign.",
          "dueDate": "2024-12-15",
          "progress": "80%",
          "assignedIndividuals": ["Ben", "Lara"],
          "creationDate": "2024-09-29",
          "priority": "High"
        },
        {
          "projectName": "Customer Feedback Loop",
          "projectDescription": "Set up a feedback loop with regular surveys.",
          "dueDate": "2025-01-25",
          "progress": "40%",
          "assignedIndividuals": ["Uma", "Zane"],
          "creationDate": "2024-10-28",
          "priority": "Medium"
        },
        {
          "projectName": "Employee Training Portal",
          "projectDescription": "Create an online portal for employee training modules.",
          "dueDate": "2024-12-10",
          "progress": "55%",
          "assignedIndividuals": ["Tom", "Yara"],
          "creationDate": "2024-10-05",
          "priority": "Urgent"
        },
        {
          "projectName": "Social Media Engagement",
          "projectDescription": "Increase social media engagement by 20%.",
          "dueDate": "2025-01-10",
          "progress": "35%",
          "assignedIndividuals": ["Chris", "Diana"],
          "creationDate": "2024-11-02",
          "priority": "Low"
        },
        {
          "projectName": "Inventory Audit",
          "projectDescription": "Conduct an end-of-year inventory audit.",
          "dueDate": "2024-12-31",
          "progress": "15%",
          "assignedIndividuals": ["Nina", "Oscar"],
          "creationDate": "2024-10-25",
          "priority": "Immediate"
        },
        {
          "projectName": "Website SEO Optimization",
          "projectDescription": "Improve SEO for better search engine rankings.",
          "dueDate": "2025-01-18",
          "progress": "70%",
          "assignedIndividuals": ["Laura", "Evan"],
          "creationDate": "2024-10-30",
          "priority": "High"
        },
        {
          "projectName": "Internal Audit",
          "projectDescription": "Complete internal audit of processes and controls.",
          "dueDate": "2024-11-28",
          "progress": "85%",
          "assignedIndividuals": ["Ian", "Fred"],
          "creationDate": "2024-09-15",
          "priority": "Medium"
        },
        {
          "projectName": "Product Launch",
          "projectDescription": "Plan and execute the product launch for Q1 2025.",
          "dueDate": "2025-02-05",
          "progress": "55%",
          "assignedIndividuals": ["Alice", "Monica"],
          "creationDate": "2024-10-18",
          "priority": "Urgent"
        },
        {
          "projectName": "Cybersecurity Training",
          "projectDescription": "Provide cybersecurity training for all employees.",
          "dueDate": "2025-01-20",
          "progress": "40%",
          "assignedIndividuals": ["James", "Karen"],
          "creationDate": "2024-10-22",
          "priority": "Medium"
        },
        {
          "projectName": "Vendor Contract Renewal",
          "projectDescription": "Review and renew vendor contracts.",
          "dueDate": "2024-12-18",
          "progress": "25%",
          "assignedIndividuals": ["Oscar", "Quincy"],
          "creationDate": "2024-10-12",
          "priority": "Low"
        },
        {
          "projectName": "App Performance Optimization",
          "projectDescription": "Optimize app performance and reduce load times.",
          "dueDate": "2025-01-30",
          "progress": "60%",
          "assignedIndividuals": ["Alex", "Penny"],
          "creationDate": "2024-10-16",
          "priority": "Immediate"
        },
        {
          "projectName": "Q4 Budget Review",
          "projectDescription": "Analyze and finalize the Q4 2024 budget.",
          "dueDate": "2024-11-15",
          "progress": "90%",
          "assignedIndividuals": ["Zane", "Rachel"],
          "creationDate": "2024-09-28",
          "priority": "High"
        },
        {
          "projectName": "Client Feedback Analysis",
          "projectDescription": "Analyze client feedback to improve product features.",
          "dueDate": "2025-01-08",
          "progress": "50%",
          "assignedIndividuals": ["Victor", "Uma"],
          "creationDate": "2024-10-11",
          "priority": "Medium"
        },
        {
          "projectName": "Office Renovation",
          "projectDescription": "Renovate office spaces to enhance productivity.",
          "dueDate": "2025-02-01",
          "progress": "10%",
          "assignedIndividuals": ["Tina", "Mona"],
          "creationDate": "2024-10-29",
          "priority": "Low"
        },
        {
          "projectName": "Sales Forecasting",
          "projectDescription": "Develop accurate sales forecasts for Q1 2025.",
          "dueDate": "2024-12-22",
          "progress": "35%",
          "assignedIndividuals": ["Liam", "Sophie"],
          "creationDate": "2024-09-23",
          "priority": "High"
        },
        {
          "projectName": "Bug Fixes and Patches",
          "projectDescription": "Fix critical bugs and release patches.",
          "dueDate": "2024-11-05",
          "progress": "95%",
          "assignedIndividuals": ["Nina", "Oliver"],
          "creationDate": "2024-09-16",
          "priority": "Urgent"
        },
        {
          "projectName": "Customer Success Program",
          "projectDescription": "Create a program to enhance customer success.",
          "dueDate": "2024-12-28",
          "progress": "45%",
          "assignedIndividuals": ["Ben", "Harry"],
          "creationDate": "2024-10-03",
          "priority": "Medium"
        },
        {
          "projectName": "Product Prototyping",
          "projectDescription": "Prototype new product ideas for early 2025 launch.",
          "dueDate": "2025-02-25",
          "progress": "30%",
          "assignedIndividuals": ["Paul", "Sara"],
          "creationDate": "2024-11-06",
          "priority": "Low"
        },
        {
          "projectName": "Corporate Social Responsibility",
          "projectDescription": "Organize corporate social responsibility activities.",
          "dueDate": "2025-01-15",
          "progress": "20%",
          "assignedIndividuals": ["Tom", "Yara"],
          "creationDate": "2024-10-25",
          "priority": "High"
        }
        
      ]
      
    
    
  
      
        const notificationArray = [
          {
            "type": "ChatMessage",
            "message": "New message in project chat from [Username].",
            "timestamp": "2024-11-02T10:30:00Z"
          },
          {
            "type": "TaskAssigned",
            "message": "You have been assigned a new task: [Task Name] by [Assignor].",
            "timestamp": "2024-11-02T11:00:00Z"
          },
          {
            "type": "TaskCompleted",
            "message": "[Username] has marked the task '[Task Name]' as completed.",
            "timestamp": "2024-11-02T12:00:00Z"
          },
          {
            "type": "TaskDueSoon",
            "message": "Reminder: The task '[Task Name]' is due soon.",
            "timestamp": "2024-11-02T14:00:00Z"
          },
          {
            "type": "TaskCompletionNotification",
            "message": "Your assigned task '[Task Name]' has been completed by [Completer].",
            "timestamp": "2024-11-02T15:00:00Z"
          },
          {
            "type": "NewProjectAssignment",
            "message": "You have been added to a new project: [Project Name].",
            "timestamp": "2024-11-02T16:00:00Z"
          },
          {
            "type": "DeadlineChange",
            "message": "The deadline for '[Task Name]' has been changed to [New Date].",
            "timestamp": "2024-11-02T17:00:00Z"
          },
          {
            "type": "TaskOverdue",
            "message": "The task '[Task Name]' is overdue. Please update or mark it as complete.",
            "timestamp": "2024-11-02T18:00:00Z"
          },
          {
            "type": "NewComment",
            "message": "[Username] commented on your task '[Task Name]'.",
            "timestamp": "2024-11-02T19:00:00Z"
          },
          {
            "type": "TaskReopened",
            "message": "The task '[Task Name]' has been reopened by [Reopener].",
            "timestamp": "2024-11-02T19:30:00Z"
          },
          {
            "type": "TaskPriorityChange",
            "message": "The priority for '[Task Name]' has been changed to [New Priority].",
            "timestamp": "2024-11-02T20:00:00Z"
          },
          {
            "type": "ProjectDeadlineReminder",
            "message": "Reminder: The project '[Project Name]' is due soon.",
            "timestamp": "2024-11-02T20:30:00Z"
          },
          {
            "type": "TaskAssignedToTeam",
            "message": "A new task '[Task Name]' has been assigned to your team.",
            "timestamp": "2024-11-02T21:00:00Z"
          },
          {
            "type": "MilestoneAchieved",
            "message": "Milestone '[Milestone Name]' has been achieved for the project '[Project Name]'.",
            "timestamp": "2024-11-02T21:30:00Z"
          },
          {
            "type": "ProjectUpdate",
            "message": "There is an update on the project '[Project Name]'. Check the latest changes.",
            "timestamp": "2024-11-02T22:00:00Z"
          },
          {
            "type": "MeetingScheduled",
            "message": "A meeting has been scheduled for '[Project Name]' on [Date] at [Time].",
            "timestamp": "2024-11-02T22:30:00Z"
          },
          {
            "type": "NewVersionReleased",
            "message": "A new version of the app has been released. Check the release notes.",
            "timestamp": "2024-11-02T23:00:00Z"
          },
          {
            "type": "FeedbackRequested",
            "message": "Your feedback is requested for the task '[Task Name]'.",
            "timestamp": "2024-11-02T23:30:00Z"
          },
          {
            "type": "TaskEstimateUpdated",
            "message": "The estimated time for '[Task Name]' has been updated.",
            "timestamp": "2024-11-03T00:00:00Z"
          },
          {
            "type": "TaskStalled",
            "message": "The task '[Task Name]' has stalled. Please take action.",
            "timestamp": "2024-11-03T00:30:00Z"
          },
          {
            "type": "TeamMemberAdded",
            "message": "A new team member, [Username], has been added to your project.",
            "timestamp": "2024-11-03T01:00:00Z"
          },
          {
            "type": "TeamMemberRemoved",
            "message": "[Username] has been removed from your project.",
            "timestamp": "2024-11-03T01:30:00Z"
          },
          {
            "type": "RecurringTaskReminder",
            "message": "Reminder: The recurring task '[Task Name]' is due today.",
            "timestamp": "2024-11-03T02:00:00Z"
          },
          {
            "type": "DailySummary",
            "message": "Daily summary of tasks completed and pending.",
            "timestamp": "2024-11-03T08:00:00Z"
          },
          {
            "type": "WeeklySummary",
            "message": "Weekly summary of project progress and tasks.",
            "timestamp": "2024-11-03T08:30:00Z"
          },
          {
            "type": "ImportantNotice",
            "message": "Important notice regarding project changes.",
            "timestamp": "2024-11-03T09:00:00Z"
          },
          {
            "type": "TaskDependencyUpdated",
            "message": "The dependencies for '[Task Name]' have been updated.",
            "timestamp": "2024-11-03T09:30:00Z"
          },
          {
            "type": "CustomNotification",
            "message": "[Username] wants you to check '[Task Name]'.",
            "timestamp": "2024-11-03T10:00:00Z"
          },
          {
            "type": "TaskFollowUp",
            "message": "Follow-up on the task '[Task Name]' as it's approaching the deadline.",
            "timestamp": "2024-11-03T10:30:00Z"
          },
          {
            "type": "TeamGoalsUpdated",
            "message": "Team goals for this quarter have been updated.",
            "timestamp": "2024-11-03T11:00:00Z"
          },
          {
            "type": "SystemMaintenanceNotice",
            "message": "Scheduled maintenance on the system will occur on [Date].",
            "timestamp": "2024-11-03T11:30:00Z"
          },
          {
            "type": "FileShared",
            "message": "[Username] has shared a file related to '[Task Name]'.",
            "timestamp": "2024-11-03T12:00:00Z"
          },
          {
            "type": "TaskResourceAdded",
            "message": "A resource has been added to the task '[Task Name]'.",
            "timestamp": "2024-11-03T12:30:00Z"
          },
          {
            "type": "TaskResourceRemoved",
            "message": "A resource has been removed from the task '[Task Name]'.",
            "timestamp": "2024-11-03T13:00:00Z"
          },
          {
            "type": "VersionControlUpdate",
            "message": "The version control has been updated for '[Task Name]'.",
            "timestamp": "2024-11-03T13:30:00Z"
          },
          {
            "type": "ProjectStatusUpdate",
            "message": "The status of the project '[Project Name]' has been updated.",
            "timestamp": "2024-11-03T14:00:00Z"
          }
        ]
      
      
export {dashBoardLinks ,dashBoardEssentialLinks,days,months,contacts,schedularBoard}