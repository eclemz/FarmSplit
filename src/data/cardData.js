import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { LuHeading3 } from "react-icons/lu";

const cardData1 = [
  {
    image: "/Images/categories2.png",
    title: "Fresh meat",
    text: "Farm fresh meat",
    background: "bg-red-100",
  },
  {
    image: "/Images/categories1.png",
    title: "Crayfish",
    text: "Table ready crayfish",
    background: "bg-green-100",
  },
  {
    image: "/Images/Categories4.png",
    title: "Grains",
    text: "Organic destoned grains",
    background: "bg-purple-100",
  },

  {
    image: "/Images/categories6.png",
    title: "Tubers",
    text: "Jumbo size tubbers",
    background: "bg-purple-100",
  },
  {
    image: "/Images/categories3.png",
    title: "Veggies",
    text: "Organic fresh Veggies",
    background: "bg-pink-200",
  },
  {
    image: "/Images/categories.png",
    title: "Grains",
    text: "Organic destoned grains",
    background: "bg-blue-100",
  },
];

const cardData3 = [
  {
    images: "/Images/foodtray.png",
  },

  { 
    icon: "/Images/users_icon.png",
    title: "Silver Group",
    text: " Welcome to the Silver Sharing Group! This community is all about bringing people together through the joy of sharing meals. Here are some advantages of being part of our group. Join us and discover the joy of sharing food!",
    subIcon: <IoArrowForwardCircleOutline className="h-5 w-5 font-bold text-[#09AF54]"/>,
    sub1: "Swift delivery",
    sub2: "20 people in a group chat",
    sub3: "list",
    background: "bg-white",
  },

  
  { 
    icon: "/Images/users_icon.png",
    title: "Gold Group",
    text: " Welcome to the Gold Sharing Group! This community is all about bringing people together through the joy of sharing meals. Here are some advantages of being part of our group. Join us and discover the joy of sharing food!",
    subIcon: <IoArrowForwardCircleOutline className="flex shrink-0 h-5 w-5 text-[#09AF54]"/>,
    sub1: "Swift delivery",
    sub2: "10 people in a group chat",
    sub3: "list",
    background: "bg-white",
  },

  {
    images: "/Images/foodbasket.png",
  },

  {
    images: "/Images/foodbasket2.png",
  },
  {
    icon: "/Images/users_icon.png",
    title: "Diamond Group",
    text: " Welcome to the Diamond Sharing Group! This community is all about bringing people together through the joy of sharing meals. Here are some advantages of being part of our group. Join us and discover the joy of sharing food!",
    subIcon: <IoArrowForwardCircleOutline className="md:h-5 md:w-5 h-4 w-4 text-[#09AF54]"/>,
    sub1: "Swift delivery",
    sub2: "5 people in a group chat",
    sub3: "list",
    background: "bg-white",
  },
];

const cardData4 = [
  { 
    icon: "/Images/Rectangle.png",
    name: "Muhammad Rabiu",
    desc: "Nurse",
    text: "I recently tried Farm to Table and loved it! The fresh food was delivered quickly, and the app was easy to use. Highly recommend for organic produce delivered to your door!",
   
  },
  { 
    icon: "/Images/Rectangle1.png",
    name: "Ekine Wariboko",
    desc: "Stay-at-home mom",
    text: " I recently tried Farm to Table and loved it! The fresh food was delivered quickly, and the app was easy to use. Highly recommend for organic produce delivered to your door!",
  },
  { 
    icon: "/Images/Rectangle2.png",
    name: "Uchenna Anozie",
    desc: "Tech bro",
    text: " I recently tried Farm to Table and loved it! The fresh food was delivered quickly, and the app was easy to use. Highly recommend for organic produce delivered to your door!",
  },
  { 
    icon: "/Images/Rectangle.png",
    name: "Muhammad Rabiu",
    desc: "Corps member",
    text: "I recently tried Farm to Table and loved it! The fresh food was delivered quickly, and the app was easy to use. Highly recommend for organic produce delivered to your door!",
  },
  { 
    icon: "/Images/Rectangle1.png",
    name: "Ekine Wariboko",
    desc: "Stay-at-home mom",
    text: " I recently tried Farm to Table and loved it! The fresh food was delivered quickly, and the app was easy to use. Highly recommend for organic produce delivered to your door!",
  },
  { 
    icon: "/Images/Rectangle2.png",
    name: "Uchenna Anozie",
    desc: "Tech bro",
    text: " I recently tried Farm to Table and loved it! The fresh food was delivered quickly, and the app was easy to use. Highly recommend for organic produce delivered to your door!",
  },
];

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy with a full refund."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 5-7 business days."
  },
  {
    question: "Do you offer international delivery?",
    answer: "Yes, we deliver to over 50 countries worldwide."
  },
  {
    question: "Do you offer international delivery?",
    answer: "Yes, we deliver to over 50 countries worldwide."
  },
  {
    question: "Do you offer international delivery?",
    answer: "Yes, we deliver to over 50 countries worldwide."
  },
  {
    question: "Do you offer international delivery?",
    answer: "Yes, we deliver to over 50 countries worldwide."
  }
];

const footerData = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Help & Support",
    items: [
      { label: "Help Center", href: "/help-center" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "link", href: "link" },
      { label: "link", href: "link" },
      { label: "link", href: "link" },
      { label: "link", href: "link" },
    ],
  },
];

export { cardData1, cardData3, cardData4, faqs, footerData };
