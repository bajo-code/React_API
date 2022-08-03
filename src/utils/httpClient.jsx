const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQ2YmEwZDkzNmJhNDRiNjU4ZTkzYmM0YmNlZjU4ZSIsInN1YiI6IjYyZTlmYWZlMjVjZDg1MDA1ZDAwMmYzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mJBykBrNXJDHLgQ1E0-NFqUbX-kJcj1ry81nGZRikMo",
                "Content-Type": "application/jsoncharset=utf-8"
            },
        }).then((result) => result.json());
    
}