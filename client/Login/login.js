Template.Login.events({
    'click .js-logOut'() {
        AccountsTemplates.logout();
        // listTaskTemplates.logout("[private]")
    },
    logout(){
        
    }

});

Template.Login.helpers({
    username(){
        return Meteor.user().username;
    },
    salutation(){
        let lastname = Meteor.user().profile.lastname;
        if(Meteor.user().profile.gender == "male"){
            lastname = "Mr. " + lastname
        }
        else{
            lastname = "Ms. " + lastname
        }
        return lastname;
    }
});