// #region App Data: emoji library and default categories
// Набір емодзі для піктограм досягнень/категорій у формах.
const emojis = [
  '🏃',
  '🥗',
  '💧',
  '🧘',
  '🏋️',
  '💪',
  '⚽',
  '🏊',
  '🚴',
  '🎯',
  '📚',
  '🎓',
  '💼',
  '🚀',
  '💡',
  '🏆',
  '🎉',
  '🤝',
  '❤️',
  '🎤',
  '🌍',
  '✈️',
  '🏖️',
  '🗺️',
  '📖',
  '🎨',
  '🎵',
  '🎸',
  '🎬',
  '📷',
  '🌱',
  '🌻',
  '🌈',
  '⭐',
  '🌟',
  '💫',
  '✨',
  '💰',
  '💵',
  '📊',
  '📈',
  '🏠',
  '🏡',
  '💎',
  '🔑',
  '🎁',
  '🍕',
  '🍔',
  '☕',
  '🍰',
  '🎮',
  '🎲',
  '🎪',
  '🎭',
  '🏔️',
  '🌊',
  '🔥',
  '❄️',
  '🌸',
  '🎄',
  '👥',
  '🎯',
  '📱',
  '💻',
  '🖥️',
  '⌚',
  '🎧',
  '📺',
  '🎹',
  '🎺',
  '📁',
  '📂',
];

let achievements = {
  health: {
    title: "Здоров'я",
    icon: '💪',
    collapsed: true,
    order: 0,
    items: [
      {
        id: 1,
        icon: '🏃',
        name: 'Перший крок',
        description: 'Пробігти перші 5 км',
        points: 10,
        unlocked: false,
      },
      {
        id: 2,
        icon: '🥗',
        name: 'Здорове харчування',
        description: 'Тиждень правильного харчування',
        points: 15,
        unlocked: false,
      },
      {
        id: 3,
        icon: '💧',
        name: 'Водний баланс',
        description: 'Пити 2л води щодня протягом місяця',
        points: 20,
        unlocked: false,
      },
      {
        id: 4,
        icon: '🧘',
        name: 'Zen майстер',
        description: '30 днів медитації підряд',
        points: 25,
        unlocked: false,
      },
      {
        id: 5,
        icon: '🏋️',
        name: 'Силач',
        description: '3 місяці регулярних тренувань',
        points: 30,
        unlocked: false,
      },
    ],
  },
  career: {
    title: "Кар'єра",
    icon: '💼',
    collapsed: true,
    order: 1,
    items: [
      {
        id: 6,
        icon: '📚',
        name: 'Перший навик',
        description: 'Вивчити нову технологію',
        points: 15,
        unlocked: false,
      },
      {
        id: 7,
        icon: '🎯',
        name: 'Підвищення',
        description: 'Отримати підвищення на роботі',
        points: 30,
        unlocked: false,
      },
      {
        id: 8,
        icon: '🚀',
        name: 'Свій проєкт',
        description: 'Запустити власний проєкт',
        points: 50,
        unlocked: false,
      },
      {
        id: 9,
        icon: '💡',
        name: 'Інноватор',
        description: 'Реалізувати креативну ідею',
        points: 25,
        unlocked: false,
      },
      {
        id: 10,
        icon: '🏆',
        name: 'Професіонал',
        description: '5 років досвіду в галузі',
        points: 100,
        unlocked: false,
      },
    ],
  },
  social: {
    title: 'Соціальне життя',
    icon: '👥',
    collapsed: true,
    order: 2,
    items: [
      {
        id: 11,
        icon: '🎉',
        name: 'Організатор',
        description: 'Організувати захід для друзів',
        points: 15,
        unlocked: false,
      },
      {
        id: 12,
        icon: '🤝',
        name: 'Нові знайомства',
        description: 'Познайомитися з 10 новими людьми',
        points: 20,
        unlocked: false,
      },
      {
        id: 13,
        icon: '❤️',
        name: 'Довгострокові відносини',
        description: 'Рік у відносинах',
        points: 30,
        unlocked: false,
      },
      {
        id: 14,
        icon: '🎤',
        name: 'Публічний виступ',
        description: 'Виступити перед аудиторією',
        points: 25,
        unlocked: false,
      },
      {
        id: 15,
        icon: '🌍',
        name: 'Мандрівник',
        description: 'Відвідати 5 нових країн',
        points: 40,
        unlocked: false,
      },
    ],
  },
  personal: {
    title: 'Особистий розвиток',
    icon: '🌟',
    collapsed: true,
    order: 3,
    items: [
      {
        id: 16,
        icon: '📖',
        name: 'Книголюб',
        description: 'Прочитати 12 книг за рік',
        points: 20,
        unlocked: false,
      },
      {
        id: 17,
        icon: '🎨',
        name: 'Творець',
        description: 'Створити щось своїми руками',
        points: 15,
        unlocked: false,
      },
      {
        id: 18,
        icon: '🎵',
        name: 'Музикант',
        description: 'Навчитися грати на інструменті',
        points: 35,
        unlocked: false,
      },
      {
        id: 19,
        icon: '🌱',
        name: 'Нова звичка',
        description: 'Сформувати корисну звичку (21 день)',
        points: 20,
        unlocked: false,
      },
      {
        id: 20,
        icon: '🎓',
        name: 'Вічний студент',
        description: 'Пройти онлайн-курс',
        points: 25,
        unlocked: false,
      },
    ],
  },
  finance: {
    title: 'Фінанси',
    icon: '💰',
    collapsed: true,
    order: 4,
    items: [
      {
        id: 21,
        icon: '💵',
        name: 'Перші заощадження',
        description: 'Накопичити місячну зарплату',
        points: 20,
        unlocked: false,
      },
      {
        id: 22,
        icon: '📊',
        name: 'Інвестор',
        description: 'Зробити перші інвестиції',
        points: 30,
        unlocked: false,
      },
      {
        id: 23,
        icon: '🏠',
        name: 'Власне житло',
        description: 'Купити квартиру/будинок',
        points: 100,
        unlocked: false,
      },
      {
        id: 24,
        icon: '📈',
        name: 'Фінансова грамотність',
        description: 'Вести бюджет протягом року',
        points: 25,
        unlocked: false,
      },
      {
        id: 25,
        icon: '💎',
        name: 'Фінансова незалежність',
        description: 'Пасивний дохід > витрат',
        points: 150,
        unlocked: false,
      },
    ],
  },
};

// #endregion

// #region Runtime State
// Поточний стан застосунку та UI-прапорці.
let nextId = 26;
let pendingDeleteAction = null;
let activeCategoryEditKey = null;
let activeAchievementEditKey = null;
let achievementFocusObserver = null;
let achievementFocusRafId = null;

let settings = {
  color1: '#667eea',
  color2: '#764ba2',
  angle: 135,
  useGradient: true,
};
// #endregion

// #region Theme Settings
// Проставляє CSS-змінну градієнта для всієї сторінки.
function applySettings() {
  try {
    if (settings && settings.useGradient) {
      const grad = `linear-gradient(${settings.angle}deg, ${settings.color1} 0%, ${settings.color2} 100%)`;
      document.documentElement.style.setProperty('--app-gradient', grad);
    } else {
      document.documentElement.style.removeProperty('--app-gradient');
    }
  } catch (e) {
    console.error('Error applying settings', e);
  }
}
// #endregion

