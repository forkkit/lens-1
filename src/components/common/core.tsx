import styled from "styled-components";
import { Flex } from "@rebass/grid";
import Dropdown, { Option } from "react-dropdown";
import JSBI from "jsbi";
import BigNumber from "bignumber.js";

export const ErrorMessage = styled.div`
    margin: 10px 0;
    color: red;
`;
interface ICardProps {
    showBoxShadow?: boolean;
}
export const Card = styled(Flex)`
    background-color: #0e1a49;
    border-radius: 2px;
    width: 100%;
    padding: 15px 20px;
    min-width: 300px;
    min-height: 100px;
    ${(props: ICardProps) =>
        props.showBoxShadow
            ? "box-shadow: 0 0 12px 6px rgba(155, 155, 155, 0.045);"
            : ""}
`;
Card.defaultProps = {
    showBoxShadow: true
};

interface IButtonProps {
    width?: string;
    fontSize?: string;
    hideOverflow?: boolean;
}

export const Button = styled.button<any>`
    border: 0;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-family: HKGrotesk;
    font-size: 16px;
    font-weight: 600;
    color: #151b35;
    margin-right: 10px;
    background-color: #fff;
    cursor: pointer;
    padding: 10px 15px;
    line-height: 1.3;

    width: ${({ width }) => (width ? width : "auto")};

    &:disabled,
    &[disabled] {
        pointer-events: none;
        cursor: default;
        opacity: 0.3;
    }

    ${(props: IButtonProps) =>
        props.hideOverflow
            ? `
        text-overflow: ellipsis;
        overflow: hidden;
    `
            : ""}

    &:hover,
    &:active {
        background-color: none;
    }
    &:focus {
        outline: none;
    }
`;
Button.defaultProps = {
    width: "170px",
    fontSize: "16px",
    hideOverflow: false
};

export const ButtonOutlined = styled(Button)`
    background: none;
    border: solid 1px #fff;
    color: #fff;
    opacity: 0.8;

    &:hover,
    &:active {
        background-color: none;
        opacity: 1;
    }
    &:focus {
        outline: none;
    }
`;

interface IInputProps {
    width?: string;
    fontSize?: string;
}
export const InputWrapper = styled.div`
    display: flex;
    flex: 1;
    min-width: 0;
`;
export const Input = styled.input`
    outline: none;
    border: none;
    min-width: 200px;
    border-radius: 2px;
    height: 35px;
    background-color: #fff;
    padding: 10px 15px;
    font-family: HKGrotesk;
    font-weight: normal;
    font-size: ${(props: IInputProps) => props.fontSize};
    width: ${(props: IInputProps) => props.width};

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #717985;
        opacity: 0.8;
    }
    &:disabled {
        background-color: #ddd;
    }
`;
Input.defaultProps = {
    width: "auto",
    fontSize: "14px"
};

interface IButtonProps {
    inactive?: boolean;
}

export const RoundButton = styled.button`
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 42px;
    cursor: pointer;
    height: 48px;
    width: 48px;
    margin: 4px 4px;
    background-color: #171d39;
    border-radius: 50%;
    color: ${(props: IButtonProps) => (props.inactive ? "#5D6175" : "#FFFFFF")};
    &:focus {
        outline: none;
    }
`;
export const WhiteButton = styled.button<any>`
    border: 0;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    font-family: HKGrotesk;
    font-size: 16px;
    font-weight: 600;
    color: #151b35;
    background-color: #fff;
    cursor: pointer;
    padding: 10px 15px;
    line-height: 1.3;

    width: ${({ width }: any) => (width ? width : "auto")};

    &:disabled,
    &[disabled] {
        pointer-events: none;
        cursor: default;
        opacity: 0.3;
    }

    &:hover,
    &:active {
        background-color: none;
    }
    &:focus {
        outline: none;
    }
`;

export const LargeWhiteButton = styled.button`
    width: 100%;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    border: none;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    color: #151b35;
    font-size: 16px;
    border-radius: 5px;
`;

export const FileButton = ButtonOutlined;

export const FileInputWrapper = styled.div`
    position: relative;
    overflow: hidden;

    ${FileButton} {
        pointer-events: none;
    }
`;

