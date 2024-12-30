const Button = ({ ...props }) => props.variant === 'outlined' // OUTLINED BUTTON
    ? <button className={'button-outlined '+props.style}
        onClick={ props.onClick }>
        {/* onBlurCapture={props.onBlurCapture}> */}
        {props.children}
    </button>
    // TEXT BUTTON
    : props.variant === 'text'
    ? <button className={"button-text "+props.style}
        onClick={ props.onClick }>
        {/* onBlurCapture={props.onBlurCapture}> */}
        {props.children}
    </button>
    // ROUNDED BUTTON (DEFAULT)
    : <button className={"button-rounded "+props.style}
        onClick={ props.onClick }>
        {/* onBlurCapture={props.onBlurCapture}> */}
        {props.children}
    </button>

export default Button