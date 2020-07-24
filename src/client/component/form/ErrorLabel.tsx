import React from 'react'
import {useField} from "react-final-form";

interface ErrorProps {
    name: string;
}

export const ErrorLabel = ({name}: ErrorProps) => {
    const {meta} = useField(name);
    // && meta.touched
    if (meta.error) {
        return (
            <div
                style={{color: "red", textDecoration: "underline", fontWeight: "bold"}}
                data-testid="errorForm"
            >
                {meta.error}
            </div>
        )
    } else {
        return null;
    }
};
