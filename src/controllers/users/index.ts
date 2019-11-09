import express from 'express'

export default (request: express.Request, response: express.Response) => {
  response.json(render())
}

const render = () => {
  return {
    data: [
      {
        id: "1",
        firstName: "First",
        lastName: "Last"
      }
    ]
  }
}
