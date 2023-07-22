import { Lightning } from '../../../svg-components/Lightning'
import LayoutStyle from '../../layouts/layout-style/LayoutStyle'
import HeaderTitle from '../../ui/header-title/HeaderTitle'
import style from './ChooseInvestment.module.scss'
import ChooseDeposit from './choose-deposit/ChooseDeposit'

const ChooseInvestment = () => {
	return (
		<LayoutStyle>
			<div className={style.chooseInvestment}>
				<div className={style.lightning} />
				<HeaderTitle
					head='Choose a comfortable investment package for yourself'
					title='We provide a wide range of financial services in the global market
						using advance technologies and innovations in the field trading
						based on unique trading strategies'
				/>
				<ChooseDeposit />
			</div>
		</LayoutStyle>
	)
}
export default ChooseInvestment
