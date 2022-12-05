import { FC } from "react";

interface Props {
  option: number;
  img: string;
  description: string;
  handler: () => void;
  active: boolean;
  votes: number;
}

export const Option: FC<Props> = ({ option, img, description, handler, active, votes }) => {

  return(
    <div className={`flex w-3/5 border-[1px] h-28 my-2 mx-auto border-gray-400 backdrop-blur-md ${active ? "bg-green-500/30 border-green-500 border-2" : "bg-white/10"}`} onClick={handler}>

      <div className="w-1/5 flex items-center justify-center">
        <img src={img} className="h-[90%]" alt="Option image" />
      </div>

      <div className="w-[10%] flex items-center justify-center">
        {option}.
      </div>

      <div className="w-2/5 flex items-center">
        <p>
          {description}
        </p>
      </div>

      <div className="w-1/5 flex items-center font-light">
        <p>
          votes: {votes}
        </p>
      </div>
    </div>
  )
}