import type { Children } from "@/app/layout";
import React from "react";

type ButtonLinkProps = {
  className?: string;
} & Children;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (props, ref) => (
    <a className={`${!props.className ? "" : props.className} link`} ref={ref}>
      {props.children}
    </a>
  )
);

ButtonLink.displayName = "ButtonLinkName";
export default ButtonLink;
