/* eslint-disable indent */
import $ from 'jquery';
import store from './store';
import api from './api';


//function to generate the HTML elements for the bookmark
//objects in store
const generateBookmarkElement = function(bookmarkObj) {
    console.log('generateBookmarkElement has been ran!');
    if (bookmarkObj.expanded === false) {
        return ` <div class="bookmark">
                    <h3 class ="title" id="${bookmarkObj.id}">${bookmarkObj.title}</h3>
                    ${bookmarkObj.rating} <img src="https://www.clipartwiki.com/clipimg/full/21-219855_gold-stars-png-transparent-background-gold-star.png" class="ratingImg">
                    <button class="delete" id="${bookmarkObj.id}">DELETE</button>
                    </div>`
    }

    return ` <div class="bookmark">
                <h3 class ="title" id="${bookmarkObj.id}">${bookmarkObj.title}</h3>
                <a href="${bookmarkObj.url}">Take me there!</a>
                ${bookmarkObj.rating} <img src="https://www.clipartwiki.com/clipimg/full/21-219855_gold-stars-png-transparent-background-gold-star.png" class="ratingImg"/>
                <p class="description">${bookmarkObj.desc}</p>
                <button class="delete" id="${bookmarkObj.id}">DELETE</button>
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
if (currState.adding === true) {
    let addmenu = generateAddMenuElements();
    $('#addMenu').html(`${addmenu}`);
    submitNewBookmark();
    cancelAdding();
}

const bookmarkListString = generateBookmarkListString(currState.bookmarks);
$('#bookmarkList').html(bookmarkListString);
generateExpandedview();
deleteButton();

};









//function to render error message when adding invalid 
const generateError = function(){}












// functionality concerning expanded view here

//event listener to toggle expanded view of bookmark
const generateExpandedview = function() {
    $('.title').click(function () {
        console.log('generateExpandedview just ran')
        let id = $(this).attr('id');
        console.log(id);
        store.toggleExpand(id);
        render();
    })

}




//event listener for delete button

const deleteButton = function() {
    $('.delete').on('click', function() {
        console.log('delete function ran');
        let id = $(this).attr('id');
        console.log(id);
        api.deleteBookmark(id);
        store.deleteBookmark(id);
        render();
    })

}

















//functionality concerning add button/menu here

//event listener for the add menu button
const addButton = function() {
    $('.options').on('click', '.add-new', event => {
      store.toggleAddMenu();  
      render();  
      });
}
//function to render the menu to add new bookmarks
const generateAddMenuElements = function() {

    return `<form id="addNew">
                <label for="bookmarkTitle">Title:</label>
                <input type="text" name="title" id="bookmarkTitle" />
                <label for="bookmarkURL">New Bookmark URL:</label>
                <input type="text" name="url" id="bookmarkURL" />
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
                
                <button type="submit">Create</button>
                <button type="reset" id="cancelButton">Cancel</button>
            </form>`;
}

//event listener to submit new bookmark info
const submitNewBookmark = function() {
    console.log('submitNewBookmark ran!');
    $('#addNew').submit(function (event) {
        event.preventDefault();
        const newBookmark = {};

        newBookmark.title = $('#bookmarkTitle').val();
        newBookmark.url = $('#bookmarkURL').val();
        newBookmark.desc = $('#descriptionBox').val();
        newBookmark.rating = $('#ratingTool').val();

        api.createBookmark(newBookmark);  
        store.addBookmark(newBookmark);
        render();     
    })
}

//event listener for the cancel button
const cancelAdding = function() {
    $('#cancelButton').on('click',(event) => {
        store.toggleAddMenu();
        $('#addMenu').html('');
        render();
        });
};










//function to initialize eventlisteners

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