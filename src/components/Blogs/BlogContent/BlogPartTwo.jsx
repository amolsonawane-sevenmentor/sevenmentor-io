const BlogPartTwo = ({ content }) => {
    return (
      <p className="text-md text-gray-300 leading-relaxed whitespace-pre-wrap " dangerouslySetInnerHTML={{ __html: content }}></p>
    );
  };
  
  export default BlogPartTwo;
  