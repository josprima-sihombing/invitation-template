"use client";

import floral1Img from "./floral-1-preview.png";
import floral2Img from "./floral-2-preview.png";
import floral3Img from "./floral-3-preview.png";
import classNames from "classnames";
import { useState } from "react";

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
    value: "aqiqah",
    label: "Aqiqah",
  },
  {
    value: "birthday",
    label: "Birthday",
  },
  {
    value: "tasyukuran",
    label: "Tasyukuran",
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
      imgSrc: floral1Img.src,
      name: "Floral 1",
      price: 150000,
    },
    {
      id: "wedding-2",
      href: "/floral-2-preview",
      imgSrc: floral2Img.src,
      name: "Floral 2",
      price: 150000,
    },
    {
      id: "wedding-3",
      href: "/floral-3-preview",
      imgSrc: floral3Img.src,
      name: "Floral 3",
      price: 150000,
    },
  ],
};

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
              <div className="w-full h-[240px] bg-white border border-solid border-gray-200 shadow-sm rounded-md overflow-hidden">
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
        <h1 className="text-center font-bold text-2xl text-gray-800 mb-8">
          Pertanyaan yang sering diajukan
        </h1>

        <div className="max-w-3xl mx-auto px-8 py-12 bg-white rounded-md border border-solid border-gray-200">
          <details className="cursor-pointer border-t border-solid border-gray-200 py-4 select-none">
            <summary className="flex justify-between">
              <h3 className="font-bold text-gray-900">
                Apa itu undangan digital?
              </h3>
              <span>Open</span>
            </summary>
            <p>Undangan digital adalah</p>
          </details>
          <details className="cursor-pointer border-t border-solid border-gray-200 py-4 select-none">
            <summary className="flex justify-between">
              <h3 className="font-bold text-gray-900">
                Apa itu undangan digital?
              </h3>
              <span>Open</span>
            </summary>
            <p>Undangan digital adalah</p>
          </details>
        </div>
      </div>
    </main>
  );
}
