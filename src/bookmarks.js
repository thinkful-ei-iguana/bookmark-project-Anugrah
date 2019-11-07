/* eslint-disable indent */
import $ from 'jquery';
//import api from '.api';
import store from './store';


//function to generate the HTML elements for the bookmark
//objects in store
const generateBookmarkElement = function(bookmarkObj) {
    console.log('generateBookmarkElement has been ran!');
    if (bookmarkObj.expanded === false) {
        return ` <div class="bookmark">
                    <h3 class ="title">${bookmarkObj.title}</h3>
                    ${bookmarkObj.rating} <img src="https://www.clipartwiki.com/clipimg/full/21-219855_gold-stars-png-transparent-background-gold-star.png" class="ratingImg">
                </div>`
    }

    return ` <div class="bookmark">
                <h3 class ="title">${bookmarkObj.title}</h3>
                <button class="goToUrl" href="${bookmarkObj.url}">Take me there!</button>
                ${bookmarkObj.rating} <img src="shttps://www.clipartwiki.com/clipimg/full/21-219855_gold-stars-png-transparent-background-gold-star.png" class="ratingImg"/>
                <p class="description">${bookmarkObj.description}</p>
            </div>`
};


//function to put together the bookmark html elements into one block
const generateBookmarkListString = function(bookmarkArr) {
    console.log('generateBookmarkListString has been run!');
    const list = bookmarkArr.map((item) => generateBookmarkElement(item));
    return list.join('');
};




//function to render the state of the store into the dom
const render = function() {

console.log('render has been run!');

let currState = store.state;
const bookmarkListString = generateBookmarkListString(currState.bookmarks);

$('#bookmarkList').html(bookmarkListString);
};












//function to render the menu to add new bookmarks
const generateAddMenuElements = function() {

    return `<form class="addNew">
                <label for="bookmarkURL">New Bookmark URL:</label>
                <input type="text" name="url" id="bookmarkURL" value="paste URL here" />
                <label for="ratingTool">Rating:</label>
                <select class="ratingTool" name="ratingTool" id="ratingTool">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <label for="descriptionBox">Short Description:</label>
                <input type="text" name="descriptionBox" id="descriptionBox"/>
                
                <button class="cancelButton">Cancel</button>
                <button class="createButton">Create</button>
            </form>`;


}



//function to render error message when adding invalid 
const generateError = function(){}

//function to render expanded view of bookmark
const generateExpandedview = function() {}




//event listener for the add button

const addButton = function() {
    $('.options').on('click', '.add-new', event => {
      let addmenu = generateAddMenuElements();
    
    $('main').html(`${addmenu}`);
    });
}






//function to run all eventlisteners

const eventListeners = function() {
    addButton();


}



export default {
    render,
    generateBookmarkElement,
    generateAddMenuElements,
    generateError,
    generateExpandedview,
    eventListeners
}