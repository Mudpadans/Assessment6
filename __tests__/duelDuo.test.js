const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

const renderChoices = async () => {
  choicesDiv.innerHTML = "";
  chooseHeader.classList.remove("hide");

  choices.forEach((choice) => {
    let botHtml = makeRobotChoiceCard(choice);
    choicesDiv.innerHTML += botHtml;
  });
};

const draw = async () => {
  await driver.findElement(By.id("draw")).click()
}

const add = async () => {
  await driver.findElement(By.className('bot-btn')).click()
}

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button displays choices", async () => {
    await driver.get("http://localhost:8000");
    await draw()
    await driver.wait(until.elementLocated(By.id('choices')), 1000 )
  })

  test('player can add to duo', async () => {
    await driver.get("http://localhost:8000");
    await draw()
    await driver.wait(until.elementLocated(By.id('choices')), 1000 )
    add()
    await driver.wait(until.elementLocated(By.id('player-duo')), 1000)
  })
});