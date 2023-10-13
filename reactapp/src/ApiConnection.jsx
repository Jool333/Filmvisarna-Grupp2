const apiRoute = 'https://localhost:5000/api/'

export async function get(route, method = 'GET') {
    return await (
        await fetch('/api/' + route, { method }))
        .json()
        .catch(e => ({ error: e + '' }));
};

export async function post(route, body, method = 'POST') {
    return await (await fetch(`${this.apiRoute}/${route}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })).json().catch(e => ({ error: e }));
};

/*
static async put(route, body) {
    return await this.post(route, body, 'PUT');
};

static async del(route, body) {
    return await this.get(route, body, 'DELETE');
};
*/