export const FileInput = styled.input.attrs({
    type: "file"
})`
    font-size: 200px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    cursor: pointer;

    &:hover ~ ${FileButton} {
        background-color: none;
        opacity: 1;
    }
`;

export const Textarea = styled.textarea`
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    min-height: 100px;
    width: 100%;
    font-family: HKGrotesk;
    color: #fff;
    background-color: #171d39;
    padding: 10px 15px;
    line-height: 1.5;

    &:focus,
    &:active,
    &:hover {
        cursor: text;
        box-shadow: 0 0 0 1px #4a41d1;
        outline: none;
    }
    &::placeholder {
        color: #717985;
        opacity: 0.8;
        font-size: 16px;
    }
`;

export const StyledInput = styled(Input)`
    font-family: HKGrotesk;
    font-size: 16px;
    font-weight: 400;
    background-color: #121834;
    border-radius: 5px;
    border: 1px solid #2e345100;
    color: white;
    width: 100%;
    padding: 15px;
    min-width: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 48px;
    transition: all 0.2s ease;

    &:hover {
        cursor: text;
        border: 1px solid #4a41d1;
    }
    &:focus {
        border: 1px solid #4a41d1;
        outline: 0;
    }
    &::placeholder {
        font-size: 16px;
    }
`;
export const LargeInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    color: #fff;
    background-color: #171d39;
    border-radius: 5px;
    border: 1px solid #2e345100;
    padding: 20px;
    font-size: 16px;
    font-family: HKGrotesk;

    &:hover {
        cursor: text;
        border: 1px solid #4a41d1;
    }
    &:focus {
        cursor: text;
        border: 1px solid #4a41d1;
        outline: 0;
    }
`;

export const randomRange = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// @ts-ignore
export const uniqueRandomRange = (window.uniqueRandomRange = (
    min: number,
    max: number
) => {
    if (min > max) {
        throw new Error(`Invalid random ranges ${min} - ${max}`);
    }
    const extracted: any = {};
    let extractedCount = 0;
    const info = {
        done: false,
        extracted
    };
    const random = (overrideMin: number = min, overrideMax: number = max) => {
        let value: number;

        while (!info.done) {
            value = randomRange(overrideMin, overrideMax);
            if (!extracted[value]) {
                extracted[value] = true;
                extractedCount++;
                break;
            }
        }

        info.done = extractedCount > max - min;
        // @ts-ignore
        return value;
    };

    return {
        random,
        info
    };
});

const removeEndZeros = (x: string) => x.replace(/^1|(0*$)/g, "");
const getPerlDeciaml = (kens: any, perlValue: any) => {
    const sum = String(JSBI.add(kens, perlValue));
    return removeEndZeros(sum);
};

export const formatBalance = (x: number | string = 0) => {
    x += "";

    if (x === "NaN" || x === "") {
        return "";
    }

    if (x === "0") {
        return x + " PERLs";
    }

    const value = JSBI.BigInt(x);

    if (JSBI.lessThan(value, JSBI.BigInt(Math.pow(10, 4)))) {
        if (x === "1") {
            return x + " KEN";
        }
        return numberWithCommas(x) + " KENs";
    }
    const perlValue = JSBI.BigInt(Math.pow(10, 9));
    const perls = String(JSBI.divide(value, perlValue));

    if (JSBI.equal(value, perlValue)) {
        return perls + " PERL";
    }
    const kensNum = JSBI.remainder(value, perlValue);
    const kens = String(kensNum);

    return (
        [
            numberWithCommas(perls),
            kens === "0" ? undefined : getPerlDeciaml(kensNum, perlValue)
        ]
            .filter(part => part !== undefined)
            .join(".") + " PERLs"
    );
};

export const numberWithCommas = (x: number | string = 0) => {
    if (x === "NaN") {
        return x;
    }

    x = x + "";
    const parts = x.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

export const StyledDropdown = styled(Dropdown)`
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    font-family: HKGrotesk;
`;

export const inputToKens = (perls: string) => {
    perls = perls.replace(/\,/g, "") || "0";
    const kens = new BigNumber(perls)
            .times(Math.pow(10,9))
            .toString(10)
            .replace(/\..*/, "");
    return kens;
}