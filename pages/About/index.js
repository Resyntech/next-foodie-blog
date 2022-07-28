import Image from "next/image"
import { Header, SEO, Social, Typography } from "../../components"
import { Background, ToggleMode } from "../../components/layout"

const About = () => {
  return (
    <ToggleMode>
      <SEO
        title="Foodie Blog | About"
        href="/Logo.png"
        description="Craavingsssss"
      />

      <Header />
      <Background>
        <div className="grid grid-cols-2 py-10 items-center text-center text-3xl font-black absolute inset-0">
          <div className="self-center">
            <Image src="/Chef.png" alt="Master Chef" width={380} height={500} />
          </div>
          <div className="flex flex-col items-center gap-10 self-center justify-center">
            <Typography style="heading" label="Lorem Ipsum" />
            <Typography
              style="text-center body font-normal bg-white/40"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tortor massa. Cras bibendum arcu non metus condimentum, quis laoreet odio ultrices. Nullam in purus cursus dui vestibulum ornare. Curabitur finibus in enim nec euismod. Duis eget accumsan lorem, finibus elementum magna. Suspendisse dictum fermentum orci nec eleifend. In hac habitasse platea dictumst. Etiam eget aliquam leo."
            />
            <Social style="absolute bottom-12 inset-x-0" dimension={55} />
          </div>
        </div>
      </Background>
    </ToggleMode>
  )
}

export default About
