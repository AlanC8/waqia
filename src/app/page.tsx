export const metadata = {
  title: "Waqia — Islamic app",
  description:
    "Minimal Islamic app landing. Domain waqia.app is available for purchase. Arabic typography, subtle geometry, GitHub and Telegram links.",
  alternates: { canonical: "/" },
  keywords: [
    "Waqia",
    "الواقعة",
    "Islamic UI",
    "Quran surah",
    "Modern Islamic design",
    "waqia.app",
    "domain for sale",
    "buy domain",
    "купить домен",
  ],
};

export default function Home() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 islamic-grid opacity-[.35]" />

      <section className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-24  text-center sm:gap-10 sm:py-28">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Waqia',
              url: 'https://waqia.app/',
              description:
                'Minimal Islamic app landing. Domain waqia.app is available for purchase. Arabic typography, subtle geometry, GitHub and Telegram links.',
              inLanguage: 'en',
              sameAs: [
                'https://github.com/AlanC8',
                'https://t.me/sevenstragen',
              ],
              author: {
                '@type': 'Person',
                name: 'Alan',
                url: 'https://github.com/AlanC8',
              },
            }),
          }}
        />
        {/* JSON-LD for domain sale offer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Offer',
              url: 'https://waqia.app/',
              availability: 'https://schema.org/InStock',
              itemOffered: {
                '@type': 'Product',
                name: 'waqia.app domain',
                description: 'Short, memorable Islamic brandable domain name',
              },
              seller: {
                '@type': 'Person',
                name: 'Alan',
                sameAs: [
                  'https://t.me/sevenstragen',
                  'https://github.com/AlanC8',
                ],
              },
            }),
          }}
        />
        {/* Domain for sale CTA */}
        <a
          href="https://t.me/sevenstragen"
          target="_blank"
          rel="noopener noreferrer"
          className="soft-card mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-[var(--muted)] backdrop-blur-md hover:text-[var(--color-foreground)]"
        >
          <span className="h-[6px] w-[6px] rounded-full bg-[var(--accent)]" />
          Домен waqia.app доступен к покупке — Связаться
          <span className="opacity-70">→</span>
        </a>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-[var(--muted)] backdrop-blur-md">
          <span className="h-[6px] w-[6px] rounded-full bg-[var(--accent)]" />
          Islamic app
        </div>

        <h1 className="font-sans text-4xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-6xl">
          Waqia
        </h1>
        <h2 className="[font-family:var(--font-arabic)] text-2xl leading-snug text-[var(--color-foreground)]/90 sm:text-3xl">
          الواقعة — جمال بسيط، روح معاصرة
        </h2>

        <p className="max-w-2xl text-balance text-base leading-7 text-[var(--muted)] sm:text-lg">
          A serene, modern interface inspired by Islamic geometry and balance. Built for clarity and calm.
        </p>
        <p className="max-w-2xl text-pretty text-sm leading-6 text-[var(--muted)]/90">
          “Waqia” — это название суры в Коране (аль-Вакиа, араб. «الواقعة»).
        </p>

        <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/AlanC8"
            className="link soft-card group flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="i-[github]" aria-hidden />
            GitHub
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://t.me/sevenstragen"
            className="link soft-card group flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 opacity-80 sm:gap-4">
          <div className="size-2 rounded-full bg-[var(--accent)]/70" />
          <div className="size-2 rounded-full bg-[var(--accent)]/40" />
          <div className="size-2 rounded-full bg-[var(--accent)]/70" />
        </div>
      </section>

      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--ring)]/10 blur-3xl" />
    </main>
  );
}
