import {ComponentPropsWithoutRef} from "react";

type Props = ComponentPropsWithoutRef<'button'>
export const Button = (props: Props) => {
    return (
        <button {...props}>
            Hello World!!!
        </button>
    );
};
