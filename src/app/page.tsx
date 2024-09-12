import Image from "next/image";
import Myself from "@/assets/images/myself.webp";
import ImagesWithLinkList from "@/components/ImagesWithLinkList";
import ProjectCardList from "../components/ProjectCardList";

export default function Home() {
  return (
    <>
      <div className="text-3xl">
        <h1 className="text-4xl">Sami Fraca</h1>
        <p>
          Hey, I&apos;m Sami. Welcome to my personal portfolio where I showcase
          my work.
        </p>
        <p>
          I&apos;m just a software developer who loves his job.
        </p>
        <div className="mt-8 flex gap-8 items-center">
          <Image
            src={Myself}
            width={110}
            height={110}
            alt="image of myself"
            className="rounded-full shrink-0 flex h-max"
            priority={true}
          />
          <ImagesWithLinkList/>
        </div>
        <p className="mt-4">These are some of the last projects I&apos;ve worked on in my free time.</p>
        <ProjectCardList/>

      </div>
    </>
  );
}
