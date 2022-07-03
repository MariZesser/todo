Template.profile.events({
    'click .js-rate'(event) {
        let rating = $(event.currentTarget).data('userrating');
        let that = this;
        console.log(that);
        //socialdb.insert({

        //});
    },
});

Meteor.subscribe("name");

Template.profile.helpers({
    profiles(){
      return socialdb.find();
    }
  });