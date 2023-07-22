import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const ArrowDown = forwardRef(
	(
		{ color = 'currentColor', size = 24, ...rest }: Props,
		svgRef?: Ref<SVGSVGElement>
	) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={24}
			fill='none'
			{...rest}
		>
			<path
				fill='#747A7C'
				d='M12.863 15.618a.5.5 0 0 1-.726 0l-5.81-6.123a.5.5 0 0 1 0-.688l.403-.425a.5.5 0 0 1 .725 0l4.682 4.933a.5.5 0 0 0 .726 0l4.682-4.933a.5.5 0 0 1 .725 0l.403.425a.5.5 0 0 1 0 .688l-5.81 6.123Z'
			/>
		</svg>
	)
)
