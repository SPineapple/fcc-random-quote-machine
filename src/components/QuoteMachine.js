import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
const cardStyle = {
			background:'#b2ebf2'
		}

const QuoteMachine = (props) => (

	
	// <React.Fragment>
	<Card style={cardStyle}>
	<CardContent>		

				<Typography id="text" variant="h5" >
				{props.selectedQuote.quote} <br/><br/> | <span id="author">{props.selectedQuote.author}</span>
				</Typography>

	</CardContent>
	<CardActions>
    <Button id="new-quote" size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
    <IconButton
    id="tweet-quote"
    target="_blank"
    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}
    	~${props.selectedQuote.author}`)}
    >
    	<FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
    </IconButton>
    </CardActions>
    </Card>
    // </React.Fragment>
);
  



export default QuoteMachine;



