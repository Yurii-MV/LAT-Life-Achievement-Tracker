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
        unlocked: false,
      },
      {
        id: 2,
        icon: '🥗',
        name: 'Здорове харчування',
        description: 'Тиждень правильного харчування',
        unlocked: false,
      },
      {
        id: 3,
        icon: '💧',
        name: 'Водний баланс',
        description: 'Пити 2л води щодня протягом місяця',
        unlocked: false,
      },
      {
        id: 4,
        icon: '🧘',
        name: 'Zen майстер',
        description: '30 днів медитації підряд',
        unlocked: false,
      },
      {
        id: 5,
        icon: '🏋️',
        name: 'Силач',
        description: '3 місяці регулярних тренувань',
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
        unlocked: false,
      },
      {
        id: 7,
        icon: '🎯',
        name: 'Підвищення',
        description: 'Отримати підвищення на роботі',
        unlocked: false,
      },
      {
        id: 8,
        icon: '🚀',
        name: 'Свій проєкт',
        description: 'Запустити власний проєкт',
        unlocked: false,
      },
      {
        id: 9,
        icon: '💡',
        name: 'Інноватор',
        description: 'Реалізувати креативну ідею',
        unlocked: false,
      },
      {
        id: 10,
        icon: '🏆',
        name: 'Професіонал',
        description: '5 років досвіду в галузі',
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
        unlocked: false,
      },
      {
        id: 12,
        icon: '🤝',
        name: 'Нові знайомства',
        description: 'Познайомитися з 10 новими людьми',
        unlocked: false,
      },
      {
        id: 13,
        icon: '❤️',
        name: 'Довгострокові відносини',
        description: 'Рік у відносинах',
        unlocked: false,
      },
      {
        id: 14,
        icon: '🎤',
        name: 'Публічний виступ',
        description: 'Виступити перед аудиторією',
        unlocked: false,
      },
      {
        id: 15,
        icon: '🌍',
        name: 'Мандрівник',
        description: 'Відвідати 5 нових країн',
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
        unlocked: false,
      },
      {
        id: 17,
        icon: '🎨',
        name: 'Творець',
        description: 'Створити щось своїми руками',
        unlocked: false,
      },
      {
        id: 18,
        icon: '🎵',
        name: 'Музикант',
        description: 'Навчитися грати на інструменті',
        unlocked: false,
      },
      {
        id: 19,
        icon: '🌱',
        name: 'Нова звичка',
        description: 'Сформувати корисну звичку (21 день)',
        unlocked: false,
      },
      {
        id: 20,
        icon: '🎓',
        name: 'Вічний студент',
        description: 'Пройти онлайн-курс',
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
        unlocked: false,
      },
      {
        id: 22,
        icon: '📊',
        name: 'Інвестор',
        description: 'Зробити перші інвестиції',
        unlocked: false,
      },
      {
        id: 23,
        icon: '🏠',
        name: 'Власне житло',
        description: 'Купити квартиру/будинок',
        unlocked: false,
      },
      {
        id: 24,
        icon: '📈',
        name: 'Фінансова грамотність',
        description: 'Вести бюджет протягом року',
        unlocked: false,
      },
      {
        id: 25,
        icon: '💎',
        name: 'Фінансова незалежність',
        description: 'Пасивний дохід > витрат',
        unlocked: false,
      },
    ],
  },
};

// #endregion

// #region Runtime State
const STORAGE_KEY = 'lifeAchievements';
const FALLBACK_STORAGE_LIMIT_MB = 512;
const DB_NAME = 'lifeAchievementTrackerDB';
const DB_VERSION = 1;
const DB_STORE = 'appState';
const IMAGE_UPLOAD_MAX_BYTES = 5 * 1024 * 1024;
const IMAGE_MAX_DIMENSION = 400;
const CATEGORY_EXPAND_SYNC_DELAY_MS = 320;
const EXPORT_COPY_RESET_MS = 2000;

const $ = (id) => document.getElementById(id);

function setModalActive(modalId, isActive) {
  const modal = $(modalId);
  if (!modal) {
    return;
  }
  modal.classList.toggle('active', isActive);
}

