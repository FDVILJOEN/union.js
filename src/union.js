//Reference to Object used to build DOM.
var topLevel;

//Two Way Mappings.
var mappings = []

//Used for Event Handling.
var proxyHandler = {
    get(target, key) {
        if (key == 'mapObj')  //Don't wrap map objects in proxy,        
        {
            return target[key];
        }
        if (typeof target[key] === 'object' && target[key] !== null) {
          return new Proxy(target[key], proxyHandler)
        } else {
            if (target.domKey) {
                var domObj = document.getElementById(target.domKey);
                if (domObj[key]) {
                    return domObj[key];
                }
                if (key == 'value') {
                    return domObj.innerText;
                }
            }
            return target[key];
        }
    },
    set(obj, prop, value) {
        //Set actual VAL
        obj[prop] = value;
        //Updating existing object.
        if (obj.domKey) {
            if (Array.isArray(obj)) {
                var domObj = document.getElementById(obj.domKey);
                domObj.innerText = '';
                loadObject(domObj, obj, obj.domKey);
                return true;
            }
            else if (obj.domKey == '--head--') {
                document[prop] = obj[prop];
            }
            else if (prop == 'tag') {
                //current object in DOM.
                var currentElement = document.getElementById(obj.domKey);
                //Create new Object.
                var newElement = document.createElement(value);
                newElement.id = currentElement.id;

                //Swop out.
                currentElement.parentNode.replaceChild(newElement, currentElement);

                //Set Attr from js.
                loadObject(newElement, obj, newElement.id);

                //Transfer value that may have changed.
                if (currentElement.value) {
                    newElement.value = currentElement.value;
                    newElement.innerText = currentElement.value;
                }

            } else {
                if (prop == 'value') {
                    document.getElementById(obj.domKey).innerText = value;
                }
                document.getElementById(obj.domKey)[prop] = value;
                return true;
            }
        }
        else
        {
            //Only part without DOM Keys are styling elements.
            loadStyle(document.getElementById('--style--'), topLevel.style)
        }
    }
}

function buildPage(obj) {
    topLevel = new Proxy(obj, proxyHandler);

    mappings = [];

    //Head
    if (obj.head) {
        obj.head.domKey = "--head--";
        //Transfer Attributes
        for (const key in obj.head) {
            document[key] = obj.head[key];
        }
    }

    //Style
    if (obj.style) {
        var styleTag = document.createElement('style');
        styleTag.id = '--style--';
        document.head.appendChild(styleTag);
        loadStyle(styleTag, obj.style)
    }

    //Body
    if (obj.body) {
        loadObject(document.body, obj.body, 'topLevel.body');
    }
}

function loadStyle(dom, style) {
    var styleStrings = [];    
    for (const key in style) {
        if (typeof(style[key]) == 'object') {
            var toAdd = key + " {";
            for (const attr in style[key]) {
                toAdd += attr + ":" + style[key][attr] + ";";
            }
            toAdd += "}"
            styleStrings.push(toAdd);
        }
    }
    dom.innerText = styleStrings.join('\n');
}

function loadObject(dom, obj, path) {
    obj.domKey = path;
    for (const key in obj) {
        //Sub Objects.
        if (typeof(obj[key]) == 'object') {
            if (key != 'mapObj') {
                if (Array.isArray(obj[key])) {
                    //Arrays.
                    var tag = 'div';
                    var thisItem = document.createElement(tag);
                    thisItem.id = path + '.' + key;
                    dom.appendChild(thisItem);
                    loadObject(thisItem, obj[key], path + '.' + key);
                }
                else
                {
                    //Single Objects.
                    var tag = 'div';
                    if (obj[key].tag) {
                        tag = obj[key].tag;
                    }
                    var thisItem = document.createElement(tag);
                    thisItem.id = path + '.' + key;;
                    dom.appendChild(thisItem);
                    loadObject(thisItem, obj[key], path + '.' + key);
                }
            }
        }
        else if (typeof(obj[key]) == 'function') {
            //If key begins with 'on' then we have an event.
            if (key.substring(0, 2) == 'on') {
                dom.addEventListener(key.substring(2).toLowerCase(), Function('applyMappings(); ' + path + '.' + key + '.call(topLevel.body, topLevel);'));
            }
            else
            {
                //else we have a function we have to call in order to get the value to assign.
                dom[key] = obj[key];
            }            
        }        
        else 
        {
            if (key == 'mapAttr' && obj['mapObj']) {
                mappings.push({domKey: obj.domKey, target: obj['mapObj'], attr: obj['mapAttr']})
                var val = obj['mapObj'][obj['mapAttr']];
                dom.innerText = val;
                dom['value'] = val;
            }
            if (key == 'value') {
                dom.innerText = obj[key]
            }
            dom[key] = obj[key];
        }     
    }
}

function applyMappings() {
    mappings.forEach(map => {
        domObj = document.getElementById(map.domKey);
        if (domObj.value) {
            map.target[map.attr] = domObj.value;
        }
        else
        {
            map.target[map.attr] = domObj.innerText;
        }
    });
}