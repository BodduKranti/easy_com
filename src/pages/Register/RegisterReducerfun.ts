interface StateValues {
    field: any
}

export const registerstate: StateValues = {
    field: {}
}

export type AppAction =
    | { type: "fieldVal", payload: Partial<StateValues['field']> }

export const Registerfun = (state: StateValues, action: any) => {
    switch (action.type) {
        case 'fieldVal':
            return { ...state, field: { ...state.field, ...action.payload } }
        default:
            return state
    }
}