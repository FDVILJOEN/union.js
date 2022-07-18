var hello = {
    head: {
        title: 'Hello World'
    },
    body: {
        label: {
            tag: 'label',
            value: 'Please enter your name:'
        },
        txtUser: {
            tag: 'input'
        },
        btnClickMe: {
            tag: "button",
            value: 'Click here',
            onclick: function() {
                alert('Hello ' + this.txtUser.value);
            }
        }
    }
}