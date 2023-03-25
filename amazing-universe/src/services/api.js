const host = 'http://localhost:3030';

export async function requestFunc(method, url, data) {
    let user = sessionStorage.getItem('user');

    let options = {
        method: method,
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (user) {
        options.headers['X-Authorization'] = JSON.parse(user).accessToken;
    }
    if (data !== undefined) {
        options.body = JSON.stringify(data);
    }
    let resp;
    try {
        if (method.toUpperCase() === 'GET' && !url.includes('logout')) {
            resp = await fetch(host + url);
        } else {
            resp = await fetch(host + url, options);
        }

        if (!resp.ok) {
            let error = resp.json();
            throw new Error(error.message);
        }
        if (resp.status === 204) {
            return; //alert('Successful logout');
        }
        if (resp.status === 403) {
            sessionStorage.removeItem('user');
            return alert('Please log in');
        }

        return await resp.json();
    } catch (err) {
        console.log(err.message);
        alert(
            'Something went wrong. Check your email and password and try again!'
        );
        // throw err;
    }
}
