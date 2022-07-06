import React from "react";
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";
import { QuestionCardProps } from "./QuestionCard.type";

const QuestionCard: React.FC<QuestionCardProps> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => (
    <Wrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <>
            {answers.map((answer) => (
                <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </>
    </Wrapper>
);

export default QuestionCard;
