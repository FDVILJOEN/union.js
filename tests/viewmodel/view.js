var viewObj = {
    head: {
        title: 'union.js - view-model example'
    },
    body: {
        header: { tag: 'h4', value: 'Order Details:' },
        lblInvoiceDate: { tag: 'label', value: 'Invoice Date: ' },
        editInvoiceDate: { tag: 'input', type: 'date', mapObj: dataObject, mapAttr: 'InvoiceDate' },
        br: {tag: 'p'},
        lblCustomer: { tag: 'label', value: 'Customer: ' },
        editCustomer: { tag: 'input', mapObj: dataObject, mapAttr: 'Customer'},
        br2: {tag: 'p'},
        lblAddress: { tag: 'label', value: 'Delivery Address: ' },
        editDeliveryAddress: { tag: 'input', mapObj: dataObject, mapAttr: 'DeliveryAddress'},
        br3: {tag: 'p'},
        buttonSave: {tag: 'button', value: 'Update', onclick: function() {
            //At this point all changes on the HTML page will already be applied to the object.
            alert(JSON.stringify(dataObject));
        }}
    },
    style: {
        body: {"font-family": "Verdana"},
        label: {width: '170px', display: 'inline-block'},
        input: { width: '200px', 'border-radius': '5px', 'border': '1px solid black'}
    }
}