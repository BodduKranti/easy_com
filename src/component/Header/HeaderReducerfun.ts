interface AppState {
    popup: any
}

export const HeaderState: AppState = {
    popup: {
        rightSlider: false
    }
}

export type AppAction =
    | { type: "itemSlider", payload: Partial<AppState['popup']> }

export const HeaderReducer = (state: AppState, action: AppAction) => {
    switch (action.type) {
        case 'itemSlider':
            return { ...state, popup: { ...state.popup, ...action.payload } }
        default:
            return state
    }
}