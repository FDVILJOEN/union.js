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
            value: "Francois"
        },
        button1: {
            tag: "button",
            value: "Click me",
            onclick: function() {
                alert('Hello ' + this.user.value);
            }
        }
    }
}