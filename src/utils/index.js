import axios from "axios";

export const movieApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
    }
});

export const fetchToken = async () => {
    try {
        const { data } = await movieApi.get('/authentication/token/new');
        const token = data.request_token;
        if (data.success) {
            localStorage.setItem('request_token', token);
            window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};


export const createSessionId = async () => {
    const token = localStorage.getItem('request_token')
    if (token) {
        try {
            const { data: { session_id } } = await movieApi.post('authentication/session/new', {
                request_token: token
            })
            localStorage.setItem('session_id', session_id)
            return session_id
        } catch (err) {
            console.error(err)
            throw err
        }
    }
}