import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const Lightning = forwardRef(
	(
		{ color = 'currentColor', size = 52, ...rest }: Props,
		svgRef?: Ref<SVGSVGElement>
	) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={319}
			height={337}
			fill='none'
			{...rest}
		>
			<g clipPath='url(#a)' opacity={0.6}>
				<path
					fill='url(#b)'
					d='m.065 222.75 89.61-.914-3.797 20.956 60.746 15.123-87.616 7.513 5.972-23.495L.065 222.75Z'
				/>
				<path
					fill='url(#c)'
					d='m256.727 69.212 22.516 65.702-16.34 2.318 3.681 48.375-26.882-62.625 18.738-1.332-1.713-52.438Z'
				/>
				<path
					fill='url(#d)'
					d='m114.971 122.15 45.338 24.802-7.817 9.47 26.294 24.735-46.189-20.924 9.62-10.133-27.246-27.95Z'
				/>
			</g>
			<defs>
				<linearGradient
					id='b'
					x1={16.786}
					x2={129.838}
					y1={199.582}
					y2={281.173}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#1C222E' />
					<stop offset={1} stopColor='#46587B' />
				</linearGradient>
				<linearGradient
					id='c'
					x1={230.797}
					x2={292.513}
					y1={105.139}
					y2={149.68}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#1C222E' />
					<stop offset={1} stopColor='#46587B' />
				</linearGradient>
				<linearGradient
					id='d'
					x1={110.832}
					x2={180.793}
					y1={127.885}
					y2={178.377}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#1C222E' />
					<stop offset={1} stopColor='#46587B' />
				</linearGradient>
				<clipPath id='a'>
					<path
						fill='#fff'
						d='M160.828 0 0 222.84l157.614 113.753 160.828-222.84z'
					/>
				</clipPath>
			</defs>
		</svg>
	)
)
