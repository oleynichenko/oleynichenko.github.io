(function () {
'use strict';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `noname`;

var model = new class {

  constructor() {
    this.name = DEFAULT_NAME;
  }

  set userName(name) {
    if (name !== ` `) {
      this.name = name;
    }
  }

  load(adapter) {
    return fetch(`${SERVER_URL}/questions`)
      .then((resp) => resp.json())
      .then(adapter.preprocess);
  }

  send(data, adapter) {
    const requestSettings = {
      body: adapter.toServer(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/${this.name}`, requestSettings);
  }

  loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${this.name}`)
      .then((resp) => resp.json());
  }
}();

const Rules = {
  LEVELS_QUANTITY: 0,
  LIVES_QUANTITY: 3
};

const PassOptions = {
  FAST: {
    class: `fast`,
    name: `Бонус за скорость`,
    cost: 50,
    duration: 20
  },
  CORRECT: {
    class: `correct`,
    cost: 100,
    duration: 30
  },
  SLOW: {
    class: `slow`,
    duration: 10,
    name: `Штраф за медленность`,
    cost: -50,
  },
  WRONG: {
    class: `wrong`
  },
  HEART: {
    class: `heart`,
    name: `Бонус за жизни`,
    cost: 50,
  },
  UNKNOWN: {
    class: `unknown`
  }
};

const Task = Object.freeze({
  FIRST: `two-of-two`,
  SECOND: `tinder-like`,
  THIRD: `one-of-three`
});

const taskOption = Object.freeze({
  [Task.FIRST]: {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    class: ``,
    questions: [`question-1`, `question-2`]
  },
  [Task.SECOND]: {
    title: `Угадай, фото или рисунок?`,
    class: `game__content--wide`,
    questions: [`question-1`]
  },
  [Task.THIRD]: {
    title: `Найдите рисунок среди изображений`,
    class: `game__content--triple`,
    questions: []
  }
});

let initialState = {
  level: 1,
  lives: Rules.LIVES_QUANTITY,
  results: [],
  time: PassOptions.CORRECT.duration
};

const getLevel = (num, data) => data[`level${num}`];
const getTask = (level) => taskOption[level.task];

const checkIsQuestion = (task) => task.questions.length > 0;

const countLives = (number, result) => {
  const isAnswerWrong = (result === PassOptions.WRONG.class) ? 1 : 0;
  return number - isAnswerWrong;
};

const addResult = (index, result, arr) => {
  arr[index] = result;
  return arr;
};

const getNextState = (state, result) => Object.assign({}, state, {
  level: state.level + 1,
  lives: countLives(state.lives, result),
  results: addResult(state.level - 1, result, state.results),
  time: PassOptions.CORRECT.duration
});

const getLevelResult = (levelPassed, levelTime) => {
  if (!levelPassed || levelTime <= 0) {
    return PassOptions.WRONG.class;
  } else if (levelPassed && levelTime > PassOptions.FAST.duration) {
    return PassOptions.FAST.class;
  } else if (levelPassed && levelTime < PassOptions.SLOW.duration) {
    return PassOptions.SLOW.class;
  } else if (levelPassed) {
    return PassOptions.CORRECT.class;
  } else {
    return PassOptions.WRONG.class;
  }
};

function receiveImages(arr) {
  return arr.map(function (item) {
    return {
      src: item.image.url,
      type: item.type
    };
  });
}

function receiveTask(string) {
  let task = Task.FIRST;
  switch (string) {
    case `tinder-like`:
      task = Task.SECOND;
      break;
    case `one-of-three`:
      task = Task.THIRD;
      break;
  }
  return task;
}

function receiveLevel(obj) {
  return {
    task: receiveTask(obj.type),
    images: receiveImages(obj.answers)
  };
}

var dataAdapter = new class {

  preprocess(data) {
    const obj = {};

    data.forEach(function (item, index) {
      obj[`level${index + 1}`] = receiveLevel(item);
    });

    return obj;
  }

  toServer(data) {
    return JSON.stringify({
      stats: data.results,
      lives: data.lives
    });
  }
}();

var footer$1 = ``;

const mainCentral = document.querySelector(`.central`);

class AbstractView {
  get template() {
    throw new Error(`You have to define template for view`);
  }

  createElement(text) {
    const elem = document.createElement(`section`);
    elem.innerHTML = text;
    return elem;
  }

  showScreen() {
    mainCentral.innerHTML = ``;
    mainCentral.appendChild(this.element);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.createElement(this.template);
      this.bind();
    }
    return this._element;
  }
}

class IntroView extends AbstractView {
  get template() {
    return `
    <div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer$1}`;
  }
}

const intro = new class {
  constructor() {
    this._view = new IntroView();
  }

  init() {
    this._view.showScreen();
  }
}();

class GreetingView extends AbstractView {
  get template() {
    return `
    <div class="greeting central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>Лучшие художники-фотореалисты бросают тебе вызов!</h3>
        <p>Правила игры просты.<br>
          Нужно отличить рисунок от фотографии и сделать выбор.<br>
          Задача кажется тривиальной, но не думай, что все так просто.<br>
          Фотореализм обманчив и коварен.<br>
          Помни, главное — смотреть очень внимательно.</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>
    ${footer$1}`;
  }

  bind() {
    const greetingContinue = this.element.querySelector(`.greeting__continue`);
    greetingContinue.addEventListener(`click`, () => {
      this.onNext();
    });
  }
}

class Greeting {
  constructor() {
    this._view = new GreetingView();
  }

  init() {
    this._view.onNext = function () {
      app.showRules();
    };

    this._view.showScreen();
  }
}

const greeting = new Greeting();

const headerInfo = (state) => `
  <h1 class="game__timer">${state.time}</h1>
  <div class="game__lives">
    ${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>`;

const getHeaderInfo = (state) => {
  return (state) ? headerInfo(state) : ``;
};

var header = (state) => {
  return `
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      ${getHeaderInfo(state)}
    </header>`;
};

class RulesView extends AbstractView {

  get template() {
    return `
    ${header()}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer$1}`;
  }

  bind() {
    const rulesBtn = this.element.querySelector(`.rules__button`);
    const rulesInput = this.element.querySelector(`.rules__input`);

    rulesInput.addEventListener(`input`, () => {
      rulesBtn.disabled = rulesInput.value.length === 0;
    });

    rulesBtn.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.onNext(rulesInput.value);
    });

    const headerBack = this.element.querySelector(`.header__back`);
    headerBack.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.onHeaderBack();
    });
  }
}

