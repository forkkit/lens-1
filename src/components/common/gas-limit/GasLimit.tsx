import React, { useState, useCallback, useEffect } from "react";

import ChoiceButtons from "./ChoiceButtons";
import { Flex } from "@rebass/grid";
import { DividerInput, Divider, DividerAside } from "../dividerInput";
import BigNumber from "bignumber.js";
import { inputToKens } from "../../common/core";

export const gasLimitValues = [
    {
        label: "25%",
        value: 25
    },
    {
        label: "50%",
        value: 50
    },
    {
        label: "75%",
        value: 75
    },
    {
        label: "100%",
        value: 100
    }
];

interface IGasLimitProps {
    onChange: (value: string) => void;
    balance: string | number;
    fee?: string | number;
    value?: any;
    mr?: any;
    mt?: any;
    mb?: any;
    ml?: any;
}
const GasLimit: React.FunctionComponent<IGasLimitProps> = ({
    balance,
    onChange,
    value = 0,
    fee = 0,
    mr,
    mt,
    mb,
    ml
}) => {
    balance = balance + "";
    const [choiceReset, setChoiceReset] = useState(0);
    const [gasLimit, setGasLimit] = useState(value);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        let limit = new BigNumber(value).minus(fee).integerValue();

        if (limit.lt(0)) {
            limit = new BigNumber(0);
        }
        setChoiceReset(choiceReset + 1);
        setGasLimit(limit.toString(10));
    }, [fee]);

    const updateGasLimit = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let kens = inputToKens(e.target.value);

            if (new BigNumber(kens).lt(0)) {
                kens = 0 + "";
            }
            setGasLimit(kens);
            setChoiceReset(choiceReset + 1);
            onChange(kens);
        },
        [onChange, fee]
    );
    const calculateGasLimit = useCallback(
        (newValue: number) => {
            const limit = new BigNumber(balance)
                .div(100)
                .times(Math.min(newValue, 99))  // needed to take into account smart contract execution fee
                .minus(fee)
                .integerValue()
                .toString(10);

            setGasLimit(limit);
            onChange(limit);
        },
        [balance, fee]
    );

    const formattedValue = value
        ? new BigNumber(gasLimit).div(Math.pow(10, 9)).toString(10)
        : "";
    return (
        <Flex mr={mr} mt={mt} mb={mb} ml={ml} flex="1">
            <DividerInput
                placeholder="Gas Limit"
                value={!focus ? formattedValue: undefined}
                onChange={updateGasLimit}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            />
            <Divider>|</Divider>
            <DividerAside title="% of total balance">
                <ChoiceButtons
                    key={choiceReset}
                    options={gasLimitValues}
                    onChange={calculateGasLimit}
                />
            </DividerAside>
        </Flex>
    );
};

export default GasLimit;
