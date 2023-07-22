import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const Facebook = forwardRef(
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
			<g clipPath='url(#a)' opacity={0.7}>
				<path
					fill='#EFE6E6'
					d='M21.875 0H3.125A3.128 3.128 0 0 0 0 3.125v18.75A3.128 3.128 0 0 0 3.125 25H12.5v-8.594H9.375V12.5H12.5V9.375a4.687 4.687 0 0 1 4.688-4.688h3.125v3.907H18.75c-.863 0-1.563-.082-1.563.781V12.5h3.907l-1.563 3.906h-2.343V25h4.687A3.128 3.128 0 0 0 25 21.875V3.125A3.128 3.128 0 0 0 21.875 0Z'
				/>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h25v25H0z' />
				</clipPath>
			</defs>
		</svg>
	)
)
