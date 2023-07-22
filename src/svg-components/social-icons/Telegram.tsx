import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const Telegram = forwardRef(
	(
		{ color = 'currentColor', size = 25, ...rest }: Props,
		svgRef?: Ref<SVGSVGElement>
	) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='none'
			{...rest}
		>
			<path
				fill='#EFE6E6'
				d='M25 2.466 21.046 22.4s-.553 1.383-2.074.719l-9.166-7.015c1.232-1.108 10.79-9.7 11.208-10.09.646-.603.245-.962-.506-.505L6.39 14.474.945 12.641s-.858-.304-.94-.968c-.083-.663.967-1.023.967-1.023l22.203-8.71S25 1.138 25 2.466Z'
				opacity={0.7}
			/>
		</svg>
	)
)
