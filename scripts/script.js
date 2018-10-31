"use strict";
$(document).ready(() => {

    $.get("https://www.reddit.com/r/cozyplaces/.json", (data) => {
        const results = data.data.children;
        for (let i = 0; i <= 9; i++) {
            console.log(results[i]);
            $(".main-container").append(`
            <section class="result">
                <h3 class="title">${results[i].data.title}</h3>
                <img class="image" src="${results[i].data.thumbnail}">
                <a class="link" href="${results[i].data.url}">Source</a>
            </section>
            `);
        }
    });




});