// Поточний стан застосунку та UI-прапорці.
let nextId = 26;
let pendingDeleteAction = null;
let activeCategoryEditKey = null;
let activeAchievementEditKey = null;
let achievementFocusObserver = null;
let achievementFocusRafId = null;
let dbPromise = null;
let saveQueue = Promise.resolve();

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

// #region Persistence: IndexedDB and storage warnings
function isIndexedDBAvailable() {
  return typeof indexedDB !== 'undefined';
}

function openAppDB() {
  if (!isIndexedDBAvailable()) {
    return Promise.resolve(null);
  }

  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });

  return dbPromise;
}

function readFromDB(key) {
  return openAppDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        if (!db) {
          resolve(null);
          return;
        }

        const tx = db.transaction(DB_STORE, 'readonly');
        const store = tx.objectStore(DB_STORE);
        const request = store.get(key);

        request.onsuccess = () => resolve(request.result || null);
        request.onerror = () => reject(request.error);
      }),
  );
}

function writeToDB(key, value) {
  return openAppDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        if (!db) {
          reject(new Error('IndexedDB не підтримується цим браузером'));
          return;
        }

        const tx = db.transaction(DB_STORE, 'readwrite');
        const store = tx.objectStore(DB_STORE);
        const request = store.put(value, key);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      }),
  );
}

function deleteFromDB(key) {
  return openAppDB().then(
    (db) =>
      new Promise((resolve, reject) => {
        if (!db) {
          resolve();
          return;
        }

        const tx = db.transaction(DB_STORE, 'readwrite');
        const store = tx.objectStore(DB_STORE);
        const request = store.delete(key);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      }),
  );
}

async function migrateLegacyLocalStorageData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return null;
  }

  try {
    const parsed = JSON.parse(saved);
    await writeToDB(STORAGE_KEY, parsed);
    localStorage.removeItem(STORAGE_KEY);
    return parsed;
  } catch (error) {
    console.error('Помилка міграції даних з localStorage:', error);
    return null;
  }
}

// Завантаження даних з IndexedDB (з міграцією зі старого localStorage).
async function loadProgress() {
  try {
    let savedData = await readFromDB(STORAGE_KEY);
    if (!savedData) {
      savedData = await migrateLegacyLocalStorageData();
    }

    if (savedData) {
      achievements = savedData.achievements || achievements;
      nextId = savedData.nextId || nextId;
      if (savedData.settings) {
        settings = Object.assign({}, settings, savedData.settings);
      }
    }
  } catch (error) {
    console.error('Помилка завантаження з IndexedDB:', error);
    alert('Помилка завантаження даних: ' + error.message);
  }
}

// Збереження даних в IndexedDB.
function saveProgress() {
  const snapshot = {
    achievements: achievements,
    nextId: nextId,
    settings: settings,
  };

  saveQueue = saveQueue
    .then(async () => {
      try {
        await writeToDB(STORAGE_KEY, snapshot);
        checkStorageUsage();
      } catch (e) {
        if (
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
        ) {
          alert(
            '⚠️ УВАГА: Сховище переповнене!\n\nДані не збережено. Експортуйте свої досягнення (кнопка "💾 Експорт"), щоб не втратити їх.\n\nПорада: Видаліть старі зображення або використовуйте менші фото.',
          );
          console.error('IndexedDB quota exceeded');
        } else {
          console.error('Error saving to IndexedDB:', e);
          alert('Помилка збереження даних: ' + e.message);
        }
      }
    })
    .catch((error) => {
      console.error('Помилка черги збереження:', error);
    });
}

