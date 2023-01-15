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
];

export const Navigation = () => {
  return (
    <header className="border-white border-solid border-[2px] w-full">
      <nav>
        <ul className="flex">
          {links.map(({ label, route }) => (
            <li className="m-[12px]" key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
