const Testimonial = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-12 mx-auto text-center">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
            In Their Words
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Hear it from someone who's used it.
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Real feedback, straight from a real Clean Box experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-card bg-black">
          <video
            src={`${import.meta.env.BASE_URL}videos/testimonial.mp4`}
            controls
            playsInline
            className="w-full aspect-video"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
