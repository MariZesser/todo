import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/collection.js';
import './main.html';
import './Nav/nav.html';
import './AddProfile/addProf.html';
import './Profile/profile.html';
import './Profile/profile.js';
import './ViewProfile/viewProf.html';
import './ConfirmDelete/CD.html';

Template.nav.events({
  'click .js-add'() {
    $("#addModal").modal("show");
  }
});

Template.main.events({
  'click .js-saveProfile'() {
    // grad data from fields
    let pic = $("#Profpic").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let Age = $("#Age").val();
    let date = $("#date").val();
    let Sex = $("#male").prop("checked") ? "male" : "female";
    let task = $("#public").prop("checked") ? "public" : "private";
    

    if (validateAddForm(fName, lName,Sex,pic,Age,date)) {
      socialdb.insert({
        "picPath": pic,
        "fname": fName,
        "lname": lName,
        "sex": Sex,
        "age": Age,
        "date": date,
        "task": Task,
        "createdOn": new Date().getTime()
      });
      $("#addModal").modal("hide");
    }
  },
  'input #profPic'() {
    let path = $("#Profpic").val();
    path = !path ? "unisex-avatar.png" : path;
    $("#displaypic").prop("src", path);
    console.log(path);
  },
  'click .js-view'() {
    let that = this;
    $("#docId").val(that._id);
    $("#chkMe").html("<h2>" + $("#chkMe").html() + "</h2>profile picture<br>first<br>last<br>age<br>sex<br>description");
    //console.table(that);
    $("#viewModal").modal("show");
  },
  "click .js-delete"() {
    let dId = $("#docId").val();
    console.log (dId);
    $("#viewModal").modal("hide");
    $("#conDelModal").modal("show");
    $("#" + dId).fadeOut("slow", () => {
       socialdb.remove({
         "_id": dId
       });
    });
  }
});

let validateAddForm = (fn, ln,Sx,pc,Ae,de,Tk) => {
  let valid = true;
  $("#fName").removeClass("errorBox");
  $("#lName").removeClass("errorBox");
  $("#Age").removeClass("errorBox");
  $("#pic").removeClass("errorBox");
  $("#date").removeClass("errorBox");
  $("#Sex").removeClass("errorBox");
  $("#task").removeClass("errorBox");

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
  if (!pc) {
    $("#pic").addClass("errorBox");
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
  if (!Tk) {
    $("#task").addClass("errorBox");
    valid = false;
  }
  return valid;
}



// profile
// image
// name
// age
// sex