import { supabase } from '../client';

interface CreatePostResult {
  title: string;
  description: string;
}

const createPost = async ({ title, description }: CreatePostResult): Promise<void> => {
  await supabase.from('blogPost').insert([{ title, description }]).single();
};

export default createPost;
