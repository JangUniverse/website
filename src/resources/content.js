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
  title: <>블로그를 구독하세요</>,
  description: (
    <>
      학교 생활, 기술 학습, 프로젝트 경험 등의 블로그가 매우 불규칙적으로 개시됩니다. <br />
      불규칙한 블로그를 불가피하게 놓치지 않도록 구독해주시면 감사하겠습니다.
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
  label: "홈",
  title: `${person.name}`,
  description: `${person.name}의 웹사이트입니다`,
  headline: (
    <>
      Life is a tree,
      <br />
      nodes are moments.
    </>
  ),
  featured: {
    display: false,
    title: (
      <>
        Recent project:{" "}
        <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      한성과학고등학교 학생 장우주입니다. <br />
      AI Engineer가 되기 위해 다양한 프로그램, 프로젝트를 시도하고 있습니다.
    </>
  ),
};

const about = {
  path: "/about",
  label: "소개",
  title: `About – ${person.name}`,
  description: `${person.name}의 소개 글`,
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
        description: (
          <>
            기초적인 수학, 과학, 정보 교과 학습과 다양한 팀 프로젝트 활동을 수행하였습니다.
          </>
        ),
        images: [
          {
            src: "/images/intro/hshs.png",
            alt: "한성과학고등학교 로고",
            width: 50,
            height: 50,
          },
        ],
      },
      {
        name: "KAIST IP-CEO",
        timeframe: "2022-2023",
        description: (
          <>
            지적재산권 및 벤처에 관한 내용을 학습하였으며, 관련 아이디어 제시 방법을 터득했습니다.
          </>
        ),
        images: [
          {
            src: "/images/intro/kaist.png",
            alt: "KAIST IP-CEO 로고",
            width: 50,
            height: 50,
          },
        ],
      },
    ],
  },
  software: {
    display: true, // set to false to hide this section
    title: "소프트웨어 스택",
    skills: [
      {
        title: "Android Studio",
        logo: "/images/tech/AndroidStudio-Dark.svg",
        alt: "Android Studio",
        experience: 90,
      },
      {
        title: "Arduino",
        logo: "/images/tech/Arduino.svg",
        alt: "Arduino",
        experience: 80,
      },
      {
        title: "Blender",
        logo: "/images/tech/Blender-Dark.svg",
        alt: "Blender",
        experience: 65,
      },
      {
        title: "Figma",
        logo: "/images/tech/figma.svg",
        alt: "Figma",
        experience: 90,
      },
      {
        title: "GCP",
        logo: "/images/tech/GCP-Dark.svg",
        alt: "GCP",
        experience: 95,
      },
      {
        title: "Git",
        logo: "/images/tech/Git.svg",
        alt: "Git",
        experience: 80,
      },
      {
        title: "Next.js",
        logo: "/images/tech/NextJS-Dark.svg",
        alt: "Next.js",
        experience: 70,
      },
      {
        title: "Photoshop",
        logo: "/images/tech/Photoshop.svg",
        alt: "Photoshop",
        experience: 85,
      },
      {
        title: "Premiere Pro",
        logo: "/images/tech/Premiere.svg",
        alt: "Premiere Pro",
        experience: 80,
      },
      {
        title: "PyTorch",
        logo: "/images/tech/PyTorch-Dark.svg",
        alt: "PyTorch",
        experience: 90,
      },
    ],
  },
  language: {
    display: true, // set to false to hide this section
    title: "언어 스택",
    skills: [
      {
        title: "Bash",
        logo: "/images/lang/Bash-Dark.svg",
        alt: "Bash",
        experience: 90,
      },
      {
        title: "C++",
        logo: "/images/lang/CPP.svg",
        alt: "C++",
        experience: 95,
      },
      {
        title: "C#",
        logo: "/images/lang/CS.svg",
        alt: "C#",
        experience: 75,
      },
      {
        title: "SQL",
        logo: "/images/lang/PostgreSQL-Dark.svg",
        alt: "SQL",
        experience: 80,
      },
      {
        title: "Python",
        logo: "/images/lang/Python-Dark.svg",
        alt: "Python",
        experience: 90,
      },
      {
        title: "R",
        logo: "/images/lang/R-Dark.svg",
        alt: "R",
        experience: 80,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "블로그",
  title: `Blog- ${person.name}`,
  description: `${person.name}이 가끔씩 글을 작성하는 장소입니다.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "작업",
  title: `Projects – ${person.name}`,
  description: `${person.name}이 작업한 내용을 담아두는 곳입니다.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "갤러리",
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

const concept = {
  path: "/concept",
  label: "컨셉",
  title: `Concept – ${person.name}`,
  description: `${person.name}이 고안한 컨셉입니다.`,

  // 브랜드 컬러
  brandColors: {
    "JangUniverse Black": "#030303",
    "JangUniverse Blue": "#0F193B",
    "JangUniverse Gray": "#8C8C8C",
    "JangUniverse Pale": "#D8D8D8",
  
  },
  // SNS 링크
  ConnectLink: [
    {
      platform: "Baekjoon OJ",
      icon: "codexml",
      username: "janguniverse",
      url: "https://www.acmicpc.net/user/janguniverse",
      light: "#0076c0",
      dark: "#4da6ff"
    },
    {
      platform: "Email",
      icon: "at",
      username: "me@JangUniverse.dev",
      url: "mailto:me@JangUniverse.dev",
      light: "#6b9080",
      dark: "#8fbc8f"
    },
    {
       platform: "Instagram",
       icon: "instagram",
       username: "janguniverse_dev",
       url: "https://janguniverse.dev/blog",
       light: "#E4405F",
       dark: "#FD5949"
     },
    {
      platform: "LinkedIn",
      icon: "linkedIn",
      username: "WooJoo (Universe) Jang",
      url: "https://linkedin.com/in/janguniverse",
      light: "#0077b5",
      dark: "#00a0dc"
     },
     {
       platform: "X",
       icon: "x",
       username: "JangUniverse_",
       url: "https://x.com/JangUniverse_",
       light: "#000000",
       dark: "#ffffff"
     },
   ],

   // Self Description 섹션
   selfDescription: {
     title: "JangUniverse",
     nickname: (
       <>
         JangUniverse는 제 이름 ‘장우주’에서 따온 닉네임입니다. <br />
         ‘우주’는 영어로 Universe이고, 그 단어가 주는 무한함의 의미가 인상 깊어 사용하게 되었습니다. <br />
         또한, 제 이름을 처음 듣는 많은 분이 자연스럽게 이 단어를 떠올리기에 닉네임으로 정하게 되었습니다.
       </>
     ),
     logo: (
       <>
         로고 배경은 어두운 심우주를, 가운데의 검은 원은 블랙홀을, 밝은 회색은 빨려들어가는 빛을 의미합니다. <br />
         블랙홀처럼 지식을 가리지 않고 흡수한다는 의미를 지녔으며, 밝은 회색은 글자 J와 U를 형상화했습니다.
       </>
     ),
     images: [
       {
         url: "/images/concept/Logo_name.png",
         alt: "Name Logo",
         description: "Name ver.",
       },
       {
         url: "/images/concept/Logo_noname.png",
         alt: "Noname Logo",
         description: "Noname ver.",
       },
       {
         url: "/images/concept/signature.png",
         alt: "signature",
         description: "Signature(no legal effect)",
       },
       {
         url: "/images/concept/colorbar.png",
         alt: "colorbar",
         description: "colorbar for design",
       },
     ],
   },
 };

 export { person, social, newsletter, home, about, blog, work, gallery, concept };