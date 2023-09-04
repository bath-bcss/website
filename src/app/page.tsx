const SOCIAL_LINKS: { name: string; href: string }[] = [
  {
    name: "Bath SU",
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
];

export default function Index() {
  return (
    <main className="flex flex-1 border">
      <section className="flex flex-col items-center">
        <h2 className="text-lg font-bold">Links</h2>
        <ul className="">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>{link.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
