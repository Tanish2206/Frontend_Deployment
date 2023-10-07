import { BsPerson, BsPhone } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

import {
    FiCompass,
    FiUser,
    FiFileMinus,
    FiBookOpen,
    FiActivity,
  } from 'react-icons/fi';
export const contactOptions = [
  {
    label: "Address",
    value:
      "389-390, PU4, Scheme no.54, opposite Retina Hospital, Vijay Nagar, Indore, Madhya Pradesh 452001",
    icon: GoLocation,
    href: "https://maps.app.goo.gl/rdryC3gb3jc5yoQN7",
  },
  {
    label: "PHONE NUMBER",
    value: "+91-6262620801",
    icon: BsPhone,
    href: "tel:6262620801",
  },
  {
    label: "EMAIL",
    value: "info@daji.co.in",
    icon: HiOutlineMail,
    href: "mailto:info@daji.co.in",
  },
];
export const categories = [
  {
    id: 1,
    img: "/design1.jpg",
    heading: "Working Drawing",
    description: "This is working drawing",
    href: "/categories/floor-plans",
  },
  {
    id: 2,
    img: "/design2.jpg",
    heading: "3-D floor plans / ISO",
    description: "3-D floor planning in 4K JPEG format",
    href: "/categories/floor-plans",
  },
  {
    id: 3,
    img: "/design3.jpg",
    heading: "Structural Drawing",
    description:
      "Footing-Column-Plinth Beam-Roof Beam-Slab Drawing and Detailing with analysis on Stadd/Etab software",
    href: "/categories/floor-plans",
  },
  {
    id: 4,
    img: "/design4.jpg",
    heading: "Electrical Drawing",
    description: "Wall and Ceiling Electrical Drawings & Detailing",
    href: "/categories/floor-plans",
  },
  {
    id: 5,
    img: "/design5.jpg",
    heading: "Plumbing/Drainage Drawing",
    description: "Working Drawings & Detailing",
    href: "/categories/floor-plans",
  },
  {
    id: 6,
    img: "/design6.jpg",
    heading: "Sanitary Drawing",
    description: "Working Drawings & Detailing",
    href: "/categories/floor-plans",
  },
  {
    id: 7,
    img: "/design7.jpg",
    heading: "Mechanical Drawing",
    description: "Wall and Ceiling Electrical Drawings & Detailing",
    href: "/categories/floor-plans",
  },
];

export const floorPlansData = [
  {
    id: 1,
    imageUrl: "/design1.jpg",
    name: "Modern Loft",
    size: "900 sq. ft.",
  },
  {
    id: 2,
    imageUrl: "/design2.jpg",
    name: "Traditional Home",
    size: "1500 sq. ft.",
  },
  // Add more floor plan objects as needed
];

