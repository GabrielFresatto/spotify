import { combineReducers } from 'redux'

// Reducers
import playlists from './playlists'
import playlistDetails from './playlistDetails'
import error from './error'
import player from './player'

const reducers = combineReducers({
	playlists,
	playlistDetails,
	error,
	player,
})

export default reducers
