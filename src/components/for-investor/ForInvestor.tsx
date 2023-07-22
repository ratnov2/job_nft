import LayoutBorder from '../layouts/layout-border/LayoutBorder'
import Footer from '../ui/footer/Footer'
import Navigation from '../ui/navigation/Navigation'
import style from './ForInvestor.module.scss'
import ChooseInvestment from './choose-investment/ChooseInvestment'
import CryptoAssets from './crypto-assets/CryptoAssets'
import HeadSection from './head-section/HeadSection'
import UsdAssets from './usd-assets/UsdAssets'
import VentureAssets from './venture-assets/VentureAssets'

const ForInvestor = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Navigation />
			<HeadSection />
			<LayoutBorder>
				<ChooseInvestment />
			</LayoutBorder>
			<LayoutBorder>
				<UsdAssets />
			</LayoutBorder>
			<LayoutBorder>
				<CryptoAssets />
			</LayoutBorder>
			<LayoutBorder>
				<VentureAssets />
			</LayoutBorder>
			<Footer />
		</div>
	)
}
export default ForInvestor
