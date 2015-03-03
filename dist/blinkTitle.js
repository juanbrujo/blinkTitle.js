/*
 *  blinkTitle - v0.2
 *  Is a Pure Javascript Implementation of TitleBar Alert or Notification.It Can Perform Blinking of Html Titlebar When Required
 *
 *  https://github.com/argunner/blinkTitle.js
 *  Demo: http://argunner.github.io/blinkTitle.js/
 *
 *  Author: argunner
 *  License: MIT
 *  2015
 */

// To Do's
// 1) Add Timeout Per Notification
// 2) Simplify To JSON Arguments   

var hold = "";

function blinkTitle(msg1, msg2, delay, isFocus, timeout) {
    if (isFocus == null) {
        isFocus = false;
    }
    if (timeout == null) {
        timeout = false;
    }
    if(timeout){
        setTimeout(blinkTitleStop, timeout);
    }
    document.title = msg1;
    if (isFocus == false) {
        hold = window.setInterval(function() {
            if (document.title == msg1) {
                document.title = msg2;
            } else {
                document.title = msg1;
            }

        }, delay);
    }
    if (isFocus == true) {
        var onPage = false;
        var testflag = true;
        var initialTitle = document.title;
        window.onfocus = function() {
            onPage = true;

        };
        window.onblur = function() {
            onPage = false;
            testflag = false;
        };
        hold = window.setInterval(function() {
            if (onPage == false) {
                if (document.title == msg1) {
                    document.title = msg2;
                } else {
                    document.title = msg1;
                }
            }
        }, delay);
    }
}

function blinkTitleStop() {
    clearInterval(hold);
}
