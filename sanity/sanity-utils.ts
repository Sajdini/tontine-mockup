import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import LandingPage from "@/types/LandingPage";
import Project from "@/types/Project";

export async function getLandingPage() : Promise <LandingPage[]> {
   
   return createClient(config).fetch(
        groq`
        *[_type == 'landing-page'] {
          title,
          'sections': order[]->{
            _type,
            ...,
            'ctaText': ctaText, 
            'ctaLink': ctaLink, 
            'description': description, 
            'image': image, 
          }
        }
      `
    )
}


export async function getProjects():Promise <Project[]>{
  return createClient(config).fetch(
    groq`*[_type == 'project'] {
      _id,
      title,
      stack,
      image,
      link
    }`
  )
}


