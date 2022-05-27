
// {
//     uid:sfggdfgggdfg,
//     name:"Varela"

import { types } from "../types/types";

// }
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            const { uid, name } = action.payload;
            return {
                uid,
                name
            }
        case types.logout:
            return {

            }
        default:
            return state;

    }

}