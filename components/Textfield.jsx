import React from 'react'
import { isUndefined } from '../utils'

const Textfield = ({ ...props }) => {
    const labelClass = '-z-10 tracking-wide dark:text-yellow-200 font-normal bg-inherit m-4 duration-300 ease-in-out absolute top-0 capitalize text-lg'
    const labelActive = '-z-10 tracking-wide dark:text-yellow-200 font-thin bg-inherit m-4 duration-300 ease-in-out absolute capitalize -top-10 text-sm pt-[1px]'
    
    const testValue = () => (props.value === '' || isUndefined(props.value)) && !props.placeholder ? labelClass : labelActive
    const [className, setClassName] = React.useState(testValue)
    // eslint-disable-next-line
    React.useEffect(() => setClassName(testValue),[props.value])
    
  return (
    <div className={`
        relative
        bg-inherit
        ${isUndefined(props.$label_color) ? 'text-inherit' : props.$label_color}
    `}>
      {isUndefined(props.label)
      ? <></>
      : <label className={ className }>
        {props.label}
      </label>}
      <input onChange={ props.onChange }
        placeholder={ props.placeholder }
        value={ props.value }
        onFocusCapture={() => setClassName(labelActive)}
        onBlurCapture={() => setClassName(testValue)}
        className={`
        border-2
        shadow-md
        min-w-max
        outline-none
        dark:border-yellow-200
        ${isUndefined(props.$color) ? 'border-inherit text-inherit': props.$color}
        ${isUndefined(props.$rounded) ? '':props.$rounded}
        ${isUndefined(props.$bg) ? 'bg-transparent':props.$bg}
          p-4`}
      type={ props.type } />
    </div>
  )
}

export default Textfield
