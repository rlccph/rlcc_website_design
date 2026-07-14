export const realLifeTv = {
  url: "https://tv.rlcc.ph",
  name: "Real Life TV",
  watchButtonLabel: "Watch on Real Life TV",
  youtubeLiveUrl: "https://www.youtube.com/@rlccph/live",
  youtubeButtonLabel: "Watch on YouTube",
};

export const navLinks = [
  { label: "Visit", href: "/visit" },
  {
    label: "Messages",
    href: "/messages",
    children: [
      { label: "Watch Live", href: realLifeTv.url, external: true },
      { label: "All Messages", href: "/messages" },
      { label: "Watch", href: "/messages/watch" },
      { label: "Listen", href: "/messages/listen" },
    ],
  },
  { label: "Communities", href: "/communities" },
  { label: "Giving", href: "/give" },
  { label: "About", href: "/about" },
];

export const mobileNavUtility = {
  ctaLabel: "Plan Your Visit",
  ctaHref: "/visit",
  secondaryLabel: "Watch Live",
  secondaryHref: realLifeTv.url,
  contact: {
    email: "support@rlcc.ph",
    phone: "+63 906 593 8010",
    phoneHref: "tel:+639065938010",
    emailHref: "mailto:support@rlcc.ph",
  },
};

export const brandAssets = {
  logo: "/images/brand/rlcc-logo-white.png",
  logoOnLight: "/images/brand/rlcc-logo-green.png",
  mapBackground: "/images/figma/map-bg.png",
};

export const heroSlides = [
  {
    title: "Real Life Starts Here",
    description:
      "Experience real life in Christ - a life of purpose, growth, and genuine connection with others.",
    image: "/images/figma/hero-bg.png",
  },
];

export const visitHighlights = {
  title: "Planning to Visit?",
  description:
    "We can't wait to meet you. Whether you're joining us in person or online, there's a place for you here.",
  locationName: "Hope Center",
  locationAddress:
    "3rd Floor Esperanza Bldg., Pacita Avenue, Pacita Complex, San Pedro City, Laguna",
};

export const missionSection = {
  heading: "Who We Are",
  eyebrow: "New Here?",
  description:
    "We are a Christ-centered church committed to helping people grow in faith, build meaningful relationships, and honor God in everyday life.",
  supportingText:
    "Our mission is to help people experience real life in Christ together with others. No matter where you are in your spiritual journey, you are welcome here.",
  featuredImage: "/images/who-we-are/who-we-are-feature-handshake.png",
  featuredImageAlt:
    "RLCC members greeting each other warmly during a church gathering",
};

export const sundayCards = [
  {
    title: "Onsite Services",
    details: [
      { label: "Tagalog Service", time: "9:00 AM - 10:30 AM" },
      { label: "Taglish Service", time: "11:00 AM - 12:30 PM" },
    ],
    description:
      "Come as you are. Our service lasts about 90 minutes and free parking is available nearby.",
    ctaLabel: "Plan to Visit",
    ctaHref: "/visit",
    image: "/images/figma/onsite-header.png",
  },
  {
    title: "Online Services",
    details: [
      { label: "Tagalog Stream", time: "9:00 AM - 10:30 AM" },
      { label: "Taglish Stream", time: "11:00 AM - 12:30 PM" },
    ],
    description:
      "Join us live on Real Life TV every Sunday — with worship, chat, and prayer together online. Also on Facebook, YouTube, Instagram, and Twitch.",
    ctaLabel: "Watch on Real Life TV",
    ctaHref: realLifeTv.url,
    image: "/images/figma/online-header.png",
  },
];

export const sermonCards = [
  {
    title: "Mercy",
    category: "Sunday Service | Past Messages",
    date: "Posted on March 22, 2026",
    image: "/images/figma/sermon-card.png",
  },
  {
    title: "Grace",
    category: "Sunday Service | Past Messages",
    date: "Posted on March 15, 2026",
    image: "/images/figma/sermon-card.png",
  },
  {
    title: "Faith",
    category: "Sunday Service | Past Messages",
    date: "Posted on March 8, 2026",
    image: "/images/figma/sermon-card.png",
  },
];

export const homepageMessagesContent = {
  title: "Start with a Message",
  subtitle:
    "Watch Christ-centered teaching that helps you experience real life in Christ in your everyday journey.",
  featured: {
    title: "A Trinity of Temptations",
    date: "Sunday, June 7, 2026",
    speaker: "Rev. Bong Baylon",
    description:
      "In the wilderness, Jesus faced three temptations — to turn stones to bread, to test God's protection, and to seize power on his own terms. This message explores how the Spirit leads us through our own wilderness moments with the same faithfulness.",
    image: "/images/messages/the-third-way-june-2026.png",
    href: "/messages/watch/the-third-way",
    ctaLabel: "Watch",
  },
  exploreHref: "/messages",
  exploreLabel: "Explore all messages",
};

