// export default function Docs({
//     params,
//     ): {
//     params: {
//         slug: string[];
//     };
// }) {

//     if(PathParamsContext.slug.length==2){
//         return<h1>Viewing docs for feature{PathParamsContext.slug[0]} and concept {PathParamsContext.slug[1]}</h1>
//     }
//     else if (PathParamsContext.slug.length==1){
//         return <h1>Viewing doca for feature{PathParamsContext.slug[0]}</h1>
//     }
    

//     return <h1>Docs home page</h1>;
// }

import React from 'react';

interface DocsProps {
  params: {
    slug: string[];
  };
}

const Docs: React.FC<DocsProps> = ({ params }) => {
  const { slug } = params;

  if (slug.length === 2) {
    return <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>;
  } else if (slug.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
};

export default Docs;
