export const addToLastSeen = (post) => {
    if (!sessionStorage.getItem('lastSeen')) {
        sessionStorage.setItem('lastSeen', null);
    }
    let storageObj = sessionStorage.getItem('lastSeen')
        ? JSON.parse(sessionStorage.getItem('lastSeen'))
        : {};
    // console.log(storageObj);
    if (storageObj) {
        const filtered_key = Object.keys(storageObj).filter(
            (key) => storageObj[key]._id === post._id
        );
        // console.log(filtered_key);
        filtered_key.length !== 0 && delete storageObj[filtered_key[0]];
    }
    storageObj = { [new Date()]: post, ...storageObj };

    sessionStorage.setItem('lastSeen', JSON.stringify(storageObj));
};

export const getLastSeen = () => {
    if (sessionStorage.getItem('lastSeen')) {
        return JSON.parse(sessionStorage.lastSeen);
    }
    return {};
};

export const removeLastSeen = () => {
    sessionStorage.removeItem('lastSeen');
};