export const ministriesHighlight = {
  title: "Communities & Ministries",
  description:
    "At RLCC, we believe spiritual growth happens in relationships. Communities are where people build friendships, grow in faith, and support one another in everyday life.",
  points: [
    "There is a place for you — single, married, young, older, or new to church",
    "Join a Christ-centered community and grow in faith with others",
    "Serve through ministries that help break barriers, connect people, and honor Christ",
  ],
  image: "/images/figma/who-we-are-image.png",
};

export const prayerSection = {
  title: "Need Prayer?",
  description: "We would be honored to pray for you.",
  image: "/images/figma/prayer-bg.png",
};

export const visitPageContent = {
  hero: {
    title: "Plan Your Visit",
    subtitle:
      "We'd love to meet you this Sunday. Whether it's your first time at church or you're coming back after a while, come as you are — friendly faces, clear directions, and a place for you from the moment you arrive.",
    framingLine: "Here's everything you need to know before your first Sunday.",
    image: "/images/visit/visit-hero-welcome.png",
  },
  serviceTimes: {
    title: "Service Times",
    subtitle:
      "We gather every Sunday at Hope Center. You can also join us online from wherever you are.",
    glanceNotes: [
      "Services typically last about 90 minutes.",
      "Come as you are. Casual attire is welcome.",
    ],
    services: [
      { label: "Tagalog Service", time: "9:00 AM – 10:30 AM" },
      { label: "Taglish Service", time: "11:00 AM – 12:30 PM" },
    ],
    onlinePlatforms: ["Facebook", "YouTube", "Instagram", "Twitch"],
    onlineDescription:
      "Join on Real Life TV for worship, chat, and prayer together online. Also streaming on Facebook, YouTube, Instagram, and Twitch.",
    watchOnlineLabel: realLifeTv.watchButtonLabel,
    watchOnlineUrl: realLifeTv.url,
  },
  location: {
    title: "Location",
    venue: "Hope Center",
    address:
      "3rd Floor Esperanza Bldg., Pacita Avenue, Pacita Complex, San Pedro City, Laguna",
    parking:
      "Free parking is available in front of the building and in nearby areas.",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Real+Life+Christian+Communities",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.440471872894!2d121.05831181075963!3d14.34390208605468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0c69122829b%3A0x3a927b87a22d86b9!2sReal%20Life%20Christian%20Communities!5e0!3m2!1sen!2sph!4v1781259947771!5m2!1sen!2sph",
  },
  expect: {
    title: "What to Expect",
    subtitle:
      "Our Sunday services are warm, Christ-centered, and designed to help people encounter God together.",
    points: [
      "Friendly greeters and ushers ready to help you find your way.",
      "Worship, prayer, and biblical teaching centered on Jesus.",
      "Meaningful time to connect with others before and after the service.",
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What should I wear?",
        answer:
          "Come as you are. Most people dress casually, and you are welcome however you are comfortable.",
      },
      {
        question: "Is there parking?",
        answer:
          "Yes. Free parking is available in front of the building and in nearby parking areas.",
      },
      {
        question: "Do you have programs for kids?",
        answer:
          "Yes. We have age-appropriate experiences for children and families on Sundays.",
      },
      {
        question: "What happens during the service?",
        answer:
          "Each service includes worship, prayer, biblical teaching, and time to connect with others.",
      },
      {
        question: "How do I get connected after visiting?",
        answer:
          "Talk with one of our team members after service or head to our Communities page to find a group.",
      },
    ],
  },
  rsvp: {
    title: "Planning to Join Us This Sunday?",
    description:
      "We would love to welcome you personally. If you're planning to attend, let us know so we can be ready to receive you.",
    buttonLabel: "Let Us Know You're Coming",
    buttonHref: "https://rlccphil.churchcenter.com/people/forms/1169899",
  },
  afterVisit: {
    title: "After Your First Visit",
    description:
      "We believe growth happens in relationships. When you're ready, we would love to help you find a community where you can grow in faith and friendship.",
    buttonLabel: "Explore Communities",
    buttonHref: "/communities",
  },
  cta: {
    title: "Have more questions? We'd love to hear from you.",
    buttonLabel: "Talk to Us",
    buttonHref: "/contact",
  },
};

