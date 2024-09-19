import githubIcon from "@images/icons8-github-light.svg";
import linkedinIcon from "@images/icons8-linkedin.svg";
import blogIcon from "@images/icons8-b-50.png";
import { ImageWithLinkProps, ImageWithLink } from "@/components/ImageWithLink";

const imagesData: ImageWithLinkProps[] = [
  { href: "https://github.com/SamiFraca", src: githubIcon, alt: "github" },
  { href: "https://www.linkedin.com/in/sami-fraca-amghar-76b640194/", src: linkedinIcon, alt: "linkedin" },
  { href: "https://samiblog.netlify.app/", src: blogIcon.src, alt: "blog" },
];

function imagesWithLinkList() {
  return (
    <ul className="flex sm:flex-col  gap-4  -order-1 sm:order-none">
      {imagesData.map((image, index) => (
        <li key={index}>
          <ImageWithLink href={image.href} src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}
export default imagesWithLinkList;
