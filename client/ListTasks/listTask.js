Template.listTasks.helpers({
    theTasks(){
        return tododb.find({"trashBin":false});
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
    }
});