const events = [
  {
    title: "Перше повідомлення",
    date: "2024-05-05",
    description: "З цього всьо почалось",
    image: "img/fm.jpg"
  },
  {
    title: "Перший підкат?",
    date: "2024-05-07",
    description: "Ну я думаю це можна рахувати як жоский підкат",
    image: "img/pu.jpg"
  },
  {
    title: "Ще підкати?",
    date: "2024-05-09",
    description: "Вже тоді всьо було ясно прям точно",
    image: "img/duoq.jpg"
  },
  {
    title: "Початок стосунків",
    date: "2024-05-10",
    description: "Досі пам'ятаю як ти кожен раз згадувала це як агрумент що ти актив"
  },
  {
    title: "Перший чмок",
    date: "2024-05-17",
    description: "Це було крінжово але прікольно"
  },
  {
    title: "Перше кіно разом",
    date: "2024-05-19",
    description: "Досі пам'ятаю той фільм, шо шо, а зайка вибрала крутий фільм",
    image: "img/slovo.jpg"
  },
  {
    title: "Поїздка в яремчу",
    date: "2024-06-07",
    description: "Перша ніч разом, ще як ти відверталась ніби я тебе з'їсти хочу"
  },
  {
    title: "Твій 16 день народження",
    date: "2024-07-05",
    description: "Згоден, я так собі тебе привітав, вибач",
  },
  {
    title: "Перший сайт",
    date: "2024-09-17",
    description: "Перший раз як я тобі зробив сайт",
    image: "img/site.jpg"
  },
  {
    title: "Легендарна фотка",
    date: "2024-10-01",
    description: "Досі стоїть в мене(в обох сенсах)",
    image: "img/wp.jpg"
  },
  {
    title: "Не менш легендарна фотка",
    date: "2024-10-16",
    description: "Це було прікольна",
    image: "img/mekissed.jpg"
  },
  {
    title: "Штанішкі",
    date: "2024-11-11",
    description: "Дякую шо купила штанішкі, досі хожу в них, воні такі няшні"
  },
  {
    title: "Мій 17 день народження",
    date: "2025-02-12",
    description: "Саме ти зробила його найкращим в моєму житті, і блокнотік я передивляюсь досі, дякую зай"
  },
  {
    title: "Пальчік(",
    date: "2025-04-24",
    description: "Я тоді рял пересрав, зато якийсь час була як джо"
  },
  {
    title: "Бал",
    date: "2025-04-25",
    description: "Тоді я зрозумів що я хочу традиційне українське весілля і тільки таке"
  },
  {
    title: "Поїздка в буковель",
    date: "2025-04-30",
    description: "Це було піздец няшно",
    image: "img/buk.jpg"
  },
  {
    title: "Рік стосунків",
    date: "2025-05-10",
    description: "Няшна ж була та альпака, ну а та сорочка яку ти мені подарувала вообще чистий секс"
  },
  {
    title: "Ти сдала НМТ",
    date: "2025-06-05",
    description: "Як же я тоді затупив але хоч якось як міг підтримав, ну всеодно ти в мене найрозумніша і мені поху на ті бали"
  },
  {
    title: "Випускний",
    date: "2025-06-25",
    description: "Шо шо, а вальс у нас точно був найкращий"
  },
  {
    title: "Поїздка після випускного",
    date: "2025-06-26",
    description: "Хоч клас у нас і заруїнив але ми зробили собі двіж самі"
  },
  {
    title: "Неочікуванне кіно",
    date: "2025-06-29",
    description: "Ніколи б не подумав що ти вибереш фільм про формулу один але дуже тобі дякую за це",
    image: "img/f1.jpg"
  },
];

const timeline = document.getElementById('timeline');

for (let e of events) {
  const el = document.createElement('div');
  el.className = 'event';
  el.innerHTML = `<strong>${e.date}</strong><br>${e.title}`;
  el.addEventListener('click', () => showModal(e));
  timeline.appendChild(el);
}

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

function showModal(event) {
  modalTitle.textContent = event.title;
  modalDescription.textContent = event.description;
  if (event.image) {
    modalImage.src = event.image;
    modalImage.style.display = 'block';
  } else {
    modalImage.style.display = 'none';
  }
  modal.style.display = 'block';
}

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = e => {
  if (e.target == modal) modal.style.display = 'none';
};
