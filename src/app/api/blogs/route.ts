let list = [
  { id: 1, name: 'Blog 1', content: 'Content 1', likeCount: 16 },
  { id: 2, name: 'Blog 2', content: 'Content 2', likeCount: 10 },
  { id: 3, name: 'Blog 3', content: 'Content 3', likeCount: 6 }
]

export async function GET() {
  return Response.json({ list })
}

export async function DELETE(id: number) {
  console.log('api delete', id)
  list = list.filter(item => item.id !== id)
  return Response.json({ code: 0 })
}
