// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    stack: 'FEnd, ultimately with dynamic data fetched from Client side' ,
    ci: 'Github, with workflows for unit test and linting',
    hosting: 'AWS in some capacity, could be container or serverless',
    product: 'not currently in mind, this is coding, not programming'
  })
}
