import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const IMG = {
  hero: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/f01edf94-9878-4d80-b451-c5e839f416dc.jpg',
  health: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/c399a1c6-032f-47a8-8dc1-643d8f6b2c9f.jpg',
  kids: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/1011fe6a-59e8-4074-acbc-cefae90851b9.jpg',
  family: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/74a2af96-6d18-475a-8dca-434eb156e07e.jpg',
  conf: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/316b1095-b41a-43bf-b48a-db775352dc60.jpg',
  stage: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/0b612750-168c-4d19-9b53-0085258a57b8.jpg',
  gym: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/c20836ff-d13b-4e35-a2a9-f944d6728b7d.jpg',
  bike: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/6c9ec710-c539-4d10-971e-0bae817527af.jpg',
  sport: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/845908ac-9fb7-4a4c-bbe7-65485ced668a.jpg',
  std: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/2cdb95d7-d300-4459-84d9-11c4e90175bb.jpg',
  lux: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/8a57646c-357a-4531-8115-22e11c814b19.jpg',
  fam_room: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/a21be502-d3ee-4dc3-9075-3b1c8f4aeb90.jpg',
  reception: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/890dd304-dcfd-4824-9026-ff00606aefb9.jpg',
  buffet: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/16d93de1-f8be-4ca3-8288-3583000ec7f1.jpg',
};

const navLinks = ['О городе-отеле', 'Кварталы', 'Номера', 'Услуги', 'Акции', 'Лечение', 'MICE', 'Доступная среда', 'Экскурсии', 'Афиша'];

const infrastructure = [
  { img: IMG.health, title: 'Центр Здоровья', text: 'Профессиональный медицинский центр' },
  { img: IMG.stage, title: 'Сцена', text: 'Для концертов и развлечений' },
  { img: IMG.conf, title: 'Конференц-залы', text: 'Современные залы для мероприятий' },
  { img: IMG.kids, title: 'Интерактивное пространство', text: 'Зона для творчества и отдыха' },
  { img: IMG.kids, title: 'Детский клуб', text: 'Развлечения и присмотр за детьми' },
  { img: IMG.family, title: 'Семейный клуб', text: 'Пространство для всей семьи' },
];

const nearby = [
  { icon: 'Fence', title: 'Детские площадки' },
  { icon: 'Stethoscope', title: 'Медпункт' },
  { icon: 'Car', title: 'Парковка' },
  { icon: 'WashingMachine', title: 'Прачечная' },
  { icon: 'Pill', title: 'Аптека' },
  { icon: 'ShoppingBasket', title: 'Минимаркет' },
];

const activities = [
  { img: IMG.gym, title: 'Тренажерный зал', text: 'Оснащён современным оборудованием' },
  { img: IMG.bike, title: 'Велопрокат', text: 'Прогулки вдоль набережной' },
  { img: IMG.sport, title: 'Открытая спортивная площадка', text: 'Игры на свежем воздухе' },
];

const rooms = [
  { img: IMG.std, title: 'Стандарт', text: 'Уютный номер с видом на море', tags: ['2 гостя', 'Вид на море', 'Wi-Fi'] },
  { img: IMG.lux, title: 'Люкс', text: 'Просторный номер с балконом', tags: ['3 гостя', 'Балкон', 'Кондиционер'] },
  { img: IMG.fam_room, title: 'Семейный', text: 'Идеален для отдыха с детьми', tags: ['4 гостя', 'Детская зона', 'Мини-бар'] },
];