// #region Persistence: localStorage and storage warnings
// Завантаження даних з localStorage.
function loadProgress() {
  const saved = localStorage.getItem('lifeAchievements');
  if (saved) {
    const savedData = JSON.parse(saved);
    achievements = savedData.achievements || achievements;
    nextId = savedData.nextId || nextId;
    if (savedData.settings) {
      settings = Object.assign({}, settings, savedData.settings);
    }
  }
}

// Збереження даних.
function saveProgress() {
  try {
    const dataToSave = JSON.stringify({
      achievements: achievements,
      nextId: nextId,
      settings: settings,
    });

    localStorage.setItem('lifeAchievements', dataToSave);

    // Перевірка використання localStorage
    checkStorageUsage();
  } catch (e) {
    if (
      e.name === 'QuotaExceededError' ||
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
    ) {
      alert(
        '⚠️ УВАГА: Сховище переповнене!\n\nДані не збережено. Експортуйте свої досягнення (кнопка "💾 Експорт"), щоб не втратити їх.\n\nПорада: Видаліть старі зображення або використовуйте менші фото.',
      );
      console.error('localStorage quota exceeded');
    } else {
      console.error('Error saving to localStorage:', e);
      alert('Помилка збереження даних: ' + e.message);
    }
  }
}

// Показати інформацію про сховище.
function checkStorageInfo() {
  try {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }

    const usedMB = (total / 1024 / 1024).toFixed(2);
    const usedKB = (total / 1024).toFixed(0);
    const limitMB = 5;
    const percentage = ((usedMB / limitMB) * 100).toFixed(1);

    let status = '';
    let icon = '';
    if (percentage < 50) {
      status = 'Достатньо місця';
      icon = '✅';
    } else if (percentage < 70) {
      status = 'Помірне використання';
      icon = '⚠️';
    } else if (percentage < 90) {
      status = 'Високе використання';
      icon = '⚠️';
    } else {
      status = 'КРИТИЧНО!';
      icon = '🚨';
    }

    const message = `
              ${icon} ${status}
              
              Використано: ${usedMB} MB (${usedKB} KB)
              Ліміт: ~${limitMB} MB
              Заповнення: ${percentage}%
              
              ${percentage > 70 ? '\n⚠️ Рекомендується зробити експорт даних!' : ''}
              ${percentage > 90 ? '\n🚨 ТЕРМІНОВО експортуйте дані!' : ''}
          `;

    document.getElementById('storageInfoMessage').textContent = message;
    document.getElementById('storageInfoModal').classList.add('active');
  } catch (e) {
    alert('Помилка перевірки сховища: ' + e.message);
  }
}

// Закрити вікно інформації про сховище.
function closeStorageInfo() {
  document.getElementById('storageInfoModal').classList.remove('active');
}

// Перевірка використання сховища.
function checkStorageUsage() {
  try {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }

    // Переводимо в MB
    const usedMB = (total / 1024 / 1024).toFixed(2);
    const limitMB = 5; // Приблизний ліміт для більшості браузерів
    const percentage = ((usedMB / limitMB) * 100).toFixed(1);

    // Перевірка заповнення (без виводу в консоль)

    // Попередження при 70% заповнення
    if (percentage > 70 && percentage <= 90) {
      showStorageWarning('medium', usedMB, percentage);
    } else if (percentage > 90) {
      showStorageWarning('high', usedMB, percentage);
    }
  } catch (e) {
    console.error('Error checking storage:', e);
  }
}

// Показати попередження про заповнення сховища.
function showStorageWarning(level, usedMB, percentage) {
  const warningId = 'storage-warning-' + level;

  // Показуємо попередження тільки раз за сесію
  if (sessionStorage.getItem(warningId)) {
    return;
  }

  let message = '';
  if (level === 'medium') {
    message = `⚠️ Сховище заповнене на ${percentage}%\n\nВикористано: ${usedMB} MB з ~5 MB\n\nРекомендація: Зробіть експорт даних для резервної копії.`;
  } else if (level === 'high') {
    message = `🚨 УВАГА! Сховище майже переповнене!\n\nВикористано: ${usedMB} MB з ~5 MB (${percentage}%)\n\nТЕРМІНОВО: Експортуйте дані зараз, щоб не втратити їх!`;
  }

  if (message) {
    alert(message);
    sessionStorage.setItem(warningId, 'shown');
  }
}
// #endregion

// #region Media Inputs: emoji pickers and image uploads
// Ініціалізація емодзі-пікера для досягнень.
function initEmojiPicker() {
  const emojiPicker = document.getElementById('emojiPicker');
  emojiPicker.innerHTML = '';
  emojis.forEach((emoji) => {
    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'emoji-option';
    emojiDiv.textContent = emoji;
    emojiDiv.onclick = (e) => {
      e.stopPropagation();
      selectEmoji(emoji);
    };
    emojiPicker.appendChild(emojiDiv);
  });
}

// Ініціалізація емодзі-пікера для категорій.
function initCategoryEmojiPicker() {
  const emojiPicker = document.getElementById('categoryEmojiPicker');
  emojiPicker.innerHTML = '';
  emojis.forEach((emoji) => {
    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'emoji-option';
    emojiDiv.textContent = emoji;
    emojiDiv.onclick = (e) => {
      e.stopPropagation();
      selectCategoryEmoji(emoji);
    };
    emojiPicker.appendChild(emojiDiv);
  });
}

// Вибір емодзі для досягнення.
function selectEmoji(emoji) {
  document.getElementById('achievementImage').value = emoji;
  document.getElementById('previewImage').style.display = 'none';
  document.getElementById('uploadContent').innerHTML = `
          <div style="font-size: 4em; margin: 20px 0;">${emoji}</div>
          <div class="upload-text">Обрано емодзі (натисніть для зміни)</div>
      `;
}

// Вибір емодзі для категорії.
function selectCategoryEmoji(emoji) {
  document.getElementById('categoryIcon').value = emoji;
  document.getElementById('categoryPreviewImage').style.display = 'none';
  document.getElementById('categoryUploadContent').innerHTML = `
          <div style="font-size: 4em; margin: 20px 0;">${emoji}</div>
          <div class="upload-text">Обрано емодзі (натисніть для зміни)</div>
      `;
}

