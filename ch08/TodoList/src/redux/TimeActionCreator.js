import Constnat from '../Constant';

const TimeActionCreator = {
    changeTime() {
        return { type: Constnat.CHANGE_TIME };
    },
    asnycChangeTime() {
        return (dispatch, getstate) => {
            let currentTime = getstate.currentTime;
            dispatch({ type: "changeTime start!!!", payload: {currentTime: currentTime}});
            setTimeout(() => {
                dispatch(this.changeTime());
            }, 2000);
        }
    }
}

export default TimeActionCreator;