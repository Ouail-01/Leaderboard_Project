import userProfile from '../img/classement.png';

const leaderboard = async (userName, userScore) => {
  const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XpNfvUYHUwTMbBN5edTb/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
  });

  const jsonData = await results.json();
  return jsonData;
};
const dynUsers = (i, cnt) => {
  let players = '';
  const leadrClassement = userProfile;
  let classment = 1;
  i.forEach((player) => {
    players += `<div class="player">
      <div class="classement">
      <img src="${leadrClassement}" alt="">
        <p>${classment++}</p>
      </div>
      <h3>${player.user}</h3>
      <h4>${player.score}</h4>
    </div>`;
  });
  cnt.innerHTML = players;
};

export { leaderboard, dynUsers };