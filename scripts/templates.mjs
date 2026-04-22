/**
 * Horoscope guidance templates for daily generation.
 * Writes like a real astrologer giving life advice.
 * NO house numbers, NO planet names in output, NO em dashes.
 * Just clear, actionable guidance that sounds human.
 */

// ── Sign metadata ──────────────────────────────────────────────
export const signMeta = [
  { id: 'aries',       en: 'Mesha',      hi: 'मेष' },
  { id: 'taurus',      en: 'Vrishabha',  hi: 'वृषभ' },
  { id: 'gemini',      en: 'Mithuna',    hi: 'मिथुन' },
  { id: 'cancer',      en: 'Karka',      hi: 'कर्क' },
  { id: 'leo',         en: 'Simha',      hi: 'सिंह' },
  { id: 'virgo',       en: 'Kanya',      hi: 'कन्या' },
  { id: 'libra',       en: 'Tula',       hi: 'तुला' },
  { id: 'scorpio',     en: 'Vrishchika', hi: 'वृश्चिक' },
  { id: 'sagittarius', en: 'Dhanu',      hi: 'धनु' },
  { id: 'capricorn',   en: 'Makara',     hi: 'मकर' },
  { id: 'aquarius',    en: 'Kumbha',     hi: 'कुंभ' },
  { id: 'pisces',      en: 'Meena',      hi: 'मीन' },
];

