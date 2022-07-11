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
                this.inputs[1].value = "My Donner!";
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
            value: "Whale Hello"
        },{
            tag: "button",
            value: "OKAY THEN"
        },{
            tag: "button",
            value: "Schweeter"
        }]
    }
}


