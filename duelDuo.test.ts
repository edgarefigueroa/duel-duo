
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })

// test(`Check that clicking the Draw button displays the div with id = “choices”`, async () => {
//     await driver.findElement(By.id('draw')).click()
//     await driver.sleep(2000)
//     // const choicesdiv = await driver.findElement(By.id('choices')).isDisplayed()
//     // expect(choicesdiv).toBeTruthy()
    
//     let displayed = await driver.findElement(By.id('choices')).isDisplayed()
//     expect(displayed).toBeTruthy()
// })

// test (`Check that clicking an “Add to Duo” button displays the div with id = “player-duo”`, async ()=>{
//     const choice = await driver.findElement(By.id('choice'))
//     await driver.sleep(2000)
//     const botId = await (await choice.findElements(By.id('botId')))
//     expect(botId.length).toBeGreaterThan(0)
// })
//
// test('Draw button displayes div with id choices' ,async()=>{
//     await driver.findElement(By.id('draw')).click()
//     await driver.sleep(2000)
//     const choicesCont = await driver.findElement(By.id('choices'))
//     const displayed = choicesCont.isDisplayed()
//     expect(displayed).toBeTruthy()
// })

test('Clicking Add to Duo displays player duo div' ,async()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath('//button[1][contains(@class, "bot-btn")]')).click()
    await driver.sleep(5000)
    const duoCont = await driver.findElement(By.id('player-duo'))
    const duoDisplayed = duoCont.isDisplayed()
    expect(duoDisplayed).toBeTruthy()
})