// Обробка завантаження зображення досягнення.
function handleImageUpload(event) {
  const file = event.target.files[0];

  if (!file) {
    alert('Файл не обрано. Спробуйте ще раз.');
    return;
  }

  // Перевірка розміру файлу (максимум 5MB для камери)
  if (file.size > 5 * 1024 * 1024) {
    alert(
      'Зображення занадто велике. Будь ласка, оберіть файл менше 5MB.',
    );
    return;
  }

  if (file.size === 0) {
    alert('Файл порожній. Спробуйте зробити фото ще раз.');
    return;
  }

  const reader = new FileReader();

  reader.onerror = function (error) {
    console.error('ERROR: FileReader error:', error);
    alert('Помилка при завантаженні зображення. Спробуйте інший файл.');
  };

  reader.onload = function (e) {
    try {
      const imageData = e.target.result;

      if (!imageData) {
        alert('Не вдалося завантажити зображення.');
        return;
      }

      const img = new Image();

      img.onload = function () {
        try {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          const maxSize = 400;
          if (width > maxSize || height > maxSize) {
            if (width > height) {
              height = (height / width) * maxSize;
              width = maxSize;
            } else {
              width = (width / height) * maxSize;
              height = maxSize;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          let compressedData;
          if (
            file.type === 'image/png' ||
            file.type === 'image/gif' ||
            file.type === 'image/webp'
          ) {
            compressedData = canvas.toDataURL('image/png');
          } else {
            compressedData = canvas.toDataURL('image/jpeg', 0.8);
          }

          document.getElementById('achievementImage').value =
            compressedData;
          document.getElementById('previewImage').src = compressedData;
          document.getElementById('previewImage').style.display = 'block';
          document.getElementById('uploadContent').style.display = 'none';
        } catch (error) {
          console.error('ERROR in canvas processing:', error);
          alert('Помилка при обробці зображення: ' + error.message);
        }
      };

      img.onerror = function (error) {
        console.error('ERROR: Image failed to load');
        alert('Не вдалося завантажити зображення. Спробуйте інший файл.');
      };

      img.src = imageData;
    } catch (error) {
      console.error('ERROR in onload handler:', error);
      alert('Помилка при обробці зображення: ' + error.message);
    }
  };

  try {
    reader.readAsDataURL(file);
  } catch (error) {
    console.error('ERROR calling readAsDataURL:', error);
    alert('Помилка при читанні файлу: ' + error.message);
  }
}

// Обробка завантаження зображення категорії.
function handleCategoryImageUpload(event) {
  const file = event.target.files[0];

  if (!file) {
    alert('Файл не обрано. Спробуйте ще раз.');
    return;
  }

  // Перевірка розміру файлу (максимум 5MB для камери)
  if (file.size > 5 * 1024 * 1024) {
    alert(
      'Зображення занадто велике. Будь ласка, оберіть файл менше 5MB.',
    );
    return;
  }

  if (file.size === 0) {
    alert('Файл порожній. Спробуйте зробити фото ще раз.');
    return;
  }

  const reader = new FileReader();

  reader.onerror = function (error) {
    console.error('ERROR: FileReader error:', error);
    alert('Помилка при завантаженні зображення. Спробуйте інший файл.');
  };

  reader.onload = function (e) {
    try {
      const imageData = e.target.result;

      if (!imageData) {
        alert('Не вдалося завантажити зображення.');
        return;
      }

      const img = new Image();

      img.onload = function () {
        try {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          const maxSize = 400;
          if (width > maxSize || height > maxSize) {
            if (width > height) {
              height = (height / width) * maxSize;
              width = maxSize;
            } else {
              width = (width / height) * maxSize;
              height = maxSize;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          let compressedData;
          if (
            file.type === 'image/png' ||
            file.type === 'image/gif' ||
            file.type === 'image/webp'
          ) {
            compressedData = canvas.toDataURL('image/png');
          } else {
            compressedData = canvas.toDataURL('image/jpeg', 0.8);
          }

          document.getElementById('categoryIcon').value = compressedData;
          document.getElementById('categoryPreviewImage').src =
            compressedData;
          document.getElementById('categoryPreviewImage').style.display =
            'block';
          document.getElementById('categoryUploadContent').style.display =
            'none';
        } catch (error) {
          console.error('ERROR in canvas processing:', error);
          alert('Помилка при обробці зображення: ' + error.message);
        }
      };

      img.onerror = function (error) {
        console.error('ERROR: Image failed to load');
        alert('Не вдалося завантажити зображення. Спробуйте інший файл.');
      };

      img.src = imageData;
    } catch (error) {
      console.error('ERROR in onload handler:', error);
      alert('Помилка при обробці зображення: ' + error.message);
    }
  };

  try {
    reader.readAsDataURL(file);
  } catch (error) {
    console.error('ERROR calling readAsDataURL:', error);
    alert('Помилка при читанні файлу: ' + error.message);
  }
}
// #endregion

// #region Achievements CRUD and Form Modals
// Оновлення селектора категорій у формі досягнення.
function updateCategorySelect() {
  const select = document.getElementById('categorySelect');
  select.innerHTML = '<option value="">Оберіть категорію</option>';
  Object.keys(achievements).forEach((key) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = achievements[key].title;
    select.appendChild(option);
  });
}

// Запитує підтвердження, якщо вже відкрите інше form-modal вікно.
function confirmFormModalSwitch(targetModalId) {
  const activeModal = document.querySelector('.form-modal.active');
  if (!activeModal || activeModal.id === targetModalId) {
    return true;
  }

  const shouldContinue = window.confirm(
    'У відкритому вікні є незбережені зміни.\n\nПродовжити без збереження та відкрити інше вікно?',
  );

  if (!shouldContinue) {
    return false;
  }

  activeModal.classList.remove('active');
  return true;
}

// Відкрити модальне вікно додавання досягнення.
function openAddModal() {
  if (!confirmFormModalSwitch('formModal')) {
    return;
  }

  document.getElementById('formTitle').textContent = 'Додати досягнення';
  document.getElementById('achievementForm').reset();
  document.getElementById('achievementId').value = '';
  document.getElementById('editingCategory').value = '';
  document.getElementById('achievementImage').value = '';
  document.getElementById('previewImage').style.display = 'none';
  document.getElementById('previewImage').src = '';
  document.getElementById('uploadContent').style.display = 'block';
  document.getElementById('uploadContent').innerHTML = `
          <div class="upload-icon">🏆</div>
          <div class="upload-text">Натисніть, щоб завантажити зображення<br>або оберіть емодзі нижче</div>
      `;
  updateCategorySelect();

  // Автоматично вибираємо першу категорію
  const categorySelect = document.getElementById('categorySelect');
  if (categorySelect.options.length > 0) {
    categorySelect.selectedIndex = 0;
  }

  initEmojiPicker();
  document.getElementById('formModal').classList.add('active');
}

// Відкрити модальне вікно редагування досягнення.
function openEditModal(categoryKey, achievementId) {
  if (!confirmFormModalSwitch('formModal')) {
    return;
  }

  const category = achievements[categoryKey];
  const achievement = category.items.find((a) => a.id === achievementId);

  if (achievement) {
    document.getElementById('formTitle').textContent =
      'Редагувати досягнення';

    // Спочатку оновлюємо список категорій
    updateCategorySelect();

    // Потім встановлюємо поточну категорію
    document.getElementById('categorySelect').value = categoryKey;
    document.getElementById('achievementName').value = achievement.name;
    document.getElementById('achievementDescription').value =
      achievement.description || '';
    document.getElementById('achievementId').value = achievement.id;
    document.getElementById('editingCategory').value = categoryKey;
    document.getElementById('achievementImage').value =
      achievement.image || achievement.icon || '';

    // Відображення поточної іконки/зображення
    if (achievement.image && achievement.image.startsWith('data:')) {
      document.getElementById('previewImage').src = achievement.image;
      document.getElementById('previewImage').style.display = 'block';
      document.getElementById('uploadContent').style.display = 'none';
    } else if (achievement.icon) {
      document.getElementById('uploadContent').innerHTML = `
                  <div style="font-size: 4em; margin: 20px 0;">${achievement.icon}</div>
                  <div class="upload-text">Поточна іконка (натисніть для зміни)</div>
              `;
      document.getElementById('uploadContent').style.display = 'block';
      document.getElementById('previewImage').style.display = 'none';
    } else {
      document.getElementById('uploadContent').innerHTML = `
                  <div class="upload-icon">🏆</div>
                  <div class="upload-text">Немає іконки (натисніть для додавання)</div>
              `;
      document.getElementById('uploadContent').style.display = 'block';
      document.getElementById('previewImage').style.display = 'none';
    }

    initEmojiPicker();
    document.getElementById('formModal').classList.add('active');
  }
}

// Закрити форму досягнення.
function closeFormModal() {
  document.getElementById('formModal').classList.remove('active');
}

// Зберегти досягнення (створення або редагування).
function saveAchievement(event) {
  event.preventDefault();

  const categoryKey = document.getElementById('categorySelect').value;
  const name = document.getElementById('achievementName').value;
  const description =
    document.getElementById('achievementDescription').value || '';
  const achievementId = document.getElementById('achievementId').value;
  const editingCategory =
    document.getElementById('editingCategory').value;
  const image = document.getElementById('achievementImage').value;

  if (!categoryKey) {
    alert('Будь ласка, оберіть категорію');
    return;
  }

  if (achievementId) {
    // Редагування існуючого досягнення
    const oldCategory = achievements[editingCategory];
    const achievementIndex = oldCategory.items.findIndex(
      (a) => a.id === parseInt(achievementId),
    );

    if (achievementIndex !== -1) {
      const achievement = oldCategory.items[achievementIndex];

      // Якщо категорія змінилася, переміщуємо досягнення
      if (editingCategory !== categoryKey) {
        oldCategory.items.splice(achievementIndex, 1);
        achievements[categoryKey].items.push({
          id: achievement.id,
          icon: image && !image.startsWith('data:') ? image : '',
          image: image && image.startsWith('data:') ? image : '',
          name: name,
          description: description,
          unlocked: achievement.unlocked,
        });
      } else {
        // Оновлюємо в тій же категорії
        achievement.name = name;
        achievement.description = description;
        if (image) {
          if (image.startsWith('data:')) {
            achievement.image = image;
            achievement.icon = '';
          } else {
            achievement.icon = image;
            achievement.image = '';
          }
        } else {
          achievement.icon = '';
          achievement.image = '';
        }
      }
    }
  } else {
    // Додавання нового досягнення
    const newAchievement = {
      id: nextId++,
      icon: image && !image.startsWith('data:') ? image : '',
      image: image && image.startsWith('data:') ? image : '',
      name: name,
      description: description,
      unlocked: false,
    };

    achievements[categoryKey].items.push(newAchievement);
  }

  saveProgress();
  closeFormModal();
  renderAchievements();
}

// Видалити досягнення з підтвердженням.
function deleteAchievement(categoryKey, achievementId) {
  const category = achievements[categoryKey];
  const achievement = category.items.find((a) => a.id === achievementId);

  document.getElementById('confirmDeleteTitle').textContent =
    'Видалити досягнення?';
  document.getElementById('confirmDeleteMessage').textContent =
    `Ви впевнені, що хочете видалити "${achievement.name}"?`;

  pendingDeleteAction = () => {
    const index = category.items.findIndex((a) => a.id === achievementId);

    if (index !== -1) {
      category.items.splice(index, 1);
      saveProgress();
      renderAchievements();
    }
  };

  document.getElementById('confirmDeleteModal').classList.add('active');
}
// #endregion

// #region Categories CRUD
// Відкрити модальне вікно додавання категорії.
function openCategoryModal() {
  if (!confirmFormModalSwitch('categoryModal')) {
    return;
  }

  document.getElementById('categoryFormTitle').textContent =
    'Додати категорію';
  document.getElementById('categoryForm').reset();
  document.getElementById('categoryKey').value = '';
  document.getElementById('categoryIcon').value = '';
  document.getElementById('categoryPreviewImage').style.display = 'none';
  document.getElementById('categoryPreviewImage').src = '';
  document.getElementById('categoryUploadContent').style.display =
    'block';
  document.getElementById('categoryUploadContent').innerHTML = `
          <div class="upload-icon">📁</div>
          <div class="upload-text">Натисніть, щоб завантажити зображення<br>або оберіть емодзі нижче</div>
      `;
  initCategoryEmojiPicker();
  document.getElementById('categoryModal').classList.add('active');
}

// Відкрити модальне вікно редагування категорії.
function openEditCategoryModal(categoryKey) {
  if (!confirmFormModalSwitch('categoryModal')) {
    return;
  }

  const category = achievements[categoryKey];

  if (category) {
    document.getElementById('categoryFormTitle').textContent =
      'Редагувати категорію';
    document.getElementById('categoryName').value = category.title;
    document.getElementById('categoryKey').value = categoryKey;
    document.getElementById('categoryIcon').value = category.icon;

    // Відображення поточної іконки/зображення
    if (category.icon && category.icon.startsWith('data:')) {
      document.getElementById('categoryPreviewImage').src = category.icon;
      document.getElementById('categoryPreviewImage').style.display =
        'block';
      document.getElementById('categoryUploadContent').style.display =
        'none';
    } else {
      document.getElementById('categoryUploadContent').innerHTML = `
                  <div style="font-size: 4em; margin: 20px 0;">${category.icon}</div>
                  <div class="upload-icon">📁</div>
                  <div class="upload-text">Поточна іконка (натисніть для зміни)</div>
              `;
      document.getElementById('categoryUploadContent').style.display =
        'block';
      document.getElementById('categoryPreviewImage').style.display =
        'none';
    }

    initCategoryEmojiPicker();
    document.getElementById('categoryModal').classList.add('active');
  }
}

// Закрити форму категорії.
function closeCategoryModal() {
  document.getElementById('categoryModal').classList.remove('active');
}

// Зберегти категорію (створення або редагування).
function saveCategory(event) {
  event.preventDefault();

  const categoryName = document.getElementById('categoryName').value;
  const categoryKey = document.getElementById('categoryKey').value;
  const categoryIcon = document.getElementById('categoryIcon').value;

  // Якщо іконка не обрана, будує встановлена стандартна при відображенні
  // if (!categoryIcon) {
  //   alert('Будь ласка, оберіть іконку або завантажте зображення');
  //   return;
  // }

  if (categoryKey) {
    // Редагування існуючої категорії
    if (achievements[categoryKey]) {
      achievements[categoryKey].title = categoryName;
      achievements[categoryKey].icon = categoryIcon;
    }
  } else {
    // Додавання нової категорії
    const newKey = categoryName
      .toLowerCase()
      .replace(/[^a-z0-9а-я]/g, '_');

    if (achievements[newKey]) {
      alert('Категорія з такою назвою вже існує');
      return;
    }

    // Визначаємо максимальний order
    const maxOrder = Math.max(
      ...Object.values(achievements).map((c) => c.order || 0),
      -1,
    );

    achievements[newKey] = {
      title: categoryName,
      icon: categoryIcon,
      collapsed: true,
      order: maxOrder + 1,
      items: [],
    };
  }

  saveProgress();
  closeCategoryModal();
  renderAchievements();
}

// Видалити категорію (разом з її досягненнями).
function deleteCategory(categoryKey) {
  const category = achievements[categoryKey];
  const hasAchievements = category.items.length > 0;

  document.getElementById('confirmDeleteTitle').textContent =
    'Видалити категорію?';

  let message = `Ви впевнені, що хочете видалити категорію "${category.title}"?`;
  if (hasAchievements) {
    message = `Категорія "${category.title}" містить ${category.items.length} досягнень. Всі досягнення будуть видалені. Продовжити?`;
  }

  document.getElementById('confirmDeleteMessage').textContent = message;

  pendingDeleteAction = () => {
    delete achievements[categoryKey];
    saveProgress();
    renderAchievements();
  };

  document.getElementById('confirmDeleteModal').classList.add('active');
}

// Закрити модальне вікно підтвердження видалення.
function closeConfirmDelete() {
  document
    .getElementById('confirmDeleteModal')
    .classList.remove('active');
  pendingDeleteAction = null;
}

// Підтвердити відкладене видалення.
function confirmDelete() {
  if (pendingDeleteAction) {
    pendingDeleteAction();
    pendingDeleteAction = null;
  }
  closeConfirmDelete();
}
// #endregion

// #region Sorting and Edit Controls
// Сортування ключів категорій за `order`.
function getSortedCategoryKeys() {
  return Object.keys(achievements).sort((a, b) => {
    const orderA =
      achievements[a].order !== undefined ? achievements[a].order : 999;
    const orderB =
      achievements[b].order !== undefined ? achievements[b].order : 999;
    return orderA - orderB;
  });
}

// Переміщення категорії вгору.
function moveCategoryUp(categoryKey) {
  const sortedKeys = getSortedCategoryKeys();
  const currentIndex = sortedKeys.indexOf(categoryKey);

  if (currentIndex > 0) {
    const prevKey = sortedKeys[currentIndex - 1];
    const temp = achievements[categoryKey].order;
    achievements[categoryKey].order = achievements[prevKey].order;
    achievements[prevKey].order = temp;

    saveProgress();
    renderAchievements();
  }
}

// Переміщення категорії вниз.
function moveCategoryDown(categoryKey) {
  const sortedKeys = getSortedCategoryKeys();
  const currentIndex = sortedKeys.indexOf(categoryKey);

  if (currentIndex < sortedKeys.length - 1) {
    const nextKey = sortedKeys[currentIndex + 1];
    const temp = achievements[categoryKey].order;
    achievements[categoryKey].order = achievements[nextKey].order;
    achievements[nextKey].order = temp;

    saveProgress();
    renderAchievements();
  }
}

// Переміщення досягнення вгору.
function moveAchievementUp(categoryKey, achievementId) {
  const category = achievements[categoryKey];
  const index = category.items.findIndex((a) => a.id === achievementId);

  if (index > 0) {
    const temp = category.items[index];
    category.items[index] = category.items[index - 1];
    category.items[index - 1] = temp;

    saveProgress();
    renderAchievements();
  }
}

// Переміщення досягнення вниз.
function moveAchievementDown(categoryKey, achievementId) {
  const category = achievements[categoryKey];
  const index = category.items.findIndex((a) => a.id === achievementId);

  if (index < category.items.length - 1) {
    const temp = category.items[index];
    category.items[index] = category.items[index + 1];
    category.items[index + 1] = temp;

    saveProgress();
    renderAchievements();
  }
}

function toggleCategoryEditControls(categoryKey) {
  activeCategoryEditKey =
    activeCategoryEditKey === categoryKey ? null : categoryKey;
  renderAchievements();
}

function toggleAchievementEditControls(categoryKey, achievementId) {
  const targetKey = `${categoryKey}:${achievementId}`;
  activeAchievementEditKey =
    activeAchievementEditKey === targetKey ? null : targetKey;
  renderAchievements();
}
// #endregion

// #region Focus Reveal and Category Collapse Animation
function initAchievementFocusReveal() {
  const cards = document.querySelectorAll(
    '.achievement.locked.focus-reveal',
  );
  if (!cards.length) {
    return;
  }

  if (achievementFocusObserver) {
    achievementFocusObserver.disconnect();
  }

  if (achievementFocusRafId) {
    cancelAnimationFrame(achievementFocusRafId);
    achievementFocusRafId = null;
  }

  // На старті робимо всі поточні картки різкими, щоб уникнути масового blur
  // під час ререндеру/відкриття категорій.
  cards.forEach((card) => {
    card.classList.add('revealed');
  });

  if (!('IntersectionObserver' in window)) {
    return;
  }

  achievementFocusRafId = requestAnimationFrame(() => {
    achievementFocusObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const parentCategory = entry.target.closest('.category');
          if (
            parentCategory &&
            parentCategory.classList.contains('expanding')
          ) {
            return;
          }

          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else {
            entry.target.classList.remove('revealed');
          }
        });
      },
      { threshold: 0 },
    );

    cards.forEach((card) => achievementFocusObserver.observe(card));
    achievementFocusRafId = null;
  });
}

