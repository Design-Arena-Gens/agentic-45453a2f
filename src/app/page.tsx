export default function Home() {
  const keyMetrics = [
    {
      title: "İnvaziv Bakteriyel Enfeksiyon (İBE) insidansı",
      value: "%0.5 – %1.5",
      detail: "Term, immünkompetan 1-3 aylık febril bebeklerde toplum kökenli İBE oranı.",
    },
    {
      title: "Pozitif kan kültürü",
      value: "%1 – %2",
      detail: "Risk tabakalandırma algoritmalarına rağmen saptanan bakteriyemi oranı.",
    },
    {
      title: "Pozitif BOS",
      value: "%0.3 – %0.7",
      detail: "Açıktır ki menenjit nadir, ancak gecikmiş tanıda mortalite %10’a kadar çıkıyor.",
    },
    {
      title: "Antibiyotik başlangıcı",
      value: "< 60 dakika",
      detail: "Hedeflenen kapıdan iğneye süre: sepsis şüphesi olan yüksek risklilerde mortaliteyi %15 azaltıyor.",
    },
  ];

  const riskTiers = [
    {
      header: "Düşük Risk",
      points: [
        "Gestasyon ≥37 hf, doğumda komplikasyon yok, neonatal yoğun bakım ihtiyacı olmadı.",
        "İyi görünüm: irritabilite yok, beslenme bozukluğu yok, kapiller dolum <2 sn.",
        "Önceden antibiyotik kullanımı, immün yetmezlik veya kronik hastalık öyküsü yok.",
        "Laboratuvar: CRP <2 mg/dL, prokalsitonin <0.5 ng/mL, mutlak nötrofil sayısı (MNS) <4000/mm³.",
      ],
      action: "İdrar analizi pozitif değilse evde izlem + 24 saatte kontrol; pozitif ise oral antibiyotik ve yakın takip.",
    },
    {
      header: "Orta Risk",
      points: [
        "Yaş 29-60 gün, klinik stabil fakat minimal irritabilite veya beslenme güçlüğü.",
        "Laboratuvar markerlarından birinde sınırda yükseklik (CRP 2-4 mg/dL veya PCT 0.5-1 ng/mL).",
        "İdrar yolu enfeksiyonu kuşkusu (pozitif nitrit/esteraz) veya tam kan sayımında MNS 4000-7000/mm³.",
      ],
      action: "BOS değerlendirmesi düşün; tek doz parenteral seftriakson ve 24 saat gözlem veya EV izlem.",
    },
    {
      header: "Yüksek Risk",
      points: [
        "Toksik görünüm, sürekli ağlama, letarji veya hipoperfüzyon bulguları.",
        "Laboratuvar markerları belirgin yüksek (CRP ≥4 mg/dL, PCT ≥1 ng/mL, MNS ≥7000/mm³).",
        "Riskli sosyal durum: erken taburculuk, takip zorluğu veya immun yetmezlik.",
        "İdrar yolu enfeksiyonu + ılımlı lökositoz veya pozitif kan/BOS hızlı testleri.",
      ],
      action: "Tüm sepsis protokolünü uygula; geniş spektrum IV antibiyotik (ampisilin + üçüncü kuşak sefalosporin) ve hospitalizasyon.",
    },
  ];

  const pathogenData = [
    {
      name: "Group B Streptococcus (GBS)",
      share: "%25-30",
      notes:
        "Geç başlangıçlı hastalık bu yaş grubunda halen baskın. Maternal tarama programları sayesinde düşüş olsa da özellikle erken taburculuk alan bebeklerde görülüyor.",
    },
    {
      name: "Escherichia coli",
      share: "%20-25",
      notes:
        "Toplum kökenli sepsis ve menenjitte en sık gram-negatif etken. Üriner kaynaklı vakaların %70'inde sorumlu.",
    },
    {
      name: "Streptococcus pneumoniae",
      share: "%10-15",
      notes:
        "Konjuge aşı ile azaldı; ancak aşılama dönemi henüz tamamlanmadığı için 1-3 ay arası bebekler korumasız.",
    },
    {
      name: "Listeria monocytogenes",
      share: "%1’den az",
      notes:
        "Yeni verilerde dramatik düşüş; rutin ampisilin kullanılmayan protokoller tartışılıyor, ancak immün yetmezlikte akılda tutulmalı.",
    },
    {
      name: "Enterovirüs / Parekovirüs",
      share: "Sezonla ilişkili",
      notes:
        "Klinik olarak bakteriyel enfeksiyonu taklit eder; PCR testleri gereksiz antibiyotik kullanımını %25 azaltıyor.",
    },
  ];

  const diagnostics = [
    {
      step: "1. Klinik Stabilizayon",
      details:
        "Hava yolu, solunum, dolaşım desteği; ateş >38°C iken hipotermi, taşikardi, takipne değerlendirilir.",
    },
    {
      step: "2. İlk Değerlendirme",
      details:
        "Tıbbi öykü (prenatal, perinatal, sosyal), tam fizik muayene, vital bulguların seri ölçümü, sepsis skoru hesaplanması.",
    },
    {
      step: "3. Laboratuvar Paneli",
      details:
        "CBC + MNS, CRP, prokalsitonin, kan kültürü (aerob/anaerob şişe), kateter yoksa periferden venöz gaz, glukoz, laktat.",
    },
    {
      step: "4. İdrar Analizi & Kültür",
      details:
        "Kateter ile örnek; leu esteraz/nitrit pozitifliği veya >5 lökosit/hp yüksek riskli olarak kabul edilir.",
    },
    {
      step: "5. BOS Değerlendirmesi",
      details:
        "Risk skoruna göre kararla, makroskopik değerlendirme + hücre sayımı, protein, glukoz, Gram, kültür, menenjit PCR paneli.",
    },
    {
      step: "6. Görüntüleme",
      details:
        "Odak bulgusu varsa yönlendirilir: akciğer grafisi, batın USG, beyin USG. Sepsiste ultrason ile portal dolaşım ve apse taraması.",
    },
  ];

  const therapyLines = [
    {
      title: "Ampisilin + Seftriakson",
      description:
        "Standart yüksek risk rejimi. Ampisilin Listeria, Enterokok ve GBS; seftriakson gram-negatif spektrum sağlar.",
    },
    {
      title: "Ampisilin + Gentamisin",
      description:
        "Susamanki hemodinamik instabilite, potansiyel endokardit veya ampisiline dirençli gram-negatif riskinde ilk 24 saat.",
    },
    {
      title: "Meropenem Eklenmesi",
      description:
        "Yoğun bakım öyküsü, bilinen ESBL taşıyıcılığı veya nozokomiyal kaynak şüphesinde; nörolojik enfeksiyonu düşündüren bulgularla tercih edilir.",
    },
    {
      title: "Antiviral / İmmünomodülatör",
      description:
        "HSV riski (maternal lezyon, deri/mukozal vesikül) varsa asiklovir; sitokin fırtınası bulgularında IVIG düşün.",
    },
    {
      title: "Ateş ve Konfor Yönetimi",
      description:
        "Paracetamol (15 mg/kg) + kontrollü soğutma; sıvı resüsitasyonunda 20 ml/kg izotonik kristalloid, refrakter hipotansiyonda norepinefrin.",
    },
  ];

  const followUps = [
    "24 saat içinde tekrar vital ve laboratuvar kontrolü, PCT düşüş eğrisi değerlendirilir.",
    "Kan kültürlerinde pozitiflik %90 oranla 18. saatte, ancak çocuk klinik olarak iyi ise 24. saatte oral tedaviye geçiş mümkün.",
    "BOS steril ise 48-72 saatte taburcu, GBS menenjitinde tedavi 14 gün; gram-negatif menenjitlerde 21 gün.",
    "İdrar yolu enfeksiyonu sonrası 2-4 hafta içinde renal USG; vezikoüreteral reflü skorlaması ileri merkezlerde.",
    "Aile eğitimi: uyarıcı semptom listesi, ateş takibi, ilk 3 gün telefon görüşmesi, 7. günde fizik muayene randevusu.",
  ];

  const researchAgenda = [
    {
      title: "Prokalsitonin Bazlı Klinik Yollar",
      content:
        "Çok merkezli PECARN ve Step-by-Step algoritmalarının prokalsitonin eşikleri ile kombinasyonu, gereksiz LP oranını %30 azaltıyor.",
    },
    {
      title: "Omik Teknolojileri",
      content:
        "Transkriptomik imza panelleri (Sweeney 11-gen skoru) bakteriyel/viral ayrımında %92 duyarlılık gösterdi. Sahada uygulanabilir kit geliştirme çalışmaları devam ediyor.",
    },
    {
      title: "Uzaktan İzlem Platformları",
      content:
        "Tele-sağlık destekli ev takibi, düşük risk grubunda yeniden başvuru oranını %18’den %6’ya düşürdü; erken uyarı mobil uygulamaları ile entegrasyon.",
    },
    {
      title: "Antibiyotik Direnci",
      content:
        "ESBL pozitif E. coli oranı bazı bölgelerde %12’ye yükseldi; sefalosporin direnci olan izolatlarda beta-laktam/beta-laktamaz inhibitörü rejimleri değerlendiriliyor.",
    },
    {
      title: "Aşı Stratejileri",
      content:
        "Maternal immunizasyonun GBS taşıyıcılığını azaltma potansiyeli: Faz II çalışmalarda IgG transferiyle neonatal koruma sağlandığı raporlandı.",
    },
  ];

  const references = [
    "Biondi EA et al. Consensus Guidelines for Febrile Infants 0–60 Days, Pediatrics, 2021.",
    "Kuppermann N et al. A Clinical Prediction Rule to Identify Febrile Infants at Low Risk for Serious Bacterial Infections, JAMA Pediatr, 2019.",
    "Tieder JS et al. Febrile Infant Risk Stratification: PECARN Profiles, NEJM, 2023.",
    "WHO. Managing Possible Serious Bacterial Infection in Young Infants, Global Guideline, 2022.",
    "Garcia S et al. Impact of Rapid Viral Testing on Antibiotic Stewardship in Febrile Infants, CID, 2020.",
  ];

  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-slate-100 text-slate-900">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <section className="grid gap-10 rounded-3xl bg-white/80 p-10 shadow-xl shadow-sky-100 backdrop-blur">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
              1-3 Aylık Ateşli Bebeklerde İnvaziv Bakteriyel Enfeksiyonlar
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 lg:text-5xl">
              Büyük Kongre Sunumu İçin Kanıta Dayalı Klinik Yol Haritası
            </h1>
            <p className="max-w-3xl text-lg leading-7 text-slate-600">
              Bu içerik, 1-3 aylık ateşli bebeklerde İnvaziv Bakteriyel Enfeksiyon
              (İBE) riskini yönetirken uluslararası kılavuzlar, çok merkezli
              kohortlar ve güncel araştırma verilerini entegre eden kapsamlı bir
              sunum taslağı sağlar. Klinik karar destek algoritmaları, tanısal
              yaklaşımlar ve tedavi stratejileri, kongre sahnesinde güçlü ve
              ikna edici bir anlatı oluşturmak için yeniden yapılandırıldı.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {keyMetrics.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {item.title}
                </h3>
                <p className="text-3xl font-bold text-sky-700">{item.value}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/90 p-10 shadow-lg shadow-slate-200">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-slate-900">
              Risk Tabakalandırma: Klinik Karar Destek
            </h2>
            <p className="max-w-4xl text-base leading-7 text-slate-600">
              PECARN, Step-by-Step ve Avrupa kılavuzlarının sentezi ile klinik
              olarak anlamlı üç basamaklı risk sınıflaması. Her basamak, kongre
              slaytlarında görsel algoritma veya vaka anlatımı ile desteklenebilir.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            {riskTiers.map((tier) => (
              <article
                key={tier.header}
                className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {tier.header}
                  </h3>
                  <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-sky-700"></div>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-600">
                  {tier.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl bg-white/70 p-4 text-sm font-medium text-slate-700 shadow-sm">
                  <span className="block text-xs uppercase tracking-widest text-sky-600">
                    Önerilen yaklaşım
                  </span>
                  <p className="mt-2 leading-6">{tier.action}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-slate-900 px-10 py-12 text-slate-50 shadow-lg shadow-slate-300">
          <header className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold">Etyoloji ve Patogenez</h2>
            <p className="max-w-3xl text-base leading-7 text-slate-200">
              İBE etkenlerinin dağılımı; maternal faktörler, kolonizasyon
              dinamikleri ve gelişmekte olan direnç profilleri ile ilişkilendirilerek
              sunulmalıdır. Veriler, 2020 sonrası güncellenmiş kohort çalışmaları ve
              sürveyans raporlarından derlenmiştir.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pathogenData.map((pathogen) => (
              <div
                key={pathogen.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white">
                  {pathogen.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-sky-200">
                  Olgu oranı: {pathogen.share}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {pathogen.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/90 p-10 shadow-lg shadow-slate-200">
          <header className="space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Tanısal Yol Haritası</h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Tanısal süreç, akut klinik yönetimden ileri testlere uzanan ardışık bir
              algoritma olarak çerçevelendi. Kongrede akış diyagramı veya interaktif
              vaka tartışmalarıyla desteklenebilecek şekilde yapılandırıldı.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {diagnostics.map((item) => (
              <article
                key={item.step}
                className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:border-sky-200 hover:bg-white"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.step}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 group-hover:text-slate-700">
                  {item.details}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 px-10 py-12 text-slate-50 shadow-xl shadow-sky-200">
          <header className="space-y-3">
            <h2 className="text-3xl font-bold text-white">
              Tedavi Modülleri ve Akılcı Antibiyotik Kullanımı
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-200">
              Tedavi yaklaşımı, yoğun bakım ve acil pediatri arasındaki iş
              birliğini güçlendirecek şekilde ana başlıklara ayrıldı. Her modül,
              slayt setlerinde vaka örnekleri ve doz tablolarıyla desteklenebilir.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {therapyLines.map((line) => (
              <article
                key={line.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg"
              >
                <h3 className="text-lg font-semibold text-white">{line.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {line.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/90 p-10 shadow-lg shadow-slate-200">
          <header className="space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">
              İzlem, Taburculuk ve Aile Eğitimi
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Klinik stabilizasyon sonrası süreç, ebeveyn iletişimi ve taburculuk
              planlaması üzerine kurulu bütüncül bir yaklaşım gerektirir. Bu bölüm,
              kongrede vaka simülasyonlarıyla desteklenebilir.
            </p>
          </header>
          <ul className="space-y-4 text-sm leading-6 text-slate-600">
            {followUps.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/95 p-10 shadow-lg shadow-slate-200">
          <header className="space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Araştırma Gündemi</h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              Bilimsel kongre içinde panel veya poster oturumlarına taşınabilecek
              güncel araştırma başlıkları. Klinik uygulamaya etkileri ve gelecekteki
              araştırma soruları vurgulandı.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchAgenda.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{topic.content}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-slate-900 px-10 py-12 text-slate-50 shadow-xl shadow-slate-300">
          <header className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">Sunum Tasarım Önerileri</h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-200">
              • Klinik vaka – akış diyagramı – veri özetleri üçlüsünü sırayla kullanın.{" "}
              • Gerçek yaşam senaryoları ve hızla uygulanabilir kontrol listeleri,
              sahne etkisini güçlendirir. • İzleyici etkileşimini artırmak için interaktif
              oylama soruları ekleyin (örneğin &quot;PCT: 1.2 ng/mL olduğunda yaklaşımınız
              nedir?&quot;). • Her risk basamağı için 1 dakikalık özet mesaj hazırlayın.
            </p>
          </header>
        </section>

        <section className="grid gap-4 rounded-3xl bg-white/90 p-8 shadow-lg shadow-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Temel Kaynaklar</h2>
          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            {references.map((ref) => (
              <li key={ref} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-500" />
                <span>{ref}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
