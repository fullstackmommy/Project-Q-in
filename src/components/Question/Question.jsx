import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import ButtonBar from '../buttons/ButtonBar'
import Typography from '@material-ui/core/Typography'

const Question = ({question, handleClickLike, handleClickUnlike}) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography component="h2">
                        {question.description}
                    </Typography>
                    <Typography component="p">
                        Number of votes: {question.vote}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonBar
                        id={question._id}
                        vote={question.vote}
                        handleClickLike={handleClickLike}
                        handleClickUnlike={handleClickUnlike}/>
                </CardActions>
            </Card>
        </div>
    )
}
export default Question