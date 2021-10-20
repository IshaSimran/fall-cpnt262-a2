// Strict Mode

'use strict';

// Image Array

const pokemon = [
  {
    id: 0,
    title: 'Pikachu',
    description: 'Electric type, known as the Mouse Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/0-pikachu.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Pikachu',
    credit: 'Uploaded to Pixabay by RamadhanNotonegoro',
    creditLink: 'https://pixabay.com/photos/miniature-pikachu-pokemon-character-3720485/',
    alt: 'Pikachu',
  },
  {
    id: 1,
    title: 'Bulbasaur',
    description: 'Grass and Poison type, known as the Seed Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/1-bulbasaur.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Bulbasaur',
    credit: 'Uploaded to Pixabay by Vinsky2002',
    creditLink: 'https://pixabay.com/photos/small-cute-toy-figurine-painted-4023177/',
    alt: 'Bulbasaur',
  },
  {
    id: 2,
    title: 'Charmander',
    description: 'Fire Type, known as the Lizard Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/2-charmander.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Charmander',
    credit: 'Uploaded to Pixabay by Vinsky2002',
    creditLink: 'https://pixabay.com/photos/small-cute-toy-figurine-painted-4023176/',
    alt: 'Charmander',
  },
  {
    id: 3,
    title: 'Squirtle',
    description: 'Water Type, known as the Tiny Turtle Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/3-squirtle.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Squirtle',
    credit: 'Uploaded to Pixabay By Vinsky2002',
    creditLink: 'https://pixabay.com/photos/small-cute-toy-figurine-painted-4021854/',
    alt: 'Squirtle',
  },
  {
    id: 4,
    title: 'Cubone',
    description: 'Ground Type, known as the Lonely Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/4-cubone.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Cubone',
    credit: 'Uploaded to Pixabay By @mamizaza on Instagram',
    creditLink: 'https://pixabay.com/photos/pop-funko-pokemon-toy-karakara-5475310/',
    alt: 'Cubone',
  },
  {
    id: 5,
    title: 'Eevee',
    description: 'Normal Type, known as the Evolution Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/5-eevee.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Eevee',
    credit: 'Uploaded to Pixabay By @mamizaza on Instagram',
    creditLink: 'https://pixabay.com/photos/eevee-pop-funko-pokemon-toy-city-5475337/',
    alt: 'Eevee',
  },
  {
    id: 6,
    title: 'Jolteon',
    description: 'Electric Type, known as the Lightning Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/6-jolteon.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon#Jolteon',
    credit: 'Uploaded to Unsplash By Jerry Johandy',
    creditLink: 'https://unsplash.com/photos/dPKv2iI5ChU',
    alt: 'Jolteon',
  },
  {
    id: 7,
    title: 'Snorlax',
    description: 'Normal Type, known as the Sleeping Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/7-snorlax.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Snorlax',
    credit: 'Uploaded to Unsplash By Clayton Robbins',
    creditLink: 'https://unsplash.com/photos/u3ZUSIH_eis',
    alt: 'Snorlax',
  },
  {
    id: 8,
    title: 'Totodile',
    description: 'Water Type, known as the Big jaw Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/8-totodile.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/List_of_generation_II_Pok%C3%A9mon#Totodile',
    credit: 'Uploaded to Unsplash By Janis Fasel',
    creditLink: 'https://unsplash.com/photos/gmLhKk7Djhk',
    alt: 'Totodile',
  },
  {
    id: 9,
    title: 'Vulpix',
    description: 'Fire Type, known as the Fox Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/9-vulpix.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon#Vulpix',
    credit: 'Uploaded to Pixabay By @mamizaza on Instagram',
    creditLink: 'https://pixabay.com/photos/pop-funko-pokemon-toy-vulpix-5475336/',
    alt: 'Vulpix',
  },
  {
    id: 10,
    title: 'Dratini',
    description: 'Dragon Type, known as the Dragon Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/10-dratini.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/List_of_generation_I_Pok%C3%A9mon#Dratini',
    credit: 'Uploaded to Unsplash By Thomas Evans',
    creditLink: 'https://unsplash.com/photos/5JGCJsyZbLU',
    alt: 'Dratini',
  },
  {
    id: 11,
    title: 'Mew',
    description: 'Psychic Type, known as the Phantom Pokemon.',
    width: 300,
    height: 200,
    pathURL: 'assets/images/11-mew.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Mew_(Pok%C3%A9mon)',
    credit: 'Uploaded to Pixabay by Furbymama',
    creditLink: 'https://pixabay.com/photos/pokemon-toy-game-character-5151118/',
    alt: 'Mew',
  },
];

// Loop that will display everything 

const object = document.querySelector('.object');

for (let i = 0; i < pokemon.length; i++) {

  // Holds all of the object content

  const figure = document.createElement('figure');
  figure.style.maxWidth = `${pokemon[i].width}px`;
  object.appendChild(figure);

  // Image Titles

  const title = document.createElement('h2');
  title.innerText = `${pokemon[i].title}`;
  figure.appendChild(title);

  // Description Added

  const description = document.createElement('h3');
  description.innerText = `${pokemon[i].description}`;
  figure.appendChild(description);

  // Wikipdia link

  const wikiLink = document.createElement('a');
  wikiLink.href = `${pokemon[i].linkURL}`;
  wikiLink.target = '_blank';
  figure.appendChild(wikiLink);

  // Image linked

  const figLinkImg = document.createElement('img');
  figLinkImg.src = `${pokemon[i].pathURL}`;
  figLinkImg.alt = `${pokemon[i].description}`;
  wikiLink.appendChild(figLinkImg);

  // Image credit added

  const figCap = document.createElement('figcaption');
  figure.appendChild(figCap);
  const figCapLink = document.createElement('a');
  figCapLink.innerText = `${pokemon[i].credit}`;
  figCap.appendChild(figCapLink);
}