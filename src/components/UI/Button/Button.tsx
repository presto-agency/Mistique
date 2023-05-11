import React from "react";
import Link from "next/link";

interface Button{
  title: string,
  className: string
}

const Button = ({title, className}: Button) => {
  return (
    <Link href="#" className={className}>
      {title}
    </Link>
  );
};

export default Button;