async function getStorageUsageMetrics() {
  if (navigator.storage && navigator.storage.estimate) {
    try {
      const estimate = await navigator.storage.estimate();
      const usage = estimate.usage || 0;
      const quota = estimate.quota || 0;
      if (quota > 0) {
        const usedMBValue = usage / 1024 / 1024;
        const usedKBValue = usage / 1024;
        const percentageValue = (usage / quota) * 100;
        return {
          usedMB: usedMBValue.toFixed(2),
          usedKB: usedKBValue.toFixed(0),
          percentage: percentageValue.toFixed(1),
          percentageValue,
          limitMB: (quota / 1024 / 1024).toFixed(2),
          source: 'navigator.storage.estimate',
          hasReliableQuota: true,
        };
      }
    } catch (error) {
      console.warn('Не вдалося отримати estimate() для сховища:', error);
    }
  }

  // Fallback: приблизно рахуємо розмір поточного стану в UTF-16 байтах.
  const serialized = JSON.stringify({
    achievements: achievements,
    nextId: nextId,
    settings: settings,
  });
  const approxBytes = serialized.length * 2;
  const usedMBValue = approxBytes / 1024 / 1024;
  const usedKBValue = approxBytes / 1024;
  const percentageValue = (usedMBValue / FALLBACK_STORAGE_LIMIT_MB) * 100;

  return {
    usedMB: usedMBValue.toFixed(2),
    usedKB: usedKBValue.toFixed(0),
    percentage: percentageValue.toFixed(1),
    percentageValue,
    limitMB: FALLBACK_STORAGE_LIMIT_MB.toFixed(2),
    source: 'fallback estimate',
    hasReliableQuota: false,
  };
}

// Показати інформацію про сховище.
async function checkStorageInfo() {
  try {
    const {
      usedMB,
      usedKB,
      percentage,
      percentageValue,
      limitMB,
      source,
      hasReliableQuota,
    } =
      await getStorageUsageMetrics();

    let status = '';
    let icon = '';
    if (!hasReliableQuota) {
      status = 'Оцінка без точного ліміту';
      icon = 'ℹ️';
    } else if (percentageValue < 50) {
      status = 'Достатньо місця';
      icon = '✅';
    } else if (percentageValue < 70) {
      status = 'Помірне використання';
      icon = '⚠️';
    } else if (percentageValue < 90) {
      status = 'Високе використання';
      icon = '⚠️';
    } else {
      status = 'КРИТИЧНО!';
      icon = '🚨';
    }

    const message = `
              ${icon} ${status}
              
              Використано: ${usedMB} MB (${usedKB} KB)
              Ліміт: ${hasReliableQuota ? `~${limitMB} MB` : 'невідомий (показана орієнтовна оцінка)'}
              Заповнення: ${hasReliableQuota ? `${percentage}%` : 'невідомо'}
              Джерело метрики: ${source}
              
              ${hasReliableQuota && percentageValue > 70 ? '\n⚠️ Рекомендується зробити експорт даних!' : ''}
              ${hasReliableQuota && percentageValue > 90 ? '\n🚨 ТЕРМІНОВО експортуйте дані!' : ''}
          `;

    $('storageInfoMessage').textContent = message;
    setModalActive('storageInfoModal', true);
  } catch (e) {
    alert('Помилка перевірки сховища: ' + e.message);
  }
}

// Закрити вікно інформації про сховище.
function closeStorageInfo() {
  setModalActive('storageInfoModal', false);
}

