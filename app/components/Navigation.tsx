import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  }
];

export const Navigation = () => {
  return (
    <header className="border-white border-solid border-[2px] w-full">
      <nav>
        <ul className="flex justify-center">
          {links.map(({ label, route }) => (
            <li className="m-[12px] hover:underline" key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
