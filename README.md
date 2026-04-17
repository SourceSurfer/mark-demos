# mark-demos

Демо-сайты для клиентов. Каждая папка = отдельное демо, доступное по прямой ссылке.

## Одноразовая настройка

1. Settings → Pages → Source: **Deploy from a branch** → `main` / `root` → Save.
2. Подождать ~1 минуту, пока Pages включится.

Базовый URL: `https://sourcesurfer.github.io/mark-demos/`

## Публикация нового демо

```bash
git clone https://github.com/SourceSurfer/mark-demos.git
cd mark-demos

mkdir acme-shop
# положить index.html и статику в acme-shop/

git add acme-shop
git commit -m "add acme-shop"
git push
```

Через ~30 сек ссылка жива: `https://sourcesurfer.github.io/mark-demos/acme-shop/`

## Удаление

```bash
git rm -r acme-shop
git commit -m "remove acme-shop"
git push
```

## Правила

- Имя папки = часть URL → только латиница, цифры, дефисы.
- В каждой папке обязателен `index.html`.
- Все пути к CSS/JS/картинкам — **относительные** (`style.css`, а не `/style.css`).
