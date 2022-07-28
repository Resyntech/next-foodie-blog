import { Provider } from "react-redux"
import store from "../src/redux/store"
import { AuthProvider } from "../authentication/AuthContext"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
