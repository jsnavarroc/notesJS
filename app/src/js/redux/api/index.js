const apiGet = (url) => () => fetch(url).then(note => note.json());

const apiPost = (url, obj) => () =>
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' }),
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r;
        });

export {
    apiGet,
    apiPost,
};
