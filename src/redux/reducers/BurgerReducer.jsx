const burgerState = {
    amount: {salad: 1, cheese: 1, beef: 1},
    menu: {salad: 2, cheese: 5, beef: 10},
    total: 17
}

export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_BREADMID': {
            let {propsBurger, amount} = action;
            if (amount === -1 && state.amount[propsBurger]<1)
                return {...state}
            let burgerUpdate = {...state.amount};
            burgerUpdate[propsBurger] += amount;
            state.amount = burgerUpdate;
            state.total += amount*state.menu[propsBurger];
            return {...state}
        }
        default:
    }

    return {...state}
}