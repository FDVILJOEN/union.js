var model = {
    head: {
        title: "My new Page"
    },
    body: {
        label: {
            value: "User Name:",
            for: "username"
        },
        user: {
            tag: "input",
            value: ""
        },
        button1: {
            tag: "button",
            value: "Click me",
            onclick: function() {
                alert('Hello World! - ' + this.user.value);
            }
        }
    }
}