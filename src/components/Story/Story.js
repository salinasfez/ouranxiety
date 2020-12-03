import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


class Story extends Component {
    componentDidMount(){
        this.props.onFetchStory()
    }
    render(){
        return(
            <div>
                <h1>{this.props.story.title}</h1>
                <p>{this.props.story.body}</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        story: state.story.story
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchStory: (id) => dispatch(actions.fetchStory(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Story);