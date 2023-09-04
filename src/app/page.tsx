const SOCIAL_LINKS: { name: string; href: string }[] = [
  {
    name: "Bath SU Website",
    href: "https://thesubath.com/bcss/",
  },
  {
    name: "Discord",
    href: "https://discord.gg/PGvCbNSVwE",
  },
  {
    name: "GitHub",
    href: "https://github.com/bath-bcss",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/bathcompsci",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/bathcompsci/",
  },
  {
    name: "Email",
    href: "mailto:su-bcss@bath.ac.uk",
  },
];

export default function Index() {
  return (
    <main className="flex flex-1 p-4">
      <section className="mx-auto flex flex-col items-center">
        <h2 className="mb-2 text-xl font-bold">Links</h2>
        <ul className="list-disc">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
