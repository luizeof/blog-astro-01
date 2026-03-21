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
	siteTitle: 'Promovaweb | Marketing Digital e Tecnologia',
	siteDescription:
		'Promovaweb ajuda você a escalar seu negócio com soluções de marketing digital, cursos e tecnologia.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Promovaweb logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	postsPerPage: 3,
	changelogPerPage: 3
}
