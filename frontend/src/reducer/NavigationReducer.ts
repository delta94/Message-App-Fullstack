import common from "../common";
import { INavigatorData } from "../interface/DataInterface";
import { EPeopleTap, EContentTap } from "../common/TypeCommon";

let initializeState: INavigatorData = {
    contentTab: EContentTap.PEOPLE,
    peopleTab: EPeopleTap.PEOPLE,
}

export default function (state = initializeState, action: { type: string, payload: any }) {
    switch (action.type) {
        case common.action.CHOOSE_CONTENT_TAB:
            return Object.values(EContentTap).includes(action.payload) ? Object.assign({}, state, { contentTab: action.payload }) : state;
        case common.action.CHOOSE_PEOPLE_TAB:
            return Object.values(EPeopleTap).includes(action.payload) ? Object.assign({}, state, { peopleTab: action.payload }) : state;
        default:
            return state;
    }
}