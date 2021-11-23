async function isReady() {
    console.log(`fonts are loading : ${performance.now().toFixed(2)}ms`);
    let ready = await document.fonts.ready;
    if (ready) {
        showfontfamily();
        document.getElementById("overlay").classList.add("hide");
        console.log(`fonts are loaded : ${performance.now().toFixed(2)}ms`);
    }
}

(function (win) {
    var style = null;
    function createClass(name, rules) {
        if (typeof rules != "string") {
            rules = JSON.stringify(rules).trim();
        }

        if (rules.startsWith("{") && rules.endsWith("}")) {
            rules = rules.substring(1, rules.length - 1);
        }

        if (style == null) {
            style = document.createElement("style");
            style.type = "text/css";
            var head = document.getElementsByTagName("head");
            if ((head.length = 0)) {
                var h = document.createElement("head");
                document.insertBefore(h, document.body);
                head = [h];
            }
            head[0].appendChild(style);
        }

        var rule;
        if (!(style.sheet || {}).insertRule) {
            rule = (style.styleSheet || style.sheet).addRule(name, rules);
        } else {
            style.sheet.insertRule(name + "{" + rules + "}", 0);
            rule = style.sheet;
        }
        return rule;
    }

    function removeNode(node) {
        if (node.remove) {
            node.remove();
        } else {
            var pn = node.parentElement;
            if (pn != null) {
                pn.removeChild(node);
            }
        }
    }

    createClass(
        "@font-face",
        "{ font-family: 'void';  src: url(data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPQAA0AAAAAJLwAAAN2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GYACCehEICrcUtUcLgVYAATYCJAODGgQgBYQrB4IOGy8iyD4M2GTIPrT6WF2CYVmsrZSME0Lxo0HkLsnMe3J+bjz8/1jtvj/u6wnzjEfTZlY97lD30CyaNpNQaV4SibwX23xgzQx8YoKmJQvZq6ZBWjJtbams7UgryfyPub1/XCfUSbdKmihiPrNKphKi5QzxL7t7f4Ygsik2JcsCqWjBhCpFOWuA+r3/lb/f/ynl4AsvOYHFxycux78I1qIX+gd5kXU+ZsO7wLswbYM/aGDRxjV8TPCAshIIMC3BsAwDkAAb0NvIC+Bt1UII+PmLFgF/hd0tbtmBKvpAEsJFJIuEZDoXOdKdvlnrANSzuI5ODoqTBnPXWUMoMLdg3mfM5HgyMvzfCugCzEGQYQ45BQFX1ASmGBwDbTaYhJrjHt5r10f62D9QM6cHAk2AuaL8WWyod/QWEE4QLaFWFCqRyTS5fKGWdOtLt+d0B+sPBEPhSDQWTyRT6Uw2ly8US+VKtVZv8IIoyYqqQd9Ny3bcZqvd6fb6g+FoPJnO5ovlar3Z7vYA5ScZ7ex193Bz+4z/ClwC/AB8oXoA1Q/QBEggoUqTYA8V8QP3xWofHHUvrXZRqXfN8qbGV8YZV/BYWfkBegAgFnoLMY558+Pt8rg7Lt/z7D56vHHjeA/kHpUZZIyeL9n5vJD5V237BwsBgH8gRAhBCAmRRAYRurBwyYHg13/L7+pCvTFrmXM6isP3aQYoSiBYmswqCfwfekQgMH26vOBlp5nIt6nNIJs88OmzLcScJXAJBwUBOeW2FwjQk4KAkLULgaTgJAIZWZcRyMq6KUBOxX0B8rLeC1DT8waBuokUYKIpYQXQyFC0nUzq9pMZRReBLHKDzOlbk3lFr8maFR5HqdvkgxFXG6MrdRFjNCViJUaL5+QiVrjAwbN9F7h5QMLZB9QKuCbhOcOWi97AARc3ldBBDi8bFfJTmJ/1iItcwZOIMfIycmDvY6ScyfmvdqFTF5QimmrIbmrhJOdJlQqCBU9IMJG7EXVZ2rAZzfk/h3ThhdtKRD2rDSRULcKD5KXtU+4+qq9BUUlZRVVNXUOTnYOTi5sHjkCi0BgsjpePX0BQSFhEVExcQlJKWkZWTl5BUUlZRVVNXQNPIJLIFCqNwWSxOVxNLW0dXT19A0MjYxNTM3MLSytrG1s7ewffpMhE1htvffTO++5q7O2mciQwb+6tAgAAAA==) format('woff2'), url(data:application/font-woff;charset=utf-8;base64,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) format('woff'); }"
    );

    var tests = document.createElement("span");
    tests.innerHTML = "0123";
    tests.style.display = "inline-block";
    tests.style.fontFamily = "void";
    document.body.appendChild(tests);
    setTimeout(function () {
        removeNode(tests);
    }, 0);

    function getRenderedFontFamily(elm, computedstyle) {
        var cs =
            typeof computedstyle == "undefined"
                ? win.getComputedStyle(elm)
                : computedstyle;
        var fontF = (cs.fontFamily || elm.style["font-family"] || "").replace(
            /['"]*/g,
            ""
        );
        var tfontF = fontF.split(",");
        var tests = document.createElement("span");
        tests.innerHTML = "0123";
        tests.style.display = "inline-block";
        tests.style.fontFamily = "void";
        elm.appendChild(tests);
        var refcs = window.getComputedStyle(tests);
        var refw = refcs.width;
        var tested = {};
        while (tfontF != null) {
            for (var i = 0; i < tfontF.length; i++) {
                if (tested[tfontF[i]]) continue;
                tests.style.fontFamily = tfontF[i] + ", void";
                if (refcs.width != refw) {
                    removeNode(tests);
                    return tfontF[i].trim();
                }
                tested[tfontF[i]] = true;
            }
            if (elm.parentElement) {
                elm = elm.parentElement;
                var cs1 = win.getComputedStyle(elm);
                fontF = (
                    cs1.fontFamily ||
                    elm.style["font-family"] ||
                    ""
                ).replace(/['"]*/g, "");
                tfontF = fontF.split(",");
            } else {
                tfontF = null;
            }
        }
        removeNode(tests);
    }
    win.getRenderedFontFamily = getRenderedFontFamily;
})(window);

function showfontfamily() {
    document.getElementById("fontfamily").innerText =
        '"' + getRenderedFontFamily(document.getElementById("test")) + '"';
}
isReady();
