import { Trade, TradeType } from "@uniswap/sdk";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Field } from "../../state/swap/actions";
import { useUserSlippageTolerance } from "../../state/user/hooks";
import { TYPE, ExternalLink } from "../../theme";
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from "../../utils/prices";
import { AutoColumn } from "../Column";
import { RowFixed } from "../Row";
import FormattedPriceImpact from "./FormattedPriceImpact";
import SwapRoute from "./SwapRoute";

const CustomTypeBlack = styled(TYPE.Black)`
	font-size: 0.75rem;

	@media (min-width: 768px) {
		font-size: 1rem;
	}
`;

export const InfoLink = styled(ExternalLink)`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.bg2};
	padding: 6px 6px;
	border-radius: 8px;
	text-align: center;
	font-size: 14px;
	color: ${({ theme }) => theme.text1};
`;

export const SummaryRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.text3};
	font-size: 1rem;
	font-weight: 500;
`;

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
	const theme = useContext(ThemeContext);
	const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade);
	const isExactIn = trade.tradeType === TradeType.EXACT_INPUT;
	const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage);

	return (
		<>
			<AutoColumn style={{ padding: "0 15px" }}>
				<SummaryRow>
					<RowFixed>
						<CustomTypeBlack fontWeight={500} color={theme.text1}>
							{isExactIn ? "Minimum received" : "Maximum sold"}
						</CustomTypeBlack>
					</RowFixed>
					<RowFixed>
						<CustomTypeBlack color={theme.text1} fontWeight={500}>
							{isExactIn
								? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${
										trade.outputAmount.currency.symbol
								  }` ?? "-"
								: `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${
										trade.inputAmount.currency.symbol
								  }` ?? "-"}
						</CustomTypeBlack>
					</RowFixed>
				</SummaryRow>
				<SummaryRow>
					<RowFixed>
						<CustomTypeBlack fontWeight={500} color={theme.text1}>
							Price Impact
						</CustomTypeBlack>
					</RowFixed>
					<FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
				</SummaryRow>

				<SummaryRow>
					<RowFixed>
						<CustomTypeBlack fontWeight={500} color={theme.text1}>
							Liquidity Provider Fee
						</CustomTypeBlack>
					</RowFixed>
					<CustomTypeBlack color={theme.text1} fontWeight={500}>
						{realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${trade.inputAmount.currency.symbol}` : "-"}
					</CustomTypeBlack>
				</SummaryRow>
			</AutoColumn>
		</>
	);
}

export interface AdvancedSwapDetailsProps {
	trade?: Trade;
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
	const theme = useContext(ThemeContext);
	const [allowedSlippage] = useUserSlippageTolerance();

	const showRoute = Boolean(trade && trade.route.path.length > 2);

	return (
		<AutoColumn gap="15px">
			{trade && (
				<>
					<TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
					{showRoute && (
						<div className={"d-flex flex-column"}>
							<AutoColumn style={{ padding: "0 15px" }} gap={"7px"}>
								<TYPE.Black
									fontSize={16}
									color={theme.text1}
									fontWeight={500}
									className={"d-none d-lg-block"}
								>
									Route
								</TYPE.Black>
								<SwapRoute trade={trade} />
							</AutoColumn>
						</div>
					)}
				</>
			)}
		</AutoColumn>
	);
}
