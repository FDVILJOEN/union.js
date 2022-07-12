var model = {
    head: {
        title: "Hello There from the Javascript Object!"
    },
    body: {
        button1: {
            tag: "button",
            value: "Click me now!",
            onClick: function() {
                this.editBoxName.value = "Hello World!";
                //this.button1.disabled = true;
                this.inputs[1].value = "Hello";
                this.inputs.push({tag: "input", value: this.editBoxName.value});                
            } 
        },
        paragraph: {
            tag: "p"
        },
        editBoxName :{
            tag: 'input'
        },
        p2: {
            tag: 'p'
        },
        inputs: [{
            tag: "button",
            value: "Hello"
        },{
            tag: "button",
            value: "HEN"
        },{
            tag: "button",
            value: "Sweet"
        }]
    }
}


