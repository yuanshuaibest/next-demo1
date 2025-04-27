import { POST } from '@/app/api/blogs/route';

export default async function OneBlog({ params }: { params: { id: string }}) {
  // 定义博客数据的类型
  type BlogData = {
    id: string;
    name: string;
    content: string;
  };

  async function MockGetBlogDetailFromDataBase(id: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: `博客标题${id}`, content: `博客详情 博客详情 博客详情 ${id}` });
      }, 1000);
    });
  }

  const { id } = await params;
  const blog = (await MockGetBlogDetailFromDataBase(id)) as BlogData;

  async function thumbUp(values: FormData) {
    'use server'

    const blogId = values.get('id');
    console.log('blogId', blogId);

    const res = await POST(Number(blogId));
    const obj = await res.json();
    console.log('data', obj);
  }

  return (
    <div>
      <h1 className="text-3xl">{blog.name}</h1>
      <p>{blog.content}</p>
      <form action={thumbUp}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">点赞</button>
      </form>
    </div>
  )
}
