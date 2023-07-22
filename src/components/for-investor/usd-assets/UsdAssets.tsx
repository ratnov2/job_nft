import { useState } from 'react'
import { Money } from '../../../svg-components/Money'
import LayoutStyle from '../../layouts/layout-style/LayoutStyle'
import HeaderTitle from '../../ui/header-title/HeaderTitle'
import { UsdAssetsData } from './UsdAssets.data'
import style from './UsdAssets.module.scss'
import AssetsCard from './assets-card/AssetsCard'

const UsdAssets = () => {
	const [state, setState] = useState(1)

	return (
		<div className={style.usdAssets}>
			<div className={style.fonLine} />
			<LayoutStyle>
				<HeaderTitle
					head='USD Assets'
					title='USD Assets, also known as fiat money is a national currency that is
					not pegged to the price of a commodity such as gold or silver. The
					value of fiat money is largely based on the public’s faith in the
					currency’s issuer, which is normally that country’s government or
					central bank.'
				/>
				<div className={style.crumbs}>
					<div
						onClick={() => setState(1)}
						className={state === 1 ? style.active : ''}
					/>
					<div
						onClick={() => setState(2)}
						className={state === 2 ? style.active : ''}
					/>
					<div
						onClick={() => setState(3)}
						className={state === 3 ? style.active : ''}
					/>
				</div>
				<div className={style.assetsCards}>
					{UsdAssetsData.map(card => (
						<AssetsCard card={card}>
							<Money />
						</AssetsCard>
					))}
				</div>
			</LayoutStyle>
		</div>
	)
}
export default UsdAssets
