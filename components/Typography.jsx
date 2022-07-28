const Typography = ({ ...props }) => 
    <h1 className={ 'dark:text-yellow-200 duration-300 ease-in-out '+props.style }>
        { props.label }
    </h1>

export default Typography