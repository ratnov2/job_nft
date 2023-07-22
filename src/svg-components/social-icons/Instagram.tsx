import { Ref, forwardRef } from 'react'

type Props = {
	color?: string
	size?: number
}

export const Instagram = forwardRef(
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
			<g fill='#EFE6E6' clipPath='url(#a)' opacity={0.7}>
				<path d='M17.188 0H7.813A7.813 7.813 0 0 0 0 7.813v9.375A7.813 7.813 0 0 0 7.813 25h9.375A7.813 7.813 0 0 0 25 17.187V7.813A7.813 7.813 0 0 0 17.187 0Zm5.468 17.188a5.475 5.475 0 0 1-5.468 5.468H7.813a5.475 5.475 0 0 1-5.47-5.468V7.813a5.475 5.475 0 0 1 5.47-5.47h9.375a5.475 5.475 0 0 1 5.468 5.47v9.375Z' />
				<path d='M12.5 6.25a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5Zm0 10.156A3.912 3.912 0 0 1 8.594 12.5 3.91 3.91 0 0 1 12.5 8.594a3.91 3.91 0 0 1 3.906 3.906 3.912 3.912 0 0 1-3.906 3.906ZM19.219 6.614a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z' />
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h25v25H0z' />
				</clipPath>
			</defs>
		</svg>
	)
)
