// ===========================
// ANIMATION ON SCROLL FOR ALL SECTIONS
// ===========================

document.addEventListener("DOMContentLoaded", function () {
    const animatedMap = [
        { selector: '.section-title', anim: 'animate-slide-up' },
        { selector: '.animate-slide-left', anim: 'animate-slide-left' },
        { selector: '.animate-slide-right', anim: 'animate-slide-right' },
        { selector: '.broker-card', anim: 'animate-slide-up' },
        { selector: '.partner-card', anim: 'animate-slide-up' },
        { selector: '.step-card', anim: 'animate-slide-up' },
        { selector: '.global-highlight', anim: 'animate-slide-left' },
        { selector: '.logistics-column', anim: 'animate-slide-right' },
        { selector: '.contact-grid', anim: 'animate-slide-up' },
        { selector: '.section-text', anim: 'animate-slide-left' },
        { selector: '.hero-content', anim: 'animate-slide-up' },
        { selector: '.catalog-section ul', anim: 'animate-slide-up' },
        { selector: '.direction-card', anim: 'animate-slide-up' },
        { selector: '.quality-box', anim: 'animate-slide-up' },
        { selector: '.info-item', anim: 'animate-slide-up' }
    ];

    const animatedEls = [];

    // Add animation classes
    animatedMap.forEach(item => {
        document.querySelectorAll(item.selector).forEach(el => {
            if (!el.classList.contains(item.anim)) {
                el.classList.add(item.anim);
            }
            animatedEls.push(el);
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedEls.forEach(el => observer.observe(el));
});
// (Удалено: дублирующий код анимации для about-section)
// ===========================
// MOBILE MENU TOGGLE
// ===========================

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBtn = document.querySelector(".mobile-menu-btn");
    mobileMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const header = document.querySelector(".header");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBtn = document.querySelector(".mobile-menu-btn");
    if (!header.contains(event.target) && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
});

// ===========================
// SMOOTH SCROLLING
// ===========================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        const mobileMenu = document.getElementById("mobileMenu");
        const menuBtn = document.querySelector(".mobile-menu-btn");
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
}

// ===========================
// LANGUAGE SWITCHER (DATA)
// ===========================

// ===========================
// TRANSLATIONS
// ===========================

const translations = {

    ru: {
        // HEADER / NAV
        catalog: "Каталог",
        logistics: "Логистика",
        about: "О Нас",
        contacts: "Контакты",

        // HERO
        heroTitle: "Нефтепродукты по всему миру",
        heroSubtitle: "Спотовые решения и долгосрочные контракты с прозрачным ценообразованием",
        learnMore: "Узнайте о нас больше",

        // ABOUT
        aboutSectionTitle: "О Нас",
        aboutCompany1: "Мы оказываем брокерские и консультационные услуги в сфере международной торговли нефтепродуктами.",
        aboutCompany2: "Наша задача — связать квалифицированных покупателей и подтвержденных продавцов, выстроить корректную процедуру сделки и проконтролировать документооборот в соответствии с международными нормами торговли и банковской практикой.",
        aboutNotTitle: "Мы не являемся:",
        aboutNotSeller: "Продавцом или покупателем продукции",
        aboutNotOwner: "Владельцем товара",
        aboutNotOperator: "Оператором хранения или логистики",
        aboutNotBank: "Финансовым учреждением",
        aboutDirectOps: "Все финансовые и товарные операции осуществляются напрямую между сторонами через банки и в рамках применимого законодательства.",

        // TURKMENISTAN
        turkmenistanTitle: "Туркменистан и биржевая модель поставок",
        turkmenistanText1: "Экспорт нефтепродуктов и продукции нефтепереработки из Туркменистана осуществляется исключительно через Государственную товарно-сырьевую биржу Туркменистана (ГТСБТ).",
        turkmenistanText2: "Сделки с туркменским происхождением регулируются:",
        turkmenistanText3: "Все продукты и доступные объёмы публикуются в котировках на сайте ГТСБТ, что обеспечивает прозрачность для иностранных покупателей.",
        turkmenistanText4: "В рамках биржевой модели Туркменистана не применяются международные торговые процедуры и правила, включая стандартные SOP, ICC, UCP 600. Единственным международным стандартом являются Incoterms.",
        turkmenistanText5: "Все сделки проходят по предоплате:",
        turkmenistanText6: "Процедура сделки, последовательность этапов и форма расчётов полностью определяются продавцом и биржей.",
        turkmenistanText7: "Мы не представляем нефтеперерабатывающие заводы Туркменистана и не обладаем продавецкими мандатами.",
        turkmenistanText8: "Наша роль ограничена сопровождением покупательской стороны сделки и включает:",
        turkmenistanText9: "Мы не гарантируем распределение объёмов и не влияем на результаты торгов.",

        turkmenistanList1: "законодательством Туркменистана",
        turkmenistanList2: "правилами и регламентами ГТСБТ",
        turkmenistanList3: "условиями, установленными продавцом",
        turkmenistanList4: "иностранная компания должна быть зарегистрирована на ГТСБТ",
        turkmenistanList5: "расчёты только после регистрации",
        turkmenistanList6: "процедура оплаты определяется продавцом",
        turkmenistanList7: "разъяснение биржевой модели",
        turkmenistanList8: "сопровождение регистрации",
        turkmenistanList9: "координация документооборота",
        turkmenistanList10: "адаптация ожиданий покупателей",
        turkmenistanList11: "контроль корректности документов",

        // LIABILITY (Ограничение ответственности)
        liabilityTitle: "Ограничение ответственности",
        liability1: "Брокер не гарантирует наличие товара или оплату",
        liability2: "Не участвует в финансировании и логистике",
        liability3: "Не несёт ответственности за действия сторон",
        liability4: "Не является гарантом исполнения обязательств",
        liability5: "Оставляет за собой право отказать в сопровождении",

        // BROKER ROLE (Направления / Роль брокера)
        directionsTitle: "Роль Брокера:",
        railTitle: "Роль брокера в реальной товарной сделке - это процедурный, документарный и комплаенс-контроль.",
        seaTitle: "Мы Обеспечиваем:",
        deliveryTerms: "Корректную и логичную последовательность сделки",
        railTerms: "Фильтрацию фиктивных продавцов и покупателей",
        seaTerms: "Проверку контрагентов (KYC / Due Diligence / AML)",
        minBatch: "Контроль правильности документов и процедур",
        seaMin: "Соответствие сделок нормам ICC и UCP 600",

        // Product we are working with
        catalogTitleNew: "Мы сопровождаем сделки со следующими продуктами:",
        prod_en590: "EN590 (10 PPM / 50 PPM)",
        prod_jet: "Jet Fuel (Jet A-1)",
        prod_gasoil: "Gasoil / ULSD / AGO",
        prod_fueloil: "Fuel Oil (D2, D6, мазут)",
        prod_gasoline: "Gasoline (различные спецификации)",
        prod_naphtha: "Naphtha",
        prod_bitumen: "Bitumen",
        prod_lpg: "LPG / LNG (по запросу и при наличии подтверждённого продавца)",
        catalogConditionsTitle: "Условия сопровождения:",
        cond_volumes: "только подтверждённые объёмы",
        cond_sanctions: "только несанкционный продукт",
        cond_banking: "только сделки с банковскими инструментами",
        
        // PROTECTION & COMMISSION
        brokerguard: "Защита интересов",
        soprovojdenie: "Международная практика защиты посреднического вознаграждения:",
        kontraktstoron: "<strong>NCNDA</strong> - Защита от обхода и несанкционированного контакта сторон",
        brokercomissi: "<strong>IMFPA</strong> - Порядок, условия и сроки выплаты брокерской комиссии",
        comissibrokera: "Комиссия Брокера:",
        stoimosttovara: "Не включается в стоимость товара",
        faktsdelki: "Выплачивается исключительно после фактического исполнения сделки",
        oformsdelki: "Оформляется документально в рамках международной практики",

        // COOPERATION STEPS
        cooperationTitle: "Реальная и надёжная процедура сделки",
        preparationPhase: "Фаза подготовки",
        executionPhase: "Фаза исполнения (UCP 600)",
        step1: "LOI (Letter of Intent)",
        step1desc: "Выражение намерений покупателя.",
        step2: "FCO / Commercial Offer / Proforma Invoice (PI)",
        step2desc: "Коммерческое предложение продавца с условиями, объёмом и формулой цены.",
        step3: "POF (Proof of Funds, bank-to-bank)",
        step3desc: "Банковское подтверждение платёжеспособности покупателя. Без POF POP не раскрывается.",
        step4: "POP (Proof of Product)",
        step4desc: "Верифицируемые доказательства наличия продукта. Предоставляется только после POF.",
        step5: "ICPO (Irrevocable Corporate Purchase Order)",
        step5desc: "Обязательство покупателя на условиях предложения.",
        step6: "SPA (Sales & Purchase Agreement)",
        step6desc: "Основной контракт сделки между продавцом и покупателем. Подписывается до открытия LC.",
        step6_1: "NCNDA / IMFPA / Fee Protection Agreement",
        step6_1desc: "Документы, регулирующие защиту от обхода и выплату брокерского вознаграждения.",
        step7: "Commercial Invoice (CI)",
        step7desc: "Официальный документ для банка, строго по SPA.",
        step8: "LC / SBLC",
        step8desc: "Открывается покупателем на основании SPA и CI.",
        step9: "Предотгрузочная инспекция",
        step9desc: "SGS / Intertek — количество и качество.",
        step10: "TTT / TTV / STS / Lifting / Delivery",
        step10desc: "TTT — Tank to Tank Transfer, TTV — Tank to Vessel Transfer, STS — Ship to Ship Transfer. Процедура определяется продавцом на основании международных норм Торговой палаты и сопровождается только после открытия LC.",
        step11: "Отгрузочные документы",
        step11desc: "Commercial Invoice, Bill of Lading, Certificate of Origin, Inspection Certificate, Insurance Certificate (если применимо).",
        step12: "Оплата",
        step12desc: "Производится банком покупателя против документов.",
        step13: "Комиссия брокера",
        step13desc: "Выплачивается согласно NCNDA / IMFPA / Fee Protection Agreement.",

        // PRICING & LIABILITY
        pricingTitle: "Ценообразование",
        pricing1: "Цена формируется на основе международных бенчмарков (Platts / Argus)",
        pricing2: "Финальные параметры фиксируются в SPA и CI",
        pricing3: "Брокер не устанавливает цену, а контролирует корректность формулы",
        
        liabilityTitle: "Ограничение ответственности",
        liability1: "Брокер не гарантирует наличие товара или оплату",
        liability2: "Не участвует в финансировании и логистике",
        liability3: "Не несёт ответственности за действия сторон",
        liability4: "Не является гарантом исполнения обязательств продавца или покупателя",
        liability5: "Оставляет за собой право отказать в сопровождении сделки",

        // CATALOG
        catalogTitle: "Продукты с которыми мы работаем",
        
        // PARTNERS
        partnersTitle: "Категории наших партнеров",
        partnerGov: "Государственные предприятия",
        partnerAgro: "Сельхозпредприятия",
        partnerRefinery: "Нефтеперерабатывающие заводы",
        partnerRoad: "Дорожно-строительные компании",
        partnerAzs: "АЗС и нефтяные терминалы",

        // GLOBAL
        globalTitle: "Туркменистан и биржевая модель поставок",
        globalText: "Экспорт нефтепродуктов и продукции нефтепереработки из Туркменистана осуществляется исключительно через Государственную товарно-сырьевую биржу Туркменистана (ГТСБТ).",
        globalHighlight1: "🌍 Биржевая модель Туркменистана",
        globalHighlight2: "Транспарентная и регулируемая система экспорта нефтепродуктов",
        globalTurkmenistanContent: "Сделки с туркменским происхождением регулируются:\n\t•\tзаконодательством Туркменистана\n\t•\tправилами и регламентами ГТСБТ\n\t•\tусловиями и процедурой, установленными продавцом в рамках биржевых торгов\n\nВсе продукты и доступные объёмы публикуются в котировках на сайте ГТСБТ, что обеспечивает прозрачность для иностранных покупателей.\n\nВ рамках биржевой модели Туркменистана не применяются международные торговые процедуры и правила, включая стандартные SOP, ICC, UCP 600 и другие банковско-документарные практики.\nЕдинственным международным стандартом, применяемым к таким сделкам, являются Incoterms, исключительно для определения базиса поставки (FOB, CIF, CFR) и распределения рисков.\n\nВсе сделки проходят по предоплате:\n\t•\tиностранная компания должна быть зарегистрирована на ГТСБТ\n\t•\tрасчёты осуществляются только после прохождения регистрации\n\t•\tпроцедура оплаты определяется продавцом и биржей, полностью в рамках национальных правил\n\nПроцедура сделки, последовательность этапов, требования к документам, форма расчётов, условия отгрузки и сроки поставки:\n\t•\tполностью определяются продавцом\n\t•\tутверждаются и реализуются через ГТСБТ\n\t•\tявляются обязательными для всех участников торгов\n\nМы не представляем нефтеперерабатывающие заводы Туркменистана и не обладаем продавецкими мандатами.\nНаша роль ограничена сопровождением покупательской стороны сделки и включает:\n\t•\tразъяснение иностранным покупателям особенностей биржевой модели Туркменистана\n\t•\tсопровождение регистрации и допуска к торгам на ГТСБТ\n\t•\tкоординацию документооборота между покупателем, биржей и уполномоченными сторонами\n\t•\tадаптацию коммерческих ожиданий покупателей к процедуре продавца\n\t•\tконтроль корректности документов с учётом требований биржи и применимого права\n\nМы не гарантируем распределение объёмов, не влияем на результаты торгов и не сопровождаем сделки вне биржевой модели ГТСБТ.",

        // LOGISTICS
        logisticsSectionTitle: "KYC, Due Diligence и AML",
        logisticsSystem: "Выстроенная система логистики",
        logisticsScience: "Логистика нефтепродуктов — это целая наука.",
        logisticsBase: "Хранение и дистрибуция — основа бизнеса",
        qualityStandards: "Стандарты качества",
        qualityResp: "Мы несем полную ответственность за качество услуг",
        isoCertified: "ISO сертифицировано",
        isoDesc: "Все операции соответствуют международным стандартам",
        
        // KYC & DUE DILIGENCE TRANSLATIONS
        kycDueDiligenceTitle: "KYC & Due Diligence",
        kycDueDiligenceDesc: "Проводится взаимно для всех сторон сделки.",
        kycSeller: "Продавец:",
        kycSellerDoc: "регистрационные документы",
        kycSellerAuth: "полномочия подписанта",
        kycSellerConfirm: "подтверждение права на продукт",
        kycSellerBank: "банковские реквизиты",
        kycBuyer: "Покупатель:",
        kycBuyerReg: "регистрация компании",
        kycBuyerAuth: "полномочия подписанта",
        kycBuyerLC: "подтверждение возможности открытия LC / SBLC",
        amlTitle: "AML (Anti-Money Laundering)",
        amlDesc: "Мы соблюдаем международные требования по:",
        amlMoney: "предотвращению отмывания денежных средств",
        amlSource: "проверке источника средств",
        amlSanctions: "санкционному контролю",
        amlNoPass: "Без прохождения KYC / AML сопровождение сделки не начинается.",
        complianceTitle: "Комплаенс и международные нормы",
        complianceDesc: "Все сделки сопровождаются исключительно в рамках комплаенса, обеспечивая их законность и банковскую приемлемость.",
        complianceInclude: "Наш комплаенс включает:",
        complianceKYC: "KYC & Due Diligence",
        complianceAML: "AML / CTF",
        complianceSanctions: "санкционные проверки (OFAC, EU, UN)",
        complianceBank: "банковский комплаенс",
        complianceICC: "нормы ICC",
        complianceUCP: "документарные правила UCP 600",
        complianceIncoterms: "корректное применение Incoterms (FOB / CIF / CFR)",
        complianceNotSupport: "Мы не сопровождаем сделки:",
        complianceNoCheck: "без комплаенс-проверок",
        complianceNoSource: "с непрозрачным источником средств",
        complianceSanctioned: "с санкционным продуктом",
        complianceNoBanks: "с процедурами, не принимаемыми банками",

        // CONTACTS
        contactTitle: "Свяжитесь с нами",
        contactFormTitle: "Связаться напрямую",
        contactWhatsappButton: "WhatsApp",
        linkedinButton: "LinkedIn",
        contactInfo: "Информация",
        contactDescription: "Наши менеджеры исследуют Ваш вопрос, подготовят предложение и свяжутся с Вами в ближайшее время.",
        email: "Электронная почта",
        phone: "Телефон",

        // FOOTER
        productsFooter: "Продукты",
        logisticsFooter: "Логистика",
        contactsFooter: "Контакты",
        kollep: "© Copyright 2026 BASH EMIR<br>Международная энергетическая группа"
    },


    en: {
        catalog: "Catalog",
        logistics: "Logistics",
        about: "About Us",
        contacts: "Contacts",

        heroTitle: "Petroleum Products Worldwide",
        heroSubtitle: "Spot solutions and long-term contracts with transparent pricing",
        learnMore: "Learn more",

        aboutSectionTitle: "About Us",
        aboutCompany1: "We provide brokerage and consulting services in international petroleum trading.",
        aboutCompany2: "Our mission is to connect qualified buyers with verified sellers, establish correct transaction procedures, and control document flow in accordance with international trade standards.",
        aboutNotTitle: "We are not:",
        aboutNotSeller: "A seller or buyer of products",
        aboutNotOwner: "A product owner",
        aboutNotOperator: "A storage or logistics operator",
        aboutNotBank: "A financial institution",
        aboutDirectOps: "All financial and commodity operations are carried out directly between the parties through banks and within the framework of applicable law.",

        // TURKMENISTAN
        turkmenistanTitle: "Turkmenistan and the Exchange Model",
        turkmenistanText1: "Export of petroleum products from Turkmenistan is carried out exclusively through the State Commodity and Raw Materials Exchange of Turkmenistan (GTSBT).",
        turkmenistanText2: "Transactions with Turkmen origin are regulated by:",
        turkmenistanText3: "All products and available volumes are published on the GTSBT website, ensuring transparency for foreign buyers.",
        turkmenistanText4: "International trade procedures and rules, including standard SOP, ICC, UCP 600 and other banking practices, do not apply within the Turkmenistan exchange model. The only international standard applied to such transactions is Incoterms, exclusively for determining the basis of delivery (FOB, CIF, CFR) and risk allocation.",
        turkmenistanText5: "All transactions are made on a prepayment basis:",
        turkmenistanText6: "The transaction procedure, sequence of stages, documentation requirements, payment form, shipping conditions and delivery terms:",
        turkmenistanText7: "We do not represent Turkmenistan oil refineries and do not hold seller mandates.",
        turkmenistanText8: "Our role is limited to supporting the buyer side of the transaction and includes:",
        turkmenistanText9: "We do not guarantee volume distribution, do not influence auction results, and do not support transactions outside the GTSBT exchange model.",

        turkmenistanList1: "legislation of Turkmenistan",
        turkmenistanList2: "GTSBT rules and regulations",
        turkmenistanList3: "conditions and procedures established by the seller within exchange trading",
        turkmenistanList4: "a foreign company must be registered at GTSBT",
        turkmenistanList5: "payments are made only after registration",
        turkmenistanList6: "payment procedure is determined by the seller and exchange, fully within national rules",
        turkmenistanList7: "explaining to foreign buyers the features of the Turkmenistan exchange model",
        turkmenistanList8: "supporting registration and access to trading on GTSBT",
        turkmenistanList9: "coordinating documentation between buyer, exchange and authorized parties",
        turkmenistanList10: "adapting buyers' commercial expectations to the seller's procedure",
        turkmenistanList11: "controlling document correctness in accordance with exchange requirements and applicable law",

        // LIABILITY
        liabilityTitle: "Limitation of Liability",
        liability1: "The broker does not guarantee product availability or payment",
        liability2: "Does not participate in financing or logistics",
        liability3: "Is not responsible for the actions of the parties",
        liability4: "Is not a guarantor of obligations",
        liability5: "Reserves the right to refuse service",

        // BROKER ROLE
        directionsTitle: "Broker Role:",
        railTitle: "The broker's role in a real commodity deal is procedural, documentary, and compliance control.",
        seaTitle: "We Ensure:",
        deliveryTerms: "Correct and logical transaction sequence",
        railTerms: "Filtering of fictitious sellers and buyers",
        seaTerms: "Counterparty verification (KYC / Due Diligence / AML)",
        minBatch: "Control of document correctness and procedures",
        seaMin: "Compliance with ICC and UCP 600 standards",

        // Product we are working with
        catalogTitleNew: "We support transactions with the following products:",
        prod_en590: "EN590 (10 PPM / 50 PPM)",
        prod_jet: "Jet Fuel (Jet A-1)",
        prod_gasoil: "Gasoil / ULSD / AGO",
        prod_fueloil: "Fuel Oil (D2, D6, Mazut)",
        prod_gasoline: "Gasoline (various specifications)",
        prod_naphtha: "Naphtha",
        prod_bitumen: "Bitumen",
        prod_lpg: "LPG / LNG (on request and subject to a verified seller)",
        catalogConditionsTitle: "Service Conditions:",
        cond_volumes: "confirmed volumes only",
        cond_sanctions: "non-sanctioned products only",
        cond_banking: "transactions with banking instruments only",

        // PROTECTION & COMMISSION
        brokerguard: "Protection of Interests",
        soprovojdenie: "International practice for protecting intermediary fees:",
        kontraktstoron: "<strong>NCNDA</strong> - Protection against circumvention and unauthorized contact",
        brokercomissi: "<strong>IMFPA</strong> - Terms, conditions, and timing of commission payments",
        comissibrokera: "Broker Commission:",
        stoimosttovara: "Not included in the product cost",
        faktsdelki: "Paid exclusively after the actual execution of the deal",
        oformsdelki: "Documented according to international practice",

        cooperationTitle: "Real and Reliable Transaction Procedure",
        preparationPhase: "Preparation Phase",
        executionPhase: "Execution Phase (UCP 600)",
        step1: "LOI (Letter of Intent)",
        step1desc: "Expression of buyer's intentions.",
        step2: "FCO / Commercial Offer / Proforma Invoice (PI)",
        step2desc: "Seller's commercial proposal with terms, volume and price formula.",
        step3: "POF (Proof of Funds, bank-to-bank)",
        step3desc: "Bank confirmation of buyer's solvency. Without POF, POP is not disclosed.",
        step4: "POP (Proof of Product)",
        step4desc: "Verifiable evidence of product availability. Provided only after POF.",
        step5: "ICPO (Irrevocable Corporate Purchase Order)",
        step5desc: "Buyer's commitment on the terms of the offer.",
        step6: "SPA (Sales & Purchase Agreement)",
        step6desc: "Main contract for the deal between seller and buyer. Signed before LC opening.",
        step6_1: "NCNDA / IMFPA / Fee Protection Agreement",
        step6_1desc: "Documents regulating protection from circumvention and broker fee payment.",
        step7: "Commercial Invoice (CI)",
        step7desc: "Official document for the bank, strictly according to SPA.",
        step8: "LC / SBLC",
        step8desc: "Opened by buyer based on SPA and CI.",
        step9: "Pre-shipment Inspection",
        step9desc: "SGS / Intertek — quantity and quality.",
        step10: "TTT / TTV / STS / Lifting / Delivery",
        step10desc: "TTT — Tank to Tank Transfer, TTV — Tank to Vessel Transfer, STS — Ship to Ship Transfer. Procedure is determined by seller based on international Chamber of Commerce standards and accompanied only after LC opening.",
        step11: "Shipping Documents",
        step11desc: "Commercial Invoice, Bill of Lading, Certificate of Origin, Inspection Certificate, Insurance Certificate (if applicable).",
        step12: "Payment",
        step12desc: "Made by buyer's bank against documents.",
        step13: "Broker Commission",
        step13desc: "Paid according to NCNDA / IMFPA / Fee Protection Agreement.",

        // PRICING & LIABILITY
        pricingTitle: "Pricing",
        pricing1: "Price is formed based on international benchmarks (Platts / Argus)",
        pricing2: "Final parameters are fixed in SPA and CI",
        pricing3: "Broker does not set the price but controls the correctness of the formula",
        
        liabilityTitle: "Limitation of Liability",
        liability1: "Broker does not guarantee product availability or payment",
        liability2: "Does not participate in financing and logistics",
        liability3: "Not responsible for the actions of parties",
        liability4: "Is not a guarantor of performance of obligations of seller or buyer",
        liability5: "Reserves the right to refuse to accompany the transaction",

        catalogTitle: "Products we work with",
        
        partnersTitle: "Our partner categories",
        partnerGov: "Government enterprises",
        partnerAgro: "Agricultural companies",
        partnerRefinery: "Oil refineries",
        partnerRoad: "Road construction companies",
        partnerAzs: "Fuel stations & terminals",

        globalTitle: "Turkmenistan and the Exchange Model",
        globalText: "Export of petroleum products from Turkmenistan is carried out exclusively through the State Commodity and Raw Materials Exchange of Turkmenistan (GTSBT).",
        globalHighlight1: "🌍 Turkmenistan Exchange Model",
        globalHighlight2: "Transparent and regulated system for petroleum product exports",
        globalTurkmenistanContent: "Transactions with Turkmen origin are regulated by:\n\t•\tlegislation of Turkmenistan\n\t•\tGTSBT rules and regulations\n\t•\tconditions and procedures established by the seller within exchange trading\n\nAll products and available volumes are published on the GTSBT website, ensuring transparency for foreign buyers.\n\nInternational trade procedures and rules, including standard SOP, ICC, UCP 600 and other banking practices, do not apply within the Turkmenistan exchange model. The only international standard applied to such transactions is Incoterms, exclusively for determining the basis of delivery (FOB, CIF, CFR) and risk allocation.\n\nAll transactions are made on a prepayment basis:\n\t•\ta foreign company must be registered at GTSBT\n\t•\tpayments are made only after registration\n\t•\tpayment procedure is determined by the seller and exchange, fully within national rules\n\nThe transaction procedure, sequence of stages, documentation requirements, payment form, shipping conditions and delivery terms:\n\t•\tare fully determined by the seller\n\t•\tare approved and implemented through GTSBT\n\t•\tare mandatory for all exchange participants\n\nWe do not represent Turkmenistan oil refineries and do not hold seller mandates.\nOur role is limited to supporting the buyer side of the transaction and includes:\n\t•\texplaining to foreign buyers the features of the Turkmenistan exchange model\n\t•\tsupporting registration and access to trading on GTSBT\n\t•\tcoordinating documentation between buyer, exchange and authorized parties\n\t•\tadapting buyers' commercial expectations to the seller's procedure\n\t•\tcontrolling document correctness in accordance with exchange requirements and applicable law\n\nWe do not guarantee volume distribution, do not influence auction results, and do not support transactions outside the GTSBT exchange model.",

        logisticsSectionTitle: "KYC, Due Diligence and AML",
        logisticsSystem: "Established logistics system",
        logisticsScience: "Petroleum logistics is a precise science.",
        logisticsBase: "Storage and distribution are the foundation",
        qualityStandards: "Quality Standards",
        qualityResp: "We take full responsibility for service quality",
        isoCertified: "ISO Certified",
        isoDesc: "All operations comply with international standards",
        
        // KYC & DUE DILIGENCE TRANSLATIONS
        kycDueDiligenceTitle: "KYC & Due Diligence",
        kycDueDiligenceDesc: "Conducted mutually for all parties to the transaction.",
        kycSeller: "Seller:",
        kycSellerDoc: "registration documents",
        kycSellerAuth: "authority of signatory",
        kycSellerConfirm: "confirmation of product ownership",
        kycSellerBank: "bank details",
        kycBuyer: "Buyer:",
        kycBuyerReg: "company registration",
        kycBuyerAuth: "authority of signatory",
        kycBuyerLC: "confirmation of ability to open LC / SBLC",
        amlTitle: "AML (Anti-Money Laundering)",
        amlDesc: "We comply with international requirements for:",
        amlMoney: "prevention of money laundering",
        amlSource: "source of funds verification",
        amlSanctions: "sanctions compliance",
        amlNoPass: "No transaction support is provided without passing KYC / AML checks.",
        complianceTitle: "Compliance and International Standards",
        complianceDesc: "All transactions are conducted exclusively within compliance framework, ensuring their legality and bank acceptability.",
        complianceInclude: "Our compliance includes:",
        complianceKYC: "KYC & Due Diligence",
        complianceAML: "AML / CTF",
        complianceSanctions: "sanctions screening (OFAC, EU, UN)",
        complianceBank: "bank compliance",
        complianceICC: "ICC rules",
        complianceUCP: "documentary rules of UCP 600",
        complianceIncoterms: "correct application of Incoterms (FOB / CIF / CFR)",
        complianceNotSupport: "We do not support transactions:",
        complianceNoCheck: "without compliance checks",
        complianceNoSource: "with unclear source of funds",
        complianceSanctioned: "with sanctioned products",
        complianceNoBanks: "with procedures not accepted by banks",
        isoDesc: "All operations comply with international standards",

        contactTitle: "Contact Us",
        contactFormTitle: "Contact Directly",
        contactWhatsappButton: "WhatsApp",
        linkedinButton: "LinkedIn",
        contactInfo: "Information",
        contactDescription: "Our managers will research your inquiry and contact you shortly.",
        email: "Email",
        phone: "Phone",

        productsFooter: "Products",
        logisticsFooter: "Logistics",
        contactsFooter: "Contacts",
        kollep: "© Copyright 2026 BASH EMIR<br>International Energy Trading Group"
    },


    tr: {
        catalog: "Katalog",
        logistics: "Lojistik",
        about: "Hakkımızda",
        contacts: "İletişim",

        heroTitle: "Dünya Çapında Petrol Ürünleri",
        heroSubtitle: "Şeffaf fiyatlandırma ile spot çözümler ve uzun vadeli sözleşmeler",
        learnMore: "Daha fazla bilgi edinin",

        aboutSectionTitle: "Hakkımızda",
        aboutCompany1: "Uluslararası petrol ticareti alanında aracılık ve danışmanlık hizmetleri sunuyoruz.",
        aboutCompany2: "Görevimiz, nitelikli alıcıları doğrulanmış satıcılarla buluşturmak, doğru işlem prosedürünü oluşturmak ve belge akışını uluslararası ticaret normlarına uygun olarak kontrol etmektir.",
        aboutNotTitle: "Biz şunlar değiliz:",
        aboutNotSeller: "Ürün satıcısı veya alıcısı",
        aboutNotOwner: "Ürün sahibi",
        aboutNotOperator: "Depolama veya lojistik operatörü",
        aboutNotBank: "Finans kurumu",
        aboutDirectOps: "Tüm finansal ve mal işlemleri, taraflar arasında doğrudan bankalar aracılığıyla ve yürürlükteki mevzuat çerçevesinde gerçekleştirilir.",

        // TURKMENISTAN
        turkmenistanTitle: "Türkmenistan ve Borsa Tedarik Modeli",
        turkmenistanText1: "Türkmenistan'dan petrol ürünleri ihracatı, sadece Türkmenistan Devlet Emtia ve Hammadde Borsası (GTSBT) aracılığıyla gerçekleştirilir.",
        turkmenistanText2: "Türkmen menşeli işlemler şunlarla düzenlenir:",
        turkmenistanText3: "Tüm ürünler ve mevcut hacimler GTSBT web sitesinde yayınlanır, yabancı alıcılar için şeffaflık sağlar.",
        turkmenistanText4: "Türkmenistan borsa modelinde uluslararası ticaret prosedürleri ve kuralları, standart SOP, ICC, UCP 600 ve diğer bankacılık-belgesel uygulamalar uygulanmaz. Bu tür işlemlere uygulanan tek uluslararası standart, teslimat esası (FOB, CIF, CFR) ve risk dağılımının belirlenmesi için Incoterms'tir.",
        turkmenistanText5: "Tüm işlemler ön ödemelidir:",
        turkmenistanText6: "İşlem prosedürü, aşamaların sırası, belge gereksinimleri, ödeme şekli, sevkiyat koşulları ve teslimat süreleri:",
        turkmenistanText7: "Türkmenistan rafinerilerini temsil etmiyoruz ve satıcı yetkisine sahip değiliz.",
        turkmenistanText8: "Rolümüz, işlemin alıcı tarafını desteklemekle sınırlıdır ve şunları içerir:",
        turkmenistanText9: "Hacim dağılımını garanti etmiyoruz, ihale sonuçlarını etkilemiyoruz ve GTSBT borsa modeli dışında işlemleri desteklemiyoruz.",

        turkmenistanList1: "Türkmenistan mevzuatı",
        turkmenistanList2: "GTSBT kuralları ve yönetmelikleri",
        turkmenistanList3: "satıcı tarafından borsa ticareti kapsamında belirlenen şartlar ve prosedür",
        turkmenistanList4: "yabancı şirket GTSBT'ye kayıtlı olmalıdır",
        turkmenistanList5: "ödemeler sadece kayıttan sonra yapılır",
        turkmenistanList6: "ödeme prosedürü satıcı ve borsa tarafından belirlenir, tamamen ulusal kurallar çerçevesinde",
        turkmenistanList7: "yabancı alıcılara Türkmenistan borsa modelinin özelliklerinin açıklanması",
        turkmenistanList8: "GTSBT'de kayıt ve ticaret erişimi desteği",
        turkmenistanList9: "alıcı, borsa ve yetkili taraflar arasındaki belge koordinasyonu",
        turkmenistanList10: "alıcı ticari beklentilerinin satıcı prosedürüne uyarlanması",
        turkmenistanList11: "borsa gereksinimleri ve geçerli mevzuata uygun belge doğruluğunun kontrolü",

        // LIABILITY
        liabilityTitle: "Sorumluluk Reddi",
        liability1: "Broker, ürün mevcudiyetini veya ödemeyi garanti etmez",
        liability2: "Finansman veya lojistiğe katılmaz",
        liability3: "Tarafların eylemlerinden sorumlu değildir",
        liability4: "Yükümlülüklerin yerine getirilmesinin garantörü değildir",
        liability5: "Hizmet vermeyi reddetme hakkını saklı tutar",

        // BROKER ROLE
        directionsTitle: "Brokerın Rolü:",
        railTitle: "Brokerın gerçek bir emtia işlemindeki rolü; prosedür, belge ve uyumluluk kontrolüdür.",
        seaTitle: "Neleri Sağlıyoruz:",
        deliveryTerms: "Doğru ve mantıklı işlem sırası",
        railTerms: "Hayali satıcı ve alıcıların filtrelenmesi",
        seaTerms: "Karşı taraf doğrulaması (KYC / Due Diligence / AML)",
        minBatch: "Belge ve prosedürlerin doğruluğunun kontrolü",
        seaMin: "ICC ve UCP 600 standartlarına uyumluluk",

        // Product we are working with
        catalogTitleNew: "Aşağıdaki ürünlerle ilgili işlemlere eşlik ediyoruz:",
        prod_en590: "EN590 (10 PPM / 50 PPM)",
        prod_jet: "Jet Yakıtı (Jet A-1)",
        prod_gasoil: "Gasoil / ULSD / AGO",
        prod_fueloil: "Fuel Oil (D2, D6, Mazot)",
        prod_gasoline: "Benzin (çeşitli spesifikasyonlar)",
        prod_naphtha: "Nafta",
        prod_bitumen: "Bitüm",
        prod_lpg: "LPG / LNG (talep üzerine ve onaylanmış satıcı olması durumunda)",
        catalogConditionsTitle: "Eşlik Şartları:",
        cond_volumes: "yalnızca onaylanmış hacimler",
        cond_sanctions: "yalnızca yaptırım uygulanmayan ürünler",
        cond_banking: "yalnızca banka teminatlı işlemler",

        // PROTECTION & COMMISSION
        brokerguard: "Menfaatlerin Korunması",
        soprovojdenie: "Aracılık komisyonunun korunmasına yönelik uluslararası uygulama:",
        kontraktstoron: "<strong>NCNDA</strong> - Atlatma ve izinsiz temasa karşı koruma",
        brokercomissi: "<strong>IMFPA</strong> - Broker komisyonu ödeme şartları ve süresi",
        comissibrokera: "Broker Komisyonu:",
        stoimosttovara: "Ürün maliyetine dahil değildir",
        faktsdelki: "Sadece işlemin fiilen gerçekleşmesinden sonra ödenir",
        oformsdelki: "Uluslararası uygulamalar çerçevesinde belgelenir",

        cooperationTitle: "Gerçek ve Güvenilir İşlem Prosedürü",
        preparationPhase: "Hazırlık Aşaması",
        executionPhase: "Uygulama Aşaması (UCP 600)",
        step1: "LOI (İniyatif Mektubu)",
        step1desc: "Alıcının niyet ifadesi.",
        step2: "FCO / Ticari Teklif / Proforma Fatura (PI)",
        step2desc: "Satıcının şartlar, hacim ve fiyat formülü ile ticari teklifi.",
        step3: "POF (Fon Kanıtı, banka-banka)",
        step3desc: "Alıcının ödeme gücünün banka teyidi. POF olmadan POP açıklanmaz.",
        step4: "POP (Ürün Kanıtı)",
        step4desc: "Ürün mevcudiyetinin doğrulanabilir kanıtı. Sadece POF'dan sonra sağlanır.",
        step5: "ICPO (Geri Dönülmez Kurumsal Satın Alma Emri)",
        step5desc: "Alıcının teklifin şartlarına bağlı taahhüdü.",
        step6: "SPA (Satış ve Satın Alma Sözleşmesi)",
        step6desc: "Satıcı ve alıcı arasındaki ana işlem sözleşmesi. LC açılmasından önce imzalanır.",
        step6_1: "NCNDA / IMFPA / Ücret Koruma Sözleşmesi",
        step6_1desc: "Atlatmaya karşı koruma ve aracılık ücretinin ödenmesini düzenleyen belgeler.",
        step7: "Ticari Fatura (CI)",
        step7desc: "Banka için resmi belge, SPA'ya kesin uyum.",
        step8: "LC / SBLC",
        step8desc: "Alıcı tarafından SPA ve CI temelinde açılır.",
        step9: "Gemi Kargo Öncesi Muayenesi",
        step9desc: "SGS / Intertek — miktar ve kalite.",
        step10: "TTT / TTV / STS / Kaldırma / Teslimat",
        step10desc: "TTT — Tank to Tank Transfer, TTV — Tank to Vessel Transfer, STS — Ship to Ship Transfer. Prosedür satıcı tarafından Ticaret Odası uluslararası normlarına göre belirlenir ve yalnızca LC açılmasından sonra eşlik edilir.",
        step11: "Sevkiyat Belgeleri",
        step11desc: "Ticari Fatura, Konşimento, Menşe Sertifikası, Muayene Sertifikası, Sigorta Sertifikası (uygunsa).",
        step12: "Ödeme",
        step12desc: "Alıcının bankası tarafından belgeler karşılığında yapılır.",
        step13: "Broker Komisyonu",
        step13desc: "NCNDA / IMFPA / Ücret Koruma Sözleşmesine göre ödenir.",

        // PRICING & LIABILITY
        pricingTitle: "Fiyatlandırma",
        pricing1: "Fiyat, uluslararası kıyaslamalar (Platts / Argus) temelinde oluşturulur",
        pricing2: "Nihai parametreler SPA ve CI'de sabitlenir",
        pricing3: "Broker fiyat belirlemez, formülün doğruluğunu kontrol eder",
        
        liabilityTitle: "Sorumluluk Sınırlaması",
        liability1: "Broker ürün mevcudiyetini veya ödemeyi garanti etmez",
        liability2: "Finansman ve lojistiklere katılmaz",
        liability3: "Tarafların eylemlerinden sorumlu değildir",
        liability4: "Satıcı veya alıcının yükümlülüklerinin yerine getirilmesinin garantörü değildir",
        liability5: "İşlemin eşlikten vazgeçme hakkını saklı tutar",

        catalogTitle: "Çalıştığımız Ürünler",
        
        partnersTitle: "Ortak Kategorilerimiz",
        partnerGov: "Devlet işletmeleri",
        partnerAgro: "Tarım işletmeleri",
        partnerRefinery: "Petrol rafinerileri",
        partnerRoad: "Yol yapım şirketleri",
        partnerAzs: "Akaryakıt istasyonları",

        globalTitle: "Türkmenistan ve Borsa Tedarik Modeli",
        globalText: "Türkmenistan'dan petrol ürünleri ihracatı, sadece Türkmenistan Devlet Emtia ve Hammadde Borsası (GTSBT) aracılığıyla gerçekleştirilir.",
        globalHighlight1: "🌍 Türkmenistan Borsa Modeli",
        globalHighlight2: "Petrol ürünleri ihracatı için şeffaf ve düzenlenmiş sistem",
        globalTurkmenistanContent: "Türkmen menşeli işlemler şunlarla düzenlenir:\n\t•\tTürkmenistan mevzuatı\n\t•\tGTSBT kuralları ve yönetmelikleri\n\t•\tsatıcı tarafından borsa ticareti kapsamında belirlenen şartlar ve prosedür\n\nTüm ürünler ve mevcut hacimler GTSBT web sitesinde yayınlanır, yabancı alıcılar için şeffaflık sağlar.\n\nTürkmenistan borsa modelinde uluslararası ticaret prosedürleri ve kuralları, standart SOP, ICC, UCP 600 ve diğer bankacılık uygulamaları uygulanmaz. Bu tür işlemlere uygulanan tek uluslararası standart, teslimat esası (FOB, CIF, CFR) ve risk dağılımının belirlenmesi için Incoterms'tir.\n\nTüm işlemler ön ödemelidir:\n\t•\tyabancı şirket GTSBT'ye kayıtlı olmalıdır\n\t•\tödemeler sadece kayıttan sonra yapılır\n\t•\tödeme prosedürü satıcı ve borsa tarafından belirlenir, tamamen ulusal kurallar çerçevesinde\n\nİşlem prosedürü, aşamaların sırası, belge gereksinimleri, ödeme şekli, sevkiyat koşulları ve teslimat süreleri:\n\t•\ttamamen satıcı tarafından belirlenir\n\t•\tGTSBT aracılığıyla onaylanır ve uygulanır\n\t•\ttüm borsa katılımcıları için zorunludur\n\nTürkmenistan rafinerilerini temsil etmiyoruz ve satıcı yetkisine sahip değiliz.\nRolümüz, işlemin alıcı tarafını desteklemekle sınırlıdır ve şunları içerir:\n\t•\tyabancı alıcılara Türkmenistan borsa modelinin özelliklerinin açıklanması\n\t•\tGTSBT'de kayıt ve ticaret erişimi desteği\n\t•\talıcı, borsa ve yetkili taraflar arasındaki belge koordinasyonu\n\t•\talıcı ticari beklentilerinin satıcı prosedürüne uyarlanması\n\t•\tborsa gereksinimleri ve geçerli mevzuata uygun belge doğruluğunun kontrolü\n\nHacim dağılımını garanti etmiyoruz, ihale sonuçlarını etkilemiyoruz ve GTSBT borsa modeli dışında işlemleri desteklemiyoruz.",

        logisticsSectionTitle: "KYC, Due Diligence ve AML",
        logisticsSystem: "Kurulu lojistik sistemi",
        logisticsScience: "Petrol lojistiği tam bir bilimdir.",
        logisticsBase: "Depolama ve dağıtım işin temelidir",
        qualityStandards: "Kalite Standartları",
        qualityResp: "Hizmet kalitesi için tam sorumluluk alıyoruz",
        isoCertified: "ISO Sertifikalı",
        isoDesc: "Tüm operasyonlar uluslararası standartlara uygundur",
        
        // KYC & DUE DILIGENCE TRANSLATIONS
        kycDueDiligenceTitle: "KYC & Due Diligence",
        kycDueDiligenceDesc: "İşlemin tüm tarafları için karşılıklı olarak yürütülür.",
        kycSeller: "Satıcı:",
        kycSellerDoc: "kaydı belgeleri",
        kycSellerAuth: "imzalayanın yetkileri",
        kycSellerConfirm: "ürüne sahiplik onayı",
        kycSellerBank: "bank detayları",
        kycBuyer: "Alıcı:",
        kycBuyerReg: "şirket kaydı",
        kycBuyerAuth: "imzalayanın yetkileri",
        kycBuyerLC: "LC / SBLC açabilme kabiliyetinin onayı",
        amlTitle: "AML (Kara Para Aklama Karşıtı)",
        amlDesc: "Şunlar için uluslararası gerekliliklere uyarız:",
        amlMoney: "kara para aklamanın önlenmesi",
        amlSource: "fon kaynağı doğrulaması",
        amlSanctions: "yaptırım uyumluluğu",
        amlNoPass: "KYC / AML kontrollerinden geçmeden işlem desteği sağlanmaz.",
        complianceTitle: "Uyumluluk ve Uluslararası Normlar",
        complianceDesc: "Tüm işlemler münhasıran uyumluluk çerçevesinde yürütülür, yasal geçerliliklerini ve banka kabul edilebilirliğini sağlar.",
        complianceInclude: "Uyumluluk çalışmalarımız:",
        complianceKYC: "KYC & Due Diligence",
        complianceAML: "AML / CTF",
        complianceSanctions: "yaptırım taraması (OFAC, EU, UN)",
        complianceBank: "bank uyumluluğu",
        complianceICC: "ICC kuralları",
        complianceUCP: "UCP 600 belgesel kuralları",
        complianceIncoterms: "Incoterms uygulaması (FOB / CIF / CFR)",
        complianceNotSupport: "Şu işlemleri desteklemiyoruz:",
        complianceNoCheck: "uyumluluk kontrolü olmaksızın",
        complianceNoSource: "fon kaynağı belirsiz olanlar",
        complianceSanctioned: "yaptırımlı ürünlerle",
        complianceNoBanks: "bankalar tarafından kabul edilmeyen prosedürlerle",

        contactTitle: "Bize Ulaşın",
        contactFormTitle: "Doğrudan İletişim",
        contactWhatsappButton: "WhatsApp",
        linkedinButton: "LinkedIn",
        contactInfo: "Bilgi",
        contactDescription: "Yöneticilerimiz talebinizi inceleyecek ve en kısa sürede sizinle iletişime geçecektir.",
        email: "E-posta",
        phone: "Telefon",

        productsFooter: "Ürünler",
        logisticsFooter: "Lojistik",
        contactsFooter: "İletişim",
        kollep: "© Telif Hakkı 2026 BASH EMIR<br>Uluslararası Enerji Ticaret Grubu"
    }
};

// ===========================
// LANGUAGE SWITCHER (LOGIC)
// ===========================

function getInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.substring(0, 2);
    if (savedLang && translations[savedLang]) return savedLang;
    if (translations[browserLang]) return browserLang;
    return 'ru';
}

function switchLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.body.classList.add('language-switching');
    setTimeout(() => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
                // Always clear previous text
                let value = translations[lang][key];
                if (!value) value = translations['ru'][key] || key;
                el.innerHTML = value;
        });
        document.body.classList.remove('language-switching');
    }, 150);
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-lang") === lang) btn.classList.add("active");
    });
    document.documentElement.lang = lang;
}

