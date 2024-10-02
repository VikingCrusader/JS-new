//背景：英雄联盟，要求写6个对象
var Karma = {
    role : "Support",
    type : "Enchanter / Mage",
    fullrole : function (){
        console.log(this.type + " " + this.role);
    }
}
Karma.fullrole();

var Darius = {
    role : "Toplaner",
    type : "Brusier, tank, immobile",
    fullrole : function (){
        console.log(Darius.type + " " + Darius.role);
    },
    ultimate : function (){
        console.log("Darius leaps to execute an enemy champion with a powerful strike, dealing true damage.");
    }
}
Darius.fullrole();
Darius.ultimate();