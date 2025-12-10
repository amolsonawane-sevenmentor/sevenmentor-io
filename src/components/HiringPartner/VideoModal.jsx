
export default function VideoModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl p-4 md:p-6">
        {/* Close button */}
        <button
          className="absolute top-[-15px] md:top-2 right-2 text-white text-3xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Embedded YouTube video */}
        <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dEj29qucM9o?si=f_9MHzWMZHcKX9jn"
            title="Hiring Partner Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
