

interface StateVal {
    field: any
}

export const loginStates: StateVal = {
    field: {}
}

export type AppAction =
    | { type: "fieldVal", payload: Partial<StateVal['field']> }

export const loginReducer = (state: StateVal, action: any) => {
    switch (action.type) {
        case 'fieldVal':
            return { ...state, field: { ...state.field, ...action.payload } }
        default:
            return state
    }
}