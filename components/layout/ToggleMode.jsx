import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUI } from "../../src/redux/reducers/uiReducer"

const ToggleMode = ({ children }) => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.ui.darkMode)

  React.useEffect(() => dispatch(getUI()), [dispatch])

  return <div className={darkMode ? "dark" : ""}>{children}</div>
}

export default ToggleMode