export const communitiesPageContent = {
  hero: {
    title: "Communities",
    subtitle:
      "Real life is better together. Communities are where friendships are built, faith grows, and life happens.",
    image: "/images/communities/communities-hero.jpg",
    imageAlt: "RLCC community members praying together during a gathering",
  },
  whatIs: {
    title: "What is a Community?",
    body: "At RLCC, we believe spiritual growth happens in relationships. Communities are small groups where people build friendships, grow in faith, and support one another in everyday life. Whether you're single, married, young, older, or new to church — there's a place for you.",
    image: "/images/communities/what-is-community.jpg",
    imageAlt: "RLCC community members smiling together after a gathering",
    values: [
      { label: "Friendship", icon: "friendship" },
      { label: "Faith Growth", icon: "faith" },
      { label: "Mutual Support", icon: "support" },
      { label: "Everyone Welcome", icon: "welcome" },
    ],
  },
  types: {
    title: "Find Your Community",
    items: [
      {
        title: "Remix (Real Men in Christ)",
        description:
          "A welcoming group of men (ages 45+) who meet regularly for fellowship, encouragement, and faith-building conversations. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-1.jpg",
      },
      {
        title: "Kindred Hearts (KH)",
        description:
          "A welcoming group of women (around ages 40+) who meet monthly for fellowship, encouragement, and faith conversations. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-2.jpg",
      },
      {
        title: "One in Christ (Young Couples)",
        description:
          "A welcoming group of young couples—with or without children—who gather for fellowship, encouragement, and spiritual growth. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-3.jpg",
      },
      {
        title: "Crossroads (Young Professionals)",
        description:
          "A welcoming group of young professionals who seek to grow in faith, build meaningful connections, and honor Christ in the workplace. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-4.jpg",
      },
      {
        title: "Real Life Youth (Students)",
        description:
          "A welcoming group of students and out-of-school youth who gather for friendship, encouragement, and spiritual growth. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-5.jpg",
      },
      {
        title: "RLCC at Southridge",
        description:
          "A welcoming simple church in Southridge, San Pedro, where people gather to grow in faith and build meaningful relationships. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-6.jpg",
      },
      {
        title: "RLCC at Australian Surplus",
        description:
          "A welcoming simple church that meets at Australian Surplus, where people gather to grow in faith and build Christ-centered relationships. First-time visitors are always welcome.",
        image: "/images/who-we-are/community-7.jpg",
      },
    ],
  },
  howToJoin: {
    title: "How to Join",
    subtitle: "Finding your community is simple — here's how to take your next step.",
    steps: [
      {
        number: 1,
        title: "Browse communities",
        description: "Explore groups by life stage, location, or interest to find a good fit.",
      },
      {
        number: 2,
        title: "Attend a session",
        description: "Visit a gathering to meet people and experience the community firsthand.",
      },
      {
        number: 3,
        title: "Get connected",
        description: "Reach out to a leader and take your next step toward deeper relationships.",
      },
    ],
  },
  testimonials: {
    title: "What Our Members Say",
    items: [
      {
        quote:
          "I was nervous walking into my first community, but everyone made me feel welcome. It's where I've found real friendships and accountability.",
        name: "Mac A.",
        communityType: "Crossroads (Young Professionals)",
        image: "/images/communities/testimonials/mac-a-crossroads.png",
      },
      {
        quote:
          "Our couples group has been a safe place to grow in faith and support one another through the ups and downs of marriage.",
        name: "Val & Timmy H.",
        communityType: "One in Christ (Young Couples)",
        image: "/images/communities/testimonials/val-timmy-h-one-in-christ.jpg",
      },
      {
        quote:
          "Being part of a community helped me feel like I truly belong at RLCC — not just on Sundays, but throughout the week.",
        name: "Pstra. Marifi G.",
        communityType: "Kindred Hearts (KH)",
        image: "/images/communities/testimonials/pstra-marifi-g-kindred-hearts.jpg",
      },
    ],
  },
  cta: {
    title: "Not sure where to start?",
    primaryLabel: "Talk to Us",
    primaryHref: "/contact",
    secondaryLabel: "Learn More About Us",
    secondaryHref: "/about",
  },
};

