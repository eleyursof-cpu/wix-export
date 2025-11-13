import wixData from 'wix-data';

export function beforeInsert_ExportProducts(item, context) {
  return wixData.query("ExportProducts")
    .eq("slug", item.slug)
    .find()
    .then((results) => {
      if (results.items.length > 0) {
        const existing = results.items[0];
        item._id = existing._id; // обновляем существующую запись
        return item;
      } else {
        return item; // добавляем новую
      }
    });
}