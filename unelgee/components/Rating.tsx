import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image"

export const Rating = (): JSX.Element => {
  const [number, setNumber] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState(undefined || number);

  const handleText = (): string => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  const handlePlaceHolder = (): string => {
    switch (number || hoverStar) {
      case 0:
        return "Comment here...";
      case 1:
      case 2:
      case 3:
      case 4:
        return "What is your problem?";
      case 5:
        return "Why do you like the product?";
      default:
        return "Comment here...";
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded-md shadow-md">
        <div className="p-4">
          djdjdj
          <div className="flex items-center">
            <Image
              className="w-14 h-14 rounded-md object-cover mr-2"
              src={require("../img/card4.jpg")}
              alt="name"
              width={100}
              height={100}
            />
            <h1 className="text-lg font-medium">Iphone 13</h1>
          </div>
          <div className="my-4 flex items-center">
            <h1 className="text-lg font-medium mr-2">{handleText()}</h1>
            {Array(5)
              .fill(null)
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    key={index}
                    onMouseOver={() =>
                      !number && setHoverStar(index + 1)
                    }
                    onMouseLeave={() => setHoverStar(number)}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    key={index}
                    onMouseOver={() =>
                      !number && setHoverStar(index + 1)
                    }
                    onMouseLeave={() => setHoverStar(number)}
                    className="text-orange-500 cursor-pointer"
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <textarea
            className="w-full rounded-md p-2 bg-gray-200"
            placeholder={handlePlaceHolder()}
          ></textarea>
          <button
            className={`${
              !number && "opacity-50 cursor-not-allowed"
            } block w-full rounded-md py-2 mt-4 bg-orange-500 text-white font-medium`}
            disabled={!number}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
