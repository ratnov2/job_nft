import LayoutBorder from '../../layouts/layout-border/LayoutBorder'
import Button from '../../ui/button/Button'
import style from './HeadSection.module.scss'

const HeadSection = () => {
	return (
		<div className={style.headSection}>
			<LayoutBorder>
				<div className={style.section}>
					<h1>NLT for smart investors</h1>
					<p>
						Reach the top of the market with Onewiex. Manage innovative
						technology and use broad access to financial literacy right now!
					</p>
					<Button variant='head_active'>Get started</Button>
				</div>
			</LayoutBorder>
		</div>
	)
}
export default HeadSection
