import axios from 'axios';

const KEY = 'AIzaSyCk01iPQDV7SxzLFSfLjCtZjEDDSgi271k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});