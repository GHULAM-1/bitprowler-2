import React, { ChangeEvent } from "react";

type ActiveSearchProps = {
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
};
export default function ActiveSearch({ setSearchString }: ActiveSearchProps) {
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearchString(event.target.value)
          }
        />
      </div>
    </>
  );
}
