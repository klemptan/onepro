const path = require('path')
const { Category } = require('../models/models')
const uuid = require("uuid");
const puppeteer = require('puppeteer')

class CategoryController {

    async parse(req, res, next) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(`https://iself.shop/`, { waitUntil: 'load', timeout: 0 })
        const links = await page.evaluate(() => Array.from(document.querySelectorAll('body > main > div > div:nth-child(2) > a'), async (element) => {
            const img = `https://iself.shop` + element.querySelector('img').getAttribute('src')
            const fileName = uuid.v4() + img.substr(img.lastIndexOf('.'))
            const downloader = new Downloader({
                url: img,
                directory: path.resolve(__dirname, '..', 'static'),
                fileName: fileName
            });
            //await downloader.download()
            let link = element.getAttribute('href')
            // await Category.create({
            //     name:element.querySelector('span').innerText,
            //     img:
            // })
            return {
                name: element.querySelector('span').innerText,
                img,
                transcript: link.split('/')[2]
            }
        }));


        browser.close()
        return res.json({ status: 'done' })
    }

    async insertTranscript(req, res, next) {
        const { transcript, name } = req.body
        const category = await Category.findOne({ where: { name } })
        category.transcript = transcript
        category.save()
        return res.json(category)
    }

    async create(req, res, next) {
        try {
            const { name, transcript } = req.body
            const { img, small_img } = req.files

            let img_name = '', small_img_name = ''
            if (img && small_img) {
                img_name = uuid.v4() + img.mimetype.split('/')[1]
                small_img_name = uuid.v4() + small_img.mimetype.split('/')[1]
                img.mv(path.resolve(__dirname, '..', 'static', img_name))
                small_img.mv(path.resolve(__dirname, '..', 'static', small_img_name))
            }
            const category = await Category.create({ name, transcript, img: img_name, smallImg: small_img_name })
            return res.json(category)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const categories = await Category.findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            return res.json(categories)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const category = await Category.findOne({ where: { id } })
            return res.json(category)
        } catch (e) {
            next(e)
        }
    }

    async edit(req, res, next) {
        try {
            const { id, name, transcript } = req.body
            const { img, small_img } = req.files

            const candidate = await Category.findOne({ where: { id } })

            candidate.name = name
            candidate.transcript = transcript

            let img_name = '', small_img_name = ''
            if (img) {
                img_name = uuid.v4() + img.mimetype.split('/')[1]
                img.mv(path.resolve(__dirname, '..', 'static', img_name))
                candidate.img = img_name
            }
            if (small_img) {
                small_img_name = uuid.v4() + small_img.mimetype.split('/')[1]
                small_img.mv(path.resolve(__dirname, '..', 'static', small_img_name))
                candidate.smallImg = small_img_name
            }
            candidate.save()
            return res.json(candidate)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params
            await Category.destroy({
                where: { id }
            })
            return res.json({ status: 1, message: 'done' })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController()