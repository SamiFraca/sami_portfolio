import Image from "next/image";
import Myself from "@/assets/images/myself.jpg";
import { ImagesWithLinkList } from "@/components/image-link";
import { ProjectCardList } from "@/components/card-list";
import { TechStackCarousel } from "@/components/tech-stack-carousel";
import Character3D from "@/components/character-3d";
import { TypewriterText } from "@/components/typewriter-text";
import { AnimatedWaves } from "@/components/animated-waves";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-black w-full ">
        <div className="relative z-10 text-3xl text-white">
          <div className="w-full h-[60vh] relative">
            <AnimatedWaves />
            <div className="p-6 flex flex-row justify-center items-center max-w-7xl mx-auto h-full  ">
              <div className="flex flex-col h-full my-auto items-center justify-center gap-12 ">
                <h1 className="lg:text-7xl text-5xl text-center ">
                  <TypewriterText text="Sami Fraca" speed={200} />
                </h1>
                <div className="flex flex-col gap-2 ">
                <p>
                  Hey, I&apos;m Sami. A software Developer with 3+ years of experience in front-end, back-end and machine learning, trying to become better every day.
                </p>
                <p>I&apos;m just a developer who loves his job.</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-8 sm:flex-row flex-col flex gap-8 items-center">
              <Image
                src={Myself}
                width={110}
                height={110}
                alt="image of myself"
                className="rounded-full shrink-0 flex h-max "
                priority={true}
              />
              <ImagesWithLinkList />
              <TechStackCarousel />
               {/* <Character3D 
                modelPath="/models/avatar.glb" 
                className="w-[300px] h-[400px] "  
              /> 
          </div> */}
          <div className="max-w-7xl mx-auto">
            <TechStackCarousel/>
            
          <p className="mt-4">
            These are some of the last projects I&apos;ve worked on in my free
            time.
          </p>
          <ProjectCardList />
          </div>
        </div>
      </div>
    </>
  );
}
