import { Exchange } from '../../../svg-components/Exchange'
import LayoutStyle from '../../layouts/layout-style/LayoutStyle'
import HeaderTitle from '../../ui/header-title/HeaderTitle'
import AssetsCard from '../usd-assets/assets-card/AssetsCard'
import style from './VentureAssets.module.scss'
import { VentureAssetsData } from './venture-assets.data'
import { Pentagons } from '../../../svg-components/fon/Pentagons'

const VentureAssets = () => {
	return (
		<LayoutStyle>
			<div className={style.ventureAssets}>
				<div className={style.fonPentagons}>
					<Pentagons />
				</div>
				<HeaderTitle
					head='Venture Assets'
					title='Investing in Venture Assets refers to the financing of startups and
						small, early-stage firms believed to have long-term growth
						potential. Venture investing has typically been done by venture
						capitalists and angel investors. Venture capitalists usually invest
						after a startup has seen some kind of achievement, often at a later
						stage of development. They normally pool resources to make larger
						investments, providing capital to help the company grow and acquire
						market share.'
				/>
				<div className={style.assetsCards}>
					{VentureAssetsData.map(card => (
						<AssetsCard card={card}>
							<Exchange />
						</AssetsCard>
					))}
				</div>
			</div>
		</LayoutStyle>
	)
}
export default VentureAssets
