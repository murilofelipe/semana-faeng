import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.insertInscricaoForm.events({
    'submit form': function (event) {
        event.preventDefault();
        var nome  = event.target.nome.value;
        console.log("atualizando" + nome);
        var userId = Meteor.userId();
        Inscricoes.insert({nome: nome, userId: userId});
    }
});


Template.updateInscricaoForm.events({
    'submit form': function (event) {
        event.preventDefault();
        var nome  = event.target.nome.value;
        var id = Inscricoes.findOne({userId:Meteor.userId()})._id;
        Inscricoes.update({_id: id}, {$set: {nome:nome}});
    }
});

Template.updateInscricaoForm.helpers({
    nome: function () {
        return Inscricoes.findOne({userId:Meteor.userId()}).nome;
    }
});


Template.main.helpers({
    temCadastro:function () {
        return Inscricoes.findOne({userId:Meteor.userId()});
    }
});

Template.qr.onRendered(function () {
    $('#qrcode').qrcode({
        size: 200,
        text: "http://larsjung.de/qrcode"
    });
});
