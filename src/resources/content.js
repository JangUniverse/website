import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Jang",
  lastName: "Universe",
  get name() {
    return `${this.firstName}${this.lastName}`;
  },
  role: "HSHS 33rd, Empty Stack developer",
  avatar: "/images/avatar.jpg",
  email: "me@JangUniverse.dev",
  location: "Asia/Seoul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Korean"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "github.com/JangUniverse",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/JangUniverse",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "소개",
    description: (
      <>
        <strong>안녕하세요. 한성과학고등학교 학생 장우주입니다.</strong>
        <br />
        분야를 불문하고 다양한 기술 스택을 쌓기 위해 노력하고 있으며, 최대한의
        노력을 통해 자신만의 프로그램을 만들고 문제를 해결해나가는 것을 좋아합니다.
        <br />
        앞으로는 AI 엔지니어로서 AI-based OS를 제작하는 것이 목표입니다.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "학력",
    institutions: [
      {
        name: "한성과학고등학교(HSHS)",
        timeframe: "2024-",
        description: <>기초적인 수학, 과학, 정보 교과 학습과 다양한 팀 프로젝트 활동을 수행하였습니다.</>,
        images: [
          {
            src: "/images/intro/hshs.png", // imgaes → images로 수정
            alt: "한성과학고등학교 로고",
            width : 50,
            height : 50
          }
        ],
      },
      {
        name: "KAIST IP-CEO",
        timeframe: "2022-2023",
        description: <>지적재산권 및 벤처에 관한 내용을 학습하였으며, 관련 아이디어 제시 방법을 터득했습니다.</>,
        images: [
          {
            src: "/images/intro/kaist.png",
            alt: "KAIST IP-CEO 로고",
            width: 50,
            height: 50
          }
        ]
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "기술 스택",
    skills: [
      {
        title: "Figma",
        logo: "/images/tech/figma.svg", // 로고 이미지 경로
        alt: "Figma",
      },
      {
        title: "Next.js",
        logo: "/images/tech/nextjs.svg", // 로고 이미지 경로
        alt: "Next.js",
      },
      {
        title: "React",
        logo: "/images/tech/react.svg", // 로고 이미지 경로
        alt: "React",
      },
      {
        title: "TypeScript",
        logo: "/images/tech/typescript.svg", // 로고 이미지 경로
        alt: "TypeScript",
      },
      {
        title: "JavaScript",
        logo: "/images/tech/javascript.svg", // 로고 이미지 경로
        alt: "JavaScript",
      },
      {
        title: "Node.js",
        logo: "/images/tech/nodejs.svg", // 로고 이미지 경로
        alt: "Node.js",
      },
      {
        title: "HTML5",
        logo: "/images/tech/html5.svg", // 로고 이미지 경로
        alt: "HTML5",
      },
      {
        title: "CSS3",
        logo: "/images/tech/css3.svg", // 로고 이미지 경로
        alt: "CSS3",
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };