const leaderboard = async (userName, userScore) => {
    const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XpNfvUYHUwTMbBN5edTb/scores/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify ({
            user : userName,
            score : userScore,
        }),
    })

    const jsonData = await results.json();
    return jsonData;
}

export {leaderboard};