class Rules$1 {
  constructor() {
    this._view = new RulesView();
  }

  init() {
    this._view.onNext = function (name) {
      app.level();
      model.userName = name;
    };

    this._view.onHeaderBack = () => {
      app.reload();
    };

    this._view.showScreen();
  }
}

const rules = new Rules$1();

class LevelView extends AbstractView {
  constructor(state, data) {
    super();
    this.state = state;
    this.level = getLevel(this.state.level, data);
    this.task = getTask(this.level);
    this.hasQuestion = checkIsQuestion(this.task);
    this.time = this.state.time;
  }

  _getImageType(num) {
    return this.level.images[num].type;
  }

  // возвращает input с именем name с формы form
  _getInputElements(form, name) {
    return Array.from(form.elements[name]);
  }

  // возвращает выбранный input
  _getCheckedInput(arr) {
    const elem = arr.find((input) => input.checked);
    return elem;
  }

  _isAnswered(form) {
    return this.task.questions.every((question) => {
      return this._getInputElements(form, question).some((input) => input.checked);
    });
  }

  _isQuestionsAnswerRight(form) {
    return this.task.questions.every((question, index) => {
      const arr = this._getInputElements(form, question);
      return this._getCheckedInput(arr).value === this._getImageType(index);
    });
  }

  _isChoosenAnswerRight(num) {
    return this.level.images[num].type === `painting`;
  }

  _templateQuestion(num) {
    return `
      <label class="game__answer game__answer--photo">
        <input name="question-${num}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question-${num}" type="radio" value="painting">
        <span>Рисунок</span>
      </label>`;
  }

