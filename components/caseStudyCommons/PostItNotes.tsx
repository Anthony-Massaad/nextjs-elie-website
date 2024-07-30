import SlideReveal from "@/animations/SlideReveal";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface Props {
  src: string;
  linkText?: string;
  link?: string;
}

const PostItNotes: FC<Props> = ({ src, link, linkText }) => {
  return (
    <div className="post-it-notes">
      <SlideReveal>
        <Image
          src={src}
          alt=""
          width={500}
          height={500}
          quality={100}
          layout="responsive"
          objectFit="contain"
          loading="lazy"
          className="affinity-form"
        />
        {link && linkText && (
          <Link target="_blank" href={link} className="affinity-form-link">
            {linkText}
          </Link>
        )}
      </SlideReveal>
    </div>
  );
};

export default PostItNotes;
