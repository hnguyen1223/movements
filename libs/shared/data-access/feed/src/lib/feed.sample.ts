import { Feed } from './feed.model';

export const SAMPLE_FEEDS: { [key: string]: Feed } = {
  'https://daringfireball.net/feeds/main': {
    id: 'https://daringfireball.net/feeds/main',
    title: 'Daring Fireball',
    description: 'By John Gruber',
    publishedOn: '',
    updatedOn: '2022-09-26T15:59:34Z',
    link: 'https://daringfireball.net/feeds/main',
    image: '',
    items: [],
    isFavorite: true,
  },
  'http://www.nasa.gov/rss/dyn/breaking_news.rss': {
    id: 'http://www.nasa.gov/rss/dyn/breaking_news.rss',
    title: 'NASA Breaking News',
    description:
      'A RSS news feed containing the latest NASA news articles and press releases.',
    publishedOn: '',
    updatedOn: '',
    link: 'http://www.nasa.gov/rss/dyn/breaking_news.rss',
    image: '',
    items: [],
    isFavorite: true,
  },
  'https://hnrss.org/frontpage': {
    id: 'https://hnrss.org/frontpage',
    title: 'Hacker News: Front Page',
    description: 'Hacker News RSS',
    publishedOn: '',
    updatedOn: 'Mon, 26 Sep 2022 19:54:40 +0000',
    link: 'https://hnrss.org/frontpage',
    image: '',
    items: [],
    isFavorite: false,
  },
  '/r/news/.rss': {
    id: '/r/news/.rss',
    title: 'News',
    description:
      'The place for news articles about current events in the United States and the rest of the world. Discuss it all here.',
    publishedOn: '',
    updatedOn: '2022-09-26T20:03:01+00:00',
    link: 'https://www.reddit.com/r/news/.rss',
    image:
      'https://a.thumbs.redditmedia.com/d1huQb5y8kISty2ax02MmO7pK5uVJt1pGuSqOiOjIl0.png',
    items: [],
    isFavorite: false,
  },
  'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml': {
    id: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    title: 'NYT &gt; Top Stories',
    description: '',
    publishedOn: 'Mon, 26 Sep 2022 20:00:13 +0000',
    updatedOn: 'Mon, 26 Sep 2022 20:02:18 +0000',
    link: 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    image: 'https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png',
    items: [],
    isFavorite: false,
  },
};
