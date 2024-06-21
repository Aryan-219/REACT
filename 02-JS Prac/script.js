const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();
// books

const book = getBook(3);

// const author = book.author
// const title = book.title

// const {title,author,genres, hasMovieAdaptation, reviews}  = book
// const { title, author, genres, ...otherProperties } = book;
// console.log(otherProperties.pages)
// console.log(title, author)

// const [a,b,...otherBooks] = data; //Here we used rest operator. This is to create another array with the remaining elements of RHS array

// console.log(otherBooks[0])
// console.log(a)
// console.log(a.title)

// genres
// const [x,y,z] = genres
// x

/*
// Spread Operator
// const newGenres = [...genres,'epic fantasy'] //Here ... is serving as spread operator. It puts the values inside the array one by one
// newGenres

// Suppose we want to create a new book with allthe properties but also with one of our custom properties
// const updatedBook = {book, moviePublicationDate:'2001-12-19'} //This doesn't work as expected
// const updatedBook = {...book, moviePublicationDate:'2001-12-19', pages:1210} //Therefore we use spread operator //Also we can update an existing property of an object, here we update the pages property
const updatedBook = {
  pages: 1210,
  ...book,
  moviePublicationDate: "2001-12-19",
}; //The important point to note here is that the order of modifying the property and spread operator matters. here the spread operator overrided the pages property
updatedBook;



// Template Literals
const summary = `${title} is a book ${2+5}` //Basically, any JavaScript expression that returns a value immediately can be placed inside the ${}
summary
*/

/*
// Short Cicuiting
// falsy values : null, undefined, 0, ''
console.log(true && "watch this") 
console.log(false && "watch this") 

console.log(true || "watch this")
console.log(false || "watch this")

// Nullish coalescing operator
// If while using logical OR operator for short circuiting , we encounter 0 or an empty string, It will take it as falsy value and short circuit, but we may not want that to happen in certain scenarios, there fore for this, javascript provides this nullish coalescing operator, which treats 0 and empty string as as truthy value
console.log(0 ?? "there")
console.log('' ?? "there")
// hence proved that it treats 0 and empty string as truthy value
*/

/*
// Optional Chaining
// When we have to traverse javascript objects using the dot operator, at some phase we may encounter undefined values and it may result in error, 
// To prevent this from happening we have optional chaining operator, which does not evaluate the expression after it if undefined is encountered before it
// function getTotalReviewCount(book){
//   return book.reviews.goodreads.reviewsCount + book.reviews.librarything.reviewsCount
// }
function getTotalReviewCount(book){
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

// When calling this function for the third book, we encounter error
console.log(getTotalReviewCount(book))
*/

// Array map() method
const titles = books.map(e=>e.title)
titles

// The array map filter and reduce method are functional methods which means that they do not mutate the original array
// Whereas the array.sort() method is non functional methods which means that it mutates the original array, viz. it sorts the original array

const sortedByPages = books.slice().sort((a,b)=>a.pages-b.pages);

sortedByPages; 