import React, {useContext} from "react";
import {useForm, useFormState} from "react-final-form";
import {CustomButton} from "./FrameworkWrapper";


interface SubmitButtonProps {
    data?: any;
    children?: string;
}

export const SubmitButton = (
    {data, children}: SubmitButtonProps) => {
    const {invalid} = useFormState();
    return (
        <CustomButton
            primary
            type="submit"
            disabled={invalid}
        >
            {children || (data ? "Update" : "Submit")}
        </CustomButton>
    );
};

// interface SubmitFab extends SubmitButtonProps, Partial<FabTemplate> {
//     singleFab?: boolean;
// }
//
// export const SubmitFab = (props: SubmitFab) => {
//     const {data, text, singleFab, loginNotRequired} = props;
//     const {invalid} = useFormState();
//     const {submit} = useForm();
//     const {session} = useContext(SessionContext);
//     if (session || loginNotRequired) {
//         if(singleFab) {
//             return (
//                 <SingleFab
//                     style={{background: invalid? "#aeaeae": "#2185d0"}}
//                     type="submit"
//                     onClick={!invalid ? submit : null}
//                     icon={<FabIcon name="save"/>}
//                 />
//             )
//         }else {
//             return (
//                 <FabActionButton
//                     onClick={!invalid ? submit : null}
//                     text={text || data ? "Update" : "Submit"}
//                     style={{background: invalid ? "grey" : "teal"}}
//                     type="submit"
//                 >
//                     <FabIcon name="save"/>
//                 </FabActionButton>
//             )
//         }
//     } else {
//         return (
//             <FabActionButton
//                 onClick={() => alert("Please log in first")}
//                 text={null}
//                 style={{background: "red"}}
//             >
//                 <FabIcon name="close"/>
//             </FabActionButton>
//         )
//     }
// };