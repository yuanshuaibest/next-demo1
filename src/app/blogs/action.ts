'use server'
import { GET, DELETE } from '@/app/api/blogs/route'

export async function getBlogs() {
  const res = await GET()
  const data = await res.json()
  console.log('getBlogs', data)
  return data
}

export async function delBlog(id: number) {
  console.log('delBlog', id)
  const res = await DELETE(id)
  const data = await res.json()
  return data
}
