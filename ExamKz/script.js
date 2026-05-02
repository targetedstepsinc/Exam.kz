/* ============================================
   EXAMKZ — script.js v3 (ExamPlus жоқ)
   ============================================ */

let currentLang = 'kk';

// ===== TRANSLATIONS =====
const translations = {
    kk: {
        navHome:"Басты бет", navSubjects:"Видеолар", navTests:"Тесттер", navMaterials:"Конспектілер",
        heroTitle:"9 сынып аттестатқа<br><span class='highlight'>дайындық</span>",
        heroDesc:"Барлық пәндер бойынша емтиханға 100% дайын бол. Видеолар, конспектілер және тесттер — мүлдем тегін!",
        btnStart:"Видеоларды көру", btnTest:"Тест тапсыру",
        subjectsTitle:"Видео сабақтар — Пәнді таңдаңыз",
        testsTitle:"Біліміңді тексер — ҰБТ / Аттестат форматы",
        materialsTitle:"Конспектілер мен Шпаргалкалар",
        footerSupport:"Сұрақтарыңыз бар ма? Бізге жазыңыз!",
        btnAdmin:"Telegram: @Examkz1",
        subjects:{
            algebra:"Алгебра", historyKz:"Қазақстан тарихы", geometry:"Геометрия",
            physics:"Физика", chemistry:"Химия", biology:"Биология",
            geography:"География", qazaqTili:"Қазақ тілі", literature:"Әдебиет", english:"Ағылшын тілі"
        }
    },
    ru: {
        navHome:"Главная", navSubjects:"Видео", navTests:"Тесты", navMaterials:"Конспекты",
        heroTitle:"Подготовка к <span class='highlight'>аттестату</span> 9 класса",
        heroDesc:"Видео, конспекты и тесты в одном месте. 100% бесплатно — готовься правильно!",
        btnStart:"Смотреть видео", btnTest:"Пройти тест",
        subjectsTitle:"Видеоуроки — Выберите предмет",
        testsTitle:"Проверь знания — Формат ЕНТ / Аттестат",
        materialsTitle:"Конспекты и Шпаргалки",
        footerSupport:"Есть вопросы? Пиши нам!",
        btnAdmin:"Telegram: @Examkz1",
        subjects:{
            algebra:"Алгебра", historyKz:"История Казахстана", geometry:"Геометрия",
            physics:"Физика", chemistry:"Химия", biology:"Биология",
            geography:"География", qazaqTili:"Казахский язык", literature:"Литература", english:"Английский"
        }
    }
};

const subjectIcons = {
    algebra:"📐", historyKz:"🏛️", geometry:"📏", physics:"⚡",
    chemistry:"🧪", biology:"🧬", geography:"🌍", qazaqTili:"📝",
    literature:"📚", english:"🌐"
};

