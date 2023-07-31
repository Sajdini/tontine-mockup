import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'

import schemas from './sanity/schemas'


const config=defineConfig({

    projectId:"sfvrqdgh",
    dataset: "production",
    title: "Portfolio Sanity ",
    apiVersion:"2023-07-31",
    basePath:"/admin",
    plugins: [deskTool(), ],
    schema:{types:schemas }

})



export default config