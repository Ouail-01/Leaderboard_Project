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
const dynUsers = (i, cnt) => {
    let players = '';
    i.forEach((player) => {
        players += `<h4>${player.user} : ${player.score}</h4>`
    });
    cnt.innerHTML = players;
}

export {leaderboard, dynUsers};