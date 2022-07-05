Template.addTask.events({
    'click #js-add2'() {
            addNewTask();
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
    console.log("adding",task,duedate);
    let valid = true;
    $("#js-add2TaskGroup").removeClass("errorBox");
    $("#js-addDate").removeClass("errorBox");
    if(task == ""){
        //console.log("Cannot be empty")
        $("#js-add2TaskGroup").addClass("errorBox");
        valid = false;
    }
    if(duedate == ""){
        //console.log("Cannot be empty")
        $("#js-addDate").addClass("errorBox");
        valid = false;
    }
    return valid;
}

let addNewTask = () => {

    
    let newTask = $("#newTask").val();
    let duedate = $("#taskdate").val();
    if (validateTask(newTask,duedate)) {
        
        tododb.insert({
            "task": newTask,
            "taskdate": duedate,
            "private" : $(".fa-xmark").hasClass("d-none")
        });
        $("#newTask").val("");
        $("taskdate").val("");
    }
    
}