// Перевірка використання сховища.
async function checkStorageUsage() {
  try {
    const { usedMB, percentage, percentageValue, hasReliableQuota } =
      await getStorageUsageMetrics();

    if (!hasReliableQuota) {
      return;
    }

    if (percentageValue > 70 && percentageValue <= 90) {
      showStorageWarning('medium', usedMB, percentage);
    } else if (percentageValue > 90) {
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
    message = `⚠️ Сховище заповнене на ${percentage}%\n\nВикористано: ${usedMB} MB\n\nРекомендація: Зробіть експорт даних для резервної копії.`;
  } else if (level === 'high') {
    message = `🚨 УВАГА! Сховище майже переповнене!\n\nВикористано: ${usedMB} MB (${percentage}%)\n\nТЕРМІНОВО: Експортуйте дані зараз, щоб не втратити їх!`;
  }

  if (message) {
    alert(message);
    sessionStorage.setItem(warningId, 'shown');
  }
}
// #endregion

// #region Media Inputs: emoji pickers and image uploads
function renderEmojiPicker(pickerId, onSelect) {
  const emojiPicker = $(pickerId);
  if (!emojiPicker) {
    return;
  }

  emojiPicker.innerHTML = '';
  emojis.forEach((emoji) => {
    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'emoji-option';
    emojiDiv.textContent = emoji;
    emojiDiv.onclick = (e) => {
      e.stopPropagation();
      onSelect(emoji);
    };
    emojiPicker.appendChild(emojiDiv);
  });
}

function applySelectedEmoji(config, emoji) {
  const imageInput = $(config.imageInputId);
  const previewImage = $(config.previewImageId);
  const uploadContent = $(config.uploadContentId);

  if (imageInput) {
    imageInput.value = emoji;
  }
  if (previewImage) {
    previewImage.src = '';
    previewImage.style.display = 'none';
  }
  if (uploadContent) {
    uploadContent.style.display = 'block';
    uploadContent.innerHTML = `
          <div style="font-size: 4em; margin: 20px 0;">${emoji}</div>
          <div class="upload-text">Обрано емодзі (натисніть для зміни)</div>
      `;
  }
}

// Ініціалізація емодзі-пікера для досягнень.
function initEmojiPicker() {
  renderEmojiPicker('emojiPicker', (emoji) => {
    applySelectedEmoji(
      {
        imageInputId: 'achievementImage',
        previewImageId: 'previewImage',
        uploadContentId: 'uploadContent',
      },
      emoji,
    );
  });
}

// Ініціалізація емодзі-пікера для категорій.
function initCategoryEmojiPicker() {
  renderEmojiPicker('categoryEmojiPicker', (emoji) => {
    applySelectedEmoji(
      {
        imageInputId: 'categoryIcon',
        previewImageId: 'categoryPreviewImage',
        uploadContentId: 'categoryUploadContent',
      },
      emoji,
    );
  });
}

function handleImageUploadByConfig(event, config) {
  const file = event.target.files[0];

  if (!file) {
    alert('Файл не обрано. Спробуйте ще раз.');
    return;
  }

  if (file.size > IMAGE_UPLOAD_MAX_BYTES) {
    alert('Зображення занадто велике. Будь ласка, оберіть файл менше 5MB.');
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

          if (width > IMAGE_MAX_DIMENSION || height > IMAGE_MAX_DIMENSION) {
            if (width > height) {
              height = (height / width) * IMAGE_MAX_DIMENSION;
              width = IMAGE_MAX_DIMENSION;
            } else {
              width = (width / height) * IMAGE_MAX_DIMENSION;
              height = IMAGE_MAX_DIMENSION;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const isLosslessType =
            file.type === 'image/png' ||
            file.type === 'image/gif' ||
            file.type === 'image/webp';
          const compressedData = isLosslessType
            ? canvas.toDataURL('image/png')
            : canvas.toDataURL('image/jpeg', 0.8);

          const imageInput = $(config.imageInputId);
          const previewImage = $(config.previewImageId);
          const uploadContent = $(config.uploadContentId);

          if (imageInput) {
            imageInput.value = compressedData;
          }
          if (previewImage) {
            previewImage.src = compressedData;
            previewImage.style.display = 'block';
          }
          if (uploadContent) {
            uploadContent.style.display = 'none';
          }
        } catch (error) {
          console.error('ERROR in canvas processing:', error);
          alert('Помилка при обробці зображення: ' + error.message);
        }
      };

      img.onerror = function () {
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

// Обробка завантаження зображення досягнення.
function handleImageUpload(event) {
  handleImageUploadByConfig(event, {
    imageInputId: 'achievementImage',
    previewImageId: 'previewImage',
    uploadContentId: 'uploadContent',
  });
}

// Обробка завантаження зображення категорії.
function handleCategoryImageUpload(event) {
  handleImageUploadByConfig(event, {
    imageInputId: 'categoryIcon',
    previewImageId: 'categoryPreviewImage',
    uploadContentId: 'categoryUploadContent',
  });
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
  setModalActive('formModal', true);
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
    setModalActive('formModal', true);
  }
}

// Закрити форму досягнення.
function closeFormModal() {
  setModalActive('formModal', false);
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

  setModalActive('confirmDeleteModal', true);
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
  setModalActive('categoryModal', true);
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
    setModalActive('categoryModal', true);
  }
}

// Закрити форму категорії.
function closeCategoryModal() {
  setModalActive('categoryModal', false);
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

  setModalActive('confirmDeleteModal', true);
}

// Закрити модальне вікно підтвердження видалення.
function closeConfirmDelete() {
  setModalActive('confirmDeleteModal', false);
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
        }, CATEGORY_EXPAND_SYNC_DELAY_MS);
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
function createActionButton({
  className,
  html,
  title,
  disabled = false,
  onClick,
}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.innerHTML = html;
  button.title = title;
  button.disabled = disabled;
  button.onclick = onClick;
  return button;
}

function createEditCornerButton({ title, ariaLabel, onClick }) {
  const editCorner = document.createElement('button');
  editCorner.className = 'edit-corner-btn';
  editCorner.type = 'button';
  editCorner.title = title;
  editCorner.setAttribute('aria-label', ariaLabel);
  editCorner.textContent = '✎';
  editCorner.onclick = onClick;
  return editCorner;
}

function createCategoryIconNode(category) {
  if (category.icon && category.icon.startsWith('data:')) {
    const img = document.createElement('img');
    img.src = category.icon;
    img.className = 'custom-image';
    img.style.cursor = 'zoom-in';
    img.onclick = (e) => {
      e.stopPropagation();
      openImageModal(category.icon);
    };
    return img;
  }

  const iconSpan = document.createElement('span');
  iconSpan.className = 'category-icon';
  iconSpan.textContent = category.icon || '📁';
  return iconSpan;
}

function createAchievementIconNode(achievement) {
  if (achievement.image && achievement.image.startsWith('data:')) {
    const img = document.createElement('img');
    img.src = achievement.image;
    img.className = 'custom-image achievement-icon';
    img.style.cursor = 'zoom-in';
    img.onclick = (e) => {
      e.stopPropagation();
      openImageModal(achievement.image);
    };
    return img;
  }

  const iconSpan = document.createElement('span');
  iconSpan.className = 'achievement-icon';
  iconSpan.textContent = achievement.icon || '🏆';
  return iconSpan;
}

function renderCategoryControls(categoryKey, catIndex, totalCategories) {
  const controls = document.createElement('div');
  controls.className = 'category-controls';

  controls.appendChild(
    createActionButton({
      className: 'action-btn sort-btn',
      html: '⬆️',
      title: 'Перемістити вгору',
      disabled: catIndex === 0,
      onClick: (e) => {
        e.stopPropagation();
        moveCategoryUp(categoryKey);
      },
    }),
  );

  controls.appendChild(
    createActionButton({
      className: 'action-btn sort-btn',
      html: '⬇️',
      title: 'Перемістити вниз',
      disabled: catIndex === totalCategories - 1,
      onClick: (e) => {
        e.stopPropagation();
        moveCategoryDown(categoryKey);
      },
    }),
  );

  controls.appendChild(
    createActionButton({
      className: 'category-action-btn',
      html: '✏️',
      title: 'Редагувати категорію',
      onClick: (e) => {
        e.stopPropagation();
        openEditCategoryModal(categoryKey);
      },
    }),
  );

  controls.appendChild(
    createActionButton({
      className: 'category-action-btn delete',
      html: '🗑️',
      title: 'Видалити категорію',
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteCategory(categoryKey);
        return false;
      },
    }),
  );

  return controls;
}

