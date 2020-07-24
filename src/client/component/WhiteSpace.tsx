import React, {CSSProperties, forwardRef} from 'react';

interface Props {
    size?: "large" | "medium"
    children?: any
    className?: string
    textAlign?: "center" | "right"
    style?: CSSProperties
}

export const WhiteSpace = forwardRef<HTMLDivElement, Props>(({className, size, style = {}, children, textAlign}, ref) => {
    let sizeVal = 15;
    if (size === "large") {
        sizeVal = 25;
    }
    return (
        <div
            ref={ref}
            className={className}
            style={
                Object.assign({

                        marginTop: sizeVal,
                        marginBottom: sizeVal,
                        textAlign,
                        //width: '100%',
                    }, style
                )
            }
        >
            {children}
        </div>
    )
});
