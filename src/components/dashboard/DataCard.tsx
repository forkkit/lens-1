import React, { useState, useEffect, useRef, memo } from "react";
import styled from "styled-components";
import {
    WalletIcon,
    StakeIcon,
    NetworkIcon,
    EarningsIcon
} from "../common/typography";
import { Flex } from "@rebass/grid";
import DiffUp from "../../assets/svg/diff-up.svg";
import DiffDown from "../../assets/svg/diff-down.svg";
import BigNumber from "bignumber.js";
import { CSSTransition } from "react-transition-group";

const ApproxBigNumber = BigNumber.clone({
    DECIMAL_PLACES: 2,
    ROUNDING_MODE: 0
});

interface IProps {
    heading: string;
    value: string;
    unit: string;
}

const Tag = styled.div<{ diff: number }>`
    padding: 7px 25px 7px 10px;
    border-radius: 14px;
    transition: all 0.2s ease;
    ${({ diff }) =>
        diff > 0
            ? `
        background: rgba(55, 214, 107, 0.1) url(${DiffUp}) no-repeat;
        color: rgba(55, 214, 107, 1);
        &.pop-in-enter, &.pop-in-exit-active {
            transform: translateY(10px) scale(0.9);
        }
    `
            : `
        background: rgba(214, 55, 55, 0.1) url(${DiffDown})  no-repeat;
        color: rgba(214, 55, 55, 1);

        &.pop-in-enter, &.pop-in-exit-active {
            transform: translateY(-10px) scale(0.9);
        }
    `}

    background-position: 86% 50%;
    background-size: 12px auto;

    &.pop-in-enter {
        opacity: 0;
    }
    &.pop-in-enter-active {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    &.pop-in-exit {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    &.pop-in-exit-active {
        opacity: 0;
    }
`;
const CardSection = styled.div`
    border: 1px solid #34374a;
    word-wrap: break-word;
    margin: 0px;
    font-size: 12px;
    border-radius: 5px;

    ${EarningsIcon} {
        position: relative;
        top: 3px;
    }
`;
const CardHeading = styled(Flex)`
    border-bottom: 1px solid #34374a;
    padding: 15px 20px;
    height: 60px;
    align-items: center;
`;
const Value = styled.span`
    display: block;
    font-size: 36px;
    font-weight: 400;
    border-top: 0px solid white;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

function GetIcon(heading: string) {
    switch (heading) {
        case "Wallet Balance":
            return <WalletIcon style={{ marginRight: "10px" }} />;
        case "Network Load":
            return <NetworkIcon style={{ marginRight: "10px" }} />;
        case "Your Reward":
            return <EarningsIcon style={{ marginRight: "10px" }} />;
        case "Your Stake":
            return <StakeIcon style={{ marginRight: "10px" }} />;
        default:
            return null;
    }
}

let timeout: any;
const DataCard: React.FunctionComponent<IProps> = ({
    heading,
    value,
    unit
}) => {
    const [lastValue, setLastValue] = useState<BigNumber>();

    const diff = useRef<BigNumber>(new BigNumber(0));

    useEffect(() => {
        const floatValue = new BigNumber(value);

        diff.current =
            lastValue && !lastValue.isZero()
                ? // @ts-ignore
                  floatValue
                      .minus(lastValue)
                      .dividedBy(lastValue)
                      .multipliedBy(100)
                : new BigNumber(0);
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            diff.current = new BigNumber(0);
            setLastValue(lastValue);
        }, 30000);

        setLastValue(floatValue);

        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    const aproxDiff = new ApproxBigNumber(diff.current).abs();
    const tilda = aproxDiff.isLessThan(0.01) ? "~" : "";
    return (
        <CardSection>
            <CardHeading justifyContent="space-between">
                <div>
                    {GetIcon(heading)}
                    {heading}
                </div>
                <CSSTransition
                    in={!diff.current.isZero()}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    timeout={200}
                    classNames="pop-in"
                >
                    <Tag
                        diff={diff.current.toNumber()}
                        title={diff.current.toString()}
                    >
                        {tilda + aproxDiff.toFormat(2)} %
                    </Tag>
                </CSSTransition>
            </CardHeading>
            <div style={{ padding: "20px" }}>
                <Value title={value}>{value}</Value>
                <br />
                {unit}
            </div>
        </CardSection>
    );
};

export default memo(DataCard);