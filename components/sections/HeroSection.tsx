export default function HeroSection() {
  return (
    <section
      id="intro"
      className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-8"
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-4">
        <h1 className="flex max-w-full flex-row items-center justify-center gap-1 text-center leading-none tracking-normal sm:flex-row sm:items-end sm:gap-0">
          <span className="flex items-end justify-center">
            <span
              className="[font-family:var(--font-mea-culpa)] text-6xl font-black leading-[0.9] sm:text-8xl lg:text-8xl"
            >
              J
            </span>
            <span
              className="[font-family:var(--font-newsreader)] text-3xl leading-[0.95] sm:text-4xl lg:text-5xl"
            >
              ustine
            </span>
          </span>
          <span className="flex items-end justify-center">
            <span
              className="[font-family:var(--font-mea-culpa)] text-6xl font-black leading-[0.9] sm:text-8xl lg:text-8xl"
            >
              L
            </span>
            <span
              className="[font-family:var(--font-newsreader)] text-3xl leading-[0.95] sm:text-4xl lg:text-5xl"
            >
              lamera
            </span>
          </span>
        </h1>

        <p
          className="[font-family:var(--font-newsreader)] max-w-full px-2 text-center text-xl leading-[0.95] tracking-normal sm:text-2xl lg:text-4xl"
        >
          Full Stack Developer
        </p>
      </div>
    </section>
  );
}