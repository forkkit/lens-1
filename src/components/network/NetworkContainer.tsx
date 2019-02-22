import * as React from "react";
import { Flex, Box } from "@rebass/grid";
import styled from "styled-components";
import { TransactionGraphPixi } from "../graphs/TransactionGraphPixi";
import { NetworkGraph } from "../graphs/NetworkGraph";
import { SectionTitle } from "../Titles";
import TransactionsTable from "../TransactionsTable";

const Row = styled(Flex)`
    margin-bottom: ${props => props.theme.margin.row};
`;

export default class NetworkContainer extends React.Component<{}, {}> {
    public render() {
        return (
            <>
                <Row>
                    <Box width={1 / 2}>
                        <SectionTitle>Transaction Graph</SectionTitle>
                        <TransactionGraphPixi />
                    </Box>
                    <Box width={1 / 2} style={{ marginLeft: "40px" }}>
                        <SectionTitle>Network Graph</SectionTitle>
                        <NetworkGraph />
                    </Box>
                </Row>
                <Box width={1}>
                    <SectionTitle>Transactions</SectionTitle>
                    <TransactionsTable />
                </Box>
                <Row />
            </>
        );
    }
}