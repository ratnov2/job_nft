import { Facebook } from '../../../../svg-components/social-icons/Facebook'
import { Instagram } from '../../../../svg-components/social-icons/Instagram'
import { Telegram } from '../../../../svg-components/social-icons/Telegram'
import { Twitter } from '../../../../svg-components/social-icons/Twitter'
import { Youtube } from '../../../../svg-components/social-icons/Youtube'
import style from './SocialIcons.module.scss'

const SocialIcons = () => {
	return (
		<div className={style.socialIcons}>
			<Twitter />
			<Facebook />
			<Instagram />
			<Telegram />
			<Youtube />
		</div>
	)
}
export default SocialIcons
