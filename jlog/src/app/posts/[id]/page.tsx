import Button from '@/components/atom/button/button';
import MDXComponents from '@/components/atom/MDXcomponent/MDXComponent'
import NameTag from '@/components/atom/nameTag/nameTag';


export default function PostDetailPage({ params }: { params: { id: string } }): JSX.Element {

    return (
        <div>
          <p>{params.id}</p>
          <NameTag></NameTag>
        </div>
    );
};