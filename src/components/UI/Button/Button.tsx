import React from "react";
import Link from "next/link";

const Button = ({title, className}: string) => {
  return (
    <Link href="#" className={className}>
      {title}
    </Link>
  );
};

export default Button;