// ── Life advice by Moon house (what house the Moon is transiting from the sign) ──
// Each house has 3 variants. These read like real horoscope advice.
export const moonAdvice = {
  1: [
    { en: 'Your confidence and energy are at a peak today. People around you will notice your presence and respond positively. If you have been putting off a personal decision, this is the day to act on it.',
      hi: 'आज आपका आत्मविश्वास और ऊर्जा चरम पर है। आपके आसपास के लोग आपकी उपस्थिति को महसूस करेंगे। अगर कोई व्यक्तिगत फैसला टाल रहे थे, तो आज कदम उठाएं।' },
    { en: 'A strong day for personal initiatives. Your natural charm is working in your favor, making this an ideal time for interviews, presentations, or meeting new people.',
      hi: 'व्यक्तिगत पहल के लिए शानदार दिन। आपका प्राकृतिक आकर्षण आपके पक्ष में है। इंटरव्यू, प्रेजेंटेशन या नए लोगों से मिलने का बढ़िया समय।' },
    { en: 'Focus on yourself today. Your health, appearance, and personal goals deserve your attention. Small changes you make now will have lasting effects.',
      hi: 'आज खुद पर ध्यान दें। आपकी सेहत, व्यक्तित्व और निजी लक्ष्य आपका ध्यान मांग रहे हैं। अभी किए गए छोटे बदलाव लंबे समय तक असर करेंगे।' },
  ],
  2: [
    { en: 'Financial matters need your attention today. Review any pending payments or investments before making new commitments. A conversation with a family member could bring good news about money.',
      hi: 'आज वित्तीय मामलों पर ध्यान दें। नई प्रतिबद्धताओं से पहले बकाया भुगतान या निवेश की समीक्षा करें। परिवार के किसी सदस्य से बातचीत पैसों के बारे में अच्छी खबर ला सकती है।' },
    { en: 'A good day for planning your finances. Avoid impulsive purchases but do explore savings opportunities. Family bonds strengthen through shared meals or conversations.',
      hi: 'वित्तीय योजना बनाने का अच्छा दिन। आवेगपूर्ण खरीदारी से बचें लेकिन बचत के अवसर तलाशें। साझा भोजन या बातचीत से पारिवारिक संबंध मजबूत होंगे।' },
    { en: 'Your income potential looks favorable today. If you have been negotiating a deal or waiting for a payment, expect positive movement. Spend quality time with loved ones this evening.',
      hi: 'आज आपकी आय की संभावना अनुकूल दिखती है। अगर कोई सौदा या भुगतान का इंतजार था, तो सकारात्मक प्रगति की उम्मीद रखें। शाम को अपनों के साथ समय बिताएं।' },
  ],
  3: [
    { en: 'Communication is your superpower today. Express your ideas clearly and you will find people receptive. A short trip or an important message could change your plans for the better.',
      hi: 'आज संवाद आपकी महाशक्ति है। अपने विचार स्पष्ट रूप से व्यक्त करें और लोग ग्रहणशील मिलेंगे। एक छोटी यात्रा या महत्वपूर्ण संदेश आपकी योजनाओं को बेहतर बना सकता है।' },
    { en: 'Stay connected with siblings and close friends today. An unexpected call or message may open doors you did not expect. Your writing and verbal skills are especially sharp.',
      hi: 'आज भाई-बहनों और करीबी दोस्तों से जुड़े रहें। एक अप्रत्याशित कॉल या संदेश ऐसे दरवाजे खोल सकता है जिसकी उम्मीद नहीं थी। आपके लेखन और वाचन कौशल विशेष रूप से तेज हैं।' },
    { en: 'Today favors learning and sharing knowledge. Sign up for that course, read that article, or teach someone what you know. Short travels are also well-starred.',
      hi: 'आज सीखने और ज्ञान बांटने का दिन है। उस कोर्स में भर्ती हों, वो लेख पढ़ें, या किसी को सिखाएं। छोटी यात्राएं भी शुभ हैं।' },
  ],
  4: [
    { en: 'Home and family take priority today. If there is tension at home, this is a good time to address it calmly. Your emotional intuition is strong, so trust what you feel.',
      hi: 'आज घर और परिवार प्राथमिकता पर हैं। अगर घर में तनाव है, तो शांति से संबोधित करने का यह अच्छा समय है। आपकी भावनात्मक अंतर्ज्ञान मजबूत है, इसलिए जो महसूस करें उस पर भरोसा करें।' },
    { en: 'Spend time creating comfort in your living space. Small improvements to your home environment will lift your mood. A parent or elder may share wisdom that helps you today.',
      hi: 'अपने रहने की जगह को बेहतर बनाने में समय लगाएं। घर के माहौल में छोटे सुधार आपका मूड बढ़ाएंगे। कोई बड़ा या माता-पिता ऐसी बात बता सकते हैं जो आज काम आए।' },
    { en: 'Your roots give you strength today. Connect with your cultural traditions, cook a family recipe, or call your mother. Emotional grounding will help you handle any challenges.',
      hi: 'आज आपकी जड़ें आपको ताकत देती हैं। अपनी सांस्कृतिक परंपराओं से जुड़ें, पारिवारिक रेसिपी बनाएं, या माँ को फोन करें। भावनात्मक स्थिरता किसी भी चुनौती से निपटने में मदद करेगी।' },
  ],
  5: [
    { en: 'Creativity flows freely today. Whether it is a work project, a hobby, or time with children, bring your playful side forward. Romance is also favored, so surprise your partner.',
      hi: 'आज रचनात्मकता स्वतंत्र रूप से बह रही है। काम का प्रोजेक्ट हो, शौक हो, या बच्चों के साथ समय, अपना मजेदार पक्ष सामने लाएं। प्रेम भी अनुकूल है, तो अपने साथी को सरप्राइज दें।' },
    { en: 'A playful energy surrounds you today. Take a break from routine and do something that brings you joy. If you are a student, your focus and learning ability are heightened.',
      hi: 'आज एक चंचल ऊर्जा आपको घेरे हुए है। दिनचर्या से ब्रेक लें और कुछ ऐसा करें जो खुशी दे। अगर आप विद्यार्थी हैं, तो आपकी एकाग्रता और सीखने की क्षमता बढ़ी हुई है।' },
    { en: 'Express yourself boldly today. Your creative ideas have real potential. Investments in education, children, or speculative ventures may show promise. Follow your heart.',
      hi: 'आज बेझिझक अपनी बात कहें। आपके रचनात्मक विचारों में वास्तविक संभावना है। शिक्षा, बच्चों, या सट्टा उद्यमों में निवेश आशाजनक हो सकता है। दिल की सुनें।' },
  ],
  6: [
    { en: 'Pay attention to your health and daily habits today. A small adjustment to your diet or exercise routine can make a big difference over time. Clear pending tasks to reduce stress.',
      hi: 'आज अपनी सेहत और दैनिक आदतों पर ध्यान दें। खानपान या व्यायाम में एक छोटा बदलाव समय के साथ बड़ा फर्क ला सकता है। तनाव कम करने के लिए लंबित काम निपटाएं।' },
    { en: 'Your ability to solve problems is sharp today. Tackle that difficult task you have been avoiding. Health-wise, stay hydrated and take breaks. Helping a colleague will bring unexpected rewards.',
      hi: 'आज आपकी समस्या-समाधान क्षमता तेज है। उस कठिन काम से निपटें जिसे टाल रहे थे। स्वास्थ्य के लिए पानी पीते रहें और ब्रेक लें। किसी सहकर्मी की मदद अप्रत्याशित लाभ लाएगी।' },
    { en: 'Service and discipline are your themes today. Focus on your to-do list and check off those overdue items. A visit to a doctor or starting a health routine is well-timed.',
      hi: 'सेवा और अनुशासन आज आपके विषय हैं। अपनी कार्य सूची पर ध्यान दें और लंबित मदों को पूरा करें। डॉक्टर से मिलना या स्वास्थ्य दिनचर्या शुरू करना सही समय है।' },
  ],
  7: [
    { en: 'Relationships are in the spotlight today. If you are in a partnership, give your partner extra attention. Single? Keep your eyes open because a meaningful connection is possible today.',
      hi: 'आज रिश्ते सुर्खियों में हैं। अगर आप किसी रिश्ते में हैं, तो अपने साथी को अतिरिक्त ध्यान दें। सिंगल हैं? आंखें खुली रखें क्योंकि आज एक सार्थक जुड़ाव संभव है।' },
    { en: 'Business partnerships and personal relationships both benefit from honest conversation today. If there is a pending agreement or contract, today favors signing it.',
      hi: 'व्यापारिक साझेदारी और व्यक्तिगत रिश्ते दोनों आज ईमानदार बातचीत से लाभान्वित होंगे। अगर कोई लंबित समझौता या अनुबंध है, तो आज हस्ताक्षर करना अनुकूल है।' },
    { en: 'Compromise and cooperation bring you closer to your goals today. Do not try to win every argument. The people in your life have something valuable to offer if you listen.',
      hi: 'समझौता और सहयोग आज आपको अपने लक्ष्यों के करीब लाते हैं। हर बहस जीतने की कोशिश न करें। आपके जीवन के लोग कुछ कीमती पेश कर सकते हैं अगर आप सुनें।' },
  ],
  8: [
    { en: 'Expect the unexpected today. Changes that seem disruptive now will prove beneficial in the long run. Trust the process. If someone owes you money, today is a good day to follow up.',
      hi: 'आज अप्रत्याशित की उम्मीद करें। जो बदलाव अभी परेशान करने वाले लगते हैं, वे लंबे समय में फायदेमंद साबित होंगे। प्रक्रिया पर भरोसा करें। अगर किसी से पैसे लेने हैं, तो आज फॉलो अप करें।' },
    { en: 'Deep thinking and research pay off today. Dig beneath the surface of any problem and you will find the real answer. Financial matters related to inheritance, insurance, or taxes may come up.',
      hi: 'गहरी सोच और शोध आज फल देंगे। किसी भी समस्या की सतह के नीचे खोदें और असली जवाब मिलेगा। विरासत, बीमा, या कर से जुड़े वित्तीय मामले सामने आ सकते हैं।' },
    { en: 'Transformation is in the air. Let go of what no longer serves you. Whether it is a habit, a belief, or a relationship dynamic, releasing the old makes room for something better.',
      hi: 'परिवर्तन हवा में है। जो अब काम नहीं आता उसे जाने दें। चाहे कोई आदत हो, विश्वास हो, या रिश्ते की गतिशीलता, पुराने को छोड़ना बेहतर के लिए जगह बनाता है।' },
  ],
  9: [
    { en: 'Your horizons expand today. Opportunities related to higher education, long-distance travel, or spiritual growth are favored. If you have been thinking about a course or pilgrimage, take the first step.',
      hi: 'आज आपके क्षितिज विस्तृत होते हैं। उच्च शिक्षा, लंबी यात्रा, या आध्यात्मिक विकास से जुड़े अवसर अनुकूल हैं। अगर किसी कोर्स या तीर्थयात्रा की सोच रहे थे, तो पहला कदम उठाएं।' },
    { en: 'Luck is on your side today, especially in matters of wisdom and growth. A teacher, mentor, or spiritual guide may enter your life. Be open to perspectives different from your own.',
      hi: 'आज भाग्य आपके पक्ष में है, खासकर ज्ञान और विकास के मामलों में। एक शिक्षक, गुरु, या आध्यात्मिक मार्गदर्शक आपके जीवन में आ सकते हैं। अपने से भिन्न दृष्टिकोणों के लिए खुले रहें।' },
    { en: 'Today favors bold decisions and big-picture thinking. Do not get lost in details. Focus on where you want to be in a year, not what went wrong yesterday. Fortune rewards the brave today.',
      hi: 'आज साहसिक निर्णय और बड़ी तस्वीर सोचने का दिन है। छोटी-छोटी बातों में न उलझें। इस पर ध्यान दें कि एक साल बाद कहां होना चाहते हैं। आज भाग्य बहादुरों का साथ देता है।' },
  ],
  10: [
    { en: 'Career matters demand your attention today. A promotion, recognition, or important meeting could shape your professional trajectory. Dress well and present your best self.',
      hi: 'आज करियर के मामले आपका ध्यान मांगते हैं। पदोन्नति, मान्यता, या एक महत्वपूर्ण बैठक आपके पेशेवर मार्ग को आकार दे सकती है। अच्छे से तैयार हों और अपना सर्वश्रेष्ठ प्रस्तुत करें।' },
    { en: 'Your reputation is your currency today. Every action is being noticed, so make them count. If you have been working toward a goal at work, today brings progress and possibly public acknowledgment.',
      hi: 'आज आपकी प्रतिष्ठा आपकी मुद्रा है। हर कार्य पर नजर है, तो उन्हें सार्थक बनाएं। अगर काम पर किसी लक्ष्य की ओर बढ़ रहे थे, तो आज प्रगति और संभवतः सार्वजनिक मान्यता मिलेगी।' },
    { en: 'Authority figures look upon you favorably today. This is the time to pitch that idea, ask for that raise, or take on a leadership role. Your hard work is about to be recognized.',
      hi: 'आज अधिकारी वर्ग आपको अनुकूल दृष्टि से देखते हैं। यह उस विचार को प्रस्तुत करने, वेतन वृद्धि मांगने, या नेतृत्व की भूमिका लेने का समय है। आपकी मेहनत की पहचान होने वाली है।' },
  ],
  11: [
    { en: 'Social connections bring rewards today. Attend that gathering, respond to that message, or reconnect with an old friend. Your network is your net worth right now.',
      hi: 'आज सामाजिक संपर्क लाभ लाते हैं। उस मिलन में जाएं, उस संदेश का जवाब दें, या किसी पुराने दोस्त से दोबारा जुड़ें। अभी आपका नेटवर्क आपकी संपत्ति है।' },
    { en: 'Unexpected gains are possible today. Whether it is a bonus, a gift, or a new opportunity through a friend, keep your doors open. Group activities and teamwork are especially productive.',
      hi: 'आज अप्रत्याशित लाभ संभव है। बोनस हो, उपहार हो, या किसी दोस्त के माध्यम से नया अवसर, अपने दरवाजे खुले रखें। सामूहिक गतिविधियां और टीमवर्क विशेष रूप से उत्पादक हैं।' },
    { en: 'Your dreams and long-term aspirations get a boost today. Share your vision with people who support you. A friend may introduce you to someone who can help make those dreams real.',
      hi: 'आज आपके सपनों और दीर्घकालिक आकांक्षाओं को बढ़ावा मिलता है। अपना दृष्टिकोण उन लोगों के साथ साझा करें जो आपका समर्थन करते हैं। कोई दोस्त ऐसे व्यक्ति से मिलवा सकता है जो उन सपनों को साकार करने में मदद करे।' },
  ],
  12: [
    { en: 'Rest and reflection are essential today. Do not push too hard. Instead, take time for meditation, prayer, or simply being alone with your thoughts. Important insights come through stillness.',
      hi: 'आज आराम और चिंतन जरूरी है। बहुत जोर न लगाएं। इसके बजाय, ध्यान, प्रार्थना, या बस अपने विचारों के साथ अकेले रहने का समय लें। महत्वपूर्ण अंतर्दृष्टि शांति से आती है।' },
    { en: 'Behind-the-scenes work pays off today. Not everything needs to be visible. Focus on preparation, research, and inner work. A retreat or quiet day at home will recharge you more than socializing.',
      hi: 'आज पर्दे के पीछे का काम फल देता है। हर चीज को दिखने की जरूरत नहीं। तैयारी, शोध और आंतरिक कार्य पर ध्यान दें। एकांतवास या घर पर शांत दिन आपको सामाजिकता से ज्यादा रिचार्ज करेगा।' },
    { en: 'Your spiritual side is strong today. Pay attention to your dreams and intuitions. If something feels off, it probably is. Trust your inner voice over external opinions.',
      hi: 'आज आपका आध्यात्मिक पक्ष मजबूत है। अपने सपनों और अंतर्ज्ञान पर ध्यान दें। अगर कुछ गलत लगता है, तो शायद है। बाहरी राय से ज्यादा अपनी आंतरिक आवाज पर भरोसा करें।' },
  ],
};

