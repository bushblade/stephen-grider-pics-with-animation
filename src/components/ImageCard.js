import React, { Component } from 'react'

export default class ImageCard extends Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height + 10)

    this.setState({ spans })
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  render() {
    // adding a commment here to test dropbox sync
    const {
      props: {
        urls: { regular },
        description
      },
      state: { spans },
      imageRef
    } = this
    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={imageRef} src={regular} alt={description} />
      </div>
    )
  }
}
