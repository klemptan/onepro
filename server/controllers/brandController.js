const puppeteer = require("puppeteer")
const { Brand } = require("../models/models")
const uuid = require('uuid')
const Downloader = require("nodejs-file-downloader");
const path = require('path');

class BrandController {
    async getAll(req, res, next) {
        const brands = await Brand.findAll(
        )
        return res.json(brands)
    }

    async parse(req, res, next) {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            let currentURL='https://iself.shop/brands/';
            page.waitForSelector('img').then(() => console.log('First URL with image: ' + currentURL));

            await page.goto(currentURL, { waitUntil: 'load', timeout: 0 })
            const links = await page.evaluate(() => Array.from(document.querySelectorAll('.brands-items a'), element => element.getAttribute('href')));

            for(currentURL of links){
                console.log(currentURL)
                await page.goto('https://iself.shop'+currentURL, { waitUntil: 'load', timeout: 0 })
                const logo = await page.$eval(".top-brand-desc-top img", el=>el.getAttribute('src'))
                const name = await page.$eval('h1', el=>el.innerText)
                const description = await page.$eval('p.top-brand-desc-bottom',el=>el.innerText)

                const fileName = uuid.v4() + logo.substr(logo.lastIndexOf('.'))
                const downloader = new Downloader({
                    url: 'https://iself.shop'+logo,
                    directory: path.resolve(__dirname, '..', 'static'),
                    fileName: fileName
                });
                await downloader.download()
                await Brand.create({name,description,logo:fileName})
            }
            browser.close()

            return res.json({status:'done'})
        }
        catch (e) {
            next(e)
        }

    }
}

module.exports = new BrandController