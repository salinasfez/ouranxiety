import {connect} from 'react-redux';
import React, { Component } from 'react';
import axios from 'axios';
import * as actions from '../store/actions/index';
import classes from './Stories.module.css';
import {NavLink} from 'react-router-dom';
import Story from '../components/Story/Story';



class Stories extends Component {
   componentDidMount () {
       this.props.onFetchStories();
    //    this.props.onFetchStory();
   }
   fetchStory = (id) => {
       axios.get('http://localhost:3000/stories/' + id)
        .then(res => {
            console.log('testing 2', res.data);
            this.props.history.push('/story');
            }
        )
        .catch(error => {
            console.log(error);
        })
   }
    render(){
        let monthCreated = new Date().getMonth() 
        let dayCreated = new Date().getDate() 
        let yearCreated =  new Date().getFullYear();
        return(
            <div className={classes.MainContainer}>
                <div className={classes.Quote}>
                    <h1>“Your goal is not to battle with the mind, but to witness the mind.”</h1><br/>
                    <h4>– Swami Muktananda</h4> 
                </div>
                <div className={classes.Stories}>
                {this.props.stories.map((story, index) => {
                    return (
                        <div key={story.id}>
                            <h1 onClick={ () => this.props.onFetchStory(story.id)}>{story.title}</h1>
                            <h4>{story.description}</h4>
                            <h6>Author: {story.author}</h6>
                            <h6>Created: {monthCreated}/{dayCreated}/{yearCreated}</h6>
                            {/* <Images /> */}
                            <div className={classes.ImageContainer}>
                                <img src={require('../images/pexels-jessica-ticozzelli-5670759.jpg')} alt=''/>
                                <p>Image by: <a target='_blank' rel="noopener noreferrer" href='https://www.pexels.com/@jersy?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'>Jessica Ticozzelli</a></p>
                            </div>
                            <div className={classes.ContentBody}>
                                <p>{story.body}</p>
                            </div>
                            <NavLink to={`/stories/${story.id}`}>
                                <button type="button" className="btn btn-outline-secondary">
                                    Read Story
                                </button>
                            </NavLink>
                        </div>
                    )
                })}
                </div>
                <Story />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        stories: state.stories.stories,
        story: state.story.story,
        story: state.story.id
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchStories: () => dispatch(actions.fetchStories()),
        onFetchStory: (id) => dispatch(actions.fetchStory(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);