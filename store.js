/* eslint-disable indent */
const store = {
    bookmarks: [],
    adding: false,
    error: null,
    filter: 0
};

//function to add new bookmark objects in to the store

const addBookmark = function(bookmarkObj) {
    return store.bookmarks.push(bookmarkObj);
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
    store
}