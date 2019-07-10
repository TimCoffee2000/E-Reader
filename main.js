class Book{
    constructor(name, text, author, price){
        this.name = name;
        this.page = 1;
        this.tempPage = 0;
        this.tempPage1 = 0;
        this.text = text;
        this._author = author;
        this._price = price;
    }

    get author(){
        return this._author;
    }

    get price(){
        return this._price;
    }

    startReading(){
        let arr = this.text.split('');
        let page = new Array();
        for(let i = 0; i < 200; i++){
            page[i] = arr[i];
        }
        this.text1 = this.text;
        return this.text1 = page.join('');
    }
    
    nextPage(){
        this.page++;
        if(this.page == 2)
            this.tempPage +=2;
        this.tempPage +=2;
        let arr = this.text.split('');
        let page = new Array();
        for(let i = 0; i < this.tempPage*100; i++){
               page[i] = arr[i];
        }
        for(let i = 0; i < this.tempPage*100-200; i++){
            delete page[i];
        }
        this.text1 = this.text;
        return this.text1 = page.join('');
    }

    prevPage(){
        this.page--;
        this.tempPage -=2;
        let arr = this.text.split('');
        let page = new Array();
        for(let i = 0; i < this.tempPage*100; i++){
            page[i] = arr[i];
        }
        for(let i = 0; i < this.tempPage*100-200; i++){
            delete page[i];
        }
        this.text1 = this.text;
        this.tempPage1 = page.join('');
        return this.text1 = page.join('');
    }

    jumpTo(value){ //returns only one page
        this.page = value;
        this.tempPage = value*2;
        let arr = this.text.split('');
        let page = new Array();
        for(let i = 0; i < this.tempPage*100; i++){
            page[i] = arr[i];
        }
        for(let i = 0; i < this.tempPage*100-200; i++){
            delete page[i];
        }
        this.text1 = this.text;
        return this.text1 = page.join('');
    }

    find(value){
        let findNum = this.text.indexOf(value), count1 = 0, count2 = 200;
        for(let i = 1; i < this.text.length; i++) {
            if (findNum >= count1 && findNum < count2)
                return this.jumpTo(i);
            count1 += 200;
            count2 += 200;
        }
    }

    continue(){
        return this.tempPage1;
    }

    author(){
        return this._author;
    }

    price(){
        return this._price;
    }
}


let book = new Book("Attic",
    "No one succeeds in obtaining a prominent place in literature, or in\n" +
    "surrounding himself with a faithful and steady circle of admirers drawn\n" +
    "from the fickle masses of the public, unless he possesses originality," +
    "constant variety, and a distinct personality. It is quite possible to\n" +
    "gain for a moment a few readers by imitating some original feature in\n" +
    "another; but these soon vanish and the writer remains alone and" +
    "forgotten. Others, again, without belonging to any distinct group of\n" +
    "authors, having found their standard in themselves, moralists and\n" +
    "educators at the same time, have obtained undying recognition." +
    "Of the latter class, though little known outside of France, is Emile\n" +
    "Souvestre, who was born in Morlaix, April 15, 1806, and died at Paris\n" +
    "July 5, 1854. He was the son of a civil engineer, was educated at the" +
    "college of Pontivy, and intended to follow his father's career by\n" +
    "entering the Polytechnic School. His father, however, died in 1823, and\n" +
    "Souvestre matriculated as a law-student at Rennes. But the young student\n" +
    "soon devoted himself entirely to literature. His first essay, a tragedy,\n" +
    "'Le Siege de Missolonghi' (1828), was a pronounced failure. Disheartened\n" +
    "and disgusted he left Paris and established himself first as a lawyer in\n" +
    "Morlaix. Then he became proprietor of a newspaper, and was afterward\n" +
    "appointed a professor in Brest and in Mulhouse. In 1836 he contributed\n" +
    "to the 'Revue des Deux Mondes' some sketches of life in Brittany, which\n" +
    "obtained a brilliant success. Souvestre was soon made editor of La Revue\n" +
    "de Paris, and in consequence early found a publisher for his first novel,\n" +
    "'L'Echelle de Femmes', which, as was the case with his second work,\n" +
    "Riche et Pauvre', met with a very favorable reception. His reputation\n" +
    "was now made, and between this period and his death he gave to France\n" +
    "about sixty volumes--tales, novels, essays, history, and drama.\n" +
    "\n" +
    "A double purpose was always very conspicuous in his books: he aspired to\n" +
    "the role of a moralist and educator, and was likewise a most impressive\n" +
    "painter of the life, character, and morals of the inhabitants of\n" +
    "Brittany.\n" +
    "\n" +
    "The most significant of his books are perhaps 'Les Derniers Bretons\n" +
    "(1835-1837, 4 vols.), Pierre Landais (1843, 2 vols.), Le Foyer Breton\n" +
    "(1844, 2 vols.), Un Philosophe sons les Toits, crowned by the Academy\n" +
    "(1850), Confessions d'un Ouvrier (1851), Recits et Souvenirs (1853),\n" +
    "Souvenirs d'un Vieillard (1854); also La Bretagne Pittoresque (1845),\n" +
    "and, finally, Causeries Historiques et Litteraires (1854, 2 vols.)'. His\n" +
    "comedies deserve honorable mention: 'Henri Hamelin, L'Oncle Baptiste\n" +
    "(1842), La Parisienne, Le Mousse, etc'. In 1848, Souvestre was appointed\n" +
    "professor of the newly created school of administration, mostly devoted\n" +
    "to popular lectures. He held this post till 1853, lecturing partly in\"\n\n", "Emile Souvestre", "10$");

console.log(book.startReading());
console.log(book.nextPage());
console.log(book.nextPage());
console.log(book.prevPage());
console.log(book.startReading());
console.log(book.nextPage());
console.log(book.jumpTo(6));
console.log(book.find('Henri Hamelin'));
console.log(book.continue());
console.log(book.author());
console.log(book.price());
