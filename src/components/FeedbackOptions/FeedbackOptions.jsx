

const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return <div>
        {options.map(button => 
            <button type="button" onClick={onLeaveFeedback} name={button} key={button}>{button}</button>
        )}
    </div>
}

export default FeedbackOptions;