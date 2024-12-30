import Link from "next/link"
import React from "react"
import { useAuth } from "../../authentication/AuthContext"
import { Button, Header, SEO, Textfield, Typography } from "../../components"
import { Background, ToggleMode } from "../../components/layout"

const Signup = () => {
  const { signup, currentUser } = useAuth()
  const [state, setState] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (props) => event => {
    setState(prev => ({...prev, [props]: event.target.value}))
  }

  return currentUser !== null
  ? <>
      {location.replace('/')}
    </>
  : <ToggleMode>
    <SEO title='Foodie Blog | Sign Up' href='/Logo.png' description='Craavingsssss' />
    
    <Header />
    <Background>
      <div className="flex flex-col items-center justify-center gap-4">
        <Typography style='text-7xl mt-10 font-normal' label='Sign Up' />
        <div className="flex gap-2">
          <Typography style='text-md font-normal' label='Already have an account?' />
          <Link href='/Signin' className="text-md text-[#248AF0] font-normal">
            Sign In
          </Link>
        </div>
        <div>
          <div className="flex flex-col gap-6 mt-20 items-center justify-center min-w-[10rem]">
            <Textfield value={ state.email } onChange={handleChange('email')} type='email' label='email' />
            <Textfield value={ state.password } onChange={handleChange('password')} type='password' label='password' />
            <Textfield value={ state.confirmPassword } onChange={handleChange('confirmPassword')} type='password' label='confirm Password' />
            <Button onClick={() => {
              if (state.password === state.confirmPassword)
                signup(state.email, state.password)
            }}
              style='w-max text-[#248AF0] border-[#248AF0]' variant='outlined'>
              Sign In
            </Button>
          </div>
          <div className="flex flex-col">

          </div>
        </div>
      </div>
    </Background>
  </ToggleMode>;
}

export default Signup