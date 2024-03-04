import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Testimonial3 = () => {
  return (
    <>
      <CodeBox
        stringCode={`<div className="relative overflow-hidden ">
  <div className="max-w-[85rem] bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-900 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
    {/* Grid */}
    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div className="hidden lg:block lg:col-span-2">
        <img className="rounded-xl" src="https://thumbs.dreamstime.com/b/shocked-black-guy-sitting-chair-laptop-next-to-smartphone-mockup-web-store-internet-casino-website-young-big-empty-243380528.jpg" />
      </div>
      {/* End Col */}
      <div className="lg:col-span-4">
        {/* Blockquote */}
        <blockquote>
          <h2 className="text-4xl text-purple-600 font-semibold">Soft UI</h2>
          <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
          ❝Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam deleniti, suscipit eum nesciunt amet veritatis maiores error cum autem corrupti.❞
          </p>
          <footer className="mt-6">
            <div className="flex items-center">
              <div className="lg:hidden flex-shrink-0">
                <img className="size-12 rounded-full" src="https://thumbs.dreamstime.com/b/shocked-black-guy-sitting-chair-laptop-next-to-smartphone-mockup-web-store-internet-casino-website-young-big-empty-243380528.jpg" alt="Image Description" />
              </div>
              <div className="ms-4 lg:ms-0">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Nicole Grazioso
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Head of Finance
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
        {/* End Blockquote */}
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
</div>`}
      >
        {/* Testimonials */}
        <div className="relative overflow-hidden ">
          <div className="max-w-[85rem] bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-900 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
            {/* Grid */}
            <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
              <div className="hidden lg:block lg:col-span-2">
                <img
                  className="rounded-xl"
                  src="https://thumbs.dreamstime.com/b/shocked-black-guy-sitting-chair-laptop-next-to-smartphone-mockup-web-store-internet-casino-website-young-big-empty-243380528.jpg"
                />
              </div>
              {/* End Col */}
              <div className="lg:col-span-4">
                {/* Blockquote */}
                <blockquote>
                  <h2 className="text-4xl text-purple-600 font-semibold">
                    Soft UI
                  </h2>
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
                    ❝Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam deleniti, suscipit eum nesciunt amet veritatis
                    maiores error cum autem corrupti.❞
                  </p>
                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="lg:hidden flex-shrink-0">
                        <img
                          className="size-12 rounded-full"
                          src="https://thumbs.dreamstime.com/b/shocked-black-guy-sitting-chair-laptop-next-to-smartphone-mockup-web-store-internet-casino-website-young-big-empty-243380528.jpg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-4 lg:ms-0">
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                          Nicole Grazioso
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Head of Finance
                        </p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
                {/* End Blockquote */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Testimonials */}
      </CodeBox>
    </>
  );
};
export default Testimonial3;
