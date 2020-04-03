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
    
    let $btn = $(`<a style="
    position: absolute;
    left: 0;
    top: 180px;
    z-index: 9999;
    padding: 10px;
    background: #66ccff;
    border-radius: 15px;
    text-align: center;
" href="https://www.bilibili.com/ranking/">排行榜</button>`);

    let $btn2 = $(`<a style="
    position: absolute;
    left: 0;
    top: 230px;
    z-index: 9999;
    padding: 10px;
    background: #66ccff;
    border-radius: 15px;
    text-align: center;
" href="https://www.bilibili.com/video/online.html">当前在线</button>`);

    $('html').append($btn).append($btn2);
})(jQuery);

/*

平时公祭都是上班、上课，影响不大
这次选在清明节，节假日老百姓不娱乐，难道种地日批吗？弱智政府，傻逼玩意
而且停止娱乐还停在疫情期间，我这天该干嘛？
网上尽是些道德绑架，散发着浓浓恶臭。疫情期间，我好歹也做个志愿者，而且是不要钱的那种，还有荣誉证书可以考证。您也配道德绑架我？

*/

/*

狗日的司马政府你哀悼归哀悼鸣笛归鸣笛。干嘛要封禁老子的娱乐活动啊我叼你妈的，沙比玩意
周末即不看视频又不玩游戏 我干嘛？ 看AV打手沖吗。弱智领导人，虚伪管理者

*/
