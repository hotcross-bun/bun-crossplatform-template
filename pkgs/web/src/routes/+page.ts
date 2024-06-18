import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const res = await fetch('http://localhost:3000')
  const item = await res.text();
	return { item };
};
