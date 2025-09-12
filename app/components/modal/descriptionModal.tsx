// components/DescriptionModal.tsx
import { X } from "lucide-react";

interface DescriptionModalProps {
  open: boolean;
  onClose: () => void;
  description: string;
}

const DescriptionModal = ({
  open,
  onClose,
  description,
}: DescriptionModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[80vh] overflow-hidden animate-fadeZoom">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          <h2 className="text-xl font-semibold mb-4 text-[rgb(25,110,220)]">
            Mô tả chi tiết
          </h2>
          <p className="text-gray-700 whitespace-pre-line">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionModal;
