import isrStyles from "@/styles/DynamicISRComponent.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface ISRProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts/");
  const posts: Post[] = await res.json().then((data) => data.posts);

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

const DynamicISRComponent = async ({ params }: ISRProps) => {
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    next: { revalidate: 10 }, // ISR every 10 seconds
  });
  const post: Post = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className={`${isrStyles.heading} text-2xl font-semibold mb-2`}>
        {post.title}
      </h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default DynamicISRComponent;
