import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertIBlockSectionTable1583035760066 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    INSERT INTO b_iblock_section (ID, TIMESTAMP_X, MODIFIED_BY, DATE_CREATE, CREATED_BY, IBLOCK_ID, IBLOCK_SECTION_ID, ACTIVE, GLOBAL_ACTIVE, SORT, NAME, PICTURE, LEFT_MARGIN, RIGHT_MARGIN, DEPTH_LEVEL, DESCRIPTION, DESCRIPTION_TYPE, SEARCHABLE_CONTENT, CODE, XML_ID, TMP_ID, DETAIL_PICTURE, SOCNET_GROUP_ID) VALUES
    (1, '2011-07-30 10:24:04', 1, '2011-07-30 14:24:04', 1, 2, NULL, 'Y', 'Y', 500, 'Помощь покупателю', NULL, 1, 2, 1, NULL, 'text', 'ПОМОЩЬ ПОКУПАТЕЛЮ\r\n', NULL, '12', NULL, NULL, NULL),
    (63, '2011-12-13 10:29:43', 1, '2011-12-13 13:29:43', 1, 4, NULL, 'Y', 'Y', 590, 'MIRRA DENT ', 162, 103, 108, 1, 'Полноценный уход за полостью рта необходим для здоровья, красоты и успеха. Полноценные зубы и нормальная микрофлора полости рта в решающей мере обеспечивают здоровье всего желудочно-кишечного тракта, а красивые и здоровые зубы – необходимый компонент внешней красоты и успешности.', 'text', 'MIRRA DENT \r\nПОЛНОЦЕННЫЙ УХОД ЗА ПОЛОСТЬЮ РТА НЕОБХОДИМ ДЛЯ ЗДОРОВЬЯ, КРАСОТЫ И УСПЕХА. ПОЛНОЦЕННЫЕ ЗУБЫ И НОРМАЛЬНАЯ МИКРОФЛОРА ПОЛОСТИ РТА В РЕШАЮЩЕЙ МЕРЕ ОБЕСПЕЧИВАЮТ ЗДОРОВЬЕ ВСЕГО ЖЕЛУДОЧНО-КИШЕЧНОГО ТРАКТА, А КРАСИВЫЕ И ЗДОРОВЫЕ ЗУБЫ – НЕОБХОДИМЫЙ КОМПОНЕНТ ВНЕШНЕЙ КРАСОТЫ И УСПЕШНОСТИ.', 'mirra_dent', NULL, NULL, NULL, NULL),
    (59, '2011-12-13 10:26:09', 1, '2011-12-13 13:26:09', 1, 4, 58, 'Y', 'Y', 500, 'Моделирование', NULL, 96, 97, 2, '', 'text', 'МОДЕЛИРОВАНИЕ\r\n', 'modelling', NULL, NULL, NULL, NULL),
    (60, '2011-12-13 10:26:42', 1, '2011-12-13 13:26:42', 1, 4, 58, 'Y', 'Y', 510, 'Профилактика', NULL, 98, 99, 2, '', 'text', 'ПРОФИЛАКТИКА\r\n', 'prophylactic', NULL, NULL, NULL, NULL),
    (61, '2011-12-13 10:27:07', 1, '2011-12-13 13:27:07', 1, 4, 58, 'Y', 'Y', 530, 'Гигиена ', NULL, 100, 101, 2, '', 'text', 'ГИГИЕНА \r\n', 'hygiene', NULL, NULL, NULL, NULL),
    (99, '2019-03-01 06:40:15', 1844, '2019-03-01 09:40:15', 1844, 4, NULL, 'Y', 'Y', 500, 'Линия COLLAGEN premium', NULL, 13, 14, 1, '', 'text', 'ЛИНИЯ COLLAGEN PREMIUM\r\n', 'liniya_collagen_premium', NULL, NULL, NULL, NULL),
    (58, '2011-12-13 10:25:28', 1, '2011-12-13 13:25:28', 1, 4, NULL, 'Y', 'Y', 570, 'MIRRA HAIR ', 161, 95, 102, 1, 'Средства этой линии разработаны для решения основных задач ухода за волосами: моделирование прически с увеличением объема и длительной фиксацией волос, профилактика заболеваний кожи головы, уход за волосами с целью улучшения структуры и усиления роста волос.', 'text', 'MIRRA HAIR \r\nСРЕДСТВА ЭТОЙ ЛИНИИ РАЗРАБОТАНЫ ДЛЯ РЕШЕНИЯ ОСНОВНЫХ ЗАДАЧ УХОДА ЗА ВОЛОСАМИ: МОДЕЛИРОВАНИЕ ПРИЧЕСКИ С УВЕЛИЧЕНИЕМ ОБЪЕМА И ДЛИТЕЛЬНОЙ ФИКСАЦИЕЙ ВОЛОС, ПРОФИЛАКТИКА ЗАБОЛЕВАНИЙ КОЖИ ГОЛОВЫ, УХОД ЗА ВОЛОСАМИ С ЦЕЛЬЮ УЛУЧШЕНИЯ СТРУКТУРЫ И УСИЛЕНИЯ РОСТА ВОЛОС.', 'mirra_hair', NULL, NULL, NULL, NULL),
    (55, '2011-12-17 18:30:24', 1, '2011-12-13 13:21:20', 1, 4, 37, 'Y', 'Y', 550, 'Омоложение', NULL, 76, 77, 2, '', 'text', 'ОМОЛОЖЕНИЕ\r\n', 'rejuvenation', NULL, NULL, NULL, NULL),
    (56, '2011-12-17 18:30:24', 1, '2011-12-13 13:22:11', 1, 4, 37, 'Y', 'Y', 560, 'Анти-пигментация ', NULL, 78, 79, 2, '', 'text', 'АНТИ-ПИГМЕНТАЦИЯ \r\n', 'anti_pigmentation', NULL, NULL, NULL, NULL),
    (57, '2011-12-17 18:30:24', 1, '2011-12-13 13:23:44', 1, 4, 37, 'Y', 'Y', 570, 'Массажные средства ', NULL, 80, 81, 2, '', 'text', 'МАССАЖНЫЕ СРЕДСТВА \r\n', 'for_massage', NULL, NULL, NULL, NULL),
    (54, '2011-12-17 18:30:24', 1, '2011-12-13 13:20:49', 1, 4, 37, 'Y', 'Y', 540, 'Антицеллюлит', NULL, 74, 75, 2, '', 'text', 'АНТИЦЕЛЛЮЛИТ\r\n', 'anti_cellulite', NULL, NULL, NULL, NULL),
    (52, '2011-12-17 18:30:24', 1, '2011-12-13 13:19:21', 1, 4, 37, 'Y', 'Y', 520, 'Питание', NULL, 70, 71, 2, '', 'text', 'ПИТАНИЕ\r\n', 'nourishment', NULL, NULL, NULL, NULL),
    (53, '2011-12-17 18:30:24', 1, '2011-12-13 13:19:55', 1, 4, 37, 'Y', 'Y', 530, 'Анти-акне', NULL, 72, 73, 2, '', 'text', 'АНТИ-АКНЕ\r\n', 'anti_acne', NULL, NULL, NULL, NULL),
    (50, '2011-12-17 18:30:24', 1, '2011-12-13 13:16:31', 1, 4, 37, 'Y', 'Y', 500, 'Глубокое очищение ', NULL, 64, 65, 2, '', 'text', 'ГЛУБОКОЕ ОЧИЩЕНИЕ \r\n', 'deep_cleaninig', NULL, NULL, NULL, NULL),
    (51, '2011-12-17 18:30:24', 1, '2011-12-13 13:18:29', 1, 4, 37, 'Y', 'Y', 510, 'Увлажнение', NULL, 68, 69, 2, '', 'text', 'УВЛАЖНЕНИЕ\r\n', 'intensive_moisturizing', NULL, NULL, NULL, NULL),
    (49, '2011-12-17 18:30:24', 1, '2011-12-13 13:15:09', 1, 4, 36, 'Y', 'Y', 500, 'Для душа и ванн', NULL, 58, 61, 2, '', 'text', 'ДЛЯ ДУША И ВАНН\r\n', 'shower_bath_use', NULL, NULL, NULL, NULL),
    (48, '2011-12-17 18:30:24', 1, '2011-12-13 13:12:57', 1, 4, 32, 'Y', 'Y', 510, 'Уход за руками ', NULL, 54, 55, 2, '', 'text', 'УХОД ЗА РУКАМИ \r\n', 'hands_care', NULL, NULL, NULL, NULL),
    (46, '2011-12-17 18:30:24', 1, '2011-12-13 13:10:02', 1, 4, 39, 'Y', 'Y', 500, 'Альгинатные маски', NULL, 92, 93, 2, '', 'text', 'АЛЬГИНАТНЫЕ МАСКИ\r\n', 'alginatnie_maski', NULL, NULL, NULL, NULL),
    (47, '2011-12-17 18:30:24', 1, '2011-12-13 13:12:26', 1, 4, 32, 'Y', 'Y', 500, 'Уход за кожей тела ', NULL, 52, 53, 2, '', 'text', 'УХОД ЗА КОЖЕЙ ТЕЛА \r\n', 'body_skin_care', NULL, NULL, NULL, NULL),
    (29, '2011-12-10 13:47:54', 1, '2011-11-14 19:06:09', 1, 4, NULL, 'Y', 'Y', 510, 'MIRRA DAILY', 146, 33, 50, 1, 'Кожа – естественный защитный барьер организма. Однако, неблагоприятные условия окружающей среды, неправильное питание и стрессы оказывают на нее негативное воздействие. И в первую очередь страдает кожа лица. Именно поэтому ей необходим ежедневный комплексный уход, который включает такие обязательные этапы как очищение, тонизирование, увлажнение и питание.', 'text', 'MIRRA DAILY\r\nКОЖА – ЕСТЕСТВЕННЫЙ ЗАЩИТНЫЙ БАРЬЕР ОРГАНИЗМА. ОДНАКО, НЕБЛАГОПРИЯТНЫЕ УСЛОВИЯ ОКРУЖАЮЩЕЙ СРЕДЫ, НЕПРАВИЛЬНОЕ ПИТАНИЕ И СТРЕССЫ ОКАЗЫВАЮТ НА НЕЕ НЕГАТИВНОЕ ВОЗДЕЙСТВИЕ. И В ПЕРВУЮ ОЧЕРЕДЬ СТРАДАЕТ КОЖА ЛИЦА. ИМЕННО ПОЭТОМУ ЕЙ НЕОБХОДИМ ЕЖЕДНЕВНЫЙ КОМПЛЕКСНЫЙ УХОД, КОТОРЫЙ ВКЛЮЧАЕТ ТАКИЕ ОБЯЗАТЕЛЬНЫЕ ЭТАПЫ КАК ОЧИЩЕНИЕ, ТОНИЗИРОВАНИЕ, УВЛАЖНЕНИЕ И ПИТАНИЕ.', 'mirra_daily', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (30, '2011-12-10 13:47:54', 1, '2011-11-14 19:08:06', 1, 4, 29, 'Y', 'Y', 500, 'Очищение', NULL, 34, 35, 2, '', 'text', 'ОЧИЩЕНИЕ\r\n', 'purification', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (31, '2011-12-10 13:47:54', 1, '2011-11-14 19:55:00', 1, 4, 29, 'Y', 'Y', 510, 'Тонизирующие средства', NULL, 38, 39, 2, '', 'text', 'ТОНИЗИРУЮЩИЕ СРЕДСТВА\r\n', 'tonics', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (32, '2011-12-17 18:30:24', 1, '2011-11-14 20:10:51', 1, 4, NULL, 'Y', 'Y', 520, 'MIRRA BODY', 150, 51, 56, 1, 'Косметика для ухода за телом представляет собой большую и разнообразную по назначению группу средств, в которую входят продукты как для ухода за кожей отдельных частой тела (бюст, руки, ноги, ногти), так и средства, выполняющие определенные функции (питание, тонизирование, увлажнение и пр.).', 'text', 'MIRRA BODY\r\nКОСМЕТИКА ДЛЯ УХОДА ЗА ТЕЛОМ ПРЕДСТАВЛЯЕТ СОБОЙ БОЛЬШУЮ И РАЗНООБРАЗНУЮ ПО НАЗНАЧЕНИЮ ГРУППУ СРЕДСТВ, В КОТОРУЮ ВХОДЯТ ПРОДУКТЫ КАК ДЛЯ УХОДА ЗА КОЖЕЙ ОТДЕЛЬНЫХ ЧАСТОЙ ТЕЛА (БЮСТ, РУКИ, НОГИ, НОГТИ), ТАК И СРЕДСТВА, ВЫПОЛНЯЮЩИЕ ОПРЕДЕЛЕННЫЕ ФУНКЦИИ (ПИТАНИЕ, ТОНИЗИРОВАНИЕ, УВЛАЖНЕНИЕ И ПР.).', 'mirra_body', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (34, '2011-12-17 18:30:24', 1, '2011-12-10 13:40:17', 1, 4, NULL, 'Y', 'Y', 501, 'ЗОЛОТАЯ ЛИНИЯ', 152, 29, 30, 1, 'Средства GOLD LINE (Золотой линии) способствуют активизации всех естественных механизмов, которые препятствуют преждевременному старению кожи. В их числе - интенсивное увлажнение и восстановление водно-липидного баланса, укрепление капилляров и эффективная антиоксидантная защита, общая активизация процессов регенерации. Золотая линия обеспечивает весь цикл ухода за зрелой кожей: очищение, тонизирование, увлажнение, интенсивное питание и омоложение, а также бережный уход за чувствительной кожей век.', 'text', 'ЗОЛОТАЯ ЛИНИЯ\r\nСРЕДСТВА GOLD LINE (ЗОЛОТОЙ ЛИНИИ) СПОСОБСТВУЮТ АКТИВИЗАЦИИ ВСЕХ ЕСТЕСТВЕННЫХ МЕХАНИЗМОВ, КОТОРЫЕ ПРЕПЯТСТВУЮТ ПРЕЖДЕВРЕМЕННОМУ СТАРЕНИЮ КОЖИ. В ИХ ЧИСЛЕ - ИНТЕНСИВНОЕ УВЛАЖНЕНИЕ И ВОССТАНОВЛЕНИЕ ВОДНО-ЛИПИДНОГО БАЛАНСА, УКРЕПЛЕНИЕ КАПИЛЛЯРОВ И ЭФФЕКТИВНАЯ АНТИОКСИДАНТНАЯ ЗАЩИТА, ОБЩАЯ АКТИВИЗАЦИЯ ПРОЦЕССОВ РЕГЕНЕРАЦИИ. ЗОЛОТАЯ ЛИНИЯ ОБЕСПЕЧИВАЕТ ВЕСЬ ЦИКЛ УХОДА ЗА ЗРЕЛОЙ КОЖЕЙ: ОЧИЩЕНИЕ, ТОНИЗИРОВАНИЕ, УВЛАЖНЕНИЕ, ИНТЕНСИВНОЕ ПИТАНИЕ И ОМОЛОЖЕНИЕ, А ТАКЖЕ БЕРЕЖНЫЙ УХОД ЗА ЧУВСТВИТЕЛЬНОЙ КОЖЕЙ ВЕК.', 'gold_line', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (35, '2011-12-17 18:30:24', 1, '2011-12-10 13:44:00', 1, 4, NULL, 'Y', 'Y', 505, 'PIERRE CARDIN', 153, 31, 32, 1, 'Эта косметика – результат совместного проекта Компании MIRRA и Пьера Кардена. Мужская кожа, более плотная, чем женская, чаще подвергается травмирующим воздействиям и нуждается в специальном тщательном и заботливом уходе. Ведущие ингредиенты продуктов этой линии – особым образом обработанные икра и ДНК из молок лососевых и осетровых рыб. Благодаря великолепно подобранному составу, средства Elegance by Pierre Cardin отлично ухаживают за кожей, усиливают ее иммунитет, активизируют омолаживающие, регенерирующие и противовоспалительные процессы, делают кожу гладкой и эластичной.', 'text', 'PIERRE CARDIN\r\nЭТА КОСМЕТИКА – РЕЗУЛЬТАТ СОВМЕСТНОГО ПРОЕКТА КОМПАНИИ MIRRA И ПЬЕРА КАРДЕНА. МУЖСКАЯ КОЖА, БОЛЕЕ ПЛОТНАЯ, ЧЕМ ЖЕНСКАЯ, ЧАЩЕ ПОДВЕРГАЕТСЯ ТРАВМИРУЮЩИМ ВОЗДЕЙСТВИЯМ И НУЖДАЕТСЯ В СПЕЦИАЛЬНОМ ТЩАТЕЛЬНОМ И ЗАБОТЛИВОМ УХОДЕ. ВЕДУЩИЕ ИНГРЕДИЕНТЫ ПРОДУКТОВ ЭТОЙ ЛИНИИ – ОСОБЫМ ОБРАЗОМ ОБРАБОТАННЫЕ ИКРА И ДНК ИЗ МОЛОК ЛОСОСЕВЫХ И ОСЕТРОВЫХ РЫБ. БЛАГОДАРЯ ВЕЛИКОЛЕПНО ПОДОБРАННОМУ СОСТАВУ, СРЕДСТВА ELEGANCE BY PIERRE CARDIN ОТЛИЧНО УХАЖИВАЮТ ЗА КОЖЕЙ, УСИЛИВАЮТ ЕЕ ИММУНИТЕТ, АКТИВИЗИРУЮТ ОМОЛАЖИВАЮЩИЕ, РЕГЕНЕРИРУЮЩИЕ И ПРОТИВОВОСПАЛИТЕЛЬНЫЕ ПРОЦЕССЫ, ДЕЛАЮТ КОЖУ ГЛАДКОЙ И ЭЛАСТИЧНОЙ.', 'pierre_cardin', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (36, '2011-12-17 18:30:24', 1, '2011-12-10 13:53:01', 1, 4, NULL, 'Y', 'Y', 530, 'MIRRA SPA', 154, 57, 62, 1, 'Для тех, кто хочет сделать СПА ближе, проще и доступнее. Вы можете выбрать из четырех спа-комплексов: «Оздоровительный», «Релакс», «Дерматологический» и «Антицеллюлитный». Кроме того, в линейке MIRRA SPA Вы найдете восхитительные гели для душа – с афродизиаками для поднятия настроения, экстрактом зеленого чая для повышения тонуса кожи, фитоэкстрактами и гранулами для мягкого, деликатного отшелушивания. \r\n', 'text', 'MIRRA SPA\r\nДЛЯ ТЕХ, КТО ХОЧЕТ СДЕЛАТЬ СПА БЛИЖЕ, ПРОЩЕ И ДОСТУПНЕЕ. ВЫ МОЖЕТЕ ВЫБРАТЬ ИЗ ЧЕТЫРЕХ СПА-КОМПЛЕКСОВ: «ОЗДОРОВИТЕЛЬНЫЙ», «РЕЛАКС», «ДЕРМАТОЛОГИЧЕСКИЙ» И «АНТИЦЕЛЛЮЛИТНЫЙ». КРОМЕ ТОГО, В ЛИНЕЙКЕ MIRRA SPA ВЫ НАЙДЕТЕ ВОСХИТИТЕЛЬНЫЕ ГЕЛИ ДЛЯ ДУША – С АФРОДИЗИАКАМИ ДЛЯ ПОДНЯТИЯ НАСТРОЕНИЯ, ЭКСТРАКТОМ ЗЕЛЕНОГО ЧАЯ ДЛЯ ПОВЫШЕНИЯ ТОНУСА КОЖИ, ФИТОЭКСТРАКТАМИ И ГРАНУЛАМИ ДЛЯ МЯГКОГО, ДЕЛИКАТНОГО ОТШЕЛУШИВАНИЯ. \r\n', 'mirra_spa', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (37, '2011-12-17 18:30:24', 1, '2011-12-10 13:57:58', 1, 4, NULL, 'Y', 'Y', 540, 'MIRRA INTENSIVE', 155, 63, 82, 1, 'Одна из основных особенностей интенсивного ухода – применение косметических и оздоровительных средств для кожи лица и тела курсами или с определенной периодичностью. Использование таких средств обычно направлено на решение конкретной проблемы (пигментация, целлюлит, акне и др.). Средства интенсивного ухода обеспечивают глубокое очищение, эффективное питание и увлажнение кожи, разглаживание морщин, избавление от пигментных пятен, прыщей и растяжек, улучшение цвета лица. Важнейшая особенность средств этой группы – возможность их применения в домашних условиях (“салон на дому”). А самое главное – достижение отчетливого, видимого результата.', 'text', 'MIRRA INTENSIVE\r\nОДНА ИЗ ОСНОВНЫХ ОСОБЕННОСТЕЙ ИНТЕНСИВНОГО УХОДА – ПРИМЕНЕНИЕ КОСМЕТИЧЕСКИХ И ОЗДОРОВИТЕЛЬНЫХ СРЕДСТВ ДЛЯ КОЖИ ЛИЦА И ТЕЛА КУРСАМИ ИЛИ С ОПРЕДЕЛЕННОЙ ПЕРИОДИЧНОСТЬЮ. ИСПОЛЬЗОВАНИЕ ТАКИХ СРЕДСТВ ОБЫЧНО НАПРАВЛЕНО НА РЕШЕНИЕ КОНКРЕТНОЙ ПРОБЛЕМЫ (ПИГМЕНТАЦИЯ, ЦЕЛЛЮЛИТ, АКНЕ И ДР.). СРЕДСТВА ИНТЕНСИВНОГО УХОДА ОБЕСПЕЧИВАЮТ ГЛУБОКОЕ ОЧИЩЕНИЕ, ЭФФЕКТИВНОЕ ПИТАНИЕ И УВЛАЖНЕНИЕ КОЖИ, РАЗГЛАЖИВАНИЕ МОРЩИН, ИЗБАВЛЕНИЕ ОТ ПИГМЕНТНЫХ ПЯТЕН, ПРЫЩЕЙ И РАСТЯЖЕК, УЛУЧШЕНИЕ ЦВЕТА ЛИЦА. ВАЖНЕЙШАЯ ОСОБЕННОСТЬ СРЕДСТВ ЭТОЙ ГРУППЫ – ВОЗМОЖНОСТЬ ИХ ПРИМЕНЕНИЯ В ДОМАШНИХ УСЛОВИЯХ (“САЛОН НА ДОМУ”). А САМОЕ ГЛАВНОЕ – ДОСТИЖЕНИЕ ОТЧЕТЛИВОГО, ВИДИМОГО РЕЗУЛЬТАТА.', 'mirra_intensive', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (38, '2011-12-17 18:30:24', 1, '2011-12-10 14:00:23', 1, 4, NULL, 'Y', 'Y', 550, 'MIRRA PROPHYLACTIC', 156, 83, 90, 1, 'В эту линию включены две группы средств – бальзамы-целители и биологически активные добавки к пище. Это сделано не случайно, поскольку и те, и другие – средства выраженной оздоровительной направленности. И если бальзамы-целители непосредственно действуют на кожу, оказывая эффект еще и на внутренние органы, то биодобавки нормализуют деятельность многих систем организма – и тоже опосредованно действуют на кожу. Наиболее благоприятные эффекты можно наблюдать при сочетанном воздействии биодобавкок и бальзамов-целителей.', 'text', 'MIRRA PROPHYLACTIC\r\nВ ЭТУ ЛИНИЮ ВКЛЮЧЕНЫ ДВЕ ГРУППЫ СРЕДСТВ – БАЛЬЗАМЫ-ЦЕЛИТЕЛИ И БИОЛОГИЧЕСКИ АКТИВНЫЕ ДОБАВКИ К ПИЩЕ. ЭТО СДЕЛАНО НЕ СЛУЧАЙНО, ПОСКОЛЬКУ И ТЕ, И ДРУГИЕ – СРЕДСТВА ВЫРАЖЕННОЙ ОЗДОРОВИТЕЛЬНОЙ НАПРАВЛЕННОСТИ. И ЕСЛИ БАЛЬЗАМЫ-ЦЕЛИТЕЛИ НЕПОСРЕДСТВЕННО ДЕЙСТВУЮТ НА КОЖУ, ОКАЗЫВАЯ ЭФФЕКТ ЕЩЕ И НА ВНУТРЕННИЕ ОРГАНЫ, ТО БИОДОБАВКИ НОРМАЛИЗУЮТ ДЕЯТЕЛЬНОСТЬ МНОГИХ СИСТЕМ ОРГАНИЗМА – И ТОЖЕ ОПОСРЕДОВАННО ДЕЙСТВУЮТ НА КОЖУ. НАИБОЛЕЕ БЛАГОПРИЯТНЫЕ ЭФФЕКТЫ МОЖНО НАБЛЮДАТЬ ПРИ СОЧЕТАННОМ ВОЗДЕЙСТВИИ БИОДОБАВКОК И БАЛЬЗАМОВ-ЦЕЛИТЕЛЕЙ.', 'mirra_prophylactic', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (39, '2011-12-17 18:30:24', 1, '2011-12-10 14:03:32', 1, 4, NULL, 'Y', 'Y', 560, 'MIRRA FORMING', 157, 91, 94, 1, 'Пластифицирующие (моделирующие) маски – обязательный атрибут “салона на дому”, эффективное средство экспресс-ухода. Применение масок позволяет активизировать обменные процессы в коже, уменьшать проявления возрастных изменений.', 'text', 'MIRRA FORMING\r\nПЛАСТИФИЦИРУЮЩИЕ (МОДЕЛИРУЮЩИЕ) МАСКИ – ОБЯЗАТЕЛЬНЫЙ АТРИБУТ “САЛОНА НА ДОМУ”, ЭФФЕКТИВНОЕ СРЕДСТВО ЭКСПРЕСС-УХОДА. ПРИМЕНЕНИЕ МАСОК ПОЗВОЛЯЕТ АКТИВИЗИРОВАТЬ ОБМЕННЫЕ ПРОЦЕССЫ В КОЖЕ, УМЕНЬШАТЬ ПРОЯВЛЕНИЯ ВОЗРАСТНЫХ ИЗМЕНЕНИЙ.', 'mirra_forming', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (40, '2011-12-17 18:30:24', 1, '2011-12-10 14:10:31', 1, 4, 29, 'Y', 'Y', 520, 'Увлажнение', NULL, 40, 41, 2, '', 'text', 'УВЛАЖНЕНИЕ\r\n', 'moisturing', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (41, '2011-12-10 13:47:54', 1, '2011-12-10 14:11:01', 1, 4, 29, 'Y', 'Y', 540, 'Питание', NULL, 42, 43, 2, '', 'text', 'ПИТАНИЕ\r\n', 'nutrition', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (42, '2011-12-17 18:30:24', 1, '2011-12-10 14:11:46', 1, 4, 29, 'Y', 'Y', 550, 'Уход за кожей век', NULL, 44, 45, 2, '', 'text', 'УХОД ЗА КОЖЕЙ ВЕК\r\n', 'eyes_care', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (43, '2011-12-17 18:30:24', 1, '2011-12-10 14:12:08', 1, 4, 29, 'Y', 'Y', 560, 'Уход за губами', NULL, 46, 47, 2, '', 'text', 'УХОД ЗА ГУБАМИ\r\n', 'lips_care', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (44, '2011-12-17 18:30:24', 1, '2011-12-10 14:13:35', 1, 4, 29, 'Y', 'Y', 570, 'Уход за мужской кожей', NULL, 48, 49, 2, '', 'text', 'УХОД ЗА МУЖСКОЙ КОЖЕЙ\r\n', 'man_skin_care', NULL, 'ce0d82f86ced442074a1e58ff2073513', NULL, NULL),
    (64, '2011-12-13 10:30:41', 1, '2011-12-13 13:30:41', 1, 4, 63, 'Y', 'Y', 500, 'Профилактика ', NULL, 104, 105, 2, '', 'text', 'ПРОФИЛАКТИКА \r\n', 'prophylactic_dent', NULL, NULL, NULL, NULL),
    (65, '2011-12-13 10:31:12', 1, '2011-12-13 13:31:12', 1, 4, 63, 'Y', 'Y', 510, 'Гигиена ', NULL, 106, 107, 2, '', 'text', 'ГИГИЕНА \r\n', 'hygiene_dent', NULL, NULL, NULL, NULL),
    (66, '2011-12-17 18:30:24', 1, '2011-12-13 13:35:23', 1, 4, 38, 'Y', 'Y', 500, 'Бальзамы - целители ', NULL, 84, 85, 2, '', 'text', 'БАЛЬЗАМЫ - ЦЕЛИТЕЛИ \r\n', 'healing_balms', NULL, NULL, NULL, NULL),
    (67, '2011-12-17 18:30:24', 1, '2011-12-13 13:36:01', 1, 4, 38, 'Y', 'Y', 510, 'Биологически активные добавки к пище', NULL, 88, 89, 2, '', 'text', 'БИОЛОГИЧЕСКИ АКТИВНЫЕ ДОБАВКИ К ПИЩЕ\r\n', 'bad', NULL, NULL, NULL, NULL),
    (68, '2011-12-13 10:37:21', 1, '2011-12-13 13:37:21', 1, 4, NULL, 'Y', 'Y', 600, 'MIRRA BABY ', NULL, 109, 110, 1, 'Нежная кожа малышей нуждается в постоянном уходе. Созданные специально для детей средства MIRRA предупредят опрелости и раздражение, защитят кожу от шелушения и обветривания, помогут молочным и постоянным зубкам в профилактическом уходе.', 'text', 'MIRRA BABY \r\nНЕЖНАЯ КОЖА МАЛЫШЕЙ НУЖДАЕТСЯ В ПОСТОЯННОМ УХОДЕ. СОЗДАННЫЕ СПЕЦИАЛЬНО ДЛЯ ДЕТЕЙ СРЕДСТВА MIRRA ПРЕДУПРЕДЯТ ОПРЕЛОСТИ И РАЗДРАЖЕНИЕ, ЗАЩИТЯТ КОЖУ ОТ ШЕЛУШЕНИЯ И ОБВЕТРИВАНИЯ, ПОМОГУТ МОЛОЧНЫМ И ПОСТОЯННЫМ ЗУБКАМ В ПРОФИЛАКТИЧЕСКОМ УХОДЕ.', 'mirra_baby', NULL, NULL, NULL, NULL),
    (69, '2011-12-13 10:38:55', 1, '2011-12-13 13:38:55', 1, 4, NULL, 'Y', 'Y', 610, 'MIRRA INTIM', NULL, 111, 116, 1, 'Ассортимент интимных средств на косметическом рынке быстро расширяется, а спрос на эти средства бурно растет. Это стимулирующие и защитные средства, пролонгаторы, смазки (лубриканты), средства ухода за интимными зонами, средства для эротического массажа и т.д. Местное действие таких средств (увлажнение, питание) представляется очень важным, но не меньшее внимание привлекают общие эффекты (влияние на эмоциональную и чувственную составляющие) – возбуждение внимания партнера, стимулирование сексуального желания, усиление влечения, раскрепощение и пр. В нашей стране MIRRA одной из первых начала выпуск интимной косметики, и среди первых же средств были созданы средства как общего, так и местного действия.', 'text', 'MIRRA INTIM\r\nАССОРТИМЕНТ ИНТИМНЫХ СРЕДСТВ НА КОСМЕТИЧЕСКОМ РЫНКЕ БЫСТРО РАСШИРЯЕТСЯ, А СПРОС НА ЭТИ СРЕДСТВА БУРНО РАСТЕТ. ЭТО СТИМУЛИРУЮЩИЕ И ЗАЩИТНЫЕ СРЕДСТВА, ПРОЛОНГАТОРЫ, СМАЗКИ (ЛУБРИКАНТЫ), СРЕДСТВА УХОДА ЗА ИНТИМНЫМИ ЗОНАМИ, СРЕДСТВА ДЛЯ ЭРОТИЧЕСКОГО МАССАЖА И Т.Д. МЕСТНОЕ ДЕЙСТВИЕ ТАКИХ СРЕДСТВ (УВЛАЖНЕНИЕ, ПИТАНИЕ) ПРЕДСТАВЛЯЕТСЯ ОЧЕНЬ ВАЖНЫМ, НО НЕ МЕНЬШЕЕ ВНИМАНИЕ ПРИВЛЕКАЮТ ОБЩИЕ ЭФФЕКТЫ (ВЛИЯНИЕ НА ЭМОЦИОНАЛЬНУЮ И ЧУВСТВЕННУЮ СОСТАВЛЯЮЩИЕ) – ВОЗБУЖДЕНИЕ ВНИМАНИЯ ПАРТНЕРА, СТИМУЛИРОВАНИЕ СЕКСУАЛЬНОГО ЖЕЛАНИЯ, УСИЛЕНИЕ ВЛЕЧЕНИЯ, РАСКРЕПОЩЕНИЕ И ПР. В НАШЕЙ СТРАНЕ MIRRA ОДНОЙ ИЗ ПЕРВЫХ НАЧАЛА ВЫПУСК ИНТИМНОЙ КОСМЕТИКИ, И СРЕДИ ПЕРВЫХ ЖЕ СРЕДСТВ БЫЛИ СОЗДАНЫ СРЕДСТВА КАК ОБЩЕГО, ТАК И МЕСТНОГО ДЕЙСТВИЯ.', 'mirra_intim', NULL, NULL, NULL, NULL),
    (70, '2011-12-13 10:39:32', 1, '2011-12-13 13:39:32', 1, 4, 69, 'Y', 'Y', 500, 'Гармония чувств ', NULL, 112, 113, 2, '', 'text', 'ГАРМОНИЯ ЧУВСТВ \r\n', 'sense_harmony', NULL, NULL, NULL, NULL),
    (71, '2011-12-13 10:40:15', 1, '2011-12-13 13:40:15', 1, 4, 69, 'Y', 'Y', 510, 'Гигиена ', NULL, 114, 115, 2, '', 'text', 'ГИГИЕНА \r\n', 'hygiene_intim', NULL, NULL, NULL, NULL),
    (72, '2011-12-13 10:41:07', 1, '2011-12-13 13:41:07', 1, 4, NULL, 'Y', 'Y', 620, 'MIRRA PROTECT ', 163, 117, 124, 1, 'Косметика, защищающая кожу от вредных воздействий окружающей среды, представляет собой один из важнейших сегментов косметической продукции. Именно солнце, ветер и мороз, выхлопные газы автомобилей и вредная городская пыль больше всего старят кожу – заставляют терять эластичность, сушат и покрывают морщинами. Косметические средства MIRRA обеспечивают защиту от солнца и от мороза.', 'text', 'MIRRA PROTECT \r\nКОСМЕТИКА, ЗАЩИЩАЮЩАЯ КОЖУ ОТ ВРЕДНЫХ ВОЗДЕЙСТВИЙ ОКРУЖАЮЩЕЙ СРЕДЫ, ПРЕДСТАВЛЯЕТ СОБОЙ ОДИН ИЗ ВАЖНЕЙШИХ СЕГМЕНТОВ КОСМЕТИЧЕСКОЙ ПРОДУКЦИИ. ИМЕННО СОЛНЦЕ, ВЕТЕР И МОРОЗ, ВЫХЛОПНЫЕ ГАЗЫ АВТОМОБИЛЕЙ И ВРЕДНАЯ ГОРОДСКАЯ ПЫЛЬ БОЛЬШЕ ВСЕГО СТАРЯТ КОЖУ – ЗАСТАВЛЯЮТ ТЕРЯТЬ ЭЛАСТИЧНОСТЬ, СУШАТ И ПОКРЫВАЮТ МОРЩИНАМИ. КОСМЕТИЧЕСКИЕ СРЕДСТВА MIRRA ОБЕСПЕЧИВАЮТ ЗАЩИТУ ОТ СОЛНЦА И ОТ МОРОЗА.', 'mirra_protect', NULL, NULL, NULL, NULL),
    (73, '2011-12-13 10:42:19', 1, '2011-12-13 13:42:19', 1, 4, 72, 'Y', 'Y', 500, 'Защита от солнца ', NULL, 118, 119, 2, '', 'text', 'ЗАЩИТА ОТ СОЛНЦА \r\n', 'sun_protect', NULL, NULL, NULL, NULL),
    (74, '2011-12-13 10:42:45', 1, '2011-12-13 13:42:45', 1, 4, 72, 'Y', 'Y', 510, 'Защита от холода ', NULL, 120, 121, 2, '', 'text', 'ЗАЩИТА ОТ ХОЛОДА \r\n', 'cold_protect', NULL, NULL, NULL, NULL),
    (75, '2011-12-13 10:43:12', 1, '2011-12-13 13:43:12', 1, 4, 72, 'Y', 'Y', 520, 'Экозащита ', NULL, 122, 123, 2, '', 'text', 'ЭКОЗАЩИТА \r\n', 'eco_protect', NULL, NULL, NULL, NULL),
    (76, '2011-12-23 15:02:59', 1, '2011-12-23 18:55:01', 1, 4, NULL, 'Y', 'Y', 630, 'MIRRA COLOUR', 493, 125, 136, 1, 'С недавних пор MIRRA – это не только разнообразие косметических средств по уходу за кожей, но и линия декоративной косметики. Воплощая последние тенденции в области макияжа, и опираясь на собственный богатый опыт, MIRRA представила декоративную косметику, которая эффектно подчеркнет вашу естественную красоту! Над созданием этой линии работали лучшие европейские и российские производители.', 'text', 'MIRRA COLOUR\r\nС НЕДАВНИХ ПОР MIRRA – ЭТО НЕ ТОЛЬКО РАЗНООБРАЗИЕ КОСМЕТИЧЕСКИХ СРЕДСТВ ПО УХОДУ ЗА КОЖЕЙ, НО И ЛИНИЯ ДЕКОРАТИВНОЙ КОСМЕТИКИ. ВОПЛОЩАЯ ПОСЛЕДНИЕ ТЕНДЕНЦИИ В ОБЛАСТИ МАКИЯЖА, И ОПИРАЯСЬ НА СОБСТВЕННЫЙ БОГАТЫЙ ОПЫТ, MIRRA ПРЕДСТАВИЛА ДЕКОРАТИВНУЮ КОСМЕТИКУ, КОТОРАЯ ЭФФЕКТНО ПОДЧЕРКНЕТ ВАШУ ЕСТЕСТВЕННУЮ КРАСОТУ! НАД СОЗДАНИЕМ ЭТОЙ ЛИНИИ РАБОТАЛИ ЛУЧШИЕ ЕВРОПЕЙСКИЕ И РОССИЙСКИЕ ПРОИЗВОДИТЕЛИ.', 'mirra-colour', NULL, NULL, NULL, NULL),
    (77, '2011-12-23 14:55:39', 1, '2011-12-23 18:55:39', 1, 4, 76, 'Y', 'Y', 500, 'Тон', NULL, 126, 127, 2, '', 'text', 'ТОН\r\n', 'tone', NULL, NULL, NULL, NULL),
    (78, '2011-12-23 14:56:10', 1, '2011-12-23 18:56:10', 1, 4, 76, 'Y', 'Y', 510, 'Румяна', NULL, 128, 129, 2, '', 'text', 'РУМЯНА\r\n', 'rumyana', NULL, NULL, NULL, NULL),
    (79, '2011-12-23 14:56:33', 1, '2011-12-23 18:56:33', 1, 4, 76, 'Y', 'Y', 530, 'Губы', NULL, 130, 131, 2, '', 'text', 'ГУБЫ\r\n', 'lips', NULL, NULL, NULL, NULL),
    (80, '2011-12-23 14:57:05', 1, '2011-12-23 18:57:05', 1, 4, 76, 'Y', 'Y', 540, 'Глаза', NULL, 132, 133, 2, '', 'text', 'ГЛАЗА\r\n', 'eyes', NULL, NULL, NULL, NULL),
    (87, '2012-07-19 16:27:30', 1, '2012-07-19 20:27:30', 1, 4, NULL, 'Y', 'Y', 500, 'MIRRA MINERAL', NULL, 9, 10, 1, '', 'text', 'MIRRA MINERAL\r\n', 'mirra_mineral', NULL, NULL, NULL, NULL),
    (82, '2011-12-23 14:57:52', 1, '2011-12-23 18:57:52', 1, 4, 76, 'Y', 'Y', 560, 'Ногти', NULL, 134, 135, 2, '', 'text', 'НОГТИ\r\n', 'nails', NULL, NULL, NULL, NULL),
    (103, '2019-06-18 11:25:46', 1844, '2019-06-18 15:25:46', 1844, 4, 94, 'Y', 'Y', 500, 'Новая серия CRYO PRO', NULL, 26, 27, 2, '<small>MUST-HAVE ЭТОГО ЛЕТА!\r\nНовая серия CRYO PRO идеально подходит для теплого времени года.Все средства имеют криотерапевтический эффект: немного охлаждают кожу , а также устраняют отечность и застойные явления в тканях.</small>', 'html', 'НОВАЯ СЕРИЯ CRYO PRO\r\nMUST-HAVE ЭТОГО ЛЕТА! НОВАЯ СЕРИЯ CRYO PRO ИДЕАЛЬНО ПОДХОДИТ ДЛЯ ТЕПЛОГО \r\nВРЕМЕНИ ГОДА.ВСЕ СРЕДСТВА ИМЕЮТ КРИОТЕРАПЕВТИЧЕСКИЙ ЭФФЕКТ: НЕМНОГО ОХЛАЖДАЮТ \r\nКОЖУ , А ТАКЖЕ УСТРАНЯЮТ ОТЕЧНОСТЬ И ЗАСТОЙНЫЕ ЯВЛЕНИЯ В ТКАНЯХ.', 'novaya_seriya_cryo_pro', NULL, NULL, NULL, NULL),
    (98, '2018-04-10 10:14:37', 1844, '2018-04-10 14:14:37', 1844, 4, 38, 'Y', 'Y', 500, 'Функциональное питание', NULL, 86, 87, 2, '<small>Натуральный продукт растительного происхождения...</small>', 'html', 'ФУНКЦИОНАЛЬНОЕ ПИТАНИЕ\r\nНАТУРАЛЬНЫЙ ПРОДУКТ РАСТИТЕЛЬНОГО ПРОИСХОЖДЕНИЯ...', 'funktsionalnoe_pitanie', NULL, NULL, NULL, NULL),
    (94, '2017-09-25 11:02:48', 1844, '2017-09-25 15:02:48', 1844, 4, NULL, 'Y', 'Y', 500, 'СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ', NULL, 21, 28, 1, '', 'text', 'СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ\r\n', 'spetsialnye_predlozheniya', NULL, NULL, NULL, NULL),
    (86, '2011-12-23 15:11:33', 1, '2011-12-23 19:11:33', 1, 4, NULL, 'Y', 'Y', 650, 'СОПУТСТВУЮЩАЯ ПРОДУКЦИЯ', NULL, 137, 138, 1, '', 'text', 'СОПУТСТВУЮЩАЯ ПРОДУКЦИЯ\r\n', 'accessories', NULL, NULL, NULL, NULL),
    (88, '2013-12-14 13:57:43', 1, '2013-12-14 17:57:43', 1, 4, NULL, 'Y', 'Y', 500, 'MIRRA LIMITED EDITION', NULL, 5, 8, 1, '', 'text', 'MIRRA LIMITED EDITION\r\n', 'mirra_limited_edition', NULL, NULL, NULL, NULL),
    (89, '2013-12-20 14:38:42', 1, '2013-12-20 18:38:42', 1, 4, NULL, 'Y', 'Y', 500, 'MIRRA CAVIAR', NULL, 3, 4, 1, '    Икорная линия MIRRA представляет собой ряд инновационных косметических продуктов , действие которых основано на уникальных свойствах икры лососевых и осетровых рыб. Икра непревзойденный концентрат биоактивных веществ. Совершенная технология обработки икры , разработанная и запатентованная в Компании , позволяет добавлять в косметическое средство цельную икру , а не экстракт . Благодаря этому сохраняются все ценные вещества каждой икринки.\r\n    Средства икорной линии относятся к клеточной косметике : это значит , что они корректируют повреждения и возрастные изменения кожи , усиливая ее собственные возможности восстановления . Компоненты , входящие в состав икры , дают коже дополнительную энергию, увеличивая  сопротивляемость к стрессам , активизируют процессы образования собственного коллагена и эластина.', 'text', 'MIRRA CAVIAR\r\n    ИКОРНАЯ ЛИНИЯ MIRRA ПРЕДСТАВЛЯЕТ СОБОЙ РЯД ИННОВАЦИОННЫХ КОСМЕТИЧЕСКИХ ПРОДУКТОВ , ДЕЙСТВИЕ КОТОРЫХ ОСНОВАНО НА УНИКАЛЬНЫХ СВОЙСТВАХ ИКРЫ ЛОСОСЕВЫХ И ОСЕТРОВЫХ РЫБ. ИКРА НЕПРЕВЗОЙДЕННЫЙ КОНЦЕНТРАТ БИОАКТИВНЫХ ВЕЩЕСТВ. СОВЕРШЕННАЯ ТЕХНОЛОГИЯ ОБРАБОТКИ ИКРЫ , РАЗРАБОТАННАЯ И ЗАПАТЕНТОВАННАЯ В КОМПАНИИ , ПОЗВОЛЯЕТ ДОБАВЛЯТЬ В КОСМЕТИЧЕСКОЕ СРЕДСТВО ЦЕЛЬНУЮ ИКРУ , А НЕ ЭКСТРАКТ . БЛАГОДАРЯ ЭТОМУ СОХРАНЯЮТСЯ ВСЕ ЦЕННЫЕ ВЕЩЕСТВА КАЖДОЙ ИКРИНКИ.\r\n    СРЕДСТВА ИКОРНОЙ ЛИНИИ ОТНОСЯТСЯ К КЛЕТОЧНОЙ КОСМЕТИКЕ : ЭТО ЗНАЧИТ , ЧТО ОНИ КОРРЕКТИРУЮТ ПОВРЕЖДЕНИЯ И ВОЗРАСТНЫЕ ИЗМЕНЕНИЯ КОЖИ , УСИЛИВАЯ ЕЕ СОБСТВЕННЫЕ ВОЗМОЖНОСТИ ВОССТАНОВЛЕНИЯ . КОМПОНЕНТЫ , ВХОДЯЩИЕ В СОСТАВ ИКРЫ , ДАЮТ КОЖЕ ДОПОЛНИТЕЛЬНУЮ ЭНЕРГИЮ, УВЕЛИЧИВАЯ  СОПРОТИВЛЯЕМОСТЬ К СТРЕССАМ , АКТИВИЗИРУЮТ ПРОЦЕССЫ ОБРАЗОВАНИЯ СОБСТВЕННОГО КОЛЛАГЕНА И ЭЛАСТИНА.', 'mirra_caviar', NULL, NULL, NULL, NULL),
    (100, '2019-03-22 12:07:34', 1844, '2019-03-22 15:07:34', 1844, 4, 29, 'Y', 'Y', 500, 'Тонус и красота', NULL, 36, 37, 2, 'Чтобы кожа выглядела красивой и отдохнувшей, ее необходимо поддерживать в тонусе.\r\nАктивные ингредиенты средств препятствуют процессам старения и возвращают коже здоровый цвет лица.', 'text', 'ТОНУС И КРАСОТА\r\nЧТОБЫ КОЖА ВЫГЛЯДЕЛА КРАСИВОЙ И ОТДОХНУВШЕЙ, ЕЕ НЕОБХОДИМО ПОДДЕРЖИВАТЬ В ТОНУСЕ.\r\nАКТИВНЫЕ ИНГРЕДИЕНТЫ СРЕДСТВ ПРЕПЯТСТВУЮТ ПРОЦЕССАМ СТАРЕНИЯ И ВОЗВРАЩАЮТ КОЖЕ ЗДОРОВЫЙ ЦВЕТ ЛИЦА.', 'tonus_i_krasota', NULL, NULL, NULL, NULL),
    (91, '2014-12-10 15:23:48', 1844, '2014-12-10 18:23:48', 1844, 4, NULL, 'Y', 'Y', 500, 'MIRRA SPORT', NULL, 11, 12, 1, '                                                      ТВОЙ ВЫЗОВ САМОМУ СЕБЕ ! \r\n                                ЖАЖДА ТРИУМФА , СТРЕМЛЕНИЕ К УСПЕХУ И ДОСТИЖЕНИЕ ЦЕЛИ. \r\n                                ЭТО ТВОЙ ВЫБОР - СТАТЬ ПОБЕДИТЕЛЕМ или плестись в самом конце .\r\n                                ЧУВСТВОВАТЬ СИЛУ или быть слабым .\r\n                                ЗАНЯТЬСЯ СОБОЙ или быть слабым .\r\n                                ДВИГАТЬСЯ ВПЕРЕД или опустить руки . ', 'text', 'MIRRA SPORT\r\n                                                      ТВОЙ ВЫЗОВ САМОМУ СЕБЕ ! \r\n                                ЖАЖДА ТРИУМФА , СТРЕМЛЕНИЕ К УСПЕХУ И ДОСТИЖЕНИЕ ЦЕЛИ. \r\n                                ЭТО ТВОЙ ВЫБОР - СТАТЬ ПОБЕДИТЕЛЕМ ИЛИ ПЛЕСТИСЬ В САМОМ КОНЦЕ .\r\n                                ЧУВСТВОВАТЬ СИЛУ ИЛИ БЫТЬ СЛАБЫМ .\r\n                                ЗАНЯТЬСЯ СОБОЙ ИЛИ БЫТЬ СЛАБЫМ .\r\n                                ДВИГАТЬСЯ ВПЕРЕД ИЛИ ОПУСТИТЬ РУКИ . ', 'mirra_sport', NULL, NULL, NULL, NULL),
    (92, '2015-04-01 15:13:43', 1844, '2015-04-01 18:13:43', 1844, 4, NULL, 'Y', 'Y', 500, 'MIRRA BIOTECHNOLOGY', NULL, 1, 2, 1, '', 'text', 'MIRRA BIOTECHNOLOGY\r\n', 'mirra_biotechnology', NULL, NULL, NULL, NULL),
    (101, '2019-03-22 12:32:43', 1844, '2019-03-22 15:32:43', 1844, 4, 88, 'Y', 'Y', 500, 'Активное восстановление кожи', NULL, 6, 7, 2, '', 'text', 'АКТИВНОЕ ВОССТАНОВЛЕНИЕ КОЖИ\r\n', 'aktivnoe_vosstanovlenie_kozhi', NULL, NULL, NULL, NULL),
    (104, '2019-06-18 12:02:38', 1844, '2019-06-18 16:02:38', 1844, 4, 94, 'Y', 'Y', 500, 'Линия : Маски', NULL, 22, 23, 2, 'Стать обладательницей красивой ровной идеальной - заветная мечта каждой женщины! Летом,когда начинается сезон долгожданных отпусков,совершенства хочется добиться вдвойне - на отдыхе необходимо,чтобы лицо было привлекательным даже без макияжа! Встречайте новинки - Маски-пленки тройного действия,которые направлены на очищение,увлажнение и восстановление. Сегодня маски-пленки,помимо традиционнго очищения и подготовки к дальнейшему уходу , способны улучшить качество кожи без дополнительных временных затрат.', 'text', 'ЛИНИЯ : МАСКИ\r\nСТАТЬ ОБЛАДАТЕЛЬНИЦЕЙ КРАСИВОЙ РОВНОЙ ИДЕАЛЬНОЙ - ЗАВЕТНАЯ МЕЧТА КАЖДОЙ ЖЕНЩИНЫ! ЛЕТОМ,КОГДА НАЧИНАЕТСЯ СЕЗОН ДОЛГОЖДАННЫХ ОТПУСКОВ,СОВЕРШЕНСТВА ХОЧЕТСЯ ДОБИТЬСЯ ВДВОЙНЕ - НА ОТДЫХЕ НЕОБХОДИМО,ЧТОБЫ ЛИЦО БЫЛО ПРИВЛЕКАТЕЛЬНЫМ ДАЖЕ БЕЗ МАКИЯЖА! ВСТРЕЧАЙТЕ НОВИНКИ - МАСКИ-ПЛЕНКИ ТРОЙНОГО ДЕЙСТВИЯ,КОТОРЫЕ НАПРАВЛЕНЫ НА ОЧИЩЕНИЕ,УВЛАЖНЕНИЕ И ВОССТАНОВЛЕНИЕ. СЕГОДНЯ МАСКИ-ПЛЕНКИ,ПОМИМО ТРАДИЦИОННГО ОЧИЩЕНИЯ И ПОДГОТОВКИ К ДАЛЬНЕЙШЕМУ УХОДУ , СПОСОБНЫ УЛУЧШИТЬ КАЧЕСТВО КОЖИ БЕЗ ДОПОЛНИТЕЛЬНЫХ ВРЕМЕННЫХ ЗАТРАТ.', 'liniya_maski', NULL, NULL, NULL, NULL),
    (102, '2019-05-27 08:10:35', 1844, '2019-05-27 12:10:35', 1844, 4, 49, 'Y', 'Y', 500, 'SPA-EXPRESS', NULL, 59, 60, 3, ' новейшие бальнеологические средства, оказывающие полноценное воздействие на состояние кожи и всего организма, нормализует эмоциональный статус человека! ', 'text', 'SPA-EXPRESS\r\n НОВЕЙШИЕ БАЛЬНЕОЛОГИЧЕСКИЕ СРЕДСТВА, ОКАЗЫВАЮЩИЕ ПОЛНОЦЕННОЕ ВОЗДЕЙСТВИЕ НА СОСТОЯНИЕ КОЖИ И ВСЕГО ОРГАНИЗМА, НОРМАЛИЗУЕТ ЭМОЦИОНАЛЬНЫЙ СТАТУС ЧЕЛОВЕКА! ', 'spa_express', NULL, NULL, NULL, NULL),
    (105, '2019-12-02 14:23:02', 1844, '2019-12-02 17:23:02', 1844, 4, 94, 'Y', 'Y', 500, 'Наборы', NULL, 24, 25, 2, '<small>Выгодные наборы экономия ваших денежных средств...</small>', 'html', 'НАБОРЫ\r\nВЫГОДНЫЕ НАБОРЫ ЭКОНОМИЯ ВАШИХ ДЕНЕЖНЫХ СРЕДСТВ...', 'nabory', NULL, NULL, NULL, NULL),
    (106, '2019-12-05 15:56:24', 1844, '2019-12-05 18:56:24', 1844, 4, NULL, 'Y', 'Y', 500, 'Профессиональная линия', NULL, 17, 20, 1, '<small>Линия профессиональной косметики - PRO...</small>', 'html', 'ПРОФЕССИОНАЛЬНАЯ ЛИНИЯ\r\nЛИНИЯ ПРОФЕССИОНАЛЬНОЙ КОСМЕТИКИ - PRO...', 'professionalnaya_liniya', NULL, NULL, NULL, NULL),
    (107, '2019-12-05 16:03:11', 1844, '2019-12-05 19:03:11', 1844, 4, 106, 'Y', 'Y', 500, 'БАЗОВЫЕ СРЕДСТВА', NULL, 18, 19, 2, '<small>Серия БАЗОВЫЕ СРЕДСТВА включает комплексные многофункциональные средства с высокой концентрацией активных компонентов, оказывающие ревитализирующее воздействие на кожу.</small>', 'html', 'БАЗОВЫЕ СРЕДСТВА\r\nСЕРИЯ БАЗОВЫЕ СРЕДСТВА ВКЛЮЧАЕТ КОМПЛЕКСНЫЕ МНОГОФУНКЦИОНАЛЬНЫЕ СРЕДСТВА \r\nС ВЫСОКОЙ КОНЦЕНТРАЦИЕЙ АКТИВНЫХ КОМПОНЕНТОВ, ОКАЗЫВАЮЩИЕ РЕВИТАЛИЗИРУЮЩЕЕ \r\nВОЗДЕЙСТВИЕ НА КОЖУ.', 'bazovye_sredstva', NULL, NULL, NULL, NULL),
    (108, '2020-02-01 07:22:39', 1844, '2020-02-01 10:22:39', 1844, 4, 37, 'Y', 'Y', 500, 'Сыворотки', NULL, 66, 67, 2, 'Мастер', 'text', 'СЫВОРОТКИ\r\nМАСТЕР', 'syvorotki', NULL, NULL, NULL, NULL),
    (109, '2020-02-01 09:00:21', 1844, '2020-02-01 12:00:21', 1844, 4, NULL, 'Y', 'Y', 500, 'Парфюмерия', NULL, 15, 16, 1, 'В составе каждого аромата самые любимые и изысканные ингредиенты, использующиеся при создании духов на протяжении всей истории парфюмерного искусства.', 'html', 'ПАРФЮМЕРИЯ\r\nВ СОСТАВЕ КАЖДОГО АРОМАТА САМЫЕ ЛЮБИМЫЕ И ИЗЫСКАННЫЕ ИНГРЕДИЕНТЫ, ИСПОЛЬЗУЮЩИЕСЯ \r\nПРИ СОЗДАНИИ ДУХОВ НА ПРОТЯЖЕНИИ ВСЕЙ ИСТОРИИ ПАРФЮМЕРНОГО ИСКУССТВА.', 'parfyumeriya', NULL, NULL, NULL, NULL);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.clearTable('b_iblock_section');
  }
}
