interface AppState {
    field: any
}

export const ProductStates: AppState = {
    field: {
        loader: false
    }
}

export type AppAction =
    | { type: "fieldVal", payload: Partial<AppState['field']> }

export const ProductReducerFun = (state: AppState, action: AppAction) => {
    switch (action.type) {
        case 'fieldVal':
            return { ...state, field: { ...state.field, ...action.payload } }
        default:
            return state
    }
}