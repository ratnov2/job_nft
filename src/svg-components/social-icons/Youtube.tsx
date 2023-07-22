import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const Youtube = forwardRef(
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
				d='M23.938 5.563c-.679-1.207-1.415-1.429-2.913-1.513-1.497-.102-5.26-.144-8.522-.144-3.267 0-7.033.042-8.528.142-1.495.086-2.233.307-2.917 1.514C.359 6.768 0 8.842 0 12.495v.013c0 3.637.36 5.728 1.058 6.92.684 1.206 1.42 1.425 2.915 1.527 1.497.087 5.263.139 8.53.139 3.261 0 7.025-.052 8.524-.138 1.498-.101 2.234-.32 2.912-1.526.705-1.192 1.061-3.283 1.061-6.92v-.013c0-3.655-.356-5.73-1.063-6.934ZM9.374 17.188V7.813l7.813 4.687-7.813 4.688Z'
				opacity={0.7}
			/>
		</svg>
	)
)
