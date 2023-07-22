import { FC, ReactNode } from 'react'
import style from './AssetsCard.module.scss'
import Button from '../../../ui/button/Button'
import { MiniCalc } from '../../../../svg-components/MiniCalc'

const AssetsCard: FC<IAssetCard> = ({ card, children }) => {
	return (
		<div className={style.assetsCard}>
			{children}
			<h4>{card.title}</h4>
			<ul className={style.info}>
				<li>
					<span>Accruals:</span>
					<span>{card.info.accruals}</span>
				</li>
				<li>
					<span>Term days:</span>
					<span>{card.info.termDays}</span>
				</li>
				<li>
					<span>Profit:</span>
					<span>{card.info.profit}</span>
				</li>
				<li>
					<span>Amount:</span>
					<span>{card.info.amount}</span>
				</li>
			</ul>
			<p>{card.text}</p>
			<div className={style.buttonGroup}>
				<Button variant='open_deposit_v2'>Open deposit</Button>
				<div className={style.miniCalc}>
					<MiniCalc />
					<p>Profit Calculation</p>
				</div>
			</div>
		</div>
	)
}

type IAssetCard = {
	card: {
		title: string
		info: {
			accruals: string
			termDays: string
			profit: string
			amount: string
		}
		text: string
	}
	children: ReactNode
}

export default AssetsCard
