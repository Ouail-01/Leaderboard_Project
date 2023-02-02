import { dynUsers } from "./api";
const postScore = async (cnt) => {
    const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XpNfvUYHUwTMbBN5edTb/scores/');
    const jsonData = await results.json();
    const arr = jsonData.result.sort((a,b) => b.score - a.score);
    dynUsers(arr, cnt);
}
export default postScore;