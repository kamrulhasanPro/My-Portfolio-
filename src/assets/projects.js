import carRental from './projectImage/car-rental.png';
import toysland from './projectImage/toysland.png';
import blogify from './projectImage/blogify.png';

export const projectsData = [
  {
    id: 1,
    title: "Car Rental Service Website",
    description:
      "A feature-rich car rental platform offering vehicle booking, category-wise browsing, real-time availability checking, secure user login.",
    deepIntro:
      "This Car Rental Website is designed to provide a smooth and modern booking experience. It focuses on usability and performance while giving admins complete control over car listings, rental prices, and customer bookings. The website ensures a responsive UI, fast loading speed, and a clean booking flow to improve user experience.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase Auth",
      "TailwindCSS",
      "Framer Motion",
    ],
    image: carRental,
    liveLink: "https://car-rental-9358d.web.app",
    githubClient: "https://github.com/kamrulhasanPro/Car-Rental-Client",
    challenges: [
      "Handling car availability logic dynamically",
      "Securing booking system with JWT",
      "Building an admin panel for car & booking management",
      "Optimizing images for a faster UI experience",
    ],
    improvements: [
      "Add Stripe / SSLCOMMERZ payment system",
      "Add real-time booking confirmation notifications",
      "Improve search with filters like price, model & seat capacity",
      "Integrate Google Maps API for pickup locations",
    ],
  },

  {
    id: 2,
    title: "ToysLand - Kids Toys Application",
    description:
      "A modern and child-friendly toys application featuring three toy categories, secure authentication, responsive UI, and smooth browsing experience for children.",

    deepIntro:
      "ToysLand is a playful and interactive kids toys application designed for children to explore toys easily. It includes three main categories—Puzzle Games, Remote Control Cars, and Rocker Toys. The app is built with a clean, colorful UI, Firebase authentication, dynamic category filtering, and responsive layouts. This project reflects my ability to build modern kid-focused applications with secure login, clean UX, and real-time UI enhancements.",

    tech: [
      "React",
      "Firebase",
      "React Router",
      "TailwindCSS",
      "DaisyUI",
      "Swiper",
      "Axios",
      "React-Toastify",
      "SweetAlert2",
    ],

    image: toysland,
    liveLink: "https://toysland-5cdae.web.app",
    githubClient: "https://github.com/kamrulhasanPro/ToysLand-Website",

    challenges: [
      "Designing a kid-friendly and colorful UI",
      "Implementing Firebase authentication securely",
      "Creating smooth category-wise toy filtering",
      "Managing responsive layouts for all devices",
      "Adding real-time notifications and loading states",
    ],

    improvements: [
      "Add AI-based personalized toy recommendations",
      "Add wishlist or favorite toys feature",
      "Introduce reviews and ratings for toys",
      "Add interactive animated toy preview",
      "Implement toy purchase system using Stripe",
    ],
  },
  {
    id: 3,
    title: "Blogify – Exploring Next.js Blog Website",
    description:
      "A fully SEO-optimized blog platform built with Next.js, featuring markdown support, dynamic routing, blog categories, code highlighting, and super-fast performance.",
    deepIntro:
      "Blogify is a modern developer-friendly blog system that focuses on speed, SEO, readability, and structured blog management. Using Next.js dynamic routes and pre-rendering, Blogify delivers extremely fast page performance. It is built as a long-term growth platform with clean UI and file-based markdown blogging.",
    tech: ["Next.js", "React", "TailwindCSS", "NextAuth.js", "Vercel Hosting"],
    image: blogify,
    liveLink: "https://blogify-lilac-two.vercel.app",
    githubClient: "https://github.com/kamrulhasanPro/Blogify",
    challenges: [
      "Implementing dynamic routing & static generation",
      "SEO optimization with metadata & OG tags",
      "Building MDX blog support",
      "Adding smooth scroll & responsive typography",
    ],
    improvements: [
      "Add comment system (Firebase or MongoDB)",
      "Add admin dashboard for writing blogs online",
      "Add dark mode for better reading experience",
      "Enable blog search and tag filtering",
    ],
  },
];
