import React from "react"

const ButtonLink = React.forwardRef((props, ref) => (
  <a className={"link " + props.className} ref={ref} {...props}>
    {props.children}
  </a>
))

ButtonLink.displayName = "ButtonLinkName"
export default ButtonLink
