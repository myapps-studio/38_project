import uuid from uuid;

// Zdefiniuj typy akcji oraz kreatory akcji dla następujących zdarzeń:
// -tworzenie komentarza
// -edycja komentarza
// -usuwanie komentarza
// -ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = text => dispatch(editComment(text));
const boundthumbUp = thumb => dispatch(thumbUp(thumb));
const boundthumbDown = thumb => dispatch(thumbDown(thumb));

/*
// add
{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

// remove
{
    type: REMOVE_COMMENT,
    id: 20 // przykładowy id komentarza do usunięcia
}

// edit
{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
}

// thumb_up
{
    type: THUMB_UP_COMMENT,
    id: 20,
    thumb: 1
}

// thumb_down
{
    type: THUMB_DOWN_COMMENT,
    id: 20,
    thumb: 0
}
*/

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function thumbUp(thumb) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumb
    }
}

function thumbDown(thumb) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumb
    }
}

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');
boundEditComment('edytowany komentarz!');
boundRemoveComment(id);
boundthumbUp(thumb);
boundthumbDown(thumb);