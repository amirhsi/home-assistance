import Link from "next/link";

type Props = {
  href: string;
  imgSrc: string;
};

const SingleImage = (props: Props) => {
  const { href, imgSrc } = props;
  return (
    <>
      <Link href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </Link>
    </>
  );
};

export default SingleImage;
