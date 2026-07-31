import app from "./main";
import dotenv from 'dotenv'

dotenv.config()

app.listen(3000, () => {
    console.log('Server rodando na porta 3000!')
})