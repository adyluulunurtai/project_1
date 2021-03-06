/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    
    let movieDB = {
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
        movieItem = document.querySelectorAll("promo__interactive-item"),
        form = document.querySelector(".add"),
        checkbox = document.querySelector("[type='checkbox']");


       
        
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let newFilm = input.value;
            if(newFilm){
                if(newFilm.length >5){
                    newFilm = `${newFilm.substring(0, 5)}...`
                }
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                createMovieList(spisokFilmov, movieDB.movies);
                if (checkbox.checked){
                    console.log("eto lyubimyi film");
                }
            }

           
            e.target.reset();
          
        });

      
    const deleteAdv = (arr)=>{
        arr.forEach(item =>{
            item.remove();
        });
    }
    deleteAdv(adv);

    const makeChanges = ()=>{
        genre.textContent = "drama";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    }

    makeChanges();
  
    const sortArr = (arr)=>{
        arr.sort()
    };

  
  
    const createMovieList = (films, parent)=>{
        films.innerHTML = "";
        sortArr(parent)
        parent.forEach((item, i) =>{
            films.innerHTML += ` 
            <li class="promo__interactive-item">
            ${i+1} ${item}
                <div class="delete"></div>
            </li>`;
        });
        document.querySelectorAll(".delete").forEach((btn, i)=>{
            btn.addEventListener("click",(e)=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1)
            createMovieList(spisokFilmov, movieDB.movies);
         });
        });
       
    };
 

    createMovieList(spisokFilmov, movieDB.movies);

});

