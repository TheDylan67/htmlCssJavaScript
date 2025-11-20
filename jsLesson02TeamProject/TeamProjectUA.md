Звісно\! Ось переклад вашого посібника українською мовою, де інструкції перекладено, а фрагменти коду залишено англійською.

# Сторінка профілю команди - Посібник до проєкту

## Огляд проєкту

Ви та ваша команда створите ще одну сторінку "Про нас", яка відображатиме інформацію про кожного члена команди — подібно до нашого першого веб-сайту та першої спроби збору даних. Однак цього разу ви будете використовувати змінні JavaScript для зберігання інформації, а також використовувати JavaScript для виконання простих розрахунків, щоб показати цікаву статистику команди\!

**Розмір команди:** 2 студенти

-----

## Чого ви навчитеся

  - Працювати разом над одним спільним проєктом
  - Використовувати змінні для зберігання інформації
  - Виконувати прості розрахунки (додавання, обчислення середнього значення тощо)
  - Відображати збережену інформацію на веб-сторінці
  - Робити сторінку презентабельною за допомогою CSS

-----

## 👥 Ролі в команді

Кожен робить свій внесок\! Ось як ви можете розподілити роботу:

### Контент

  - Зібрати інформацію про всіх
  - Допомогти організувати структуру HTML
  - Переконатися, що розділ кожного учасника включено

### Кодування

  - Налаштувати змінні JavaScript
  - Написати розрахунки
  - Підключити JavaScript до HTML

### Дизайн

  - Стилізувати сторінку за допомогою CSS
  - Обрати кольори та шрифти
  - Зробити так, щоб вона виглядала професійно

**ВАЖЛИВО:** Кожен повинен написати хоча б ТРОХИ коду на JavaScript\! Використовуйте live share у VS Code, щоб розподілити роботу. Наприклад, хтось може вставити значення своїх змінних у спільний файл JavaScript. Хтось може працювати над CSS самостійно, а потім поділитися стилями з товаришем по команді, який більше працює над HTML та JavaScript.

-----

## Вимоги до проєкту

Ваш проєкт ПОВИНЕН включати:

### Для кожного члена команди (заповніть наступне та оберіть ще щонайменше два власних запитання/відповіді):

  - [ ] Ім'я
  - [ ] Вік
  - [ ] Улюблена відеогра
  - [ ] Улюблена пісня або виконавець
  - [ ] Найкраща страва, яку вони коли-небудь їли
  - [ ] Куди б вони пішли вечеряти в понеділок увечері
  - [ ] Чи вважають вони пітбулів страшними? (Так/Ні)
  - [ ] Кобі чи Леброн?
  - [ ] Що вони робитимуть через 5 років
  - [ ] *Ви повинні додати щонайменше два власних запитання\! Можливо, скільки з вас вигравали у "вибивного" 😊*

### Командні розрахунки (щонайменше ці 3):

  - [ ] Загальний сумарний вік команди
  - [ ] Середній вік команди
  - [ ] Загальна кількість членів команди
  - [ ] *Додайте більше, якщо хочете\!*

### Стилізація:

  - [ ] Власні кольори та шрифти (НЕ використовуйте те, що надано — зробіть так, щоб це виглядало, як би ви стилізували свій особистий веб-сайт — пошукайте натхнення в Інтернеті)
  - [ ] Кожен член команди має свій власний стилізований розділ
  - [ ] Сторінка виглядає організованою та цікавою

-----

## 🚀 Стартовий код

### Крок 1: Створіть ваші файли

Створіть три файли:

  - `index.html`
  - `style.css`
  - `script.js`

-----

