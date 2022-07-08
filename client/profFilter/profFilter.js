Session.set("filter", "All");
Template.profFilter.events({
    'click .js-Ascending'(event) {
        // tododb.find({},{$sort:{dueDate:-1}});
        // console.log("adding");
        Session.set("filter", "Ascending");
    },
    'click .js-Descending'(event) {
        // tododb.find({},{$sort:{dueDate:-1}});
        // console.log("adding");
        Session.set("filter", "Descending");
    },
    'click .js-Status'(event) {
        // tododb.find({},{$sort:{dueDate:-1}});
        // console.log("adding");
        Session.set("filter", "Status");
    },
});