let answers = [];

function saveAnswers() {
    localStorage.setItem('answers', JSON.stringify(answers));
}

const answersApi = {
    getAll() {
        const json = localStorage.getItem('answers');
        if(json) {
            answers = JSON.parse(json);
        }
        return answers;
    },
    add(answer) {
        answers.push(answer);
        saveAnswers();
    }
};

export default answersApi;