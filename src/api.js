/* eslint-disable indent */

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/anugrah/bookmarks'

const getBookmark = function() {
    console.log('getBookmark has been run!')
    return fetch(`${BASE_URL}`)
};

const createBookmark = function (title, url, desc, rating) {
    let newBookmark = {
        title: title,
        url: url,
        desc: desc,
        rating: rating
    }

    let newBookmarkJSON = JSON.stringify(newBookmark);

    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newBookmarkJSON
    });
};



export default {
    createBookmark,
    getBookmark
}