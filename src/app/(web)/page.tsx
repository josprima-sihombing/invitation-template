"use client";

import { FaMinus, FaPlus, FaWhatsapp } from "react-icons/fa6";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "@mantine/core";

type Category = "wedding" | "birthday" | "aqiqah" | "tasyukuran";

const categories: {
  value: Category;
  label: string;
}[] = [
  {
    value: "wedding",
    label: "Wedding",
  },
  {
    value: "birthday",
    label: "Birthday",
  },
  {
    value: "tasyukuran",
    label: "Tasyukuran Aqiqah",
  },
];

type InvitationTemplate = {
  id: string;
  href: string;
  imgSrc: string;
  name: string;
  price: number;
};

const templates: Record<string, InvitationTemplate[]> = {
  wedding: [
    {
      id: "wedding-1",
      href: "/floral-1-preview",
      imgSrc: "/assets/previews/templates/floral-1-preview.jpg",
      name: "Floral 1",
      price: 150000,
    },
    {
      id: "wedding-2",
      href: "/floral-2-preview",
      imgSrc: "/assets/previews/templates/floral-2-preview.jpg",
      name: "Floral 2",
      price: 150000,
    },
    {
      id: "wedding-3",
      href: "/floral-3-preview",
      imgSrc: "/assets/previews/templates/floral-3-preview.jpg",
      name: "Floral 3",
      price: 150000,
    },
    {
      id: "wedding-4",
      href: "/wedding-rose",
      imgSrc: "/assets/previews/templates/wedding-rose.jpg",
      name: "Wedding Rose",
      price: 150000,
    },
    {
      id: "wedding-5",
      href: "/wedding-rose-photo",
      imgSrc: "/assets/previews/templates/wedding-rose-photo.jpg",
      name: "Wedding Rose Photo",
      price: 180000,
    },
    {
      id: "wedding-6",
      href: "/wedding-lily",
      imgSrc: "/assets/previews/templates/wedding-lily.jpg",
      name: "Wedding Lily",
      price: 150000,
    },
    {
      id: "wedding-7",
      href: "/wedding-lily-photo",
      imgSrc: "/assets/previews/templates/wedding-lily-photo.jpg",
      name: "Wedding Lily Photo",
      price: 180000,
    },
  ],
  birthday: [
    {
      id: "birthday-1",
      href: "/bear",
      imgSrc: "/assets/previews/templates/bear.jpg",
      name: "Bear",
      price: 150000,
    },
  ],
  tasyukuran: [
    {
      id: "tasyukuran-1",
      href: "/tasyukuran-bear-pink",
      imgSrc: "/assets/previews/templates/tasyukuran-bear-pink.jpg",
      name: "Tasyukuran Bear Pink",
      price: 150000,
    },
    {
      id: "tasyukuran-2",
      href: "/tasyukuran-bear-blue",
      imgSrc: "/assets/previews/templates/tasyukuran-bear-blue.jpg",
      name: "Tasyukuran Bear Blue",
      price: 150000,
    },
  ],
};

const faqs = [
  {
    title: "Apa itu undangan digital?",
    description:
      "Undangan digital adalah undangan yang bisa kamu bagikan dengan gampang, praktis dan lebih murah dibandingkan undangan cetak, tanpa mengurangi fungsi utama undangan tersebut.",
  },
  {
    title: "Berapa lama pengerjaan undangan digital?",
    description: "Maksimal 1 minggu (5 hari kerja)",
  },
  {
    title: "Berapa harga nya?",
    description:
      "Harga sudah tertera di masing masing template. Namun jika kamu punya request khusus seperti penambahan fitur, mungkin akan ada penambahan harga. Untuk lebih pastinya bisa menanyakan langsung melalu whatsapp",
  },
  {
    title: "Berapa lama masa aktif undangan nya?",
    description:
      "Untuk saat ini, undangan yang kami buat akan bisa diakses selamanya. Jika kamu mau undangan mu dinonaktifkan/dihapus, silahkan hubungi melalui whatsapp untuk request penghapusan undangan.",
  },
  {
    title: "Punya desain/tema sendiri, apakah bisa?",
    description: "Bisa dong",
  },
  {
    title: "Punya pertanyaan lain?",
    description: "Silahkan tanyakan langsung melalui whatsapp ya.",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("wedding");

  return (
    <main className="bg-gray-100 box-content max-md:pb-3">
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
            <div>
              <Button
                leftSection={<FaWhatsapp />}
                component="a"
                href="https://wa.me/6285179828746"
                color="green"
              >
                Whatsapp
              </Button>
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
          <div className="max-w-lg">
            <h1 className="text-white text-3xl font-bold mb-4">
              Undangan Digital by Kreasi Invitation
            </h1>
            <p className="text-white mb-4">
              Kreasi invitation siap membantu membuat undangan digitalmu.
              Undangan pernikahan, birthday, aqiqah dan undangan digital
              lainnya.
            </p>
            <a
              href="#template"
              className="px-4 py-2 inline-block bg-lime-400 rounded-sm text-lime-950 text-sm"
            >
              Lihat Template
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4" id="template">
        <h2 className="font-bold text-gray-900 px-4 mb-4">Daftar Template</h2>

        <div className="flex gap-1 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category.value}
              className={classNames(
                "px-3 py-1 rounded border border-solid border-gray-200 text-sm",
                {
                  "ml-4": index === 0,
                  "mr-4": index === categories.length - 1,
                  "bg-blue-500 text-white": category.value === activeCategory,
                },
              )}
              onClick={(e) => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 mt-2 gap-4">
          {templates[activeCategory]?.map((template) => (
            <a
              key={template.id}
              href={template.href}
              target="_blank"
              rel="noreferrer"
              className="group hover:bg-gray-200 rounded-md"
            >
              <div className="w-full h-[420px] bg-white border border-solid border-gray-200 shadow-sm rounded-md overflow-hidden">
                <img
                  src={template.imgSrc}
                  alt={template.name}
                  className="w-full"
                />
              </div>

              <div className="px-4 py-2">
                <h3 className="text-sm font-bold text-gray-900">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(template.price)}
                </p>
              </div>
            </a>
          ))}
        </div>

        {!templates[activeCategory]?.length && (
          <div className="px-4">
            <div className="text-center px-16 py-24 bg-white rounded-md">
              <p className="text-gray-400 text-lg">Template belum tersedia!</p>
            </div>
          </div>
        )}
      </div>

      <div
        className="container mx-auto px-4 py-12 mt-12 border-t border-solid border-gray-200"
        id="faq"
      >
        <h1 className="text-center font-bold text-2xl text-gray-700 mb-8">
          Pertanyaan yang sering diajukan
        </h1>

        <div className="max-w-3xl mx-auto px-8 py-12 bg-white rounded-md border border-solid border-gray-200">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="cursor-pointer border-t border-solid border-gray-200 py-6 select-none group"
            >
              <summary className="flex justify-between">
                <h3 className="font-bold text-lg text-gray-500">{faq.title}</h3>
                <span className="block group-open:hidden">
                  <FaPlus className="text-gray-400" />
                </span>
                <span className="hidden group-open:block">
                  <FaMinus className="text-gray-400" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 mr-4">{faq.description}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
