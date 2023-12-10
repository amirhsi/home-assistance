import Link from "next/link";

type Props = { link: string; label: string };

const NavLink = (props: Props) => {
  const { link, label } = props;
  return (
    <li>
      <Link
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