function syncFocusRevealInViewport(scopeEl) {
  const cards = scopeEl.querySelectorAll(
    '.achievement.locked.focus-reveal',
  );
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisibleNow = rect.bottom > 0 && rect.top < viewportHeight;
    card.classList.toggle('revealed', isVisibleNow);
  });
}

// Перемікання згортання категорії
function toggleCategoryCollapse(categoryKey) {
  const category = achievements[categoryKey];
  if (!category) {
    return;
  }

  category.collapsed = !category.collapsed;

  const categoryEl = document.querySelector(
    `.category[data-category-key="${categoryKey}"]`,
  );

  if (categoryEl) {
    const itemsEl = categoryEl.querySelector('.category-items');
    const collapseBtn = categoryEl.querySelector('.collapse-toggle');

    if (category.collapsed) {
      if (itemsEl) {
        itemsEl.style.maxHeight = `${itemsEl.scrollHeight}px`;
      }
      categoryEl.classList.add('collapsed');
      if (itemsEl) {
        requestAnimationFrame(() => {
          itemsEl.style.maxHeight = '0px';
        });
      }
    } else {
      categoryEl.classList.remove('collapsed');
      if (itemsEl) {
        categoryEl.classList.add('expanding');

        // На старті розгортання показуємо картки різкими, без миттєвого blur.
        categoryEl
          .querySelectorAll('.achievement.locked.focus-reveal')
          .forEach((card) => card.classList.add('revealed'));

        itemsEl.style.maxHeight = '0px';
        requestAnimationFrame(() => {
          itemsEl.style.maxHeight = `${itemsEl.scrollHeight}px`;
        });

        // Після завершення анімації синхронізуємо blur тільки для карток
        // поза viewport.
        setTimeout(() => {
          categoryEl.classList.remove('expanding');
          syncFocusRevealInViewport(categoryEl);
        }, 320);
      }
    }

    if (collapseBtn) {
      collapseBtn.title = category.collapsed ? 'Розгорнути' : 'Згорнути';
    }
  }

  saveProgress();
}
// #endregion

