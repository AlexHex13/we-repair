// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data =  res.json()
  console.log(data)
}