export const givingPageContent = {
  hero: {
    title: "Give",
    subtitle:
      "Everything we have comes from God. Your generosity helps people grow in faith, build meaningful relationships, and encounter Christ in everyday life.",
    image: "/images/giving/giving-hero.jpg",
    imageAlt: "RLCC members worshipping together with hands raised in prayer",
  },
  scripture: {
    quote:
      "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.",
    reference: "2 Corinthians 9:7",
  },
  whyWeGive: {
    title: "Why We Give",
    body: "Giving is an act of worship and trust. When we give, we acknowledge that everything we have belongs to God and participate in the work He is doing through RLCC — helping people know Jesus and live for Him in everyday life.",
    impacts: [
      {
        title: "Worship & Ministry",
        description: "Supporting Sunday gatherings, worship, and ministry that help people encounter Christ together.",
        icon: "worship",
      },
      {
        title: "Discipleship & Growth",
        description: "Investing in communities, teaching, and resources that help people grow in faith and relationships.",
        icon: "discipleship",
      },
      {
        title: "Community Outreach",
        description: "Extending care, compassion, and practical support to people in San Pedro and beyond.",
        icon: "outreach",
      },
    ],
  },
  waysToGive: {
    title: "Ways to Give",
    methods: [
      {
        id: "bpi",
        title: "BPI Bank Deposit",
        details: [
          { label: "Account Name", value: "Real Life Christian Communities, Inc." },
          { label: "Account Type", value: "Current / Checking Account" },
          { label: "Account Number", value: "8481-0057-45" },
        ],
      },
      {
        id: "gcash",
        title: "GCash",
        notice:
          "Please text the Finance Office first before giving via GCash. We will send you the GCash giving details and help ensure your gift is recorded correctly.",
        details: [
          { label: "Contact", value: "Finance Office" },
          { label: "Mobile", value: "0917-511-2325" },
        ],
        smsHref: "sms:09175112325",
        smsLabel: "Text Finance Office",
      },
      {
        id: "paypal",
        title: "PayPal",
        details: [
          {
            label: "PayPal Link",
            value: "https://www.paypal.com/paypalme/rlccphil",
          },
        ],
        linkHref: "https://www.paypal.com/paypalme/rlccphil",
        linkLabel: "Give via PayPal",
      },
      {
        id: "in-person",
        title: "Give In Person",
        details: [
          { label: "When", value: "Join us every Sunday" },
          { label: "Service Times", value: "9:00 AM Tagalog | 11:00 AM Taglish" },
        ],
        visitHref: "/visit",
        visitLabel: "Plan Your Visit",
      },
    ],
  },
  designations: {
    title: "How to Designate Your Gift",
    intro:
      "You may designate your gift to support a specific area of ministry. When sending your proof of transaction, please include your chosen designation so we can apply your gift correctly.",
    items: [
      {
        title: "Tithes",
        description: "Regular giving that supports the overall ministry and mission of RLCC.",
      },
      {
        title: "Missions",
        description: "Gifts directed toward outreach, mission work, and sharing the gospel beyond our walls.",
      },
      {
        title: "Special Projects",
        description: "One-time or seasonal giving for specific initiatives, events, or ministry needs.",
      },
    ],
    instruction:
      "Please include your designation (Tithes, Missions, or Special Projects) when you send your proof of transaction.",
  },
  thankYou: {
    message:
      "Your generosity enables ministry to continue — from worship gatherings and discipleship to community outreach and pastoral care. Thank you for partnering with us.",
  },
  questions: {
    title: "Have questions about giving?",
    email: "support@rlcc.ph",
    buttonLabel: "Contact Us",
    buttonHref: "/contact",
  },
};

export const aboutPageContent = {
  hero: {
    title: "About Us",
    subtitle: "We are a community of ordinary people learning to follow Jesus together.",
    image: "/images/about/about-hero-collage.png",
    imageAlt: "RLCC community collage featuring worship, teaching, baptism, and fellowship",
  },
  whoWeAre: {
    title: "Who We Are",
    body: "Real Life Christian Communities (RLCC) is a Christ-centered church in San Pedro, Laguna. Our desire is to help people grow in faith, build meaningful relationships, and live out the life Jesus offers.",
    image: "/images/about/who-we-are-community.png",
    imageAlt: "RLCC community group photo with members smiling together",
  },
  missionVision: {
    mission: {
      title: "Mission",
      body: "Our mission is to help you experience real life in Christ together with others.",
    },
    vision: {
      title: "Vision",
      body: "To become a community of communities where the presence, power, and purpose of Christ are fulfilled in and through each one.",
    },
  },
  beliefs: {
    title: "What We Believe",
    body: "We believe in the authority of the Bible, salvation by grace through faith in Jesus Christ, and the transforming work of the Holy Spirit. Everything we do flows from our commitment to Scripture and our desire to see lives transformed by Christ.",
    scripture: {
      quote:
        "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.",
      reference: "John 10:10",
    },
  },
  experience: {
    title: "What You'll Experience",
    items: [
      { title: "Christ-centered worship", icon: "worship" },
      { title: "Biblical teaching", icon: "teaching" },
      { title: "A welcoming and diverse community", icon: "community" },
      { title: "Opportunities to grow through communities and discipleship", icon: "growth" },
    ],
  },
  story: {
    title: "Our Story",
    body: "What started as a small gathering in homes in the mid-1990s has grown, by God's grace, into a network of communities serving families, professionals, youth, and seniors across San Pedro and beyond. Through every season, our desire has remained the same — to help people encounter Christ and grow together in authentic community.",
    image: "/images/about/our-story-team.png",
    imageAlt: "RLCC leadership team celebrating together on stage",
    milestones: [
      { year: "1990s", label: "Small gatherings in homes begin" },
      { year: "2000s", label: "Church grows across San Pedro" },
      { year: "2010s", label: "Communities multiply across life stages" },
      { year: "Today", label: "A network of communities serving families, professionals, youth, and seniors" },
    ],
  },
  leadership: {
    title: "Our Leadership",
    pastor: {
      name: "Pastor Bong Baylon",
      role: "Senior Pastor",
      bio: "Pastor Bong leads RLCC with a heart for shepherding people toward Christ, building authentic community, and equipping the church to live out its mission together.",
      image: "/images/about/pastor-bong-baylon.png",
      imageAlt: "Pastor Bong Baylon, Senior Pastor of RLCC",
    },
    supportingText:
      "Led by a team of pastors and ministry leaders committed to shepherding the church with integrity, humility, and faithfulness.",
  },
  cta: {
    title: "You're Invited",
    subtitle:
      "If you're exploring faith or looking for a church home, we would love to meet you and walk with you.",
    primaryLabel: "Plan Your Visit",
    primaryHref: "/visit",
    secondaryLabel: "Talk to a Pastor",
    secondaryHref: "/contact",
  },
};

