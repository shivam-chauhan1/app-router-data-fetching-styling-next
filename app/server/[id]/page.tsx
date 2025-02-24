import serverStyles from "@/styles/DynamicServerComponent.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DSCProps {
  params: { id: string };
}

const DynamicServerComponent = async ({ params }: DSCProps) => {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`, {
    cache: "no-store",
  });
  const post: Post = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
      <h1 className={`${serverStyles.heading} text-2xl font-semibold mb-2`}>
        {post.title}
      </h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default DynamicServerComponent;
