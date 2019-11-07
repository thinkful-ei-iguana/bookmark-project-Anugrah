/* eslint-disable indent */
import $ from 'jquery';
import api from '.api';
import store from './store';


//function to generate the HTML elements for the bookmark
//objects in store
const generateBookmarkElement = function(bookmarkObj) {
    console.log('generateBookmarkElement has been ran!');
    if (bookmarkObj.expanded === false) {
        return ` <div class="bookmark">
                    <h3 class ="title">${bookmarkObj.title}</h3>
                    ${bookmarkObj.rating} <img src="starpic.jpg" class="ratingImg">
                </div>`
    }

    return ` <div class="bookmark">
                <h3 class ="title">${bookmarkObj.title}</h3>
                <button class="goToUrl" href="${bookmarkObj.url}">Take me there!</button>
                ${bookmarkObj.rating} <img src="starRatingImage" class="ratingImg"/>
                <p class="description">${bookmarkObj.description}</p>
            </div>`
};


//function to put together the bookmark html elements into one block
const generateBoomarkListString = function(bookmarkArr) {
    console.log('generateBookmarkListString has been run!');
    const list = bookmarkArr.map((item) => generateBookmarkElement(item));
    return list.join('');
};




//function to render the state of the store into the dom
const render = function() {

console.log(render has been run!);

let state = store.state;
const bookmarkListString = generateBookmarkElement(store.state);

$('#bookmarkList').html(bookmarkListString);
};












//function to render the menu to add new bookmarks
const generateAddMenu = function() {}

//function to render error message when adding invalid 
const generateError = function(){}

//function to render expanded view of bookmark
const generateExpandedview = function() {}


//function to run all eventlisteners

const eventListeners = function() {


}



export default {
    render,
    generateBookmarkElement,
    generateAddMenu,
    generateError,
    generateExpandedview,
    eventListeners
}