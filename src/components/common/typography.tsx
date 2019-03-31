import styled from "styled-components";
import PerlMini from "../../assets/svg/perl-mini-icon.svg";
import PencilEdit from "../../assets/svg/pencil-edit-button.svg";
import QuestionAlert from "../../assets/svg/alert-question.svg";
import DataCardEarnings from "../../assets/svg/datacard-earnings.svg";
import DataCardNetwork from "../../assets/svg/datacard-network.svg";
import DataCardStake from "../../assets/svg/datacard-stake.svg";
import DataCardWallet from "../../assets/svg/datacard-wallet.svg";
import QuickSendFail from "../../assets/svg/quicksend-error.svg";
import QuickSendSuccess from "../../assets/svg/quicksend-success.svg";
import QuickSendThumbsUp from "../../assets/svg/quicksend-thumbsup.svg";
import QuickSendArrow from "../../assets/svg/quicksend-arrow.svg";

const SectionTitle = styled.h2`
    font-family: HKGrotesk;
    font-size: 16px;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 500;
`;

interface InfoIconProps {
    size?: string;
}
const InfoIcon = styled.img.attrs({ src: PerlMini })`
    height: ${(props: InfoIconProps) => props.size};
    width: ${(props: InfoIconProps) => props.size};
    margin-right: 5px;
`;
InfoIcon.defaultProps = {
    size: "20px"
};

const EditIcon = styled.img.attrs({ src: PencilEdit })`
    height: 80%;
    max-width: 30px;
    vertical-align: centre;
`;

const QuestionIcon = styled.img.attrs({ src: QuestionAlert })`
    max-height: 120px;
    max-width: 120px;
`;

const EarningsIcon = styled.img.attrs({ src: DataCardEarnings })`
    max-height: 24px;
    max-width: 24px;
`;
const WalletIcon = styled.img.attrs({ src: DataCardWallet })`
    max-height: 24px;
    max-width: 24px;
`;
const StakeIcon = styled.img.attrs({ src: DataCardStake })`
    max-height: 24px;
    max-width: 24px;
`;
const NetworkIcon = styled.img.attrs({ src: DataCardNetwork })`
    max-height: 24px;
    max-width: 24px;
`;

const QuickSendErrorIcon = styled.img.attrs({ src: QuickSendFail })`
    max-height: 24px;
    max-width: 24px;
`;

const QuickSendSuccessIcon = styled.img.attrs({ src: QuickSendSuccess })`
    max-height: 24px;
    max-width: 24px;
    margin-right: 10px;
`;

const QuickSendThumbsUpIcon = styled.img.attrs({ src: QuickSendThumbsUp })`
    max-height: 100px;
    max-width: 100px;
    margin-right: 10px;
`;

const QuickSendArrowIcon = styled.img.attrs({ src: QuickSendArrow })`
    max-height: 100px;
    max-width: 100px;
    margin-right: 10px;
`;

interface InfoTextProps {
    breakWord?: boolean;
}
const InfoText = styled.p`
    display: flex;
    align-items: center;
    font-family: HKGrotesk;
    font-size: 18px;
    color: #fff;
    ${(props: InfoTextProps) =>
        props.breakWord ? "word-break: break-word;" : ""}
`;
InfoText.defaultProps = {
    breakWord: false
};
const InfoTitle = styled.h2`
    white-space: nowrap;
    font-family: HKGrotesk;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
`;

export {
    SectionTitle,
    InfoText,
    InfoTitle,
    InfoIcon,
    QuestionIcon,
    EditIcon,
    WalletIcon,
    EarningsIcon,
    StakeIcon,
    NetworkIcon,
    QuickSendErrorIcon,
    QuickSendSuccessIcon,
    QuickSendThumbsUpIcon,
    QuickSendArrowIcon
};
