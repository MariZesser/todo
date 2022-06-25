import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import bootstrap from 'bootstrap';
import { createPopper } from '@popperjs/core';
import './main.html';
import './Nav/Nav.html';
import './AddProfile/AddProfile.html';
import './Profile/Profile.html';
import './ViewProfile/ViewProfile.html';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      let Sex = $("#male").prop("checked") ? "male" : "female";
  
      if (validateAddForm(fName, lName,Sex,pic)) {
        socialdb.insert({
          "picPath": pic,
          "fname": fName,
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