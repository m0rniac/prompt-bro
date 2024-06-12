import React from 'react'

import '../../../public/css/bootstrap.css'
import Data from '../../data.json';

import Introduction from './components/Introduction'
import PromptBox from './components/PromptBox'


export const metadata = {
    title: 'Best bid | Prompt-Bro',
    description: "A simple toolkit for prompting image generation using Stable Diffusion & Midjourney",
    keywords: ["prompt stable diffusion", "prompt midjourney", "promptbro"],
    authors: [{ name: 'm0rniac', url: "https:://prompt-bro.vercel.app" }, { name: 'bulssola', url: 'https://bulssola.vercel.app' }],
    creator: 'bulssola',
    publisher: 'bulssola',
    icons: {
        icon: Data.logo,
    },
};
export default function page() {
    return (
        <div>
            <Introduction />
            <PromptBox />
        </div>
    )
}
