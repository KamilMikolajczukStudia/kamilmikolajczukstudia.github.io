import React, { Fragment } from 'react'
import mojaWisniowa from './img/moja-wisniowa.png'
import introImg from './img/intro.jpg'
import kot from './img/kot.jpg'

export interface IPost {
  id: number
  title: string
  img: string
  shortDescription: string | string[]
  longDescription: React.ReactNode
  liveLink: string
  codeLink: string
}

export const placeholder: IPost = {
  id: 0,
  title: 'Tytuł projektu',
  img: introImg,
  shortDescription: ['Projekt', 'Opis'],
  longDescription: <p>Lorem ipsum</p>,
  liveLink: '#',
  codeLink: '#'
}

const posts: IPost[] = [
  {
    id: 1,
    img: mojaWisniowa,
    title: 'Moja Wiśniowa',
    shortDescription: 'Szkolny projekt zaliczeniowy',
    longDescription: <p>Szkolny projekt zaliczeniowy</p>,
    liveLink: '#',
    codeLink: '#'
  },
  {
    id: 2,
    img: kot,
    title: 'Projekt 1',
    shortDescription: [
      'Projekt na labolatorium 1',
      'Wstęp do architektury klient-server i języka HTML schemat pliku i kodowanie znaków'
    ],
    longDescription: (
      <Fragment>
        <p>Projekt na labolatorium 1</p>
        <p>Wstęp do architektury klient-server i języka HTML, schemat pliku i kodowanie</p>
      </Fragment>
    ),
    liveLink: '/projekt1',
    codeLink: 'https://github.com/KamilMikolajczukStudia/projekt1'
  },
  placeholder
]

export default posts
