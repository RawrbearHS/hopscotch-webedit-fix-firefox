// ==UserScript==
// @name         Hopscotch Web Editor Fix (Firefox): Make Blocks Draggable
// @namespace    https://github.com/RawrbearHS/hopscotch-webedit-fix-firefox
// @version      1.0
// @description  Lets you drag blocks in the Hopscotch web editor
// @author       Rawrbear
// @match        https://explore.gethopscotch.com/edit/12ljpflkok
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gethopscotch.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /**
      *  This is polyfill code to fix the source of the error on the web editor,
      *  which breaks in Firefox 104.0 as of 08/27/2022.
      *  For more information, see https://gist.github.com/KilianSSL/774297b76378566588f02538631c3137
    **/
    if (!Element.prototype.scrollIntoViewIfNeeded) {
        Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
            centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;

            var parent = this.parentNode,
                parentComputedStyle = window.getComputedStyle(parent, null),
                parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width')),
                parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width')),
                overTop = this.offsetTop - parent.offsetTop < parent.scrollTop,
                overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight),
                overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft,
                overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth),
                alignWithTop = overTop && !overBottom;

            if ((overTop || overBottom) && centerIfNeeded) {
                parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
            }

            if ((overLeft || overRight) && centerIfNeeded) {
                parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
            }

            if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
                this.scrollIntoView(alignWithTop);
            }
        };
    }
})();
