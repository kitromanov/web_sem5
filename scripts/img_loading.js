async function getResponse() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let content = await response.json();
    content = content.splice(0, 5);
    console.log(content);
    let list = document.querySelector('.swiper-wrapper');
    let key;
    for (key in content) {
      list.innerHTML +=  `<div class="swiper-slide"><img class="sec" src="${content[key].url}"></div>`
    }
      console.log(list);

  }
  getResponse().catch(err => alert("⚠ Что-то пошло не так"));