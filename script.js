// Stampare in pagina un item per ogni elemento contenuto in un array.

// Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure 
// ciccando su un pulsante, il testo digitato sarà aggiunto alla lista.

//  Implementare anche il metodo restoreElement dopo, per rimettere un elemento completato nella lista dei todo.

const root = new Vue({
    el: '#root',
    data: {
        myList: [
            'Bread.',
            'Seafood.',
            'Pasta and Rice.',
            'Oils and Salad Dressings. ',
            'Sauces and Condiments.',
            'Cereals and Breakfast Foods.',
            'Soups and Canned Goods.',
            'Frozen Foods.',
            'Cheese and Eggs.',
        ],
        deletionsList: [],
        elementsInDeletionsList: false,
        elementsInToDoList: true,
        newElement: '',
    },
    methods: {
        addElement: function() {
            if (this.newElement.trim().length > 0) {
                this.myList.push(this.newElement);
                this.elementsInToDoList = true;
                this.newElement = '';
            } 
        },
        deleteElement: function(element,index) {
            this.deletionsList.push(element);
            this.elementsInDeletionsList = true,
            this.myList.splice(index,1);
            if (this.myList.length == 0) {
                this.elementsInToDoList = false;
            }
        },
        restoreElement: function(deletedElement,index) {
            this.deletionsList.splice(index,1);
            this.myList.push(deletedElement);
            if (this.deletionsList.length == 0) {
                this.elementsInDeletionsList = false;
            } else if (this.myList.length > 0) {
                this.elementsInToDoList = true;
            }
        },
        ultimateDeletion: function(index) {
            this.deletionsList.splice(index,1);
            if (this.deletionsList.length == 0) {
                this.elementsInDeletionsList = false;
            }
        }
    }
    // Hooks
})