export const contactPageContent = {
  hero: {
    title: "Contact Us",
    subtitle:
      "We'd love to hear from you. Whether you have a question, need prayer, or just want to say hi — we're here.",
    image: "/images/contact/contact-hero-worship.png",
    imageAlt: "RLCC member worshipping with hand raised during a church gathering",
  },
  contactCards: [
    {
      title: "General Inquiries",
      value: "support@rlcc.ph",
      href: "mailto:support@rlcc.ph",
      icon: "envelope",
    },
    {
      title: "Phone",
      value: "+63 906 593 8010",
      href: "tel:+639065938010",
      icon: "telephone",
    },
    {
      title: "Location",
      value:
        "3rd Floor Esperanza Bldg., Pacita Avenue, Pacita Complex, San Pedro City, Laguna",
      href: "https://www.google.com/maps/search/?api=1&query=Real+Life+Christian+Communities",
      icon: "location",
    },
  ],
  form: {
    title: "Send Us a Message",
    submitLabel: "Send Message",
    subjectOptions: [
      "General Inquiry",
      "Prayer Request",
      "Talk to a Pastor",
      "Volunteering",
      "Other",
    ],
  },
  talkToPastor: {
    title: "Talk to a Pastor",
    subtitle:
      "Need someone to talk to? Our pastors are available to listen, pray, and walk with you through whatever you're facing.",
    ctaLabel: "Book a Conversation",
    ctaHref: "#",
  },
  prayerRequest: {
    title: "Need Prayer?",
    subtitle:
      "We would be honored to pray for you. Submit your prayer request and our team will lift you up in prayer.",
    ctaLabel: "Submit a Prayer Request",
    ctaHref: "#",
  },
  serviceLocation: {
    title: "Join Us This Sunday",
    services: [
      { label: "9:00 AM Tagalog Service" },
      { label: "11:00 AM Taglish Service" },
    ],
    address:
      "3rd Floor Esperanza Bldg., Pacita Avenue, Pacita Complex, San Pedro City, Laguna",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Real+Life+Christian+Communities",
    directionsLabel: "Get Directions",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.440471872894!2d121.05831181075963!3d14.34390208605468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0c69122829b%3A0x3a927b87a22d86b9!2sReal%20Life%20Christian%20Communities!5e0!3m2!1sen!2sph!4v1781259947771!5m2!1sen!2sph",
  },
  social: {
    title: "Follow Us",
    links: [
      {
        label: "Facebook",
        href: "https://facebook.com/rlccphil",
        icon: "/images/figma/social/facebook.svg",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/rlccphil",
        icon: "/images/figma/social/instagram.svg",
      },
      {
        label: "X",
        href: "https://x.com/rlccphil",
        icon: "/images/figma/social/x.svg",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@rlccph",
        icon: "/images/figma/social/youtube.svg",
      },
    ],
  },
};

