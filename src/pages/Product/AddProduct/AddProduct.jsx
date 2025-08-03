import ModalContaner from "../../../ModalContaner/ModalContaner";

const AddProduct = () => {
  return <>
<ModalContaner
fullscreen={true}
id={'add_product_modal'}
title={'افزودن محصول جدید'}
>
      <div className="mb-4">
        <label className="block mb-2 text-right font-medium">عنوان محصول</label>
        <input type="text" className="w-full border rounded px-3 py-2 text-right" />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-right font-medium">وزن (کیلوگرم)</label>
        <input type="number" className="w-full border rounded px-3 py-2 text-right" />
      </div>

      {/* برند */}
      <div className="mb-4">
        <label className="block mb-2 text-right font-medium">نام برند</label>
        <input type="text" placeholder="قسمتی از نام برند را وارد کنید" className="w-full border rounded px-3 py-2 text-right" />
      </div>

      {/* رنگ */}
      <div className="mb-4">
        <label className="block mb-2 text-right font-medium">نام رنگ</label>
        <input type="text" placeholder="قسمتی از نام رنگ را وارد کنید" className="w-full border rounded px-3 py-2 text-right" />
      </div>

      {/* گارانتی */}
      <div className="mb-4">
        <label className="block mb-2 text-right font-medium">نام گارانتی</label>
        <input type="text" placeholder="قسمتی از نام گارانتی را وارد کنید" className="w-full border rounded px-3 py-2 text-right" />
      </div>

      {/* توضیحات */}
      <div className="mb-4">
        <label className="block mb-2 text-right font-medium">توضیحات</label>
        <textarea className="w-full border rounded px-3 py-2 text-right" rows="3" />
      </div>
</ModalContaner>
</>;
};

export default AddProduct;