// ── Planet influence modifiers (added to the main advice) ──────
export const planetModifiers = {
  benefic: [
    { en: 'Planetary alignments strongly support your efforts today. Take bold action where you see opportunity.',
      hi: 'ग्रह स्थिति आज आपके प्रयासों का पूरा समर्थन करती है। जहां अवसर दिखे वहां साहसिक कदम उठाएं।' },
    { en: 'The stars are in your favor. Good fortune and positive energy surround your decisions today.',
      hi: 'सितारे आपके पक्ष में हैं। सौभाग्य और सकारात्मक ऊर्जा आज आपके निर्णयों को घेरे हुए है।' },
    { en: 'A favorable cosmic window opens for you today. Make the most of it by acting on your top priority.',
      hi: 'आज आपके लिए एक अनुकूल ब्रह्मांडीय खिड़की खुलती है। अपनी सबसे बड़ी प्राथमिकता पर काम करके इसका लाभ उठाएं।' },
  ],
  malefic: [
    { en: 'Proceed with caution in important decisions today. Double-check details before committing to anything new.',
      hi: 'आज महत्वपूर्ण निर्णयों में सावधानी बरतें। कुछ भी नया करने से पहले विवरण दोबारा जांचें।' },
    { en: 'Minor obstacles may slow your progress today, but they are temporary. Stay patient and avoid confrontations.',
      hi: 'आज छोटी बाधाएं आपकी प्रगति धीमी कर सकती हैं, लेकिन ये अस्थायी हैं। धैर्य रखें और टकराव से बचें।' },
    { en: 'Today calls for extra patience. Do not rush into decisions you cannot reverse. Sleep on it if you can.',
      hi: 'आज अतिरिक्त धैर्य की जरूरत है। ऐसे निर्णयों में जल्दबाजी न करें जिन्हें पलटा नहीं जा सकता। अगर संभव हो तो एक रात सोचें।' },
  ],
  neutral: [
    { en: 'A balanced day ahead. Steady progress is better than dramatic moves. Stay consistent with your routine.',
      hi: 'एक संतुलित दिन आगे है। नाटकीय कदमों से बेहतर है स्थिर प्रगति। अपनी दिनचर्या के अनुरूप बने रहें।' },
    { en: 'Neither strong winds nor calm seas today. Use this stable energy to catch up on pending work and strengthen your foundation.',
      hi: 'आज न तेज हवाएं हैं न शांत समुद्र। इस स्थिर ऊर्जा का उपयोग लंबित काम निपटाने और अपनी नींव मजबूत करने में करें।' },
    { en: 'A practical day for getting things done. No dramatic highs or lows expected. Focus on execution over planning.',
      hi: 'काम निपटाने का व्यावहारिक दिन। कोई नाटकीय उतार-चढ़ाव अपेक्षित नहीं। योजना बनाने से ज्यादा क्रियान्वयन पर ध्यान दें।' },
  ],
};

