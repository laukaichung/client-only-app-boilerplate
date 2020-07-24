import React from "react";
import { WhiteSpace } from "../WhiteSpace";
import { CustomHeader } from "../FrameworkWrapper";

interface Props {
  children: string;
  optional?: boolean;
}

const InputLabel = ({ children }: Props) => {
  return (
    <div>
      <CustomHeader as="h4" className="capitalized">
        {children}
      </CustomHeader>
      <WhiteSpace />
    </div>
  );
};

export default InputLabel;
