import _ from 'lodash';
import './style.css';
import { postData } from '../modules/postData';
import { getData } from '../modules/getData';

const submit = document.getElementById('button');
const refresh = document.querySelector('.refresh');
const container = document.querySelector('.container');

// const realData = { name, score };

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
  getData();
});

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
