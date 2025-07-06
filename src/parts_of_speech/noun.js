// defines a word as a noun
// noun: person, place, thing
// includes proper nouns
class Noun {
    constructor(word,definition,proper=false,lang1,lang2="English") {
        this.word = word;
        this.def = definition;
        this.proper = proper;
        this.lang = lang1;
        this.trans = lang2;
    }

    // methods
    word() {
        return this.word;
    }

    def(){
        return this.def;
    }
}