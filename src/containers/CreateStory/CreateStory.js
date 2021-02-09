import React, {Component} from 'react';
import { connect } from "react-redux";
import * as actions from '../../store/actions/index';



class Create extends Component {
    state = {
        stories: [],
        title: '',
        author: '',
        body: '',
        user_id: ''
    }
    componentDidMount () {
        fetch('http://localhost:3000/stories')
        this.props.onFetchStory(this.props.match.params.id);
    }
    handleStorySubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/stories', {
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                body: this.state.body,
                user_id: this.state.user_id
            }),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(createdStory => {
          return createdStory.json();
        })
        // .then( createdStory => console.log(createdStory))
       
        .then(jsonedStory => {
            this.setState({
                title: '',
                author: '',
                body: '',
                user_id: '',
                stories: [jsonedStory, ...this.state.stories]
            })
        }).catch(error => console.log(error));
        // this.props.history.push('/stories');
       
    }
    handleStoryChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
      }
        
        render(){ 
            return(
                <div>
                    <h1>Share your story!</h1>
                    <form name='myForm' onSubmit={this.handleStorySubmit}>
                        <div className="form-group">
                        <h6><label>Title</label></h6>
                        <input className="form-control" type='text' id="title" placeholder="Title" value={this.state.title} onChange={this.handleStoryChange} required/>
                        <br />
                        <h6><label>Author</label></h6>
                        <input className="form-control" type='text' id="author" placeholder="Author" value={this.state.author} onChange={this.handleStoryChange} required/>
                        <br/>
                        <h6><label>Body</label></h6>
                        <input className="form-control" type='textarea' id="body" placeholder="Start typing..." value={this.state.body} onChange={this.handleStoryChange} required/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                    {this.state.title}
                </div>
            );
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


export default connect(mapStateToProps, mapDispatchToProps)(Create);