const eateries = [
  {
    img: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/385cf037-a9cc-477a-ad8f-652f3bd5a26b.jpg',
    title: 'Времена года',
    text: 'Коммерческая столовая предлагает разнообразные блюда и напитки, включая домашнюю кухню.',
    tags: ['Столовая', 'Большой выбор'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/84e30b40-8f05-4ebf-a92a-12c9555aed0d.jpg',
    title: 'Трюффо',
    text: 'Уютный лобби-бар — отличное место для лёгкого перекуса, чашки ароматного кофе или освежающего лимонада.',
    tags: ['Кофе с собой', 'Вкусные завтраки'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/aff90d39-1117-4beb-87c6-b0f6f8cf1927.jpg',
    title: 'Мидийный сезон',
    text: 'Ароматные мидии, сытная паста и лёгкие салаты для тех, кто ценит средиземноморский вкус и морепродукты.',
    tags: ['Рекомендуем', 'Мидии'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/0ab031b6-ffe2-41cb-95b5-1ee5397bf445.jpg',
    title: 'Китано-Челентано',
    text: 'Итальянская пицца с хрустящей корочкой, японские суши, кавказский шашлык и душевные завтраки для тех, кто любит есть с удовольствием.',
    tags: ['Итальянская', 'Роллы'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/17852e80-0814-4a2a-a3fd-1583fcd4361c.jpg',
    title: 'Бульвар',
    text: 'Продуманное меню и внимание к деталям. Удобное расположение, уютная атмосфера и гостеприимное обслуживание.',
    tags: ['Столовая', 'Уютная обстановка'],
  },
  {
    img: 'https://cdn.poehali.dev/projects/825b887f-cbf8-4b82-ba4d-6fed939a1887/files/c05b0abe-6e2f-4e16-990b-3267846f7d75.jpg',
    title: 'Лакомка',
    text: 'Свежие фрукты, традиционные восточные десерты, натуральные сладости и яркие лакомства для детей и взрослых.',
    tags: ['Для сладкоежек', 'Свежие фрукты'],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-100 text-xs text-slate-500">
        <div className="container flex items-center justify-between py-2.5">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1"><Icon name="Globe" size={14} /> RU</span>
            <Icon name="Search" size={14} />
            <span className="font-semibold text-slate-700 text-sm">8 800 300 83 00</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <span className="flex items-center gap-1"><Icon name="Sun" size={14} className="text-amber-400" /> 19.2°C Сириус</span>
            <span className="flex items-center gap-1"><Icon name="Waves" size={14} className="text-ocean" /> 16.5°C Море</span>
            <div className="flex items-center gap-1.5 font-bold text-ocean-dark"><Icon name="Sailboat" size={16} /> БАРХАТНЫЕ СЕЗОНЫ</div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1"><Icon name="Globe" size={14} /> Официальный сайт</span>
            <span className="hidden md:flex items-center gap-1"><Icon name="Eye" size={14} /> Версия для слабовидящих</span>
            <span className="flex items-center gap-1 text-ocean-dark font-medium"><Icon name="User" size={14} /> Личный кабинет</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-ocean text-white sticky top-0 z-50 shadow-md">
        <div className="container">
          <ul className="flex items-center gap-1 overflow-x-auto py-3 text-[13px] font-medium uppercase tracking-wide">
            {navLinks.map((l) => (
              <li key={l}>
                <a href="#" className="px-3 py-2 rounded-md hover:bg-white/15 transition-colors whitespace-nowrap block">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Search bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-3 bg-ocean-light rounded-2xl p-3">
            <div className="flex-1 min-w-[180px] bg-white rounded-xl px-4 py-2.5">
              <div className="text-[10px] uppercase text-slate-400">Квартал</div>
              <div className="text-sm font-medium">Екатерининский квартал</div>
            </div>
            <div className="flex-1 min-w-[120px] bg-white rounded-xl px-4 py-2.5">
              <div className="text-[10px] uppercase text-slate-400">Заезд</div>
              <div className="text-sm font-medium">11.11.2025</div>
            </div>
            <div className="flex-1 min-w-[120px] bg-white rounded-xl px-4 py-2.5">
              <div className="text-[10px] uppercase text-slate-400">Выезд</div>
              <div className="text-sm font-medium">12.11.2025</div>
            </div>
            <div className="flex-1 min-w-[160px] bg-white rounded-xl px-4 py-2.5">
              <div className="text-[10px] uppercase text-slate-400">Гости</div>
              <div className="text-sm font-medium">2 взрослых, 0 детей</div>
            </div>
            <Button variant="outline" className="rounded-xl border-ocean text-ocean-dark bg-white hover:bg-ocean-light">Промокод</Button>
            <Button className="rounded-xl bg-ocean hover:bg-ocean-dark text-white px-6">Найти номер</Button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="relative h-[420px] overflow-hidden">
        <img src={IMG.hero} alt="Екатерининский квартал" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="container relative h-full flex flex-col justify-center">
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-6xl tracking-tight drop-shadow-lg animate-fade-in">
            ЕКАТЕРИНИНСКИЙ КВАРТАЛ
          </h1>
          <p className="text-white/90 text-lg mt-3 mb-5">Город-отель «Бархатные сезоны»</p>
          <span className="inline-flex items-center gap-2 bg-ocean text-white px-5 py-2.5 rounded-full text-sm font-medium w-fit shadow-lg">
            <Icon name="Waves" size={16} /> Первая береговая линия
          </span>
        </div>
        <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow">
          <Icon name="Award" size={18} className="text-amber-500" />
          <div className="text-xs">
            <div className="font-semibold text-slate-800">Хорошее место</div>
            <div className="text-slate-500">Выбор пользователей Яндекса</div>
          </div>
          <span className="font-bold text-amber-500">4.6</span>
        </div>
      </header>

      {/* 1. Уникальная инфраструктура квартала */}
      <Section title="Уникальная инфраструктура квартала" subtitle="Всё необходимое для комфортного отдыха">
        <div className="grid md:grid-cols-3 gap-6">
          {infrastructure.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      {/* 2. Номера */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <SectionHead title="Номера" subtitle="Комфорт для каждого гостя" />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {rooms.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-52 overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-lg text-slate-800">{r.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{r.text}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {r.tags.map((t) => (
                      <span key={t} className="text-xs bg-ocean-light text-ocean-dark px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <Button className="mt-5 w-full rounded-xl bg-ocean hover:bg-ocean-dark text-white">
                    <Icon name="CalendarCheck" size={18} className="mr-2" /> Забронировать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Где поесть */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHead title="Где поесть" subtitle="Разнообразие кухни и форматов — от классики до стритфуда." />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {eateries.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
                <div className="h-52 overflow-hidden relative">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 flex gap-2 flex-wrap">
                    {e.tags.map((t) => (
                      <span key={t} className="text-xs bg-white/90 backdrop-blur text-slate-700 px-2.5 py-1 rounded-full font-medium shadow-sm">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-lg text-slate-800">{e.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 flex-1">{e.text}</p>
                  <Button className="mt-5 w-full rounded-xl bg-ocean hover:bg-ocean-dark text-white">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ресепшен и шведская линия */}
      <section className="py-16 bg-ocean-light">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-800 mb-8">Ресепшен и шведская линия</h2>
            <div className="space-y-6">
              <InfoRow icon="MapPin" title="Адрес ресепшен" text="б-р Надежд, 42 (3 корпус)" />
              <InfoRow icon="UtensilsCrossed" title="Столовая «Времена года»" text="Шведская линия с разнообразным меню" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.reception} alt="Ресепшен" className="rounded-2xl h-64 w-full object-cover shadow-md" />
            <img src={IMG.buffet} alt="Шведская линия" className="rounded-2xl h-64 w-full object-cover shadow-md" />
          </div>
        </div>
      </section>

      {/* 4. Активный отдых */}
      <Section title="Активный отдых" subtitle="Спорт и движение на свежем воздухе">
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((c) => <FeatureCard key={c.title} {...c} />)}
        </div>
      </Section>

      {/* 5. Всё необходимое — рядом */}
      <section className="py-16 bg-ocean-light">
        <div className="container">
          <SectionHead title="Всё необходимое — рядом" subtitle="Сервисы в шаговой доступности" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {nearby.map((n) => (
              <a key={n.title} href="#" className="group flex flex-col items-center gap-3 bg-white rounded-2xl py-8 px-4 shadow-sm hover-scale">
                <span className="w-14 h-14 rounded-full bg-ocean-light flex items-center justify-center text-ocean-dark group-hover:bg-ocean group-hover:text-white transition-colors">
                  <Icon name={n.icon} size={26} />
                </span>
                <span className="font-medium text-slate-700 text-center group-hover:text-ocean-dark transition-colors">{n.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Мы на карте */}
      <Section title="Мы на Карте" subtitle="Первая береговая линия, Сириус">
        <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
          <iframe
            title="Карта"
            src="https://yandex.ru/map-widget/v1/?ll=39.952%2C43.398&z=14"
            className="w-full h-[460px]"
            loading="lazy"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-ocean-dark text-white/80 py-12">
        <div className="container">
          <div className="flex items-center gap-2 font-heading font-bold text-white text-lg mb-4">
            <Icon name="Sailboat" size={22} /> БАРХАТНЫЕ СЕЗОНЫ
          </div>
          <p className="text-sm max-w-2xl">© 2025. Город-отель «Бархатные сезоны». Официальный сайт. Вся содержащаяся на сайте информация носит ознакомительный характер и не является публичной офертой.</p>
        </div>
      </footer>
    </div>
  );
};

const Section = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <section className="py-16">
    <div className="container">
      <SectionHead title={title} subtitle={subtitle} />
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const SectionHead = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center">
    <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-800">{title}</h2>
    <p className="text-slate-400 mt-2">{subtitle}</p>
  </div>
);

const FeatureCard = ({ img, title, text }: { img: string; title: string; text: string }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
    <div className="h-48 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-5">
      <h3 className="font-heading font-bold text-lg text-slate-800">{title}</h3>
      <p className="text-slate-500 text-sm mt-1">{text}</p>
    </div>
  </div>
);

const InfoRow = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div className="flex items-start gap-4">
    <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-ocean-dark shadow-sm shrink-0">
      <Icon name={icon} size={20} />
    </span>
    <div>
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="text-slate-500 text-sm">{text}</div>
    </div>
  </div>
);

export default Index;