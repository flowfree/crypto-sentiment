import BaseService from "./BaseService";

class NewsService extends BaseService {
  getNewsList(nextUrl: string, filters: string = '') {
    filters = filters.replace(/\s+/g, ' ').replace(/\s*:\s*/g, ':').trim()
    const params: {[key: string]: string} = {}

    for (const filter of filters.split(' ')) {
      if (/^https?:/.test(filter)) {
        params['url'] = filter
      } else {
        const [key, ...rest] = filter.split(':')
        const val = rest.join(':')
        if (key && val) {
          params[key] = val
        } else {
          params['url'] = key
        }
      }
    }

    return this.client.get(nextUrl, { params })
  }

  getSentiment(url: string) {
    return this.client.post(`/predict`, { url })
  }
}

export default NewsService
