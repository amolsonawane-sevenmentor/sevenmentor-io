const BlogPartThree = ({ content }) => {
    return (
      <p className="text-md text-gray-300 leading-relaxed whitespace-pre-wrap !mt-[-40px]" dangerouslySetInnerHTML={{ __html: content }}></p>
    );
  };
  
  export default BlogPartThree;
  