function renderAchievementControls(
  categoryKey,
  achievement,
  achIndex,
  totalAchievements,
) {
  const controls = document.createElement('div');
  controls.className = 'achievement-controls';

  const actionRow = document.createElement('div');
  actionRow.className = 'achievement-action-row';

  actionRow.appendChild(
    createActionButton({
      className: 'action-btn sort-btn',
      html: '⬆️',
      title: 'Перемістити вгору',
      disabled: achIndex === 0,
      onClick: (e) => {
        e.stopPropagation();
        moveAchievementUp(categoryKey, achievement.id);
      },
    }),
  );

  actionRow.appendChild(
    createActionButton({
      className: 'action-btn sort-btn',
      html: '⬇️',
      title: 'Перемістити вниз',
      disabled: achIndex === totalAchievements - 1,
      onClick: (e) => {
        e.stopPropagation();
        moveAchievementDown(categoryKey, achievement.id);
      },
    }),
  );

  actionRow.appendChild(
    createActionButton({
      className: 'action-btn edit-btn',
      html: '✏️',
      title: 'Редагувати',
      onClick: (e) => {
        e.stopPropagation();
        openEditModal(categoryKey, achievement.id);
      },
    }),
  );

  actionRow.appendChild(
    createActionButton({
      className: 'action-btn delete-btn',
      html: '🗑️',
      title: 'Видалити',
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteAchievement(categoryKey, achievement.id);
        return false;
      },
    }),
  );

  controls.appendChild(actionRow);
  return controls;
}

