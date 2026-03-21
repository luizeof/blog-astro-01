// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	postsPerPage: number
	changelogPerPage: number
}

export const configData: Config = {
	siteTitle: 'Foxi. Tailwind CSS Astro Starter Kit by Oxygenna',
	siteDescription:
		'Foxi is a design and development agency that specializes in creating beautiful and functional websites.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	postsPerPage: 3,
	changelogPerPage: 3
}
