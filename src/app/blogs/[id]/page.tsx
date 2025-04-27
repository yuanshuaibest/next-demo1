async function MockGetBlogDetailFromDataBase(id: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, title: `博客标题${id}`, content: `博客详情 博客详情 博客详情 ${id}` });
    }, 1000);
  });
}

export default async function OneBlog({ params }: { params: { id: string }}) {
  // 定义博客数据的类型
  type BlogData = {
    id: string;
    title: string;
    content: string;
    likeCount: number;
  };

  const blog = (await MockGetBlogDetailFromDataBase(params.id)) as BlogData;

  async function thumbUp(values: FormData) {
    'use server'

    console.log('values', values);
  }

  return (
    <div>
      <h1 className="text-3xl">{blog.title}</h1>
      <p>{blog.content}</p>
      <form action={thumbUp}>
        <input type="hidden" name="id" value="blog.id" />
        <button type="submit">点赞</button>
      </form>
    </div>
  )
}
