import Image from "next/image";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";

import { FiBriefcase, FiGlobe, FiUser } from "react-icons/fi";

export default async function Home() {
  const githubProfileResponse = await fetch(
    "https://api.github.com/users/Drischdaan",
    { next: { revalidate: 60 * 60 * 4 } }
  );
  const githubProfile = await githubProfileResponse.json();
  const avatar =
    githubProfile.avatar_url !== undefined
      ? githubProfile.avatar_url
      : "/images/profile_picture.jpg";
  return (
    <div className="w-full h-full">
      <Modal />
      <Header />
      <div className="w-full xl:w-3/4 mx-auto border-black border-x-4">
        {/* Landing */}
        <div id="home" className="h-screen pt-16 lg:pt-28">
          <div className="h-full flex flex-col lg:flex-row">
            <div className="px-3 py-5 lg:p-28 relative">
              <a href="https://github.com/Drischdaan" target="_blank">
                <Image
                  src={avatar}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  priority={true}
                  className="border-black border-4 w-full lg:w-[300px] lg:h-[300px]"
                />
              </a>
              <div className="py-3 px-5 block lg:absolute bg-black text-white lg:-translate-y-8 lg:-translate-x-16">
                <p className="uppercase font-black text-2xl">drischdaan</p>
                <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center lg:gap-3">
                  <div className="flex justify-start items-center gap-1">
                    <FiBriefcase />
                    Software Developer
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <FiUser />
                    19
                  </div>
                  <div className="flex justify-start items-center gap-1">
                    <FiGlobe />
                    Germany
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div id="projects" className="h-screen"></div>
      </div>
    </div>
  );
}
