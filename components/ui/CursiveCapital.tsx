"use client";

type CursiveCapitalProps = {
  text: string;
  href?: string;
  className?: string;
  cursiveClass?: string;
  bodyClass?: string;
};

export default function CursiveCapital({
  text,
  href,
  className,
  cursiveClass = "",
  bodyClass = "",
}: CursiveCapitalProps) {
  const content = (
    <>
      <span className={`[font-family:var(--font-mea-culpa)] ${cursiveClass}`}>
        {text.charAt(0)}
      </span>
      <span className={`[font-family:var(--font-newsreader)] ${bodyClass}`}>
        {text.slice(1)}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={text} className={className}>
        {content}
      </a>
    );
  }

  if (className) {
    return <span className={className}>{content}</span>;
  }

  return <>{content}</>;
}