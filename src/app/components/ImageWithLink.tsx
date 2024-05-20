import Link from 'next/link';
import Image from 'next/image';
export type ImageWithLinkProps = {
    href: string;
    src: string;
    alt:string;
};

export function ImageWithLink({ href, src,alt }: ImageWithLinkProps) {
    return (
        <Link href={href}>
                <Image src={src} alt={alt} width={30} height={30} className="hover-anim" priority={true}  />
        </Link>
    );
    
}
