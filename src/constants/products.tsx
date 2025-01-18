import { Highlight } from "@/components/Highlight";
import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import cslf from "../../public/images/78.jpeg";
import cslf2 from "../../public/images/cslf2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import hunter1 from "../../public/images/hunter.png";
import hunter3 from "../../public/images/hunter3.png";
import game1 from "../../public/images/game1.png";
import game2 from "../../public/images/game2.png";
import spiro from "../../public/images/Spiro.png";
import spiro1 from "../../public/images/spiro1.png";
import inom from "../../public/images/inom.png";
import inom1 from "../../public/images/inom1.png";
import pro6 from "../../public/images/pro6.png";
import p66 from "../../public/images/66.jpeg";
import kids from "../../public/images/kids.png";
import kids1 from "../../public/images/kids1.png";

export const products = [
  {
    href: "https://inom-techs.com/",
    title: "Inom Techs",
    description:
      "Inom-Techs is a modern company profile website for a programming and marketing firm, featuring dynamic animations, localization with cookies, and dark mode support for an enhanced user experience.",
    thumbnail: inom,
    images: [inom, inom1],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "inom-techs",
    content: (
      <div>
        <p>
          Key Features: <br /> Localization powered by cookies, ensuring the
          website adapts to user preferences. Dark mode support for better
          accessibility and aesthetics. Visually appealing and modern design
          with heavy animations for an engaging experience.
        </p>
        <p>
          My Role:
          <br /> I handled the entire project from design to deployment,
          ensuring a flawless and functional user interface and experience.
        </p>
        <p>
          Target Audience: <br />
          Consumers and businesses looking for programming and marketing
          services.
        </p>
      </div>
    ),
  },
  {
    href: "https://cslf.sa",
    title: "Conflict Solution",
    description:
      "Conflict Solution is a professional portfolio website designed for a law company. The website features eight distinct pages that showcase the firm's services and expertise. Built with responsiveness in mind, it ensures a seamless browsing experience across devices.",
    thumbnail: cslf,
    images: [cslf, cslf2],
    stack: ["ReactJs", "AOS", "CSS"],
    slug: "cslf",
    content: (
      <div>
   <p>
          Key Features:
          <br />
          Eight pages tailored to highlight the law firm&apos;s offerings. Fully
          responsive design for optimal viewing on any device. Smooth animations
          integrated using AOS Animate On Scroll.{" "}
        </p>     
        <p>
          My Role:
          <br />I developed the entire project from scratch, handling the
          design, coding, and deployment.
        </p>{" "}
        <p>
          Target Audience:
          <br />
          Clients seeking legal services and information about the law firm&apos;
          expertise.
        </p>{" "}
        <p>
          Target Audience:
          <br />
          Clients seeking legal services and information about the law firm&apos;
          expertise.Challenges and Solutions: During development, I encountered
          browser compatibility issues and challenges with CSS not rendering
          properly on the client&apos;s phone. Using my experience, I resolved these
          issues to ensure a flawless user experience.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sweet-home-sigma.vercel.app",
    title: "Hunter",
    description:
      "Hunter is a sleek and modern landing page designed to facilitate the buying and selling of houses.",
    thumbnail: hunter1,
    images: [hunter1, hunter3],
    stack: ["ReactJs", "Tailwindcss"],
    slug: "Hunter",
    content: (
      <div>
        <p>
          Key Features: <br /> A responsive and user-friendly design built for
          seamless navigation. Integrated Swiper.js sliders to showcase property
          listings dynamically. Tailored for both buyers and sellers to enhance
          their online real estate experience.
        </p>
        <p>
          My Role: <br /> I built this project entirely from scratch, handling
          everything from design to development.
        </p>
        <p>
          Target Audience: <br /> The platform is designed for consumers looking
          to buy or sell homes effortlessly.
        </p>
      </div>
    ),
  },
  {
    href: "https://3assem0.github.io/Online-Games-webpage/",
    title: "Online Games site",
    description:
      "The Online Games Site is a centralized platform where gamers can explore and download thousands of games from over 100 websites, all in one place. It streamlines the process of finding games by fetching data dynamically via APIs.",
    thumbnail: game1,
    images: [game1, game2],
    stack: ["Java Script", "Restful API"],
    slug: "gameing",
    content: (
      <div>
        <p>
          Key Features: <br /> Access to thousands of games aggregated from more
          than 100 sources. API integration for real-time data fetching and
          updates. User-friendly and responsive design tailored for gamers.{" "}
        </p>
        <p>
          My Role: <br />I built this project from scratch, handling everything
          from API integration to the website&apos;s design and development.
        </p>{" "}
        <p>
          Target Audience:
          <br />
          Gamers seeking a convenient and centralized hub for exploring and
          downloading games.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://3assem0.github.io/spiro-spates/",
    title: "Spiro Spates",
    description:
      "Spiro Spates is a vibrant portfolio website created for a local soda drinks company. The website showcases the brand's products and values through an engaging and modern design, enhanced with interactive animations.",
    thumbnail: spiro,
    images: [spiro, spiro1],
    stack: ["JavaScript", "CSS", "custom mouse tracking animations."],
    slug: "spiro",
    content: (
      <div>
        <p>
          Key Features: <br /> Dynamic mouse tracking animations for an
          interactive user experience. Smooth animations powered by AOS (Animate
          On Scroll). A responsive and visually appealing design tailored to
          attract a wide audience.{" "}
        </p>
        <p>
          My Role: <br /> I co-developed this project equally with my friend{" "}
          <Highlight>Assem </Highlight> , collaborating on both the design and
          development aspects.
        </p>{" "}
        <p>
          Target Audience:
          <br /> All users, especially soda drink enthusiasts looking to learn
          more about the brand.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://3assem0.github.io/e-commerce/",
    title: "E-commerce",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: pro6,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["ReactJs", "Tailwindcss"],
    slug: "E-commerce",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Shopify",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: p66,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "E-commerce Laravel",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Book Shop Website",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "http://gamesandtoys.kesug.com/?i=2",
    title: "our kids",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: kids,
    images: [kids, kids1],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "kids",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Edu Chains",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
