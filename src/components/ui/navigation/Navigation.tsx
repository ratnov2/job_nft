import style from './Navigation.module.scss'
import { NavigationData } from './navigation.data'
import { Link } from 'react-router-dom'
import Localize from './localize/Localize'
import ButtonGroup from './button-group/ButtonGroup'
import LayoutStyle from '../../layouts/layout-style/LayoutStyle'
import { Logo } from '../../../svg-components/Logo'
import NavigationLink from './navigation-link/NavigationLink'

const Navigation = () => {
	return (
		<div className={style.navigation}>
			<LayoutStyle addStyle={style.height}>
				<div className={style.section}>
					<Logo />
					<div className={style.linkAndLocalize}>
						<NavigationLink />
						<Localize />
					</div>
					<ButtonGroup />
				</div>
			</LayoutStyle>
		</div>
	)
}
export default Navigation
