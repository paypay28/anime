class Anime {

    // constructor
    constructor() {
        this.Anime =[]
        this.row = document.getElementById('cardRow')
        this.form = document.getElementById('animeform')
        this.section = document.getElementById('cardSection')
    }


    init(){
        this.isValid = true 

        if(this.isValid){
            this.buildCard(this.row,this.country)
        }
    }
}