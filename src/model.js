var model = {
    head: {
        title: "Hello There from the Javascript Object!"
    },
    body: {
        button1: {
            tag: "button",
            value: "Click me now!",
            onClick: function() {
                editBoxName.value = editBoxName.value + " Hello World!"
                button1.disabled = true;
                inputs[1].value = "My Donner!";
            } 
        },
        paragraph: {
            tag: "p"
        },
        editBoxName :{
            tag: 'input'
        },
        inputs: [{
            tag: "button"
        },{
            tag: "button"
        },{
            tag: "button"
        }]
    }
}

function loadModel() {
    buildPage(model);
}



