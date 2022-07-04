Template.conDelModal.events({
    'click .js-conDel'(){
        $("#conDelModal").modal("hide");
        let cId = $("#conId").val();
        $("#" + cId).fadeOut("slow", () => {
            tododb.remove({
                "_id": cId
            });
       });
    }
});