export const messagesPageContent = {
  hero: {
    title: "Messages",
    subtitle:
      "Explore messages that speak to real struggles, real questions, and real life. Whether you're searching, healing, or growing — there's something here for you.",
    image: "/images/messages/messages-hero-worship.png",
  },
  realLifeTv: {
    title: "Real Life TV",
    viewAllHref: "/messages/watch",
    viewAllLabel: "View all",
    ctaLabel: "Watch",
    featured: {
      title: "A Trinity of Temptations",
      date: "Sunday, June 7, 2026",
      speaker: "Rev. Bong Baylon",
      description:
        "In the wilderness, Jesus faced three temptations — to turn stones to bread, to test God's protection, and to seize power on his own terms. This message explores how the Spirit leads us through our own wilderness moments with the same faithfulness.",
      image: "/images/messages/the-third-way-june-2026.png",
      href: "/messages/watch/the-third-way/trinity-of-temptations",
    },
    recent: [
      {
        id: "living-with-impact",
        title: "Living with Impact",
        date: "May 31, 2026",
        speaker: "Rev. Bong Baylon",
        image: "/images/messages/alive-may-2026.png",
        href: "/messages/watch/alive/living-with-impact",
      },
      {
        id: "living-in-community",
        title: "Living in Community",
        date: "May 24, 2026",
        speaker: "Rev. Bong Baylon",
        image: "/images/messages/alive-may-2026.png",
        href: "/messages/watch/alive/living-in-community",
      },
      {
        id: "living-generously",
        title: "Living Generously",
        date: "May 17, 2026",
        speaker: "Rev. Bong Baylon",
        image: "/images/messages/alive-may-2026.png",
        href: "/messages/watch/alive/living-generously",
      },
    ],
  },
  recentSeries: {
    title: "Recent series",
    viewAllHref: "/messages/watch",
    viewAllLabel: "View all",
    items: [
      {
        slug: "the-third-way",
        title: "The Third Way",
        subtitle: "June 2026",
        dateRange: "June 1 – 30, 2026",
        image: "/images/messages/the-third-way-june-2026.png",
        href: "/messages/watch/the-third-way",
      },
      {
        slug: "alive",
        title: "Alive",
        subtitle: "May 2026",
        dateRange: "May 3 – 31, 2026",
        image: "/images/messages/alive-may-2026.png",
        href: "/messages/watch/alive",
      },
      {
        slug: "because-he-lives",
        title: "Because He Lives",
        subtitle: "April 2026",
        dateRange: "April 5 – 30, 2026",
        image: "/images/messages/because-he-lives-april-2026.png",
        href: "/messages/watch/because-he-lives",
      },
    ],
  },
  dailyDevotions: {
    title: "RLCC Daily Devotions",
    viewAllHref: "/messages/listen",
    viewAllLabel: "View all",
    ctaLabel: "Listen",
    featured: {
      title: "Day 5: The Third Way",
      date: "Friday, June 12, 2026",
      speaker: "Rev. Bong Baylon",
      description:
        "Following Jesus means choosing a path that doesn't bend to fear, pride, or the pressure to prove ourselves. Today we reflect on what it means to walk the third way.",
      image: "/images/messages/the-third-way-june-2026.png",
      href: "/messages/listen/the-third-way-june-2026/day-5",
    },
    recent: [
      {
        id: "day-4",
        title: "Day 4: A Savior Who Understands",
        date: "June 11, 2026",
        speaker: "Rev. Bong Baylon",
        image: "/images/messages/the-third-way-june-2026.png",
        href: "/messages/listen/the-third-way-june-2026/day-4",
      },
      {
        id: "day-3",
        title: "Day 3: The Temptation of the Shortcut",
        date: "June 10, 2026",
        speaker: "Rev. Bong Baylon",
        image: "/images/messages/the-third-way-june-2026.png",
        href: "/messages/listen/the-third-way-june-2026/day-3",
      },
      {
        id: "day-2",
        title: "Day 2: The Burden of Proving Ourselves",
        date: "June 9, 2026",
        speaker: "Rev. Bong Baylon",
        image: "/images/messages/the-third-way-june-2026.png",
        href: "/messages/listen/the-third-way-june-2026/day-2",
      },
    ],
  },
  joinUs: {
    title: "Join us live every Sunday",
    services: [
      { label: "Tagalog", time: "9:00 AM" },
      { label: "Taglish", time: "11:00 AM" },
    ],
    buttonLabel: "Plan Your Visit",
    buttonHref: "/visit",
  },
};

