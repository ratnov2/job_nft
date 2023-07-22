import { FC, ReactNode } from 'react'
import style from './LayoutStyle.module.scss'

const LayoutStyle: FC<{ children: ReactNode; addStyle?: string }> = ({
	children,
	addStyle
}) => {
	return <div className={`${style.layout} ${addStyle}`}>{children}</div>
}
export default LayoutStyle
