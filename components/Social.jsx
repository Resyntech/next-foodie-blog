import Image from "next/image"

const Social = ({ ...props }) => {
  return (
    (<div className={props.style}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span>
          <Image
            className="hover:animate-bounce"
            src="/Facebook.png"
            alt="Facebook Logo"
            width={props.dimension}
            height={props.dimension}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span>
          <Image
            className="hover:animate-bounce"
            src="/Instagram.png"
            alt="Instagram Logo"
            width={props.dimension}
            height={props.dimension}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span>
          <Image
            className="hover:animate-bounce"
            src="/Twitter.png"
            alt="Twitter Logo"
            width={props.dimension}
            height={props.dimension}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <span>
          <Image
            className="ease-in-out hover:animate-bounce"
            src="/Linked_In.png"
            alt="In Logo"
            width={props.dimension}
            height={props.dimension}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </span>
      </a>
    </div>)
  );
}

export default Social
