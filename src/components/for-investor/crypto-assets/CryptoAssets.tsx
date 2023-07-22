import { StWheel } from '../../../svg-components/StWheel'
import LayoutStyle from '../../layouts/layout-style/LayoutStyle'
import HeaderTitle from '../../ui/header-title/HeaderTitle'
import AssetsCard from '../usd-assets/assets-card/AssetsCard'
import style from './CryptoAssets.module.scss'
import { CryptoAssetsData } from './crypto-assets.data'

const CryptoAssets = () => {
	return (
		<LayoutStyle>
			<div className={style.cryptoAssets}>
				<HeaderTitle
					head='Crypto Assets'
					title='Crypto assets are a digital representation of value that you can
						transfer, store, or trade electronically. This also includes
						non-fungible tokens (NFTs). Crypto assets are a subset of digital
						assets that use cryptography to protect digital data and distributed
						ledger technology to record transactions.'
				/>
				<div className={style.assetsCards}>
					{CryptoAssetsData.map(card => (
						<AssetsCard card={card}>
							<StWheel />
						</AssetsCard>
					))}
				</div>
			</div>
		</LayoutStyle>
	)
}
export default CryptoAssets
