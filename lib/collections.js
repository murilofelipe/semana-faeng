Inscricoes = new Mongo.Collection("inscricoes");

// set up security on Inscricoes collection
Inscricoes.allow({

    // we need to be able to update images for ratings.
    update:function(userId, doc){
        console.log("testing security on image update");
        if (Meteor.user()){// they are logged in
            return true;
        } else {// user not logged in - do not let them update  (rate) the image.
            return false;
        }
    },

    insert:function(userId, doc){
        console.log("testing security on image insert");
        if (Meteor.user()){// they are logged in
            return true;
        }
        else {// user not logged in
            return false;
        }
    }
});
