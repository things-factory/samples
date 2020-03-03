import { UPDATE_SAMPLES } from '../actions/main'

const INITIAL_STATE = {
  samples: 'ABC'
}

const samples = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SAMPLES:
      return { ...state }

    default:
      return state
  }
}

export default samples
