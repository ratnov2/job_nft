import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const Twitter = forwardRef(
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
					d='M25 4.748c-.93.408-1.92.679-2.953.81a5.097 5.097 0 0 0 2.255-2.833c-.991.59-2.085 1.008-3.25 1.24a5.124 5.124 0 0 0-8.866 3.505c0 .407.034.797.119 1.17C8.044 8.43 4.273 6.39 1.74 3.277a5.16 5.16 0 0 0-.702 2.59c0 1.776.914 3.35 2.277 4.26A5.061 5.061 0 0 1 1 9.497v.056c0 2.49 1.777 4.56 4.106 5.036a5.118 5.118 0 0 1-1.343.169c-.329 0-.66-.019-.97-.088.663 2.03 2.548 3.522 4.788 3.57a10.298 10.298 0 0 1-6.354 2.187c-.42 0-.824-.02-1.227-.07a14.43 14.43 0 0 0 7.862 2.3c9.432 0 14.588-7.813 14.588-14.585 0-.227-.008-.445-.019-.663A10.225 10.225 0 0 0 25 4.75Z'
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
