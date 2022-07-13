import date from "date-and-time";
Session.set("dateOrder", 1);

Template.listTasks.helpers({
    theTasks(){
        if(Meteor.userId()){
            return tododb.find({"trashBin":false},
                    {sort:{
                        "taskdate" : Session.get("dateOrder")
                        }
                    });
        }
        return tododb.find({"trashBin":false, "private":false});
        
    },
    sortOrder(){
        if(Session.equals("dateOrder", 1)){
            return true;
        }
        return false;
    },
    "dueDays"(){
        let timeRem = date.subtract(this.taskdate, new Date()).toDays();
        if(timeRem < 0){
            timeRem ="Overdue!"
        }
        else if(timeRem < 1){
            timeRem = date.subtract(this.taskdate, new Date()).toHours();
            timeRem = parseInt(timeRem, 10) + " hours";
        }
        else{
            timeRem = parseInt(timeRem, 10) + " days";
        }
        return timeRem;
    }
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
    'click .js-sortDate'() {
        if(Session.equals("dateOrder", 1)) {
            Session.set("dateOrder", -1);
            $(".js-sortDate").removeClass("fa-arrow-down-1-9");
            $(".js-sortDate").addClass("fa-arrow-up-9-1");
        }
        else{
            Session.set("dateOrder", 1);
            $(".js-sortDate").removeClass("fa-arrow-up-9-1");
            $(".js-sortDate").addClass("fa-arrow-down-1-9");
        }
    },
    'click .js-Complete'() {
        let listId = this._id;
        if(this.comp){
            tododb.update({_id:listId}, {
                $set:{
                    comp:false
                }
            }); 
        }
        else{
            tododb.update({_id:listId}, {
                $set:{
                    comp:true
                }
            });
        }
    }
});