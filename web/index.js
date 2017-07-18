var  GrapesViewModel = function() {   
    var counter = 0;
    this.newMessage = ko.observable("test");
    this.messages =  ko.observableArray([
      
    ]);

    

    this.sendMessage = function () {
        this.messages.unshift({id: counter++, msg: this.newMessage(), likes: 0 });
    }
}

// Activates knockout.js
ko.applyBindings(new GrapesViewModel());