### Крок 2: Структура HTML

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team Profile</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nova+Script">
</head>
<body>
    <div class="container">
        <h1>Meet Our Team! 🌟</h1>
        
        <div class="team-stats">
            <h2>Team Statistics</h2>
            <p>Total Team Members: <span id="totalMembers">0</span></p>
            <p>Combined Age: <span id="totalAge">0</span> years</p>
            <p>Average Age: <span id="averageAge">0</span> years</p>
            </div>

        <div class="member-card">
            <h2 id="member1Name"></h2>
            <p><strong>🎂 Age:</strong> <span id="member1Age"></span></p>
            <p><strong>🎮 Favorite Video Game:</strong> <span id="member1Game"></span></p>
            <p><strong>🎵 Favorite Song/Artist:</strong> <span id="member1Music"></span></p>
            <p><strong>🍕 Best Food Ever Eaten:</strong> <span id="member1BestFood"></span></p>
            <p><strong>🍔 Monday Night Dinner Spot:</strong> <span id="member1Restaurant"></span></p>
            <p><strong>🐕 Are Pit Bulls Scary?:</strong> <span id="member1PitBull"></span></p>
            <p><strong>🏀 Kobe or LeBron?:</strong> <span id="member1Basketball"></span></p>
            <p><strong>🔮 In 5 Years I'll Be (doing what?):</strong> <span id="member1Future"></span></p>
        </div>

        <div class="member-card">
            <h2 id="member2Name">Name</h2>
            <p><strong>🎂 Age:</strong> <span id="member2Age">0</span></p>
            <p><strong>🎮 Favorite Video Game:</strong> <span id="member2Game">?</span></p>
            <p><strong>🎵 Favorite Song/Artist:</strong> <span id="member2Music">?</span></p>
            <p><strong>🍕 Best Food Ever Eaten:</strong> <span id="member2BestFood">?</span></p>
            <p><strong>🍔 Monday Night Dinner Spot:</strong> <span id="member2Restaurant">?</span></p>
            <p><strong>🐕 Are Pit Bulls Scary?:</strong> <span id="member2PitBull">?</span></p>
            <p><strong>🏀 Kobe or LeBron?:</strong> <span id="member2Basketball">?</span></p>
            <p><strong>🔮 In 5 Years I'll Be (doing what?):</strong> <span id="member2Future">?</span></p>
        </div>

        </div>
    
    <script src="script.js"></script>
</body>
</html>
```

-----

### Крок 3: Базова стилізація

**style.css**

```css
/* Базовий скидання стилів */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 42px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

/* Секція статистики команди */
.team-stats {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.team-stats h2 {
    margin-bottom: 20px;
    font-size: 28px;
}

.team-stats p {
    font-size: 18px;
    margin: 10px 0;
}

.team-stats span {
    font-weight: bold;
    font-size: 24px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 5px 15px;
    border-radius: 20px;
}

/* Картки учасників */
.member-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 25px;
    border-left: 8px solid #667eea;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.member-card h2 {
    color: #667eea;
    margin-bottom: 20px;
    font-size: 32px;
    border-bottom: 3px solid #667eea;
    padding-bottom: 10px;
}

.member-card p {
    margin: 12px 0;
    font-size: 17px;
    line-height: 1.6;
}

.member-card strong {
    color: #555;
    min-width: 200px;
    display: inline-block;
}

.member-card span {
    color: #333;
    font-weight: 500;
}

/* Різні кольори для кожної картки */
.member-card:nth-child(2) {
    border-left-color: #f093fb;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.member-card:nth-child(2) h2 {
    color: #f093fb;
    border-bottom-color: #f093fb;
}

.member-card:nth-child(3) {
    border-left-color: #4facfe;
    background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
}

.member-card:nth-child(3) h2 {
    color: #4facfe;
    border-bottom-color: #4facfe;
}

.member-card:nth-child(4) {
    border-left-color: #43e97b;
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.member-card:nth-child(4) h2 {
    color: #43e97b;
    border-bottom-color: #43e97b;
}

/* Робимо адаптивним */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    
    h1 {
        font-size: 32px;
    }
    
    .member-card strong {
        display: block;
        margin-bottom: 5px;
    }
}
```

-----

### Крок 4: Стартовий код JavaScript

**script.js**

```javascript
// ============================================
// СТОРІНКА ПРОФІЛЮ КОМАНДИ
// Учасники команди: [Додайте ваші імена тут!]
// ============================================

// ============================================
// ЗМІННІ УЧАСНИКА 1
// ============================================

