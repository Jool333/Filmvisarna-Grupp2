export async function get(route, method = 'GET') {
    return await (
        await fetch('/api/' + route, { method }))
        .json()
        .catch(e => ({ error: e + '' }));
};

export async function post(route, body, method = 'POST') {
    return await (await fetch('/api/' + route, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })).json().catch(e => ({ error: e }));
};


export async function patch(route, body) {
    return await this.post('/api/' + route, body, 'PATCH');
};
/*
export async function del(route, body) {
    return await this.get(route, body, 'DELETE');
};
*/