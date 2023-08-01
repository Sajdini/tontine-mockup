import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas'


const config=defineConfig({

    projectId:"sfvrqdgh",
    dataset: "production",
    title: "Portfolio Sanity ",
    apiVersion:"2023-07-31",
    basePath:"/admin",
    plugins: [deskTool(),visionTool()],
    schema:{types:schemas}

})

export default config


