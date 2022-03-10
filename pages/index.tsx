import type { GetServerSideProps } from 'next';

export default function Home({ repositories }: any ) {
  return (
    <ul>
      {repositories.map((repo: {} | null | undefined) => (
        <li>{repo}</li>
      ))}
    </ul>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch
  ('https://api.github.com/users/adreider/repos');

  const data = await response.json();
  
  const respositoryNames = data.map((item: { name: any; }) => item.name);

  return {
    props: {
      repositories: respositoryNames
    }
  }
}