// #region Rendering and Achievement State
// Головний рендер категорій і карток досягнень.
function renderAchievements() {
  const container = document.getElementById('categoriesContainer');
  container.innerHTML = '';

  const sortedKeys = getSortedCategoryKeys();

  sortedKeys.forEach((categoryKey, catIndex) => {
    const category = achievements[categoryKey];
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    categoryDiv.dataset.categoryKey = categoryKey;
    if (activeCategoryEditKey === categoryKey) {
      categoryDiv.classList.add('show-edit');
    }
    if (category.collapsed) {
      categoryDiv.classList.add('collapsed');
    }

    const categoryEditCorner = document.createElement('button');
    categoryEditCorner.className = 'edit-corner-btn';
    categoryEditCorner.type = 'button';
    categoryEditCorner.title = 'Показати кнопки редагування категорії';
    categoryEditCorner.setAttribute(
      'aria-label',
      'Показати кнопки редагування категорії',
    );
    categoryEditCorner.textContent = '✎';
    categoryEditCorner.onclick = (e) => {
      e.stopPropagation();
      toggleCategoryEditControls(categoryKey);
    };
    categoryDiv.appendChild(categoryEditCorner);

    // Створюємо заголовок категорії
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';

    // Перший ряд - кнопка згортання, іконка та назва
    const categoryHeaderTop = document.createElement('div');
    categoryHeaderTop.className = 'category-header-top';
    categoryHeaderTop.onclick = () => toggleCategoryCollapse(categoryKey);

    // Кнопка згортання/розгортання
    const collapseBtn = document.createElement('button');
    collapseBtn.className = 'collapse-toggle';
    collapseBtn.innerHTML = '▼';
    collapseBtn.title = category.collapsed ? 'Розгорнути' : 'Згорнути';
    collapseBtn.onclick = (e) => {
      e.stopPropagation();
      toggleCategoryCollapse(categoryKey);
    };
    categoryHeaderTop.appendChild(collapseBtn);

    // Іконка категорії (клікабельна для перегляду)
    if (category.icon && category.icon.startsWith('data:')) {
      const img = document.createElement('img');
      img.src = category.icon;
      img.className = 'custom-image';
      img.style.cursor = 'zoom-in';
      img.onclick = (e) => {
        e.stopPropagation();
        openImageModal(category.icon);
      };
      categoryHeaderTop.appendChild(img);
    } else if (category.icon) {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'category-icon';
      iconSpan.textContent = category.icon;
      categoryHeaderTop.appendChild(iconSpan);
    } else {
      const iconSpan = document.createElement('span');
      iconSpan.className = 'category-icon';
      iconSpan.textContent = '📁';
      categoryHeaderTop.appendChild(iconSpan);
    }

    // Назва категорії
    const titleSpan = document.createElement('span');
    titleSpan.className = 'category-title';
    titleSpan.textContent = category.title;
    categoryHeaderTop.appendChild(titleSpan);

    categoryHeader.appendChild(categoryHeaderTop);

    // Другий ряд - кнопки управління
    const categoryControls = document.createElement('div');
    categoryControls.className = 'category-controls';

    const upBtn = document.createElement('button');
    upBtn.className = 'action-btn sort-btn';
    upBtn.innerHTML = '⬆️';
    upBtn.title = 'Перемістити вгору';
    upBtn.disabled = catIndex === 0;
    upBtn.onclick = (e) => {
      e.stopPropagation();
      moveCategoryUp(categoryKey);
    };
    categoryControls.appendChild(upBtn);

    const downBtn = document.createElement('button');
    downBtn.className = 'action-btn sort-btn';
    downBtn.innerHTML = '⬇️';
    downBtn.title = 'Перемістити вниз';
    downBtn.disabled = catIndex === sortedKeys.length - 1;
    downBtn.onclick = (e) => {
      e.stopPropagation();
      moveCategoryDown(categoryKey);
    };
    categoryControls.appendChild(downBtn);

    const editBtn = document.createElement('button');
    editBtn.className = 'category-action-btn';
    editBtn.innerHTML = '✏️';
    editBtn.title = 'Редагувати категорію';
    editBtn.onclick = (e) => {
      e.stopPropagation();
      openEditCategoryModal(categoryKey);
    };
    categoryControls.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'category-action-btn delete';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.title = 'Видалити категорію';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      deleteCategory(categoryKey);
      return false;
    };
    categoryControls.appendChild(deleteBtn);

    categoryHeader.appendChild(categoryControls);
    categoryDiv.appendChild(categoryHeader);

    // Контейнер для досягнень
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'category-items';

    // Додаємо досягнення
    category.items.forEach((achievement, achIndex) => {
      const achievementDiv = document.createElement('div');
      achievementDiv.className = `achievement ${achievement.unlocked ? 'unlocked' : 'locked'}`;
      if (!achievement.unlocked) {
        achievementDiv.classList.add('focus-reveal');
      } else {
        achievementDiv.classList.add('revealed');
      }
      if (
        activeAchievementEditKey === `${categoryKey}:${achievement.id}`
      ) {
        achievementDiv.classList.add('show-edit');
      }

      const achievementEditCorner = document.createElement('button');
      achievementEditCorner.className = 'edit-corner-btn';
      achievementEditCorner.type = 'button';
      achievementEditCorner.title =
        'Показати кнопки редагування досягнення';
      achievementEditCorner.setAttribute(
        'aria-label',
        'Показати кнопки редагування досягнення',
      );
      achievementEditCorner.textContent = '✎';
      achievementEditCorner.onclick = (e) => {
        e.stopPropagation();
        toggleAchievementEditControls(categoryKey, achievement.id);
      };
      achievementDiv.appendChild(achievementEditCorner);

      // ПЕРШИЙ РЯД - основний контент
      const achievementMain = document.createElement('div');
      achievementMain.className = 'achievement-main';
      achievementMain.onclick = () =>
        toggleAchievement(categoryKey, achievement.id);

      // Іконка досягнення (клікабельна для перегляду)
      if (achievement.image && achievement.image.startsWith('data:')) {
        const img = document.createElement('img');
        img.src = achievement.image;
        img.className = 'custom-image achievement-icon';
        img.style.cursor = 'zoom-in';
        img.onclick = (e) => {
          e.stopPropagation();
          openImageModal(achievement.image);
        };
        achievementMain.appendChild(img);
      } else if (achievement.icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'achievement-icon';
        iconSpan.textContent = achievement.icon;
        achievementMain.appendChild(iconSpan);
      } else {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'achievement-icon';
        iconSpan.textContent = '🏆';
        achievementMain.appendChild(iconSpan);
      }

      // Контент досягнення
      const contentDiv = document.createElement('div');
      contentDiv.className = 'achievement-content';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'achievement-name';
      nameDiv.textContent = achievement.name;
      contentDiv.appendChild(nameDiv);

      if (achievement.description) {
        const descDiv = document.createElement('div');
        descDiv.className = 'achievement-description';
        descDiv.textContent = achievement.description;
        contentDiv.appendChild(descDiv);
      }

      achievementMain.appendChild(contentDiv);
      achievementDiv.appendChild(achievementMain);

      // ДРУГИЙ РЯД - всі кнопки управління
      const achievementControls = document.createElement('div');
      achievementControls.className = 'achievement-controls';

      const achievementActionRow = document.createElement('div');
      achievementActionRow.className = 'achievement-action-row';

      const upBtn = document.createElement('button');
      upBtn.className = 'action-btn sort-btn';
      upBtn.innerHTML = '⬆️';
      upBtn.title = 'Перемістити вгору';
      upBtn.disabled = achIndex === 0;
      upBtn.onclick = (e) => {
        e.stopPropagation();
        moveAchievementUp(categoryKey, achievement.id);
      };
      achievementActionRow.appendChild(upBtn);

      const downBtn = document.createElement('button');
      downBtn.className = 'action-btn sort-btn';
      downBtn.innerHTML = '⬇️';
      downBtn.title = 'Перемістити вниз';
      downBtn.disabled = achIndex === category.items.length - 1;
      downBtn.onclick = (e) => {
        e.stopPropagation();
        moveAchievementDown(categoryKey, achievement.id);
      };
      achievementActionRow.appendChild(downBtn);

      const editBtn = document.createElement('button');
      editBtn.className = 'action-btn edit-btn';
      editBtn.innerHTML = '✏️';
      editBtn.title = 'Редагувати';
      editBtn.onclick = (e) => {
        e.stopPropagation();
        openEditModal(categoryKey, achievement.id);
      };
      achievementActionRow.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'action-btn delete-btn';
      deleteBtn.innerHTML = '🗑️';
      deleteBtn.title = 'Видалити';
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteAchievement(categoryKey, achievement.id);
        return false;
      };
      achievementActionRow.appendChild(deleteBtn);

      achievementControls.appendChild(achievementActionRow);
      achievementDiv.appendChild(achievementControls);
      itemsContainer.appendChild(achievementDiv);
    });

    categoryDiv.appendChild(itemsContainer);
    container.appendChild(categoryDiv);
  });

  updateStats();
  initAchievementFocusReveal();
}

