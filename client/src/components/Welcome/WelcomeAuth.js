import axios from 'axios';

export default class WelcomeAuth {

    async retrieveWelcome() {
        return axios.get('/welcome')
            .then(reply => {
                return reply.data;
            })
            .catch(err => {
                throw err;
            });
    }
}