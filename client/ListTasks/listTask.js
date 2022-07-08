Template.listTasks.helpers({
    theTasks(){
        if(Session.get("filter") === "All")
            return tododb.find({"trashBin":false});
        return tododb.find({"dDate": Session.get("filter")});
    },
});

Template.listTasks.events({
    'click .js-erase'() {
        let listId = this._id;
        tododb.update({_id: listId}, {
            $set:{
                "trashBin": true
            }
        });
    },
    // 'click .js-Complete'() {
        
    // }
});