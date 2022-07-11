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
        p1: {tag: "br"},
        button1: {
            tag: "button",
            value: "Click me",
            onclick: function() {
                alert('Hello World! - ' + this.user.value);
            }
        }
    },
    style: {
        body: {
            "font-family": "verdana",
            color: "red",
            padding: "8px"
        },
        input: {
            "font-family": "verdana",
            color: "blue",
            "border-radius": "10px"
        }

    }
}