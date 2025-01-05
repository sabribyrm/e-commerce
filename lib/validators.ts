import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Fiyat iki ondalıklı basamak olmalıdır."
  );

// Ürün Ekleme Şeması
export const insertProductSchema = z.object({
  name: z.string().min(3, "Ürün adı en az 3 karakter olmalıdır."),
  slug: z.string().min(3, "Slug en az 3 karakter olmalıdır."),
  category: z.string().min(3, "Category en az 3 karakter olmalıdır."),
  brand: z.string().min(3, "Brand en az 3 karakter olmalıdır."),
  description: z.string().min(3, "Description en az 3 karakter olmalıdır."),
  stock: z.coerce.number().min(3, "Stock en az 3 karakter olmalıdır."),
  images: z.array(z.string()).min(1, "Ürünün en az 1 resmi olmalıdır."),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
