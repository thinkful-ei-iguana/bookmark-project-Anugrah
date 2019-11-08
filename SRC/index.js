/* eslint-disable indent */
import $ from 'jquery';
import api from './api';
import store from './store';
import bookmarks from './bookmarks';
import './index.css';


const main = function() {

    api.getBookmark()
        .then(res => res.json())
        .then((items) => {
            items.forEach((item) => store.addBookmark(item));
            bookmarks.render();
        });

    bookmarks.eventListeners();
    bookmarks.render();

};

$(main);