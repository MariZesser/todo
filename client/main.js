import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/collection.js';
import '../lib/userAccounts.js';
import './main.html';
import './Nav/nav.html';
import './AddProfile/addProf.html';
import './Profile/profile.html';
import './Profile/profile.js';
import './ViewProfile/viewProf.html';
import './ConfirmDelete/CD.html';
import './ConfirmDelete/CD.js';
import './AddTask/addTask.html';
import './AddTask/addTask.js';
import './ListTasks/listTask.html';
import './ListTasks/listTask.js';
import './TrashBin/trashBin.html';
import './TrashBin/trashBin.js';
import './Login/login.html';
import './Login/login.js';

Template.nav.events({
  'click .js-addN'() {
    $("#addModal").modal("show");
  },
});

Template.main.events({
  'click .js-saveProfile'() {
    
    let pic = $("#ProfPic").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let Age = $("#Age").val();
    let date = $("#date").val();
    let Sex = $("#male").prop("checked") ? "male" : "female";
    

    if (validateAddForm(pic,fName, lName,Sex,Age,date)) {
      console.log("that");
      profilesdb.insert({
        "picPath": pic,
        "fname": fName,
        "lname": lName,
        "sex": Sex,
        "age": Age,
        "date": date,
        "createdOn": new Date().getTime(),
        "owner" : Meteor.userId()
      });
      $("#addModal").modal("hide");
    }
  },
  'input #ProfPic'() {
    let path = $("#ProfPic").val();
    path = !path ? "Avatar2.jpg" : path;
    $("#displayPic").prop("src", path);
    console.log(path);
  },
  'click .js-view'() {
    let that = this;
    $("#docId").val(that._id);
    $("#chkMe").html("<h2>" + $("#chkMe").html() + "</h2>profile picture<br>first<br>last<br>age<br>sex<br>description");
    $("#viewModal").modal("show");
  },
  "click .js-delete"() {
    let dId = $("#docId").val();
    $("#conId").val(dId);
    $("#viewModal").modal("hide");
    $("#conDelModal").modal("show");
  }
});

let validateAddForm = (Pp,fn,ln,Sx,Ae,de) => {
  let valid = true;
  $("#ProfPic").removeClass("errorBox");
  $("#fName").removeClass("errorBox");
  $("#lName").removeClass("errorBox");
  $("#Age").removeClass("errorBox");
  $("#date").removeClass("errorBox");
  $("#Sex").removeClass("errorBox");
console.log("profpic",Pp);
  if (!Pp) {
    $("#ProfPic").addClass("errorBox");
    valid = false;
  }
  if (!fn) {
    $("#fName").addClass("errorBox");
    valid = false;
  }
  if (!ln) {
    $("#lName").addClass("errorBox");
    valid = false;
  }
  if (!Sx) {
    $("#Sex").addClass("errorBox");
    valid = false;
  }
  if (!Ae) {
    $("#Age").addClass("errorBox");
    valid = false;
  }
  if (!de) {
    $("#date").addClass("errorBox");
    valid = false;
  }
  return valid;
}
