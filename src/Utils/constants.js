const YOUTUBE_API_KEY = "AIzaSyD8k1FBolRiAqCynb8-hBCQ0L5YmdRmMX0";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;
// export const YOUTUBE_SEARCH_API =
//   "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SUGGEST_API = "http://localhost:3001/suggest";
export const LIVE_CHAT_COUNT = 20;
