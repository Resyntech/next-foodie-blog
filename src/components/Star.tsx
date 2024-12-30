import React from "react";
import { useDispatch } from "react-redux";
import { rating } from "@/redux/reducers/uiReducer";

const Star = ({ ...props }) => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState(props.rating);
  const array = [1, 2, 3, 4, 5];
  const dimension = 25;

  React.useEffect(
    () => dispatch(rating({ id: props.id, rating: state })),
    [state, dispatch, props.id]
  );

  return (
    <div className="flex justify-between">
      {array.map((value, index) => {
        return (
          <button
            disabled={props.disabled}
            key={index}
            className={props.disabled ? "" : "hover:scale-110"}
            onClick={() => setState(value)}
          >
            <svg
              width={dimension}
              height={dimension}
              viewBox="0 0 25 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0L8.5 8L0 8.5L6.5 14.5L4.5 23.5L12 19L20 23.5L18 14.5L24.5 8.5L15.5 8L12 0Z"
                fill={state > index ? "#ff0" : "#346"}
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default Star;