  _templateGameOption(photo, index) {
    return `
      <div class="game__option">
        <img src="${photo}" alt="Option ${index}">
        ${(this.hasQuestion) ? this._templateQuestion(index) : ``}
      </div>`;
  }

  get template() {
    return `
      ${header(this.state)}
      <div class="game">
        <p class="game__task">${this.task.title}</p>
        <form class="game__content ${this.task.class}">
          ${this.level.images.map((value, index) => this._templateGameOption(value.src, index + 1)).join(``)}
        </form>
      </div>
      <div class="stats">
        <ul class="stats">
          ${this.state.results.map((item) => `<li class="stats__result stats__result--${item}"></li>`).join(``)}
        </ul>
      </div>
      ${footer$1}`;
  }

  bind() {

    // установка таймера времени
    const gameTimer = this.element.querySelector(`.game__timer`);

    const timer = setInterval(() => {
      this.time--;
      gameTimer.innerHTML = `${this.time}`;
      if (this.time === 0) {
        clearInterval(timer);
        this.onNext(false, this.time);
      }
    }, 1000);

    const gameContent = this.element.querySelector(`.game__content`);
    const gameOptions = this.element.querySelectorAll(`.game__option`);

    Array.from(gameOptions).forEach((option, optionIndex) => {
      option.addEventListener(`click`, (event) => {
        if (this.hasQuestion && this._isAnswered(gameContent)) {
          clearInterval(timer);
          this.onNext(this._isQuestionsAnswerRight(gameContent), this.time);
        }
        if (!this.hasQuestion) {
          clearInterval(timer);
          this.onNext(this._isChoosenAnswerRight(optionIndex), this.time);
        }
      });
    });

    // обработка возврата на начальный экрн
    const headerBack = this.element.querySelector(`.header__back`);

    headerBack.addEventListener(`click`, (event) => {
      event.preventDefault(event);
      this.onHeaderBack();
    });

  }
}

class GamePresenter {
  constructor(state, data) {
    this.state = state;
    this.data = data;
    this._view = new LevelView(this.state, this.data);
  }

  init() {
    this._view.onNext = (isAnswerRight, time) => {
      const levelResult = getLevelResult(isAnswerRight, time);
      const nextState = getNextState(this.state, levelResult);
      this.state.lives -= 1;

      if (nextState.level <= Rules.LEVELS_QUANTITY && nextState.lives > 0) {
        const nextLevel = new GamePresenter(nextState, this.data);
        nextLevel.init();
      } else {
        model.send(this.state, dataAdapter)
          .then(app.showStats);
      }
    };

    this._view.onHeaderBack = () => {
      app.reload();
    };

    this._view.showScreen();
  }
}

class StatsView extends AbstractView {
  constructor(results) {
    super();
    this.results = results;
    this.gameAmount = this.results.length;
  }

  getGameResult(num) {
    return this.results[num].lives > 0;
  }

  failedGameTemplate(game, index) {
    return `<table class="result__table">
              <tr>
                <td class="result__number">${index + 1}.</td>
                <td>
                  <ul class="stats">
                    ${this.showStatsLine(game)}
                  </ul>
                </td>
                <td class="result__total"></td>
                <td class="result__total  result__total--final">fail</td>
              </tr>
            </table>`;
  }

  showStatsLine(game) {
    return game.stats.map((item) => `<li class="stats__result stats__result--${item}"></li>`).join(``);
  }

  countBonuses(arr) {
    let bonuses = {};

    arr.forEach((item) => {
      bonuses[item] = bonuses[item] || 0;
      bonuses[item]++;
    });

    return bonuses;
  }

  showBonus(conditions, bonuses) {
    console.log(bonuses);
    return bonuses ? `<tr>
              <td></td>
              <td class="result__extra">${conditions.name}:</td>
              <td class="result__extra">${bonuses} <span class="stats__result stats__result--${conditions.class}"></span></td>
              <td class="result__points">×&nbsp;${Math.abs(conditions.cost)}</td>
              <td class="result__total">${conditions.cost * bonuses}</td>
            </tr>` : ``;
  }