let member1Name = "Alex";
let member1Age = 16;
let member1Game = "Minecraft";
let member1Music = "Bad Bunny";
let member1BestFood = "My grandma's tamales";
let member1Restaurant = "Chipotle";
let member1PitBull = "No, they're sweet!";
let member1Basketball = "LeBron";
let member1Future = "In college studying computer science";


// ============================================
// ЗМІННІ УЧАСНИКА 2
// ============================================

let member2Name = "Jordan";
let member2Age = 17;
let member2Game = "Fortnite";
let member2Music = "Taylor Swift";
let member2BestFood = "Pizza";
let member2Restaurant = "Five Guys";
let member2PitBull = "They're adorable!";
let member2Basketball = "Kobe";
let member2Future = "Traveling the world";


// ============================================
// КОМАНДНІ РОЗРАХУНКИ
// ============================================

// Скільки членів команди?
let totalMembers = 2;  // Змініть на 3, якщо у вас 3 людини!

// Обчислити загальний вік
let totalAge = member1Age + member2Age;  // Додайте member3Age, якщо потрібно

// Обчислити середній вік
let averageAge = totalAge / totalMembers;

// ============================================
// ВІДОБРАЖЕННЯ СТАТИСТИКИ КОМАНДИ
// ============================================

document.getElementById('totalMembers').textContent = totalMembers;
document.getElementById('totalAge').textContent = totalAge;
document.getElementById('averageAge').textContent = averageAge.toFixed(1);

// ============================================
// ВІДОБРАЖЕННЯ ДАНИХ УЧАСНИКА 1
// ============================================

document.getElementById('member1Name').textContent = member1Name;
document.getElementById('member1Age').textContent = member1Age;
document.getElementById('member1Game').textContent = member1Game;
document.getElementById('member1Music').textContent = member1Music;
document.getElementById('member1BestFood').textContent = member1BestFood;
document.getElementById('member1Restaurant').textContent = member1Restaurant;
document.getElementById('member1PitBull').textContent = member1PitBull;
document.getElementById('member1Basketball').textContent = member1Basketball;
document.getElementById('member1Future').textContent = member1Future;


// ============================================
// ВІДОБРАЖЕННЯ ДАНИХ УЧАСНИКА 2
// ============================================

document.getElementById('member2Name').textContent = member2Name;
document.getElementById('member2Age').textContent = member2Age;
document.getElementById('member2Game').textContent = member2Game;
document.getElementById('member2Music').textContent = member2Music;
document.getElementById('member2BestFood').textContent = member2BestFood;
document.getElementById('member2Restaurant').textContent = member2Restaurant;
document.getElementById('member2PitBull').textContent = member2PitBull;
document.getElementById('member2Basketball').textContent = member2Basketball;
document.getElementById('member2Future').textContent = member2Future;


// ============================================
// ВИВІД В КОНСОЛЬ (для тестування)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);
```

-----

## 📝 Покрокові інструкції

### Фаза 1: Налаштування

1.  **Створіть ваші файли** та скопіюйте стартовий код
2.  **Відкрийте в Live Server**, щоб побачити, як це працює
3.  **Перевірте** - ви повинні побачити інформацію про Алекса та Джордана
4.  **Додайте імена членів вашої команди** у верхній частині `script.js`

### Фаза 2: Додайте реальну інформацію про вашу команду

1.  **Кожен член команди заповнює свій власний розділ:**

<!-- end list -->

```javascript
let member1Name = "Your Real Name";
let member1Age = 15;  // Your real age
let member1Game = "Your favorite video game";
let member1Music = "Your favorite song or artist";
// ... і так далі
```

2.  **Друкуйте по черзі** - одна людина на розділ учасника

3.  **Будьте чесними та креативними\!** Це мають бути цікаві відповіді

4.  **Зберігайте та оновлюйте сторінку** після кожної людини, щоб побачити зміни

5.  **Якщо у вас 3 учасники:**

<!-- end list -->

  - Скопіюйте та вставте один із розділів `member-card` в HTML
  - Змініть усі номери на 3 (`member3-name`, `member3-age` тощо)
  - Оновіть `totalMembers` до 3
  - Додайте `+ member3Age` до розрахунку `totalAge`

### Фаза 3: Налаштуйте стиль

**Зробіть так, щоб це виглядало як ВАША команда\!**

**Швидкі зміни:**

Змініть основні градієнтні кольори:

```css
body {
    background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
    /* Спробуйте різні кольори! */
}
```

Змініть кольори блоку статистики:

```css
.team-stats {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
}
```

**Додайте назву команди або девіз** - додайте це в HTML відразу після `h1`:

```html
<p class="team-motto">"Code Hard, Play Harder"</p>
```

Стилізуйте це в CSS:

```css
.team-motto {
    text-align: center;
    font-size: 24px;
    color: #667eea;
    font-style: italic;
    margin-bottom: 30px;
}
```

## Це необов'язково - це стосується логіки, яку ми ЩЕ НЕ вивчали, тож не соромтеся пропустити це. До того ж, це не так цікаво, оскільки є лише два-три учасники, але якщо вам цікаво, подивіться, що це робить...

### Фаза 4: Додайте цікаві розрахунки\!

**Зробіть ваш розділ статистики цікавішим\!**

**Приклад 1: Підрахуйте, хто обрав Кобі, а хто Леброна**

```javascript
// Після інших розрахунків команди додайте:
let kobeCount = 0;
let lebronCount = 0;

