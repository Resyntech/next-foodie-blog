import { Header, SEO } from "../../components"
import { Background, ToggleMode } from "../../components/layout"

const Contact = () => {
  return <ToggleMode>
    <SEO title='Foodie Blog | Contact' href='/Logo.png' description='Craavingsssss' />
    
    <Header />
    <Background>
      <div className="min-h-screen flex items-center justify-center text-3xl font-black dark:text-yellow-200">
        Contact
      </div>
    </Background>
  </ToggleMode>
}

export default Contact