  getSumCorrectAnswer(bonuses) {
    return (Rules.LEVELS_QUANTITY - (bonuses[PassOptions.WRONG.class] || 0)) * PassOptions.CORRECT.cost;
  }

  getTotalSum(game, bonuses) {
    const sum = (bonuses[PassOptions.FAST.class] || 0) * PassOptions.FAST.cost
           + (bonuses[PassOptions.SLOW.class] || 0) * PassOptions.SLOW.cost
           + game.lives * PassOptions.HEART.cost
           + this.getSumCorrectAnswer(bonuses);
    return sum;
  }

  wonGameTemplate(game, index) {
    const bonuses = this.countBonuses(game.stats);
    return `<table class="result__table">
          <tr>
            <td class="result__number">${index + 1}.</td>
            <td colspan="2">
              <ul class="stats">
                ${this.showStatsLine(game)}
              </ul>
            </td>
            <td class="result__points">×&nbsp;${PassOptions.CORRECT.cost}</td>
            <td class="result__total">${this.getSumCorrectAnswer(bonuses)}</td>
          </tr>
            ${this.showBonus(PassOptions.FAST, bonuses[PassOptions.FAST.class])}
            ${this.showBonus(PassOptions.HEART, game.lives)}
            ${this.showBonus(PassOptions.SLOW, bonuses[PassOptions.SLOW.class])}
          <tr>
            <td colspan="5" class="result__total  result__total--final">${this.getTotalSum(game, bonuses)}</td>
          </tr>
        </table>`;
  }

  showGameResult(results) {
    return results.map((item, index) => {
      return (item.lives > 0) ? this.wonGameTemplate(item, index) : this.failedGameTemplate(item, index);
    }).join(``);
  }

  get template() {
    const statsContent = `
      <div class="result">
        <h1>${this.getGameResult(this.gameAmount - 1) ? `Вы выиграли!` : `Вы проиграли..`}</h1>
        ${this.showGameResult(this.results)}
      </div>`;
    return `
      ${header()}
      ${statsContent}
      ${footer$1}`;
  }

  bind() {
    const headerBack = this.element.querySelector(`.header__back`);
    headerBack.addEventListener(`click`, (event) => {
      event.preventDefault(event);
      this.onHeaderBack();
    });
  }
}

var Stats = class {
  init() {
    model.loadResults()
      .then((results) => {
        this._view = new StatsView(results);
        this._view.onHeaderBack = () => {
          app.reload();
        };

        this._view.showScreen();
      });
  }
};

const ControllerID = {
  GREETING: ``,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

class App {
  constructor() {
    model.load(dataAdapter)
      .then((data) => this.setup(data))
      .then(setTimeout(() => this._changeController(this._getHash()), 2000));
  }

  setup(data) {
    Rules.LEVELS_QUANTITY = Object.keys(data).length;
    initialState.results = new Array(Rules.LEVELS_QUANTITY).fill(PassOptions.UNKNOWN.class);

    this.routes = {
      [ControllerID.GREETING]: greeting,
      [ControllerID.RULES]: rules,
      [ControllerID.GAME]: new GamePresenter(initialState, data),
      [ControllerID.STATS]: new Stats()
    };

    window.addEventListener(`hashchange`, (evt) => {
      this._changeController(this._getHash());
    });
  }

  _getHash() {
    return location.hash.replace(`#`, ``);
  }

  _changeController(route) {
    const controller = this.routes[route];
    if (!controller) {
      this.showGreeting();
    } else {
      controller.init();
    }
  }

  showIntro() {
    location.hash = ControllerID.INTRO;
  }

  showGreeting() {
    location.hash = ControllerID.GREETING;
  }

  showRules() {
    location.hash = ControllerID.RULES;
  }

  level() {
    location.hash = ControllerID.GAME;
  }

  showStats(state) {
    location.hash = ControllerID.STATS;
  }

  init() {
    intro.init();
  }

  reload() {
    location.hash = ControllerID.GREETING;
    // location.href = location.origin;
    location.reload();
  }
}

const app = new App();

app.init();

}());

//# sourceMappingURL=main.js.map
