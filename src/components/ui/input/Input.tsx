import { FC, ReactNode } from 'react'
import style from './Input.module.scss'

const variants = {
	amount: style.amount
}

const Input: FC<{
	variant?: keyof typeof variants
	value?: string | number
	handleChange?: () => void
}> = ({ variant, value, handleChange }) => {
	return (
		<input
			value={value}
			onChange={() => handleChange?.()}
			className={`${style.share} ${variants[variant || 'amount']}`}
		/>
	)
}
export default Input
