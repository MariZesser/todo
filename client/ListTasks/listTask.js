import date from "date-and-time";
Session.set("dateOrder", 1);

Template.listTasks.helpers({
    theTasks(){
        return tododb.find({"trashBin":false},
         {sort:{
            "taskdate" : Session.get("dateOrder")
            }
        });
    },
    sortOrder(){
        if(Session.equals("dateOrder", 1)){
            return true;
        }
        return false;
    },
    "dueDays"(){
        console.log(date.subtract(new Date(), duedate));
        return date.subtract(new Date(), duedate);
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
    }
});