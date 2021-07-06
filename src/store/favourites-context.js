import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { }
});

export const FavouritesContextProvider = (props) => {
    const [userFavourites, setuserFavourites] = useState([]);

    const addFavouriteHandler = (favouriteMeetup) => {
        setuserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    const removeFavouriteHandler = (meetupId) => {
        setuserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    }

    const itemIsFavouriteHandler = (meetupId) => {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;