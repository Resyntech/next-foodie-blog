import Link from "next/link"
import React from "react"
import Image from "next/image"
import { useAuth } from "../../authentication/AuthContext"
import { Button, Header, SEO, Textfield, Typography } from "../../components"
import { Background, ToggleMode } from "../../components/layout"
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

const Signin = () => {
  const dimension = 50
  const { signin, signinFacebook, signinGoogle, currentUser } = useAuth()
  const [state, setState] = React.useState({
    email: "",
    password: "",
  })

  const handleChange = (props) => (event) => {
    setState((prev) => ({ ...prev, [props]: event.target.value }))
  }

  return currentUser !== null ? (
    <>{location.replace("/")}</>
  ) : (
    <ToggleMode>
      <SEO
        title="Foodie Blog | Sign In"
        href="/Logo.png"
        description="Craavingsssss"
      />

      <Header />
      <Background>
        <div className="flex flex-col items-center justify-center gap-4">
          <Typography style="text-7xl font-normal mt-10" label="Sign In" />
          <div className="flex gap-2">
            <Typography
              style="text-md font-normal"
              label="Don’t have an account?"
            />
            <Link href="/Signup" className="text-md text-[#248AF0] font-normal">
              Sign Up
            </Link>
          </div>

          <div className="flex items-center gap-8 lg:gap-20 justify-between">
            <div className="flex flex-col gap-4 items-center justify-center min-w-[10rem]">
              <Textfield
                value={state.email}
                onChange={handleChange("email")}
                type="email"
                label="email"
              />
              <Textfield
                value={state.password}
                onChange={handleChange("password")}
                type="password"
                label="password"
              />
              <Button
                onClick={() => signin(state.email, state.password)}
                style="w-max text-[#248AF0] border-[#248AF0]"
                variant="outlined"
              >
                Sign In
              </Button>
            </div>

            <Image
              className="hidden sm:block"
              src="/Line.png"
              alt="Liiiine"
              width={1}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />

            <div className="flex flex-col gap-4">
              <div className="flex">
                <Image
                  src="/FBLogo.png"
                  alt="Facebook Logo"
                  width={dimension}
                  height={dimension}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <Button
                  style="w-full rounded-none dark:text-white text-xs bg-[#124699] dark:bg-[#124699]"
                  onClick={() => {
                    console.log(signinFacebook(new FacebookAuthProvider()))
                  }}
                >
                  Continue with Facebook
                </Button>
              </div>
              <div className="flex">
                <Image
                  src="/GoogleLogo.png"
                  alt="Google Logo"
                  width={dimension}
                  height={dimension}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
                <Button
                  style="w-full rounded-none dark:text-white text-xs bg-[#3478E3] dark:bg-[#3478E3]"
                  onClick={() => {
                    console.log(signinGoogle(new GoogleAuthProvider()))
                  }}
                >
                  Continue with Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Background>
    </ToggleMode>
  );
}

export default Signin
