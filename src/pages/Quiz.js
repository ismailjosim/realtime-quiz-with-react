import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Answers from '../components/Quiz/Answers';
import MiniPlayer from '../components/Quiz/MiniPlayer';
import ProgressBar from '../components/Quiz/ProgressBar';
import { useAuth } from '../contexts/AuthProvider';
import useQuestions from '../hooks/useQuestions';

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach(question => {
                question.options.forEach(option => {
                    option.checked = false;
                })
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;

        default:
            return state;
    }
}


const Quiz = () => {
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);



    const [qna, dispatch] = useReducer(reducer, initialState);
    const { user } = useAuth();
    const history = unstable_HistoryRouter()

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions
        })

    }, [questions])

    const handleAnsChange = (e, index) => {
        dispatch({
            type: "answer",
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked
        })
    }

    // handle next question
    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
        }
    }
    // handle previous question
    const handlePrevQuestion = () => {
        if (currentQuestion >= 1 && currentQuestion <= questions.length) {
            setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion - 1);
        }
    }
    const handleSubmitQuestion = async () => {
        const { uid } = user;
        // console.log(uid);
        const db = getDatabase();
        const resultRef = ref(db, `result/${ uid }`);
        await set(resultRef, {
            [id]: qna
        });


    }

    // calculate percentage of progress
    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;


    return (
        <>
            { loading && <div>Loading...</div> }
            { error && <div>Error found!</div> }
            { !loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{ qna[currentQuestion].title }</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers options={ qna[currentQuestion].options } handleAnsChange={ handleAnsChange } />
                    <ProgressBar
                        NextQuestion={ handleNextQuestion }
                        PrevQuestion={ handlePrevQuestion }
                        progress={ percentage }
                        submitQuestion={ handleSubmitQuestion }
                    />
                    <MiniPlayer />
                </>
            ) }
        </>
    );
};

export default Quiz;
