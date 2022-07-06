Template.listTasks.helpers({
    theTasks(){
        return tododb.find();
    },
});

Template.listTasks.events({
    'click .js-erase'() {
        let that=this;
        $("listId").val("hide");
        console.log("adding");
    }
})