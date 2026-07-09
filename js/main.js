(function() {
  'use strict';

  // ═══════════════════════ BILINGUAL CONTENT ═══════════════════════
  const i18n = {
    en: {
      'nav-overview': 'Overview',
      'nav-features': 'Features',
      'nav-screenshots': 'Screenshots',
      'nav-engineering': 'Engineering',
      'nav-challenges': 'Challenges',
      'nav-contact': 'Contact',
      'badge-files': '338+ Dart Files',
      'badge-arch': 'Clean Architecture',
      'badge-platforms': 'Android + Windows',
      'badge-providers': '6 Streaming Providers',
      'hero-title-prefix': 'Cross-Platform',
      'hero-title-brand': 'Movie & TV Discovery',
      'hero-title-suffix': '& Streaming Platform',
      'hero-desc': 'A production-grade Flutter application with dual-flavor architecture — Venox for compliant Google Play distribution and Venox Plus for the full streaming experience on Android & Windows. Built with Clean Architecture, Supabase backend, and 6 multi-provider WebView players.',
      'hero-cta1': 'View Screenshots',
      'hero-cta2': 'Explore Architecture',
      'overview-label': 'Project Overview',
      'overview-title': 'What is Venox Plus?',
      'overview-p1': 'Venox Plus is a cross-platform movie and TV discovery and streaming application built with Flutter and Dart. Users browse TMDB-compatible catalog data, view rich media details with trailers and cast, manage watchlists, and — in the Plus flavor — enjoy multi-provider video streaming directly within the app through embedded WebView players.',
      'overview-p2': 'The project uses a dual-flavor build-time strategy to split the product: <strong>Venox</strong> (Play Store compliant catalog app) and <strong>Venox Plus</strong> (full-featured streaming client for sideload/Windows distribution). Both flavors share a single Supabase backend, enabling unified user accounts, watchlist syncing, and watch progress tracking across platforms.',
      'stat-files': 'Dart Source Files',
      'stat-features': 'Feature Modules',
      'stat-platforms': 'Platforms',
      'stat-flavors': 'Product Flavors',
      'stat-cubits': 'State Cubits',
      'stat-players': 'Streaming Providers',
      'ps-label': 'Case Study',
      'ps-title': 'Problem, Challenge, Solution, Outcome',
      'ps-subtitle': 'How a build-time flavor architecture solved the Play Store compliance challenge while delivering a premium streaming experience.',
      'ps-step1-title': 'Problem',
      'ps-step1-desc': 'Users need a reliable, multi-provider streaming discovery platform. Google Play prohibits streaming apps, making distribution complex.',
      'ps-step2-title': 'Challenge',
      'ps-step2-desc': 'Building one codebase that serves both a Play Store catalog app and a full streaming client — without in-app purchases or subscription management.',
      'ps-step3-title': 'Solution',
      'ps-step3-desc': 'Android product flavors + compile-time feature flags. Play Store APK (catalog only) and Plus APK/Windows installer (full streaming), sharing one Supabase backend.',
      'ps-step4-title': 'Outcome',
      'ps-step4-desc': 'Clean separation of concerns, zero IAP complexity, Play Store compliant, and premium distribution maintained outside store channels.',
      'features-label': 'Core Features',
      'features-title': 'Everything the App Can Do',
      'features-subtitle': '8 feature modules powering discovery, streaming, sports, and user accounts — built with flutter_bloc and Clean Architecture.',
      'feat1-title': 'Content Discovery',
      'feat1-desc': 'Home feed with hero slider, trending, top 20 today, provider/genre filters, top rated, and personalized recommendation sections.',
      'feat2-title': 'Media Details',
      'feat2-desc': 'Rich movie and TV detail pages with media_kit trailer playback, full cast lists, season/episode browsing, and watchlist toggle.',
      'feat3-title': 'Smart Search',
      'feat3-desc': 'Paginated search across movies and TV shows with a reusable PaginationCubit base class — instant results as you type.',
      'feat4-title': 'Multi-Provider Streaming',
      'feat4-desc': '6 active WebView streaming providers with a unified polymorphic interface — Peachify, Videasy, Vidking, Cinesrc, Vidlink, and Zxcstream.',
      'feat5-title': 'Watch History & Resume',
      'feat5-desc': 'Progress tracked every 30 seconds via JS bridge. Resume from where you left off with provider-specific position parameters. Continue Watching on home.',
      'feat6-title': 'Watchlist',
      'feat6-desc': 'Save media to watch later, synced across devices via Supabase. Add or remove with a single tap from any detail screen.',
      'feat7-title': 'Live Football & BeIN Sports',
      'feat7-desc': 'Football match listings fetched from Supabase edge functions. BeIN Sports channel streaming with dedicated WebView player.',
      'feat8-title': 'User Accounts',
      'feat8-desc': 'Email/password authentication via Supabase. Guest mode, profile avatars, password change, and cross-device data sync.',
      'screenshots-label': 'Visual Gallery',
      'screenshots-title': 'Screenshots',
      'screenshots-subtitle': 'Scroll through the app\'s key screens. Click any screenshot to view it full size.',
      'ss1': 'Home Screen<br/>Hero Slider & Sections',
      'ss1-caption': 'Home Feed',
      'ss2': 'Movie Details<br/>Trailer, Cast, Info',
      'ss2-caption': 'Movie Details',
      'ss3': 'TV Details<br/>Seasons & Episodes',
      'ss3-caption': 'TV Show Details',
      'ss4': 'Search Results<br/>Paginated List',
      'ss4-caption': 'Search',
      'ss5': 'Player Selection<br/>6 Providers',
      'ss5-caption': 'Player Selection',
      'ss6': 'WebView Player<br/>Video Streaming',
      'ss6-caption': 'Streaming Player',
      'ss7': 'Football Screen<br/>Match Listings',
      'ss7-caption': 'Football',
      'ss8': 'Profile Drawer<br/>Watchlist & History',
      'ss8-caption': 'Profile Drawer',
      'videos-label': 'Video Demos',
      'videos-title': 'Video Showcase',
      'videos-subtitle': 'Screen recordings of the most impressive parts of the application. Click any video to watch full size.',
      'vid1-title': 'App Navigation Demo',
      'vid1-purpose': '🎯 Shows UX fluidity & tab architecture',
      'vid1-note': 'Recruiters will notice: Seamless tab switching via IndexedStack with lazy initialization, smooth route transitions, and drawer navigation. Demonstrates Navigation 2.0 patterns and responsive layout adaptation.',
      'vid2-title': 'Streaming Experience',
      'vid2-purpose': '🎯 Shows WebView integration & provider system',
      'vid2-note': 'Recruiters will notice: Tap play → provider selection bottom sheet → WebView loads embed URL → JS injection for ad-blocking → resume from saved position. Demonstrates 6-provider polymorphism and progress tracking.',
      'vid3-title': 'Search Flow',
      'vid3-purpose': '🎯 Shows API integration & pagination',
      'vid3-note': 'Recruiters will notice: Type → debounced API call → paginated results via reusable PaginationCubit base class → tap to detail. Demonstrates Dio HTTP client, Either error handling, and clean data layer patterns.',
      'vid4-title': 'Authentication Flow',
      'vid4-purpose': '🎯 Shows state management & Supabase integration',
      'vid4-note': 'Recruiters will notice: Guest browsing → auth dialog → Supabase email/password login → profile loaded with nested watchlist + history → global AuthCubit state propagation across all screens.',
      'vid5-title': 'Trailer Playback',
      'vid5-purpose': '🎯 Shows media_kit integration',
      'vid5-note': 'Recruiters will notice: Trailer fetched via dedicated API, played with media_kit + media_kit_video, auto-paused when navigating to player selection. Demonstrates multi-package media handling.',
      'vid6-title': 'Performance & Loading',
      'vid6-purpose': '🎯 Shows Skeletonizer & image caching',
      'vid6-note': 'Recruiters will notice: Skeletonizer shimmer loading states → smooth content rendering → backdrop precaching via CacheHelper. Demonstrates attention to perceived performance and UX polish.',
      'eng-label': 'Technical Depth',
      'eng-title': 'Flutter Engineering Highlights',
      'eng-subtitle': 'A deep dive into the architecture, patterns, and advanced Flutter techniques demonstrated in this project. This is what recruiters and technical leads care about.',
      'eng1-title': 'Feature-First Clean Architecture',
      'eng1-desc': 'Three-layer separation per feature: <code>view/</code> → <code>cubits/</code> → <code>data/ (repo → data_source)</code>. Cross-cutting concerns in <code>lib/core/</code>. Each of 8 features is independently structured with its own models, repositories, and state management.',
      'eng2-title': 'State Management with flutter_bloc',
      'eng2-desc': '15+ Cubits across the app. Global cubits at app root (Auth, Connection, Rating), feature cubits provided at navigation via MultiBlocProvider. Custom ClosingAwareCubit base class for lifecycle cleanup. Static AuthCubit.myUser singleton for cross-feature user state.',
      'eng3-title': 'Responsive UI & Adaptive Layout',
      'eng3-desc': 'responsive_framework breakpoints for phone/tablet/desktop. Portrait lock with per-screen overrides. window_manager for Windows (1200×800, centered). Skeletonizer for shimmer loading states. flutter_lazy_indexed_stack for performant tab rendering.',
      'eng4-title': 'Performance Optimization',
      'eng4-desc': 'Image caching via CacheHelper with SHA-256 key hashing. Backdrop images precached to disk on fetch. Reusable PaginationCubit base class for efficient list loading. Tab content lazily loaded via IndexedStack.',
      'eng5-title': 'API Integration & Error Handling',
      'eng5-desc': 'Dio HTTP client with interceptors. dartz Either<Failure, T> pattern in all repositories. tryAndCatchBlock wrapper mapping DioException → CustomException → Failure. Supabase client for auth, DB, storage, and edge functions.',
      'eng6-title': 'Authentication System',
      'eng6-desc': 'Supabase email/password with guest mode (no forced login). Signup via edge function create-user. Token refresh handled by Supabase SDK. flutter_secure_storage for sensitive preferences. Global user state with nested watchlist + history data loaded at login.',
      'eng7-title': 'Streaming System Architecture',
      'eng7-desc': '6 WebView players behind a unified BasePlayer interface. JS injection for ad blocking, popup removal, and MutationObserver for dynamic ads. Navigation domain lock preventing redirects to gambling/ad domains. 30-second progress polling via JS bridge with deduplication.',
      'eng8-title': 'Multi-Platform Support',
      'eng8-desc': 'Android (two flavors: playstore/plus) + Windows (Inno Setup installer). Shared codebase with platform-specific guards. CI/CD via GitHub Actions for Windows Plus builds (obfuscated, split debug info). PowerShell version sync script for installer metadata.',
      'eng9-title': 'Localization Infrastructure',
      'eng9-desc': 'Arabic/English support with LanguageCubit and secure storage persistence. RTL-aware layout infrastructure ready. Language selection persisted in flutter_secure_storage. Designed for easy expansion to additional locales via JSON asset files.',
      'eng10-title': 'CI/CD Pipeline',
      'eng10-desc': 'GitHub Actions workflow for Windows Plus release builds with code obfuscation and split debug info. Inno Setup installer generation with auto-version sync. Static website deployment to GitHub Pages on push to main.',
      'eng11-title': 'Dual-Flavor Architecture',
      'eng11-desc': 'Compile-time feature flags via AppConfiguration.isPlus. Single codebase serving two products (Play Store catalog + Plus streaming). Build-time premium model replacing in-app purchases and subscription management. Android productFlavors in Gradle.',
      'eng12-title': 'Security Considerations',
      'eng12-desc': 'Supabase RLS policies for data access control. envied package for obfuscated API keys/secrets. WebView navigation restrictions blocking external domains and intent:// schemes. Android cleartext traffic configuration. flutter_secure_storage for tokens.',
      'arch-title': 'Architecture Flow',
      'arch-desc': 'Dependency direction: UI → Cubit → Repository → Data Source. Each layer depends only on the layer below it. Cross-cutting concerns (DI, caching, routing) live in <code>lib/core/</code>.',
      'stack-label': 'Technology',
      'stack-title': 'Technical Stack',
      'stack-subtitle': 'Every package, service, and tool used in the project — organized by category.',
      'stack-cat1': 'Framework & Language',
      'stack-cat2': 'State Management & DI',
      'stack-cat3': 'Backend & Database',
      'stack-cat4': 'HTTP & Networking',
      'stack-cat5': 'Video & Media',
      'stack-cat6': 'Storage & Caching',
      'stack-cat7': 'UI & Design',
      'stack-cat8': 'Platform & Native',
      'stack-cat9': 'CI/CD & DevOps',
      'stack-cat10': 'Security & Utilities',
      'challenges-label': 'Problem Solving',
      'challenges-title': 'Development Challenges',
      'challenges-subtitle': 'Real technical challenges encountered and solved during development. Click to expand each.',
      'ch1-title': 'WebView Ad Blocking Across 6 Providers',
      'ch1-approach': 'Injected custom JavaScript on page load to block popups, remove ad iframes, force fullscreen video CSS, and set up a MutationObserver to catch dynamically injected ads. Each provider embed page had different DOM structures requiring tailored injection strategies.',
      'ch1-resolution': 'Built a unified JS injection system with provider-specific overrides. Navigation guards (shouldOverrideUrlLoading) block known gambling/ad domains and intent:// schemes. The Zxcstream provider required special main-frame navigation prevention to avoid redirect loops.',
      'ch2-title': 'Build-Time Flavor Architecture Without IAP',
      'ch2-approach': 'Rather than implementing in-app purchases or subscription management (complex, requires server validation, prone to policy issues), the project uses Android product flavors + separate Dart entry points to create two builds from one codebase.',
      'ch2-resolution': 'AppConfiguration.isPlus serves as a compile-time gate across 8+ call sites in the codebase. Feature gates are checked in UI widgets, navigation logic, and cubit initialization. The shared Supabase backend works for both flavors without modification.',
      'ch3-title': 'Watch Progress Accuracy via JS Bridge',
      'ch3-approach': 'Since video plays inside a WebView, native media position tracking was not available. Progress is polled every 30 seconds by evaluating JavaScript on the video element to read currentTime and duration. Results are deduplicated to avoid redundant Supabase writes.',
      'ch3-resolution': 'Each provider has a different resume parameter (startAt, progress, load). The BasePlayer.buildPlayerfullUrl() method handles provider-specific position encoding. Progress saves are tracked by _lastSavedPosition to skip unchanged states.',
      'ch4-title': 'Third-Party Embed Player Reliability',
      'ch4-approach': 'Streaming depends on third-party embed providers that may change domains, go offline, or alter their embed structure. The app needed resilience against individual provider failures while maintaining a unified user interface.',
      'ch4-resolution': 'Implemented a PlayerRegistery pattern with 6 active providers behind a BasePlayer interface. The player selection bottom sheet lets users choose alternative providers if one fails. Inactive providers (VaPlayer, VidsyncPlayer) are commented out in the registry for easy reactivation.',
      'ch5-title': 'Cross-Platform Video Handling',
      'ch5-approach': 'Android and Windows behave differently with WebView fullscreen, keyboard shortcuts, and window states. Windows required explicit F11/Escape handler bridging between JS and Dart via the InAppWebView controller.',
      'ch5-resolution': 'Windows-specific: window_manager sets initial size (1200×800, centered), WindowsWindowHelper bridges F11/fullscreen events. Android: portrait lock except during player fullscreen. Platform checks ensure correct behavior without breaking either platform.',
      'ch6-title': 'Supabase RLS & Single Anon Key Architecture',
      'ch6-approach': 'The client uses a single Supabase anon/publishable key. All data access control must be enforced server-side through Row Level Security policies on PostgreSQL tables, not client-side checks.',
      'ch6-resolution': 'Edge functions (create-user, save-watch-progress, football-matches, bein-stream, for-you) handle server-side logic. The client never has direct database write access outside of authenticated Supabase SDK calls. RLS policies are defined on the Supabase dashboard (backend-side, not in this repository).',
      'ch-label-approach': 'Approach:',
      'ch-label-resolution': 'Resolution:',
      'results-label': 'Impact',
      'results-title': 'Results & Achievements',
      'results-subtitle': 'Measurable outcomes from the architecture, engineering, and product decisions made in this project.',
      'result1': 'Dart Source Files',
      'result2': 'Feature Modules',
      'result3': 'State Management Cubits',
      'result4': 'Active Streaming Providers',
      'result5': 'Platforms (Android + Windows)',
      'result6': 'Product Flavors',
      'result7': 'Supabase Tables/Buckets/Functions',
      'result8': 'In-App Purchases Needed',
      'contrib-label': 'Ownership',
      'contrib-title': 'Developer Contribution',
      'contrib-role': 'Solo Flutter Developer',
      'contrib-scope': 'Full Ownership — Architecture to Deployment',
      'resp1': 'System Architecture & Design Decisions',
      'resp2': 'Full-Stack Development (Flutter + Supabase)',
      'resp3': 'API Integration & Error Handling Strategy',
      'resp4': 'CI/CD Pipeline Setup (GitHub Actions)',
      'resp5': 'Windows Desktop Packaging (Inno Setup)',
      'resp6': 'Performance Optimization & Caching',
      'resp7': 'Code Organization & Project Structure',
      'resp8': 'Dual-Flavor Product Strategy',
      'cta-label': 'Let\'s Connect',
      'cta-title': 'Interested in Working Together?',
      'cta-desc': 'If you\'re a recruiter, hiring manager, or potential client looking for an experienced Flutter developer who understands architecture, state management, and shipping production apps — let\'s talk.',
      'cta-linkedin': 'View on LinkedIn',
      'cta-playstore': 'View on Play Store',
      'cta-email': 'Get in Touch',
      'footer-text': 'Built with Flutter & Dart · Version 0.10.0+17 · © 2026 Venox Plus.',
    },
    ar: {
      'nav-overview': 'نظرة عامة',
      'nav-features': 'المميزات',
      'nav-screenshots': 'لقطات الشاشة',
      'nav-engineering': 'التفاصيل التقنية',
      'nav-challenges': 'التحديات',
      'nav-contact': 'تواصل',
      'badge-files': '+٣٣٨ ملف Dart',
      'badge-arch': 'Clean Architecture',
      'badge-platforms': 'Android + Windows',
      'badge-providers': '٦ مزودين للبث',
      'hero-title-prefix': 'تطبيق Cross-Platform',
      'hero-title-brand': 'لاكتشاف الأفلام والمسلسلات',
      'hero-title-suffix': 'والبث المباشر',
      'hero-desc': 'تطبيق Flutter احترافي بنظام flavor مزدوج — Venox للتوزيع عبر Google Play بشكل متوافق مع السياسات، و Venox Plus للتجربة الكاملة للبث على Android و Windows. مبني على Clean Architecture مع Supabase كخادم خلفي و ٦ مزودين للبث عبر WebView.',
      'hero-cta1': 'شاهد لقطات الشاشة',
      'hero-cta2': 'استعرض التفاصيل التقنية',
      'overview-label': 'نظرة عامة على المشروع',
      'overview-title': 'ما هو Venox Plus؟',
      'overview-p1': 'Venox Plus هو تطبيق متعدد المنصات لاكتشاف الأفلام والمسلسلات وبثها، مبني باستخدام Flutter و Dart. يتصفح المستخدمون بيانات كتالوج متوافقة مع TMDB، ويشاهدون تفاصيل غنية عن الأعمال مع إمكانية مشاهدة الإعلانات التشويقية وطاقم العمل، وإدارة قوائم المشاهدة، وفي نسخة Plus — الاستمتاع بالبث عبر عدة مزودين مباشرة داخل التطبيق من خلال مشغلات WebView مدمجة.',
      'overview-p2': 'يستخدم المشروع استراتيجية بناء مزدوجة (flavors) لتقسيم المنتج: <strong>Venox</strong> (تطبيق كتالوج متوافق مع Google Play) و <strong>Venox Plus</strong> (عميل بث كامل المميزات للتوزيع خارج المتجر عبر التثبيت الجانبي أو Windows). كلا النسختين تتشاركان نفس خادم Supabase، مما يتيح حسابات مستخدمين موحدة، ومزامنة قوائم المشاهدة، وتتبع تقدم المشاهدة عبر المنصات.',
      'stat-files': 'ملف Dart مصدري',
      'stat-features': 'وحدة مميزات',
      'stat-platforms': 'منصة',
      'stat-flavors': 'نسخة منتج',
      'stat-cubits': 'Cubit لإدارة الحالة',
      'stat-players': 'مزود بث',
      'ps-label': 'دراسة حالة',
      'ps-title': 'المشكلة، التحدي، الحل، النتيجة',
      'ps-subtitle': 'كيف حلت استراتيجية الـ Build-Time Flavors تحدي الامتثال لمتجر Google Play مع تقديم تجربة بث متميزة.',
      'ps-step1-title': 'المشكلة',
      'ps-step1-desc': 'يحتاج المستخدمون إلى منصة موثوقة ومتعددة المزودين للبث والاكتشاف. Google Play يمنع تطبيقات البث، مما يجعل التوزيع معقداً.',
      'ps-step2-title': 'التحدي',
      'ps-step2-desc': 'بناء كود برمجي واحد يخدم تطبيق كتالوج لمتجر Play وأيضاً عميل بث كامل — بدون الحاجة لنظام شراء داخل التطبيق أو إدارة اشتراكات.',
      'ps-step3-title': 'الحل',
      'ps-step3-desc': 'نظام Android product flavors + compile-time feature flags. تطبيق Play Store (كتالوج فقط) وتطبيق Plus/Windows installer (بث كامل)، يتشاركان نفس خادم Supabase.',
      'ps-step4-title': 'النتيجة',
      'ps-step4-desc': 'فصل واضح للمسؤوليات، بدون أي تعقيد للشراء داخل التطبيق، متوافق مع Play Store، والتوزيع المتميز يتم خارج قنوات المتجر.',
      'features-label': 'المميزات الأساسية',
      'features-title': 'كل ما يمكن للتطبيق فعله',
      'features-subtitle': '٨ وحدات مميزات تدعم الاكتشاف والبث والرياضة وحسابات المستخدمين — مبنية باستخدام flutter_bloc و Clean Architecture.',
      'feat1-title': 'اكتشاف المحتوى',
      'feat1-desc': 'صفحة رئيسية مع شريط عرض رئيسي، المحتوى الرائج، أفضل ٢٠ اليوم، فلاتر حسب المزودين والتصنيفات، الأعلى تقييماً، وأقسام توصيات مخصصة.',
      'feat2-title': 'تفاصيل الأعمال',
      'feat2-desc': 'صفحات تفصيلية غنية للأفلام والمسلسلات مع تشغيل الإعلانات التشويقية عبر media_kit، قوائم طاقم العمل، تصفح المواسم والحلقات، وزر إضافة لقائمة المشاهدة.',
      'feat3-title': 'بحث ذكي',
      'feat3-desc': 'بحث مقسم لصفحات عبر الأفلام والمسلسلات مع PaginationCubit كصنف أساسي قابل لإعادة الاستخدام — نتائج فورية أثناء الكتابة.',
      'feat4-title': 'البث عبر عدة مزودين',
      'feat4-desc': '٦ مزودين بث نشطين عبر WebView بواجهة موحدة متعددة الأشكال — Peachify، Videasy، Vidking، Cinesrc، Vidlink، و Zxcstream.',
      'feat5-title': 'سجل المشاهدة والاستئناف',
      'feat5-desc': 'تتبع التقدم كل ٣٠ ثانية عبر جسر JavaScript. استئناف من حيث توقفت مع معاملات تحديد الموضع الخاصة بكل مزود. قسم "متابعة المشاهدة" في الصفحة الرئيسية.',
      'feat6-title': 'قائمة المشاهدة',
      'feat6-desc': 'احفظ الأعمال للمشاهدة لاحقاً، مع مزامنة عبر الأجهزة عن طريق Supabase. أضف أو أزل بضغطة واحدة من أي شاشة تفاصيل.',
      'feat7-title': 'مباريات كرة القدم وقنوات BeIN',
      'feat7-desc': 'قوائم مباريات كرة القدم يتم جلبها من Supabase edge functions. بث قنوات BeIN Sports بمشغل WebView مخصص.',
      'feat8-title': 'حسابات المستخدمين',
      'feat8-desc': 'مصادقة بالبريد الإلكتروني وكلمة المرور عبر Supabase. وضع الضيف، صور رمزية للملف الشخصي، تغيير كلمة المرور، ومزامنة البيانات عبر الأجهزة.',
      'screenshots-label': 'معرض مرئي',
      'screenshots-title': 'لقطات الشاشة',
      'screenshots-subtitle': 'تصفح الشاشات الرئيسية للتطبيق. اضغط على أي لقطة شاشة لعرضها بالحجم الكامل.',
      'ss1': 'الشاشة الرئيسية<br/>شريط العرض والأقسام',
      'ss1-caption': 'الصفحة الرئيسية',
      'ss2': 'تفاصيل الفيلم<br/>إعلان تشويقي، طاقم العمل، معلومات',
      'ss2-caption': 'تفاصيل الفيلم',
      'ss3': 'تفاصيل المسلسل<br/>المواسم والحلقات',
      'ss3-caption': 'تفاصيل المسلسل',
      'ss4': 'نتائج البحث<br/>قائمة مقسمة لصفحات',
      'ss4-caption': 'البحث',
      'ss5': 'اختيار المشغل<br/>٦ مزودين',
      'ss5-caption': 'اختيار المشغل',
      'ss6': 'مشغل WebView<br/>بث الفيديو',
      'ss6-caption': 'مشغل البث',
      'ss7': 'شاشة كرة القدم<br/>قوائم المباريات',
      'ss7-caption': 'كرة القدم',
      'ss8': 'درج الملف الشخصي<br/>قائمة المشاهدة والسجل',
      'ss8-caption': 'الملف الشخصي',
      'videos-label': 'عروض فيديو',
      'videos-title': 'معرض الفيديوهات',
      'videos-subtitle': 'تسجيلات شاشة لأكثر أجزاء التطبيق إثارة للإعجاب. اضغط على أي فيديو لمشاهدته بالحجم الكامل.',
      'vid1-title': 'عرض تنقل التطبيق',
      'vid1-purpose': '🎯 يوضح سلاسة تجربة المستخدم وهيكل التبويبات',
      'vid1-note': 'ما سيلاحظه مسؤولو التوظيف: تنقل سلس بين التبويبات عبر IndexedStack مع Lazy Loading، انتقالات سلسة بين الصفحات، وتنقل الـ Drawer. يوضح أنماط Navigation 2.0 وتكييف التصميم المتجاوب.',
      'vid2-title': 'تجربة البث',
      'vid2-purpose': '🎯 يوضح تكامل WebView ونظام المزودين',
      'vid2-note': 'ما سيلاحظه مسؤولو التوظيف: اضغط تشغيل → شاشة اختيار المزود السفلية → تحميل WebView لرابط التضمين → حقن JavaScript لمنع الإعلانات → استئناف من الموضع المحفوظ. يوضح تعدد الأشكال لـ ٦ مزودين وتتبع التقدم.',
      'vid3-title': 'تدفق البحث',
      'vid3-purpose': '🎯 يوضح تكامل API والتقسيم لصفحات',
      'vid3-note': 'ما سيلاحظه مسؤولو التوظيف: اكتب → طلب API مع تأخير → نتائج مقسمة عبر PaginationCubit قابل لإعادة الاستخدام → اضغط للتفاصيل. يوضح عميل Dio HTTP، معالجة الأخطاء بنمط Either، وأنماط طبقة البيانات النظيفة.',
      'vid4-title': 'تدفق المصادقة',
      'vid4-purpose': '🎯 يوضح إدارة الحالة وتكامل Supabase',
      'vid4-note': 'ما سيلاحظه مسؤولو التوظيف: تصفح كضيف → حوار المصادقة → تسجيل دخول Supabase بالبريد الإلكتروني → تحميل الملف الشخصي مع قائمة المشاهدة والسجل → انتشار حالة AuthCubit العامة عبر كل الشاشات.',
      'vid5-title': 'تشغيل الإعلانات التشويقية',
      'vid5-purpose': '🎯 يوضح تكامل media_kit',
      'vid5-note': 'ما سيلاحظه مسؤولو التوظيف: جلب الإعلان التشويقي عبر API مخصص، تشغيله بـ media_kit + media_kit_video، إيقاف تلقائي عند الانتقال لاختيار المشغل. يوضح التعامل مع الوسائط عبر حزم متعددة.',
      'vid6-title': 'الأداء والتحميل',
      'vid6-purpose': '🎯 يوضح Skeletonizer وتخزين الصور المؤقت',
      'vid6-note': 'ما سيلاحظه مسؤولو التوظيف: حالات تحميل Skeletonizer اللامعة → عرض سلس للمحتوى → تخزين مسبق للخلفيات عبر CacheHelper. يوضح الاهتمام بالأداء المدرك وصقل تجربة المستخدم.',
      'eng-label': 'العمق التقني',
      'eng-title': 'أبرز النقاط الهندسية في Flutter',
      'eng-subtitle': 'نظرة معمقة على الهندسة المعمارية والأنماط والتقنيات المتقدمة في Flutter المستخدمة في هذا المشروع. هذا ما يهتم به مسؤولو التوظيف والقادة التقنيون.',
      'eng1-title': 'Feature-First Clean Architecture',
      'eng1-desc': 'فصل ثلاثي الطبقات لكل Feature: <code>view/</code> → <code>cubits/</code> → <code>data/ (repo → data_source)</code>. الـ Cross-Cutting Concerns في <code>lib/core/</code>. كل Feature من ٨ Features منظمة بشكل مستقل مع الـ models والـ repositories وإدارة الحالة الخاصة بها.',
      'eng2-title': 'إدارة الحالة باستخدام flutter_bloc',
      'eng2-desc': 'أكثر من ١٥ Cubit عبر التطبيق. Global Cubits في جذر التطبيق (Auth، Connection، Rating)، و Feature Cubits يتم توفيرها عند التنقل عبر MultiBlocProvider. Custom base class مخصص ClosingAwareCubit للـ lifecycle cleanup. نمط Singleton لـ AuthCubit.myUser لحالة المستخدم عبر الـ features.',
      'eng3-title': 'واجهة مستخدم متجاوبة وتخطيط متكيف',
      'eng3-desc': 'responsive_framework لنقاط الـ breakpoints للهاتف/التابلت/الديسكتوب. Portrait lock مع overrides لكل شاشة. window_manager لنظام Windows (1200×800، centered). Skeletonizer لحالات الـ shimmer loading. flutter_lazy_indexed_stack لعرض تبويبات بأداء عالي.',
      'eng4-title': 'تحسين الأداء',
      'eng4-desc': 'Image caching عبر CacheHelper مع SHA-256 key hashing. تخزين مسبق للـ backdrop images على القرص عند الجلب. PaginationCubit كـ reusable base class لتحميل القوائم بكفاءة. Lazy loading لمحتوى التبويبات عبر IndexedStack.',
      'eng5-title': 'تكامل API ومعالجة الأخطاء',
      'eng5-desc': 'Dio HTTP client مع interceptors. نمط dartz Either<Failure, T> في جميع الـ repositories. غلاف tryAndCatchBlock لتحويل DioException → CustomException → Failure. Supabase client للمصادقة وقاعدة البيانات والتخزين والـ edge functions.',
      'eng6-title': 'نظام المصادقة',
      'eng6-desc': 'مصادقة Supabase بالبريد الإلكتروني/كلمة المرور مع Guest Mode (بدون إجبار على تسجيل الدخول). التسجيل عبر edge function create-user. الـ token refresh يديره Supabase SDK تلقائياً. flutter_secure_storage للبيانات الحساسة. Global user state مع بيانات الـ watchlist والـ history عند تسجيل الدخول.',
      'eng7-title': 'هندسة نظام البث',
      'eng7-desc': '٦ مشغلات WebView خلف واجهة BasePlayer موحدة. JS injection لمنع الإعلانات وإزالة الـ popups و MutationObserver للإعلانات الديناميكية. Navigation domain lock لمنع التوجيه لمواقع القمار/الإعلانات. Progress polling كل ٣٠ ثانية عبر JS bridge مع deduplication.',
      'eng8-title': 'دعم متعدد المنصات',
      'eng8-desc': 'Android (نسختين: playstore/plus) + Windows (Inno Setup installer). كود مشترك مع platform-specific guards. CI/CD عبر GitHub Actions لـ Windows Plus builds (obfuscated، split debug info). سكريبت PowerShell لمزامنة الإصدار لبيانات الـ installer.',
      'eng9-title': 'البنية التحتية للترجمة',
      'eng9-desc': 'دعم العربية/الإنجليزية مع LanguageCubit وتخزين دائم في secure storage. بنية RTL layout جاهزة. اختيار اللغة يتم حفظه في flutter_secure_storage. مصمم للتوسع السهل لإضافة لغات إضافية عبر ملفات JSON.',
      'eng10-title': 'CI/CD Pipeline',
      'eng10-desc': 'GitHub Actions workflow لـ Windows Plus release builds مع code obfuscation و split debug info. توليد Inno Setup installer مع auto-version sync. نشر الموقع الثابت إلى GitHub Pages عند الـ push للـ main branch.',
      'eng11-title': 'Dual-Flavor Architecture',
      'eng11-desc': 'Compile-time feature flags عبر AppConfiguration.isPlus. كود واحد يخدم منتجين (كتالوج Play Store + بث Plus). Build-time premium model بديل عن الشراء داخل التطبيق وإدارة الاشتراكات. Android productFlavors في Gradle.',
      'eng12-title': 'اعتبارات الأمان',
      'eng12-desc': 'Supabase RLS policies للتحكم في الوصول للبيانات. حزمة envied لـ obfuscated API keys/secrets. قيود تنقل WebView لمنع الـ external domains وروابط intent://. تكوين Android cleartext traffic. flutter_secure_storage للـ tokens.',
      'arch-title': 'تدفق الهندسة المعمارية',
      'arch-desc': 'اتجاه الـ dependencies: UI → Cubit → Repository → Data Source. كل طبقة تعتمد فقط على الطبقة التي تحتها. الـ Cross-Cutting Concerns (DI، Caching، Routing) موجودة في <code>lib/core/</code>.',
      'stack-label': 'التقنيات',
      'stack-title': 'الـ Tech Stack',
      'stack-subtitle': 'كل حزمة وخدمة وأداة مستخدمة في المشروع — منظمة حسب الفئة.',
      'stack-cat1': 'الإطار واللغة',
      'stack-cat2': 'State Management و DI',
      'stack-cat3': 'الخادم الخلفي وقاعدة البيانات',
      'stack-cat4': 'HTTP والشبكات',
      'stack-cat5': 'الفيديو والوسائط',
      'stack-cat6': 'Storage و Caching',
      'stack-cat7': 'الواجهة والتصميم',
      'stack-cat8': 'Platform و Native',
      'stack-cat9': 'CI/CD و DevOps',
      'stack-cat10': 'الأمان والأدوات المساعدة',
      'challenges-label': 'حل المشكلات',
      'challenges-title': 'تحديات التطوير',
      'challenges-subtitle': 'تحديات تقنية حقيقية تمت مواجهتها وحلها أثناء التطوير. اضغط لتوسيع كل منها.',
      'ch1-title': 'منع إعلانات WebView عبر ٦ مزودين',
      'ch1-approach': 'حقن JavaScript مخصص عند تحميل الصفحة لمنع النوافذ المنبثقة، إزالة إطارات iframe الإعلانية، فرض CSS فيديو ملء الشاشة، وإعداد MutationObserver لالتقاط الإعلانات المحقونة ديناميكياً. كل صفحة تضمين لمزود كانت لها هياكل DOM مختلفة تتطلب استراتيجيات حقن مخصصة.',
      'ch1-resolution': 'بناء نظام حقن JS موحد مع تجاوزات خاصة بكل مزود. حواجز التنقل (shouldOverrideUrlLoading) تمنع نطاقات القمار/الإعلانات المعروفة وروابط intent://. مزود Zxcstream تطلب منعاً خاصاً لتنقل الإطار الرئيسي لتجنب حلقات إعادة التوجيه.',
      'ch2-title': 'Build-Time Flavor Architecture بدون شراء داخل التطبيق',
      'ch2-approach': 'بدلاً من تنفيذ نظام شراء داخل التطبيق أو إدارة اشتراكات (معقد، يتطلب server validation، عرضة لمشاكل السياسات)، يستخدم المشروع Android product flavors + نقاط دخول Dart منفصلة لإنشاء build-ين من كود واحد.',
      'ch2-resolution': 'AppConfiguration.isPlus يعمل كـ compile-time gate عبر أكثر من ٨ مواقع استدعاء في الكود. Feature gates يتم فحصها في الـ UI widgets، منطق التنقل، وتهيئة الـ cubits. خادم Supabase المشترك يعمل لكلتا النسختين بدون تعديل.',
      'ch3-title': 'دقة تقدم المشاهدة عبر جسر JavaScript',
      'ch3-approach': 'بما أن الفيديو يعمل داخل WebView، لم يكن تتبع الموضع الأصلي متاحاً. يتم استطلاع التقدم كل ٣٠ ثانية عن طريق تنفيذ JavaScript على عنصر الفيديو لقراءة currentTime و duration. النتائج يتم إزالة التكرار فيها لتجنب كتابات Supabase الزائدة.',
      'ch3-resolution': 'كل مزود له معامل استئناف مختلف (startAt، progress، load). طريقة BasePlayer.buildPlayerfullUrl() تتعامل مع ترميز الموضع الخاص بكل مزود. حفظ التقدم يتم تتبعه عبر _lastSavedPosition لتخطي الحالات غير المتغيرة.',
      'ch4-title': 'موثوقية مزودي التضمين الخارجيين',
      'ch4-approach': 'البث يعتمد على مزودي تضمين خارجيين قد يغيرون النطاقات، يتوقفون عن العمل، أو يعدلون هيكل التضمين. التطبيق احتاج إلى مرونة ضد فشل المزودين الفرديين مع الحفاظ على واجهة مستخدم موحدة.',
      'ch4-resolution': 'تنفيذ نمط PlayerRegistery مع ٦ مزودين نشطين خلف واجهة BasePlayer. شاشة اختيار المشغل السفلية تتيح للمستخدمين اختيار مزودين بديلين إذا فشل أحدهم. المزودون غير النشطين (VaPlayer، VidsyncPlayer) موجودون كتعليقات في السجل لسهولة إعادة التفعيل.',
      'ch5-title': 'التعامل مع الفيديو عبر المنصات',
      'ch5-approach': 'Android و Windows يتصرفان بشكل مختلف مع WebView ملء الشاشة، اختصارات لوحة المفاتيح، وحالات النافذة. Windows تطلب جسراً صريحاً لمعالجات F11/Escape بين JavaScript و Dart عبر متحكم InAppWebView.',
      'ch5-resolution': 'خاص بـ Windows: window_manager يضبط الحجم الأولي (1200×800، في المنتصف)، WindowsWindowHelper يربط أحداث F11/ملء الشاشة. Android: قفل عمودي باستثناء أثناء ملء شاشة المشغل. فحوصات المنصة تضمن السلوك الصحيح بدون كسر أي منصة.',
      'ch6-title': 'هندسة Supabase RLS والمفتاح الوحيد المجهول',
      'ch6-approach': 'العميل يستخدم مفتاح Supabase anon/publishable واحد. كل التحكم في الوصول للبيانات يجب فرضه من جانب الخادم عبر سياسات Row Level Security على جداول PostgreSQL، وليس عبر فحوصات من جانب العميل.',
      'ch6-resolution': 'Edge functions (create-user، save-watch-progress، football-matches، bein-stream، for-you) تتعامل مع منطق جانب الخادم. العميل لا يملك أبداً وصولاً مباشراً للكتابة في قاعدة البيانات خارج استدعاءات Supabase SDK الموثقة. سياسات RLS معرفة في لوحة تحكم Supabase (من جانب الخادم، وليس في هذا المستودع).',
      'ch-label-approach': 'النهج:',
      'ch-label-resolution': 'الحل:',
      'results-label': 'الأثر',
      'results-title': 'النتائج والإنجازات',
      'results-subtitle': 'نتائج قابلة للقياس من الهندسة المعمارية والهندسة وقرارات المنتج المتخذة في هذا المشروع.',
      'result1': 'ملف Dart مصدري',
      'result2': 'وحدة مميزات',
      'result3': 'Cubit لإدارة الحالة',
      'result4': 'مزود بث نشط',
      'result5': 'منصة (Android + Windows)',
      'result6': 'نسخة منتج',
      'result7': 'جداول/حاويات/دوال Supabase',
      'result8': 'حاجة للشراء داخل التطبيق',
      'contrib-label': 'الملكية',
      'contrib-title': 'مساهمة المطور',
      'contrib-role': 'مطور Flutter منفرد',
      'contrib-scope': 'ملكية كاملة — من الهندسة المعمارية إلى النشر',
      'resp1': 'هندسة النظام وقرارات التصميم',
      'resp2': 'Full-Stack Development (Flutter + Supabase)',
      'resp3': 'تكامل API واستراتيجية معالجة الأخطاء',
      'resp4': 'إعداد CI/CD Pipeline (GitHub Actions)',
      'resp5': 'Windows Desktop Packaging (Inno Setup)',
      'resp6': 'تحسين الأداء والـ Caching',
      'resp7': 'تنظيم الكود وهيكل المشروع',
      'resp8': 'استراتيجية المنتج بنظام الـ Flavors المزدوج',
      'cta-label': 'لنتواصل',
      'cta-title': 'مهتم بالعمل معاً؟',
      'cta-desc': 'إذا كنت مسؤول توظيف، مدير تقني، أو عميل محتمل تبحث عن مطور Flutter خبير يفهم الهندسة المعمارية وإدارة الحالة وبناء تطبيقات إنتاجية — فلنتحدث.',
      'cta-linkedin': 'شاهد على LinkedIn',
      'cta-playstore': 'شاهد على Play Store',
      'cta-email': 'تواصل معي',
      'footer-text': 'مبني باستخدام Flutter & Dart · الإصدار 0.10.0+17 · © ٢٠٢٦ Venox Plus.',
    }
  };

  // ═══════════════════════ STATE ═══════════════════════
  let currentLang = localStorage.getItem('venox-lang') || 'en';

  // ═══════════════════════ FUNCTIONS ═══════════════════════
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('venox-lang', lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    const toggle = document.getElementById('langToggle');
    toggle.innerHTML = lang === 'ar' ? '🇬🇧 English' : '🇸🇦 العربية';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
      const key = 'nav-' + el.getAttribute('data-i18n-nav');
      if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
    });
  }

  // ═══════════════════════ SCROLL REVEAL ═══════════════════════
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ═══════════════════════ NAVBAR SCROLL ═══════════════════════
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      navbar.classList.toggle('scrolled', currentScroll > 60);
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.navbar-links a');
      let currentSection = '';
      sections.forEach(section => { if (currentScroll >= section.offsetTop - 120) currentSection = section.getAttribute('id'); });
      navLinks.forEach(link => { link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection); });
    });
  }

  // ═══════════════════════ HAMBURGER MENU ═══════════════════════
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { navLinks.classList.remove('open'); hamburger.setAttribute('aria-expanded', 'false'); });
    });
  }

  // ═══════════════════════ CHALLENGES ACCORDION ═══════════════════════
  function initChallenges() {
    document.querySelectorAll('.challenge-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.challenge-item').forEach(i => i.classList.remove('active'));
        if (!isActive) { item.classList.add('active'); header.setAttribute('aria-expanded', 'true'); }
        else { header.setAttribute('aria-expanded', 'false'); }
      });
      header.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); } });
    });
  }

  // ═══════════════════════ SMOOTH SCROLL FOR NAV ═══════════════════════
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ═══════════════════════ VIDEO LIGHTBOX ═══════════════════════
  function initVideoLightbox() {
    const lightbox = document.getElementById('videoLightbox');
    const player = document.getElementById('videoLightboxPlayer');
    const caption = document.getElementById('videoLightboxCaption');
    const prevBtn = document.getElementById('videoLightboxPrev');
    const nextBtn = document.getElementById('videoLightboxNext');
    const triggers = Array.from(document.querySelectorAll('.video-thumb--zoom'));
    if (!lightbox || !player || !triggers.length) return;

    let currentIndex = 0;

    function getVideoSrc(trigger) {
      return trigger.querySelector('video')?.getAttribute('src') || '';
    }

    function getCaption(trigger) {
      return trigger.closest('.video-card')?.querySelector('.video-meta h3')?.textContent?.trim() || '';
    }

    function showSlide(index) {
      currentIndex = (index + triggers.length) % triggers.length;
      const trigger = triggers[currentIndex];
      const src = getVideoSrc(trigger);
      if (!src) return;
      player.pause();
      player.src = src;
      player.load();
      caption.textContent = getCaption(trigger);
      player.play().catch(() => {});
    }

    function openLightbox(index) {
      showSlide(index);
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      lightbox.querySelector('.lightbox__close')?.focus();
    }

    function closeLightbox() {
      player.pause();
      player.removeAttribute('src');
      player.load();
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      triggers[currentIndex]?.focus();
    }

    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', () => openLightbox(index));
    });

    prevBtn?.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn?.addEventListener('click', () => showSlide(currentIndex + 1));

    lightbox.querySelectorAll('[data-video-lightbox-close]').forEach(el => {
      el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
    });
  }

  // ═══════════════════════ SCREENSHOT LIGHTBOX ═══════════════════════
  function initScreenshotLightbox() {
    const lightbox = document.getElementById('screenshotLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const triggers = Array.from(document.querySelectorAll('.screenshot-frame--zoom'));
    if (!lightbox || !triggers.length) return;

    let currentIndex = 0;

    function showSlide(index) {
      currentIndex = (index + triggers.length) % triggers.length;
      const trigger = triggers[currentIndex];
      const img = trigger.querySelector('img');
      const caption = trigger.closest('.screenshot-card')?.querySelector('.ss-caption');
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption?.textContent?.trim() || img.alt;
    }

    function openLightbox(index) {
      showSlide(index);
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      lightbox.querySelector('.lightbox__close')?.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      lightboxImg.removeAttribute('src');
      triggers[currentIndex]?.focus();
    }

    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', () => openLightbox(index));
    });

    prevBtn?.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn?.addEventListener('click', () => showSlide(currentIndex + 1));

    lightbox.querySelectorAll('[data-lightbox-close]').forEach(el => {
      el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
    });
  }

  // ═══════════════════════ HERO MOCKUP STACK ═══════════════════════
  function initHeroMockupStack() {
    const items = document.querySelectorAll('.hero-mockup-item');
    if (!items.length) return;

    function bringToFront(target) {
      items.forEach(item => {
        const isFront = item === target;
        item.classList.toggle('is-front', isFront);
        item.setAttribute('aria-pressed', isFront ? 'true' : 'false');
      });
    }

    items.forEach(item => {
      item.addEventListener('click', () => bringToFront(item));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          bringToFront(item);
        }
      });
    });
  }

  // ═══════════════════════ INIT ═══════════════════════
  function init() {
    setLanguage(currentLang);
    initReveal();
    initNavbar();
    initHamburger();
    initChallenges();
    initSmoothScroll();
    initScreenshotLightbox();
    initVideoLightbox();
    initHeroMockupStack();
    document.getElementById('langToggle').addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();