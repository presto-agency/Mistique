import React from "react";
import Link from "next/link";

type Button = {
  title: string,
  className: string
}

const Button = ({title, className}: Button) => {
  return (
    <Link href="@/UI/Button/Button#" className={className}>
      {title}
    </Link>
  );
};

export default Button;