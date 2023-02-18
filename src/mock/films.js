/* eslint-disable quotes */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const emotions = ["smile", "sleeping", "puke", "angry"];
const localComment = {
  "comment": "a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.",
  "emotion": emotions,
};

const generatePoster = () => {
  const posters = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg'
  ];
  const randomIndex = getRandomInt(posters.length);
  return posters[randomIndex];
};

export const generateFilm = () => ({
  'id': '0',
  'comments': [
    localComment,
  ],
  'filmInfo': {
    'title': 'A Little Pony Without The Carpet',
    'alternative_title': 'Laziness Who Sold Themselves',
    'totalRating': 5.3,
    'poster': generatePoster(),
    'age_rating': 0,
    'director': 'Tom Ford',
    'writers': [
      'Takeshi Kitano'
    ],
    'actors': [
      'Morgan Freeman'
    ],
    'release': {
      'date': '2019-05-11T00:00:00.000Z',
      'release_country': 'Finland'
    },
    'runtime': 77,
    'genre': [
      'Comedy'
    ],
    'description': 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
  },
  'user_details': {
    'watchlist': false,
    'already_watched': true,
    'watching_date': '2019-04-12T16:12:32.554Z',
    'favorite': false
  }
});
