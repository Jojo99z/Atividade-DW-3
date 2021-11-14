const PORT = proces.env.PORT || 8000 //this is for deploying on heroku
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const noticias = [
    {
        name: 'Modalidades'
        adress: 'https://www.abola.pt/ABolaTv'
        base: 'https://www.abola.pt/Modalidades'
    },
    {
        name:'UltimaHora',
        adress:'https://www.abola.pt/ABolaTv'
        base: 'https://www.abola.pt/Nnh/Noticias'
    },
    {
        name: 'Noticias'
        adress:'https://www.abola.pt/ABolaTv'
        base: 'https://www.abola.pt/ABolaTv/Noticias/Ver/912687'
    }
]

const articles = []

newspapers.forEach(noticias => {
    axios.get(newspaper.adress,)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("ABola")',html).each(function () {
            const title = $(this).text()
            const url $(this).attr('href')

            articles.push({
                title,
                url: noticias.base + url,
                source: noticias.name
            })
        })
    })
})


app.get('/aniaisgreat', (req: Resquest>P, Resbody, ReqBody, ReqQuery, Locals> ,res: Response<ResBody, Locals) => 
    res.json('Welcome to my A Bola News API')
})

app.get('/news/:newspaperId', (req: Resquest>P, Resbody, ReqBody, ReqQuery, Locals> ,res: Response<ResBody, Locals) => {
    const newspaperId = req.params.newspaperId

    const newsAddress = noticias.filter(noticias => noticias.name == noticiasId)
    const newsBase = noticias.filter(noticias => noticias.name == noticiasId )
    console.log(noticias)

    axios.get(noticiasAdress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("Abola"), html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    ssource: newspaperId
                })
        })
        res.json(specificArticles)
    }).catch(err => console.log(err))
})

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))