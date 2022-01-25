/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость"
        
    ]
};
const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      spisokFilmov = document.querySelector(".promo__interactive-list"),
      input = document.querySelector('.adding__input'),
      form = document.querySelector(".add"),
      btn = form.querySelector("button");
     
        btn.addEventListener("click",(e)=>{
            e.preventDefault();
            movieDB.movies.push(input.value);
            console.log(movieDB.movies);
            spisokFilmov.innerHTML += ` 
            <li class="promo__interactive-item">
                ${input.value}
                <div class="delete"></div>
            </li>`;
        });
          
     
 
      console.log(btn);
     
  
adv.forEach(item =>{
    item.remove();
});

genre.textContent = "drama";

poster.style.backgroundImage = "url('img/bg.jpg')";

spisokFilmov.innerHTML = "";

movieDB.movies.sort();


movieDB.movies.forEach((item, i) =>{
    spisokFilmov.innerHTML += ` 
    <li class="promo__interactive-item">
       ${i+1} ${item}
        <div class="delete"></div>
    </li>`;
});