// Перемикання статусу досягнення (locked/unlocked).
function toggleAchievement(categoryKey, achievementId) {
  const category = achievements[categoryKey];
  const achievement = category.items.find((a) => a.id === achievementId);

  if (achievement) {
    const wasUnlocked = achievement.unlocked;
    achievement.unlocked = !achievement.unlocked;

    if (achievement.unlocked && !wasUnlocked) {
      showUnlockModal(achievement);
    }

    saveProgress();
    renderAchievements();
  }
}

// Показати модальне вікно "досягнення відкрито".
function showUnlockModal(achievement) {
  const modal = document.getElementById('achievementModal');
  const iconDisplay = achievement.image
    ? `<img src="${achievement.image}" style="max-width: 100px; max-height: 100px; border-radius: 10px;">`
    : achievement.icon || '🎉';
  document.getElementById('modalIcon').innerHTML = iconDisplay;
  document.getElementById('modalTitle').textContent = achievement.name;
  document.getElementById('modalDescription').textContent =
    achievement.description || '';
  modal.classList.add('active');
}

// Закрити модальне вікно досягнення.
function closeModal() {
  document.getElementById('achievementModal').classList.remove('active');
}

// Відкрити зображення у повний розмір.
function openImageModal(imageSrc) {
  document.getElementById('imageModalImg').src = imageSrc;
  document.getElementById('imageModal').classList.add('active');
}

