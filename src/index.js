import _ from 'lodash';
import './style.css';
const name = document.getElementById('name');
const score = document.getElementById('score');
const submit = document.getElementById('button');
const refresh = document.querySelector('.refresh');
const container = document.querySelector('.container');

// const realData = { name, score };

const postData = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AJs6oseRhAwLgsTmDlVP/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const data = await res.text();
  return data;
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
});

const getData = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AJs6oseRhAwLgsTmDlVP/scores'
  );
  const result = await res.json();
  return result;
};

const refreshResult = async () => {
  let type = '';
  const eachResult = await getData();
  const allResult = eachResult.result;
  allResult.forEach((item) => {
    type += `<li>${item.user}: ${item.score}</li>`;
  });
  container.innerHTML = type;
};

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  refreshResult();
});
