import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import LandingPage from "@/types/LandingPage";
import Project from "@/types/Project";
import Page from "@/types/Pages";

export async function getLandingPage(): Promise<LandingPage[]> {
  return createClient(config).fetch(
    groq`
        *[_type == 'landing-page'] {
          title,
          'sections': order[]->{
            _type,
            ...,
            'ctaText': ctaText, 
            'ctaLink': ctaLink, 
            'descriptions': descriptions, 
            'image': image.asset->url,
          }
        }
      `
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == 'project'] {
      _id,
      title,
      stack,
      "image":image.asset->url,
      link
    }`
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(config).fetch(
    groq`*[_type == 'page'] {
      _id,
      title,
      route
    }`
  );
}
