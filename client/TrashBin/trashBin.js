Template.trashBin.helpers({
    theTasks(){
        return tododb.find({"trashBin":true});
    }
});

Template.trashBin.events({
    'click .js-restore'() {
        let listId = this._id;
        tododb.update({_id: listId}, {
            $set:{
                "trashBin": false
            }
        });
    },
    'click .js-remove'() {
        let listId = this._id;
        tododb.remove({_id: listId});
    },
    'click .js-trashCollapseBtn'() {
        if("collapse:", $.trim($(".js-trashCollapseBtn").text()) == "Show Trash Bin"){
            $(".js-trashCollapseBtn").text("Hide Trash Bin");
        }
        else{
            $(".js-trashCollapseBtn").text("Show Trash Bin");
        }
    }
});