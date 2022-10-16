import { client } from "../client";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=='post']`;
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
