import * as React from "react";
import { SampleTextContext } from "./context";

const MyFunctionalComponents:React.FC = () => {
    return (
        <SampleTextContext.Consumer>
            {value => {
                return(
                    <div>{value}</div>
                )
            }}
        </SampleTextContext.Consumer>
    )
}

export default MyFunctionalComponents;
