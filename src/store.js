/* eslint-disable indent */
const state = {
    bookmarks: [{
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: false
    }],
    adding: false,
    error: null,
    filter: 0
};

//function to add new bookmark objects in to the store

const addBookmark = function(bookmarkObj) {
    return state.bookmarks.push(bookmarkObj);
}

//function to convert new bookmark info into an object
const handleNewBookmark = function() {}

//function to toggle add menu
const toggleAddMenu = function() {}

//function to toggle error
const toggleError = function() {}

//function to toggle expanded view of a bookmark obj
const toggleExpand = function() {}





export default {
    state,
    addBookmark,
    handleNewBookmark,
    toggleAddMenu,
    toggleError,
    toggleExpand
}