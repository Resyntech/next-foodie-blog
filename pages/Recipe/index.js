import React from "react"
import Link from "next/link"
import Image from "next/image"
import { onSnapshot } from "firebase/firestore"
import { queryRef, colRef } from "../../utils/firebase"
import {
  Footer,
  Loading,
  Header,
  SEO,
  Star,
  Typography,
} from "../../components"
import { Background, ToggleMode } from "../../components/layout"

const Recipe = () => {
  const [state, setState] = React.useState([])
  const query = queryRef(colRef("Foods"), true)

  React.useEffect(
    () =>
      onSnapshot(query, (snapshot) => {
        let array = []
        snapshot.forEach((doc) => {
          array.push({ ...doc.data(), id: doc.id })
        })
        setState(array)
      }),
    [query]
  )

  return (
    (<ToggleMode>
      <SEO
        title="Foodie Blog | Recipe"
        href="/Logo.png"
        description="Craavingsssss"
      />
      <Header />
      <Loading loading={state.length}>
        <Background>
          <div className="flex flex-col items-center">
            <Typography
              style="text-5xl font-bold text-themeColor my-10 ml-10 self-start"
              label="Food Recipe"
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-between w-max gap-10 xl:gap-20">
              {state?.map((value, index) => {
                return (
                  (<div
                    key={index}
                    className="bg-white dark:bg-slate-900 flex flex-col gap-4 items-center pb-10 shadow-xl duration-300 ease-in-out"
                  >
                    <img
                      src={value.picture}
                      width={331}
                      height={257}
                      alt="FOOOOD"
                    />
                    <Typography
                      style="self-start ml-4 text-themeColor"
                      label={value.name}
                    />
                    <div className="self-start ml-4">
                      <Star id={value.id} disabled rating={value.rating} />
                    </div>
                    <Link
                      href={`/Recipe/${encodeURIComponent(value.id)}`}
                      className="w-max px-6 py-2 border-2 border-themeColor dark:border-yellow-200 dark:text-yellow-200 duration-300 ease-in-out hover:scale-110 text-themeColor">
                      
                        View Recipe
                      
                    </Link>
                  </div>)
                );
              })}
            </div>
          </div>
        </Background>
      </Loading>
      <Footer />
    </ToggleMode>)
  );
}

export default Recipe
