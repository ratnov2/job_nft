import { Logo } from '../../../svg-components/Logo'
import LayoutBorder from '../../layouts/layout-border/LayoutBorder'
import LayoutStyle from '../../layouts/layout-style/LayoutStyle'
import Localize from '../navigation/localize/Localize'
import NavigationLink from '../navigation/navigation-link/NavigationLink'
import style from './Footer.module.scss'
import SocialIcons from './social-icons/SocialIcons'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.borders}>
				<LayoutStyle>
					<div className={style.footerShare}>
						<div className={style.head}>
							<div className={style.logoInfo}>
								<Logo />
								<p>NLT</p>
							</div>
							<NavigationLink />
						</div>
						<div className={style.copyright}>
							<p>© 2023 NLT All rights reserved.</p>
							<div className={style.localizeAndSocial}>
								<Localize styleLocalize={{ marginRight: '15px' }} />
								<SocialIcons />
							</div>
						</div>
						<div className={style.section}>
							<h6>NLT is the future of trade finance.</h6>
							<p>
								This is a win-win digital solution for every smart investor who
								values their time and in just one click you can get the best
								solutions for increasing your capital by our professional
								traders. Manage innovative technology and use broad access to
								financial literacy right now!
							</p>
						</div>
					</div>
				</LayoutStyle>
			</div>
		</footer>
	)
}
export default Footer
