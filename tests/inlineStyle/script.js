var myPage = {   
    head: {
        title: "My default page"
    },
    body : {
        labelPrompt : {
            style: {
                visibility: 'hidden'
            },
            tag: "label",
            value: "This should not show"
        },
        btnClick: {
            tag:"button",
            value: 'OK',
            onclick: function() {
                this.labelPrompt.style.visibility = 'visible';
            }
        }       
    }
}