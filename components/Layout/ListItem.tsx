import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  NavLink: string;
};

const ListItem = (props: Props) => {
  const { children, NavLink } = props;

  return (
    <>
      <li>
        <Link
          href={NavLink}
          className="flex text-white py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default ListItem;
