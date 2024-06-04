export default function Projects() {
  const pageTitle = "Projects - Things I've Done";


  return (
  
      <main className="container mx-auto p-4 flex flex-col lg:flex-row lg:space-x-4">
        <section className="max-w-8xl w-full shadow-sm rounded-sm p-12 md:flex md:flex-row">
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Things I've Done</h1>
            <p className="mb-10 md:w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis nobis sapiente tenetur? Ea dolore ipsum minima illo? Commodi, eos minus repudiandae ad corporis praesentium ut nobis quae maxime et.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold mb-2">Company</h2>
                <p>
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </p>
              </div>
              <div className="p-4 border rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold mb-2">Company</h2>
                <p>
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </p>
              </div>
              <div className="p-4 border rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold mb-2">Company</h2>
                <p>
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 mt-10">
              <div className="p-4 border rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold mb-2">Company</h2>
                <p>
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </p>
              </div>
              <div className="p-4 border rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold mb-2">OCompany</h2>
                <p>
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </p>
              </div>
              <div className="p-4 border rounded-sm shadow-sm">
                <h2 className="text-2xl font-semibold mb-2">Company</h2>
                <p>
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    
  );
}
