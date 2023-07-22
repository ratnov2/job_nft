import { FC } from 'react'
import { Calc } from '../../../../../svg-components/Calc'
import style from './Result.module.scss'

const Result = () => {
	return (
		<div className={style.result}>
			<div className={style.head}>
				<Calc />
				<h4>Result</h4>
				<p>Correct calculation of your profit and capital</p>
			</div>
			<div className={style.container}>
				<Element text='16 days' title='Deposit term:' />
				<Element text='0.92%' title='Daily interest:' />
				<Element text='USD' title='Currency:' />
				<Element text='0.46' title='Daily profit:' />
				<Element text='57.36' title='Total profit:' />
			</div>
		</div>
	)
}

const Element: FC<{ title: string; text: string }> = ({ text, title }) => {
	return (
		<div className={style.element}>
			<h6>{title}</h6>
			<p>{text}</p>
		</div>
	)
}
export default Result
