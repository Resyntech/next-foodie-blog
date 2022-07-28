import React from "react"
import { onSnapshot } from "firebase/firestore"
import { useRouter } from "next/router"
import { docRef, setDocument, updateDocument } from "../../utils/firebase"
import { useSelector } from "react-redux"
import {
  Button,
  Footer,
  Header,
  Loading,
  SEO,
  Star,
  Typography,
} from "../../components"
import { Background, ToggleMode } from "../../components/layout"
import { useAuth } from "../../authentication/AuthContext"

const Recipe = () => {
  const { currentUser } = useAuth()
  const router = useRouter()
  const { rid } = router.query
  const currentComment = useSelector((state) => state.ui.comment)
  const [state, setState] = React.useState([])
  const [comment, setComment] = React.useState({
    user: currentUser?.displayName,
    comment: "",
    rating: 0,
  })

  const rates = state.data?.comments.map(({ rating }) => rating)

  React.useEffect(() => {
    return setComment((prev) => ({
      ...prev,
      rating: currentComment.rating,
    }))
  }, [currentComment.rating])

  const handleChange = (props) => (event) =>
    setComment((prev) => ({ ...prev, [props]: event.target.value }))

  React.useEffect(
    () =>
      onSnapshot(docRef("Foods", rid), (snapshot) => {
        const data = snapshot.data()
        const id = snapshot.id
        setState((prev) => ({ ...prev, data, id }))
      }),
    []
  )

  return (
    <ToggleMode>
      <Header />
      <SEO
        title={`Recipe of ${state.data?.name}`}
        href="/Logo.png"
        description={state.data?.description}
      />

      <Background>
        <Loading loading={state.length}>
          <div className="grid grid-cols-2 justify-center py-10">
            <div className="flex flex-col gap-10 justify-self-center">
              <Typography
                style="self-start heading text-themeColor"
                label={state.data?.name}
              />
              <img
                className="border-2 border-black"
                src={state.data?.picture}
                width="331"
                height="257"
                alt={state.data?.name + " FOOOOOOOD"}
              />
              <div className="flex gap-4 items-center justify-center">
                <Typography
                  style="self-start sub-heading text-themeColor"
                  label="Recipe Rating: "
                />
                <Star
                  rating={Math.floor(
                    rates?.reduce((a, b) => a + b, 0) / rates?.length
                  )}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Typography
                  style="justify-self-center sub-heading text-themeColor"
                  label="Your Rating: "
                />
                <Star id={state.id} />
              </div>
              <div className="grid gap-10 items-center">
                <Typography
                  style="heading text-themeColor underline justify-self-center"
                  label="Leave a comment"
                />
                <textarea
                  className="outline-none border-2 border-black justify-self-center resize-none p-2 bg-transparent dark:border-white dark:text-white"
                  cols="32"
                  rows="10"
                  value={comment.comment}
                  onChange={handleChange("comment")}
                />
                <Button
                  style="w-max justify-self-center"
                  variant="outlined"
                  onClick={async () => {
                    const array = state.data?.comments
                    if (!currentUser) location.replace("/Signin")
                    if (
                      comment.rating !== 0 &&
                      comment.rating !== undefined &&
                      comment.rating !== null &&
                      comment.comment !== ""
                    ) {
                      array.push(comment)
                      const arrayRatings = array.map(({ rating }) => rating)
                      await updateDocument(docRef("Foods", state.id), {
                        rating:
                          arrayRatings?.reduce((a, b) => a + b, 0) /
                          arrayRatings?.length,
                        comments: array,
                      })
                      return location.reload()
                    }
                    return console.log(
                      "You cannot enter a empty comment or no rating!"
                    )
                  }}
                >
                  Post Comment
                </Button>
              </div>
              <div className="grid gap-2">
                {state.data?.comments.map(
                  ({ comment, user, replies, rating, date }, i) => (
                    <div key={i} className="flex flex-col border-2 p-2">
                      <div className="flex gap-4 items-center justify-center">
                        <p className="body dark:text-yellow-200">
                          {user || `UnknownUser`}
                        </p>
                        <Star rating={rating} disabled />
                      </div>
                      <p className="body dark:text-white font-normal">
                        {comment}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="grid gap-2 lg:gap-4 xl:gap-6 items-center justify-center">
              <div className="flex flex-col">
                <Typography
                  style="sub-heading text-themeColor"
                  label="Origin of Sisig"
                />
                <p className="flex flex-col body font-normal dark:text-white">
                  {state.data?.description}
                </p>
              </div>
              <div className="flex gap-4">
                <Typography
                  style="sub-heading text-themeColor"
                  label="Ingredients"
                />
                <div className="flex flex-col">
                  {state.data?.ingredients.map((value, index) => {
                    return (
                      <Typography
                        style="duration-300 ease-in-out body font-normal dark:text-white"
                        key={index}
                        label={value}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="flex gap-4">
                <Typography
                  style="sub-heading text-themeColor"
                  label="Instructions"
                />
                <div className="flex flex-col">
                  {state.data?.instructions.map((value, index) => {
                    return (
                      <Typography
                        style="duration-300 ease-in-out body font-normal dark:text-white"
                        key={index}
                        label={index + 1 + ". " + value}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="flex gap-4">
                <Typography
                  style="sub-heading text-themeColor"
                  label="Nutritional Facts"
                />
                <div className="grid grid-cols-3">
                  {state.data?.nutritionalFacts?.map((value, index) => {
                    return (
                      <Typography
                        style="duration-300 ease-in-out body font-normal dark:text-white"
                        key={index}
                        label={value + "|"}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Loading>
      </Background>
      <Footer />
    </ToggleMode>
  )
}

export default Recipe
