import briLogo from "@/images/logo/bri.png";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa6";
import css from "./style.module.scss";
import classNames from "classnames";

type BankCardProps = {
  number: string;
  name: string;
};

export default function BankCard({ name, number }: BankCardProps) {
  return (
    <div>
      <div
        className={classNames(
          css.card,
          "p-4 aspect-[3/1.8] max-w-[280px] mx-auto flex flex-col justify-between",
        )}
      >
        <img
          src={briLogo.src}
          className="px-2 py-1 bg-white w-[60px] rounded-sm"
        />

        <div>
          <p className="text-lg text-[#F0C47D]">{number}</p>
          <p className="text-white">a/n: {name}</p>
        </div>
      </div>

      <button
        className="flex gap-2 items-center bg-white rounded-lg px-2 py-1 mx-auto mt-3 text-[#00529C]"
        onClick={() => {
          navigator.clipboard.writeText("567801008101535");
          toast.success("No.Rekening dicopy!", {
            position: "bottom-center",
          });
        }}
      >
        <FaCopy />
        <span>Salin No.Rekening</span>
      </button>
    </div>
  );
}
