import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Testimonial1 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<blockquote className="flex flex-col items-center p-4 text-white">
  <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
    ❝I recently used this website for a purchase and I was extremely satisfied with the ease of use and the variety of options available. The checkout process was seamless and the delivery was prompt.❞
  </p>
  <footer className="flex items-center gap-3 mt-6 md:mt-12">
    <img
      className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
      src="https://loremflickr.com/g/200/200/girl"
      alt="Sebastiaan Kloos"
      loading="lazy"
    />
    <a
      href="#"
      target="_blank"
      className="inline-block font-bold tracking-tight"
    >
      <p>Jane Doe</p>
      <p className="font-medium text-white">Founder of XYZ</p>
    </a>
  </footer>
</blockquote>
      `}
      >
        <blockquote className="flex flex-col items-center p-4 text-white">
          <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">
            ❝I recently used this website for a purchase and I was extremely
            satisfied with the ease of use and the variety of options available.
            The checkout process was seamless and the delivery was prompt.❞
          </p>
          <footer className="flex items-center gap-3 mt-6 md:mt-12">
            <img
              className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10"
              src="https://loremflickr.com/g/200/200/girl"
              alt="Sebastiaan Kloos"
              loading="lazy"
            />
            <a
              href
              target="_blank"
              className="inline-block font-bold tracking-tight"
            >
              <p>Jane Doe</p>
              <p className="font-medium text-white">Founder of XYZ</p>
            </a>
          </footer>
        </blockquote>
      </CodeBox>
    </>
  );
};
export default Testimonial1;
