import style from './Localize.module.scss'
import en from '../../../../assets/img/en.png'
import { ArrowDown } from '../../../../svg-components/ArrowDown'
import { FC } from 'react'

const Localize: FC<{ styleLocalize?: { marginRight: string } }> = ({
	styleLocalize
}) => {
	return (
		<div className={style.localize} style={styleLocalize}>
			<img src={en} alt={'en'} />
			<span>EN</span>
			<ArrowDown />
		</div>
	)
}
export default Localize
