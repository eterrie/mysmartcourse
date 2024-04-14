"use strict";

function redirect(page) {
    let uri = document.location.origin;
    window.location.href = `${uri}/${page != undefined ? `src/pages/${page}` : 'index'}.html`;
}
