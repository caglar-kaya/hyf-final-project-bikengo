import React from "react";
import DevCard from "../../components/devCard/DevCard";

const ContactUs = () => {
  const Developers = [
    {
      name: "Biruk Endris",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/57604289?v=4",
      description:
        "I'm a full stack developer with a passion for code. I love building things that solve problems - and I'm always happy to share my experience and expertise with anyone looking for guidance.",
      github: "https://github.com/Biruk-hub",
      linkedin: "https://www.linkedin.com/in/biruk-endris",
      twitter: "https://twitter.com/EndrisBiruk",
    },
    {
      name: "Lydia Samir",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/67834807?v=4",
      description:
        "Full-stack Developer ,ambitious ,love to : learn new things, DIY and sport",
      github: "https://github.com/Lydia-GG",
      linkedin: "https://www.linkedin.com/in/lydia-samir-45a975108/",
    },
    {
      name: "Reema Alshohof",
      position: "Full Stack Developer",
      image:
        "https://avatars.githubusercontent.com/u/75396754?s=400&u=a3ddf88b6a3bd2c68d02d4d46efc7586d7028c52&v=4",
      description:
        "Always eager to learn more, my favorite quote is 'Life begins at the end of your comfort zone', I love biking and cooking.",
      github: "https://github.com/ReemaSho",
      linkedin: "https://www.linkedin.com/in/reema-alshohof/",
    },
    {
      name: "Fikret YILMAZ",
      position: "Full Stack Developer",
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGkJ9QT20r32A/profile-displayphoto-shrink_400_400/0/1625828791448?e=1655337600&v=beta&t=68kqEOOIQ5TS571XmU-b-Zq5UMNAeowpXMS4DCjdAIk",
      description:
        "Hi I am a Junior Full Stack developer. I am eager to learn new things. If I really want to learn something, I can study for hours every day without getting bored.",
      github: "https://github.com/FikretYilmaz",
      linkedin: "https://www.linkedin.com/in/fikret-y-3031b2161/",
    },
    {
      name: "Caglar KAYA",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/65255185?v=4",
      description:
        "Full Stack Web Developer, Software QA Automation Tester, and Math Teacher with a B.Sc. in Mathematics. After 7 years working as a Math Teacher I had to leave Turkey seeking refugee status. Today I allocate all my energy to building a new future for me and my family by doing what I like the most: coding and solving problems. I'm a responsible and caring person that learns fast, likes to share, and takes work and personal growth seriously.",
      github: "https://github.com/caglar-kaya",
      linkedin: "https://www.linkedin.com/in/caglar-kaya/",
    },
  ];
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 my-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          {/* header */}
          <h1 className="mb-20 text-2xl md:text-4xl font-medium title-font text-gray-800 underline">
            Meet Our Team
          </h1>
          {/* Developers */}
          <div className="flex flex-wrap -m-4">
            {Developers.map((dev, index) => (
              <DevCard key={index} {...dev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