function renderAchievement(categoryKey, achievement, achIndex, totalAchievements) {
  const achievementDiv = document.createElement('div');
  achievementDiv.className = `achievement ${achievement.unlocked ? 'unlocked' : 'locked'}`;

  if (!achievement.unlocked) {
    achievementDiv.classList.add('focus-reveal');
  } else {
    achievementDiv.classList.add('revealed');
  }

  if (activeAchievementEditKey === `${categoryKey}:${achievement.id}`) {
    achievementDiv.classList.add('show-edit');
  }

  achievementDiv.appendChild(
    createEditCornerButton({
      title: 'Показати кнопки редагування досягнення',
      ariaLabel: 'Показати кнопки редагування досягнення',
      onClick: (e) => {
        e.stopPropagation();
        toggleAchievementEditControls(categoryKey, achievement.id);
      },
    }),
  );

  const main = document.createElement('div');
  main.className = 'achievement-main';
  main.onclick = () => toggleAchievement(categoryKey, achievement.id);
  main.appendChild(createAchievementIconNode(achievement));

  const content = document.createElement('div');
  content.className = 'achievement-content';

  const name = document.createElement('div');
  name.className = 'achievement-name';
  name.textContent = achievement.name;
  content.appendChild(name);

  if (achievement.description) {
    const description = document.createElement('div');
    description.className = 'achievement-description';
    description.textContent = achievement.description;
    content.appendChild(description);
  }

  main.appendChild(content);
  achievementDiv.appendChild(main);

  achievementDiv.appendChild(
    renderAchievementControls(
      categoryKey,
      achievement,
      achIndex,
      totalAchievements,
    ),
  );

  return achievementDiv;
}

function renderCategory(categoryKey, category, catIndex, totalCategories) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';
  categoryDiv.dataset.categoryKey = categoryKey;

  if (activeCategoryEditKey === categoryKey) {
    categoryDiv.classList.add('show-edit');
  }
  if (category.collapsed) {
    categoryDiv.classList.add('collapsed');
  }

  categoryDiv.appendChild(
    createEditCornerButton({
      title: 'Показати кнопки редагування категорії',
      ariaLabel: 'Показати кнопки редагування категорії',
      onClick: (e) => {
        e.stopPropagation();
        toggleCategoryEditControls(categoryKey);
      },
    }),
  );

  const header = document.createElement('div');
  header.className = 'category-header';

  const headerTop = document.createElement('div');
  headerTop.className = 'category-header-top';
  headerTop.onclick = () => toggleCategoryCollapse(categoryKey);

  const collapseBtn = createActionButton({
    className: 'collapse-toggle',
    html: '▼',
    title: category.collapsed ? 'Розгорнути' : 'Згорнути',
    onClick: (e) => {
      e.stopPropagation();
      toggleCategoryCollapse(categoryKey);
    },
  });
  headerTop.appendChild(collapseBtn);

  headerTop.appendChild(createCategoryIconNode(category));

  const title = document.createElement('span');
  title.className = 'category-title';
  title.textContent = category.title;
  headerTop.appendChild(title);

  header.appendChild(headerTop);
  header.appendChild(renderCategoryControls(categoryKey, catIndex, totalCategories));
  categoryDiv.appendChild(header);

  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'category-items';
  const totalAchievements = category.items.length;
  category.items.forEach((achievement, achIndex) => {
    itemsContainer.appendChild(
      renderAchievement(categoryKey, achievement, achIndex, totalAchievements),
    );
  });

  categoryDiv.appendChild(itemsContainer);
  return categoryDiv;
}

