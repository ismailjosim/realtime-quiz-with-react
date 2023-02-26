import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';


const useQuestions = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);



    useEffect(() => {
        const fetchQuestion = async () => {
            const db = getDatabase();
            const quizRef = ref(db, "quiz/" + videoID + "/questions");
            const QuizQuery = query(quizRef, orderByKey())

            try {
                setError(false)
                setLoading(true)

                // request firebase database
                const snapshot = await get(QuizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                    });
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true)
            }

        }
        fetchQuestion()
    }, [videoID]);


    return {
        loading,
        error,
        questions
    }

};

export default useQuestions;
