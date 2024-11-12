import tourImg01 from "../images/Golden-tour.jpg";
import tourImg02 from "../images/Him-tour.jpg";
import tourImg03 from "../images/South-tour.jpg";
import tourImg04 from "../images/Kerela-tour.jpg";
import tourImg05 from "../images/Royal-tour.jpg";
import tourImg06 from "../images/Sikkim-tour.jpg";
import tourImg07 from "../images/Char-Dham-tour.jpg";
import tourImg08 from "../images/Goa-tour.jpeg";
import tourImg09 from "../images/Uk-tour.jpg"; 
import tourImg10 from "../images/Andaman-tour.jpg";
import tourImg11 from "../images/Himachal-tour.jpg";
import tourImg12 from "../images/Cul-gujarat-tour.jpg";

const tours = [
  {
    id: "01",
    title: "Golden Pilgrimage Tour",
    destinations: "Varanasi, Haridwar, Rishikesh, Mathura",
    distance: 1500,
    price: 35000,
    maxGroupSize: 10,
    duration: "7 Days / 6 Nights",
    inclusions: "Accommodation, transport, temple entry fees, tour guides, meals",
    desc: "Ganga Aarti in Varanasi, sacred temples in Mathura, and riverfront activities in Rishikesh and Haridwar",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
      {
        name: "john doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Himalayan Wellness Retreat",
    destinations: "Rishikesh, Dehradun, Mussoorie",
    distance: 520,
    price: 25000,
    maxGroupSize: 10,
    duration: "5 Days / 4 Nights",
    inclusions: "Accommodation, yoga sessions, wellness treatments, transport, meals",
    desc: "Easy mountain treks, yoga and meditation in Rishikesh, relaxing stays in Mussoorie",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "South India Temple Trail",
    destinations: "Chennai, Madurai, Rameshwaram, Kanyakumari",
    distance: 1200,
    price: 35000,
    maxGroupSize: 10,
    duration: "6 Days / 5 Nights",
    inclusions: "Accommodation, transport, temple visits, local guides, meals",
    desc: "Meenakshi Temple, Ramanathaswamy Temple, sunset at Kanyakumari",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "12",
    title: "Cultural Gujarat Tour",
    destinations: "Ahmedabad, Somnath, Dwarka, Gir",
    distance: 1200,
    price: 35000,
    maxGroupSize: 10,
    duration: "7 Days / 6 Nights",
    inclusions: "Accommodation, guided tours, transport, meals, and safari in Gir",
    desc: "Somnath Temple, Dwarka sightseeing, visit to the Gir National Park",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "04",
    title: "Kerala Backwaters & Ayurveda",
    destinations: "Alleppey, Kumarakom, Kochi",
    distance: 250,
    price: 30000,
    maxGroupSize: 10,
    duration: "5 Days / 4 Nights",
    inclusions: "Accommodation in houseboats, Ayurvedic treatments, transport, meals",
    desc: "Houseboat stay in Alleppey, Ayurvedic massages, and a visit to Fort Kochi",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Royal Rajasthan Heritage Tour",
    destinations: "Jaipur, Udaipur, Jodhpur",
    distance: 850,
    price: 38000,
    maxGroupSize: 10,
    duration: "7 Days / 6 Nights",
    inclusions: "Accommodation, guided tours, transport, meals, cultural shows",
    desc: "Amber Fort, Lake Pichola boat ride, Mehrangarh Fort",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: true,
  },
  {
    id: "06",
    title: "Serene Sikkim & Darjeeling Tour",
    destinations: "Gangtok, Darjeeling, Kalimpong",
    distance: 250,
    price: 35000,
    maxGroupSize: 10,
    duration: "6 Days / 5 Nights",
    inclusions: "Accommodation, transport, guided sightseeing, meals",
    desc: "Scenic views of Kanchenjunga, monasteries, Darjeeling Himalayan Railway",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "07",
    title: "Char Dham Yatra (Easy Route)",
    destinations: "Badrinath, Kedarnath, Gangotri, Yamunotri",
    distance: 1600,
    price: 70000,
    maxGroupSize: 10,
    duration: "10 Days / 9 Nights",
    inclusions: "Helicopter transport for Kedarnath, accommodation, temple access, meals",
    desc: "Helicopter ride for Kedarnath, spiritual visit to all four sacred sites",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "09",
    title: "Spiritual Uttarakhand Tour",
    destinations: "Rishikesh, Haridwar, Auli",
    distance: 800,
    price: 30000,
    maxGroupSize: 10, 
    duration: "6 Days / 5 Nights",
    inclusions: "Accommodation, transport, meals, sightseeing",
    desc: "Visit to the Beatles Ashram, Ganga Aarti, easy snow walks in Auli",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "10",
    title: "Andaman Island Getaway",
    destinations: "Port Blair, Havelock Island",
    distance: 120,
    price: 32000,
    maxGroupSize: 10,
    duration: "6 Days / 5 Nights",
    inclusions: "Accommodation, ferry tickets, sightseeing, meals",
    desc: "Port Blair, Radhanagar Beach, boat rides, snorkeling (optional)",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "11",
    title: "Majestic Himachal Tour",
    destinations: "Shimla, Manali, Kullu",
    distance: 700,
    price: 35000,
    maxGroupSize: 10,
    duration: "7 Days / 6 Nights",
    inclusions: "Accommodation, local transport, sightseeing, meals",
    desc: "Scenic valleys, local culture, light walks through the woods, easy trekking",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "08",
    title: "Goa Leisure & Beach Escape",
    destinations: "North & South Goa",
    distance: 150,
    price: 25000,
    maxGroupSize: 10,
    duration: "5 Days / 4 Nights",
    inclusions: "Accommodation, beach access, transport, meals, sightseeing",
    desc: "Beaches, peaceful resorts, old Portuguese churches, and spice plantations",
    reviews: [
      {
        name: "john doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
];

export default tours;