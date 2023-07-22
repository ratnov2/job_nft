import { FC, ReactNode } from 'react'
import style from './LayoutBorder.module.scss'

const LayoutBorder: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={style.layout}>
			<div className={style.plus} />
			{children}
		</div>
	)
}
export default LayoutBorder
