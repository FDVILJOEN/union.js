//Reference to Object used to build DOM.
var topLevel;

function buildPage(obj) {
    topLevel = obj;
    //Head
    if (obj.head) {
        //Transfer Attributes
        for (const key in obj.head) {
            document[key] = obj.head[key];
        }
    }

    //Body
    if (obj.body) {
        loadObject(document.body, obj.body, 'topLevel.body');
    }
}

function loadObject(dom, obj, path) {
    for (const key in obj) {
        //Sub Objects.
        if (typeof(obj[key]) == 'object') {
            if (Array.isArray(obj[key])) {
                //Arrays.
                var tag = 'div';
                var thisItem = document.createElement(tag);
                thisItem.id = key;
                dom.appendChild(thisItem);
                loadObject(thisItem, obj[key], path + '.childNodes.' + key);
            }
            else
            {
                //Single Objects.
                var tag = 'div';
                if (obj[key].tag) {
                    tag = obj[key].tag;
                }
                var thisItem = document.createElement(tag);
                thisItem.id = key;
                dom.appendChild(thisItem);
                loadObject(thisItem, obj[key], path + '.' + key);
            }
        }
        else if (typeof(obj[key]) == 'function') {
            //If key begins with 'on' then we have an event.
            if (key.substring(0, 2) == 'on') {
                dom.addEventListener(key.substring(2).toLowerCase(), Function(path + '.' + key + '.call(' + path + ');'));
            }
            else
            {
                //else we have a function we have to call in order to get the value to assign.
                dom[key] = obj[key];
            }            
        }
        else if (key == 'value') {
            dom.innerText = obj[key]
        }
        else if (key != 'tag')
        {
            dom[key] = obj[key];
        }
    }
}

