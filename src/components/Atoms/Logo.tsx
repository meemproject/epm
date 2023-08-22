import React from 'react'

export interface IProps {
	className?: string
}

export const Logo: React.FC<IProps> = ({ className }) => {
	return (
		<svg
			width="687"
			height="249"
			viewBox="0 0 687 249"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M211.126 24V12H199.126L24 12H12L12 24L12 224.144L12 236.144H24H199.126H211.126V224.144V174.108V162.108H199.126H86.0359L86.0359 161.09H199.126H211.126V149.09V24ZM424.287 12H412.287V24V224.144V236.144H424.287H474.323H486.323V224.144V86.0359H487.341V224.144V236.144H499.341H549.377H561.377V224.144V86.0359H562.395V224.144V236.144H574.395H663H675V224.144V174.108V162.108H663H636.431V24V12H624.431H424.287ZM411.269 24V12H399.269L224.144 12H212.144V24L212.144 224.144V236.144H224.144H274.179H286.179V224.144V161.09H399.269H411.269V149.09V24ZM137.09 86.0359V87.0538H86.0359L86.0359 86.0359L137.09 86.0359ZM286.179 86.0359L337.233 86.0359V87.0538H286.179L286.179 86.0359Z"
				fill="white"
				stroke="#0D0D0D"
				strokeWidth="24"
			/>
		</svg>
	)
}