// Инициализация языка
let currentLanguage = getInitialLanguage();


// ===========================
// REAL-TIME COMMODITY PRICES API (OPTIMIZED)
// ===========================

const OIL_API_KEY = "4665f3284a6247ad4cadef870e4bcbe07ab4eee8fb5c27861a4a2f457e7ee269";
const OIL_API_URL = "https://api.oilpriceapi.com/v1/prices/latest";

async function fetchCommodityPrices() {
    const oilPriceElement = document.getElementById("oil-price");
    const oilChangeElement = document.getElementById("oil-change");
    const gasChangeElement = document.getElementById("gas-change");
    const goldChangeElement = document.getElementById("gold-change");

    if (!oilPriceElement) return;

    // --- SMART CACHING LOGIC ---
    // Устанавливаем кэш на 15 минут (900000 мс)
    const CACHE_DURATION = 900000; 
    const lastFetchTime = parseInt(localStorage.getItem("oilFetchTime") || "0");
    const now = Date.now();

    // Если прошло меньше 15 минут с последнего запроса
    if (now - lastFetchTime < CACHE_DURATION) {
        console.log("Using cached price to save API limit.");
        
        // Восстанавливаем цену
        const cachedPrice = localStorage.getItem("lastOilPrice");
        if (cachedPrice) {
            oilPriceElement.textContent = `$${parseFloat(cachedPrice).toFixed(2)}`;
            
            // Восстанавливаем текст изменения и цвет
            const savedChangeText = localStorage.getItem("lastOilChangeText");
            const savedChangeClass = localStorage.getItem("lastOilChangeClass");
            
            oilChangeElement.classList.remove("positive", "negative");
            if(savedChangeText) oilChangeElement.textContent = savedChangeText;
            if(savedChangeClass) oilChangeElement.classList.add(savedChangeClass);
            
            // Восстанавливаем Газ/Золото из кэша (если есть), чтобы они не прыгали
            const cachedGas = localStorage.getItem("lastGasDisplay");
            const cachedGasClass = localStorage.getItem("lastGasClass");
            if(cachedGas && gasChangeElement) {
                gasChangeElement.textContent = cachedGas;
                gasChangeElement.classList.remove("positive", "negative");
                if(cachedGasClass) gasChangeElement.classList.add(cachedGasClass);
            }
            
            const cachedGold = localStorage.getItem("lastGoldDisplay");
            const cachedGoldClass = localStorage.getItem("lastGoldClass");
            if(cachedGold && goldChangeElement) {
                goldChangeElement.textContent = cachedGold;
                goldChangeElement.classList.remove("positive", "negative");
                if(cachedGoldClass) goldChangeElement.classList.add(cachedGoldClass);
            }
        }
        return; // Выходим из функции, НЕ делая запрос
    }
    // ---------------------------

    try {
        const response = await fetch(OIL_API_URL, {
            headers: {
                "Authorization": `Token ${OIL_API_KEY}`,
                "Content-Type": "application/json"
            }
        });
        const jsonResponse = await response.json();
        const rawPrice = jsonResponse?.data?.price;

        if (typeof rawPrice === 'undefined' || rawPrice === null) {
            throw new Error("Price data missing in API response");
        }

        const newOilPrice = parseFloat(rawPrice);

        if (isNaN(newOilPrice)) {
            throw new Error("Price is NaN");
        }

        const lastPrice = parseFloat(localStorage.getItem("lastOilPrice")) || newOilPrice;
        const change = newOilPrice - lastPrice;

        // UI: Цена нефти
        oilPriceElement.textContent = `$${newOilPrice.toFixed(2)}`;

        // UI: Изменение нефти
        oilChangeElement.classList.remove("positive", "negative");
        const changeText = Math.abs(change).toFixed(2);
        let oilChangeStr = "0.00";
        let oilChangeClass = "";

        if (change > 0.01) {
            oilChangeClass = "positive";
            oilChangeElement.classList.add("positive");
            oilChangeStr = `+${changeText} ↑`;
        } else if (change < -0.01) {
            oilChangeClass = "negative";
            oilChangeElement.classList.add("negative");
            oilChangeStr = `-${changeText} ↓`;
        }
        oilChangeElement.textContent = oilChangeStr;

        // Сохраняем данные нефти и ВРЕМЯ ЗАПРОСА
        localStorage.setItem("oilFetchTime", now.toString()); // <-- Важно для таймера
        localStorage.setItem("lastOilPrice", newOilPrice.toFixed(4));
        localStorage.setItem("lastOilChangeText", oilChangeStr);
        localStorage.setItem("lastOilChangeClass", oilChangeClass);

        // --- Имитация данных для газа и золота (обновляем только при запросе нефти) ---
        const lastGasPrice = parseFloat(localStorage.getItem("lastGasPrice")) || 2.85;
        const lastGoldPrice = parseFloat(localStorage.getItem("lastGoldPrice")) || 2045.30;

        const gasChange = (Math.random() - 0.5) * 0.15;
        const goldChange = (Math.random() - 0.5) * 15;

        let newGasPrice = lastGasPrice + gasChange;
        let newGoldPrice = lastGoldPrice + goldChange;

        newGasPrice = Math.max(2.5, Math.min(3.5, newGasPrice));
        newGoldPrice = Math.max(2000, Math.min(2100, newGoldPrice));

        // UI: Газ
        gasChangeElement.classList.remove("positive", "negative");
        let gasStr = "";
        let gasClass = "";
        if (gasChange > 0.01) {
            gasClass = "positive";
            gasChangeElement.classList.add("positive");
            gasStr = `+${gasChange.toFixed(3)} ↑`;
        } else if (gasChange < -0.01) {
            gasClass = "negative";
            gasChangeElement.classList.add("negative");
            gasStr = `${gasChange.toFixed(3)} ↓`;
        } else {
            gasStr = `${gasChange.toFixed(3)}`;
        }
        gasChangeElement.textContent = gasStr;

        // UI: Золото
        goldChangeElement.classList.remove("positive", "negative");
        let goldStr = "";
        let goldClass = "";
        if (goldChange > 1) {
            goldClass = "positive";
            goldChangeElement.classList.add("positive");
            goldStr = `+${goldChange.toFixed(2)} ↑`;
        } else if (goldChange < -1) {
            goldClass = "negative";
            goldChangeElement.classList.add("negative");
            goldStr = `${goldChange.toFixed(2)} ↓`;
        } else {
            goldStr = `${goldChange.toFixed(2)}`;
        }
        goldChangeElement.textContent = goldStr;

        // Сохраняем имитированные данные
        localStorage.setItem("lastGasPrice", newGasPrice.toFixed(4));
        localStorage.setItem("lastGoldPrice", newGoldPrice.toFixed(4));
        // Сохраняем визуальное состояние для кэша
        localStorage.setItem("lastGasDisplay", gasStr);
        localStorage.setItem("lastGasClass", gasClass);
        localStorage.setItem("lastGoldDisplay", goldStr);
        localStorage.setItem("lastGoldClass", goldClass);

    } catch (error) {
        console.error("Error fetching commodity prices:", error);
        // При ошибке показываем кэш
        const cachedPrice = localStorage.getItem("lastOilPrice");
        if (cachedPrice && !isNaN(parseFloat(cachedPrice))) {
             oilPriceElement.textContent = `$${parseFloat(cachedPrice).toFixed(2)}`;
             // Можно восстановить старый текст изменения, если нужно
        } else {
             oilPriceElement.textContent = `API Error`;
             oilChangeElement.textContent = "N/A";
        }
    }
}

// ===========================
// INIT
// ===========================

document.addEventListener("DOMContentLoaded", function () {
    switchLanguage(currentLanguage);
    fetchCommodityPrices(); // Проверка кэша происходит внутри функции
    // Запускаем интервал 15 минут (900000 мс)
    setInterval(fetchCommodityPrices, 900000);
});

