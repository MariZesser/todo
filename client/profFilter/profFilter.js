// Session.set("filter", "Ascending");
Template.profFilter.events({
    'click .js-Ascending'() {
        tododb.find({},{$sort:{dueDate:-1}});
        console.log("adding");
    }
});