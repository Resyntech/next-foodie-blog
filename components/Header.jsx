import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button, ButtonLink, Mode, Typography } from "."
import { useAuth } from "../authentication/AuthContext"
import { useSelector } from "react-redux"

const Header = () => {
  const ref = React.createRef()
  const dimension = "60rem"
  const { currentUser, signout } = useAuth()
  const darkMode = useSelector((state) => state.ui.darkMode)
  const [toggleHamburger, setToggleHamburger] = React.useState(false)

  return (
    (<div className="flex bg-themeColor dark:bg-slate-900 text-white p-4 duration-300 ease-in-out z-10 relative">
      <Mode variant={"text"} />
      <div className="grid lg:grid-cols-3 grid-cols-2 items-center justify-center w-full">
        <div className="flex items-center gap-4">
          <Image
            width={dimension}
            height={dimension}
            src="/Logo.png"
            alt="Food Logo"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
          <Typography
            style="text-sm sm:text-lg md:text-xl lg:text-2xl"
            label="Food Blog Project"
          />
        </div>
        <nav className="hidden lg:flex gap-4 lg:items-center lg:justify-center text-white dark:text-yellow-200">
          <Link href="/" passHref legacyBehavior>
            <ButtonLink>Home</ButtonLink>
          </Link>
          <Link href="/About" passHref legacyBehavior>
            <ButtonLink>About</ButtonLink>
          </Link>
          <Link href="/Recipe" passHref legacyBehavior>
            <ButtonLink>Recipe</ButtonLink>
          </Link>
          <Link href="/Contact" passHref legacyBehavior>
            <ButtonLink>Contact</ButtonLink>
          </Link>
        </nav>
        <div className="hidden lg:flex items-center justify-self-end gap-4">
          {currentUser !== null ? (
            <Button
              variant="text"
              onClick={() =>
                signout()
                  .then(() => {
                    alert(`${currentUser.email} Signed out!`)
                    location.replace("/")
                  })
                  .catch((error) => console.log(error))
              }
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Link href="/Signin" passHref legacyBehavior>
                <ButtonLink>Sign In</ButtonLink>
              </Link>
              <Link href="/Signup" passHref legacyBehavior>
                <ButtonLink>Sign Up</ButtonLink>
              </Link>{" "}
            </>
          )}
        </div>
        <div className="lg:hidden flex items-center justify-self-end gap-4">
          <Button
            variant="text"
            onClick={() => setToggleHamburger(!toggleHamburger)}
            onBlurCapture={() => setToggleHamburger(!toggleHamburger)}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="40"
                height="8"
                fill={darkMode ? "#F3EB87" : "#FFFFFF"}
              />
              <rect
                y="16"
                width="40"
                height="8"
                fill={darkMode ? "#F3EB87" : "#FFFFFF"}
              />
              <rect
                y="32"
                width="40"
                height="8"
                fill={darkMode ? "#F3EB87" : "#FFFFFF"}
              />
            </svg>
          </Button>
          {toggleHamburger && (
            <nav className="grid w-max p-10 top-5 right-0 absolute shadow-lg bg-themeColor dark:bg-slate-900 gap-4 z-50">
              <Link href="/" passHref legacyBehavior>
                <ButtonLink>Home</ButtonLink>
              </Link>
              <Link href="/About" passHref legacyBehavior>
                <ButtonLink>About</ButtonLink>
              </Link>
              <Link href="/Recipe" passHref legacyBehavior>
                <ButtonLink>Recipe</ButtonLink>
              </Link>
              <Link href="/Contact" passHref legacyBehavior>
                <ButtonLink>Contact</ButtonLink>
              </Link>
              {currentUser !== null ? (
                <Button
                  variant="text"
                  onClick={() =>
                    signout()
                      .then(() => {
                        alert(`${currentUser.email} Signed out!`)
                        location.replace("/")
                      })
                      .catch((error) => console.log(error))
                  }
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link href="/Signin" passHref legacyBehavior>
                    <ButtonLink>Sign In</ButtonLink>
                  </Link>
                  <Link href="/Signup" passHref legacyBehavior>
                    <ButtonLink>Sign Up</ButtonLink>
                  </Link>{" "}
                </>
              )}
            </nav>
          )}
        </div>
      </div>
    </div>)
  );
}

export default Header
