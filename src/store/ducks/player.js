import Sound from 'react-sound'
export const Types = {
	LOAD: '@player/LOAD',
	PLAY: '@player/PLAY',
	PAUSE: '@player/PAUSE',
	NEXT: '@player/NEXT',
	PREV: '@player/PREV',
	PLAYING: '@player/PLAYING',
}

const INITIAL_STATE = {
	currentSong: null,
	status: Sound.status.PLAYING,
	list: [],
	position: null,
	duration: null,
}

export default function player(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.LOAD:
			return {
				...state,
				currentSong: action.payload.song,
				status: Sound.status.PLAYING,
				list: action.payload.list,
			}
		case Types.PLAY:
			return { ...state, status: Sound.status.PLAYING }
		case Types.PAUSE:
			return { ...state, status: Sound.status.PAUSED }
		case Types.PREV:
			let currentIndex = state.list.findIndex(
				song => song.id === state.currentSong.id
			)
			const prev = state.list[currentIndex - 1]
			if (prev) {
				return { ...state, currentSong: prev, status: Sound.status.PLAYING }
			}
			return { ...state }

		case Types.NEXT:
			const bosta = state.list.findIndex(
				song => song.id === state.currentSong.id
			)
			const next = state.list[bosta + 1]
			console.tron.log(state.list)
			if (next) {
				return { ...state, currentSong: next, status: Sound.status.PLAYING }
			}
			return { ...state }

		case Types.PLAYING:
			return { ...state, ...action.payload }
		default:
			return state
	}
}

export const Creators = {
	loadSong: (song, list) => ({
		type: Types.LOAD,
		payload: {
			song,
			list,
		},
	}),
	play: () => ({
		type: Types.PLAY,
	}),
	pause: () => ({
		type: Types.PAUSE,
	}),
	next: () => ({
		type: Types.NEXT,
	}),
	prev: () => ({
		type: Types.PREV,
	}),
	playing: ({ position, duration }) => ({
		type: Types.PLAYING,
		payload: {
			position,
			duration,
		},
	}),
}