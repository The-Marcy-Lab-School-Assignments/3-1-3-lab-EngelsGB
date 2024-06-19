export const getFirstThreeFantasyBooks = async () => {
    try {
        // Fetch with the given url.
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json');
        // Check the ok property of the fetch and throw an error if it's not ok.
        if (!response.ok) throw new Error("Failed to get fantasy books");
        // Turn the response into a json.
        const data = await response.json();
        // Get an array with only the first 3 elements a for formatting.
        return data.works.slice(0, 3).map((book) => {
            // Destructure the properties we want from each element of the array.
            const { title, authors, cover_id } = book;
            // New author object with the desired formatting.
            const author = {'name': authors[0].name, 'urlKey': authors[0].key};
            // Final object that will be pushed into the new array:
            const obj = {
                'title': title,
                'author': author,
                'coverUrl': `https://covers.openlibrary.org/a/id/${cover_id}-M.jpg`
            };
            return obj;
        });
    }
    catch (error) {
        // Warn and resolve to null as requested.
        console.warn(error.message);
        return null;
    }
};

export const getAuthor = async (urlKey) => {
    try {
        // Fetch with the given url and also using the urlKey.
        const response = await fetch(`https://openlibrary.org${urlKey}.json`);
        // Check the ok property of the fetch and throw an error if it's not ok.
        if (!response.ok) throw new Error('Failed to get author');
        // Turn the response into a json.
        const data = await response.json();
        // Make a new obj to filter and format the response then return it.
        const obj = {
            'birthDate': data.birth_date,
            'bio': data.bio,
            'wikipediaUrl': data.wikipedia,
            'name': data.name,
            'pictureUrl': `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`
        };
        return obj;
    }
    catch (error) {
        // Warn and resolve to null as requested.
        console.warn(error.message);
        return null;
    }
};

export const createNewUser = async (userObj) => {
    try {
        // Make the option object for posting data into the api.
        const postOption = {
            method: "POST",                
            body: JSON.stringify(userObj),       
            headers: {
                "Content-Type": "application/json"
            }  
        }
        // Fetch with the given url and the post option object.
        const response = await fetch('https://jsonplaceholder.typicode.com/users', postOption);
        // Check the ok property of the fetch and throw an error if it's not ok.
        if (!response.ok) throw new Error("Failed to create new user");
        // Return the parsed response.
        return await response.json();
    }
    catch (error) {
        // Warn and resolve to null as requested.
        console.warn(error.message);
        return null;
    }
}