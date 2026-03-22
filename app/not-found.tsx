import AnchorButton from "@/components/ui/AnchorButton";

export default function NotFound() {
  return (
    <main className="mt-25 min-h-[60vh] flex items-center">
      <section className="w-full rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 p-6 sm:p-10">
        <p className="text-sm sm:text-base text-gray-500 dark:text-neutral-400 tracking-wider">
          ERROR 404
        </p>

        <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold leading-tight">
          Lost in my corner of the internet.
        </h1>

        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-foreground/90">
          The page you are looking for does not exist, was moved, or was never
          published.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <AnchorButton text="Back Home" href="/" />
          <AnchorButton text="Contact Me" href="/contact" />
        </div>
      </section>
    </main>
  );
}
