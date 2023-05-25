import React, {MouseEventHandler} from "react";
import Link from "next/link";

type Button = {
  title: string,
  className: string,
  isLink?: boolean,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
                  title,
                  className,
                  isLink = true,
                  handleClick
                }: Button) => {
  if (isLink) {
    return (
      <Link href="#" className={className}>
        {title}
      </Link>
    );
  } else {
    return (
      <button onClick={handleClick} className={className}>
        {title}
      </button>
    );
  }
};

export default Button;