// ===== DATABASE =====
const database = {
    videos: {
        kk: {
            algebra: [
                { title:"1. Натурал сандар және бөлу",                  url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Бөлшектер. Қосу, азайту",                  url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Бөлшектерді көбейту, бөлу",                url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Теңдеу. Сызықтық теңдеу",                  url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Теңдеулер жүйесі",                          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Квадрат теңдеулер. Дискриминант",           url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Виет теоремасы",                             url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Квадрат теңсіздіктер",                      url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Арифметикалық прогрессия — формулалары",    url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"10. Арифметикалық прогрессия қосындысы",       url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"11. Геометриялық прогрессия",                  url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"12. Шексіз кемімелі геометриялық прогрессия", url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"13. Ықтималдықтар теориясы негіздері",         url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"14. Комбинаторика: Орынластыру, Теру",         url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"15. Функция және оның графигі",                url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"16. Квадраттық функция. Парабола",             url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"17. Логарифмдер. Негізгі ережелер",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"18. Дәреже мен дәреже теңдеулері",             url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"19. Теңсіздіктер. Интервалдар әдісі",          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"20. Қысқа көбейту формулалары",                url:"https://www.youtube.com/embed/7X8m_v7_f-M" }
            ],
            historyKz: [
                { title:"1. Тас дәуірі — Палеолит, Мезолит, Неолит",   url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Қола дәуірі. Андронов мәдениеті",           url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Ерте темір дәуірі: Сақ тайпалары",          url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Үйсін мен Қаңлы мемлекеттері",              url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Ғұн мемлекеті",                              url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Түрік қағанаты (552–603 жж)",               url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Батыс Түрік қағанаты",                      url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Қарлұқ, Оғыз, Қимақ мемлекеттері",         url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Қарахан мемлекеті. Ислам діні",             url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Алтын Орда мемлекеті",                     url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Қазақ хандығының құрылуы — 1465 жыл",     url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Қасым, Хақназар, Тәуекел хандар",          url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"13. Тәуке хан және Жеті Жарғы",                url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"14. Жоңғар шапқыншылығы. Ақтабан шұбырынды",  url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"15. Кіші, Орта, Ұлы жүздер",                   url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"16. Ресейге қосылу тарихы",                    url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"17. Кенесары Қасымұлы көтерілісі",             url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"18. 1916 жылғы ұлт-азаттық көтеріліс",        url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"19. Алаш қозғалысы және Алашорда",             url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"20. 1932–33 Ашаршылық. Сталинизм",             url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"21. ХХ ғасырдағы мәдениет және ғылым",        url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"22. 1986 жылғы Желтоқсан оқиғасы",            url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"23. Қазақстан тәуелсіздігі — 1991",            url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"24. Нұрсұлтан Назарбаев кезеңі",               url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"25. Астана — жаңа астана тарихы",              url:"https://www.youtube.com/embed/S2pX9jJ-W_0" }
            ],
            physics: [
                { title:"1. Физикалық шамалар. Өлшем бірліктері",      url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Кинематика. Бірқалыпты қозғалыс",          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Бірқалыпты үдемелі қозғалыс",              url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Еркін түсу. g = 9,8 м/с²",                 url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Ньютонның 3 заңы",                          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Үйкеліс күші. Серпімділік күші",           url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Жұмыс, Қуат, Энергия",                     url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Кинетикалық және Потенциалдық энергия",     url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Механикалық тербеліс. Резонанс",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Дыбыс толқындары",                         url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Молекулалық-кинетикалық теория",           url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Газ заңдары: Бойль, Гей-Люссак, Шарль",  url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"13. Термодинамика негіздері",                  url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"14. Электр заряды. Кулон заңы",               url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"15. Электр тогы. Ом заңы",                    url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"16. Тізбектей және параллель қосылыс",        url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"17. Электр қуаты. Джоуль-Ленц заңы",         url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"18. Магниттік өріс. Лоренц күші",             url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"19. Жарық оптикасы. Шағылыс, Сыну",         url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"20. Атом ядросы. Радиоактивтілік",            url:"https://www.youtube.com/embed/8oK8b7e2SRE" }
            ],
            chemistry: [
                { title:"1. Атом. Молекула. Химиялық элемент",         url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Периодтық жүйе. Менделеев заңы",           url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Химиялық байланыстар түрлері",              url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Валенттілік. Тотығу дәрежесі",             url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Тотығу-тотықсыздану реакциясы",            url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Оксидтер: классификациясы, қасиеттері",   url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Қышқылдар: түрлері мен қасиеттері",       url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Негіздер. Сілтілер мен ерімейтін негіздер",url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Тұздар. Классификациясы мен қасиеттері",   url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Металдар. Белсенділік қатары",             url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Бейметалдар: галогендер, күкірт, азот",  url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Органикалық химия негіздері. Алкандар",   url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"13. Алкендер мен Алкиндер",                   url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"14. Бензол және Арендер",                     url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"15. Спирттер мен Карбон қышқылдары",         url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"16. Есептеулер: Масса үлесі, Моль",           url:"https://www.youtube.com/embed/S2pX9jJ-W_0" }
            ],
            biology: [
                { title:"1. Тіршілік деңгейлері. Биологиялық жүйелер",url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Жасуша теориясы: Прокариот/Эукариот",     url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Жасуша органоидтары және олардың қызметі", url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. ДНҚ және РНҚ. Нуклеотид",                 url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Нәруыз синтезі: Транскрипция, Трансляция", url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Фотосинтез. Жарық және Қараңғы фаза",     url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Жасушалық тыныс алу. АТФ",                url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Митоз және Мейоз",                         url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Генетика негіздері. Мендель заңдары",      url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Гендік және хромосомалық мутация",        url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Эволюция теориясы. Дарвин принциптері",   url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Табиғи сұрыпталу. Адаптация",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"13. Адам жүйке жүйесі",                       url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"14. Қан айналым жүйесі. Жүрек",              url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"15. Тыныс алу және Асқорыту жүйелері",       url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"16. Экология. Экожүйе. Биогеоценоз",         url:"https://www.youtube.com/embed/S2pX9jJ-W_0" }
            ],
            geometry: [
                { title:"1. Геометрия негіздері. Нүкте, Сызық, Жазықтық",url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Үшбұрыш. Түрлері мен қасиеттері",         url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Үшбұрыш теңдігінің белгілері",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Пифагор теоремасы",                        url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Параллель сызықтар. Теңдес бұрыштар",     url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Параллелограмм. Ромб. Трапеция",          url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Дөңгелек және шеңбер. Ұзындық, Аудан",   url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Аудан формулалары",                        url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Координаталар жазықтығы. Нүктелер",       url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Вектор. Векторлар арифметикасы",          url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Стереометрия: Куб, Параллелепипед",      url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Пирамида мен Конус. Көлемі",             url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"13. Цилиндр мен Шар. Бетінің ауданы",       url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"14. Тригонометрия. Sin, Cos, Tan",           url:"https://www.youtube.com/embed/8oK8b7e2SRE" }
            ],
            geography: [
                { title:"1. Жер — Күн жүйесіндегі планета",           url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Географиялық карта. Масштаб",              url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Жер бедері. Таулар мен жазықтар",         url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Қазақстанның географиялық орны",           url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Қазақстанның жер бедері",                  url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Климат белдеулері. Климат типтері",        url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Қазақстан климаты",                        url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Гидрология. Өзендер мен көлдер",          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Қазақстанның ішкі сулары",                 url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Табиғи аймақтар. Дала, Шөл, Тайга",     url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Дүниежүзі елдері мен астаналары",         url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Азия материгінің географиясы",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" }
            ],
            qazaqTili: [
                { title:"1. Сөз таптары — Зат есім, Сын есім",        url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Сан есім, Есімдік, Үстеу",                url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Етістік. Шақтары",                         url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Шылаулар. Одағайлар",                      url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Сөйлем мүшелері",                          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Жай сөйлем. Жалпылама сөйлем",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Құрмалас сөйлем. Салалас, Сабақтас",     url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Пунктуация ережелері. Үтір",              url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Сөзжасам. Жұрнақ пен жалғау",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Емле ережелері. Диктант дайындық",       url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Мәтін талдау. Мазмұндама жазу",          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Шығарма жазу кеңестері",                  url:"https://www.youtube.com/embed/7X8m_v7_f-M" }
            ],
            literature: [
                { title:"1. Абай Құнанбайұлы шығармашылығы",          url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Абай. '45 Қара сөз' шығармасы",           url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Мұхтар Әуезов — 'Абай жолы'",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Ыбырай Алтынсарин. Ағарту ісі",          url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Жамбыл Жабаев поэзиясы",                  url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Сәбит Мұқанов шығармашылығы",             url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Ілияс Жансүгіров. 'Күй' поэмасы",        url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Ғабит Мүсірепов шығармалары",             url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Мағжан Жұмабаев поэзиясы",                url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Бейімбет Майлин — прозасы",              url:"https://www.youtube.com/embed/S2pX9jJ-W_0" }
            ],
            english: [
                { title:"1. Ағылшын тіліне кіріспе. Алфавит, Дыбыстар",url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"2. Present Simple vs Present Continuous",      url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"3. Past Simple vs Past Continuous",            url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"4. Future Simple. Will vs Going to",           url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"5. Present Perfect — қолдану",                url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"6. Modal Verbs: can, must, should, would",    url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"7. Conditionals 0, 1, 2, 3",                  url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"8. Passive Voice — барлық шақтарда",          url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"9. Relative Clauses. Who, which, that",        url:"https://www.youtube.com/embed/7X8m_v7_f-M" },
                { title:"10. Reported Speech",                          url:"https://www.youtube.com/embed/S2pX9jJ-W_0" },
                { title:"11. Reading Comprehension стратегиясы",        url:"https://www.youtube.com/embed/8oK8b7e2SRE" },
                { title:"12. Writing — эссе жазу. IELTS стилі",        url:"https://www.youtube.com/embed/7X8m_v7_f-M" }
            ]
        }
    },

    materials: {
        kk: {
            algebra: [
                { title:"📐 Прогрессия формулалары", content:"<b>Арифметикалық прогрессия:</b><br><code>aₙ = a₁ + (n−1)·d</code><br><code>Sₙ = (a₁ + aₙ)/2 · n</code><br><br><b>Геометриялық прогрессия:</b><br><code>bₙ = b₁ · qⁿ⁻¹</code><br><code>Sₙ = b₁(qⁿ − 1)/(q − 1)</code><br><br><b>Шексіз кемімелі (|q|&lt;1):</b><br><code>S∞ = b₁/(1−q)</code>" },
                { title:"📐 Квадрат теңдеу шешу", content:"<b>ax² + bx + c = 0</b><br><br><b>Дискриминант:</b> <code>D = b² − 4ac</code><br>• D &gt; 0 → 2 нақты түбір<br>• D = 0 → 1 түбір (қос)<br>• D &lt; 0 → нақты түбір жоқ<br><br><b>Түбірлер:</b> <code>x = (−b ± √D) / 2a</code>" },
                { title:"📐 Виет теоремасы", content:"<b>x² + px + q = 0</b> үшін:<br><code>x₁ + x₂ = −p</code><br><code>x₁ · x₂ = q</code><br><br><b>Мысал:</b> x² − 5x + 6 = 0<br>x₁+x₂=5, x₁·x₂=6 → <b>x₁=2, x₂=3</b>" },
                { title:"📐 Қысқа көбейту формулалары", content:"<code>(a+b)² = a² + 2ab + b²</code><br><code>(a−b)² = a² − 2ab + b²</code><br><code>a² − b² = (a−b)(a+b)</code><br><code>a³ + b³ = (a+b)(a²−ab+b²)</code><br><code>a³ − b³ = (a−b)(a²+ab+b²)</code><br><code>(a+b)³ = a³ + 3a²b + 3ab² + b³</code>" },
                { title:"📐 Ықтималдық және Комбинаторика", content:"<b>Ықтималдық:</b> <code>P(A) = m/n</code><br>0 ≤ P(A) ≤ 1; P(A)+P(Ā)=1<br><br><b>Перестановка:</b> <code>Pₙ = n!</code><br><b>Орналастыру:</b> <code>Aₙᵏ = n!/(n−k)!</code><br><b>Теру:</b> <code>Cₙᵏ = n!/[k!(n−k)!]</code><br><br><b>Мысал:</b> C₅² = 5!/[2!·3!] = 10" },
                { title:"📐 Функция графиктері", content:"<b>Сызықтық:</b> y = kx+b (тік сызық)<br>k — еңіс, b — ось y кесіндісі<br><br><b>Квадраттық:</b> y = ax²+bx+c (парабола)<br>Төбе: <code>x₀ = −b/2a</code>, <code>y₀ = −D/4a</code><br><br><b>Гиперболалық:</b> y = k/x<br><b>Тамырлы:</b> y = √x (x≥0)" },
                { title:"📐 Логарифм ережелері", content:"<code>log_a(xy) = log_a x + log_a y</code><br><code>log_a(x/y) = log_a x − log_a y</code><br><code>log_a(xⁿ) = n·log_a x</code><br><code>log_a a = 1</code><br><code>log_a 1 = 0</code><br><br><b>Ауысу:</b> <code>log_b x = log x / log b</code><br><b>Натурал:</b> ln x = log_e x (e ≈ 2,718)" },
                { title:"📐 Теңсіздіктер шешу", content:"<b>Сызықтық теңсіздік:</b> ax &gt; b<br>a &gt; 0: x &gt; b/a; a &lt; 0: x &lt; b/a (таңба өзгереді!)<br><br><b>Интервалдар әдісі (квадраттық):</b><br>1. Теңдеуді шешіп, түбірлерді тап<br>2. Сан осіне белгіле<br>3. Таңбаларын анықта<br>4. Жауапты жаз" }
            ],
            historyKz: [
                { title:"🏛️ Тас дәуірі кезеңдері", content:"<b>Палеолит</b> (б.з.б 2,6 млн – 12 мың жыл):<br>• Адамзат пайда болды<br>• Отты пайдалану үйренді<br>• Тас еңбек құралдары<br><br><b>Мезолит</b> (б.з.б 12–5 мың жыл):<br>• Садақ пен жебе шықты<br>• Балық аулау дамыды<br><br><b>Неолит</b> (б.з.б 5–3 мың жыл):<br>• Егіншілік + мал шаруашылығы<br>• 'Неолит төңкерісі' деп аталады" },
                { title:"🏛️ Қола дәуірі және Андронов", content:"<b>Уақыты:</b> б.з.б III–I мыңжылдық<br><b>Андронов мәдениеті</b> (б.з.б XVIII–VIII ғ.)<br><br>• Қола = <b>мыс + қалайы</b><br>• Ірі мал шаруашылығы дамыды<br>• Жартылай отырықшы өмір<br>• Бегазы-Дандыбай — соңғы қола дәуірі мәдениеті<br>• Ең ірі ескерткіш: <b>Беғазы</b> (Сарыарқа)" },
                { title:"🏛️ Сақ тайпалары", content:"<b>3 үлкен топ:</b><br>• <b>Тиграхауда</b> (бүркіт тәжділіктер) — Жетісу, Сырдария<br>• <b>Парадарайя</b> (теңіз арғы сақтар) — Арал, Қаратеңіз<br>• <b>Хаумаварга</b> — Мұрғаб, Амудария<br><br><b>'Алтын адам'</b> — Есік обасы (б.з.б V ғ.)<br>1969 жылы табылды. Патша-жрец болуы мүмкін.<br>4000-нан астам алтын бұйым табылды." },
                { title:"🏛️ Үйсін, Қаңлы мемлекеттері", content:"<b>Үйсіндер:</b><br>• Мекені: Жетісу, Іле алқабы<br>• Билеушісі: <b>Гуньмо</b> (аударуда — Бекжоқы)<br>• Орталығы: Чигу (Іле жағасы)<br>• Халқы: 630 мың адам, 188 мың жауынгер<br><br><b>Қаңлылар:</b><br>• Сырдарияның орта ағысы<br>• Ұлы Жібек жолы бойы<br>• Ірі сауда орталықтары болды" },
                { title:"🏛️ Түрік қағанаты", content:"<b>Кезеңі:</b> 552–603 жж.<br><b>Негізін қалаушы:</b> <b>Бумын қаған</b> (552 ж.)<br><b>Ең ірі билеуші:</b> Мұхан қаған<br><br>603 жылы <b>Шығыс</b> және <b>Батыс</b> болып екіге бөлінді.<br><br><b>Батыс Түрік қағанаты:</b><br>• Астана: Суяб (Шу өзені жаны)<br>• Жетісу мен Орта Азияны биледі" },
                { title:"🏛️ Қазақ хандығы", content:"<b>Құрылуы:</b> <b>1465 жыл, Қозыбасы</b> (Шу–Талас аралығы)<br><b>Негізін қалаушылар:</b> Керей хан + Жәнібек хан<br><br><b>Аты шыққан хандар:</b><br>• <b>Қасым хан</b> (1511–1521) — ең үлкен жер, 'Дала кодексі'<br>• <b>Тәуекел хан</b> — Ташкент, Самарқандты алды<br>• <b>Есім хан</b> — 'Есімнің ескі жолы' заңы<br>• <b>Тәуке хан</b> — Жеті Жарғы (XVII ғ.), үш жүзді біріктірді" },
                { title:"🏛️ Жоңғар шапқыншылығы", content:"<b>Ақтабан шұбырынды:</b> <b>1723 жыл</b><br>• Жоңғарлар Балқашқа дейін жетті<br>• Халықтың 1/3 бөлігі қырылды<br>• 'Елім-ай' — сол кездің трагедия әні<br><br><b>Ірі жеңістер:</b><br>• Бұланты шайқасы (1726) — алғашқы жеңіс<br>• <b>Аңырақай шайқасы (1730)</b> — шешуші жеңіс<br>Қолбасшылар: Абылай хан, Бөгенбай батыр, Қабанбай батыр" },
                { title:"🏛️ Алаш қозғалысы", content:"<b>Алаш партиясы</b> — 1917 жылы Орынборда құрылды<br>Жетекшілер: <b>Бөкейханов, Байтұрсынов, Дулатов</b><br><br><b>Алашорда үкіметі</b> (1917–1920):<br>• Астанасы: Семей<br>• Ұраны: 'Оян, қазақ!'<br>• Қазақ ұлттық автономиясын жариялады<br><br>1920 жылы большевиктер таратты." },
                { title:"🏛️ ХХ ғасыр трагедиялары", content:"<b>1916 — Ұлт-азаттық көтеріліс</b><br>Ресей майданға еңбекшілер алуды талап еткен соң.<br>Амангелді Иманов бастады.<br><br><b>1932–1933 — Ашаршылық (Голощекин политикасы)</b><br>1,5–2 млн қазақ қырылды (халықтың <b>40%</b>).<br>200 мыңнан астам қазақ шетелге кетті.<br><br><b>1986, желтоқсан</b> — 'Желтоқсан оқиғасы'<br>Алматыдағы студент наразылығы. Ұлттық оянудың белгісі." },
                { title:"🏛️ Тәуелсіздік және Қазіргі уақыт", content:"<b>1991, 16 желтоқсан</b> — Қазақстан тәуелсіздігін жариялады!<br><br><b>1991–2019:</b> Нұрсұлтан Назарбаев — Тұңғыш Президент<br><b>1997:</b> Астана жаңа астана болды (бұрыңғы Ақмола)<br><b>2019:</b> Астана қаласына Нұр-Сұлтан аты берілді<br><b>2022:</b> Астана атауы қайтарылды<br><br><b>2019–қазір:</b> Қасым-Жомарт Тоқаев — Президент" }
            ],
            physics: [
                { title:"⚡ Ньютонның заңдары — толық", content:"<b>I заң (инерция заңы):</b><br>Күш болмаса — дене тыныштықта немесе тіке бірқалыпты қозғалада.<br><br><b>II заң (негізгі заң):</b><br><code>F = m·a</code><br>F — күш (Ньютон, Н), m — масса (кг), a — үдеу (м/с²)<br><br><b>III заң (өзара әрекет):</b><br>Кез келген күшке тең мәнде, бірақ қарсы бағытта күш болады.<br><code>F₁₂ = −F₂₁</code>" },
                { title:"⚡ Кинематика формулалары", content:"<b>Бірқалыпты:</b> <code>S = v·t; v = const</code><br><br><b>Үдемелі қозғалыс:</b><br><code>v = v₀ + a·t</code><br><code>S = v₀t + at²/2</code><br><code>v² = v₀² + 2aS</code><br><br><b>Еркін түсу (g = 9,8 м/с²):</b><br><code>h = gt²/2</code><br><code>v = gt</code><br><code>v² = 2gh</code>" },
                { title:"⚡ Жұмыс, Энергия, Қуат", content:"<b>Механикалық жұмыс:</b><br><code>A = F·S·cosα</code> (Дж)<br><br><b>Кинетикалық:</b> <code>Eₖ = mv²/2</code><br><b>Потенциалдық:</b> <code>Eₚ = mgh</code><br><br><b>Энергия сақталу заңы:</b><br><code>Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂</code><br><br><b>Қуат:</b> <code>P = A/t = F·v</code> (Вт)<br><b>ПӘК:</b> <code>η = Aпайдалы/Aтолық · 100%</code>" },
                { title:"⚡ Электр тогы — Ом заңы", content:"<b>Ом заңы (тізбек бөлігі):</b><br><code>I = U/R</code><br>I — ток (Ампер, А)<br>U — кернеу (Вольт, В)<br>R — кедергі (Ом, Ω)<br><br><b>Тізбектей:</b> <code>R = R₁ + R₂ + R₃</code><br><b>Параллель:</b> <code>1/R = 1/R₁ + 1/R₂</code><br><br><b>Электр қуаты:</b> <code>P = UI = I²R = U²/R</code><br><b>Электр жұмысы:</b> <code>A = Pt = UIt</code> (Дж)" },
                { title:"⚡ Газ заңдары", content:"<b>Бойль–Мариотт (T = const, изотерма):</b><br><code>P₁V₁ = P₂V₂</code><br><br><b>Гей–Люссак (V = const, изохора):</b><br><code>P₁/T₁ = P₂/T₂</code><br><br><b>Шарль (P = const, изобара):</b><br><code>V₁/T₁ = V₂/T₂</code><br><br><b>Клапейрон–Менделеев (жалпы):</b><br><code>PV = nRT</code><br>R = 8,314 Дж/(моль·К)" }
            ],
            chemistry: [
                { title:"🧪 Тотығу дәрежесі", content:"<b>Негізгі ережелер:</b><br>• Бос күйдегі элемент: <b>0</b><br>• Н — <b>+1</b> (металл гидридінде −1)<br>• O — <b>−2</b> (H₂O₂-де −1)<br>• І топ металдары — <b>+1</b><br>• ІІ топ металдары — <b>+2</b><br>• F — <b>−1</b> (әрқашан)<br><br><b>Молекуладағы жиынтық = 0</b><br><b>Ионда = иондық зарядқа тең</b>" },
                { title:"🧪 Қышқылдар мен Негіздер", content:"<b>Маңызды қышқылдар:</b><br>HCl — тұз қышқылы, H₂SO₄ — күкірт, HNO₃ — азот<br>H₃PO₄ — фосфор, H₂CO₃ — көмір қышқылы<br>• pH &lt; 7; лакмус — қызыл<br><br><b>Маңызды негіздер:</b><br>NaOH — каустик, KOH — поташ<br>Ca(OH)₂ — сөнген әк<br>• pH &gt; 7; лакмус — көк<br><br><b>Бейтараптану:</b><br><code>қышқыл + негіз → тұз + су</code>" },
                { title:"🧪 Металдар белсенділік қатары", content:"K – Ca – Na – Mg – Al – Zn – Fe – Ni – Sn – Pb – <b>H₂</b> – Cu – Hg – Ag – Pt – Au<br><br><b>Ережелер:</b><br>• H₂-нің солындағы металдар қышқылмен H₂ бөліп реакцияға түседі<br>• Белсенді металдар (K, Na, Ca) сумен реакцияға түседі<br>• Au, Ag, Pt — асыл металдар (инертті)<br>• Белсенді металдар тұздан белсенсіз металды ығыстырады" },
                { title:"🧪 Органикалық химия", content:"<b>Алкандар (CₙH₂ₙ₊₂):</b> CH₄ (метан), C₂H₆ (этан)<br>Реакция: жану, галогендеу (ауыстыру)<br><br><b>Алкендер (CₙH₂ₙ):</b> C₂H₄ (этилен)<br>Реакция: қосу (HBr, H₂O, Cl₂)<br><br><b>Алкиндер (CₙH₂ₙ₋₂):</b> C₂H₂ (ацетилен)<br><br><b>Функционал топтар:</b><br>–OH (спирт) → –COOH (карбон қышқылы)<br>–CHO (альдегид) → –C=O (кетон)" },
                { title:"🧪 Есептеулер — Моль, Масса үлесі", content:"<b>Зат мөлшері:</b> <code>n = m/M</code><br>n — моль (моль), m — масса (г)<br>M — молярлы масса (г/моль)<br><br><b>Авогадро:</b> Nₐ = 6,022·10²³ бөлшек/моль<br><b>Молярлы көлем (газ):</b> Vm = 22,4 л/моль (қ.ж.)<br><br><b>Масса үлесі:</b><br><code>ω = m_зат / m_ерітінді · 100%</code><br><br><b>Реакция теңдеуі бойынша есептеу:</b><br>Стехиометрик коэффициенттерді пайдалан" }
            ],
            biology: [
                { title:"🧬 Жасуша теориясы", content:"<b>Шлейден мен Шванн</b> (1838–1839 жж.):<br>1. Барлық тіршілік жасушадан тұрады<br>2. Жасуша — тіршіліктің ең кіші бірлігі<br>3. Жасуша тек жасушадан пайда болады (Вирхов)<br><br><b>Прокариот</b> (ядросыз): бактерия, архея<br><b>Эукариот</b> (ядролы): өсімдік, жануар, саңырауқұлақ<br><br><b>Ерекшеліктер:</b><br>• Прокариотта: мембрана жоқ органоидтар<br>• Өсімдікте: хлоропласт, жасуша қабырғасы (целлюлоза), вакуоль" },
                { title:"🧬 ДНҚ, РНҚ, Нәруыз синтезі", content:"<b>ДНҚ:</b> қос тізбекті спираль<br>Нуклеотид = дезоксирибоза + фосфат + азотты негіз<br>Жұп: <b>А–Т, Г–Ц</b><br><br><b>РНҚ:</b> бір тізбекті<br>Нуклеотид = рибоза + фосфат + азотты негіз<br>Жұп: <b>А–У, Г–Ц</b><br><br><b>Нәруыз синтезі:</b><br>ДНҚ → (транскрипция, ядрода) → мРНҚ<br>мРНҚ → (трансляция, рибосомада) → нәруыз" },
                { title:"🧬 Мендель заңдары", content:"<b>I заң — Біртектілік:</b><br>F₁ ұрпақта барлық дара ұқсас (доминантты)<br>AA × aa → Aa (барлығы)<br><br><b>II заң — Ыдырау (F₂):</b><br>Aa × Aa → 1AA : 2Aa : 1aa<br>Фенотип: <b>3 доминантты : 1 рецессивті</b><br><br><b>III заң — Тәуелсіз ажырау (дигибридті):</b><br>AABB × aabb → F₂: <b>9:3:3:1</b>" },
                { title:"🧬 Фотосинтез", content:"<b>Жарық фазасы (тилакоидта):</b><br>Жарық + H₂O → O₂ + АТФ + НАДФН<br>Хлорофилл жарықты сіңіреді<br><br><b>Қараңғы фаза / Кальвин цикл (стромада):</b><br>CO₂ + АТФ + НАДФН → Глюкоза<br><br><b>Жалпы теңдеу:</b><br><code>6CO₂ + 6H₂O + жарық → C₆H₁₂O₆ + 6O₂</code><br><br><b>Маңызды:</b> Оттек — фотосинтез өнімі!<br>Глюкоза — органикалық зат (химиялық энергия)" },
                { title:"🧬 Адам жүйелері", content:"<b>Жүйке жүйесі:</b><br>Орталық: ми (үлкен ми, мишық, ми сабағы) + жұлын<br>Шеткі: нервтер мен ганглийлер<br><br><b>Қан айналым жүйесі:</b><br>Жүрек — 4 камерлі (2 қарынша + 2 жүрекше)<br>Артерия (жүректен) → Капилляр → Вена (жүрекке)<br><br><b>Тыныс алу:</b> мұрын → кеңірдек → бронх → өкпе → альвеола<br><b>Асқорыту:</b> ауыз → өңеш → асқазан → ішек → тік ішек" }
            ],
            geometry: [
                { title:"📏 Пифагор теоремасы мен аудандар", content:"<b>Пифагор:</b> <code>c² = a² + b²</code><br>(c — гипотенуза, a,b — катеттер)<br><br><b>Аудан формулалары:</b><br>• Үшбұрыш: <code>S = ½·a·h</code><br>• Тіктөртбұрыш: <code>S = a·b</code><br>• Ромб: <code>S = ½·d₁·d₂</code><br>• Трапеция: <code>S = ½(a+b)·h</code><br>• Параллелограмм: <code>S = a·h</code><br>• Дөңгелек: <code>S = πr²</code>" },
                { title:"📏 Дөңгелек формулалары", content:"<b>Дөңгелек ұзындығы:</b> <code>C = 2πr = πd</code><br><b>Дөңгелек ауданы:</b> <code>S = πr²</code><br><br><b>Доға ұзындығы:</b> <code>l = πr·α/180°</code><br><b>Сектор ауданы:</b> <code>S = πr²·α/360°</code><br><br>π ≈ 3,14159<br><br><b>Теорема (орталық бұрыш):</b><br>Орталық бұрыш = сыртқы бұрыштан 2 есе үлкен" },
                { title:"📏 Стереометрия — Көлем формулалары", content:"<b>Куб:</b> <code>V = a³</code>, <code>S = 6a²</code><br><b>Параллелепипед:</b> <code>V = a·b·c</code><br><b>Пирамида:</b> <code>V = ⅓·S_нег·h</code><br><br><b>Цилиндр:</b><br><code>V = πr²h</code>, <code>S_бүйір = 2πrh</code><br><br><b>Конус:</b><br><code>V = ⅓πr²h</code>, <code>S_бүйір = πrl</code><br><br><b>Шар:</b><br><code>V = 4/3·πr³</code>, <code>S = 4πr²</code>" }
            ],
            geography: [
                { title:"🌍 Қазақстан географиясы — негіздер", content:"<b>Аумағы:</b> 2 724 902 км² (Дүниежүзінде 9-орын)<br><b>Тұрғын саны:</b> ~20 млн адам<br><b>Астана:</b> Астана қаласы<br><br><b>Шекара:</b> Ресей, Қытай, Қырғызстан, Өзбекстан, Түрікменстан<br>(5 мемлекетпен, 13 601 км)<br><br><b>Ең биік нүкте:</b> Хан Тәңірі — 6 995 м<br><b>Ең үлкен көл:</b> Каспий теңізі<br><b>Ең ұзын өзен:</b> Ертіс өзені (Қазақстанда)" },
                { title:"🌍 Климат белдеулері", content:"<b>Экватор (0°):</b> тропиктік жаңбырлы орман<br>Жыл бойы жылы, жауын-шашын мол<br><br><b>Субтропик:</b> жазы құрғақ, қысы жаңбырлы<br><b>Қоңыржай (30–60°):</b> 4 мезгіл<br><b>Субарктика:</b> тундра, мәңгілік тоң<br><b>Арктика:</b> мұздық белдеу<br><br><b>Қазақстан:</b> күрт континентальды<br>Жазы: +40°C; Қысы: −40°C<br>Жылдық температура амплитудасы — 80°C дейін!" },
                { title:"🌍 Дүниежүзі астаналары", content:"<b>Азия:</b><br>Пекин (Қытай), Токио (Жапония), Сеул (Оңт. Корея)<br>Дели (Үндістан), Бангкок (Тайланд), Тегеран (Иран)<br><br><b>Еуропа:</b><br>Берлин (Германия), Париж (Франция), Рим (Италия)<br>Лондон (Ұлыбритания), Мадрид (Испания)<br><br><b>Америка:</b><br>Вашингтон (АҚШ), Оттава (Канада), Бразилиа (Бразилия)<br>Буэнос-Айрес (Аргентина), Лима (Перу)" }
            ],
            qazaqTili: [
                { title:"📝 Сөз таптары — толық кесте", content:"<b>Зат есім:</b> кім? не? — адам, үй, кітап, су<br><b>Сын есім:</b> қандай? — биік, ақ, үлкен, жақсы<br><b>Сан есім:</b> қанша? нешінші? — бір, екі, үшінші<br><b>Есімдік:</b> мен, сен, ол, біз, сіз, олар<br><b>Етістік:</b> не істеді? — оқыды, жазды, барды<br><b>Үстеу:</b> қалай? қашан? қайда? — тез, кеше, алда<br><b>Шылау:</b> мен, де/да, бірақ, себебі<br><b>Одағай:</b> ой!, пай!, ей! (сезім білдіреді)" },
                { title:"📝 Етістік шақтары — барлығы", content:"<b>Өткен шақ (анық):</b><br>–ды/–ді/–ты/–ті → оқыды, жазды<br><br><b>Жедел өткен шақ:</b><br>–дым/–дің/–ды → бардым, бардың<br><br><b>Осы шақ:</b><br>–ып жатыр / –а/–е жатыр → оқып жатыр<br><br><b>Келер шақ (болжамды):</b><br>–ар/–ер/–р → барар, келер<br><br><b>Келер шақ (мақсатты):</b><br>–мақ/–мек → баруы керек<br><br><b>Бұйрық рай:</b><br>–ші/–шы → оқыши!, барши!" },
                { title:"📝 Сөйлем мүшелері", content:"<b>Бастауыш:</b> Кім? Не? → іс-әрекет иесі<br>(Бала оқыды. Ауа суық.)<br><br><b>Баяндауыш:</b> Не істеді? Қалай? → іс-әрекет<br>(Бала <u>оқыды</u>.)<br><br><b>Толықтауыш:</b> Кімді? Нені? Кімге? → объект<br><br><b>Анықтауыш:</b> Қандай? Қай? Кімнің? → белгі<br><br><b>Пысықтауыш:</b> Қайда? Қашан? Қалай? Неліктен? → жағдай<br><br><b>Оқшауланған мүшелер:</b> үндеу сөз, кіріспе сөз" }
            ],
            literature: [
                { title:"📚 Абай Құнанбайұлы (1845–1904)", content:"<b>Туған жері:</b> Семей облысы, Шыңғыс тауы<br><b>Толық аты:</b> Ибраһим Құнанбайұлы<br><br><b>Маңызды шығармалары:</b><br>• <b>'Қалың елім, қазағым'</b> — ағарту өлеңі<br>• <b>'45 Қара сөз'</b> — философиялық трактат<br>• <b>'Масғұт', 'Ескендір'</b> поэмалары<br>• Пушкин, Гёте, Лермонтов аудармалары<br><br><b>Негізгі ойы:</b> Ғылым, еңбек, адамгершілік — өмір негізі<br><b>Маңызы:</b> Жазба қазақ әдебиетінің негізін салды" },
                { title:"📚 Мұхтар Әуезов (1897–1961)", content:"<b>Туған жері:</b> Семей облысы, Шыңғыс ауданы<br><br><b>Басты туындысы:</b><br>'<b>Абай жолы</b>' — 4 томдық роман-эпопея<br>(1942–1956 жылдары жазылды)<br><br><b>Пьесалары:</b> 'Еңлік–Кебек', 'Қаракөз', 'Хан Кене'<br><b>Әңгімелері:</b> 'Қорғансыздың күні', 'Қараш–Қараш'<br><br><b>Халықаралық Лениндік сыйлық</b> (1959).<br>'Абай жолы' 100+ тілге аударылды." },
                { title:"📚 Ыбырай Алтынсарин (1841–1889)", content:"<b>Ағартушы, педагог, жазушы, этнограф</b><br><br><b>Ірі жетістіктері:</b><br>• Қазақ балаларына арнап <b>алғашқы мектеп</b> ашты (1864, Торғай)<br>• Қазақ жазуын реформалады<br>• Орынбор мектептерінің инспекторы болды<br><br><b>Маңызды шығармалары:</b><br>• 'Кел, балалар, оқылық!'<br>• 'Өнер-білім бар жұрттар'<br>• 'Киргизская хрестоматия' (оқу кітабы)" }
            ],
            english: [
                { title:"🌐 Шақтар — барлық түрі", content:"<b>Simple шақтар:</b><br>Present: I go / Past: I went / Future: I will go<br><br><b>Continuous шақтар:</b><br>Present: I am going / Past: I was going<br>Future: I will be going<br><br><b>Perfect шақтар:</b><br>Present: I have gone / Past: I had gone<br>Future: I will have gone<br><br><b>Perfect Continuous:</b><br>Present: I have been going (since/for...)" },
                { title:"🌐 Modal Verbs — кесте", content:"<b>can</b> — мүмкіндік (I can swim)<br><b>could</b> — өткен мүмкіндік / сыпайы сұрау<br><b>must</b> — қажеттілік (I must study)<br><b>mustn't</b> — тыйым (You mustn't lie)<br><b>should</b> — кеңес (You should sleep early)<br><b>may/might</b> — мүмкіндік (It may rain)<br><b>have to</b> — сыртқы міндет<br><b>need to</b> — қажеттілік<br><b>would</b> — шарт / сыпайы өтініш" },
                { title:"🌐 Conditionals — шарт сөйлемдер", content:"<b>0-шарт (факт, ғылыми):</b><br>If + V₁, ... V₁<br>'If water boils, it becomes steam.'<br><br><b>1-шарт (нақты мүмкін):</b><br>If + V₁, ... will + V<br>'If it rains, I will stay home.'<br><br><b>2-шарт (болжамды):</b><br>If + V₂, ... would + V<br>'If I were rich, I would travel.'<br><br><b>3-шарт (өткен, болмаған):</b><br>If + had + V₃, ... would have + V₃<br>'If I had studied, I would have passed.'" },
                { title:"🌐 Passive Voice — барлық шақ", content:"<b>Жалпы формула:</b> to be (шаққа сай) + V₃<br><br><b>Present Simple:</b> is/are + V₃<br>'The book is written.'<br><br><b>Past Simple:</b> was/were + V₃<br>'The book was written.'<br><br><b>Present Perfect:</b> has/have been + V₃<br>'The book has been written.'<br><br><b>Future:</b> will be + V₃<br>'The book will be written.'<br><br><b>Агентті білдіру:</b> + by... ('...by the author')" }
            ]
        }
    },

    tests: {
        kk: [
            // === ТАРИХ (25 сұрақ) ===
            { q:"Қазақ хандығы қай жерде, қай жылы құрылды?", options:["1430, Сығанақ","1465, Қозыбасы","1480, Түркістан","1500, Отырар"], correct:1, subject:"🏛️ Тарих" },
            { q:"Қазақ хандығының негізін қалаушылар:", options:["Қасым мен Хақназар","Керей мен Жәнібек","Тәуке мен Есім","Абылай мен Кенесары"], correct:1, subject:"🏛️ Тарих" },
            { q:"Тәуке ханның тұсында қабылданған заңдар жинағы:", options:["Қасқа жол","Жеті Жарғы","Ясса","Ескі жол"], correct:1, subject:"🏛️ Тарих" },
            { q:"'Ақтабан шұбырынды' деген оқиға қай жылы болды?", options:["1710","1716","1723","1730"], correct:2, subject:"🏛️ Тарих" },
            { q:"Алаш партиясы қай жылы құрылды?", options:["1905","1916","1917","1920"], correct:2, subject:"🏛️ Тарих" },
            { q:"'Алтын адам' табылған оба:", options:["Бесшатыр","Шілікті","Есік","Берел"], correct:2, subject:"🏛️ Тарих" },
            { q:"Аңырақай шайқасы қай жылы болды?", options:["1723","1726","1730","1741"], correct:2, subject:"🏛️ Тарих" },
            { q:"Қазақстан тәуелсіздігі қай жылы жарияланды?", options:["1990","1991","1992","1993"], correct:1, subject:"🏛️ Тарих" },
            { q:"Бумын қаған Түрік қағанатын қай жылы құрды?", options:["542","552","562","572"], correct:1, subject:"🏛️ Тарих" },
            { q:"Ашаршылық кезінде (1932–33) қырылған қазақтардың шамамен үлесі:", options:["10%","20%","40%","60%"], correct:2, subject:"🏛️ Тарих" },
            { q:"Алашорданың астанасы:", options:["Алматы","Өскемен","Семей","Орал"], correct:2, subject:"🏛️ Тарих" },
            { q:"Андронов мәдениеті қай дәуірге жатады?", options:["Тас дәуірі","Қола дәуірі","Темір дәуірі","Орта ғасыр"], correct:1, subject:"🏛️ Тарих" },
            { q:"Үйсіндердің астанасы:", options:["Отырар","Чигу","Суяб","Баласағұн"], correct:1, subject:"🏛️ Тарих" },
            { q:"'Неолит төңкерісі' деп нені атайды?", options:["Отты пайдалануды","Садақтың шығуын","Егіншілік пен мал шаруашылығының пайда болуын","Металл өңдеуді"], correct:2, subject:"🏛️ Тарих" },
            { q:"Қасым хан қай жылдары биледі?", options:["1480–1511","1511–1521","1521–1538","1538–1580"], correct:1, subject:"🏛️ Тарих" },
            { q:"Мезолит дәуірінің негізгі жетістігі:", options:["Жазудың пайда болуы","Садақ пен жебенің шығуы","Мыс балқыту","Ат үйрету"], correct:1, subject:"🏛️ Тарих" },
            { q:"1916 жылғы ұлт-азаттық көтерілісін кім бастады?", options:["Кенесары","Амангелді Иманов","Аблай","Бөкейханов"], correct:1, subject:"🏛️ Тарих" },
            { q:"Тиграхауда сақтарының мекендеген аумағы:", options:["Арал маңы","Жетісу мен Сырдария","Қаратеңіз жағалауы","Алтай"], correct:1, subject:"🏛️ Тарих" },
            { q:"'Абай жолы' романының авторы:", options:["Абай Құнанбайұлы","Жансүгіров","Мұхтар Әуезов","Мұқанов"], correct:2, subject:"🏛️ Тарих" },
            { q:"Желтоқсан оқиғасы қай жылы болды?", options:["1979","1982","1986","1989"], correct:2, subject:"🏛️ Тарих" },

            // === АЛГЕБРА (25 сұрақ) ===
            { q:"Арифметикалық прогрессияның айырымы қалай белгіленеді?", options:["S","n","d","q"], correct:2, subject:"📐 Алгебра" },
            { q:"Квадрат теңдеудің дискриминанты D < 0 болса:", options:["1 нақты түбір","2 нақты түбір","Нақты түбір жоқ","Шексіз түбір"], correct:2, subject:"📐 Алгебра" },
            { q:"Виет теоремасы: x₁·x₂ = ? (x² + px + q = 0 үшін)", options:["-p","p","q","-q"], correct:2, subject:"📐 Алгебра" },
            { q:"a² − b² формуласының ашылуы:", options:["(a−b)²","(a+b)²","(a−b)(a+b)","a²−2ab+b²"], correct:2, subject:"📐 Алгебра" },
            { q:"P(A) мәні қай аралықта болады?", options:["0 мен 1 аралығында","1 мен 10","−1 мен 1","Кез келген"],correct:0, subject:"📐 Алгебра" },
            { q:"Геом. прогрессия: b₁=8, q=1/2. S∞=?", options:["16","8","4","2"], correct:0, subject:"📐 Алгебра" },
            { q:"x² − 5x + 6 = 0 теңдеуінің түбірлері:", options:["1 және 6","2 және 3","−2 және −3","3 және 4"], correct:1, subject:"📐 Алгебра" },
            { q:"(a + b)² = ?", options:["a²+b²","a²+ab+b²","a²+2ab+b²","2a+2b"], correct:2, subject:"📐 Алгебра" },
            { q:"log₂(8) = ?", options:["2","3","4","8"], correct:1, subject:"📐 Алгебра" },
            { q:"4! = ?", options:["4","8","16","24"], correct:3, subject:"📐 Алгебра" },
            { q:"Прогрессия: a₁=2, d=3, n=5. Бесінші мүше:", options:["12","14","15","17"], correct:1, subject:"📐 Алгебра" },
            { q:"Парабола y=x²−4x+3 нің төбесінің x-координатасы:", options:["−2","2","4","3"], correct:1, subject:"📐 Алгебра" },
            { q:"Виет теоремасы: x₁+x₂ = ? (x²+px+q=0 үшін)", options:["p","-p","q","-q"], correct:1, subject:"📐 Алгебра" },
            { q:"Геометриялық прогрессияның еселігі нені білдіреді?", options:["Бірінші мүшені","Мүшелер айырымын","Мүшелер қатынасын","Мүшелер қосындысын"], correct:2, subject:"📐 Алгебра" },
            { q:"(a−b)² = ?", options:["a²−b²","a²+2ab+b²","a²−2ab+b²","a²+b²"], correct:2, subject:"📐 Алгебра" },

            // === ФИЗИКА (20 сұрақ) ===
            { q:"Ньютонның 2-заңы:", options:["E=mc²","F=ma","P=mg","A=FS"], correct:1, subject:"⚡ Физика" },
            { q:"Еркін түсудегі үдеу мәні:", options:["9,8 м/с²","10 м/с","8,9 м/с²","1 м/с²"], correct:0, subject:"⚡ Физика" },
            { q:"Кинетикалық энергия формуласы:", options:["mgh","mv²/2","Fs","ma"], correct:1, subject:"⚡ Физика" },
            { q:"Ом заңы:", options:["U=I+R","I=U/R","R=U+I","P=UI"], correct:1, subject:"⚡ Физика" },
            { q:"Қуат формуласы:", options:["P=mg","P=A/t","P=Fa","P=mv"], correct:1, subject:"⚡ Физика" },
            { q:"Потенциалдық энергия формуласы:", options:["mv²/2","mgh","FS","ma"], correct:1, subject:"⚡ Физика" },
            { q:"Бойль–Мариотт заңы (T=const):", options:["P/V=const","P·V=const","P·T=const","V/T=const"], correct:1, subject:"⚡ Физика" },
            { q:"Электр қуатының бірлігі:", options:["Вольт","Ампер","Ватт","Ом"], correct:2, subject:"⚡ Физика" },
            { q:"Тізбектей қосылыста жалпы кедергі:", options:["R=R₁·R₂","R=R₁+R₂","1/R=1/R₁+1/R₂","R=R₁-R₂"], correct:1, subject:"⚡ Физика" },
            { q:"Жұмыс формуласы:", options:["A=F/S","A=F·S·cosα","A=m·a","A=P·t"], correct:1, subject:"⚡ Физика" },

            // === ХИМИЯ (15 сұрақ) ===
            { q:"Бейтараптану реакциясы:", options:["Оксид+су","Тұз+су","Металл+қышқыл","Оксид+металл"], correct:1, subject:"🧪 Химия" },
            { q:"Периодтық жүйені кім жасады?", options:["Ломоносов","Дальтон","Менделеев","Авогадро"], correct:2, subject:"🧪 Химия" },
            { q:"Белсенді металдар белсенділік қатарының:", options:["Оң жағында","Сол жағында","Ортасында","H₂ кейін"], correct:1, subject:"🧪 Химия" },
            { q:"Алкандардың жалпы формуласы:", options:["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙHₙ"], correct:1, subject:"🧪 Химия" },
            { q:"Авогадро саны:", options:["3,14·10²³","6,022·10²³","1,6·10⁻¹⁹","9,8·10²³"], correct:1, subject:"🧪 Химия" },
            { q:"Оттек атомының тотығу дәрежесі (OH⁻ ионында):", options:["-1","-2","+2","0"], correct:1, subject:"🧪 Химия" },
            { q:"Натрий гидроксидінің формуласы:", options:["Na₂O","NaOH","Na₂SO₄","NaCl"], correct:1, subject:"🧪 Химия" },
            { q:"Органикалық химиядағы –OH тобы:", options:["Альдегид","Кетон","Спирт","Қышқыл"], correct:2, subject:"🧪 Химия" },

            // === БИОЛОГИЯ (15 сұрақ) ===
            { q:"Фотосинтез қай органоидта жүреді?", options:["Митохондрия","Рибосома","Хлоропласт","Ядро"], correct:2, subject:"🧬 Биология" },
            { q:"ДНҚ комплементарлығы: Аденин–?", options:["Цитозин","Гуанин","Тимин","Урацил"], correct:2, subject:"🧬 Биология" },
            { q:"Мендельдің F₂ ыдырауы:", options:["1:1","2:1","3:1","4:1"], correct:2, subject:"🧬 Биология" },
            { q:"Жасуша теориясын кімдер ашты?", options:["Дарвин мен Ламарк","Шлейден мен Шванн","Мендель мен Морган","Уотсон мен Крик"], correct:1, subject:"🧬 Биология" },
            { q:"Фотосинтездің жалпы теңдеуінде шығатын газ:", options:["CO₂","N₂","O₂","H₂"], correct:2, subject:"🧬 Биология" },
            { q:"АТФ дегеніміз не?", options:["ДНҚ ферменті","Энергия молекуласы","Ақуыз синтезі","Гормон"], correct:1, subject:"🧬 Биология" },
            { q:"Митоздың нәтижесінде пайда болатын жасушалар саны:", options:["1","2","4","8"], correct:1, subject:"🧬 Биология" },
            { q:"Рибосома қандай процесте басты рөл атқарады?", options:["Фотосинтез","Транскрипция","Трансляция","Митоз"], correct:2, subject:"🧬 Биология" },

            // === ГЕОМЕТРИЯ (15 сұрақ) ===
            { q:"a=3, b=4 болса, гипотенуза с=?", options:["5","7","12","25"], correct:0, subject:"📏 Геометрия" },
            { q:"Дөңгелектің ауданы формуласы:", options:["2πr","πd","πr²","4πr²"], correct:2, subject:"📏 Геометрия" },
            { q:"Шар көлемінің формуласы:", options:["πr³","4πr²","4/3·πr³","2/3·πr³"], correct:2, subject:"📏 Геометрия" },
            { q:"Трапецияның ауданы:", options:["a·h","(a+b)·h","½(a+b)·h","a·b/2"], correct:2, subject:"📏 Геометрия" },
            { q:"Куб көлемінің формуласы:", options:["a²","a³","6a²","3a"], correct:1, subject:"📏 Геометрия" },
            { q:"Ромбтың ауданы формуласы:", options:["a·h","½d₁·d₂","a²","2(a+b)"], correct:1, subject:"📏 Геометрия" },
            { q:"Цилиндр көлемінің формуласы:", options:["πr²","2πrh","πr²h","4/3πr³"], correct:2, subject:"📏 Геометрия" },
            { q:"Дөңгелек ұзындығының формуласы:", options:["πr","2πr","πr²","2πr²"], correct:1, subject:"📏 Геометрия" },

            // === ҚАЗАҚ ТІЛІ (15 сұрақ) ===
            { q:"'Биік' сөзінің сөз табы:", options:["Зат есім","Сын есім","Сан есім","Үстеу"], correct:1, subject:"📝 Қазақ тілі" },
            { q:"Бастауыштың сұрақтары:", options:["Кімге? Неге?","Кім? Не?","Кімді? Нені?","Қандай? Қай?"], correct:1, subject:"📝 Қазақ тілі" },
            { q:"Өткен шақ жұрнағы:", options:["-ады/-еді","-ып/-іп","-ды/-ді/-ты/-ті","-ар/-ер"], correct:2, subject:"📝 Қазақ тілі" },
            { q:"Сын есімнің сұрақтары:", options:["Кім? Не?","Қандай? Қай?","Қанша?","Қайда?"], correct:1, subject:"📝 Қазақ тілі" },
            { q:"'Оқыды' етістігінің шағы:", options:["Осы шақ","Өткен шақ","Келер шақ","Бұйрық рай"], correct:1, subject:"📝 Қазақ тілі" },
            { q:"Баяндауыштың сұрақтары:", options:["Кім? Не?","Не істеді? Қалай?","Кімді?","Қандай?"], correct:1, subject:"📝 Қазақ тілі" },
            { q:"'Тез' сөзінің сөз табы:", options:["Зат есім","Сын есім","Үстеу","Шылау"], correct:2, subject:"📝 Қазақ тілі" },

            // === АҒЫЛШЫН ТІЛІ (15 сұрақ) ===
            { q:"Present Perfect дұрыс формасы:", options:["She go","She goes","She has gone","She gone"], correct:2, subject:"🌐 Ағылшын тілі" },
            { q:"'I __ swim when I was 5' — Modal verb:", options:["must","could","should","will"], correct:1, subject:"🌐 Ағылшын тілі" },
            { q:"Passive Voice (Past Simple) дұрыс формасы:", options:["was built","is built","were builds","be built"], correct:0, subject:"🌐 Ағылшын тілі" },
            { q:"1st conditional: 'If it rains, I __ stay home.'", options:["would","will","might","should"], correct:1, subject:"🌐 Ағылшын тілі" },
            { q:"'She ____ this book already.' (Present Perfect):", options:["read","reads","has read","is reading"], correct:2, subject:"🌐 Ағылшын тілі" },
            { q:"2nd conditional формуласы:", options:["If+V₁...will+V","If+V₂...would+V","If+V₃...had+V","If+V₁...V₁"], correct:1, subject:"🌐 Ағылшын тілі" },
            { q:"'must not' — нені білдіреді?", options:["Мүмкіндік жоқ","Кеңес","Тыйым (болмайды)","Болашақ"], correct:2, subject:"🌐 Ағылшын тілі" },
            { q:"Relative clause-та 'адамды' білдіретін жалғауыш:", options:["which","where","who","that"], correct:2, subject:"🌐 Ағылшын тілі" }
        ]
    }
};

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#00e5ff', '#7c4dff', '#00c853', '#ff6b35'];
    for (let i = 0; i < 36; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (10 + Math.random() * 18) + 's';
        p.style.animationDelay = (Math.random() * 15) + 's';
        const size = 1 + Math.random() * 2.5;
        p.style.width = p.style.height = size + 'px';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
}

// ===== NAVIGATION =====
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('active-section');
    });
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        setTimeout(() => target.classList.add('active-section'), 10);
    }

    // Update nav active state
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const sectionToNav = { home:'navHome', subjects:'navSubjects', videos:'navSubjects', tests:'navTests', materials:'navMaterials', materialsList:'navMaterials' };
    const activeNavId = sectionToNav[sectionId];
    if (activeNavId) document.getElementById(activeNavId)?.classList.add('active');

    if (sectionId === 'tests') renderTests();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', e => showSection(e.target.getAttribute('data-target')));
});

// Logo click
document.querySelector('.logo').addEventListener('click', () => showSection('home'));

// ===== LANGUAGE =====
function setLang(lang) {
    currentLang = lang;
    document.getElementById('langKk').classList.toggle('active', lang === 'kk');
    document.getElementById('langRu').classList.toggle('active', lang === 'ru');

    const t = translations[lang];

    // Nav
    document.getElementById('navHome').innerText = t.navHome;
    document.getElementById('navSubjects').innerText = t.navSubjects;
    document.getElementById('navTests').innerText = t.navTests;
    document.getElementById('navMaterials').innerText = t.navMaterials;

    // Hero
    document.getElementById('heroTitle').innerHTML = t.heroTitle;
    document.getElementById('heroDesc').innerText = t.heroDesc;
    document.getElementById('btnStart').innerText = t.btnStart;
    document.getElementById('btnTest').innerText = t.btnTest;

    // Sections
    document.getElementById('subjectsTitle').innerText = t.subjectsTitle;
    document.getElementById('testsTitle').innerText = t.testsTitle;
    document.getElementById('materialsTitle').innerText = t.materialsTitle;

    // Footer
    document.getElementById('footerSupport').innerText = t.footerSupport;
    document.getElementById('btnAdmin').innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.287c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.934z"/></svg>${t.btnAdmin}`;

    renderSubjects();
    renderMaterialsSubjects();
}

document.getElementById('langKk').addEventListener('click', () => setLang('kk'));
document.getElementById('langRu').addEventListener('click', () => setLang('ru'));

// ===== SUBJECTS (VIDEO) =====
function renderSubjects() {
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';
    const subjectsList = translations[currentLang].subjects;
    for (let key in subjectsList) {
        const vidCount = database.videos.kk[key]?.length || 0;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="card-icon">${subjectIcons[key] || '📘'}</span>
            <h3>${subjectsList[key]}</h3>
            <div class="card-count">${vidCount} видео</div>
        `;
        card.onclick = () => openSubjectVideos(key, subjectsList[key]);
        grid.appendChild(card);
    }
}

// ===== VIDEO MODAL =====
function openVideoModal(title, url) {
    const modal = document.getElementById('videoModal');
    const titleEl = document.getElementById('videoModalTitle');
    const iframe = document.getElementById('videoModalIframe');
    titleEl.innerText = title;
    iframe.src = url + '?autoplay=1&rel=0';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoModalIframe');
    iframe.src = '';
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoModal(); });

function openSubjectVideos(subjectKey, subjectName) {
    showSection('videos');
    document.getElementById('currentSubjectTitle').innerHTML = `<span class="subject-icon-large">${subjectIcons[subjectKey]}</span> ${subjectName}`;

    const grid = document.getElementById('videosGrid');
    grid.innerHTML = '';
    const vids = database.videos[currentLang]?.[subjectKey] || database.videos.kk[subjectKey] || [];

    if (!vids.length) {
        grid.innerHTML = `<p style="color:#7090b0;font-size:15px;grid-column:1/-1;text-align:center;padding:70px 0;">Видеолар жақында қосылады...</p>`;
        return;
    }

    vids.forEach((vid, idx) => {
        let videoId = vid.url.split('/embed/')[1]?.split('?')[0] || '';
        let thumbUrl = videoId && videoId.length > 5
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : '';

        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <div class="video-thumb" style="${thumbUrl ? `background-image:url('${thumbUrl}')` : 'background:#050f25;'}">
                <span class="video-number">${idx + 1}</span>
            </div>
            <div class="video-info">
                <h4>${vid.title}</h4>
                <button class="btn-watch" onclick="openVideoModal('${vid.title.replace(/'/g,"\\'")}', '${vid.url}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    Видеоны ашу
                </button>
            </div>`;

        // Thumb click also opens modal
        card.querySelector('.video-thumb').onclick = () => openVideoModal(vid.title, vid.url);
        grid.appendChild(card);
    });
}

// ===== MATERIALS =====
function renderMaterialsSubjects() {
    const grid = document.getElementById('materialsSubjectsGrid');
    grid.innerHTML = '';
    const subjectsList = translations[currentLang].subjects;
    for (let key in subjectsList) {
        const matCount = database.materials.kk[key]?.length || 0;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="card-icon">${subjectIcons[key] || '📘'}</span>
            <h3>${subjectsList[key]}</h3>
            <div class="card-count">${matCount} тақырып</div>
        `;
        card.onclick = () => openSubjectMaterials(key, subjectsList[key]);
        grid.appendChild(card);
    }
}

function openSubjectMaterials(subjectKey, subjectName) {
    showSection('materialsList');
    document.getElementById('currentMaterialSubjectTitle').innerHTML = `<span style="font-size:28px">${subjectIcons[subjectKey]}</span> ${subjectName}`;
    const grid = document.getElementById('materialsGrid');
    grid.innerHTML = '';

    const mats = database.materials[currentLang]?.[subjectKey] || database.materials.kk[subjectKey] || [];
    if (!mats.length) {
        grid.innerHTML = `<p style="color:#7090b0;font-size:15px;text-align:center;grid-column:1/-1;padding:60px 0;">Материалдар жақында қосылады...</p>`;
        return;
    }
    mats.forEach(mat => {
        const card = document.createElement('div');
        card.className = 'material-card';
        card.innerHTML = `<h3>${mat.title}</h3><p>${mat.content}</p>`;
        grid.appendChild(card);
    });
}

// ===== TESTS =====
let currentQuestionIndex = 0;
let score = 0;
let currentTestList = [];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderTests() {
    const container = document.getElementById('testContainer');
    container.innerHTML = '';
    const allTests = database.tests[currentLang] || database.tests.kk;
    currentTestList = shuffle(allTests).slice(0, 25);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const container = document.getElementById('testContainer');
    container.innerHTML = '';
    const test = currentTestList[currentQuestionIndex];

    // Header
    const header = document.createElement('div');
    header.className = 'test-header';
    header.innerHTML = `
        <span class="test-counter">Сұрақ ${currentQuestionIndex + 1} / ${currentTestList.length}</span>
        <span class="test-score-live">✅ ${score} дұрыс</span>
    `;
    container.appendChild(header);

    // Progress
    const progress = document.createElement('div');
    progress.className = 'test-progress';
    const bar = document.createElement('div');
    bar.className = 'test-progress-bar';
    bar.style.width = ((currentQuestionIndex / currentTestList.length) * 100) + '%';
    progress.appendChild(bar);
    container.appendChild(progress);

    // Subject badge
    if (test.subject) {
        const badge = document.createElement('div');
        badge.className = 'subject-badge';
        badge.innerText = test.subject;
        container.appendChild(badge);
    }

    const qText = document.createElement('div');
    qText.className = 'test-q-text';
    qText.innerText = test.q;
    container.appendChild(qText);

    const optionsGrid = document.createElement('div');
    optionsGrid.className = 'test-options-grid';
    let answered = false;
    const letters = ['A','B','C','D'];

    test.options.forEach((opt, optIndex) => {
        const btn = document.createElement('button');
        btn.className = 'test-option';
        btn.innerHTML = `<span class="option-letter">${letters[optIndex]}</span>${opt}`;
        btn.onclick = () => {
            if (answered) return;
            answered = true;
            Array.from(optionsGrid.children).forEach(c => { c.disabled = true; c.style.cursor = 'default'; });
            if (optIndex === test.correct) {
                btn.classList.add('correct'); score++;
            } else {
                btn.classList.add('wrong');
                optionsGrid.children[test.correct].classList.add('correct');
            }
            setTimeout(() => showNextButton(), 600);
        };
        optionsGrid.appendChild(btn);
    });
    container.appendChild(optionsGrid);
}

function showNextButton() {
    const container = document.getElementById('testContainer');
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-primary';
    nextBtn.style.cssText = 'margin-top:20px;display:block;width:100%;max-width:300px;margin-left:auto;margin-right:auto;';
    const isLast = currentQuestionIndex === currentTestList.length - 1;
    nextBtn.innerHTML = isLast ? '🏆 Нәтижені көру' : 'Келесі сұрақ ➡';
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentTestList.length) showQuestion();
        else showResults();
    };
    document.getElementById('testContainer').appendChild(nextBtn);
}

function showResults() {
    const container = document.getElementById('testContainer');
    const percentage = Math.round((score / currentTestList.length) * 100);
    let emoji, msg, color, grade;
    if (percentage >= 90) { emoji = "🏆"; msg = "Керемет! Сен аттестатқа толық дайынсың!"; color = "#00e5ff"; grade = "A+"; }
    else if (percentage >= 75) { emoji = "🥇"; msg = "Өте жақсы нәтиже! Бірақ кейбір тақырыптарды қайталаңыз."; color = "#00c853"; grade = "A"; }
    else if (percentage >= 60) { emoji = "👍"; msg = "Жақсы! Видеоларды қарап, тапсырмаларды шеш."; color = "#ffab00"; grade = "B"; }
    else if (percentage >= 40) { emoji = "💪"; msg = "Болады! Материалдарды оқып, қайта тапсыр."; color = "#ff6b35"; grade = "C"; }
    else { emoji = "📚"; msg = "Уайымдама! Видеолардан бастап, дайындалуды жалғастыр!"; color = "#ff1744"; grade = "D"; }

    container.innerHTML = `
        <div style="text-align:center;padding:50px 20px;">
            <div style="font-size:80px;margin-bottom:16px;line-height:1;">${emoji}</div>
            <div style="font-size:80px;font-family:'Playfair Display',serif;font-weight:900;color:${color};
                text-shadow:0 0 40px ${color}66;line-height:1;margin-bottom:8px;">${percentage}%</div>
            <div style="font-size:22px;font-weight:800;color:${color};margin-bottom:16px;">Баға: ${grade}</div>
            <div style="font-size:17px;color:#e2f0ff;margin-bottom:10px;font-weight:600;">
                ${currentTestList.length} сұрақтың <span style="color:${color}">${score}</span>-ін дұрыс жауап бердің
            </div>
            <p style="font-size:14px;color:#7090b0;margin-bottom:40px;max-width:400px;margin-left:auto;margin-right:auto;">${msg}</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                <button class="btn-primary" onclick="renderTests()">🔄 Қайта тапсыру</button>
                <button class="btn-secondary" onclick="showSection('subjects')">📺 Видеоларға оралу</button>
                <button class="btn-back" style="padding:13px 24px;" onclick="showSection('materials')">📝 Конспектілер</button>
            </div>
        </div>`;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setLang('kk');
    document.getElementById('navHome').classList.add('active');
});