export const watchPageContent = {
  hero: {
    title: "Watch",
    subtitle:
      "Join us live on Sundays or explore full sermon series from RLCC. Each series walks through a theme month by month.",
    image: "/images/messages/watch-hero-audience.png",
    imageAlt: "RLCC congregation watching a Sunday message together",
    imagePosition: "object-[center_20%]",
  },
  featured: {
    eyebrow: "Current Series",
    seriesTitle: "The Third Way",
    seriesSubtitle: "June 2026",
    messageTitle: "A Trinity of Temptations",
    date: "Sunday, June 7, 2026",
    speaker: "Rev. Bong Baylon",
    description:
      "In the wilderness, Jesus faced three temptations — to turn stones to bread, to test God's protection, and to seize power on his own terms. This message explores how the Spirit leads us through our own wilderness moments with the same faithfulness.",
    image: "/images/messages/the-third-way-june-2026.png",
    href: "/messages/watch/the-third-way/trinity-of-temptations",
    ctaLabel: "Watch Latest Message",
    seriesHref: "/messages/watch/the-third-way",
  },
  live: {
    title: "Join us live this Sunday on Real Life TV",
    services: [
      { label: "Tagalog", time: "9:00 AM" },
      { label: "Taglish", time: "11:00 AM" },
    ],
    platforms: ["YouTube", "Facebook", "Instagram", "Twitch"],
    url: realLifeTv.url,
    buttonLabel: realLifeTv.watchButtonLabel,
    youtubeLiveUrl: realLifeTv.youtubeLiveUrl,
    youtubeButtonLabel: realLifeTv.youtubeButtonLabel,
  },
  seriesByYear: [
    {
      year: 2026,
      label: "2026 Sermon Series",
      playlists: [
        {
          slug: "re-center",
          title: "Re-Center",
          subtitle: "January 2026 Series",
          playlistId: "PL0tu5eWxiLBQDvpoCO_qB82b_uUBwZVS5",
          image: "/images/messages/re-center-january-2026.png",
        },
        {
          slug: "better-heart",
          title: "Better Heart",
          subtitle: "February 2026 Series",
          playlistId: "PL0tu5eWxiLBQ0FMszy5iTRwHyHPIyP8Fu",
          image: "/images/messages/better-heart-february-2026.png",
        },
        {
          slug: "mercy",
          title: "Mercy",
          subtitle: "March 2026 Series",
          playlistId: "PL0tu5eWxiLBTHVCbSf0S2tEOAjiC1W4S5",
          image: "/images/figma/sermon-card.png",
        },
        {
          slug: "because-he-lives",
          title: "Because He Lives",
          subtitle: "April 2026 Series",
          playlistId: "PL0tu5eWxiLBRj1JjXJ6sE9OYbYwMsUEaM",
          image: "/images/messages/because-he-lives-april-2026.png",
        },
        {
          slug: "alive",
          title: "Alive",
          subtitle: "May 2026 Series",
          playlistId: "PL0tu5eWxiLBQfxH4cPr4KkPZu-Lx5aQXZ",
          image: "/images/messages/alive-may-2026.png",
          dateRange: "May 10 – 31, 2026",
          description: "Alive: Living Because Jesus Lives",
          messages: [
            {
              id: "living-with-impact",
              title: "Living with Impact",
              date: "May 31, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "dPN1a1oCahA",
              description:
                "Because Jesus lives, we can live with lasting impact — not for our own recognition, but for the sake of others and the glory of God.",
            },
            {
              id: "living-in-community",
              title: "Living in Community",
              date: "May 24, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "-dVlP8QkAqw",
              description:
                "Real life in Christ is not a solo journey. This message explores how belonging to a community shapes our faith and everyday discipleship.",
            },
            {
              id: "living-generously",
              title: "Living Generously",
              date: "May 17, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "cWl5APlupfg",
              description:
                "Generosity flows from a heart that has received grace. We look at what it means to live open-handedly because Jesus lives.",
            },
            {
              id: "living-miraculously",
              title: "Living Miraculously",
              date: "May 10, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "t2dtZp2bxtc",
              description:
                "The resurrection is not only a past event — it invites us to expect God to work in surprising ways in ordinary life.",
            },
          ],
        },
        {
          slug: "the-third-way",
          title: "The Third Way",
          subtitle: "June 2026 Series",
          playlistId: "PL0tu5eWxiLBTtzmd-NEcc54ZDDQftxBpt",
          image: "/images/messages/the-third-way-june-2026.png",
          dateRange: "June 1 – 30, 2026",
          description:
            "Alive in Christ, we are called to follow Jesus in a divided, anxious, and broken world. This series explores what it means to walk the third way — not the way of power or passivity, but the way of Jesus.",
          messages: [
            {
              id: "a-better-solution",
              title: "A Better Solution",
              date: "June 28, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "CVuSLPPeI34",
              description:
                "When the world's answers fall short, Jesus offers a better way — one shaped by trust, faithfulness, and love.",
            },
            {
              id: "you-are-invited",
              title: "You Are Invited",
              date: "June 21, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "U-08NDSkJpc",
              description:
                "The third way is not reserved for the already-strong. Jesus invites ordinary people into a life with him.",
            },
            {
              id: "on-the-right-side",
              title: "On the Right Side",
              date: "June 14, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "h49s6qHvETo",
              description:
                "In a world of competing sides, this message asks what it means to stand with Jesus rather than merely against someone else.",
            },
            {
              id: "trinity-of-temptations",
              title: "A Trinity of Temptations",
              date: "June 7, 2026",
              speaker: "Rev. Bong Baylon",
              videoId: "UU4qWIQvW9E",
              description:
                "In the wilderness, Jesus faced three temptations — to turn stones to bread, to test God's protection, and to seize power on his own terms. This message explores how the Spirit leads us through our own wilderness moments with the same faithfulness.",
            },
          ],
        },
      ],
    },
  ],
  currentSeriesSlug: "the-third-way",
  youtubeChannelUrl: "https://www.youtube.com/@rlccph",
};

