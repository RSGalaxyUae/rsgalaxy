
export const serviceCodesArray = [
    "ENG001",
    "CIV002",
    "BMU003",
    "JW004",
    "CS005",
    "UVS006",
    "PC007",
    "MCW008",
    "VP009",
    "SSS010",
    "MC011",
    "DS012",
    "ES013",
    "JS014",
    "SSS015"
  ] as const;

  export type ServiceCodes = typeof serviceCodesArray[number]

export type ServiceItem = {
    title: string,
    description: string,
    image?: string,
    code: ServiceCodes
}

export const services:ServiceItem[]  = [
  {
    title: "Engineering Solutions",
    description: "With over 10 years of experience in MEP Contracting in the region, RS Galaxy executes all types of MEP Engineering projects for the government & private sectors offering high-quality solutions for all types of buildings and office environments.",
    image: "/assets/images/engineering-solutions.jpg",
    code: "ENG001"
  },
  {
    title: "Civil & Fit-out Solutions",
    description: "MEP Solutions, Civil and fit-out works for commercial and residential buildings",
    image: "/assets/images/civil-fit-out-solutions.jpg",
    code: "CIV002"
  },
  {
    title: "Building Maintenance Unit",
    description: "RS Galaxy specializes in providing cost-effective European building access solutions via a wide range of Suspended Access Cradles (Building Maintenance Units) easy to install for all types of buildings, low, medium, and high-rise.",
    image: "/assets/images/building-maintenace-unit.jpg",
    code: "BMU003"
  },
  {
    title: "Joinery Works",
    description: "RS Galaxy is one of the most accredited, modern, and sophisticated interiors, fit-out, and joinery companies in the region. We cater to a wide range of bespoke joinery works to address the various needs of highly distinctive and quality-conscious clients in the region.",
    image: "/assets/images/joinery-works.jpg",
    code: "JW004"
  },
  {
    title: "Cleaning Solutions",
    description: "RS Galaxy provides commercial and office cleaning services to various clients in the UAE. We deliver the most efficient results by using the perfect materials, cutting-edge technology, and a well-trained team through one-time service & annual contracts.",
    image: "/assets/images/cleaning-solutions.jpg",
    code: "CS005"
  },
  {
    title: "UV Sanitization",
    description: "RS Galaxy is a leading provider of reliable UV sanitization solutions to destroy bacteria and viruses and leave your space germ-free in minutes.",
    image: "/assets/images/uv-sanitization.jpg",
    code: "UVS006"
  },
  {
    title: "Pest Control",
    description: "Total pest control protection from all types of pests, all types of rodents (rats/mice), ants, roaches, and all other crawling insects classified as public health pests using safe and environmentally friendly products.",
    image: "/assets/images/pest-control.jpg",
    code: "PC007"
  },
  {
    title: "Mobile Car Wash",
    description: "The perfect mobile Car Wash Solution that saves your time. RS Galaxy only uses safe and environmentally friendly products with the latest innovation and equipment in the industry.",
    image: "/assets/images/car-wash.jpg",
    code: "MCW008"
  },
  {
    title: "Valet Parking",
    description: "RS Galaxy offers our users a five-star Valet parking experience and provides peace of mind by delivering a safe, secure service for all types of venues and businesses.",
    image: "/assets/images/valet-parking.jpg",
    code: "VP009"
  },
  {
    title: "Security Service Solutions",
    description: "RS Galaxy is a leading security company that offers 24-hour reliable security & safety services to meet the needs of each business client via a professionally trained team.",
    image: "/assets/images/security-service-solutions.jpg",
    code: "SSS010"
  },
  {
    title: "Manpower Consultancy",
    description: "RS Galaxy recruitment is a leading company providing human resources, manpower, and head-hunting services for organizations in various industries.",
    image: "/assets/images/manpower-consultancy.jpg",
    code: "MC011"
  },
  {
    title: "Delivery Services",
    description: "RS Galaxy delivery service has a variety of flexibility and understands the overall market hurdles in day-to-day changing patterns of delivery businesses.",
    image: "/assets/images/delivery-services.jpg",
    code: "DS012"
  },
  {
    title: "Elevator Solutions",
    description: "RS Galaxy is the leading Turkish (EMAK) Elevator Supplier in UAE. We provide a wide range of Elevators including Passenger Lifts, service lifts, Fire lifts, and Car lifts.",
    image: "/assets/images/elevator-solutions.jpg",
    code: "ES013"
  },
  {
    title: "Joinery Solutions",
    description: "RS Galaxy is the leading Turkish Made Wooden Doors, Kitchen & Wardrobes Supplier in UAE. We provide a wide range of items in the wood designing sectors for Offices, Residential Buildings, Schools, and Hospitals.",
    image: "/assets/images/joinery-services.jpg",
    code: "JS014"
  },
  {
    title: "Sustainable Solar Solutions",
    description: "RS Galaxy can provide a solar solution for you whatever your roof type. We offer you full benefits from a solar system with the highest quality that comes with long service. You can also lower your consumption bills while saving.",
    image: "/assets/images/sustainable-solar-solutions.jpg",
    code: "SSS015"
  }
];

// You can use the 'services' array to display this information on your website.
