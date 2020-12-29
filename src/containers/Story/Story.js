import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {NavLink} from 'react-router-dom';
import classes from './Story.module.css';




class Story extends Component {

    componentDidMount(){
        // console.log('trying to find id', this.props.match.params.id)
        this.props.onFetchStory(this.props.match.params.id);
    }

    render(){
        return(
            <div className={classes.Story}>
                <div className={classes.Body}>
                    <h1>{this.props.story.title}</h1>
                    <h3>{this.props.story.description}</h3>
                    <p>Author: {this.props.story.author}</p>
                    <p>Created: {this.props.story.created_at}</p>
                    <div className={classes.ImageContainer}>
                        <img src={require('../../images/pexels-jessica-ticozzelli-5670759.jpg')} alt=''/>
                        <p className={classes.PhotographerCredit}>Image by: <a target='_blank' rel="noopener noreferrer" href='https://www.pexels.com/@jersy?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'>Jessica Ticozzelli</a></p>
                    </div>
                    <p>{this.props.story.body}</p>
                <NavLink to={'/stories'}>
                            <button onClick={() => this.props.onDeleteStory(this.props.match.params.id)} type="button" className="btn btn-danger">
                                    Delete Story
                            </button>
                </NavLink>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        story: state.story.story,
        stories: state.stories.stories
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchStory: (id) => dispatch(actions.fetchStory(id)),
        onFetchStories: () => dispatch(actions.fetchStories()),
        onDeleteStory: (id, data, index) => dispatch(actions.deleteStory(id, data, index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Story);