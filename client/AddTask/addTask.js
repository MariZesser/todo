import date from 'date-and-time';

Template.addTask.events({
    'click #js-add2'() {
            addNewTask();
            if ($(".fa-xmark").hasClass("d-none")) {
                $(".fa-xmark").removeClass("d-none");
                $(".fa-check").addClass("d-none");
            }
        },
      'keypress #newTask'(event){
        if(event.keyCode == 13) {
                addNewTask();
            }
        },
        'keypress #taskdate'(event){
            if(event.keyCode == 13) {
                adddate();
            }
        },
      'click .privateTask'() {
        if ($(".fa-xmark").hasClass("d-none")) {
            $(".fa-check").addClass("d-none");
            $(".fa-xmark").removeClass("d-none");
        }
        else {
            $(".fa-check").removeClass("d-none");
            $(".fa-xmark").addClass("d-none");
        }
    }
});

let validateTask = (task,duedate) => {
    let valid = true;
    $("#js-add2TaskGroup").removeClass("errorBox");
    $("#js-addDate").removeClass("errorBox");
    if(task == ""){
        $("#js-add2TaskGroup").addClass("errorBox");
        valid = false;
    }
    if(duedate == ""){
        $("#js-addDate").addClass("errorBox");
        valid = false;
    }
    return valid;
}

let addNewTask = () => {

    
    let newTask = $("#newTask").val();
    let duedate = $("#taskdate").val();
    if(!duedate){
        duedate = new Date();
        duedate = date.addDays(duedate, 1);
        $("#taskdate").val(date.format(duedate, 'YYYY-MM-DD'));
    }
    else{
        duedate = date.parse(duedate, 'YYYY-MM-DD');
    }
    if (validateTask(newTask)) {
        
        tododb.insert({
            "task": newTask,
            "taskdate": duedate,
            "private" : $(".fa-xmark").hasClass("d-none"),
            "trashBin": false
        });
        $("#newTask").val("");
        $("#taskdate").val("");
    }
    
}
