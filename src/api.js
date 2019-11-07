/* eslint-disable indent */

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/anugrah/bookmarks'

//GET/read api 
const getBookmark = function() {
    console.log('getBookmark has been run!')
    return fetch(`${BASE_URL}`)
};

//POST/create api
const createBookmark = function (bookmark) {
    let newBookmark = {
        title: bookmark.title,
        url: bookmark.url,
        desc: bookmark.desc,
        rating: bookmark.rating
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