export const apiGet = (url) => {
    return  () =>  fetch(url).then(note => note.json());
};

