import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreasi Invitation",
};

export default function HomePage() {
  return (
    <main className="bg-gray-100 box-content max-md:pb-32">
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="py-4 pr-4 font-bold text-teal-900">
                Kreasi Invitation
              </h1>
            </div>
            <nav className="flex gap-4 max-md:hidden">
              <a href="#template" className="p-4">
                Template
              </a>
              <a href="#faq" className="p-4">
                FAQ
              </a>
            </nav>
            <div className="max-md:hidden">
              <button>Whatsapp</button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 p-4 md:hidden z-50 ">
          <nav className="flex gap-4 justify-center shadow-md rounded-xl bg-white">
            <a href="#template" className="px-4 py-2 text-sm">
              Template
            </a>
            <a href="#faq" className="px-4 py-2 text-sm">
              FAQ
            </a>
          </nav>
        </div>
      </div>

      <div className="bg-teal-600">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-white text-3xl font-bold mb-4">
            Undangan Digital by Kreasi Invitation
          </h1>
          <p className="text-white mb-4">
            Kreasi invitation siap membantu membuat undangan digitalmu. Undangan
            pernikahan, birthday, aqiqah dan undangan digital lainnya.
          </p>
          <a
            href="#template"
            className="px-4 py-2 inline-block bg-lime-400 rounded-sm text-lime-950 text-sm"
          >
            Lihat Template
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <h2 className="font-bold text-gray-900 px-4 mb-4">Daftar Template</h2>

        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="ml-4 px-3 py-2 rounded border border-solid border-gray-400 text-sm">
            Pernikahan
          </button>
          <button className="px-3 py-2 rounded border border-solid border-gray-400 text-sm">
            Birthday
          </button>
          <button className="px-3 py-2 rounded border border-solid border-gray-400 text-sm">
            Aqiqah
          </button>
          <button className="mr-4 px-3 py-2 rounded border border-solid border-gray-400 text-sm">
            Tasyukuran
          </button>
        </div>

        <div className="grid grid-cols-1 px-4 mt-2 gap-4">
          <div>
            <div className="w-full h-[180px] bg-white border border-solid border-gray-200 shadow-sm rounded-md">
              <img src="" alt="" />
            </div>

            <div className="px-4 py-2">
              <h3 className="text-sm font-bold text-gray-900">Floral 1</h3>
              <p className="text-sm text-gray-600">Rp 150.000</p>
            </div>
          </div>

          <div>
            <div className="w-full h-[180px] bg-white border border-solid border-gray-200 shadow-sm rounded-md">
              <img src="" alt="" />
            </div>

            <div className="px-4 py-2">
              <h3 className="text-sm font-bold text-gray-900">Floral 1</h3>
              <p className="text-sm text-gray-600">Rp 150.000</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
