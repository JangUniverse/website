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
  description: `${person.name}'s personal website`,
  headline: <>Life is a tree,<br />
              nodes are moments.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
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
  description: `about ${person.name}, ${person.role}`,
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
  software: {
    display: true, // set to false to hide this section
    title: "소프트웨어 스택",
    skills: [
      {
        title: "Android Studio",
        logo: "/images/tech/AndroidStudio-Dark.svg", // 로고 이미지 경로
        alt: "Android Studio",
        experience: 90, // 경험 수준 (0-100)
      },
      {
        title: "Arduino",
        logo: "/images/tech/Arduino.svg", // 로고 이미지 경로
        alt: "Arduino",
        experience: 80,
      },
      {
        title: "Blender",
        logo: "/images/tech/Blender-Dark.svg", // 로고 이미지 경로
        alt: "React",
        experience: 65,
      },
      {
        title: "Figma",
        logo: "/images/tech/figma.svg", // 로고 이미지 경로
        alt: "Figma",
        experience: 90,
      },
      {
        title: "GCP",
        logo: "/images/tech/GCP-Dark.svg", // 로고 이미지 경로
        alt: "GCP",
        experience: 95,
      },
      {
        title: "Git",
        logo: "/images/tech/Git.svg", // 로고 이미지 경로
        alt: "Git",
        experience: 80,
      },
      {
        title: "Next.js",
        logo: "/images/tech/NextJS-Dark.svg", // 로고 이미지 경로
        alt: "Next.js",
        experience: 70,
      },
      {
        title: "Photoshop",
        logo: "/images/tech/Photoshop.svg", // 로고 이미지 경로
        alt: "Photoshop",
        experience: 85,
      },
      {
        title: "Premire Pro",
        logo: "/images/tech/Premiere.svg", // 로고 이미지 경로
        alt: "Premire Pro",
        experience: 80,
      },
      {
        title: "Pytorch",
        logo: "/images/tech/PyTorch-Dark.svg", // 로고 이미지 경로
        alt: "Pytorch",
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
        logo: "/images/lang/Bash-Dark.svg", // 로고 이미지 경로
        alt: "Bash",
        experience: 90, // 경험 수준 (0-100)
      },
      {
        title: "C++",
        logo: "/images/lang/CPP.svg", // 로고 이미지 경로
        alt: "C++",
        experience: 95,
      },
      {
        title: "C#",
        logo: "/images/lang/CS.svg", // 로고 이미지 경로
        alt: "C#",
        experience: 75,
      },
      {
        title: "SQL",
        logo: "/images/lang/PostgreSQL-Dark.svg", // 로고 이미지 경로
        alt: "SQL",
        experience: 80,
      },
      {
        title: "Python",
        logo: "/images/lang/Python-Dark.svg", // 로고 이미지 경로
        alt: "Python",
        experience: 90,
      },
      {
        title: "R",
        logo: "/images/lang/R-Dark.svg", // 로고 이미지 경로
        alt: "R",
        experience: 80,
      }
      
    ],
  },
  
};

const blog = {
  path: "/blog",
  label: "블로그",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "작업",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
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
    description: `${person.name}의 디자인 컨셉과 브랜드 아이덴티티`,
    
    // 컨셉 설명
    conceptDescription: {
      title: "Brand Identity",
      subtitle: "개발자로서의 정체성과 철학",
      content: "기술을 통해 세상을 더 나은 곳으로 만들고자 하는 개발자입니다. 코드와 디자인의 조화를 통해 사용자에게 가치를 전달하는 것을 추구합니다."
    },
    
    // 브랜드 컬러
    brandColors: [
      { name: "Shifted Ruby", color: "#ff3b57", description: "주요 브랜드 컬러" },
      { name: "Shifted Gold", color: "#ffb717", description: "강조 및 액센트" },
      { name: "Shifted Sunshade", color: "#ffa71a", description: "따뜻한 보조 컬러" },
      { name: "Shifted Midnight", color: "#0b1b38", description: "다크 테마 베이스" },
      { name: "Shifted Gray", color: "#8a8f95", description: "중성 컬러" },
      { name: "Tech Blue", color: "#3b82f6", description: "기술적 요소" },
    ],
    
    // 로고 및 브랜딩
    branding: {
      display: true,
      title: "Visual Identity",
      description: "개발자로서의 정체성을 시각적으로 표현한 브랜딩 요소들입니다.",
      elements: [
        {
          name: "Logo",
          description: "JangUniverse 브랜드를 대표하는 로고",
          type: "primary"
        },
        {
          name: "Typography",
          description: "Geist 폰트 패밀리를 기반으로 한 일관된 타이포그래피",
          type: "secondary"
        },
        {
          name: "Color Scheme",
          description: "따뜻하면서도 전문적인 느낌의 컬러 팔레트",
          type: "accent"
        }
      ]
    },
    
    // SNS 링크
    socialLinks: [
      { 
        platform: "GitHub", 
        username: "JangUniverse", 
        url: "https://github.com/JangUniverse",
        description: "오픈소스 프로젝트와 코드 저장소",
        category: "development"
      },
      { 
        platform: "Email", 
        username: "me@JangUniverse.dev", 
        url: "mailto:me@JangUniverse.dev",
        description: "개인 연락처",
        category: "contact"
      },
      { 
        platform: "LinkedIn", 
        username: "장우주", 
        url: "https://linkedin.com/in/janguniverse",
        description: "전문적인 네트워킹과 경력 정보",
        category: "professional"
      },
      { 
        platform: "Blog", 
        username: "JangUniverse Blog", 
        url: "https://janguniverse.dev/blog",
        description: "기술 블로그 및 학습 기록",
        category: "content"
      },
      { 
        platform: "Discord", 
        username: "janguniverse", 
        url: "https://discord.com/users/janguniverse",
        description: "실시간 소통 및 커뮤니티 활동",
        category: "social"
      },
      { 
        platform: "Instagram", 
        username: "@janguniverse", 
        url: "https://instagram.com/janguniverse",
        description: "일상과 작업 과정 공유",
        category: "social"
      }
    ],
    // Self Description 섹션
    selfDescription: {
      title: "JangUniverse Brand Identity",
      description: "창의적이고 혁신적인 개발자로서의 브랜드 아이덴티티를 표현합니다.",
      images: [
        {
          url: "/images/concept/asdf.png",
          alt: "JangUniverse 메인 로고",
          description: "메인 브랜드 로고"
        },
        {
          url: "/images/brand-icon.svg",
          alt: "JangUniverse 아이콘",
          description: "심볼 아이콘"
        },
        {
          url: "/images/brand-wordmark.svg",
          alt: "JangUniverse 워드마크",
          description: "워드마크"
        }
      ]
    }
  }
export { person, social, newsletter, home, about, blog, work, gallery, concept };