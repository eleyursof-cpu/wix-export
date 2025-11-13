import { exportProductsToCMS } from 'backend/exportProductsToCMS';

$w.onReady(() => {
  $w('#exportButton').onClick(async () => {
    $w('#statusText').text = "⏳ Экспорт начался...";

    const result = await exportProductsToCMS();

    if (result.success) {
      $w('#statusText').text = `✅ Экспорт завершён. Импортировано ${result.count} продуктов.`;
    } else {
      $w('#statusText').text = `❌ Ошибка: ${result.error}`;
    }
  });
});