// Count each person
if (member1Basketball === "Kobe" || member1Basketball === "Kobe forever") {
    kobeCount++;
} else {
    lebronCount++;
}

if (member2Basketball === "Kobe" || member2Basketball === "Kobe forever") {
    kobeCount++;
} else {
    lebronCount++;
}

if (member3Basketball === "Kobe" || member3Basketball === "Kobe forever") {
    kobeCount++;
} else {
    lebronCount++;
}

// Display it
document.getElementById('kobe-count').textContent = kobeCount;
document.getElementById('lebron-count').textContent = lebronCount;
```

Додайте в HTML у `team-stats`:

```html
<p>Team Kobe: <span id="kobe-count">0</span> | Team LeBron: <span id="lebron-count">0</span></p>
```

**Приклад 2: Підрахуйте, хто вважає пітбулів страшними**

```javascript
let scaredCount = 0;
let notScaredCount = 0;

// Check each person (look for "yes" or "no" in their answer)
if (member1PitBull.toLowerCase().includes("yes") || member1PitBull.toLowerCase().includes("little")) {
    scaredCount++;
} else {
    notScaredCount++;
}

// ... repeat for member2 and member3

document.getElementById('scared-count').textContent = scaredCount;
document.getElementById('notscared-count').textContent = notScaredCount;
```

**Приклад 3: Скільки років буде кожному через 5 років?**

```javascript
let member1AgeFuture = member1Age + 5;
let member2AgeFuture = member2Age + 5;
let member3AgeFuture = member3Age + 5;

// Display in each person's card (add to HTML first):
document.getElementById('member1-age-future').textContent = member1AgeFuture;
```

Додайте до HTML кожного учасника:

```html
<p><strong>Age in 5 Years:</strong> <span id="member1-age-future">0</span></p>
```

**Приклад 4: Знайдіть найпопулярніший ресторан**

```javascript
// This is advanced, but you can try!
console.log("Restaurant votes:");
console.log(member1Name + " votes: " + member1Restaurant);
console.log(member2Name + " votes: " + member2Restaurant);
console.log(member3Name + " votes: " + member3Restaurant);

// You can manually see which one appears most and add it to your page
```

-----

## Більше цікавих ідей\!

### 1\. **Додайте власні запитання**

Не подобається одне із запитань? Змініть його\! Ось як:

**В HTML**, змініть запитання:

```html
<p><strong>🎬 Favorite Movie:</strong> <span id="member1-movie">?</span></p>
```

**В JavaScript**, додайте змінну:

```javascript
let member1Movie = "Spider-Man: Into the Spider-Verse";
```

**Відобразіть її:**

```javascript
document.getElementById('member1-movie').textContent = member1Movie;
```

**Інші ідеї для запитань:**

  - Улюблений тіктокер або ютубер
  - Автомобіль мрії
  - Улюблена пора року (зима, весна, літо, осінь)
  - Коти чи собаки?
  - Ананас на піці? (Так/Ні)
  - Місце для відпустки мрії
  - Улюблений предмет у школі
  - Якби ви могли мати будь-яку суперсилу?

### 2\. **Зробіть картки інтерактивними**

Додайте це до вашого CSS:

```css
.member-card:hover {
    transform: scale(1.02) rotate(1deg);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}
