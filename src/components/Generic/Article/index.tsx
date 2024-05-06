import { ArticleType } from "./types";

const Article = ({
  children,
  title,
  body,
  hasAccent,
  isElevated,
}: ArticleType) => {
  return (
    <article
      className={`w-full py-16 text-center${
        isElevated ? " bg-navTextColor" : ""
      }`}
    >
      <h1 className="w-fit mx-auto text-titleFontSize text-primary font-bold">
        {title}
        {hasAccent && <div className="w-[100px] h-[2px] bg-accentColor"></div>}
      </h1>
      {body && <p className="w-[60%] mt-8 mx-auto">{body}</p>}
      {children}
    </article>
  );
};

export default Article;
