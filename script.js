// Stampare in pagina un item per ogni elemento contenuto in un array.

// Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure 
// ciccando su un pulsante, il testo digitato sarà aggiunto alla lista.

const root = new Vue({
    el: '#root',
    data: {
        myList: [
            'Bread.',
            'Seafood.',
            'Pasta and Rice.',
            'Oils and Salad Dressings, ',
            'Sauces and Condiments.',
            'Cereals and Breakfast Foods.',
            'Soups and Canned Goods.',
            'Frozen Foods.',
            'Cheese and Eggs.',
        ],
        newElement: '',
    },
    methods: {
        deleteElement: function(index) {
            this.myList.splice(index,1);
        },
        addElement: function() {
            this.myList.push(this.newElement);
        }
    }
    // Hooks
})