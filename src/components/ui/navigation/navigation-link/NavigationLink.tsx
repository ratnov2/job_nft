import { Link } from 'react-router-dom'
import { NavigationData } from '../navigation.data'
import style from './NavigationLink.module.scss'

const NavigationLink = () => {
	return (
		<nav className={style.nav}>
			{NavigationData.map(({ href, title }) => (
				<ul>
					<Link to={href}>{title}</Link>
				</ul>
			))}
		</nav>
	)
}

export default NavigationLink
