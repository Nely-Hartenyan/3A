function Hero() {
  return (
    <section className="bg-gray-700 shadow-sm px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold md:text-6xl">
          Discover Your Next Device
        </h2>

        <p className="max-w-2xl text-lg text-gray-300">
          Discover modern technology and find the perfect
          device for your everyday life.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;