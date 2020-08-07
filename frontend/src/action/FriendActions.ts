import common from "../common";
import { IPayloadData } from "../interface/DataInterface";

export function getFriend({ success, data, message }: IPayloadData) {
    return async function (dispatch: Function) {
        // Check data
        if (!success) {
            console.log(message)
        } else {
            // Dispatch action
            dispatch({
                type: common.action.FRIEND_GET,
                payload: data
            })
        }
    }
}