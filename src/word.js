// defines what a word is
class word {
    constructor(name,definition,pos,lang1,lang2="English") {
        this.name = name;
        this.def = definition;
        this.pos = pos; // will be a class equivalent
        this.lang = lang1;
        this.trans = lang2; // what it is being translated into
    }

    
}