import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 10%;
`;

const Spinner = ({isLoading}) => {

    return (   
            <MoonLoader  loading={isLoading} css={override} size={60} color={"#3182ce"} />
        
    )
}

export default Spinner