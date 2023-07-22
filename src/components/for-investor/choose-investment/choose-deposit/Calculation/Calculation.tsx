import { Calc } from '../../../../../svg-components/Calc'
import Button from '../../../../ui/button/Button'
import Input from '../../../../ui/input/Input'
import style from './Calculation.module.scss'
import { CalculationData } from './calculation.data'

const Calculation = () => {
	return (
		<div className={style.calculation}>
			<div className={style.head}>
				<Calc />
				<h4>Calculation</h4>
			</div>
			<div className={style.period}>
				<p>Investing period days</p>
				{CalculationData.map(el => (
					<Button variant='calc_month'>{el}</Button>
				))}
			</div>
			<div className={style.invest}>
				<div className={style.headInvest}>
					<span>Investing amount</span>
					<span>Investing amount</span>
				</div>
				<div className={style.input}>
					<Input variant='amount' />
					<div>USD</div>
				</div>
			</div>
		</div>
	)
}
export default Calculation
