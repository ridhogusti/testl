import axios from 'axios';
function fetchHeroes() {
    return {
        type: 'FETCH_HEROES',
        payload: axios.get('http://rest.learncode.academy/api/ridhogusti/heroes')
    }
}

export default fetchHeroes;