export const listenPageContent = {
  hero: {
    title: "Listen",
    subtitle:
      "RLCC Daily Devotions help you carry Sunday's message into the rest of your week — one short episode at a time.",
    image: "/images/messages/listen-hero-worship.png",
    imageAlt: "Someone in worship with hands raised during an RLCC gathering",
  },
  playlistId: "PL0tu5eWxiLBSXplTqbqj4UR7UCRqdIoOV",
  youtubePlaylistUrl:
    "https://www.youtube.com/playlist?list=PL0tu5eWxiLBSXplTqbqj4UR7UCRqdIoOV",
  youtubeChannelUrl: "https://www.youtube.com/@rlccph",
  devotionSeries: [
    {
      slug: "the-third-way-june-2026",
      title: "The Third Way: The Way of Jesus",
      subtitle: "June 2026",
      description:
        "Alive in Christ, we are called to follow Jesus in a divided, anxious, and broken world. This series of daily devotions walks through the previous Sunday's message — one day at a time.",
      image: "/images/messages/the-third-way-june-2026.png",
      playlistId: "PL0tu5eWxiLBSXplTqbqj4UR7UCRqdIoOV",
      episodes: [
        {
          id: "day-5",
          title: "Day 5: The Third Way",
          date: "June 12, 2026",
          speaker: "Rev. Bong Baylon",
          videoId: "_XI62fOp_5Q",
          description:
            "Following Jesus means choosing a path that doesn't bend to fear, pride, or the pressure to prove ourselves. Today we reflect on what it means to walk the third way.",
        },
        {
          id: "day-4",
          title: "Day 4: A Savior Who Understands",
          date: "June 11, 2026",
          speaker: "Rev. Bong Baylon",
          videoId: "lc9FpPNf4wY",
          description:
            "Jesus is not distant from our struggles. This devotion reflects on a Savior who understands our weakness and walks with us through it.",
        },
        {
          id: "day-3",
          title: "Day 3: The Temptation of the Shortcut",
          date: "June 10, 2026",
          speaker: "Rev. Bong Baylon",
          videoId: "rS4X6ugdihk",
          description:
            "Shortcuts promise quick results, but discipleship asks for a slower faithfulness. We consider where we are tempted to skip the way of Jesus.",
        },
        {
          id: "day-2",
          title: "Day 2: The Burden of Proving Ourselves",
          date: "June 9, 2026",
          speaker: "Rev. Bong Baylon",
          videoId: "RftUPOiJOq4",
          description:
            "Many of us live under the pressure to prove our worth. This devotion invites us to rest in identity received, not performed.",
        },
        {
          id: "day-1",
          title: "Day 1: The Illusion of Control",
          date: "June 8, 2026",
          speaker: "Rev. Bong Baylon",
          videoId: "83UHRm37vmk",
          description:
            "Control feels safe, but it can become a false refuge. We begin the week by naming where we cling to control instead of trusting God.",
        },
      ],
    },
  ],
  currentSeriesSlug: "the-third-way-june-2026",
};

export function getListenSeriesBySlug(slug) {
  return listenPageContent.devotionSeries.find((series) => series.slug === slug) ?? null;
}

export function getWatchPlaylistBySlug(slug) {
  for (const group of watchPageContent.seriesByYear) {
    const playlist = group.playlists.find((item) => item.slug === slug);
    if (playlist) {
      return { ...playlist, year: group.year, yearLabel: group.label };
    }
  }

  return null;
}

export function getWatchMessageBySlug(seriesSlug, messageSlug) {
  const series = getWatchPlaylistBySlug(seriesSlug);
  if (!series?.messages) {
    return null;
  }

  const message = series.messages.find((item) => item.id === messageSlug);
  if (!message) {
    return null;
  }

  return {
    ...message,
    format: "watch",
    ctaLabel: "Watch",
    series,
    seriesHref: `/messages/watch/${series.slug}`,
    href: `/messages/watch/${series.slug}/${message.id}`,
    siblings: series.messages.map((item) => ({
      ...item,
      href: `/messages/watch/${series.slug}/${item.id}`,
    })),
  };
}

export function getListenEpisodeBySlug(seriesSlug, episodeSlug) {
  const series = getListenSeriesBySlug(seriesSlug);
  if (!series?.episodes) {
    return null;
  }

  const message = series.episodes.find((item) => item.id === episodeSlug);
  if (!message) {
    return null;
  }

  return {
    ...message,
    format: "listen",
    ctaLabel: "Listen",
    series: {
      ...series,
      subtitle: `${series.subtitle} Series`,
    },
    seriesHref: `/messages/listen/${series.slug}`,
    href: `/messages/listen/${series.slug}/${message.id}`,
    siblings: series.episodes.map((item) => ({
      ...item,
      href: `/messages/listen/${series.slug}/${item.id}`,
    })),
  };
}

export function getAllWatchMessageParams() {
  return watchPageContent.seriesByYear.flatMap((group) =>
    group.playlists.flatMap((playlist) =>
      (playlist.messages ?? []).map((message) => ({
        slug: playlist.slug,
        messageSlug: message.id,
      })),
    ),
  );
}

export function getAllListenEpisodeParams() {
  return listenPageContent.devotionSeries.flatMap((series) =>
    series.episodes.map((episode) => ({
      slug: series.slug,
      episodeSlug: episode.id,
    })),
  );
}

export const footerData = {
  address:
    "3rd Floor Esperanza Bldg., Pacita Avenue, Pacita Complex, San Pedro City, Laguna",
  socialLinks: [
    {
      label: "Facebook",
      href: "https://facebook.com/rlccphil",
      icon: "/images/figma/social/facebook.svg",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/rlccphil",
      icon: "/images/figma/social/instagram.svg",
    },
    {
      label: "X",
      href: "https://x.com/rlccphil",
      icon: "/images/figma/social/x.svg",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@rlccph",
      icon: "/images/figma/social/youtube.svg",
    },
    {
      label: "Twitch",
      href: "https://www.twitch.tv/",
      icon: "/images/figma/social/twitch.svg",
    },
  ],
  quickLinks: [
    { label: "Visit", href: "/visit" },
    { label: "Messages", href: "/messages" },
    { label: "Communities", href: "/communities" },
    { label: "Giving", href: "/give" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "support@rlcc.ph",
    phone: "+63 906 593 8010",
  },
};
