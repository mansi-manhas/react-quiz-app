import React from "react";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export interface QuestionCardProps {
    question: string
    answers: string[]
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject
    questionNumber: number
    totalQuestions: number
}
