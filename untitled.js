// ==UserScript==
// @name         bilibili colorful
// @version      0.0.1
// @description  remove class equal gray
// @author       XIXI
// @license      MIT
// @run-at       document-end
// @match        *://*.bilibili.com/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// ==/UserScript==

jQuery.noConflict();
(function($) {
    $('html').attr('class', '');
})(jQuery);
