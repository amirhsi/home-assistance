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
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default ListItem;
