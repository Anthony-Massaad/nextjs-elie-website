import SlideReveal from "@/animations/SlideReveal";
import Link from "next/link";
import { FC } from "react";

interface Props {
  src: string;
  linkText?: string;
  link?: string;
}

const PostItNotes: FC<Props> = ({ src, link, linkText }) => {
  return (
    <div className="post-it-notes">
      <SlideReveal>
        <img src={src} alt="" className="affinity-form" />
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
