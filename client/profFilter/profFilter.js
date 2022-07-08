// Session.set("filter", "Ascending");
Template.profFilter.events({
    'click .js-Ascending'(event) {
        Session.set("filter", "Ascending");
    }
});