```

### 3\. **Додайте фотографії профілю (емодзі)**

Додайте на початку кожної картки учасника в HTML:

```html
<div class="profile-emoji">🎮</div>
```

Стилізуйте це:

```css
.profile-emoji {
    font-size: 80px;
    text-align: center;
    margin-bottom: 15px;
}
```

Нехай кожна людина обере свій власний емодзі\!

### 4\. **Додайте розділ "Командні згоди"**

Покажіть, у чому ваша команда погоджується:

```javascript
// Check if everyone likes LeBron
let allLikeLebron = false;
if (lebronCount === totalMembers) {
    allLikeLebron = true;
}

// Display it
if (allLikeLebron) {
    document.getElementById('team-agreement').textContent = "We all agree: LeBron is the GOAT! 🐐";
}
```

-----

## Чек-лист для тестування

Перш ніж закінчити, перевірте:

  - [ ] Усі імена членів команди відображаються правильно
  - [ ] На всі запитання є відповіді для кожної людини
  - [ ] Загальна кількість учасників правильна
  - [ ] Загальний та середній вік правильні
  - [ ] CSS виглядає добре, і кольори працюють
  - [ ] Немає орфографічних помилок
  - [ ] Сторінка добре виглядає на екранах різних розмірів
  - [ ] Усі члени команди вписали свої імена у верхньому коментарі

-----

## Поради для успіху

**Відповідаючи на запитання:**

  - Будьте креативними\! Це повинно показати вашу особистість
  - Можна бути смішними або жартівливими
  - Будьте чесними - це для того, щоб краще пізнати свою команду
  - Якщо у вас немає улюбленої відеогри, оберіть будь-яку гру, в яку ви грали або про яку чули

**Працюючи разом:**

  - Працюйте за клавіатурою по черзі - міняйтеся кожні 20 хвилин
  - Допомагайте один одному придумувати відповіді
  - Зберігайте свою роботу кожні 10 хвилин\!
  - Отримуйте задоволення - це повинно бути приємно\!

**Якщо щось не працює:**

  - Перевірте консоль (F12) на наявність повідомлень про помилки
  - Переконайтеся, що імена `id` точно збігаються в HTML та JavaScript
  - Перевірте наявність помилок у назвах змінних
  - Переконайтеся, що лапки збігаються (`"` не `”` або `’`)
  - Попросіть товариша по команді перевірити ваш код

-----

## Що потрібно здати

1.  Усі три збережені файли (HTML, CSS, JS)
2.  Імена членів команди у верхній частині `script.js`
3.  На всі запитання є відповіді для кожного члена команди
4.  Щонайменше 3 розрахунки в статистиці команди
5.  Власна стилізація, яка робить сторінку ВАШОЇ команди
6.  Будьте готові представити проєкт класу\!
7.  Завантажте проєкт в GitHub репозиторій одного з товаришів по команді, у підпапку **"teamProfilePage"** всередині папки `main htmlCssJavaScript`

-----

## Презентація

**Презентація триває 3-4 хвилини:**

  - Представте членів вашої команди
  - Покажіть ваш дизайн/стилізацію
  - Поділіться однією смішною або цікавою відповіддю від вашої команди
  - Вкажіть на найкрутіший розрахунок або статистику

**Що варто згадати:**

  - Що було найскладнішим?
  - Що було найцікавішим?
  - Що б ви додали, якби мали більше часу?

-----

## Розширення-челенджі

**Якщо ви закінчили раніше:**

  - Додайте більше запитань (улюблений фільм, робота мрії тощо)
  - Обчисліть загальну кількість років до випуску кожного
  - Підрахуйте згоди в команді (скільки людей обрали однаковий ресторан?)
  - Додайте більше емодзі по всьому тексту

-----

Успіхів, і весело проводьте час, знайомлячись зі своїми товаришами по команді\!