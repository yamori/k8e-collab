export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Checks for first and last name,
  // and returns early if they are not found
  // if (!body.first || !body.last || !body.email) {
  //   // Sends a HTTP bad request error code
  //   return res.status(400).json({ data: 'First or last name not found' })
  // }

  switch(true) {
    case !body.first:
    case !body.last:
    case !body.email:
      return res.status(400).json({ data: 'Email, first name, or last name not found'})
      break
    case body.last.toLowerCase() === "kindzerske": 
      return res.status(200).json({ data: `Solid last name.` })
      break
    default:
      res.status(200).json({ data: `${body.first} ${body.last} ${body.email}` })
  }
}