import { FC, ReactNode } from 'react'
import style from './Button.module.scss'

const variants = {
	head_in: style.headIn,
	head_active: style.headUp,
	get_started: style.getStarted,
	calc_month: style.calcMonth,
	open_deposit: style.openDeposit,
	open_deposit_v2:style.openDepositV2
}

const Button: FC<{ children: ReactNode; variant?: keyof typeof variants }> = ({
	children,
	variant
}) => {
	return (
		<button className={`${style.share} ${variants[variant || 'head_in']}`}>
			{children}
		</button>
	)
}
export default Button
