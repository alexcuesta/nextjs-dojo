import {Component} from 'react'
import Page from '../components/Page'
import fetch from 'isomorphic-fetch'

export default class Index extends Component {

  static async getInitialProps() {
    // am i in the server or client with next.js?
    const response = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json')
    const ids = await response.json()

    const stories = await Promise.all(
      ids.slice(0,20).map(
        id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
      )
    )
    return {stories}
  }

  render() {
    const {stories} = this.props
    return (
      <Page>
        {stories.map(story =>
          <div>
            <span>{story.title}
            <style jsx>{`
              font-weight: bold;
              font-size: larger;
            `}</style>
            </span>
            <div>
              <span>{story.by}
              <style jsx>{`
                font-size: smaller;
              `}</style>
              </span>
            </div>
          </div>
        )}
      </Page>
    )
  }
}