// Закрити модальне вікно зображення.
function closeImageModal() {
  document.getElementById('imageModal').classList.remove('active');
}

// Оновлення лічильників статистики.
function updateStats() {
  let unlockedCount = 0;
  let totalCount = 0;

  Object.keys(achievements).forEach((categoryKey) => {
    achievements[categoryKey].items.forEach((achievement) => {
      totalCount++;
      if (achievement.unlocked) {
        unlockedCount++;
      }
    });
  });

  document.getElementById('unlockedCount').textContent = unlockedCount;
  document.getElementById('totalCount').textContent = totalCount;
}
// #endregion

// #region Import and Export
// Експорт даних у JSON файл.
function exportData() {
  try {
    const data = {
      achievements: achievements,
      nextId: nextId,
      exportDate: new Date().toISOString(),
      version: '1.0',
    };

    const dataStr = JSON.stringify(data, null, 2);
    const fileName =
      'life-achievements-' +
      new Date().toISOString().split('T')[0] +
      '.json';

    // Перевірка чи це iOS/Mobile Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Для iOS: використовуємо Share API якщо доступний
      const blob = new Blob([dataStr], { type: 'application/json' });
      const file = new File([blob], fileName, {
        type: 'application/json',
      });

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        navigator
          .share({
            files: [file],
            title: 'Експорт досягнень',
            text: 'Резервна копія моїх досягнень',
          })
          .then(() => {
            // Share completed
          })
          .catch((error) => {
            if (error.name !== 'AbortError') {
              console.error('Share error:', error);
              // Fallback: показати дані для копіювання
              showExportDataModal(dataStr, fileName);
            }
          });
      } else {
        // Fallback: показати дані для копіювання
        showExportDataModal(dataStr, fileName);
      }
    } else {
      // Для інших платформ: звичайне завантаження
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      alert('✅ Дані успішно експортовано!\n\nФайл: ' + fileName);
    }
  } catch (error) {
    console.error('Export error:', error);
    alert('Помилка експорту: ' + error.message);
  }
}

// Fallback-модальне вікно для копіювання JSON (iOS).
function showExportDataModal(dataStr, fileName) {
  const modal = document.createElement('div');
  modal.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;justify-content:center;align-items:center;padding:20px;';

  const content = document.createElement('div');
  content.style.cssText =
    'background:white;border-radius:15px;padding:20px;max-width:500px;width:100%;max-height:80vh;overflow:auto;';

  const title = document.createElement('h2');
  title.textContent = '📥 Експорт даних';
  title.style.cssText = 'color:#667eea;margin-top:0;';
  content.appendChild(title);

  const instructions = document.createElement('p');
  instructions.textContent =
    'Скопіюйте текст нижче та збережіть у файл "' + fileName + '":';
  instructions.style.cssText = 'color:#666;margin-bottom:15px;';
  content.appendChild(instructions);

  const textarea = document.createElement('textarea');
  textarea.value = dataStr;
  textarea.readOnly = true;
  textarea.style.cssText =
    'width:100%;min-height:200px;padding:10px;border:2px solid #667eea;border-radius:8px;font-family:monospace;font-size:12px;margin-bottom:15px;box-sizing:border-box;';
  content.appendChild(textarea);

  const btnContainer = document.createElement('div');
  btnContainer.style.cssText = 'display:flex;gap:10px;';

  const copyBtn = document.createElement('button');
  copyBtn.textContent = '📋 Копіювати';
  copyBtn.style.cssText =
    'flex:1;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;border:none;padding:12px;border-radius:8px;font-size:16px;cursor:pointer;';
  copyBtn.onclick = () => {
    textarea.select();
    document.execCommand('copy');
    copyBtn.textContent = '✅ Скопійовано!';
    setTimeout(() => {
      copyBtn.textContent = '📋 Копіювати';
    }, 2000);
  };
  btnContainer.appendChild(copyBtn);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Закрити';
  closeBtn.style.cssText =
    'flex:1;background:#e0e0e0;color:#333;border:none;padding:12px;border-radius:8px;font-size:16px;cursor:pointer;';
  closeBtn.onclick = () => {
    document.body.removeChild(modal);
  };
  btnContainer.appendChild(closeBtn);

  content.appendChild(btnContainer);
  modal.appendChild(content);

  modal.onclick = (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  };

  document.body.appendChild(modal);
  textarea.select();
}