// ── Planet names (kept for internal use, NOT shown to users) ───
export const planetNames = {
  sun: { en: 'Sun', hi: 'सूर्य' }, moon: { en: 'Moon', hi: 'चंद्रमा' },
  mars: { en: 'Mars', hi: 'मंगल' }, mercury: { en: 'Mercury', hi: 'बुध' },
  jupiter: { en: 'Jupiter', hi: 'बृहस्पति' }, venus: { en: 'Venus', hi: 'शुक्र' },
  saturn: { en: 'Saturn', hi: 'शनि' }, rahu: { en: 'Rahu', hi: 'राहु' }, ketu: { en: 'Ketu', hi: 'केतु' },
};

export const planetNature = {
  sun: 'neutral', moon: 'benefic', mars: 'malefic', mercury: 'neutral',
  jupiter: 'benefic', venus: 'benefic', saturn: 'malefic', rahu: 'malefic', ketu: 'malefic',
};

export const beneficHouses = [1, 2, 4, 5, 7, 9, 10, 11];
export const maleficHouses = [3, 6, 8, 12];

// ── House themes (internal reference) ─────────────────────────
export const houseThemes = {
  1: { en: 'self', hi: 'स्वयं' }, 2: { en: 'finances', hi: 'वित्त' },
  3: { en: 'communication', hi: 'संचार' }, 4: { en: 'home', hi: 'घर' },
  5: { en: 'creativity', hi: 'रचनात्मकता' }, 6: { en: 'health', hi: 'स्वास्थ्य' },
  7: { en: 'relationships', hi: 'रिश्ते' }, 8: { en: 'transformation', hi: 'परिवर्तन' },
  9: { en: 'fortune', hi: 'भाग्य' }, 10: { en: 'career', hi: 'करियर' },
  11: { en: 'gains', hi: 'लाभ' }, 12: { en: 'spirituality', hi: 'आध्यात्मिकता' },
};

