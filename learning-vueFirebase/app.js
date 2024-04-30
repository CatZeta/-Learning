const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am THE template</h2>'

    data() {
        return {
            showBooks: true,
            number: 20,
            x: 0,
            y: 0,
            books:[
               { title:'book1', author: 'Author1', isFav: true},
               { title:'book2', author: 'Author2', isFav: false},
               { title:'book3', author: 'Author3', isFav: true},
            ]
        }
    }, 
    methods: { 
        changeTitle (title){
            // o this referencia a presente componente, neste caso app
           // this.title = 'Jura que doi'
           this.title = title
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        handleEvent(e, data) {
            console.log(e, e.type)

            if(data){
                console.log('Data: ', data)
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY        
        }, 

        toggleFav(book) {
            book.isFav = !book.isFav
            console.log(book.isFav)
        }

    }
})

app.mount('#app')
