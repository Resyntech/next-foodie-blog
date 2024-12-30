// "use client";
import React from "react";
import Image from "next/image";
import { Background } from "@/components/layout";
import { Button, Header, Social, Typography } from "@/components";
// import { setDocument, docRef } from "@/utils/firebase";
// import { testID } from "@/utils";

const Home = () => {
  const state = {
    picture:
      "https://www.foxyfolksy.com/wp-content/uploads/2015/05/Sizzling-Sisig-640.jpg",
    name: "Sisig",
    description:
      "Sisig originated from Pampanga. This place is considered as the culinary capital of the Philippines. It was invented by Lucia Cunanan. She is popularly known as Aling Lucing and the Sisig queen.",
    dateAdded: new Date(),
    ingredients: [
      "lb. pig ears",
      "lb pork belly",
      "piece onion minced",
      "tablespoons soy sauce",
      "teaspoon ground black pepper",
      "knob ginger minced (optional)",
      "tablespoons chili flakes",
      "teaspoon garlic powder",
      "piece lemon or to pieces calamansi",
      "½ cup butter or margarine",
      "¼ lb chicken liver",
      "cups water",
      "tablespoons mayonnaise",
      "teaspoon salt",
      "piece egg (optional)",
    ],
    instructions: [
      "Pour the water in a pan and bring to a boil Add salt and pepper.",
      "Put-in the pig’s ears and pork belly then simmer for  minutes to hour (or until tender).",
      "Remove the boiled ingredients from the pot then drain excess water",
      "Grill the boiled pig ears and pork belly until done",
      "Chop the pig ears and pork belly into fine pieces",
      "In a wide pan, melt the butter or margarine. Add the onions. Cook until onions are soft.",
      "Put-in the ginger and cook for minutes",
      "Add the chicken liver. Crush the chicken liver while cooking it in the pan.",
      "Add the chopped pig ears and pork belly. Cook for  to  minutes",
      "Put-in the soy sauce, garlic powder, and chili. Mix well",
      "Add salt and pepper to taste",
      "Put-in the mayonnaise and mix with the other ingredients",
      "Transfer to a serving plate. Top with chopped green onions and raw egg.",
      "Serve hot. Share and Enjoy (add the lemon or calamansi before eating)",
    ],
    nutritionalFacts: [
      "Serving: 6g",
      "Calories: 933kcal",
      "Carbohydrates: 6g",
      "Protein: 33g",
      "Fat: 86g",
      "Saturated Fat: 34g",
      "Cholesterol: 265mg",
      "Sodium: 1052mg",
      "Potassium: 694mg",
      "Fiber: 2g",
      "Sugar: 1g",
      "Vitamin A: 3805IU",
      "Vitamin C: 14.6mg",
      "Calcium: 49mg",
      "Iron: 3.9mg",
    ],
    rating: 0,
    comments: [],
  };

  return (
    <>
      <Header />
      <Background>
        <div className="grid md:grid-cols-2 h-screen">
          <div className="flex flex-col gap-12 items-center text-left mt-20 lg:mt-40">
            <Button
              style="w-max self-center"
              // onClick={() =>
              //   testID.forEach((value) => {
              //     setDocument(docRef("Foods", value), state);
              //   })
              // }
            >
              2022 Collection
            </Button>
            <Typography
              style="heading"
              label="Discover creativity on your food"
            />
            <Typography
              style="sub-heading"
              label="→ Make you’re life lovelier"
            />
          </div>
          <div className="hidden relative md:flex mt-40 ml-24 mr-14 justify-center">
            <div className="absolute z-50 top-0 left-0">
              <Image
                className="rounded-3xl"
                src="/Food.jpg"
                alt="Food Foreground Image"
                width={490}
                height={345}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="absolute z-40 xl:p-40 xl:px-56 rounded-3xl text-themeColor bg-themeColor dark:text-slate-900 dark:bg-slate-900 ease-in-out duration-300 top-10 left-10 w-fit">
              lorem
            </div>
          </div>
        </div>
        <Social
          style="absolute inset-x-0 z-50 bottom-0 md:bottom-12 flex justify-center items-center"
          dimension={55}
        />
        <div className="grid auto-cols-max gap-14 absolute bottom-0 md:bottom-20 md:left-24 dark:text-yellow-200 font-serif">
          <button className="body rotate-[270deg]">Policy</button>
          <button className="body rotate-[270deg]">Feedback</button>
        </div>
      </Background>
    </>
  );
};

export default Home;