// ── Panchang names ─────────────────────────────────────────────
export const tithiNames = [
  { en: 'Pratipada', hi: 'प्रतिपदा' }, { en: 'Dwitiya', hi: 'द्वितीया' },
  { en: 'Tritiya', hi: 'तृतीया' }, { en: 'Chaturthi', hi: 'चतुर्थी' },
  { en: 'Panchami', hi: 'पंचमी' }, { en: 'Shashthi', hi: 'षष्ठी' },
  { en: 'Saptami', hi: 'सप्तमी' }, { en: 'Ashtami', hi: 'अष्टमी' },
  { en: 'Navami', hi: 'नवमी' }, { en: 'Dashami', hi: 'दशमी' },
  { en: 'Ekadashi', hi: 'एकादशी' }, { en: 'Dwadashi', hi: 'द्वादशी' },
  { en: 'Trayodashi', hi: 'त्रयोदशी' }, { en: 'Chaturdashi', hi: 'चतुर्दशी' },
  { en: 'Purnima', hi: 'पूर्णिमा' },
  { en: 'Pratipada', hi: 'प्रतिपदा' }, { en: 'Dwitiya', hi: 'द्वितीया' },
  { en: 'Tritiya', hi: 'तृतीया' }, { en: 'Chaturthi', hi: 'चतुर्थी' },
  { en: 'Panchami', hi: 'पंचमी' }, { en: 'Shashthi', hi: 'षष्ठी' },
  { en: 'Saptami', hi: 'सप्तमी' }, { en: 'Ashtami', hi: 'अष्टमी' },
  { en: 'Navami', hi: 'नवमी' }, { en: 'Dashami', hi: 'दशमी' },
  { en: 'Ekadashi', hi: 'एकादशी' }, { en: 'Dwadashi', hi: 'द्वादशी' },
  { en: 'Trayodashi', hi: 'त्रयोदशी' }, { en: 'Chaturdashi', hi: 'चतुर्दशी' },
  { en: 'Amavasya', hi: 'अमावस्या' },
];

