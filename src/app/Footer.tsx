export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-4">
      <p>
        Website by members of{" "}
        <a
          href="https://thesubath.com/bcss/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Bath Computer Science Society (BCSS)
        </a>
        .
      </p>
      <p>
        View the source code on{" "}
        <a
          href="https://github.com/bath-bcss/bcss.website"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
