import uuid from uuid;

// Zdefiniuj typy akcji oraz kreatory akcji dla następujących zdarzeń:
// -tworzenie komentarza
// -edycja komentarza
// -usuwanie komentarza
// -ocenianie +1 / -1 (kciuk w górę/kciuk w dół) komentarza

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const boundAddComment = text => dispatch(addComment(text));

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

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');