import Link from 'next/link';
import Image from 'next/image';

export type ImageWithLinkProps = {
  href: string;
  src: string;
  alt: string;
};

export const ImageWithLink = ({ href, src, alt }: ImageWithLinkProps) => {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} width={30} height={30} className="hover-anim" priority={true} />
    </Link>
  );
};

import githubIcon from "@images/icons8-github-light.svg";
import linkedinIcon from "@images/icons8-linkedin.svg";
import blogIcon from "@images/icons8-b-50.png";

const imagesData: ImageWithLinkProps[] = [
  { href: "https://github.com/SamiFraca", src: githubIcon, alt: "github" },
  { href: "https://www.linkedin.com/in/sami-fraca-amghar-76b640194/", src: linkedinIcon, alt: "linkedin" },
  { href: "https://samiblog.netlify.app/", src: blogIcon.src, alt: "blog" },
];

export const ImagesWithLinkList = () => {
  return (
    <ul className="flex sm:flex-col gap-4 -order-1 sm:order-0">
      {imagesData.map((image, index) => (
        <li key={index}>
          <ImageWithLink href={image.href} src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};
