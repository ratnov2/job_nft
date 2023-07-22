import { FC } from 'react'
import style from './HeaderTitle.module.scss'

const HeaderTitle: FC<{ head: string; title: string }> = ({ head, title }) => {
	return (
		<div className={style.headerTitle}>
			<h1>{head}</h1>
			<p>{title}</p>
		</div>
	)
}
export default HeaderTitle
