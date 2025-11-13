// Импортируем функцию из backend/exportProductsToCMS.js
import { exportProductsToCMS } from 'backend/exportProductsToCMS';

$w.onReady(() => {
  // Вешаем обработчик на кнопку экспорта
  $w('#exportButton').onClick(async () => {
    // Показываем статус начала
    $w('#statusText').text = "⏳ Экспорт начался...";

    try {
      // Запускаем экспорт
      const result = await exportProductsToCMS();

      // Проверяем результат
      if (result.success) {
        $w('#statusText').text = `✅ Экспорт завершён. Импортировано ${result.count} продуктов.`;
      } else {
        $w('#statusText').text = `❌ Ошибка: ${result.error}`;
      }
    } catch (err) {
      console.error("Ошибка вызова exportProductsToCMS:", err);
      $w('#statusText').text = `❌ Ошибка: ${err.message}`;
    }
  });
});