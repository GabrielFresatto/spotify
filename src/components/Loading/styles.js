import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
	from {
		transform: rotate(0deg)
	}

	to {
		transform: rotate(360deg)
	}
`
export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`
export const Spinner = styled.img`
	animation: ${rotate360} 2s linear infinite;
`