// Головний рендер категорій і карток досягнень.
function renderAchievements() {
  const container = $('categoriesContainer');
  container.innerHTML = '';

  const sortedKeys = getSortedCategoryKeys();
  const totalCategories = sortedKeys.length;

  sortedKeys.forEach((categoryKey, catIndex) => {
    const category = achievements[categoryKey];
    container.appendChild(
      renderCategory(categoryKey, category, catIndex, totalCategories),
    );
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
  setModalActive('achievementModal', false);
}

// Відкрити зображення у повний розмір.
function openImageModal(imageSrc) {
  $('imageModalImg').src = imageSrc;
  setModalActive('imageModal', true);
}

// Закрити модальне вікно зображення.
function closeImageModal() {
  setModalActive('imageModal', false);
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
      settings: settings,
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
    }, EXPORT_COPY_RESET_MS);
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
  setModalActive('confirmImportModal', true);
}

// Закрити модальне вікно підтвердження імпорту.
function closeConfirmImport() {
  setModalActive('confirmImportModal', false);
}

// Підтвердити імпорт і відкрити file picker.
function confirmImport() {
  closeConfirmImport();
  $('importFile').click();
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
      if (data.settings && typeof data.settings === 'object') {
        settings = Object.assign({}, settings, data.settings);
      }
      applySettings();

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
  setModalActive('confirmResetModal', true);
}

function toggleFabMenu() {
  const fabMenu = $('fabMenu');
  if (!fabMenu) {
    return;
  }
  fabMenu.classList.toggle('open');
}

function closeFabMenu() {
  const fabMenu = $('fabMenu');
  if (fabMenu) {
    fabMenu.classList.remove('open');
  }
}

function openAddFromFab() {
  closeFabMenu();
  openAddModal();
}

function openCategoryFromFab() {
  closeFabMenu();
  openCategoryModal();
}

function openQuickActionsModal() {
  if (!confirmFormModalSwitch('quickActionsModal')) {
    return;
  }

  setModalActive('quickActionsModal', true);
  closeFabMenu();
}

function closeQuickActionsModal() {
  setModalActive('quickActionsModal', false);
}

function runQuickAction(action) {
  closeQuickActionsModal();
  const actionMap = {
    export: exportData,
    import: importData,
    storage: checkStorageInfo,
    theme: openSettingsModal,
    reset: openConfirmReset,
  };
  const handler = actionMap[action];
  if (handler) {
    handler();
  }
}

// Закрити модальне вікно підтвердження скидання.
function closeConfirmReset() {
  setModalActive('confirmResetModal', false);
}

// Підтвердити скидання всіх даних.
async function confirmReset() {
  try {
    await deleteFromDB(STORAGE_KEY);
    // Прибираємо legacy-дані, якщо вони ще лишилися.
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  } catch (error) {
    console.error('Помилка скидання даних:', error);
    alert('Помилка скидання даних: ' + error.message);
  }
}
// #endregion

