import doctorFinderImg from "../assets/doctorfinder.jpg";
import doctor2 from "../assets/doc2.jpg";
import doctor3 from "../assets/doc3.jpg";
import artgallery2 from "../assets/artgallery2.jpg";
import artgallery1 from "../assets/artgallery.jpg";
import artgallery3 from "../assets/artgallery3.jpg";
import eshop from "../assets/eshop.jpg";
import eshop2 from "../assets/eshop2.jpg";
import eshop3 from "../assets/eshop3.jpg";
import movie from "../assets/moviebooking.jpg";
import movie2 from "../assets/moviebooking2.jpg";
import movie3 from "../assets/moviebooking3.jpg";
import figma from "../assets/figma.jpg";
import figma2 from "../assets/figma2.jpg";
import figma3 from "../assets/figma3.jpg";
import portfolio from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import capp from "../assets/capp.jpg";
import tbs from "../assets/tbs.jpg";
import sqna from "../assets/sqna.jpg";

export const webprojectList = [
  {
    image: doctorFinderImg,
    image2: doctor2,
    image3: doctor3,
    title: "The Doctor Finder App",
    description:
      "A full-stack application for searching doctors, booking appointments, and receiving medical advice and prescriptions online.",
    keyfeatures: [
      "Search and filter doctors by specialty, location, and consultation fee",
      "Book and manage appointments online",
      "Receive prescriptions and medical advice virtually",
      "Doctors can add and update timeslots, view appointments, note down diagnosis, and prescribe medicine virtually",
      "Built with React, Node.js, Express.js, and MongoDB",
    ],
  },
  {
    image: artgallery2,
    image2: artgallery1,
    image3: artgallery3,
    title: "The Art Exhibition App",
    description:
      "A full-stack platform for browsing, reviewing, and purchasing artwork online.",
    keyfeatures: [
      "For Artists: Upload and manage artwork listings",
      "For Users: Browse collections, buy art, like & comment",
      "Interactive community for artist-user engagement",
      "Responsive design for all devices",
      "Robust backend ensures secure transactions and data handling",
      "Frontend: React, Material UI, JavaScript; Backend: Node.js, Express.js, MongoDB",
    ],
  },
  {
    image: eshop,
    image2: eshop2,
    image3: eshop3,
    title: "E-commerce Application",
    description:
      "The frontend of an e-commerce application using React and Material UI, with seamless integration of backend APIs.",
    keyfeatures: [
      "Product listing, filtering, and sorting",
      "Shopping cart and checkout interface",
      "API integration with backend for order handling",
      "Material UI components for responsive design",
    ],
  },
  {
    image: movie,
    image2: movie2,
    image3: movie3,
    title: "Movie Booking Application",
    description:
      "The backend of a movie ticket booking system using Express.js, Node.js, and MongoDB.",
    keyfeatures: [
      "RESTful API for movie listings and seat booking",
      "User registration and authentication",
      "MongoDB-based storage for bookings and schedules",
      "Secure and scalable backend infrastructure",
    ],
  },
  {
    image: portfolio,
    image2: portfolio2,
    image3: portfolio3,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Material UI.",
    keyfeatures: [
      "Responsive portfolio layout",
      "Project showcase and contact section",
      "Built with React and styled using Material UI",
    ],
  },
  {
    image: figma,
    image2: figma2,
    image3: figma3,
    title: "Figma Design",
    description: "Frontend design developed from Figma.",
    keyfeatures: [
      "Pixel-perfect implementation from Figma wireframes",
      "Modern UI/UX with clean components",
      "Responsive design using Material UI and custom styles",
    ],
  },
];

export const eduprojectList = [
  {
    image: sqna,
    title: "Chegg SQnA",
    description:
      "Managed and guided a team of Subject Matter Experts (SMEs) to deliver high-quality answers to academic questions posted by students online.",
    keyfeatures: [
      "Led a team of SMEs to ensure accurate and timely responses",
      "Maintained content quality and adherence to academic standards",
      "Provided feedback and training to improve expert performance",
      "Tracked productivity and resolved subject-specific challenges",
    ],
  },
  {
    image: tbs,
    title: "Chegg TBS",
    description:
      "Oversaw and trained SMEs to provide step-by-step solutions to textbook questions across various subjects.",
    keyfeatures: [
      "Supervised textbook-based solution creation",
      "Ensured accuracy, clarity, and consistency in step-wise answers",
      "Helped onboard and mentor new SMEs",
      "Collaborated with content managers to meet syllabus needs",
    ],
  },
  {
    image: capp,
    title: "Chegg CAPP",
    description:
      "Led team of SMEs to create and deliver exam-oriented questions and detailed solutions for competitive and academic tests.",
    keyfeatures: [
      "Designed curriculum-aligned exam questions with solutions",
      "Maintained balance of difficulty and coverage across topics",
      "Reviewed and refined solutions for clarity and effectiveness",
      "Contributed to question bank development for assessments",
    ],
  },
];