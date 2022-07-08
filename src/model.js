var model = {
    head: {
        title: "Hello There from the Javascript Object!"
    },
    body: {
        button1: {
            tag: "button",
            value: "Click me now!",
            onClick: function() {
                this.editBoxName.value = this.editBoxName.value + " Hello World!"
                this.button1.disabled = true;
                this.inputs[1].value = "My Donner!";
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



