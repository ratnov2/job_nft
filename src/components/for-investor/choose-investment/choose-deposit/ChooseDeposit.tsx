import Button from '../../../ui/button/Button'
import Calculation from './Calculation/Calculation'
import style from './ChooseDeposit.module.scss'
import Result from './Result/Result'

const ChooseDeposit = () => {
	return (
		<div className={style.chooseDeposit}>
			<div className={style.section}>
				<Calculation />
				<Result />
			</div>
			<Button variant='open_deposit'>Open deposit</Button>
		</div>
	)
}
export default ChooseDeposit
