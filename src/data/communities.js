export const communityExpectItems = [
  { title: "Warm fellowship", icon: "fellowship" },
  { title: "Biblical encouragement", icon: "teaching" },
  { title: "Genuine friendships", icon: "friendship" },
];

export const communities = [
  {
    slug: "remix-real-men-in-christ",
    name: "Remix (Real Men in Christ)",
    category: "Community",
    shortDescription:
      "A welcoming group of men (ages 45+) who meet regularly for fellowship, encouragement, and faith-building conversations. First-time visitors are always welcome.",
    fullDescription:
      "Real Men in Christ (Remix) is a community of men ages 45 and above — married or single — who desire to grow in their relationship with Christ and encourage one another in this season of life. The group meets regularly for fellowship, honest conversations, prayer, and practical biblical encouragement. Whether you've been in church for years or are just exploring your faith, you're welcome to visit.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/remix-real-men-in-christ",
    image: "/images/who-we-are/community-1.jpg",
    imageAlt: "Remix Real Men in Christ community gathering",
  },
  {
    slug: "kindred-hearts-kh",
    name: "Kindred Hearts (KH)",
    category: "Community",
    shortDescription:
      "A welcoming group of women (around ages 40+) who meet monthly for fellowship, encouragement, and faith conversations. First-time visitors are always welcome.",
    fullDescription:
      "Kindred Hearts is a community of adult women (around ages 40+) who gather monthly for fellowship, encouragement, and faith-building conversations. It is a space where women can share life, support one another, and grow spiritually together. First-time visitors are warmly welcomed.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/kindred-hearts",
    image: "/images/who-we-are/community-2.jpg",
    imageAlt: "Kindred Hearts community gathering",
  },
  {
    slug: "one-in-christ-young-couples",
    name: "One in Christ (Young Couples)",
    category: "Community",
    shortDescription:
      "A welcoming group of young couples — with or without children — who gather for fellowship, encouragement, and spiritual growth. First-time visitors are always welcome.",
    fullDescription:
      "One in Christ is a community of young couples — with or without children — who desire to build Christ-centered marriages and meaningful friendships. The group gathers regularly to share life, study Scripture, pray together, and encourage one another in family and faith. Couples who are new to RLCC are always welcome to visit.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/one-in-christ",
    image: "/images/who-we-are/community-3.jpg",
    imageAlt: "One in Christ young couples community",
  },
  {
    slug: "crossroads-young-professionals",
    name: "Crossroads (Young Professionals)",
    category: "Community",
    shortDescription:
      "A welcoming group of young professionals who seek to grow in faith, build meaningful connections, and honor Christ in the workplace. First-time visitors are always welcome.",
    fullDescription:
      "Crossroads is a vibrant community of young professionals who seek to grow in faith while navigating career and adult life. The group meets regularly for fellowship, biblical discussions, and mutual encouragement, helping members honor Christ in the workplace and everyday decisions. If you're a working professional looking for meaningful connections, you're welcome to join.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/crossroads",
    image: "/images/who-we-are/community-4.jpg",
    imageAlt: "Crossroads young professionals community",
  },
  {
    slug: "real-life-youth-students",
    name: "Real Life Youth (Students)",
    category: "Community",
    shortDescription:
      "A welcoming group of students and out-of-school youth who gather for friendship, encouragement, and spiritual growth. First-time visitors are always welcome.",
    fullDescription:
      "Real Life Youth is a welcoming community for students and out-of-school youth who want to grow in faith and build strong friendships. The group gathers for fellowship, biblical teaching, prayer, and fun activities in a safe and supportive environment. Youth who are new to church are encouraged to visit.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/real-life-youth",
    image: "/images/who-we-are/community-5.jpg",
    imageAlt: "Real Life Youth students community",
  },
  {
    slug: "rlcc-at-southridge",
    name: "RLCC at Southridge",
    category: "Simple Church",
    shortDescription:
      "A welcoming simple church in Southridge, San Pedro, where people gather to grow in faith and build meaningful relationships. First-time visitors are always welcome.",
    fullDescription:
      "RLCC at Southridge is a simple church community in San Pedro, Laguna, where people gather in a more intimate setting for worship, prayer, and Scripture reflection. It provides a relational space for spiritual growth and meaningful connections. Visitors are welcome to attend and experience community life firsthand.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/rlcc-at-southridge",
    image: "/images/who-we-are/community-6.jpg",
    imageAlt: "RLCC at Southridge simple church gathering",
  },
  {
    slug: "rlcc-at-australian-surplus",
    name: "RLCC at Australian Surplus",
    category: "Simple Church",
    shortDescription:
      "A welcoming simple church that meets at Australian Surplus, where people gather to grow in faith and build Christ-centered relationships. First-time visitors are always welcome.",
    fullDescription:
      "RLCC at Shop and Save Australian Surplus is a simple church that meets regularly in a workplace setting, creating a space for worship, biblical teaching, and community. It offers a supportive environment where people can grow spiritually and build Christ-centered relationships. Guests are always welcome to visit.",
    churchCenterUrl: "https://rlccphil.churchcenter.com/pages/rlcc-at-australian-surplus",
    image: "/images/who-we-are/community-7.jpg",
    imageAlt: "RLCC at Australian Surplus simple church gathering",
  },
];

export function getCommunityBySlug(slug) {
  return communities.find((community) => community.slug === slug) ?? null;
}

export function getOtherCommunities(slug, limit = 3) {
  return communities.filter((community) => community.slug !== slug).slice(0, limit);
}
