import React from 'react';
import {useField} from "react-final-form";
import {Rating} from "semantic-ui-react";
import {ErrorLabel} from "./ErrorLabel";
import InputLabel from "./InputLabel";

interface StarRatingFormFieldProps {
    defaultRating: number;
    maxRating: number;
    name: string
}

const StarRatingField = ({maxRating, name,defaultRating}: StarRatingFormFieldProps) => {
    const {input: {onChange}} = useField(name);
    return (
        <React.Fragment>
            <InputLabel>
                What is your rating on this item?
            </InputLabel>
            <React.Fragment>
                <Rating
                    icon='star'
                    data-testid="rating"
                    defaultRating={defaultRating}
                    onRate={(e, {name, rating}) => {
                        onChange(rating)
                    }}
                    maxRating={maxRating}
                />
                <br/>
                <ErrorLabel name={name}/>
            </React.Fragment>
        </React.Fragment>

    )
};

export default StarRatingField;