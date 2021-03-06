import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Question from '../Question/Question'
import {getQuestions} from '../../services/questionService'

class QuestionsList extends Component {
    state = {
        questions: getQuestions(),
        searchString: '',
        filteredList: []
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
            const filtered = this
                .state
                .questions
                .filter(q => q.description.toLowerCase().includes(this.state.searchString))
            this.setState({filteredList: filtered})
        } else {
            this.setState({searchString: ''})
            const allQuestions = getQuestions()
            this.setState({filteredList: allQuestions})
        }

    }

    setVoteState = (id, operator) => {
        const copy = [...this.state.questions];
        copy
            .find(element => element._id === id)
            .vote += operator;
        this.setState({questions: copy});
    }

    handleClickLike = (id) => {
        this.setVoteState(id, 1)
    }

    handleClickUnlike = (id) => {
        this.setVoteState(id, -1)
    }

    componentDidMount() {
        const allQuestions = getQuestions()
        this.setState({filteredList: allQuestions});
    }

    render() {
        return (
            <div>
                {this.state.questions
                    ? (
                        <div>
                            <TextField
                                style={{
                                padding: 24
                            }}
                                id="searchInput"
                                placeholder="Search for Questions"
                                margin="normal"
                                onChange={this.onSearchInputChange}/>
                            <Grid
                                container
                                spacing={24}
                                style={{
                                padding: 24
                            }}>
                                {this
                                    .state
                                    .filteredList
                                    .map(currentQuestion => (
                                        <Grid key={currentQuestion._id} item xs={12} sm={6} lg={4} xl={3}>
                                            <Question
                                                key={currentQuestion._id}
                                                id={currentQuestion._id}
                                                question={currentQuestion}
                                                handleClickLike={this.handleClickLike}
                                                handleClickUnlike={this.handleClickUnlike}/>
                                        </Grid>
                                    ))}
                            </Grid>
                        </div>
                    )
                    : "No questions found"}
            </div>
        )
    }
}
export default QuestionsList;