// Відкрити підтвердження імпорту.
function importData() {
  document.getElementById('confirmImportModal').classList.add('active');
}

// Закрити модальне вікно підтвердження імпорту.
function closeConfirmImport() {
  document
    .getElementById('confirmImportModal')
    .classList.remove('active');
}

// Підтвердити імпорт і відкрити file picker.
function confirmImport() {
  closeConfirmImport();
  document.getElementById('importFile').click();
}

// Обробка імпорту файлу.
function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);

      // Перевірка структури даних
      if (!data.achievements || !data.nextId) {
        throw new Error('Невірний формат файлу');
      }

      // Відновлення даних
      achievements = data.achievements;
      nextId = data.nextId;

      saveProgress();
      renderAchievements();

      alert(
        '✅ Дані успішно імпортовано!\n\nДата експорту: ' +
          (data.exportDate
            ? new Date(data.exportDate).toLocaleString('uk-UA')
            : 'невідома'),
      );
    } catch (error) {
      console.error('Import error:', error);
      alert(
        'Помилка імпорту: ' +
          error.message +
          '\n\nПереконайтеся що файл не пошкоджений.',
      );
    }
  };

  reader.onerror = function () {
    alert('Помилка читання файлу');
  };

  reader.readAsText(file);

  // Очищаємо input для можливості імпорту того самого файлу знову
  event.target.value = '';
}
// #endregion

// #region Reset, FAB and Quick Actions
// Відкрити модальне вікно підтвердження скидання.
function openConfirmReset() {
  document.getElementById('confirmResetModal').classList.add('active');
}

function toggleFabMenu() {
  const fabMenu = document.getElementById('fabMenu');
  fabMenu.classList.toggle('open');
}

function closeFabMenu() {
  const fabMenu = document.getElementById('fabMenu');
  fabMenu.classList.remove('open');
}

function openAddFromFab() {
  closeFabMenu();
  openAddModal();
}

function openCategoryFromFab() {
  closeFabMenu();
  openCategoryModal();
}

function openSettingsFromFab() {
  closeFabMenu();
  openQuickActionsModal();
}

function openQuickActionsModal() {
  if (!confirmFormModalSwitch('quickActionsModal')) {
    return;
  }

  document.getElementById('quickActionsModal').classList.add('active');
  closeFabMenu();
}

function closeQuickActionsModal() {
  document.getElementById('quickActionsModal').classList.remove('active');
}

function runQuickAction(action) {
  closeQuickActionsModal();
  if (action === 'export') {
    exportData();
  } else if (action === 'import') {
    importData();
  } else if (action === 'storage') {
    checkStorageInfo();
  } else if (action === 'theme') {
    openSettingsModal();
  }
}

// Закрити модальне вікно підтвердження скидання.
function closeConfirmReset() {
  document.getElementById('confirmResetModal').classList.remove('active');
}

// Підтвердити скидання всіх даних.
function confirmReset() {
  // Видаляємо всі збережені дані
  localStorage.removeItem('lifeAchievements');

  // Перезавантажуємо сторінку для повного скидання
  location.reload();
}
// #endregion

// #region Global Event Listeners
// Закриття модальних вікон по кліку на фон.
document
  .getElementById('formModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeFormModal();
    }
  });

document
  .getElementById('categoryModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeCategoryModal();
    }
  });

document
  .getElementById('achievementModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

document
  .getElementById('confirmResetModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeConfirmReset();
    }
  });

document
  .getElementById('confirmDeleteModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeConfirmDelete();
    }
  });

document
  .getElementById('storageInfoModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeStorageInfo();
    }
  });

document
  .getElementById('confirmImportModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeConfirmImport();
    }
  });

document
  .getElementById('quickActionsModal')
  .addEventListener('click', function (e) {
    if (e.target === this) {
      closeQuickActionsModal();
    }
  });

document.addEventListener('click', function (e) {
  const fabMenu = document.getElementById('fabMenu');
  if (!fabMenu.contains(e.target)) {
    closeFabMenu();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeFabMenu();
  }
});
// #endregion

// #region Settings Modal
// Обробники модального вікна налаштувань теми.
function openSettingsModal() {
  if (!confirmFormModalSwitch('settingsModal')) {
    return;
  }

  document.getElementById('themeColor1').value =
    settings.color1 || '#667eea';
  document.getElementById('themeColor2').value =
    settings.color2 || '#764ba2';
  document.getElementById('themeAngle').value = settings.angle || 135;
  updateGradientPreview();
  document.getElementById('settingsModal').classList.add('active');
}

function closeSettingsModal() {
  document.getElementById('settingsModal').classList.remove('active');
}

function updateGradientPreview() {
  const c1 = document.getElementById('themeColor1').value;
  const c2 = document.getElementById('themeColor2').value;
  const angle = document.getElementById('themeAngle').value || 135;
  const preview = document.getElementById('gradientPreview');
  if (preview) {
    preview.style.background = `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%)`;
  }
}

document
  .getElementById('themeColor1')
  .addEventListener('input', updateGradientPreview);
document
  .getElementById('themeColor2')
  .addEventListener('input', updateGradientPreview);
document
  .getElementById('themeAngle')
  .addEventListener('input', updateGradientPreview);

function saveSettings(e) {
  e.preventDefault();
  const c1 = document.getElementById('themeColor1').value;
  const c2 = document.getElementById('themeColor2').value;
  const angle =
    parseInt(document.getElementById('themeAngle').value, 10) || 135;
  settings.color1 = c1;
  settings.color2 = c2;
  settings.angle = angle;
  settings.useGradient = true;
  applySettings();
  saveProgress();
  closeSettingsModal();
}
// #endregion

// #region App Bootstrap
// Ініціалізація стану й першого рендера.
loadProgress();
applySettings();
renderAchievements();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js', { scope: './' })
      .then((registration) => {
        console.log('✅ Service Worker зареєстровано:', registration);
        // Перевірка оновлень
        setInterval(() => {
          registration.update();
        }, 60000); // Кожну хвилину
      })
      .catch((error) => {
        console.error('❌ Помилка реєстрації Service Worker:', error);
      });
  });
} else {
  console.warn('Service Worker не підтримується цим браузером');
}
// #endregion
