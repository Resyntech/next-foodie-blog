import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../src/redux/reducers/uiReducer"

const Mode = ({ variant }) => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.ui.darkMode)
  const dimension = 20

  return (
    (<div>
      <button
        className="fixed bottom-5 left-5 rounded-full p-4 bg-themeColor dark:bg-slate-900 text-white shadow-lg dark:text-yellow-200 z-[100]"
        onClick={() => dispatch(setTheme(!darkMode))}
      >
        {darkMode ? (
          <Image
            src="/Moon.svg"
            className="hover:animate-pulse"
            alt="Moooon"
            width={dimension}
            height={dimension}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        ) : (
          <Image
            src="/Sun.svg"
            className="hover:animate-spin"
            alt="Suuuun"
            width={dimension}
            height={dimension}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        )}
      </button>
    </div>)
  );
}

export default Mode
