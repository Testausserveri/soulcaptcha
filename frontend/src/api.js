function submit(payload) {
    console.log(payload)
    fetch('/api/scam', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}

export const api = { submit }