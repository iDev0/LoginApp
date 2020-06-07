import ExploreContainer from "./ExploreContainer";
import {connect} from 'react-redux';
import {getRooms} from "../../../roomReducer";

function mapDispatchToProps(dispatch) {
    return {
        getRooms : () => dispatch(getRooms())
    }
}

function mapStateToProps(state) {
    return state.roomReducer.explore
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)