// #region Global Event Listeners
function initStaticEventHandlers() {
  const bindClick = (id, handler) => {
    const element = $(id);
    if (element) {
      element.addEventListener('click', handler);
    }
  };

  const bindSubmit = (id, handler) => {
    const form = $(id);
    if (form) {
      form.addEventListener('submit', handler);
    }
  };

  const bindChange = (id, handler) => {
    const input = $(id);
    if (input) {
      input.addEventListener('change', handler);
    }
  };

  const bindInput = (id, handler) => {
    const input = $(id);
    if (input) {
      input.addEventListener('input', handler);
    }
  };

  bindSubmit('achievementForm', saveAchievement);
  bindSubmit('categoryForm', saveCategory);
  bindSubmit('settingsForm', saveSettings);

  bindChange('importFile', handleImportFile);
  bindChange('imageUpload', handleImageUpload);
  bindChange('categoryImageUpload', handleCategoryImageUpload);

  bindClick('achievementUploadArea', () => $('imageUpload')?.click());
  bindClick('categoryUploadArea', () => $('categoryImageUpload')?.click());

  bindClick('closeAchievementModalBtn', closeModal);
  bindClick('cancelAchievementFormBtn', closeFormModal);
  bindClick('cancelCategoryFormBtn', closeCategoryModal);
  bindClick('cancelSettingsFormBtn', closeSettingsModal);
  bindClick('closeQuickActionsBtn', closeQuickActionsModal);
  bindClick('cancelImportBtn', closeConfirmImport);
  bindClick('confirmImportBtn', confirmImport);
  bindClick('closeStorageInfoBtn', closeStorageInfo);
  bindClick('cancelResetBtn', closeConfirmReset);
  bindClick('confirmResetBtn', confirmReset);
  bindClick('cancelDeleteBtn', closeConfirmDelete);
  bindClick('confirmDeleteBtn', confirmDelete);

  bindClick('fabMainBtn', toggleFabMenu);
  bindClick('fabAddBtn', openAddFromFab);
  bindClick('fabCategoryBtn', openCategoryFromFab);
  bindClick('fabQuickActionsBtn', openQuickActionsModal);

  document.querySelectorAll('.quick-action-btn[data-quick-action]').forEach((button) => {
    button.addEventListener('click', () => {
      runQuickAction(button.dataset.quickAction);
    });
  });

  [
    { id: 'formModal', close: closeFormModal, closeOnAnyClick: false },
    { id: 'categoryModal', close: closeCategoryModal, closeOnAnyClick: false },
    { id: 'achievementModal', close: closeModal, closeOnAnyClick: false },
    { id: 'confirmResetModal', close: closeConfirmReset, closeOnAnyClick: false },
    { id: 'confirmDeleteModal', close: closeConfirmDelete, closeOnAnyClick: false },
    { id: 'storageInfoModal', close: closeStorageInfo, closeOnAnyClick: false },
    { id: 'confirmImportModal', close: closeConfirmImport, closeOnAnyClick: false },
    { id: 'quickActionsModal', close: closeQuickActionsModal, closeOnAnyClick: false },
    { id: 'imageModal', close: closeImageModal, closeOnAnyClick: true },
  ].forEach((modalConfig) => {
    const modal = $(modalConfig.id);
    if (!modal) {
      return;
    }

    modal.addEventListener('click', function (e) {
      if (modalConfig.closeOnAnyClick || e.target === this) {
        modalConfig.close();
      }
    });
  });

  document.addEventListener('click', function (e) {
    const fabMenu = $('fabMenu');
    if (fabMenu && !fabMenu.contains(e.target)) {
      closeFabMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeFabMenu();
    }
  });

  bindInput('themeColor1', updateGradientPreview);
  bindInput('themeColor2', updateGradientPreview);
  bindInput('themeAngle', updateGradientPreview);
}
// #endregion

// #region Settings Modal
// Обробники модального вікна налаштувань теми.
function openSettingsModal() {
  if (!confirmFormModalSwitch('settingsModal')) {
    return;
  }

  $('themeColor1').value = settings.color1 || '#667eea';
  $('themeColor2').value = settings.color2 || '#764ba2';
  $('themeAngle').value = settings.angle || 135;
  updateGradientPreview();
  setModalActive('settingsModal', true);
}

function closeSettingsModal() {
  setModalActive('settingsModal', false);
}

function updateGradientPreview() {
  const c1 = $('themeColor1').value;
  const c2 = $('themeColor2').value;
  const angle = $('themeAngle').value || 135;
  const preview = $('gradientPreview');
  if (preview) {
    preview.style.background = `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%)`;
  }
}

function saveSettings(e) {
  e.preventDefault();
  const c1 = $('themeColor1').value;
  const c2 = $('themeColor2').value;
  const angle = parseInt($('themeAngle').value, 10) || 135;
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
async function initializeApp() {
  initStaticEventHandlers();
  await loadProgress();
  applySettings();
  renderAchievements();
}

initializeApp().catch((error) => {
  console.error('Помилка ініціалізації застосунку:', error);
  alert('Помилка запуску застосунку: ' + error.message);
});

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
