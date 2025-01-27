import fastify from 'fastify'

const opts = {
    logger: true
}

const app = fastify(opts)

app.get('/', async (req, rep) => {
    rep.send('hello world, mfcka')
})

app.listen({port: 3000, host: '0.0.0.0'}, (err) => {
    if(err) {
        app.log.error(err)
        process.exit(1)
    }
})