export const designs = [
  {
    id: 1,
    img: "/design1.jpg",
    heading: "Working Drawing",
    description: "This is working drawing",
    href: "/categories/floor-plans",
  },
  {
    id: 2,
    img: "/design2.jpg",
    heading: "3-D floor plans / ISO",
    description: "3-D floor planning in 4K JPEG format",
    href: "/categories/floor-plans",
  },
  {
    id: 3,
    img: "/design3.jpg",
    heading: "Structural Drawing",
    description:
      "Footing-Column-Plinth Beam-Roof Beam-Slab Drawing and Detailing with analysis on Stadd/Etab software",
    href: "/categories/floor-plans",
  },
  {
    id: 4,
    img: "/design4.jpg",
    heading: "Electrical Drawing",
    description: "Wall and Ceiling Electrical Drawings & Detailing",
    href: "/categories/floor-plans",
  },
  {
    id: 5,
    img: "/design5.jpg",
    heading: "Plumbing/Drainage Drawing",
    description: "Working Drawings & Detailing",
    href: "/categories/floor-plans",
  },
  {
    id: 6,
    img: "/design6.jpg",
    heading: "Sanitary Drawing",
    description: "Working Drawings & Detailing",
    href: "/categories/floor-plans",
  },
  {
    id: 7,
    img: "/design7.jpg",
    heading: "Mechanical Drawing",
    description: "Wall and Ceiling Electrical Drawings & Detailing",
    href: "/categories/floor-plans",
  },
];
//Custom Input using signUp Componet
export const inputFields = [
  { id: "firstName", label: "First Name", name: "firstName", type: "text" },
  { id: "lastName", label: "Last Name", name: "lastName", type: "text" },
  { id: "email", label: "Email address", name: "email", type: "email" },
  { id: "mobile", label: "Phone Number", name: "mobile", type: "tel" },
];
//navBar..............................
export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/designs",
    children: [
      {
        label: "Architectural Design",
        title: "designCategory",
      },
      {
        label: "Interior Design",
        title: "designCategory",
      },
      {
        label: "MEP Design",
        title: "designCategory",
      },
      {
        label: "Vaastu Consultency",
        title: "designCategory",
      },
      {
        label: "Building Permission",
        title: "designCategory",
      },
      {
        label: "Landscaping",
        title: "designCategory",
      },
      {
        label: "Walkthrough",
        title: "designCategory",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/enquire",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export const cards = [
  {
    title: "Find the right service, right away",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    // image:
    //   'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    image: "/design1.jpg",
  },
  {
    title: "Find the right service, right away",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: "/design2.jpg",
  },
  {
    title: "Find the right service, right away",
    text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    image: "/design3.jpg",
  },
];

//FeatureDesignElement......................................
export const brands = [
  {
    id: 1,
    img: "/design1.jpg",
    title: "Bedroom",
  },
  {
    id: 2,
    img: "/design2.jpg",
    title: "Living Area",
  },
  {
    id: 3,
    img: "/design3.jpg",
    title: "Exterior",
  },
  {
    id: 4,
    img: "/design4.jpg",
    title: "Warehouse",
  },
  {
    id: 5,
    img: "/design5.jpg",
    title: "Event Hall",
  },
];

//WhyUsFeature....................
export const WhyUsfeatures = [
  {
    text: "Stick to your budget",
    iconColor: "yellow.500",
    iconBg: "yellow.100",
  },
  {
    text: "Get quality work done quickly",
    iconColor: "green.500",
    iconBg: "green.100",
  },
  {
    text: "Pay when you're happy",
    iconColor: "purple.500",
    iconBg: "purple.100",
  },
  {
    text: "Count on 24/7 support",
    iconColor: "purple.500",
    iconBg: "yellow.100",
  },
];

//OurServices.......................

//Testimonials................................................
export const testimonials = [
  {
    heading: "A Remarkable Experience from Start to Finish",
    text: "Daji's unwavering commitment to customer satisfaction was evident throughout our entire journey. They went above and beyond to ensure our needs were met, resulting in an exceptional experience.",
    src: "/user-placeholder.png",
    name: "Naman Jain",
    title: "Bhopal, M.P.",
  },
  {
    heading: "Exceeding Expectations with Exceptional Service",
    text: "Daji's team of professionals exceeded our expectations with their attentive and personalized service. Their dedication to quality, timely communication, and proactive approach made all the difference.",
    src: "/user-placeholder.png",
    name: "Mahendra Yadav",
    title: "Ujjain, M.P.",
  },
  {
    heading: "Service Excellence that Sets Them Apart",
    text: "Daji's commitment to service excellence sets them apart from the competition. Their knowledgeable team, prompt responses, and genuine care for our project made us feel valued and ensured a successful outcome.",
    src: "/user-placeholder.png",
    name: "Pushpak",
    title: "Indore, M.P.",
  },
];

//Ststistics

export const statsData = [
  {
    title: "Clients",
    stat: "1,000+",
    icon: <BsPerson size={"3em"} />,
  },
  {
    title: "Projects",
    stat: "5,000+",
    icon: <FiServer size={"3em"} />,
  },
  {
    title: "Cities",
    stat: "10",
    icon: <GoLocation size={"3em"} />,
  },
];

//footer menuitem

export const menuData = [
  {
    id: 1,
    header: "Product",
    items: ["Paid Designs"],
  },
  {
    id: 2,
    header: "Company",
    items: [
      "Contact Us",
      "389-390, PU4, Scheme no.54, opposite Retina Hospital, Vijay Nagar, Indore, Madhya Pradesh 452001",
      "+91 6262620801",
      "info@daji.co.in",
    ],
    href: [
      "/enquire",
      "https://maps.app.goo.gl/rdryC3gb3jc5yoQN7",
      "tel:6262620801",
      "mailto:info@daji.co.in",
    ],
  },
  {
    id: 3,
    header: "Legal",
    items: ["Privacy Policy", "Terms of Service"],
    href: ["/privacy-policy", "/terms-and-conditions"],
  },
  {
    id: 4,
    header: "Follow Us",
    items: [
      "Facebook",
      "Instagram",
      "Twitter",
      "LinkedIn",
      "YouTube",
      "Pinterest",
    ],
    href: [
      "https://www.facebook.com/vpdaji",
      "https://www.instagram.com/daji_and_engineers/",
      "https://twitter.com/dajiindore",
      "https://www.linkedin.com/in/daji-indore-2b6b921b2",
      "https://youtube.com/channel/UCx5kZT5JB3SsirLlUmH6K-A",
      "https://in.pinterest.com/daji1312/_created/",
    ],
  },
];

//Project.................................
export const projectsCartData = [
  {
    id: 1,
    img: "/design1.jpg",
    heading: "Working Drawing",
    description: "This is working drawing",
    href: "/projects/project-details",
  },
  {
    id: 2,
    img: "/design2.jpg",
    heading: "3-D floor plans / ISO",
    description: "3-D floor planning in 4K JPEG format",
    href: "/projects/project-details",
  },
];

export const designOption =[
  {
    id:1,
    value:"Select Option"
  },
  {
    id:2,
    value:"Architectural Design"
  },
  {
    id:3,
    value:"Interior Design"
  },
  {
    id:4,
    value:"MEP Design"
  },
  {
    id:5,
    value:"Vaastu Consultency"
  },
  {
    id:6,
    value:"Building Permission"
  },
  {
    id:7,
    value:"Landscaping"
  },
  {
    id:8,
    value:"Walkthrough"
  }
];


export const designType=[

  {
    id:1,
    typeValue:"Select Option",
    designHead:"Architectural Design"
  },
  {
    id:2,
    typeValue:"Floor Plan",
    designHead:"Architectural Design"
  },
  {
    id:3,
    typeValue:"Elevation",
    designHead:"Architectural Design"
  },
  {
    id:4,
    typeValue:"3D Floor Plan(ISO)",
    designHead:"Architectural Design"
  },
  {
    id:5,
    typeValue:"Structural",
    designHead:"Architectural Design"
  },
  {
    id:6,
    typeValue:"Design",
    designHead:"Architectural Design"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Interior Design"
  },
  {
    id:2,
    typeValue:"Furniture Floor Plan",
    designHead:"Interior Design"
  },
  {
    id:3,
    typeValue:"Wall Elevation",
    designHead:"Interior Design"
  },
  {
    id:4,
    typeValue:"3D Views",
    designHead:"Interior Design"
  },
  {
    id:5,
    typeValue:"360° Views",
    designHead:"Interior Design"
  },
  {
    id:6,
    typeValue:"Working Drawing - Ceiling",
    designHead:"Interior Design"
  },
  {
    id:7,
    typeValue:"Working Drawing - Furniture",
    designHead:"Interior Design"
  },
  {
    id:8,
    typeValue:"Working Drawing - Wall",
    designHead:"Interior Design"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"MEP Design"
  },
  {
    id:2,
    typeValue:"Electrical Drawing",
    designHead:"MEP Design"
  },
  {
    id:3,
    typeValue:"Plumbing & Drainage",
    designHead:"MEP Design"
  },
  {
    id:4,
    typeValue:"Sanitary Drawing",
    designHead:"MEP Design"
  },
  {
    id:5,
    typeValue:"Mechanical Drawing",
    designHead:"MEP Design"
  },
  {
    id:6,
    typeValue:"Fire & Safety Drawing",
    designHead:"MEP Design"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Vaastu Consultency"
  },
  {
    id:2,
    typeValue:"Griha Vaastu & Bhumi Vaastu",
    designHead:"Vaastu Consultency"
  },
  {
    id:3,
    typeValue:"Feng Shul & Colour Vaastu",
    designHead:"Vaastu Consultency"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Building Permission"
  },
  {
    id:2,
    typeValue:"Residential",
    designHead:"Building Permission"
  },
  {
    id:3,
    typeValue:"Commercial",
    designHead:"Building Permission"
  },
  {
    id:4,
    typeValue:"Mix Land Use",
    designHead:"Building Permission"
  },
  {
    id:5,
    typeValue:"Educational",
    designHead:"Building Permission"
  },
  {
    id:6,
    typeValue:"Institutional",
    designHead:"Building Permission"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Landscaping"
  },
  {
    id:2,
    typeValue:"Commercial Landscaping",
    designHead:"Landscaping"
  },
  {
    id:3,
    typeValue:"Pavement Landscaping",
    designHead:"Landscaping"
  },
  {
    id:4,
    typeValue:"Exterior Landscaping",
    designHead:"Landscaping"
  },
  {
    id:5,
    typeValue:"Soft Landscaping",
    designHead:"Landscaping"
  },
  {
    id:6,
    typeValue:"Hard Landscaping",
    designHead:"Landscaping"
  },
 
]
export const propertyOption = [
  {
    id: 1,
    value: "Select Option",
  },
  {
    id: 2,
    value: "Residential",
  },
  {
    id: 3,
    value: "Commercial",
  },
  {
    id: 4,
    value: "Educational",
  },
  {
    id: 5,
    value: "Institutional",
  },
  {
    id: 6,
    value: "Assembly",
  },
];

export const propertyType=[

  {
    id:1,
    typeValue:"Select Option",
    designHead:"Residential"
  },
  {
    id:2,
    typeValue:"Small House",
    designHead:"Residential"
  },
  {
    id:3,
    typeValue:"Apartments",
    designHead:"Residential"
  },
  {
    id:4,
    typeValue:"Villa",
    designHead:"Residential"
  },
  {
    id:5,
    typeValue:"Cottage",
    designHead:"Residential"
  },
  {
    id:6,
    typeValue:"Duplex",
    designHead:"Residential"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Commercial"
  },
  {
    id:2,
    typeValue:"Shop",
    designHead:"Commercial"
  },
  {
    id:3,
    typeValue:"Complex",
    designHead:"Commercial"
  },
  {
    id:4,
    typeValue:"Mix Land Use Building",
    designHead:"Commercial"
  },
  {
    id:5,
    typeValue:"Hotels",
    designHead:"Commercial"
  },
  {
    id:6,
    typeValue:"Resort",
    designHead:"Commercial"
  },
  {
    id:7,
    typeValue:"Store",
    designHead:"Commercial"
  },
  {
    id:8,
    typeValue:"Showrooms",
    designHead:"Commercial"
  },
  {
    id:9,
    typeValue:"Office",
    designHead:"Commercial"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Educational"
  },
  {
    id:2,
    typeValue:"School",
    designHead:"Educational"
  },
  {
    id:3,
    typeValue:"College",
    designHead:"Educational"
  },
  {
    id:4,
    typeValue:"Library",
    designHead:"Educational"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Institutional"
  },
  {
    id:2,
    typeValue:"Hospitals",
    designHead:"Institutional"
  },
  {
    id:3,
    typeValue:"Auditorium",
    designHead:"Institutional"
  },
  {
    id:4,
    typeValue:"Dharmshalas",
    designHead:"Institutional"
  },
  {
    id:1,
    typeValue:"Select Option",
    designHead:"Assembly"
  },
  {
    id:2,
    typeValue:"Theatres",
    designHead:"Assembly"
  },
  {
    id:3,
    typeValue:"Clubhouse",
    designHead:"Assembly"
  },
  {
    id:4,
    typeValue:"Town hall",
    designHead:"Assembly"
  },
  {
    id:5,
    typeValue:"Gym",
    designHead:"Assembly"
  },
  {
    id:6,
    typeValue:"Sports Complex",
    designHead:"Assembly"
  },
]

export const designerCategory=[
  {
    id:1,
    category:"Architect",
  },
  {
    id:2,
    category:"Interior Designer",
  },
  {
    id:3,
    category:"MEP Designer",
  },
  {
    id:4,
    category:"Structural Designer",
  },
  {
    id:5,
    category:"Vaastu Designer",
  },
  {
    id:6,
    category:"Draughtsperson",
  },
  {
    id:7,
    category:"3D Designer",
  },
  {
    id:8,
    category:"Landscape Designer",
  },
  {
    id:9,
    category:"Site Engineers",
  },
  {
    id:10,
    category:"3D Animation",
  },
  {
    id:11,
    category:"BIM Engineer",
  },
  {
    id:12,
    category:"PEB Designer",
  },
  {
    id:13,
    category:"Animation",
  },
  {
    id:5,
    category:"Graphic Designer",
  },

]

export const LinkItemsD = [
  { id:1, name: 'DeskBoard', icon: FiFileMinus },
  {id:2, name: 'PerSonal Info', icon: FiUser },
  
];


export const activeProjectHeader = [
  {
    id: 1,
    key: "id",
    label: "Project Id",
  },
  {
    id: 2,
    key: "projectType",
    label: "TYPE",
  

  },
  {
    id: 3,
    key: "dueDate",
    label: "Due Date",

  },
  {
    id: 4,
    key: "projectStatusByDesigner",
    label: "Status",
  },
  {
    id: 5,
    key: "submission",
    label: "Submission",
   
  },
  {
    id: 6,
    key: "comment",
    label: "Comment",
   
  },
  {
    id: 7 ,
    key: "isPaymentDone",
    label: "Payment",
   
  },
];

export const projectRequestsHeader = [
  {
    id: 1,
    key: "id",
    label: "Project Id",
 

  },
  {
    id: 2,
    key: "projectType",
    label: "TYPE",
  

  },
  {
    id: 3,
    key: "dueDate",
    label: "Due Date",

  },
 
  {
    id: 4,
    key: "isPaymentDone",
    label: "Payment",
   
  },
  {
    id: 5,
    key: "details",
    label: "Details",
   
  },
  {
    id: 6,
    key: "isAccepted",
    label: "Approval",
  },

];
  

export const designFields = [
  { label: "Number of Bed Room", name: "bedrooms", type: "number",option:"Residential"},
  { label: "Number of Bath Room", name: "bathrooms", type: "number",option:"Residential"},
  { label: "Number of Balcony", name: "balcony", type: "text",option:"Residential"},
  { label: "Number of kitchens", name: "kitchens", type: "text",option:"Residential"},
  { label: "Number of Living Room", name: "livingrooms", type: "text",option:"Residential"},
  { label: "Number of Dinning Rooms", name: "dinningrooms", type: "text",option:"Residential"},
  { label: "Number of Garage Capacity", name: "garageCapacity", type: "text",option:"Residential"},
  { label: "Number of Master BedRoom", name: "masterBedroom", type: "text",option:"Residential"},
  { label: "Number of Guest Room", name: "guestRooms", type: "text",option:"Residential"},
  { label: "Number of Kids Room", name: "kidsrooms", type: "text",option:"Residential"},
  { label: "Drawing Hall", name: "drawingHall", type: "text",option:"Residential"},
  { label: "Number of Toilet", name: "toilets", type: "text",option:"Residential"},
  { label: "Number of Temple", name: "temple", type: "text",option:"Residential"},
  { label: "Number of Store Room", name: "storeRooms", type: "text",option:"Residential"},
  { label: "Wash Area", name: "washArea", type: "text",option:"Residential"},
  { label: "Garden", name: "gardens", type: "text",option:"Residential"},
  { label: "Porche", name: "porche", type: "text",option:"Residential"},
  { label: "Bar", name: "bars", type: "text",option:"Residential"},
  { label: "Lift", name: "lifts", type: "text",option:"Residential"},
  { label: "Swiming Pool", name: "swimingPool", type: "text",option:"Residential"},
  
 
  
  { label: "Shop Type", name: "shopType", type: "text",optionType:"Shop"},
  { label: "Number of Shop", name: "shops", type: "text",optionType:"Complex"},

  { label: "Number of Shop", name: "shops", type: "text",optionType:"Mix Land Use Building"},
  { label: "Number of Flat", name: "flats", type: "text",optionType:"Mix Land Use Building"},

  { label: "Number of Room", name: "rooms", type: "text",optionType:"Hotel"},
  { label: "Resaturent", name: "resaturents", type: "text",optionType:"Hotel"},
  { label: "Swiming Pool", name: "swimingPool", type: "text",optionType:"Hotel"},
  { label: "Garden", name: "gardens", type: "text",optionType:"Hotel"},
  { label: "Marrige Hall", name: "marrigeHalls", type: "text",optionType:"Hotel"},
  { label: "parking", name: "Parkings", type: "text",optionType:"Hotel"},

  { label: "Number of Room", name: "rooms", type: "text",optionType:"Resort"},
  { label: "Resaturent", name: "resaturent", type: "text",optionType:"Resort"},
  { label: "Swiming Pool", name: "swimingPool", type: "text",optionType:"Resort"},
  { label: "Garden", name: "gardens", type: "text",optionType:"Resort"},
  { label: "Marrige Hall", name: "marrigeHalls", type: "text",optionType:"Resort"},
  { label: "parking", name: "Parkings", type: "text",optionType:"Resort"},

  { label: "Number of Class Room", name: "classrooms", type: "number",option:"Educational"},
  { label: "Office Cabin", name: "masterRoom", type: "number",option:"Educational"},
  { label: "sports Ground,", name: "sportsGround,", type: "number",option:"Educational"},
  { label: "Parking", name: "parkings", type: "number",option:"Educational"},
  { label: "Laboratory", name: "laboratory", type: "number",option:"Educational"},
  { label: "Library", name: "library", type: "number",option:"Educational"},
  { label: "Auditorium", name: "auditorium", type: "number",option:"Educational"},
  { label: "Confrence Room", name: "conferenceHalls", type: "number",option:"Educational"},
  { label: "Hall", name: "halls", type: "number",option:"Educational"},
  { label: "Server Room", name: "serverRoom", type: "text",option:"Educational"},
  { label: "Stairs", name: "stairs", type: "number",option:"Educational"},
  { label: "toilets", name: "toilets", type: "number",option:"Educational"},
  { label: " Store Room", name: " storeRooms", type: "number",option:"Educational"},
  { label: "guest Room", name: "guestRooms", type: "number",option:"Educational"},

  { label: "Number of Bed", name: "beds", type: "number",optionType:"Hospital"},
  { label: "Doctors Cabin", name: "doctorsCabins", type: "number",optionType:"Hospital"},
  { label: "OPD", name: "opd", type: "number",optionType:"Hospital"},
  { label: "Genral Ward", name: "genralWard", type: "number",optionType:"Hospital"},
  { label: "Emergency Ward", name: "emergencyWard", type: "number",optionType:"Hospital"},

  { label: "Seating Capacity", name: "seatingCapacity", type: "number",optionType:"Auditorium"},
  { label: "Parking", name: "parkings", type: "number",optionType:"Auditorium"},
  { label: "Garden", name: "gardens", type: "number",optionType:"Auditorium"},


  { label: "Number of Room", name: "rooms", type: "number",optionType:"Dharmshalas"},
  { label: "kitchen", name: "kitchens", type: "number",optionType:"Dharmshalas"},
  { label: "Number Of Hall", name: "halls", type: "number",optionType:"Dharmshalas"},
  { label: "Gathering Area", name: "gatheringArea", type: "number",optionType:"Dharmshalas"},
  { label: "Activity Area", name: "activityArea", type: "number",optionType:"Dharmshalas"},

  { label: "Number of Seat", name: "seats", type: "number",optionType:"Theatres"},
  { label: "Number of Screen", name: "screens", type: "number",optionType:"Theatres"},
  { label: "Cafe", name: "cafes", type: "number",optionType:"Theatres"},

  { label: "Cafe", name: "cafes", type: "number",optionType:"Clubhouse"},
  { label: "Banquet Hall", name: "banquetHall", type: "number",optionType:"Clubhouse"},
  { label: "Sports Area", name: " sportsArea", type: "number",optionType:"Clubhouse"},
  { label: "Swiming Pool", name: "swimmingPools", type: "number",optionType:"Clubhouse"},
  { label: "SPA", name: "spa", type: "number",optionType:"Clubhouse"},
  { label: "Medical", name: "medical", type: "number",optionType:"Clubhouse"},
  { label: "Theater", name: "theater", type: "number",optionType:"Clubhouse"},

  { label: "Seating Capacity", name: "seatingCapacity", type: "number",optionType:"Town hall"},
  { label: "Confrence Hall", name: "kitchen", type: "number",optionType:"Town hall"},
  { label: "Activity Hall", name: "activityHall", type: "number",optionType:"Town hall"},

  { label: "Seating Capacity", name: "seatingCapacity", type: "number",optionType:"exhibition hall"},
  { label: "Confrence Hall", name: "kitchen", type: "number",optionType:"exhibition hall"},
  { label: "Activity Hall", name: "activityHall", type: "number",optionType:"exhibition hall"},
 
  { label: "Machine Area", name: "machineAreas", type: "number",optionType:"Gym"},
  { label: "Cardio Area", name: "cardioArea", type: "number",optionType:"Gym"},
  { label: "Activity Area", name: "activityArea", type: "number",optionType:"Gym"},
  { label: "Weight Area", name: "weightArea", type: "number",optionType:"Gym"},

  { label: "Indoor Area", name: "indoorArea", type: "number",optionType:"Sports Complex"},
  { label: "Outdoor Area", name: "outdoorArea", type: "number",optionType:"Sports Complex"},
  { label: "Pool", name: "pool", type: "number",optionType:"Sports Complex"},
  { label: "Garden Area", name: "gardenArea", type: "number",optionType:"Sports Complex"},
  { label: "Auditorium", name: "auditorium", type: "number",optionType:"Sports Complex"},

  // Add other design fields here...
];

