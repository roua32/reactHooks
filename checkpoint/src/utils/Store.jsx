import { createContext, useReducer } from "react";

export const StoreContext = createContext();

const initialState = {
  movies: [
    {
      title: "Harry Potter and the Goblet of Fire",
      description: "fantasy",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
    },
    {
      title: "Forrest Gump",
      description: "romantic/comedy",
      posterURL:
        "https://m.media-amazon.com/images/I/613ZgTigTpL._AC_SL1000_.jpg",
      rating: 4,
    },

    {
      title: "Pirates of the Caribbean ",
      description: "fantasy/supernatural",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dQrHA4MX-6KOsoyHgS923riKLdpp-stb5Q&s",
      rating: 4,
    },
    {
      title: "Memoirs of a Geisha",
      description: "drama",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/0/09/Memoirs_of_a_Geisha_Poster.jpg",
      rating: 3,
    },
    {
      title: "Coach Carter",
      description: "biographical/sports/drama",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Coach_Carter_poster.JPG/220px-Coach_Carter_poster.JPG",
      rating: 4,
    },
    {
      title: "Pride & Prejudice",
      description: "historical/romantic/drama",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Prideandprejudiceposter.jpg/220px-Prideandprejudiceposter.jpg",
      rating: 4,
    },
  ],
  search: "",
  RatingSearch: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_MOVIE":
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            title: action.title,
            description: action.genre,
            posterURL: action.poster,
            rating: action.rate,
          },
        ],
      };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "RATING_SEARCH":
      return { ...state, RatingSearch: action.payload };
    default:
      return state;
  }
};

function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default Store;