export const pakshaNames = {
  shukla: { en: 'Shukla', hi: 'शुक्ल' },
  krishna: { en: 'Krishna', hi: 'कृष्ण' },
};

export const nakshatraNames = [
  { en: 'Ashwini', hi: 'अश्विनी' }, { en: 'Bharani', hi: 'भरणी' },
  { en: 'Krittika', hi: 'कृत्तिका' }, { en: 'Rohini', hi: 'रोहिणी' },
  { en: 'Mrigashira', hi: 'मृगशिरा' }, { en: 'Ardra', hi: 'आर्द्रा' },
  { en: 'Punarvasu', hi: 'पुनर्वसु' }, { en: 'Pushya', hi: 'पुष्य' },
  { en: 'Ashlesha', hi: 'आश्लेषा' }, { en: 'Magha', hi: 'मघा' },
  { en: 'Purva Phalguni', hi: 'पूर्व फाल्गुनी' }, { en: 'Uttara Phalguni', hi: 'उत्तर फाल्गुनी' },
  { en: 'Hasta', hi: 'हस्त' }, { en: 'Chitra', hi: 'चित्रा' },
  { en: 'Swati', hi: 'स्वाती' }, { en: 'Vishakha', hi: 'विशाखा' },
  { en: 'Anuradha', hi: 'अनुराधा' }, { en: 'Jyeshtha', hi: 'ज्येष्ठा' },
  { en: 'Moola', hi: 'मूल' }, { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा' },
  { en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा' }, { en: 'Shravana', hi: 'श्रवण' },
  { en: 'Dhanishta', hi: 'धनिष्ठा' }, { en: 'Shatabhisha', hi: 'शतभिषा' },
  { en: 'Purva Bhadrapada', hi: 'पूर्व भाद्रपद' }, { en: 'Uttara Bhadrapada', hi: 'उत्तर भाद्रपद' },
  { en: 'Revati', hi: 'रेवती' },
];

export const yogaNames = [
  { en: 'Vishkumbha', hi: 'विष्कम्भ' }, { en: 'Priti', hi: 'प्रीति' },
  { en: 'Ayushman', hi: 'आयुष्मान' }, { en: 'Saubhagya', hi: 'सौभाग्य' },
  { en: 'Shobhana', hi: 'शोभन' }, { en: 'Atiganda', hi: 'अतिगण्ड' },
  { en: 'Sukarma', hi: 'सुकर्मा' }, { en: 'Dhriti', hi: 'धृति' },
  { en: 'Shula', hi: 'शूल' }, { en: 'Ganda', hi: 'गण्ड' },
  { en: 'Vriddhi', hi: 'वृद्धि' }, { en: 'Dhruva', hi: 'ध्रुव' },
  { en: 'Vyaghata', hi: 'व्याघात' }, { en: 'Harshana', hi: 'हर्षण' },
  { en: 'Vajra', hi: 'वज्र' }, { en: 'Siddhi', hi: 'सिद्धि' },
  { en: 'Vyatipata', hi: 'व्यतीपात' }, { en: 'Variyana', hi: 'वरीयान' },
  { en: 'Parigha', hi: 'परिघ' }, { en: 'Shiva', hi: 'शिव' },
  { en: 'Siddha', hi: 'सिद्ध' }, { en: 'Sadhya', hi: 'साध्य' },
  { en: 'Shubha', hi: 'शुभ' }, { en: 'Shukla', hi: 'शुक्ल' },
  { en: 'Brahma', hi: 'ब्रह्म' }, { en: 'Indra', hi: 'इन्द्र' },
  { en: 'Vaidhriti', hi: 'वैधृति' },
];

export const karanaNames = [
  { en: 'Bava', hi: 'बव' }, { en: 'Balava', hi: 'बालव' },
  { en: 'Kaulava', hi: 'कौलव' }, { en: 'Taitila', hi: 'तैतिल' },
  { en: 'Garaja', hi: 'गरज' }, { en: 'Vanija', hi: 'वणिज' },
  { en: 'Vishti', hi: 'विष्टि' }, { en: 'Shakuni', hi: 'शकुनि' },
  { en: 'Chatushpada', hi: 'चतुष्पद' }, { en: 'Nagava', hi: 'नाग' },
  { en: 'Kimstughna', hi: 'किंस्तुघ्न' },
];

export const varNames = [
  { en: 'Sunday', hi: 'रविवार' }, { en: 'Monday', hi: 'सोमवार' },
  { en: 'Tuesday', hi: 'मंगलवार' }, { en: 'Wednesday', hi: 'बुधवार' },
  { en: 'Thursday', hi: 'गुरुवार' }, { en: 'Friday', hi: 'शुक्रवार' },
  { en: 'Saturday', hi: 'शनिवार' },
];

// ── Helper ─────────────────────────────────────────────────────
export function fillTemplate(template, vars) {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replaceAll(`{${key}}`, value);
  }
  return result;
}

// ── Main guidance builder ──────────────────────────────────────
export function buildGuidance(lang, signName, moonHouse, dominantPlanet, tone, seed) {
  // Pick life advice based on Moon house
  const adviceList = moonAdvice[moonHouse];
  const adviceIdx = seed % adviceList.length;
  const mainAdvice = adviceList[adviceIdx][lang];

  // Pick planet modifier
  const modList = planetModifiers[tone] || planetModifiers.neutral;
  const modIdx = (seed + moonHouse) % modList.length;
  const modifier = modList[modIdx][lang];

  return `${mainAdvice} ${modifier}`;
}
