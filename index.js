const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const { html } = require('cheerio/lib/api/manipulation')
const { response } = require('express')
const express = require('express')

const route = express()

const url = 'https://www.bonsaiempire.com/'

axios(url)
    .then(response => {
        const htmlData = response.data
        const compiHtml = cheerio.load(htmlData)
        const bonsai = []

        compiHtml('.bonsai', html).each(function(){
            const title = compiHtml(this).text()
            const text = compiHtml(this).attr('href')
            articles.push({
                title,
                text
            })
        })
        console.log(bonsai)
    }).catch(err => console.log(err))

route.listen(PORT, () => console.log('server running on PORT ${PORT}'))